---
sidebar_position: 3
title: "Module 1 — ROS 2: The Robotic Nervous System"
---

## Chapter Overview

This module dives into the heart of modern robotics software development: ROS 2 (Robot Operating System 2). We will demystify ROS 2's modular architecture, exploring how different components (nodes) communicate to build complex robotic behaviors. You will learn about core communication concepts like topics for data streaming, services for request-response interactions, and actions for goal-oriented tasks. Practical examples using `rclpy`, the Python client library for ROS 2, will provide hands-on experience in bringing your robotic ideas to life.

## Learning Outcomes

Upon completing this module, you will be able to:
*   Explain the fundamental architecture and core concepts of ROS 2.
*   Create, compile, and run basic ROS 2 nodes using `rclpy` in Python.
*   Implement publishers to send data and subscribers to receive data via ROS 2 topics.
*   Understand the role of services and actions in ROS 2 communication patterns.
*   Develop ROS 2 packages, including `package.xml` and launch files, for managing your projects.
*   Grasp the basics of URDF (Unified Robot Description Format) for describing robot models.

## Key Concepts Explained

### ROS 2 Architecture: Nodes, Topics, Services, and Actions

ROS 2 is a flexible framework for writing robot software. It's designed for a distributed system, meaning various processes (nodes) can run on different machines and communicate seamlessly.

#### Nodes
A **Node** is an executable process that performs computation. ROS 2 applications are typically composed of many nodes, each responsible for a modular component (e.g., a node for motor control, a node for camera processing, a node for path planning).

#### Topics
**Topics** are the primary mechanism for asynchronous, many-to-many communication in ROS 2. Nodes publish data (messages) to named topics, and other nodes can subscribe to those topics to receive the data. This is ideal for streaming data like sensor readings or motor commands.

#### Services
**Services** provide a synchronous request/reply communication mechanism. A client node sends a request to a service server node, which performs a computation and sends back a response. This is suitable for actions that require a single response, like triggering a robot arm to pick up an object.

#### Actions
**Actions** are designed for long-running, goal-oriented tasks. They combine aspects of topics and services, allowing for goal requests, feedback during execution, and a final result. This is perfect for tasks like navigating to a specific location or performing a complex manipulation sequence.

#### `rclpy`: The Python Client Library
`rclpy` is the Python client library for ROS 2. It provides the necessary APIs to write ROS 2 nodes, publishers, subscribers, service clients/servers, and action clients/servers in Python. It's built on top of `rcl` (ROS Client Library) which is a C API.

#### Message Types
Messages are the data structures that nodes send over topics, services, and actions. Each message has a specific type (e.g., `std_msgs/msg/String`, `sensor_msgs/msg/LaserScan`). Using predefined message types ensures compatibility and type safety across the ROS 2 ecosystem.

#### Launch Files
**Launch files** are XML or Python scripts used to start multiple ROS 2 nodes, configure their parameters, and set up the overall system. They are crucial for orchestrating complex robotic applications.

