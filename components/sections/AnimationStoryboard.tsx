'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import styles from './TechArchitectureDiagram.module.css';

type StoryboardNode = 'idea' | 'engineering' | 'testing' | 'manufacturing' | 'sales' | 'scaling';

export const AnimationStoryboard: React.FC = () => {
  const [activeNode, setActiveNode] = useState<StoryboardNode>('idea');

  return (
    <div className={styles.diagramWrapper} style={{ width: '100%' }}>
      <div className={styles.svgContainer} style={{ maxWidth: '100%' }}>
        <svg viewBox="0 0 800 400" className={styles.svg}>
          {/* Loop Connecting Paths (Hexagon structure) */}
          <line x1="325" y1="105" x2="475" y2="105" className={styles.pulseLine} />
          <line x1="475" y1="105" x2="550" y2="200" className={styles.pulseLine} />
          <line x1="550" y1="200" x2="475" y2="295" className={styles.pulseLine} />
          <line x1="475" y1="295" x2="325" y2="295" className={styles.pulseLine} />
          <line x1="325" y1="295" x2="250" y2="200" className={styles.pulseLine} />
          <line x1="250" y1="200" x2="325" y2="105" className={styles.pulseLine} />

          {/* Central Loop Node */}
          <g className={styles.nodeGroup}>
            <circle cx="400" cy="200" r="55" className={styles.nodeCircleMain} style={{ stroke: '#FCBD00' }} />
            <text x="400" y="204" className={styles.nodeTextTitleMain}>BITSOTRON</text>
          </g>

          {/* Node 1: Idea */}
          <g onClick={() => setActiveNode('idea')} className={styles.nodeGroup}>
            <circle cx="325" cy="105" r="40" className={`${styles.nodeCircle} ${activeNode === 'idea' ? styles.active : ''}`} />
            <text x="325" y="109" className={styles.nodeTextTitle}>01. IDEA</text>
          </g>

          {/* Node 2: Engineering */}
          <g onClick={() => setActiveNode('engineering')} className={styles.nodeGroup}>
            <circle cx="475" cy="105" r="40" className={`${styles.nodeCircle} ${activeNode === 'engineering' ? styles.active : ''}`} />
            <text x="475" y="109" className={styles.nodeTextTitle}>02. DEV</text>
          </g>

          {/* Node 3: Testing */}
          <g onClick={() => setActiveNode('testing')} className={styles.nodeGroup}>
            <circle cx="550" cy="200" r="40" className={`${styles.nodeCircle} ${activeNode === 'testing' ? styles.active : ''}`} />
            <text x="550" y="204" className={styles.nodeTextTitle}>03. TEST</text>
          </g>

          {/* Node 4: Manufacturing */}
          <g onClick={() => setActiveNode('manufacturing')} className={styles.nodeGroup}>
            <circle cx="475" cy="295" r="40" className={`${styles.nodeCircle} ${activeNode === 'manufacturing' ? styles.active : ''}`} />
            <text x="475" y="299" className={styles.nodeTextTitle}>04. BUILD</text>
          </g>

          {/* Node 5: Sales */}
          <g onClick={() => setActiveNode('sales')} className={styles.nodeGroup}>
            <circle cx="325" cy="295" r="40" className={`${styles.nodeCircle} ${activeNode === 'sales' ? styles.active : ''}`} />
            <text x="325" y="299" className={styles.nodeTextTitle}>05. GTM</text>
          </g>

          {/* Node 6: Scaling & Loop */}
          <g onClick={() => setActiveNode('scaling')} className={styles.nodeGroup}>
            <circle cx="250" cy="200" r="40" className={`${styles.nodeCircle} ${activeNode === 'scaling' ? styles.active : ''}`} />
            <text x="250" y="204" className={styles.nodeTextTitle}>06. SCALE</text>
          </g>
        </svg>
      </div>
    </div>
  );
};
