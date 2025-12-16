# Feature Specification: RAG Chatbot Integration

**Feature Branch**: `002-rag-chatbot-integration`  
**Created**: 2025-12-13
**Status**: Draft  
**Input**: User description: "Integrating RAG Chatbot into AI/Spec-Driven Book Project (Phase 2) Target outcome: A fully functional, embedded Retrieval-Augmented Generation (RAG) chatbot within the published Docusaurus book on GitHub Pages. The chatbot answers questions accurately based on the book's content, supports queries on user-selected text, and provides a seamless, interactive user experience. Focus: Build a robust RAG pipeline using Cohere for embeddings and generation Embed the chatbot UI into Docusaurus pages (e.g., sidebar widget or page-specific component) Handle two query modes: general book queries and context-specific queries from user-selected text Ensure high accuracy, low latency, and secure handling of credentials Success criteria: Chatbot embedded and accessible on the live GitHub Pages site Correctly answers 95%+ of test questions using only book content (no hallucinations) Properly handles user-selected text: uses only the selected snippet as primary context, falling back to full retrieval if needed Response time < 5 seconds for standard queries Includes inline citations or source references where possible Full end-to-end functionality: ingestion script, FastAPI backend, frontend integration Constraints: Use Cohere exclusively for embeddings (prefer embed-english-v3.0 or embed-multilingual-v3.0 with input_type="search_document"/"search_query") and generation (Command R or Command R+ via Chat endpoint) Vector store: Qdrant Cloud Free Tier Cluster URL: https://0d3a1926-6a0a-4e07-b2a3-3086aefccab6.us-east4-0.gcp.cloud.qdrant.io API Key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3MiOiJtIn0.rZldtwIMYqqbFhrNkQM_hI3_ABcGbk8ZAThXxJHyAi4 Database: Neon Serverless Postgres Connection URL: postgresql://neondb_owner:DuaBWi37ZCJb@ep-still-fog-a4k0kj01-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require Use for storing metadata, chat history, or session data if needed Cohere API Key: cZjVFbeMhwQBrWOfLoU7pBoiw9uqwHuVAk7OlSWs Backend: FastAPI (deployable to Render, Vercel, or similar free tier) Frontend integration: Compatible with static GitHub Pages (e.g., iframe to backend or custom React component if using Docusaurus plugins) No OpenAI dependencies; stay within free tiers where possible Secure: Never expose API keys client-side; use environment variables and proxy through backend Not building: Multi-user authentication or advanced session management Real-time collaborative features Mobile app version Advanced analytics or logging beyond basic debugging Custom fine-tuned models Timeline: Complete ingestion, backend API, and basic embedding within 1 week; full frontend integration and testing within 2 weeks ## Final Instruction This phase must deliver a **production-ready RAG chatbot** with **all backend work isolated inside the backend/ folder**, clean architecture, strict grounding to book content, and seamless embedding into the Docusaurus GitHub Pages site."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - General Questions (Priority: P1)

As a reader, I want to ask general questions about the book content and get accurate answers from the chatbot.

**Why this priority**: This is the core functionality of the chatbot.

**Independent Test**: Can be tested by asking a question and verifying the answer against the book content.

**Acceptance Scenarios**:

1. **Given** a user is on the book website, **When** they ask a question in the chatbot, **Then** they receive an answer that is accurate and relevant to the book's content.

---

### User Story 2 - Context-specific Questions (Priority: P2)

As a reader, I want to select a specific text passage and ask the chatbot a question about it, so that I can get a context-specific answer.

**Why this priority**: This provides a more powerful and targeted way to interact with the content.

**Independent Test**: Can be tested by selecting a passage, asking a question, and verifying the answer is based on the selected context.

**Acceptance Scenarios**:

1. **Given** a user has selected a text passage, **When** they ask a question in the chatbot, **Then** they receive an answer that is primarily based on the selected context.

---

### User Story 3 - Source-referenced answers (Priority: P3)

As a reader, I want to see citations or references to the book content in the chatbot's answers, so that I can verify the information.

**Why this priority**: This increases trust and allows users to easily find the source of the information.

**Independent Test**: Can be tested by asking a question and verifying that the answer includes a citation or link to the relevant part of the book.

**Acceptance Scenarios**:

1. **Given** a user has received an answer from the chatbot, **When** the answer is based on a specific part of the book, **Then** the answer includes a citation or reference to that part of the book.

---

### Edge Cases

- What happens when the chatbot cannot find an answer in the book?
- How does the system handle very long user queries?
- What happens if the user selects a very large passage of text?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST provide a chatbot interface embedded in the Docusaurus website.
- **FR-002**: The chatbot MUST answer questions based solely on the content of the book.
- **FR-003**: The chatbot MUST support two query modes: general book queries and context-specific queries on user-selected text.
- **FR-004**: The system MUST use Cohere for embeddings and text generation.
- **FR-005**: The system MUST use Qdrant for vector storage and retrieval.
- **FR-006**: The system MUST use Neon Serverless Postgres for metadata, chat history, or session data if needed.
- **FR-007**: The backend MUST be a FastAPI application.
- **FR-008**: API keys and other secrets MUST NOT be exposed on the client-side.
- **FR-009**: The entire backend MUST be isolated within a `backend/` folder.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The chatbot is successfully embedded and accessible on the live GitHub Pages site.
- **SC-002**: The chatbot correctly answers 95%+ of test questions using only book content.
- **SC-003**: The chatbot properly handles user-selected text, using the selected snippet as the primary context.
- **SC-004**: The response time for standard queries is under 5 seconds.
- **SC-005**: The chatbot includes inline citations or source references where possible.