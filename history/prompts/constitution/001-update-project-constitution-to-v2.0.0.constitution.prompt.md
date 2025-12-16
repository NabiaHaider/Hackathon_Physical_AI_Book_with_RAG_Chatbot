<!-- ---
id: 001
title: Update Project Constitution to v2.0.0
stage: constitution
date: 2025-12-08
surface: agent
model: gemini-pro
feature: none
branch: main
user: 
command: /sp.constitution
labels: [constitution, project-setup]
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

/sp.constitution                                                                                                                                                                                               Project: AI/Spec-Driven Book Creation using Docusaurus, Spec-Kit Plus, and Claude Code
Goal: A fully automated, spec-driven technical book generated through AI tooling and deployed on GitHub Pages.

Core Principles

Spec-Driven Development:
Saara content Spec-Kit Plus ki spec files aur task pipelines follow karega.

AI-Native Workflow:
Content generation Claude Code, Gemini, aur automated MCP workflows ke through hogi.

Consistency & Structure:
Har chapter ek structured spec → tasks → generated output pipeline follow karega.

Documentation Accuracy:
All technical claims verified through product documentation (Docusaurus, GH Pages, AI tooling docs).

Modularity:
Har feature, chapter, aur section Spec-Kit Plus tasks se reproducible hona chahiye.

Key Standards

Spec Format Compliance:

Spec-Kit Plus (.spec.md) format MUST be followed.

Tasks MUST be in tasks.md following pipeline numbering (T001 → onward).

Docusaurus Standards:

Har chapter ko docs/ mein Markdown format follow karna hoga.

Sidebar, routing, slug structure Docusaurus v3 conventions follow kare.

AI Code Tools Integration:

Claude Code MUST be used for generating, updating, and refining code blocks.

Gemini MUST be used for long-form chapter writing and polishing.

Deployment Requirements:

GitHub Pages deploy workflow MUST follow Docusaurus official guide.

Automatic CI/CD setup is required using GitHub Actions.

Constraints

Platform Constraint:
Book must run entirely on Docusaurus.

Toolchain Constraint:
Only Spec-Kit Plus, Claude Code, Gemini, and GitHub Pages allowed.

Structure Constraint:

Minimum: 5 Chapters

Each chapter MUST have:

1 spec

5–10 tasks

Final generated content

Content Quality Constraints:

No plagiarism (AI-generated but non-copied text).

Academic clarity (Flesch-Kincaid grade 9–12).

Code snippets must be runnable and technically accurate.

Success Criteria

Complete Docusaurus book deployed on GitHub Pages.

Every chapter generated from specs & tasks using Spec-Kit Plus.

All content reproducible using Claude Code + Gemini workflows.

Clean sidebar navigation with no broken links.

GitHub Actions deploy workflow passes without errors.

Final output suitable for public technical documentation.

## Response snapshot

I have updated the project constitution to version 2.0.0 based on your input. The new constitution is located at `.specify/memory/constitution.md`.

## Outcome

- ✅ Impact: Major overhaul of the project constitution to align with new goals.
- 🧪 Tests: Not applicable.
- 📁 Files: 1 file modified.
- 🔁 Next prompts: The user can now proceed with other commands.
- 🧠 Reflection: The new constitution is much more detailed and specific to the project.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): n/a
