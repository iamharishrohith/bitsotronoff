'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, ShieldCheck, Layers, Globe } from 'lucide-react';
import styles from './TechArchitectureDiagram.module.css';

type NodeKey = 'kernel' | 'edge' | 'crypto' | 'cloud';

interface NodeConfig {
  key: NodeKey;
  label: string;
  title: string;
  subTitle: string;
  desc: string;
  icon: React.ComponentType<{ size?: string | number; className?: string }>;
  position: { left: string; top: string };
  metrics: Array<{ name: string; value: string }>;
}

const nodes: NodeConfig[] = [
  {
    key: 'edge',
    label: 'EDGE NODES',
    title: 'Edge Telemetry Swarm Nodes',
    subTitle: 'Robotics & IoT',
    desc: 'Direct sensor integration supporting ROS2, CAN-bus, EtherCAT, and LiDAR pipelines across field hardware. Operates locally with sub-millisecond local serialization.',
    icon: Layers,
    position: { left: '22%', top: '50%' },
    metrics: [
      { name: 'Protocol', value: 'ROS2 / EtherCAT' },
      { name: 'Sensor Pipelines', value: 'LiDAR, IMU, CAN' },
      { name: 'Execution Bound', value: 'Sub-millisecond' },
    ],
  },
  {
    key: 'kernel',
    label: 'MICRO-KERNEL',
    title: 'Deterministic Micro-Kernel',
    subTitle: 'Rust Engine',
    desc: 'Written in memory-safe Rust with zero heap allocation during execution loops. Enforces 0.4ms hard real-time latency deadlines with full static thread pinning.',
    icon: Cpu,
    position: { left: '50%', top: '50%' },
    metrics: [
      { name: 'Core Engine', value: 'Rust (no-std)' },
      { name: 'Real-time Latency', value: '0.4ms Deadline' },
      { name: 'Heap Allocation', value: '0 Bytes (Static)' },
    ],
  },
  {
    key: 'crypto',
    label: 'SHIELD',
    title: 'Cryptographic Enclave (Shield)',
    subTitle: 'Quantum Armor',
    desc: 'Post-quantum Kyber-1024 key encapsulation and Dilithium digital signatures protect telemetry payload streams against future interception, decapsulation, or spoofing.',
    icon: ShieldCheck,
    position: { left: '50%', top: '20%' },
    metrics: [
      { name: 'Algorithms', value: 'Kyber / Dilithium' },
      { name: 'Threat Level', value: 'Quantum Resistant' },
      { name: 'Hardware Seal', value: 'HSM Cryptographic' },
    ],
  },
  {
    key: 'cloud',
    label: 'CLOUD SYNC',
    title: 'Autonomous Swarm Sync Gateway',
    subTitle: 'Swarm Mesh',
    desc: 'Asynchronous event mesh syncing global telemetry state and continuous model updates back to enterprise command, automatically handling intermittent link outages.',
    icon: Globe,
    position: { left: '78%', top: '50%' },
    metrics: [
      { name: 'Mesh Sync', value: 'Asynchronous Event' },
      { name: 'Outage Tolerance', value: 'Store & Forward' },
      { name: 'Data Consistency', value: '99.98% Confirmed' },
    ],
  },
];

export const TechArchitectureDiagram: React.FC = () => {
  const [activeKey, setActiveKey] = useState<NodeKey>('kernel');
  const activeNode = nodes.find((n) => n.key === activeKey) || nodes[1];

  return (
    <div className={styles.diagramWrapper}>
      {/* High-Tech Visual Canvas */}
      <div className={styles.canvasContainer}>
        {/* Connection Lines (Desktop SVG Overlay) */}
        <svg viewBox="0 0 800 400" className={styles.connectionsSvg} aria-hidden="true">
          <defs>
            <linearGradient id="gradient-gold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FC9700" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#FCBD00" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FC9700" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          {/* Edge -> Kernel */}
          <line x1="176" y1="200" x2="400" y2="200" className={styles.bgLine} />
          <line x1="176" y1="200" x2="400" y2="200" className={`${styles.pulseLine} ${activeKey === 'edge' || activeKey === 'kernel' ? styles.pulseActive : ''}`} />
          
          {/* Kernel -> Cloud */}
          <line x1="400" y1="200" x2="624" y2="200" className={styles.bgLine} />
          <line x1="400" y1="200" x2="624" y2="200" className={`${styles.pulseLine} ${activeKey === 'kernel' || activeKey === 'cloud' ? styles.pulseActive : ''}`} />
          
          {/* Shield -> Kernel */}
          <line x1="400" y1="80" x2="400" y2="200" className={styles.bgLine} />
          <line x1="400" y1="80" x2="400" y2="200" className={`${styles.pulseLine} ${activeKey === 'crypto' || activeKey === 'kernel' ? styles.pulseActive : ''}`} />
        </svg>

        {/* Dotted Grid Background */}
        <div className={styles.gridOverlay} />

        {/* Nodes layer */}
        <div className={styles.nodesContainer}>
          {nodes.map((node) => {
            const Icon = node.icon;
            const isActive = node.key === activeKey;
            
            return (
              <button
                key={node.key}
                type="button"
                className={`${styles.nodeCard} ${isActive ? styles.nodeActive : ''}`}
                style={{
                  left: node.position.left,
                  top: node.position.top,
                }}
                onClick={() => setActiveKey(node.key)}
              >
                <div className={styles.nodeIconWrapper}>
                  <Icon size={20} className={styles.nodeIcon} />
                </div>
                <div className={styles.nodeText}>
                  <span className={styles.nodeLabel}>{node.label}</span>
                  <span className={styles.nodeSub}>{node.subTitle}</span>
                </div>
                {isActive && <div className={styles.glowHalo} />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Diagnostics Dashboard Console */}
      <motion.div
        key={activeKey}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className={styles.diagnosticsConsole}
      >
        <div className={styles.consoleHeader}>
          <div className={styles.statusDotWrapper}>
            <span className={styles.statusDot} />
            <span className={styles.statusText}>DIAGNOSTICS: ACTIVE</span>
          </div>
          <span className={styles.consoleTitle}>BITSOTRON V3.0 KERNEL SERVICE</span>
        </div>

        <div className={styles.consoleContent}>
          <div className={styles.consoleMain}>
            <span className="badge badge-dark" style={{ marginBottom: '0.5rem' }}>LAYER DESCRIPTION</span>
            <h3 className={styles.consoleH3}>{activeNode.title}</h3>
            <p className={styles.consoleDesc}>{activeNode.desc}</p>
          </div>

          <div className={styles.consoleMetrics}>
            <span className="badge badge-dark" style={{ marginBottom: '0.5rem' }}>METRICS & TELEMETRY</span>
            <div className={styles.metricsGrid}>
              {activeNode.metrics.map((metric) => (
                <div key={metric.name} className={styles.metricItem}>
                  <span className={styles.metricName}>{metric.name}</span>
                  <span className={styles.metricValue}>{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
