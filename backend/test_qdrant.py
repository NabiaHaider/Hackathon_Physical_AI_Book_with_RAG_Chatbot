from qdrant_client import QdrantClient
from qdrant_client.models import Distance, VectorParams

try:
    client = QdrantClient(host="localhost") # Use a dummy host, just to instantiate
    print("QdrantClient instantiated successfully.")
    # Check for the search method
    if hasattr(client, 'search'):
        print("QdrantClient has 'search' method.")
    else:
        print("QdrantClient DOES NOT have 'search' method.")
        print("\nAvailable methods on QdrantClient object:")
        for method_name in dir(client):
            if callable(getattr(client, method_name)) and not method_name.startswith('_'):
                print(f"- {method_name}")
except Exception as e:
    print(f"Error instantiating QdrantClient: {e}")