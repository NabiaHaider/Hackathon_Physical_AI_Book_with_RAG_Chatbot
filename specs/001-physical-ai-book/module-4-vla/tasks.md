# Tasks: Module 4 — Vision-Language-Action Systems

**Input**: Design documents from `/specs/001-physical-ai-book/module-4-vla/`
**Prerequisites**: spec.md (required)

**Tests**: Code examples require automated tests for verification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

## Path Conventions

- **Single project**: `src/`, `docs/`, `static/` at repository root (Docusaurus structure)
- **Module specific**: `static/code-examples/vla/` (for Python scripts), `static/code-examples/vla/tests/`

---

## Phase 3: User Story 1 - Speech-to-Text Command Processing (Priority: P1) 🎯 MVP

**Goal**: Student processes a voice command using speech-to-text (Whisper) and translates it into a robot action.

**Independent Test**: A student can successfully convert a spoken command into text and trigger a predefined ROS 2 action.

### Implementation for User Story 1

- [ ] T001 [US1] AI write initial content for "Speech-to-Text Command Processing" section in `docs/module-4-vla.md`
- [ ] T002 [US1] Generate Python script for speech-to-text conversion (e.g., using a Whisper API client) and publishing a ROS 2 command in `static/code-examples/vla/speech_command.py`
- [ ] T003 [US1] Implement automated tests for speech-to-text conversion and ROS 2 command publishing in `static/code-examples/vla/tests/test_speech_command.py`

### User Story 2 - LLM-driven Cognitive Planning (Priority: P1)

**Goal**: Student uses a Large Language Model (LLM) for high-level cognitive planning based on text input.

**Independent Test**: A student can provide a complex text instruction to an LLM, which then generates a valid sequence of simpler, executable ROS 2 actions or action plans.

### Implementation for User Story 2

- [ ] T004 [US2] AI write initial content for "LLM-driven Cognitive Planning" section in `docs/module-4-vla.md`
- [ ] T005 [US2] Generate Python script for LLM integration (e.g., using OpenAI GPT API) to parse natural language and output a sequence of ROS 2 actions in `static/code-examples/vla/llm_planner.py`
- [ ] T006 [US2] Implement automated tests for LLM planning and ROS 2 action generation in `static/code-examples/vla/tests/test_llm_planner.py`

## Phase 5: Polish & Cross-Cutting Concerns

- [ ] T007 [P] Run Docusaurus build and validate links for `docs/module-4-vla.md`
- [ ] T008 [P] Final content review and polishing for academic clarity and accuracy, and verification of technical claims against official documentation for "Module 4 — Vision-Language-Action Systems"

---

## Dependencies & Execution Order

### Phase Dependencies

- **User Story 1 (P1)**: Can start immediately.
- **User Story 2 (P1)**: Can start after User Story 1.

### Within Each User Story

- AI writing should precede code example generation.
- Code example generation should precede automated test implementation.

### Parallel Opportunities

- Content generation and code example generation for different concepts could be parallelized if needed.

---

## Implementation Strategy

### Incremental Delivery

1. Complete User Story 1 tasks.
2. Complete User Story 2 tasks.
3. Perform Polish & Cross-Cutting Concerns tasks.

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
