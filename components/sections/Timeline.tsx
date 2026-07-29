'use client';

import React from 'react';
import { motion } from 'motion/react';
import styles from './Timeline.module.css';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '2021',
    title: 'Founding & Research Breakthrough',
    description: 'Dr. Elena Vance and Marcus Chen spin out BITSOTRON research from MIT CSAIL, publishing landmark benchmarks on micro-kernel determinism.',
  },
  {
    year: '2022',
    title: 'Seed Funding & BITSOTRON Core v1.0',
    description: 'Raised $12M seed round led by top deep-tech VCs. Released first production release of BITSOTRON Core neural runtime.',
  },
  {
    year: '2023',
    title: 'Enterprise Deployment across 14 Ports',
    description: 'Partnered with Apex Dynamics to orchestrate 500+ autonomous AGVs in high-density port terminals worldwide.',
  },
  {
    year: '2024',
    title: 'BITSOTRON Shield & Quantum Cryptography',
    description: 'Launched BITSOTRON Shield zero-trust cybersecurity suite for Defense and Industrial IoT applications.',
  },
  {
    year: '2025',
    title: 'Global Expansion & BITSOTRON Edge v3.0',
    description: 'Crossed 500 million daily edge decision milestones with enterprise customers across 14 countries.',
  },
];

export const Timeline: React.FC = () => {
  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timelineLine} />

      {TIMELINE_EVENTS.map((event, index) => (
        <motion.div
          key={event.year}
          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
        >
          <div className={styles.timelineDot} />
          <div className={styles.timelineCard}>
            <span className={styles.yearBadge}>{event.year}</span>
            <h3 className={styles.eventTitle}>{event.title}</h3>
            <p className={styles.eventDesc}>{event.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
