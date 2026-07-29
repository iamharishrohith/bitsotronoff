'use client';

import React from 'react';
import { motion } from 'motion/react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'surface' | 'dark' | 'glass';
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  hoverEffect = true,
}) => {
  const variantClass = styles[variant] || styles.default;

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={`${styles.card} ${variantClass} ${className}`}
    >
      {children}
    </motion.div>
  );
};
