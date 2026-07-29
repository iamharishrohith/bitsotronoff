'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import styles from './TechArchitectureDiagram.module.css';

export const TechArchitectureDiagram: React.FC = () => {
  const [activeNode, setActiveNode] = useState<'kernel' | 'edge' | 'crypto' | 'cloud'>('kernel');

  const getNodeInfo = () => {
    switch (activeNode) {
      case 'kernel':
        return {
          title: 'Deterministic Micro-Kernel',
          desc: 'Written in memory-safe Rust with zero heap allocation during execution loops. Enforces 0.4ms hard real-time latency deadlines.',
        };
      case 'edge':
        return {
          title: 'Edge Telemetry Swarm Nodes',
          desc: 'Direct sensor integration supporting ROS2, CAN-bus, EtherCAT, and LiDAR pipelines across field hardware.',
        };
      case 'crypto':
        return {
          title: 'BITSOTRON Shield Cryptographic Enclave',
          desc: 'Post-quantum Kyber / Dilithium encryption securing telemetry payload streams against interception or spoofing.',
        };
      case 'cloud':
        return {
          title: 'Autonomous Swarm Sync Gateway',
          desc: 'Asynchronous event mesh syncing global telemetry state and continuous model updates back to enterprise command.',
        };
    }
  };

  const nodeInfo = getNodeInfo();

  return (
    <div className={styles.diagramWrapper}>
      {/* SVG Diagram Canvas */}
      <div className={styles.svgContainer}>
        <svg viewBox="0 0 800 400" className={styles.svg}>
          {/* Animated Connecting Lines */}
          <line x1="200" y1="200" x2="400" y2="200" className={styles.pulseLine} />
          <line x1="400" y1="200" x2="600" y2="200" className={styles.pulseLine} />
          <line x1="400" y1="200" x2="400" y2="80" className={styles.pulseLine} />

          {/* Edge Node */}
          <g onClick={() => setActiveNode('edge')} className={styles.nodeGroup}>
            <circle cx="200" cy="200" r="50" className={`${styles.nodeCircle} ${activeNode === 'edge' ? styles.active : ''}`} />
            <text x="200" y="195" className={styles.nodeTextTitle}>EDGE NODES</text>
            <text x="200" y="215" className={styles.nodeTextSub}>Robotics & IoT</text>
          </g>

          {/* Micro-Kernel Node */}
          <g onClick={() => setActiveNode('kernel')} className={styles.nodeGroup}>
            <circle cx="400" cy="200" r="65" className={`${styles.nodeCircleMain} ${activeNode === 'kernel' ? styles.activeMain : ''}`} />
            <text x="400" y="195" className={styles.nodeTextTitleMain}>MICRO-KERNEL</text>
            <text x="400" y="215" className={styles.nodeTextSubMain}>Rust Engine</text>
          </g>

          {/* Crypto Shield Node */}
          <g onClick={() => setActiveNode('crypto')} className={styles.nodeGroup}>
            <circle cx="400" cy="80" r="45" className={`${styles.nodeCircle} ${activeNode === 'crypto' ? styles.active : ''}`} />
            <text x="400" y="75" className={styles.nodeTextTitle}>SHIELD</text>
            <text x="400" y="92" className={styles.nodeTextSub}>Quantum Armor</text>
          </g>

          {/* Cloud Sync Node */}
          <g onClick={() => setActiveNode('cloud')} className={styles.nodeGroup}>
            <circle cx="600" cy="200" r="50" className={`${styles.nodeCircle} ${activeNode === 'cloud' ? styles.active : ''}`} />
            <text x="600" y="195" className={styles.nodeTextTitle}>CLOUD SYNC</text>
            <text x="600" y="215" className={styles.nodeTextSub}>Swarm Mesh</text>
          </g>
        </svg>
      </div>

      {/* Interactive Detail Box */}
      <motion.div
        key={activeNode}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className={styles.infoCard}
      >
        <span className="badge badge-dark">CLICK NODE TO INSPECT ARCHITECTURE LAYER</span>
        <h3 className={styles.infoTitle}>{nodeInfo.title}</h3>
        <p className={styles.infoDesc}>{nodeInfo.desc}</p>
      </motion.div>
    </div>
  );
};
