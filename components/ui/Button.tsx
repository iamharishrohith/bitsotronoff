'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import styles from './Button.module.css';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  ...props
}) => {
  const variantClass = styles[variant] || styles.primary;
  const sizeClass = styles[size] || styles.md;

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${styles.button} ${variantClass} ${sizeClass} ${className}`}
      {...(props as HTMLMotionProps<'button'>)}
    >
      <span>{children}</span>
      {icon && <span className={styles.icon}>{icon}</span>}
    </motion.button>
  );
};
