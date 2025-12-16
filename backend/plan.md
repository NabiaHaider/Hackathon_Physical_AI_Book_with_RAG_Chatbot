# RAG Chatbot Implementation Plan

This document outlines the architectural plan for implementing the RAG Chatbot backend.

## Phase 1: Research

This phase focuses on a research-concurrent approach to address key unknowns and experimental tuning parameters.

### Research Topics:

1.  **Chunking and Overlap Strategy:**
    *   **To Research:** Optimal chunk size and overlap for Markdown content to preserve context without excessive duplication.
    *   **Experimental Decision:** The final values will be determined experimentally based on retrieval quality. Initial exploration will be with a chunk size of 512 tokens and an overlap of 50 tokens.

2.  **Top-k Retrieval Tuning:**
    *   **To Research:** The impact of retrieving a varying number of document chunks (`top-k`) on answer quality and latency.
    *   **Experimental Decision:** Start with `k=5` and tune based on the relevance of retrieved context and the quality of generated answers.

3.  **Citation Density and Formatting:**
    *   **To Research:** Best practices for presenting citations in a chatbot interface.
    *   **Experimental Decision:** Experiment with different citation styles (e.g., inline vs. end-of-response, hyperlinks to source sections) to find the most user-friendly approach.

4.  **Prompt Engineering for Grounding:**
    *   **To Research:** Techniques for constructing prompts for the Cohere generation model that strictly enforce grounding to the provided context.
    *   **Experimental Decision:** Iterate on prompt templates to find the optimal balance between strictness and generating helpful, coherent responses.

## Phase 2: Foundation (Architecture & Decisions)

This phase lays out the core architecture and key design decisions for the backend.

### 1. Architecture Sketch

The entire backend will be contained within `backend/main.py` and will follow this logical flow:

1.  **Markdown Ingestion:**
    *   A one-time ingestion script (or a dedicated FastAPI endpoint for simplicity) will scan the Docusaurus content directories for Markdown files.
    *   Each file will be read, and its content will be parsed to extract text.

2.  **Chunking:**
    *   The extracted text will be divided into smaller, overlapping chunks based on the decided-upon chunking strategy.

3.  **Embedding and Storage:**
    *   Each chunk will be converted into a vector embedding using the Cohere `embed-english-v3.0` model with `input_type="search_document"`.
    *   The embeddings and the corresponding text chunks will be stored in a Qdrant collection.

4.  **Query-time Retrieval:**
    *   When a user query is received, the query text will be embedded using the same Cohere model with `input_type="search_query"`.
    *   This query embedding will be used to search the Qdrant collection for the `top-k` most similar document chunks.

5.  **RAG Prompt Construction:**
    *   The retrieved document chunks will be combined with the user's query to construct a detailed prompt for the Cohere generation model.
    *   The prompt will explicitly instruct the model to answer the query based *only* on the provided context.

6.  **Generation:**
    *   The constructed prompt will be sent to the Cohere `command-r` model via the Chat endpoint.
    *   The model will generate an answer based on the provided context.

7.  **Citation Attachment:**
    *   If possible, metadata stored with the chunks (e.g., source file name) will be used to attach citations to the generated response.

8.  **Response Delivery:**
    *   The final answer, along with any citations, will be returned as a JSON response from the FastAPI backend.

**Frontend-Backend Communication:**

*   The static Docusaurus frontend will communicate with the FastAPI backend using the `fetch` API.
*   To avoid CORS issues and to keep the backend URL private, a simple proxy can be set up using GitHub Pages' capabilities or a lightweight cloud function if necessary. However, for initial development, we will assume the backend is publicly accessible and rely on FastAPI's CORS middleware.

### 2. Internal Section Structure of `backend/main.py`

The single `backend/main.py` file will be structured as follows to maintain clarity:

1.  **Imports:** All necessary library imports at the top.
2.  **Configuration & Environment Loading:**
    *   Load API keys and other configuration from environment variables using `pydantic-settings`.
3.  **Client Initialization:**
    *   Initialize Cohere and Qdrant clients.
4.  **Database Connection (Optional):**
    *   If Neon Postgres is used, set up the database connection and session management here.
5.  **Pydantic Models:**
    *   Define Pydantic models for API request and response bodies.
6.  **Ingestion Logic:**
    *   Functions for reading, chunking, and embedding the Docusaurus content.
7.  **RAG Core Logic:**
    *   Functions for query embedding, searching Qdrant, and constructing the generation prompt.
8.  **Generation & Citation Logic:**
    *   Functions for interacting with the Cohere generation model and formatting citations.
9.  **FastAPI Application & Routes:**
    *   The main FastAPI application instance.
    *   API routes for handling chatbot queries and potentially for triggering ingestion.
10. **Health Checks:**
    *   A simple `/health` endpoint to verify that the service is running.

**Rationale for this order:** This structure follows a top-down approach, from configuration and initialization to the core application logic and finally the API interface. This logical grouping of related functionality makes the single file more manageable and easier to navigate.