#### Parameters
**Parameters** are dynamic configuration values for nodes. They allow you to change the behavior of a node without recompiling the code (e.g., setting a motor's maximum speed).

### URDF: Unified Robot Description Format

URDF is an XML format used in ROS to describe all aspects of a robot model. This includes its kinematics (how joints and links are connected), visual properties (geometry, color), and collision properties. URDF models are essential for simulation, visualization, and motion planning.

## Practical Examples

### Creating a Basic ROS 2 Node ("Hello World")

Let's start by creating a simple ROS 2 node that prints "Hello World".

1.  **Create a ROS 2 Package**:
    ```bash
    ros2 pkg create --build-type ament_python my_ros2_package
    ```
    This command creates a new Python package named `my_ros2_package`.

2.  **Create the Python Node File**:
    Inside `my_ros2_package/my_ros2_package/hello_world_node.py`, add the following code:
    ```python
    import rclpy
    from rclpy.node import Node

    class HelloWorldNode(Node):
        def __init__(self):
            super().__init__('hello_world_node')
            self.get_logger().info('Hello World from ROS 2 Node!')

    def main(args=None):
        rclpy.init(args=args)
        node = HelloWorldNode()
        rclpy.spin_once(node) # Spin once to execute the logger info
        node.destroy_node()
        rclpy.shutdown()

    if __name__ == '__main__':
        main()
    ```

3.  **Update `setup.py`**:
    In `my_ros2_package/setup.py`, ensure the `entry_points` are configured to make your node executable:
    ```python
    from setuptools import setup

    package_name = 'my_ros2_package'

    setup(
        name=package_name,
        version='0.0.0',
        packages=[package_name],
        # ... other setup parameters ...
        entry_points={
            'console_scripts': [
                'hello_world_node = my_ros2_package.hello_world_node:main',
            ],
        },
    )
    ```

4.  **Build the Package**:
    From your ROS 2 workspace root:
    ```bash
    colcon build --packages-select my_ros2_package
    ```

5.  **Source the Workspace and Run the Node**:
    ```bash
    source install/setup.bash
    ros2 run my_ros2_package hello_world_node
    ```
    You should see "Hello World from ROS 2 Node!" in your console.

### Implementing a Publisher and Subscriber

Now, let's create a simple talker (publisher) and listener (subscriber) that communicate over a topic.

1.  **Publisher Node (`simple_publisher.py`)**:
    Inside `my_ros2_package/my_ros2_package/simple_publisher.py`:
    ```python
    import rclpy
    from rclpy.node import Node
    from std_msgs.msg import String

    class SimplePublisher(Node):
        def __init__(self):
            super().__init__('simple_publisher')
            self.publisher_ = self.create_publisher(String, 'chatter', 10)
            timer_period = 0.5  # seconds
            self.timer = self.create_timer(timer_period, self.timer_callback)
            self.i = 0

        def timer_callback(self):
            msg = String()
            msg.data = 'Hello ROS 2: %d' % self.i
            self.publisher_.publish(msg)
            self.get_logger().info('Publishing: "%s"' % msg.data)
            self.i += 1

    def main(args=None):
        rclpy.init(args=args)
        node = SimplePublisher()
        rclpy.spin(node) # Keep spinning until node is manually stopped
        node.destroy_node()
        rclpy.shutdown()

    if __name__ == '__main__':
        main()
    ```

2.  **Subscriber Node (`simple_subscriber.py`)**:
    Inside `my_ros2_package/my_ros2_package/simple_subscriber.py`:
    ```python
    import rclpy
    from rclpy.node import Node
    from std_msgs.msg import String

    class SimpleSubscriber(Node):
        def __init__(self):
            super().__init__('simple_subscriber')
            self.subscription = self.create_subscription(
                String,
                'chatter',
                self.listener_callback,
                10)
            self.subscription # prevent unused variable warning

        def listener_callback(self, msg):
            self.get_logger().info('I heard: "%s"' % msg.data)

    def main(args=None):
        rclpy.init(args=args)
        node = SimpleSubscriber()
        rclpy.spin(node) # Keep spinning until node is manually stopped
        node.destroy_node()
        rclpy.shutdown()

    if __name__ == '__main__':
        main()
    ```

3.  **Update `setup.py`**:
    Add the new entry points to `my_ros2_package/setup.py`:
    ```python
    from setuptools import setup

    package_name = 'my_ros2_package'

    setup(
        name=package_name,
        version='0.0.0',
        packages=[package_name],
        # ... other setup parameters ...
        entry_points={
            'console_scripts': [
                'hello_world_node = my_ros2_package.hello_ros2_package.hello_world_node:main',
            ],
        },
    )
    ```

4.  **Build the Package**:
    ```bash
    colcon build --packages-select my_ros2_package
    ```

5.  **Source and Run**:
    Open two separate terminals. In both, source your workspace:
    ```bash
    source install/setup.bash
    ```
    In the first terminal, run the subscriber:
    ```bash
    ros2 run my_ros2_package simple_subscriber
    ```
    In the second terminal, run the publisher:
    ```bash
    ros2 run my_ros2_package simple_publisher
    ```
    You should see the subscriber terminal printing "I heard: " messages from the publisher.

## Summary

This module has provided a foundational understanding of ROS 2, covering its core architectural concepts and demonstrating practical Python implementations for nodes, topics, publishers, and subscribers. With these building blocks, you are now equipped to develop modular and communicative components for your robotic systems.

## Key Concepts
*   ROS 2 architecture (nodes, topics, services, actions, parameters), client libraries (`rclpy`), message types, launch files, packages, URDF.

## Tools Used
*   ROS 2, `rclpy` (Python), `ament` build system, `rviz` (visualization).

## Skills Learned
*   Create ROS 2 nodes, publish/subscribe to topics, call services, develop ROS 2 packages, understand URDF structure, visualize robot models.
