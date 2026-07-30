'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Boxes, DatabaseZap, Gauge, Layers3, RadioTower, UsersRound } from 'lucide-react';
import styles from './AnimationStoryboard.module.css';

type StoryboardNode = 'deploy' | 'connect' | 'publish' | 'measure';

const nodes: Record<
  StoryboardNode,
  {
    label: string;
    title: string;
    desc: string;
  }
> = {
  deploy: {
    label: '01',
    title: 'Deploy a local hub',
    desc: 'Place the BITSOTRON unit at a school, event, camp, shop, or field site and power it on.',
  },
  connect: {
    label: '02',
    title: 'Users join local Wi‑Fi',
    desc: 'Phones, tablets, and laptops connect to the private network and open mdc.local in a browser.',
  },
  publish: {
    label: '03',
    title: 'Serve content instantly',
    desc: 'Videos, PDFs, forms, catalogs, guides, dashboards, and training modules load from the device.',
  },
  measure: {
    label: '04',
    title: 'Operate with insight',
    desc: 'Admins can update content, collect offline responses, and review usage signals for each deployment.',
  },
};

const nodeOrder = Object.keys(nodes) as StoryboardNode[];

export const AnimationStoryboard: React.FC = () => {
  const [activeNode, setActiveNode] = useState<StoryboardNode>('deploy');
  const active = nodes[activeNode];

  return (
    <div className={styles.storyShell}>
      <div className={styles.visualPane}>
        <motion.div
          className={styles.halo}
          animate={{ rotate: 360 }}
          transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
          aria-hidden="true"
        />
        <div className={styles.centerDevice}>
          <Boxes size={34} />
          <strong>BITSOTRON</strong>
          <span>Offline Edge Cloud</span>
        </div>

        {nodeOrder.map((key, index) => {
          const Icon = [Layers3, RadioTower, DatabaseZap, Gauge][index];
          return (
            <button
              key={key}
              type="button"
              onClick={() => setActiveNode(key)}
              className={`${styles.orbitNode} ${styles[`node${index + 1}`]} ${
                activeNode === key ? styles.active : ''
              }`}
            >
              <Icon size={20} />
              <span>{nodes[key].label}</span>
            </button>
          );
        })}
      </div>

      <motion.div
        key={activeNode}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.24 }}
        className={styles.copyPane}
      >
        <span className="badge">Company architecture</span>
        <h3>{active.title}</h3>
        <p>{active.desc}</p>
        <div className={styles.metricsGrid}>
          <div>
            <strong>6+</strong>
            <span>content types</span>
          </div>
          <div>
            <strong>0</strong>
            <span>internet dependency</span>
          </div>
          <div>
            <strong>Many</strong>
            <span>sector use cases</span>
          </div>
        </div>
        <div className={styles.userRow}>
          <UsersRound size={18} />
          <span>Built for education, healthcare, agriculture, retail, events, industry, and rural programs.</span>
        </div>
      </motion.div>
    </div>
  );
};
