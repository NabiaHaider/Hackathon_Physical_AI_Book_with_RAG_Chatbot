# Tasks: RAG Chatbot Integration

**Input**: Design documents from `bankend/`
**Prerequisites**: `plan.md`, `spec.md`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure for the backend.

- [X] T001 Create `backend/` directory for all backend code.
- [X] T002 Initialize Python project in `backend/` with a `pyproject.toml` file.
- [X] T003 [P] Add FastAPI, Cohere, Qdrant-client, and pydantic-settings to dependencies in `backend/pyproject.toml`.
- [X] T004 [P] Create the main application file `backend/main.py`.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented.

- [X] T005 Setup environment variable loading for API keys in `backend/main.py`. (COHERE_API_KEY, QDRANT_API_KEY, NEON_DB_URL)
- [X] T006 Initialize Cohere and Qdrant clients in `backend/main.py`.
- [X] T007 Implement Pydantic models for API requests and responses in `backend/main.py`.
- [X] T008 [P] Implement a health check endpoint `/health` in `backend/main.py`.
- [X] T009 Implement the ingestion logic to read all markdown files from the `docs/` directory, chunk them, and store them in Qdrant in `backend/main.py`.

---

## Phase 3: User Story 1 - General Queries (Priority: P1) 🎯 MVP

**Goal**: As a reader, I want to ask general questions about the book content and get accurate answers from the chatbot.

**Independent Test**: Ask a question about the book content and verify that the chatbot returns an accurate and relevant answer.

### Implementation for User Story 1

- [X] T010 [US1] Implement the RAG core logic for retrieving context from Qdrant based on a user's query in `backend/main.py`.
- [X] T011 [US1] Implement the generation logic to create a prompt and get a response from Cohere's generation model in `backend/main.py`.
- [X] T012 [US1] Create the FastAPI endpoint for handling general queries in `backend/main.py`.

---

## Phase 4: User Story 2 - Context-specific Queries (Priority: P2)

**Goal**: As a reader, I want to select a specific text passage and ask the chatbot a question about it, so that I can get a context-specific answer.

**Independent Test**: Select a passage of text, ask a question, and verify the answer is based on the selected context.

### Implementation for User Story 2

- [X] T013 [US2] Update the FastAPI endpoint to accept selected text along with the user's query in `backend/main.py`.
- [X] T014 [US2] Implement the logic to use the selected text as the primary context, skipping the retrieval step from Qdrant, in `backend/main.py`. If the selected text is insufficient, trigger vector retrieval from Qdrant as a fallback.

---

## Phase 5: User Story 3 - Source-referenced answers (Priority: P3)

**Goal**: As a reader, I want to see citations or references to the book content in the chatbot's answers, so that I can verify the information.

**Independent Test**: Ask a question and verify that the answer includes a citation to the relevant part of the book.

### Implementation for User Story 3

- [X] T015 [US3] Update the ingestion logic to store metadata (e.g., source file name) with each chunk in Qdrant in `backend/main.py`.
- [X] T016 [US3] Update the generation logic to include the source metadata in the response from the Cohere model in `backend/main.py`.
- [X] T017 [US3] Update the API response model to include citation information in `backend/main.py`, following APA-inspired format (author, year, chapter/section).

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories.

- [X] T018 [P] Add detailed docstrings and comments to the code in `backend/main.py`.
- [X] T019 [P] Implement robust error handling for API calls and other operations in `backend/main.py`.
- [X] T020 Configure CORS middleware in `backend/main.py` to allow requests from the GitHub Pages domain.
- [X] T021 [P] Monitor and optimize response time to maintain <5 seconds for standard queries.
- [X] T022 [P] Ensure all API keys and secrets are loaded via environment variables, never exposed or logged.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies.
- **Foundational (Phase 2)**: Depends on Setup.
- **User Stories (Phase 3-5)**: Depend on Foundational.
- **Polish (Phase 6)**: Depends on all user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Depends on Foundational.
- **User Story 2 (P2)**: Depends on User Story 1.
- **User Story 3 (P3)**: Depends on User Story 1.
