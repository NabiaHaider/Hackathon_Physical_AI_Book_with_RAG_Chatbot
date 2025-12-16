import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  bookSidebar: [
    {
      type: 'category',
      label: 'Module 1',
      link: {
        type: 'generated-index',
        title: 'Module 1 Overview',
        description: 'Introduction to Physical AI, Humanoid Robotics Fundamentals, and ROS 2.',
        slug: '/category/module-1',
      },
      items: [
        {
          type: 'doc',
          id: 'chapter1-introduction-to-physical-ai', // Chapter 1
          label: 'Chapter 1: Introduction to Physical AI & Embodied Intelligence',
        },
        {
          type: 'doc',
          id: 'chapter2-fundamentals-of-humanoid-robotics', // Chapter 2
          label: 'Chapter 2: Fundamentals of Humanoid Robotics',
        },
        {
          type: 'doc',
          id: 'chapter3-ros2-the-robotic-nervous-system', // Chapter 3
          label: 'Chapter 3: ROS 2: The Robotic Nervous System',
        },
      ],
    },
    {
      type: 'category',
      label: 'Module 2',
      link: {
        type: 'generated-index',
        title: 'Module 2 Overview',
        description: 'Explore Gazebo, Unity, and NVIDIA Isaac Sim for digital twin simulations.',
        slug: '/category/module-2',
      },
      items: [
        {
          type: 'doc',
          id: 'chapter4-robot-simulation-gazebo', // Chapter 4
          label: 'Chapter 4: Robot Simulation with Gazebo',
        },
        {
          type: 'doc',
          id: 'chapter5-high-fidelity-simulation-unity', // Chapter 5
          label: 'Chapter 5: High-Fidelity Simulation Using Unity',
        },
        {
          type: 'doc',
          id: 'chapter6-nvidia-isaac-sim-the-ai-robot-brain', // Chapter 6
          label: 'Chapter 6: NVIDIA Isaac Sim: The AI-Robot Brain',
        },
      ],
    },
    {
      type: 'category',
      label: 'Module 3',
      link: {
        type: 'generated-index',
        title: 'Module 3 Overview',
        description: 'Dive into Vision-Language-Action (VLA) Systems and Conversational Robotics.',
        slug: '/category/module-3',
      },
      items: [
        {
          type: 'doc',
          id: 'chapter7-vision-language-action-systems', // Chapter 7
          label: 'Chapter 7: Vision-Language-Action (VLA) Systems',
        },
        {
          type: 'doc',
          id: 'chapter8-conversational-robotics-with-gpt-models', // Chapter 8
          label: 'Chapter 8: Conversational Robotics with GPT Models',
        },
      ],
    },
    {
      type: 'category',
      label: 'Module 4',
      link: {
        type: 'generated-index',
        title: 'Module 4 Overview',
        description: 'Focus on Humanoid Locomotion, Balance & Manipulation, culminating in the Capstone Project.',
        slug: '/category/module-4',
      },
      items: [
        {
          type: 'doc',
          id: 'chapter9-humanoid-robot-locomotion-balance-manipulation', // Chapter 9
          label: 'Chapter 9: Humanoid Robot Locomotion, Balance & Manipulation',
        },
        {
          type: 'doc',
          id: 'capstone-lab', // Chapter 10
          label: 'Chapter 10: Capstone Project: The Autonomous Humanoid Lab',
        },
      ],
    },
    {
      type: 'category',
      label: 'Appendices',
      link: {
        type: 'generated-index',
        title: 'Appendices',
        description: 'Supporting information on hardware, lab architectures, curriculum, assessments, and troubleshooting.',
        slug: '/category/appendices',
      },
      items: [
        'preface', // This is still 'preface'
        'appendix-hardware-requirements',
        'appendix-lab-architectures',
        'appendix-weekly-breakdown',
        'assessments-grading',
        'appendix-troubleshooting',
      ],
    },
  ],
};

export default sidebars;