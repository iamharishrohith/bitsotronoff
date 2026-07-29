'use client';

import React from 'react';
import styles from './Marquee.module.css';

interface MarqueeProps {
  items: React.ReactNode[];
  speed?: number;
}

export const Marquee: React.FC<MarqueeProps> = ({ items }) => {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeTrack}>
        {items.concat(items).map((item, index) => (
          <div key={index} className={styles.marqueeItem}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
