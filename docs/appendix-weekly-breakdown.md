---
sidebar_position: 9
title: "Appendix: Weekly Breakdown (Weeks 1–13)"
---

# Appendix: Weekly Breakdown (Weeks 1–13)

This weekly breakdown provides a suggested curriculum structure for educators using the "Physical AI & Humanoid Robotics" book as a primary resource. It outlines topics, key concepts, recommended lab activities, and assessment ideas for a typical 13-week semester.

## Week 1: Introduction to Physical AI & Robotics
*   **Topics**:
    *   What is Physical AI? Embodied Intelligence vs. Disembodied AI.
    *   Brief history of robotics and AI convergence.
    *   Humanoid robotics: unique characteristics and applications.
    *   Overview of the book's structure and learning journey.
*   **Key Concepts**: Embodied AI, Humanoid Robotics, AI-Robotics Convergence, Degrees of Freedom (DoF).
*   **Lab Activity**: Familiarization with a simulated robot environment (e.g., Gazebo, Isaac Sim) - basic navigation and camera view.
*   **Assessment Idea**: Short essay: "The societal impact of humanoid robots."

## Week 2: Foundations of ROS 2
*   **Topics**:
    *   Introduction to Robot Operating System 2 (ROS 2).
    *   ROS 2 architecture: Nodes, Topics, Services, Actions.
    *   `rclpy` (Python client library) basics.
    *   Creating and running simple ROS 2 nodes (Publisher-Subscriber).
*   **Key Concepts**: ROS 2 Nodes, Topics, Publishers, Subscribers, `rclpy`, Middleware.
*   **Lab Activity**: Implement a simple ROS 2 publisher-subscriber pair in Python to exchange string messages.
*   **Assessment Idea**: Implement a ROS 2 service client and server.

## Week 3: Digital Twins & Simulation (Part 1: Gazebo)
*   **Topics**:
    *   The concept of Digital Twins in robotics.
    *   Introduction to Gazebo: physics engine, SDF/URDF.
    *   Loading and interacting with robot models in Gazebo.
    *   Simulated sensors (camera, LiDAR) in Gazebo.
*   **Key Concepts**: Digital Twin, Simulation, Gazebo, URDF, SDF, Physics Engine.
*   **Lab Activity**: Launch a pre-built robot model in Gazebo, visualize its sensor data.
*   **Assessment Idea**: Modify a URDF file to change a robot's physical properties and observe the effect in Gazebo.

## Week 4: Digital Twins & Simulation (Part 2: Unity)
*   **Topics**:
    *   Introduction to Unity for high-fidelity robotics simulation.
    *   Unity's physics engine and C# scripting basics.
    *   Integrating ROS 2 with Unity (e.g., using ROS-Unity integration packages).
    *   Creating custom environments and assets.
*   **Key Concepts**: Unity 3D, C# Scripting, High-Fidelity Simulation, ROS-Unity Bridge.
*   **Lab Activity**: Create a simple Unity scene with a cube, make it move via a ROS 2 topic.
*   **Assessment Idea**: Design a simple virtual test bed in Unity for a robot to navigate.

## Week 5: The AI-Robot Brain (NVIDIA Isaac)
*   **Topics**:
    *   Introduction to NVIDIA Isaac Sim and Omniverse.
    *   GPU-accelerated simulation for AI training.
    *   Synthetic data generation for machine learning.
    *   Basic concepts of Reinforcement Learning for robot control in Isaac Sim.
*   **Key Concepts**: NVIDIA Isaac Sim, Omniverse, Synthetic Data, Reinforcement Learning, GPU Acceleration.
*   **Lab Activity**: Load a robot into Isaac Sim, record synthetic camera data, and practice basic physics interactions.
*   **Assessment Idea**: Set up a simple RL environment in Isaac Sim to train a robot to balance.

## Week 6: Vision-Language-Action Systems (VLA)
*   **Topics**:
    *   Introduction to Vision-Language Models (VLMs) and their application in robotics.
    *   Connecting visual perception with language understanding.
    *   High-level action planning using VLMs.
    *   Challenges and opportunities of VLA in physical AI.
*   **Key Concepts**: Vision-Language Models (VLMs), Grounding, Embodied AI, High-level Planning.
*   **Lab Activity**: Use a pre-trained VLM (conceptual example) to interpret a visual scene and suggest a natural language action.
*   **Assessment Idea**: Research paper review on a recent VLM-robotics integration.

