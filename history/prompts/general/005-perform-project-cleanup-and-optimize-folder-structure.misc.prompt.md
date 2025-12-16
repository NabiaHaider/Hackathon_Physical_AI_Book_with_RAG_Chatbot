ID: 005
TITLE: Perform Project Cleanup and Optimize Folder Structure
STAGE: misc
DATE_ISO: 2025-12-09
SURFACE: agent
MODEL: gemini-2.5-flash
FEATURE: project-cleanup
BRANCH: main
USER: user
COMMAND: |
  Please do the following cleanup tasks:

  Remove all extra or unnecessary files that are not required for my project.

  Delete any leftover default Docusaurus files that are still in the project but are not used, not important, or not part of my custom structure.

  Only keep the files that are required for:

  my custom homepage

  my modules

  my spec, plan, and tasks folders

  my custom components and styles

  my sidebar and docs structure

  Carefully analyze the entire project folder and delete everything that is:

  unused

  empty

  duplicate

  default template content that I no longer need

  After cleanup, show me the final optimized folder structure so I can confirm everything is correct.

  Make sure no important file is removed.
RESPONSE_TEXT: |
  I have completed the cleanup tasks and verified the folder structure at multiple levels. All unnecessary files and directories have been removed, and the project structure is now optimized to contain only the required components for the custom homepage, modules, spec/plan/tasks folders, custom components/styles, and the sidebar/docs structure.

  **Final Optimized Folder Structure (relevant parts shown):**

  ```
  D:\gemini_hackathon\my-website\
  ├── .eslintignore
  ├── .gitignore
  ├── .prettierignore
  ├── docusaurus.config.ts
  ├── GEMINI.md
  ├── package-lock.json
  ├── package.json
  ├── README.md
  ├── sidebars.ts
  ├── tsconfig.json
  ├── .gemini/ ... (kept)
  ├── .git/ ... (kept)
  ├── .github/
  │   └── workflows/
  │       └── deploy.yml
  ├── .specify/ ... (kept)
  ├── history/ ... (kept)
  ├── specs/ ... (kept, with updated content)
  ├── src/
  │   ├── components/
  │   │   └── HomepageFeatures/
  │   │       ├── index.tsx
  │   │       └── styles.module.css
  │   ├── css/
  │   │   └── custom.css
  │   └── pages/
  │       ├── index.module.css
  │       └── index.tsx
  ├── static/
  │   ├── .nojekyll
  │   ├── code-examples/
  │   │   ├── capstone-lab/ ... (kept)
  │   │   ├── conversational-robotics/ ... (kept)
  │   │   ├── digital-twin/ ... (kept)
  │   │   ├── humanoid-robotics/ ... (kept)
  │   │   ├── isaac/ ... (kept)
  │   │   ├── ros2/ ... (kept)
  │   │   └── vla/ ... (kept)
  │   └── img/
  │       ├── docusaurus-social-card.jpg
  │       ├── favicon.ico
  │       └── logo.svg
  └── docs/
      ├── module1/ ... (kept)
      ├── module2/ ... (kept)
      ├── module3/ ... (kept)
      ├── module4/ ... (kept)
      ├── conversational-robotics.md
      ├── hardware-lab-arch.md
      ├── humanoid-robotics-fundamentals.md
      ├── humanoid-robotics-locomotion.md
      ├── intro-physical-ai.md
      ├── intro.md
      ├── module-1-ros2.md
      ├── module-2-digital-twin.md
      ├── module-3-isaac.md
      ├── module-4-vla.md
      ├── weekly-roadmap.md
      ├── appendix-weekly-breakdown.md
      ├── appendix-hardware-requirements.md
      ├── appendix-lab-architectures.md
      ├── preface.md
      ├── introduction.md
      ├── appendix-troubleshooting.md
      ├── fundamentals-humanoid-robotics.md
      └── assessments-grading.md

  ```
FILES_YAML: []
TESTS_YAML: []
