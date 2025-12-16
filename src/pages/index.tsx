import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link'; // Ensure Link is imported
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// --- Hero Section ---
function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Physical AI & Humanoid Robotics
        </Heading>
        <p className="hero__subtitle">Empowering Digital Brains to Interact with the Real World</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/chapter1-introduction-to-physical-ai">
            Start Learning Now →
          </Link>
        </div>
      </div>
    </header>
  );
}

// --- Modules Section (Visual Cards) ---
interface ModuleItem {
  title: string;
  description: string;
  link: string; // Added link property
}

const ModuleList: ModuleItem[] = [
  {
    title: 'Module 1: Foundational Robotics & ROS 2',
    description: 'Understand the foundational middleware for robotics: nodes, topics, services, and actions using rclpy and URDF.',
    link: '/docs/category/module-1', // Updated link to module overview
  },
  {
    title: 'Module 2: Digital Twins & Simulation',
    description: 'Explore physics simulation with Gazebo and high-fidelity environments in Unity, including advanced sensor modeling.',
    link: '/docs/category/module-2', // Updated link to module overview
  },
  {
    title: 'Module 3: Advanced AI & Control',
    description: 'Dive into NVIDIA Isaac Sim, Isaac ROS, VSLAM for perception, and Nav2 for advanced robot navigation.',
    link: '/docs/category/module-3', // Updated link to module overview
  },
  {
    title: 'Module 4: Humanoid Specialization & Capstone',
    description: 'Learn to build intelligent systems using GPT for planning, Whisper for voice commands, and robust object detection leading to robotic actions.',
    link: '/docs/category/module-4', // Updated link to module overview
  },
];

// Updated Module component to make the entire card clickable
function Module({title, description, link}: ModuleItem) { // Added link to props
  return (
    <div className={clsx('col col--3', styles.moduleCardWrapper)}>
      <Link to={link} className={clsx(styles.moduleCardLink)}> {/* Added Link component */}
        <div className="card card--full-height">
          <div className="card__header">
            <h3>{title}</h3>
          </div>
          <div className="card__body">
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

function ModulesSection() {
  return (
    <section className={clsx('padding-top--lg padding-bottom--lg', styles.modulesSection)}>
      <div className="container">
        <h2 className="text--center margin-bottom--xl">Course Modules</h2> {/* Changed Heading to h2 directly if Heading component is causing issues */}
        <div className={clsx("row", styles.modulesRow)}> {/* Added modulesRow for spacing */}
          {ModuleList.map((props, idx) => (
            <Module key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Main Page Component ---
export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Physical AI & Humanoid Robotics Book`}
      description="A comprehensive guide to embodied intelligence and robotic control systems.">
      <HomepageHeader />
      <main>
        <ModulesSection />
      </main>
    </Layout>
  );
}