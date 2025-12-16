<!-- ---
id: 002
title: Update Project Constitution with RAG Chatbot Details
stage: constitution
date: 2025-12-13
surface: agent
model: gemini-pro
feature: none
branch: {{BRANCH}}
user: NabiaHaider
command: /sp.constitution
labels: [constitution, rag, chatbot]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 - none
--- -->

## Prompt

/sp.constitution 

Project: Integrating RAG Chatbot into AI/Spec-Driven Book Project (Phase 2)
Core principles:

Seamless integration of RAG chatbot with the existing Docusaurus book deployed on GitHub Pages
Accurate and context-aware responses based solely on the book's content, including handling user-selected text for targeted queries
Use of Cohere API for language model capabilities instead of OpenAI, ensuring compatibility with all other specified tools
Adherence to spec-driven development using Spec-Kit Plus and Claude Code for structured, verifiable implementation
Focus on security, scalability, and user privacy in chatbot interactions

Key standards:

Technology stack: Cohere API key for embeddings and generation, FastAPI for backend API, Neon Serverless Postgres for database management, Qdrant Cloud Free Tier for vector storage and retrieval
Code quality: Modular, well-documented code with unit tests; follow PEP 8 for Python style
Integration: Embed chatbot UI (e.g., via iframe or custom component) into Docusaurus pages without disrupting static site functionality
Query handling: Support general book queries and specific queries on user-selected text; implement RAG pipeline with retrieval from Qdrant and generation via Cohere
Error handling: Graceful degradation for API failures, rate limits, or invalid inputs
Documentation: Include setup instructions, API endpoints, and usage examples in the project repo

Constraints:

Use Cohere API exclusively for AI operations; no OpenAI dependencies
Leverage free tiers: Qdrant Cloud Free, Neon Serverless Free plan
Hosting: Backend (FastAPI) deployable to free platforms like Vercel or Render; frontend integration compatible with GitHub Pages
No additional paid services beyond specified APIs
Development tools: Limited to Spec-Kit Plus, Claude Code, and open-source libraries
Performance: Response time under 5 seconds for typical queries

Success criteria:

Chatbot successfully embedded and functional in the live Docusaurus site
Accurate answers to 95% of test queries based on book content (verified through manual testing)
Handles user-selected text queries correctly, retrieving and generating responses from the selected context
Zero critical security vulnerabilities (e.g., no exposed API keys, proper authentication)
Passes integration tests: End-to-end flow from user input to response
Project repo updated with all code, docs, and deployment scripts

## Response snapshot

I have updated the project constitution at `.specify/memory/constitution.md` to version 3.0.0. This major update reflects the new focus on integrating a RAG chatbot, including new principles, standards, and constraints.

The ratification date is marked as a TODO.

You can commit this change with a message like: `docs: amend constitution to v3.0.0 (RAG chatbot integration)`

## Outcome

- ✅ Impact: Updated the project constitution to reflect the integration of a RAG chatbot.
- 🧪 Tests: none
- 📁 Files: .specify/memory/constitution.md
- 🔁 Next prompts: none
- 🧠 Reflection: The constitution was updated to reflect the new direction of the project.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): none
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): none
