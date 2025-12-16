
import os
from dotenv import load_dotenv
from qdrant_client import QdrantClient

# Load environment variables from .env file
load_dotenv()

# Get Qdrant credentials from environment variables
qdrant_url = os.getenv("QDRANT_URL")
qdrant_api_key = os.getenv("QDRANT_API_KEY")

# Initialize Qdrant client
qdrant_client = QdrantClient(
    url=qdrant_url,
    api_key=qdrant_api_key,
)

COLLECTION_NAME = "ai-book-rag"

# Get collection info
collection_info = qdrant_client.get_collection(collection_name=COLLECTION_NAME)

# Print the number of points in the collection
print(f"Number of points in collection '{COLLECTION_NAME}': {collection_info.points_count}")
