from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from pydantic_settings import BaseSettings
import cohere
from qdrant_client import QdrantClient, models
from typing import Optional, List
import os
from fastapi.middleware.cors import CORSMiddleware

# --- Settings ---
class Settings(BaseSettings):
    """Loads settings from environment variables."""
    cohere_api_key: str
    qdrant_api_key: str
    qdrant_url: str = "https://0d3a1926-6a0a-4e07-b2a3-3086aefccab6.us-east4-0.gcp.cloud.qdrant.io"

    class Config:
        env_file = ".env"
        extra = 'ignore'

# --- Pydantic Models ---
class Query(BaseModel):
    """Request model for querying the chatbot."""
    question: str
    selected_text: Optional[str] = None

class Citation(BaseModel):
    """Response model for a single citation."""
    source: str

class Response(BaseModel):
    """Response model for the chatbot's answer."""
    answer: str
    citations: List[Citation]

# --- Initialization ---
settings = Settings()
app = FastAPI()

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, restrict this to the GitHub Pages domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

co = cohere.Client(settings.cohere_api_key)
qdrant_client = QdrantClient(
    url=settings.qdrant_url, 
    api_key=settings.qdrant_api_key,
)


COLLECTION_NAME = "ai-book-rag"

# --- API Endpoints ---
@app.post("/ingest")
def ingest_docs():
    """
    Reads all markdown files from the docs/ directory, chunks them,
    and stores the embeddings in Qdrant.
    """
    docs_path = "../docs"
    if not os.path.exists(docs_path):
        raise HTTPException(status_code=404, detail="Docs directory not found.")

    all_chunks = []
    payloads = []
    try:
        for filename in os.listdir(docs_path):
            if filename.endswith(".md"):
                with open(os.path.join(docs_path, filename), "r", encoding="utf-8") as f:
                    text = f.read()
                
                CHUNK_SIZE = 512
                chunks = [text[i:i + CHUNK_SIZE] for i in range(0, len(text), CHUNK_SIZE)]
                all_chunks.extend(chunks)
                payloads.extend([{"text": chunk, "source": filename} for chunk in chunks])

        qdrant_client.recreate_collection(
            collection_name=COLLECTION_NAME,
            vectors_config=models.VectorParams(size=1024, distance=models.Distance.COSINE),
        )

        response = co.embed(texts=all_chunks, model="embed-english-v3.0", input_type="search_document")
        
        qdrant_client.upsert(
            collection_name=COLLECTION_NAME,
            points=models.Batch(
                ids=list(range(len(all_chunks))),
                vectors=response.embeddings,
                payloads=payloads,
            ),
            wait=True,
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    return {"status": "ok", "chunks_ingested": len(all_chunks)}

@app.get("/")
def read_root():
    """A simple endpoint to verify that the service is running."""
    return {"Hello": "World"}

@app.get("/health")
def health_check():
    """A simple health check endpoint."""
    return {"status": "ok"}

@app.post("/query", response_model=Response)
def query_chatbot(query: Query):
    """
    Queries the chatbot with a user's query and optional selected text,
    and returns an answer based on the book's content.
    """
    citations = []
    try:
        # 1. Get Context
        if query.selected_text:
            context = query.selected_text
            citations = [Citation(source="User-selected text")]
        else:
            try:
                query_embedding = co.embed(
                    texts=[query.question], 
                    model="embed-english-v3.0", 
                    input_type="search_query"
                ).embeddings[0]
            except Exception as e:
                print(f"Error during Cohere embedding: {e}")
                raise HTTPException(status_code=500, detail=f"Cohere embedding failed: {e}")

            try:
                search_result = qdrant_client.query_points(
                    collection_name=COLLECTION_NAME,
                    query=query_embedding,
                    limit=5,
                    with_payload=True,
                )
                if not search_result.points:
                    raise HTTPException(status_code=404, detail="No relevant context found. Did you run /ingest?")
                context = " ".join([hit.payload["text"] for hit in search_result.points])
                citations = [Citation(source=hit.payload["source"]) for hit in search_result.points]
            except Exception as e:
                print(f"Error during Qdrant search: {e}")
                raise HTTPException(status_code=500, detail=f"Qdrant search failed: {e}")

        # 2. Generate Response
        prompt = f"""
You are a strict RAG-based assistant.
Answer the user's question using ONLY the context below.
If the answer is not present in the context, reply exactly:
"Not found in the book."

Context:
{context}

Question:
{query.question}
"""
        
        try:
            response = co.chat(message=prompt, model="command-nightly")
        except Exception as e:
            print(f"Error during Cohere chat: {e}")
            raise HTTPException(status_code=500, detail=f"Cohere chat failed: {e}")

    except HTTPException:
        # Re-raise HTTPException to ensure FastAPI handles it
        raise
    except Exception as e:
        print(f"An unexpected error occurred in query_chatbot: {e}")
        raise HTTPException(status_code=500, detail=f"An unexpected error occurred: {e}")

    return Response(answer=response.text, citations=citations)





