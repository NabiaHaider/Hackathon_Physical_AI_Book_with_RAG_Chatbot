ID: 001
TITLE: Organize Docusaurus Docs Folder Structure
STAGE: misc
DATE_ISO: 2025-12-09
SURFACE: agent
MODEL: claude-3-5-sonnet
FEATURE: none
BRANCH: main
USER: user
COMMAND: "organize the docs folder"
LABELS: ["documentation", "docusaurus"]
LINKS:
  SPEC: null
  TICKET: null
  ADR: null
  PR: null
FILES_YAML:
  - docs/module1/
  - docs/module1/chapter1.md
  - docs/module1/chapter2.md
  - docs/module2/
  - docs/module2/chapter3.md
  - docs/module2/chapter4.md
  - docs/module2/chapter5.md
  - docs/module3/
  - docs/module3/chapter6.md
  - docs/module3/chapter7.md
  - docs/module4/
  - docs/module4/chapter8.md
  - docs/module4/chapter9.md
  - docs/module4/chapter10.md
TESTS_YAML: []
PROMPT_TEXT: |
  I need to organize my documentation folder structure specifically within modules. Each module should contain specified chapters. Create the structure in this sequence:

  module1 should contain chapter1.md and chapter2.md
  module2 should contain chapter3.md, chapter4.md, and chapter5.md
  module3 should contain chapter6.md and chapter7.md
  module4 should contain chapter8.md, chapter9.md, and chapter10.md

  Each module should contain only these chapters and no extra files.

  Organize my Docusaurus docs folder as follows:

  - module1: chapter1.md, chapter2.md
  - module2: chapter3.md, chapter4.md, chapter5.md
  - module3: chapter6.md, chapter7.md
  - module4: chapter8.md, chapter9.md, chapter10.md

  Each module should only contain these chapters. Do not create extra files. Output the folder/file structure and ready-to-use commands to create it in terminal.

  I want you to organize my Docusaurus `docs/` folder with the following module and chapter structure. Please create the folders and `.md` files exactly as specified, with placeholder content inside each `.md` file. Use proper Markdown headings for each chapter.

  Structure:

  - module1/
    - chapter1.md  (add heading: # Chapter 1)
    - chapter2.md  (add heading: # Chapter 2)

  - module2/
    - chapter3.md  (add heading: # Chapter 3)
    - chapter4.md  (add heading: # Chapter 4)
    - chapter5.md  (add heading: # Chapter 5)

  - module3/
    - chapter6.md  (add heading: # Chapter 6)
    - chapter7.md  (add heading: # Chapter 7)

  - module4/
    - chapter8.md  (add heading: # Chapter 8)
    - chapter9.md  (add heading: # Chapter 9)
    - chapter10.md (add heading: # Chapter 10)

  For each `.md` file, add a placeholder paragraph like: "Content for Chapter X goes here." 

  Only create these modules and chapters; do not add any extra files or folders. After creating, confirm that the folder structure matches the sequence above.
RESPONSE_TEXT: |
  All the specified module directories and chapter Markdown files have been created and verified to match the requested structure.
OUTCOME: Success
EVALUATION: The docs folder structure was successfully organized according to the user's specifications.
