# Tasks: Module 1 — ROS 2: The Robotic Nervous System

**Input**: Design documents from `/specs/001-physical-ai-book/module-1-ros2/`
**Prerequisites**: spec.md (required)

**Tests**: Code examples require automated tests for verification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

## Path Conventions

- **Single project**: `src/`, `docs/`, `static/` at repository root (Docusaurus structure)
- **Module specific**: `static/code-examples/ros2/`, `static/code-examples/ros2/tests/`

---

## Phase 3: User Story 1 - Create ROS 2 Node (Priority: P1) 🎯 MVP

**Goal**: Student creates a basic ROS 2 node.

**Independent Test**: A student can successfully compile and run a simple "Hello World" ROS 2 node.

### Implementation for User Story 1

- [ ] T001 [US1] AI write initial content for "Create ROS 2 Node" section in `docs/module-1-ros2.md`
- [ ] T002 [US1] Generate code examples for "Hello World" ROS 2 node in `static/code-examples/ros2/hello_world_node.py`
- [ ] T003 [US1] Implement automated tests for "Hello World" ROS 2 node in `static/code-examples/ros2/tests/test_hello_world_node.py`

### User Story 2 - Publish/Subscribe to Topic (Priority: P1)

**Goal**: Student understands inter-node communication.

**Independent Test**: A student can successfully run a publisher and subscriber node that communicate effectively.

### Implementation for User Story 2

- [ ] T004 [US2] AI write initial content for "Publish/Subscribe to Topic" section in `docs/module-1-ros2.md`
- [ ] T005 [US2] Generate code examples for ROS 2 publisher node in `static/code-examples/ros2/simple_publisher.py`
- [ ] T006 [US2] Implement automated tests for ROS 2 publisher node in `static/code-examples/ros2/tests/test_simple_publisher.py`
- [ ] T007 [US2] Generate code examples for ROS 2 subscriber node in `static/code-examples/ros2/simple_subscriber.py`
- [ ] T008 [US2] Implement automated tests for ROS 2 subscriber node in `static/code-examples/ros2/tests/test_simple_subscriber.py`

## Phase 5: Polish & Cross-Cutting Concerns

- [ ] T009 [P] Run Docusaurus build and validate links for `docs/module-1-ros2.md`
- [ ] T010 [P] Final content review and polishing for academic clarity and accuracy, and verification of technical claims against official documentation for "Module 1 — ROS 2: The Robotic Nervous System"

---

## Dependencies & Execution Order

### Phase Dependencies

- **User Story 1 (P1)**: Can start immediately.
- **User Story 2 (P1)**: Can start after User Story 1.

### Within Each User Story

- AI writing should precede code example generation.
- Code example generation should precede automated test implementation.

### Parallel Opportunities

- Content generation and code example generation for different ROS 2 concepts could be parallelized if needed.

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