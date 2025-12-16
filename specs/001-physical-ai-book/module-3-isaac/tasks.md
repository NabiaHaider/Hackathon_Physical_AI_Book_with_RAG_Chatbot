# Tasks: Module 3 — The AI-Robot Brain (NVIDIA Isaac)

**Input**: Design documents from `/specs/001-physical-ai-book/module-3-isaac/`
**Prerequisites**: spec.md (required)

**Tests**: Code examples require automated tests for verification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

## Path Conventions

- **Single project**: `src/`, `docs/`, `static/` at repository root (Docusaurus structure)
- **Module specific**: `static/code-examples/isaac/` (for Python scripts), `static/code-examples/isaac/tests/`

---

## Phase 3: User Story 1 - USD Scene Creation (Priority: P1) 🎯 MVP

**Goal**: Student creates and loads a basic USD scene in Isaac Sim.

**Independent Test**: A student can successfully create and load a custom USD scene in Isaac Sim using a Python script.

### Implementation for User Story 1

- [ ] T001 [US1] AI write initial content for "USD Scene Creation" section in `docs/module-3-isaac.md`
- [ ] T002 [US1] Generate Python script for programmatic USD scene creation (e.g., adding a simple cube) in `static/code-examples/isaac/create_usd_scene.py`
- [ ] T003 [US1] Implement automated tests for USD scene creation and loading in `static/code-examples/isaac/tests/test_usd_scene.py`

### User Story 2 - Basic Perception with Isaac ROS (Priority: P1)

**Goal**: Student implements a basic object detection pipeline using Isaac ROS.

**Independent Test**: A student can successfully detect a predefined object in an Isaac Sim environment using Isaac ROS modules.

### Implementation for User Story 2

- [ ] T004 [US2] AI write initial content for "Basic Perception with Isaac ROS" section in `docs/module-3-isaac.md`
- [ ] T005 [US2] Generate Python script demonstrating basic object detection using Isaac ROS (conceptual, e.g., using a pre-trained model) in `static/code-examples/isaac/object_detection.py`
- [ ] T006 [US2] Implement automated tests for Isaac ROS perception pipeline in `static/code-examples/isaac/tests/test_object_detection.py`

## Phase 5: Polish & Cross-Cutting Concerns

- [ ] T007 [P] Run Docusaurus build and validate links for `docs/module-3-isaac.md`
- [ ] T008 [P] Final content review and polishing for academic clarity and accuracy, and verification of technical claims against official documentation for "Module 3 — The AI-Robot Brain (NVIDIA Isaac)"

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
