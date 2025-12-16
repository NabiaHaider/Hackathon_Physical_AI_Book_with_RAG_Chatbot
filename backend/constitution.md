# RAG Chatbot Backend Constitution

This document defines the non-negotiable rules and operating boundaries for the RAG Chatbot backend.

## Core Chatbot Rules

- The chatbot MUST answer strictly from the provided book content.
- No hallucinations are allowed.
- If information is not found in the retrieved context, the bot MUST respond with “Not found in the book.”

## Backend Constraints

- The entire backend logic MUST reside solely within `backend/main.py`.
- The backend MUST use FastAPI.
- Cohere MUST be used exclusively for embeddings and text generation.
- Qdrant Cloud MUST be used as the vector store.
- No OpenAI usage is permitted.

## Security Rules

- API keys and sensitive credentials MUST NOT be exposed client-side.
- All sensitive configurations and credentials MUST be managed via environment variables only.

## Query Behavior Rules

- The chatbot MUST support both general queries and queries based on user-selected text.
- When user-selected text is provided, it MUST be treated as the primary context for the query.

## Citation Rules

- Responses SHOULD include source references from the book content whenever possible.

## Explicit Non-Goals

- No authentication mechanisms will be implemented.
- No model fine-tuning will be performed.
- No advanced analytics or logging beyond basic debugging will be integrated.