## Week 7: Humanoid Locomotion Fundamentals
*   **Topics**:
    *   Kinematics and dynamics of bipedal robots.
    *   Gait generation: patterns, phases.
    *   Zero-Moment Point (ZMP) theory and Center of Mass (COM).
    *   Support polygon and dynamic stability.
*   **Key Concepts**: Bipedal Locomotion, Gait Generation, ZMP, COM, Support Polygon, Dynamic Stability.
*   **Lab Activity**: Simulate a basic humanoid walking gait, analyze ZMP/COM trajectory (using `gait_generation.py`).
*   **Assessment Idea**: Calculate ZMP for a given bipedal robot's state and verify stability.

## Week 8: Humanoid Balance & Whole-Body Control
*   **Topics**:
    *   Static vs. Dynamic Balance strategies.
    *   Implementing ZMP-based balance control.
    *   Whole-Body Control (WBC) for coordinated movements.
    *   Feedback control for stability.
*   **Key Concepts**: Whole-Body Control, Balance Control, Feedback Control, Inverse Dynamics.
*   **Lab Activity**: Implement a simple whole-body controller for balance (using `whole_body_controller_node.py` concepts).
*   **Assessment Idea**: Simulate an external perturbation to a balanced humanoid and design a control law to regain stability.

## Week 9: Humanoid Manipulation & Inverse Kinematics
*   **Topics**:
    *   Forward vs. Inverse Kinematics (IK).
    *   Analytical and numerical IK solutions.
    *   Redundant manipulators and pseudoinverse.
    *   Practical implementation of IK for humanoid arms.
*   **Key Concepts**: Forward Kinematics, Inverse Kinematics, Redundancy, Jacobian Pseudoinverse.
*   **Lab Activity**: Implement inverse kinematics for a simple 2-DOF arm (using `inverse_kinematics.py`).
*   **Assessment Idea**: Given a target end-effector pose, compute joint angles for a 3-DOF robotic arm.

## Week 10: Grasping Strategies & Force Control
*   **Topics**:
    *   Types of grasps and grippers for humanoids.
    *   Introduction to force control (Impedance, Admittance).
    *   Integration of grasping with IK and perception.
    *   Tactile sensing for manipulation.
*   **Key Concepts**: Grasping, Force Control, Impedance Control, Admittance Control, Tactile Sensing.
*   **Lab Activity**: Simulate a basic grasping action in a virtual environment.
*   **Assessment Idea**: Design a control strategy for a robot to push an object with a desired force.

## Week 11: Conversational Robotics with GPT Models
*   **Topics**:
    *   NLU, NLG, STT, and TTS in robotics.
    *   GPT models and LLMs: capabilities and limitations for robot control.
    *   LLM API integration for command interpretation.
    *   Prompt engineering for safe and effective robot commands.
    *   Ethical considerations and safety protocols.
*   **Key Concepts**: LLMs, GPT Models, Prompt Engineering, STT, TTS, Dialogue Management.
*   **Lab Activity**: Integrate conceptual STT, LLM API call, and TTS to create a basic voice command system (using `speech_to_text.py`, `llm_robot_integration.py`, `text_to_speech.py`).
*   **Assessment Idea**: Design prompts for an LLM to generate robot actions for a specific task, considering safety constraints.

<h2> Week 12: Capstone Project Integration </h2>
*   **Topics**:
    *   Review of all core modules.
    *   System architecture design for the autonomous humanoid lab.
    *   ROS 2 integration patterns for complex systems.
    *   High-level task planning and execution flow.
*   **Key Concepts**: System Integration, ROS 2 Architecture, Multi-Robot Systems, Debugging.
*   **Lab Activity**: Begin integrating components of the capstone project (STT, LLM-based task planning, basic perception).
*   **Assessment Idea**: Present a detailed system design document for the capstone project.

<h2> Week 13: Capstone Project: Autonomous Humanoid Lab & Presentation </h2>
*   **Topics**:
    *   Final integration and testing of the autonomous humanoid system.
    *   Addressing unexpected events and robust error handling.
    *   Verbal feedback and human-robot interaction.
    *   Project presentation and demonstration guidelines.
*   **Key Concepts**: Autonomous Systems, Human-Robot Interaction, Fault Tolerance, System Validation.
*   **Lab Activity**: Complete and demonstrate the autonomous humanoid capstone project (voice-controlled navigation and interaction).
*   **Assessment Idea**: Capstone project demonstration and detailed project report.
