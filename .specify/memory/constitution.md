<!--
---
Sync Impact Report
---
- Version change: 2.0.0 → 3.0.0
- List of modified principles: All principles have been replaced.
- Added sections: None
- Removed sections: None
- Templates requiring updates:
  - ✅ .specify/templates/plan-template.md (No changes needed)
  - ✅ .specify/templates/spec-template.md (No changes needed)
  - ✅ .specify/templates/tasks-template.md (No changes needed)
  - ✅ README.md (No changes needed)
- Follow-up TODOs:
  - TODO(RATIFICATION_DATE): Set initial ratification date
-->
# Integrating RAG Chatbot into AI/Spec-Driven Book Project (Phase 2) Constitution

## Core Principles

### Seamless Integration
Seamless integration of RAG chatbot with the existing Docusaurus book deployed on GitHub Pages.

### Accurate and Context-Aware Responses
Accurate and context-aware responses based solely on the book's content, including handling user-selected text for targeted queries.

### Cohere API Usage
Use of Cohere API for language model capabilities instead of OpenAI, ensuring compatibility with all other specified tools.

### Spec-Driven Development
Adherence to spec-driven development using Spec-Kit Plus and Claude Code for structured, verifiable implementation.

### Security, Scalability, and User Privacy
Focus on security, scalability, and user privacy in chatbot interactions.

## Key Standards

### Technology Stack
- Technology stack: Cohere API key for embeddings and generation, FastAPI for backend API, Neon Serverless Postgres for database management, Qdrant Cloud Free Tier for vector storage and retrieval.

### Code Quality
- Modular, well-documented code with unit tests; follow PEP 8 for Python style.

### Integration
- Embed chatbot UI (e.g., via iframe or custom component) into Docusaurus pages without disrupting static site functionality.

### Query Handling
- Support general book queries and specific queries on user-selected text; implement RAG pipeline with retrieval from Qdrant and generation via Cohere.

### Error Handling
- Graceful degradation for API failures, rate limits, or invalid inputs.

### Documentation
- Include setup instructions, API endpoints, and usage examples in the project repo.

## Constraints

### API Constraint
- Use Cohere API exclusively for AI operations; no OpenAI dependencies.

### Cost Constraint
- Leverage free tiers: Qdrant Cloud Free, Neon Serverless Free plan.

### Hosting Constraint
- Backend (FastAPI) deployable to free platforms like Vercel or Render; frontend integration compatible with GitHub Pages.

### Service Constraint
- No additional paid services beyond specified APIs.

### Toolchain Constraint
- Development tools: Limited to Spec-Kit Plus, Claude Code, and open-source libraries.

### Performance Constraint
- Response time under 5 seconds for typical queries.

## Success Criteria
- Chatbot successfully embedded and functional in the live Docusaurus site.
- Accurate answers to 95% of test queries based on book content (verified through manual testing).
- Handles user-selected text queries correctly, retrieving and generating responses from the selected context.
- Zero critical security vulnerabilities (e.g., no exposed API keys, proper authentication).
- Passes integration tests: End-to-end flow from user input to response.
- Project repo updated with all code, docs, and deployment scripts.

## Governance

This constitution supersedes all other practices. Amendments require documentation, approval, and a migration plan. All PRs and reviews must verify compliance with this constitution.

**Version**: 3.0.0 | **Ratified**: TODO(RATIFICATION_DATE): Set initial ratification date | **Last Amended**: 2025-12-13