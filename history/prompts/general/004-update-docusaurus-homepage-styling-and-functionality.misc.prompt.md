ID: 004
TITLE: Update Docusaurus Homepage Styling and Functionality
STAGE: misc
DATE_ISO: 2025-12-09
SURFACE: agent
MODEL: gemini-2.5-flash
FEATURE: homepage-redesign
BRANCH: main
USER: user
COMMAND: |
  I want you to update my Docusaurus homepage.
  Please modify the code with the following requirements:

  Hero Section:

  Add a beautiful modern gradient background (soft, smooth colors).

  Make the hero section look more premium and visually appealing.

  Module Cards Section:

  I have 4 module cards on the homepage.

  Make these cards visually attractive with rounded corners, shadow, modern layout, and hover animation.

  Each card must be fully clickable (not only the button) — when the user clicks anywhere on the card, it should open the module’s chapter page.

  Improve spacing, typography, and responsiveness.

  Make sure the changes are clean, professional, and follow good React + CSS structure.

  Output updated code for all files that need changes (e.g., index.tsx, index.module.css).

  Make the final result look like a modern educational website.
RESPONSE_TEXT: |
  I have updated `src/pages/index.tsx` and `src/pages/index.module.css` with the requested modifications to enhance the Docusaurus homepage.

  **Summary of Changes:**

  **`src/pages/index.tsx`:**
  *   **`ModuleItem` Interface**: Added a `link: string` property.
  *   **`ModuleList` Array**: Each module item now includes a `link` property pointing to its respective documentation page (e.g., `/docs/module-1-ros2`). These links are example links, assuming the Docusaurus routing.
  *   **`Module` Component**:
      *   The entire `div` content of the card is now wrapped within a Docusaurus `<Link to={link}>` component, making the whole card clickable.
      *   Added `styles.moduleCardWrapper` to the outer `div` and `styles.moduleCardLink` to the `Link` component for styling hooks.
  *   **`ModulesSection` Component**: Added `styles.modulesRow` to the `row` `div` for improved spacing management.

  **`src/pages/index.module.css`:**
  *   **Hero Section (`.heroBanner`)**:
      *   Applied a modern gradient background (`linear-gradient`) with soft, smooth colors.
      *   Provided a darker gradient for `[data-theme='dark']`.
      *   Increased `padding` for more vertical space.
      *   Enhanced `hero__title` and `hero__subtitle` typography (larger font sizes, `font-weight`, `line-height`, `text-shadow`).
      *   Adjusted button styling and added subtle hover effects (`transform`, `box-shadow`).
      *   Added media queries for responsiveness on smaller screens.
  *   **Module Cards Section (`.modulesSection`, `.modulesRow`, `.moduleCardWrapper`, `.moduleCardLink`)**:
      *   **Layout**: Used `gap` for consistent spacing between cards within `.modulesRow`.
      *   **Responsiveness**: Added media queries to adjust `flex-basis` and `max-width` for 2 cards per row on tablets and 1 card per row on mobile, ensuring a responsive grid.
      *   **Visually Attractive**:
          *   `border-radius: 12px;` for rounded corners.
          *   `box-shadow` for subtle elevation, with a darker shadow for dark mode.
          *   `transition` for smooth animations.
          *   **Hover Animation**: `transform: translateY(-8px);` for a lift effect and `box-shadow` changes for an enhanced shadow on hover.
          *   `border-color: var(--ifm-color-primary);` to highlight on hover.
      *   **Clickability**: `moduleCardLink` is `display: block;` and `height: 100%;` to ensure the entire card area functions as a link.
      *   **Card Content**: Adjusted typography (`font-size`, `font-weight`, `margin-bottom`) for `h3` and `p` within the cards.
      *   Removed default card `border` and set `background: transparent;` for `.moduleCardLink .card` to allow the link's background to control the card's appearance.

  The homepage should now reflect a more modern, premium, and visually appealing educational website, with fully clickable module cards and improved responsiveness.
FILES_YAML:
  - src/pages/index.tsx
  - src/pages/index.module.css
TESTS_YAML: []
