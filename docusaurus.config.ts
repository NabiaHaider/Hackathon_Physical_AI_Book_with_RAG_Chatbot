import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Physical AI & Humanoid Robotics Book',
  tagline: 'A comprehensive guide to embodied intelligence and robotic control systems.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://NabiaHaider.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NabiaHaider', // Usually your GitHub org/user name.
  projectName: 'Hackathon_Physical_AI_Humanoid_Robotics_Book', // Usually your repo name.

  onBrokenLinks: 'warn',

  scripts: [
    '/chatbot.js'
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    metadata: [
      {name: 'keywords', content: 'Physical AI, Humanoid Robotics, Embodied Intelligence, ROS 2, Gazebo, Unity, NVIDIA Isaac, VLA, AI-Robotics Convergence, Robotics Course'},
      {name: 'description', content: 'A comprehensive guide to embodied intelligence and robotic control systems.'},
      {name: 'og:title', content: 'Physical AI & Humanoid Robotics Book'},
      {name: 'og:description', content: 'A comprehensive guide to embodied intelligence and robotic control systems.'},
      {name: 'og:type', content: 'website'},
      {name: 'og:url', content: 'https://NabiaHaider.github.io/Hackathon_Physical_AI_Humanoid_Robotics_Book/'},
      {name: 'og:image', content: 'https://NabiaHaider.github.io/Hackathon_Physical_AI_Humanoid_Robotics_Book/img/docusaurus-social-card.jpg'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: 'Physical AI & Humanoid Robotics Book'},
      {name: 'twitter:description', content: 'A comprehensive guide to embodied intelligence and robotic control systems.'},
      {name: 'twitter:image', content: 'https://NabiaHaider.github.io/Hackathon_Physical_AI_Humanoid_Robotics_Book/img/docusaurus-social-card.jpg'},
    ],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/NabiaHaider/Hackathon_Physical_AI_Humanoid_Robotics_Book/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      logo: {
        alt: 'Physical AI & Humanoid Robotics',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'bookSidebar',
          position: 'left',
          label: 'Book',
        },
        
        {
          href: 'https://github.com/NabiaHaider/Hackathon_Physical_AI_Humanoid_Robotics_Book',
          label: 'GitHub',
          position: 'right',
        },
        {
          to: '/signin',
          label: 'Sign In',
          position: 'right',
        },
        {
          to: '/signup',
          label: 'Sign Up',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Book',
              to: '/docs/chapter1-introduction-to-physical-ai',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkdIn',
              href: 'https://www.linkedin.com/in/nabia-haider-19b1a8249/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/NabiaHaider/Hackathon_Physical_AI_Humanoid_Robotics_Book',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nabia Haider. All rights reserved`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