#### Neon Postgres Usage
- **Purpose:** Optional storage for minimal, non-critical data.
- **Data Stored:**
  - **Chat History (optional):** For potential future use in conversational memory. This is not a core requirement and will be implemented only if time permits.
  - **Feedback (optional):** A simple table to store user feedback on answer quality (e.g., thumbs up/down).
- **Non-Goals:** Neon Postgres will **NOT** be used for authentication, session management, or storing any user-identifiable information.

### 3. Detailed Query Flows

#### Selected-Text Query Flow
1.  The frontend sends the user's query along with the selected text to the backend.
2.  The backend treats the selected text as the **primary and sole context**.
3.  Vector retrieval from Qdrant is **skipped**.
4.  The RAG prompt is constructed using only the user's query and the provided selected text.
5.  If the generation model cannot answer the query from the given context, it will return the standard "Not found in the book" response, as per the constitution.

### 4. Decisions Needing Documentation

| Decision | Options | Pros & Cons | Chosen Option | Reasoning |
| :--- | :--- | :--- | :--- | :--- |
| **Chunk Size & Overlap** | - Small chunks (e.g., 256 tokens)<br>- Large chunks (e.g., 1024 tokens) | - Small: Better for specific facts, may lose context.<br>- Large: Better context, may introduce noise. | Start with 512 tokens and 50 overlap | A balanced starting point for experimentation. |
| **Vector Similarity Metric** | - Cosine Similarity<br>- Dot Product | - Cosine is good for semantic similarity.<br>- Dot Product can be faster. | Cosine Similarity | Industry standard for semantic search with normalized embeddings. |
| **Top-k Retrieval Count** | - Low k (e.g., 3)<br>- High k (e.g., 10) | - Low k: Faster, less context.<br>- High k: More context, higher latency. | Start with k=5 | A reasonable number of chunks to provide sufficient context without overwhelming the generation model. |
| **Selected-text Fallback Logic** | - Always fall back to full search<br>- Fall back only if no answer is found | - Always: More comprehensive.<br>- Only if no answer: Faster. | Fall back only if no answer is found | Prioritizes user's specific context and reduces latency. |
| **Prompt Strictness** | - Very strict prompt<br>- More flexible prompt | - Strict: Reduces hallucinations.<br>- Flexible: More conversational answers. | Very strict prompt | Aligns with the constitution's rule of no hallucinations. |
| **Citation Formatting** | - Inline citations<br>- End-of-response list | - Inline: Direct mapping.<br>- End-of-response: Cleaner text flow. | End-of-response list | Less intrusive for the reader. |

#### APA Citation Style
- Citation formatting will follow an APA-inspired style, as defined in `constitution.md`. This means including the author, year, and a reference to the chapter or section of the book.

### 5. Performance and Security

#### Latency Optimization (<5 seconds)
- **Limit Top-k:** Keep the number of retrieved documents low (k=3 to 5) to reduce the amount of text the language model has to process.
- **Prompt Length Limits:** Enforce a maximum length for user queries to prevent overly long prompts.
- **Asynchronous Operations:** Use FastAPI's `async` capabilities to handle I/O-bound operations (API calls to Cohere and Qdrant) concurrently.

#### Security & Secret Handling
- **Environment Variables:** All API keys (Cohere, Qdrant, Neon) will be loaded exclusively from environment variables.
- **No Hardcoded Secrets:** No secrets will be hardcoded in `main.py` or any other file.
- **Logging:** No secrets will be logged.
- **CORS:** FastAPI's CORS middleware will be configured to only allow requests from the specific GitHub Pages domain to prevent unauthorized frontend applications from interacting with the backend.

## Phase 3: Analysis (Testing & Validation)

### Testing & Validation Strategy

1.  **Manual Test Cases:**
    *   Create a spreadsheet of question-answer pairs based on the book content.
    *   Include questions that require synthesis of information from multiple sections.
    *   Include questions that are explicitly *not* answered in the book to test the "Not found in the book" response.

2.  **Adversarial Tests:**
    *   Craft prompts designed to induce hallucinations (e.g., asking about opinions or future events).
    *   Test with very long and very short queries.
    *   Test with queries that are intentionally ambiguous.

3.  **Failure Behavior Testing:**
    *   Verify that if the Cohere or Qdrant APIs fail, the chatbot returns a graceful error message.
    *   Verify that if the retrieved context does not contain the answer, the chatbot responds with "Not found in the book."

4.  **Grounding Verification:**
    *   For each generated answer, manually review the retrieved context to ensure the answer is fully supported by it.

## Phase 4: Synthesis

This plan provides a comprehensive roadmap for developing the RAG chatbot backend. By following the outlined architecture, research approach, and testing strategy, we can deliver a high-quality, reliable, and secure chatbot that adheres to the project's strict constraints and success criteria. The next step is to begin the implementation, starting with the ingestion pipeline.
