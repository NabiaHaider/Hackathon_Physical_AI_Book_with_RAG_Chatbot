ID: 008
TITLE: Update Task List for Canonical Chapter Structure
STAGE: general
DATE_ISO: 2025-12-09
SURFACE: agent
MODEL: gemini-2.5-flash
FEATURE: tasks-alignment
BRANCH: main
USER: user
COMMAND: |
  specs/001-physical-ai-book/tasks.md

  Purpose: Tasks to generate chapter content, execute via Gemini + Spec-Kit Plus.

  Updates Required:

  ✅ Update tasks to match corrected chapter numbers and sequence.

  ✅ Include tasks to generate missing chapters.

  ✅ Ensure tasks for code snippets, diagrams, exercises are included.

  ✅ Fix dependencies if tasks were blocked (e.g., T006 → AI content generation workflow).

  ✅ Align tasks with spec.md & plan.md.
RESPONSE_TEXT: |
  I have successfully updated `specs/001-physical-ai-book/tasks.md` with the new, consolidated structure that aligns with the canonical 10-chapter book plan and includes granular tasks for all content elements.

  **Summary of what is complete, what was missing, and what has been added or fixed:**

  **What is complete:**
  *   The `specs/001-physical-ai-book/tasks.md` now provides a clear, actionable task list for implementing the book's content.
  *   The task list is organized into logical phases: "Phase 1: Setup", "Phase 2: Foundational", "Phase 3: Book Chapter Implementation (Canonical 10 Chapters)", "Phase 4: Appendices & Ancillary Content Implementation", and "Phase 5: Polish & Cross-Cutting Concerns".
  *   All tasks previously executed by me (AI write content, generate code examples, implement tests for various modules, and all tasks related to the appendices and polish) are correctly marked as `[X]` (completed).

  **What was missing:**
  *   Alignment of the task list with the canonical 10-chapter structure defined in `spec.md` and `plan.md`.
  *   Granular tasks for generating "Diagrams & Examples" and "Exercises" for each chapter.
  *   A clear mapping of task IDs to the new chapter numbering.
  *   Consolidation and re-categorization of tasks for appendices.

  **What has been added/fixed:**
  *   **New Task Structure**: The entire content of `specs/001-physical-ai-book/tasks.md` has been replaced with a reorganized and renumbered task list.
  *   **Canonical Chapter Alignment**: Tasks are now explicitly grouped under "Module 1" through "Module 4" and "Chapter 1" through "Chapter 10" according to the canonical structure.
  *   **Granular Content Tasks**: For each of the 10 chapters:
      *   Tasks for **AI writing content** are included and marked `[X]`.
      *   Tasks for **generating code examples** are included and marked `[X]`.
      *   Tasks for **implementing automated tests** are included and marked `[X]`.
      *   **New tasks for generating conceptual Diagrams & Examples** are included and marked `[ ]` (pending, as these were not part of previous specific content generation requests).
      *   **New tasks for generating Exercises** are included and marked `[ ]` (pending, as these were not part of previous specific content generation requests).
  *   **Appendices and Ancillary Content**: All related tasks have been consolidated under "Phase 4: Appendices & Ancillary Content Implementation" and are marked `[X]` (completed).
  *   **Dependencies and Alignment**: The new task list is fully aligned with the requirements specified in `specs/001-physical-ai-book/spec.md` and the detailed content plan in `specs/001-physical-ai-book/plan.md`.

  This completes the request to update `specs/001-physical-ai-book/tasks.md`.