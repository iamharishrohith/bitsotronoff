'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Boxes,
  ChevronDown,
  Cpu,
  RadioTower,
  Shield,
  Sparkles,
  Wifi,
  X,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  announcement?: string | null;
  headline?: string | null;
  subheadline?: string | null;
}

const contentTiles = ['Videos', 'Forms', 'Guides', 'Catalogs', 'Training', 'Dashboards'];

export const HeroSection: React.FC<HeroSectionProps> = ({
  announcement,
  headline,
  subheadline,
}) => {
  const [showPill, setShowPill] = useState(true);

  const defaultSubheadline =
    'A plug-and-play mini data center that creates its own local Wi‑Fi access layer for documents, videos, forms, catalogs, dashboards, and training content — no public internet required.';
  const defaultAnnouncement = 'Announcing BITSOTRON v3.0 Micro‑Kernel — offline access, rebuilt for the edge';

  return (
    <section className={`section ${styles.heroContainer}`}>
      <div className={styles.meshBackdrop} aria-hidden="true" />
      <motion.div
        className={styles.orbOne}
        aria-hidden="true"
        animate={{ y: [0, -18, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={styles.orbTwo}
        aria-hidden="true"
        animate={{ y: [0, 20, 0], x: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className={`container ${styles.heroContent}`}>


        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={styles.introBadge}
        >
          <span className="badge">Offline-first digital infrastructure</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.mainHeadline}
        >
          {headline || (
            <>
              Private digital access, running <br />
              <span className="gradient-text">anywhere the internet cannot</span>
            </>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={styles.subHeadline}
          style={{ whiteSpace: 'pre-line' }}
        >
          {subheadline || defaultSubheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={styles.ctaGroup}
        >
          <Link href="/products">
            <Button variant="primary" size="lg" icon={<ArrowRight size={18} />}>
              Explore Platform
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Book Technical Demo
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className={styles.productStage}
        >
          <div className={styles.deviceCard}>
            <div className={styles.deviceTop}>
              <span className={styles.statusDot} />
              <span>mdc.local</span>
              <span className={styles.signal}>Local Wi‑Fi active</span>
            </div>
            <div className={styles.deviceBody}>
              <motion.div
                className={styles.coreNode}
                animate={{
                  boxShadow: [
                    '0 0 0 rgba(255, 138, 0, 0)',
                    '0 0 44px rgba(255, 138, 0, 0.34)',
                    '0 0 0 rgba(255, 138, 0, 0)',
                  ],
                }}
                transition={{ duration: 2.6, repeat: Infinity }}
              >
                <Boxes size={30} />
                <strong>BITSOTRON</strong>
                <small>Edge Hub</small>
              </motion.div>
              <div className={styles.deviceGrid}>
                {contentTiles.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.nodeCluster} aria-hidden="true">
            <motion.span animate={{ scale: [1, 1.18, 1] }} transition={{ duration: 2.4, repeat: Infinity }} />
            <motion.span animate={{ scale: [1, 1.16, 1] }} transition={{ duration: 2.7, repeat: Infinity, delay: 0.4 }} />
            <motion.span animate={{ scale: [1, 1.14, 1] }} transition={{ duration: 3, repeat: Infinity, delay: 0.7 }} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={styles.trustBadgesRow}
        >
          <div className={styles.trustItem}>
            <Shield size={16} color="#FF8A00" />
            <span>Private-by-design access</span>
          </div>
          <div className={styles.trustItem}>
            <Cpu size={16} color="#FCBD00" />
            <span>Local edge compute</span>
          </div>
          <div className={styles.trustItem}>
            <Zap size={16} color="#FF8A00" />
            <span>Fast offline delivery</span>
          </div>
          <div className={styles.trustItem}>
            <RadioTower size={16} color="#FC9700" />
            <span>No public internet required</span>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className={`grid-3 ${styles.featuresGrid}`}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ y: -8, scale: 1.025 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Card variant="default" className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Wifi size={24} color="#FF8A00" />
              </div>
              <h3>Total Autonomy</h3>
              <p>Zero internet required. Devices broadcast a private local network for instant access.</p>
            </Card>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ y: -8, scale: 1.025 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Card variant="default" className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Cpu size={24} color="#FCBD00" />
              </div>
              <h3>Edge Power</h3>
              <p>Server-like content delivery and admin workflows in compact field-ready hardware.</p>
            </Card>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ y: -8, scale: 1.025 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Card variant="default" className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Shield size={24} color="#FC9700" />
              </div>
              <h3>Absolute Privacy</h3>
              <p>Content stays local to the site, reducing public-cloud dependency and network exposure.</p>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className={styles.scrollIndicator}
        >
          <span>Explore Architecture</span>
          <ChevronDown size={18} color="#FF8A00" />
        </motion.div>
      </div>
    </section>
  );
};
