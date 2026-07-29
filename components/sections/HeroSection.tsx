'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, Shield, Cpu, Zap, Lock, Sparkles, X, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  announcement?: string | null;
  headline?: string | null;
  subheadline?: string | null;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  announcement,
  headline,
  subheadline,
}) => {
  const [showPill, setShowPill] = useState(true);

  const defaultHeadline = "Experience the Offline Future with BITSOTRON";
  const defaultSubheadline = "Zero Internet Dependency. Absolute Control.\nExplore now to experience the latest in zero-internet infrastructure, private architecture, and independent edge development.";
  const defaultAnnouncement = "⚡ Announcing BITSOTRON v3.0 Micro-Kernel — Explore What's New";

  return (
    <section className={`section ${styles.heroContainer}`}>
      <div className={`container ${styles.heroContent}`}>
        {/* Dismissible Announcement Pill Badge */}
        {showPill && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={styles.announcementPill}
          >
            <Sparkles size={14} className={styles.sparkleIcon} />
            <span>{announcement || defaultAnnouncement}</span>
            <button
              onClick={() => setShowPill(false)}
              className={styles.closePillBtn}
              aria-label="Dismiss announcement"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}

        {/* Company Intro Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={styles.introBadge}
        >
          <span className="badge">MINI DATA CENTER</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.mainHeadline}
        >
          {headline ? (
            headline
          ) : (
            <>
              Experience the Offline Future with <br />
              <span className="gradient-text">BITSOTRON</span>
            </>
          )}
        </motion.h1>

        {/* Supporting Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={styles.subHeadline}
          style={{ whiteSpace: 'pre-line' }}
        >
          {subheadline || defaultSubheadline}
        </motion.p>

        {/* Primary & Secondary CTAs */}
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

        {/* Trust Indicators Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={styles.trustBadgesRow}
        >
          <div className={styles.trustItem}>
            <Shield size={16} color="#FC9700" />
            <span>SOC2 Type II Certified</span>
          </div>
          <div className={styles.trustItem}>
            <Cpu size={16} color="#FC9700" />
            <span>Open Architecture Kernel</span>
          </div>
          <div className={styles.trustItem}>
            <Zap size={16} color="#FC9700" />
            <span>&lt;1ms Deterministic Latency</span>
          </div>
          <div className={styles.trustItem}>
            <Lock size={16} color="#FC9700" />
            <span>ISO 27001 Security</span>
          </div>
        </motion.div>

        {/* Key Features Staggered Grid */}
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
                <Wifi size={24} color="#FC9700" />
              </div>
              <h3>Total Autonomy</h3>
              <p>Zero internet required. Our devices broadcast their own localized Wi-Fi networks.</p>
            </Card>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ y: -8, scale: 1.025 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Card variant="default" className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Cpu size={24} color="#FC9700" />
              </div>
              <h3>Edge Power</h3>
              <p>Server-level capabilities packed into battery-powered, ultra-portable hardware.</p>
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
              <p>Because your data never touches the global web or public clouds, it is physically isolated.</p>
            </Card>
          </motion.div>
        </motion.div>





        {/* Scroll Bounce Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className={styles.scrollIndicator}
        >
          <span>Explore Architecture</span>
          <ChevronDown size={18} color="#FC9700" />
        </motion.div>
      </div>
    </section>
  );
};
