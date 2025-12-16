---
id: 003
title: Create Implementation Plan for RAG Chatbot
stage: plan
date: 2025-12-13
surface: agent
model: gemini-pro
feature: 002-rag-chatbot-integration
branch: {{BRANCH}}
user: NabiaHaider
command: /sp.plan
labels: ["plan", "rag", "chatbot", "architecture"]
links:
  spec: specs/002-rag-chatbot-integration/spec.md
  plan: specs/002-rag-chatbot-integration/plan.md
  ticket: null
  adr: null
  pr: null
files:
 - specs/002-rag-chatbot-integration/plan.md
tests:
 - none
---

## Prompt

/sp.plan

You are an expert software architect and AI systems planner.

PROJECT:
Integrating a Retrieval-Augmented Generation (RAG) Chatbot
into a Spec-Driven AI Book Project (Phase 2).

This is a PLANNING TASK ONLY — do NOT generate code.

────────────────────────────────────
REFERENCE FILES (ALREADY EXIST)
────────────────────────────────────
1. backend/spec.md
2. backend/constitution.md

You MUST strictly follow both documents.
If there is any conflict, constitution.md overrides everything.

────────────────────────────────────
ABSOLUTE CONSTRAINTS (NON-NEGOTIABLE)
────────────────────────────────────
- Entire backend will be implemented in ONE FILE ONLY:
  backend/main.py
- No other backend Python files.
- No backend subfolders.
- Backend framework: FastAPI
- RAG stack:
  - Cohere ONLY (embeddings + generation)
  - Qdrant Cloud (Free Tier)
  - Neon Serverless Postgres (optional metadata/session storage)
- No OpenAI usage.
- No client-side secrets.
- Backend will be consumed by a STATIC GitHub Pages frontend.

────────────────────────────────────
INFRASTRUCTURE DETAILS (FOR PLANNING CONTEXT)
────────────────────────────────────
Qdrant:
- Cluster ID: 0d3a1926-6a0a-4e07-b2a3-3086aefccab6
- URL: https://0d3a1926-6a0a-4e07-b2a3-3086aefccab6.us-east4-0.gcp.cloud.qdrant.io
- API Key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3MiOiJtIn0.rZldtwIMYqqbFhrNkQM_hI3_ABcGbk8ZAThXxJHyAi4

Neon Postgres:
- Connection URL:
  postgresql://neondb_owner:DuaBWi37ZCJb@ep-still-fog-a4k0kj01-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require

Cohere:
- API Key: cZjVFbeMhwQBrWOfLoU7pBoiw9uqwHuVAk7OlSWs
- Embedding models:
  - embed-english-v3.0 OR embed-multilingual-v3.0
- Generation models:
  - command-r OR command-r-plus

⚠️ These values are PROVIDED FOR ARCHITECTURAL PLANNING ONLY.
Do NOT embed them into code or output secrets.

────────────────────────────────────
WHAT YOU MUST CREATE
────────────────────────────────────

### 1. Architecture Sketch (Text-Based)
Create a clear, step-by-step architectural flow explaining:
- Markdown ingestion from Docusaurus content
- Chunking + overlap strategy
- Cohere embedding flow
- Vector storage in Qdrant
- Query-time retrieval
- RAG prompt construction
- Cohere Chat generation
- Citation attachment
- Response delivery via FastAPI

Explain how ALL of this logically lives inside:
backend/main.py

Also include:
- How the static Docusaurus frontend communicates with the backend
  (iframe / fetch / proxy-safe approach)

────────────────────────────────────
### 2. Internal Section Structure of backend/main.py
Design a clean logical structure for ONE large file.

Example style (conceptual, not code):
- Configuration & environment loading
- Cohere client initialization
- Qdrant client initialization
- Database connection handling
- Ingestion utilities
- RAG retrieval logic
- Generation logic
- Citation formatting
- FastAPI routes
- Health checks

Explain WHY this order is chosen to maintain clarity
despite the single-file constraint.

────────────────────────────────────
### 3. Research Approach (Research-Concurrent)
Use a research-concurrent approach:
- Research happens while implementation progresses
- Not all research upfront

For EACH phase, specify:
- What must be researched
- What can be decided experimentally

Examples:
- Chunk size tuning
- Top-k retrieval tuning
- Citation density
- Prompt grounding strength

────────────────────────────────────
### 4. Decisions Needing Documentation
List ALL important architectural and algorithmic decisions, including:
- Chunk size & overlap
- Vector similarity metric
- Top-k retrieval count
- Selected-text fallback logic
- Prompt strictness vs helpfulness
- Citation formatting style

For EACH decision, include:
- Available options
- Pros & cons
- Chosen option
- Reasoning aligned with spec & constitution

────────────────────────────────────
### 5. Testing & Validation Strategy
Design a testing plan based strictly on success criteria:

- ≥95% answer accuracy
- ZERO hallucinations
- Correct handling of user-selected text
- Latency < 5 seconds
- Citations present when applicable

Include:
- Manual test cases
- Prompt-based adversarial tests
- Failure behavior (safe fallback responses)
- How to verify grounding to book content

────────────────────────────────────
ORGANIZATION REQUIREMENTS
────────────────────────────────────
- Organize output into clear phases:
  1. Research
  2. Foundation
  3. Analysis
  4. Synthesis

- Be concise but extremely clear
- Think like a senior backend architect
- Avoid vague statements
- No marketing language

────────────────────────────────────
OUTPUT RULES
────────────────────────────────────
- Planning document ONLY
- No code
- No file creation
- No repetition of spec text
- Assume the implementer will directly follow this plan

If anything is ambiguous:
Choose safety, grounding, and strict compliance
over convenience or creativity.

## Response snapshot

I have created the implementation plan for the RAG chatbot and saved it to `specs/002-rag-chatbot-integration/plan.md`. The plan is structured in four phases: Research, Foundation, Analysis, and Synthesis, and it covers the architecture, internal structure of `backend/main.py`, research approach, key decisions, and testing strategy.

## Outcome

- ✅ Impact: Created a detailed implementation plan for the RAG Chatbot backend.
- 🧪 Tests: none
- 📁 Files: specs/002-rag-chatbot-integration/plan.md
- 🔁 Next prompts: /sp.tasks
- 🧠 Reflection: Successfully created a comprehensive implementation plan, including architecture, research strategy, and testing plan.

## Evaluation notes (flywheel)

- Failure modes observed: The setup-plan.ps1 script did not correctly identify the current feature.
- Graders run and results (PASS/FAIL): none
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): Improve the setup-plan.ps1 script to correctly identify the active feature.
