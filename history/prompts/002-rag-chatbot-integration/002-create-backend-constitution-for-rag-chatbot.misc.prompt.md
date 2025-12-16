---
id: 002
title: Create Backend Constitution for RAG Chatbot
stage: misc
date: 2025-12-13
surface: agent
model: gemini-pro
feature: 002-rag-chatbot-integration
branch: {{BRANCH}}
user: NabiaHaider
command: You are working inside an existing repository.

CURRENT STATE:
- A folder named `backend/` already exists at the project root.
- Inside `backend/`, there is a file: `spec.md` (RAG chatbot specification).

TASK:
1. Create a new file named `constitution.md` INSIDE the `backend/` folder ONLY.
2. Do NOT create or modify any files outside `backend/`.
3. Do NOT rename or move `spec.md`.

PURPOSE OF constitution.md:
- This file defines the NON-NEGOTIABLE RULES and OPERATING BOUNDARIES
  for the RAG Chatbot backend.

CONTENT REQUIREMENTS for `backend/constitution.md`:
- Clearly state that:
  - The chatbot MUST answer strictly from book content.
  - No hallucinations are allowed.
  - If information is not found in retrieved context, the bot must say
    “Not found in the book.”
- Backend constraints:
  - Entire backend logic lives in `backend/main.py` only.
  - FastAPI backend.
  - Cohere ONLY for embeddings and generation.
  - Qdrant Cloud as vector store.
  - No OpenAI usage.
- Security rules:
  - No API keys exposed client-side.
  - Environment variables only.
- Query behavior rules:
  - Support general queries and user-selected text queries.
  - Selected text must be treated as primary context.
- Citation rules:
  - Responses should include source references when possible.
- Explicit NON-GOALS:
  - No authentication.
  - No fine-tuning.
  - No analytics.

OUTPUT RULES:
- Only create `backend/constitution.md`.
- Do NOT generate any code.
- Do NOT modify existing files.
- Return the full contents of `constitution.md`.

IMPORTANT:
Follow the specification in `backend/spec.md` exactly.
If there is any ambiguity, prefer safety, grounding, and strictness.
labels: [backend, constitution, rag, chatbot]
links:
  spec: specs/002-rag-chatbot-integration/spec.md
  ticket: null
  adr: null
  pr: null
files:
 - backend/constitution.md
tests:
 - none
---

## Prompt

You are working inside an existing repository.

CURRENT STATE:
- A folder named `backend/` already exists at the project root.
- Inside `backend/`, there is a file: `spec.md` (RAG chatbot specification).

TASK:
1. Create a new file named `constitution.md` INSIDE the `backend/` folder ONLY.
2. Do NOT create or modify any files outside `backend/`.
3. Do NOT rename or move `spec.md`.

PURPOSE OF constitution.md:
- This file defines the NON-NEGOTIABLE RULES and OPERATING BOUNDARIES
  for the RAG Chatbot backend.

CONTENT REQUIREMENTS for `backend/constitution.md`:
- Clearly state that:
  - The chatbot MUST answer strictly from book content.
  - No hallucinations are allowed.
  - If information is not found in retrieved context, the bot must say
    “Not found in the book.”
- Backend constraints:
  - Entire backend logic lives in `backend/main.py` only.
  - FastAPI backend.
  - Cohere ONLY for embeddings and generation.
  - Qdrant Cloud as vector store.
  - No OpenAI usage.
- Security rules:
  - No API keys exposed client-side.
  - Environment variables only.
- Query behavior rules:
  - Support general queries and user-selected text queries.
  - Selected text must be treated as primary context.
- Citation rules:
  - Responses should include source references when possible.
- Explicit NON-GOALS:
  - No authentication.
  - No fine-tuning.
  - No analytics.

OUTPUT RULES:
- Only create `backend/constitution.md`.
- Do NOT generate any code.
- Do NOT modify existing files.
- Return the full contents of `constitution.md`.

IMPORTANT:
Follow the specification in `backend/spec.md` exactly.
If there is any ambiguity, prefer safety, grounding, and strictness.

## Response snapshot

I have successfully created the `backend/constitution.md` file with the specified content. The content of the file defines the non-negotiable rules and operating boundaries for the RAG Chatbot backend.

## Outcome

- ✅ Impact: Created the backend constitution document for the RAG Chatbot.
- 🧪 Tests: none
- 📁 Files: backend/constitution.md
- 🔁 Next prompts: none
- 🧠 Reflection: Successfully created a constitution file for the backend with detailed rules and constraints.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): none
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): none
