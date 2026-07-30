'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Send, Linkedin, Twitter, Github, Youtube, Check, ShieldCheck, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.topRow}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoLink}>
              <span className={styles.logoMark}>
                <Image
                  src="/logo.png"
                  alt="BITSOTRON Logo"
                  width={44}
                  height={44}
                  className={styles.logoImage}
                />
              </span>
              <span className={styles.logoText}>
                BITSO<span className="gradient-text">TRON</span>
              </span>
            </Link>

            <p className={styles.brandDesc}>
              Autonomous intelligence micro-kernel runtime for enterprise robotics, edge compute, and mission-critical cyber-physical infrastructure.
            </p>

            <div className={styles.socialRow}>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className={styles.socialIcon}>
                <Twitter size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={styles.socialIcon}>
                <Linkedin size={18} />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className={styles.socialIcon}>
                <Github size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className={styles.socialIcon}>
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Nav Columns */}
          <div className={styles.linksGrid}>
            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>Platform</h4>
              <ul className={styles.linkList}>
                <li><Link href="/products">BITSOTRON Core</Link></li>
                <li><Link href="/products">BITSOTRON Edge</Link></li>
                <li><Link href="/products">BITSOTRON Shield</Link></li>
                <li><Link href="/mdc-building" style={{ color: '#FCBD00', fontWeight: 'bold' }}>MDC Building</Link></li>
                <li><Link href="/technology">Architecture</Link></li>
              </ul>
            </div>

            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>Company</h4>
              <ul className={styles.linkList}>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>Support</h4>
              <ul className={styles.linkList}>
                <li><Link href="/support">Help Center</Link></li>
                <li><Link href="/support">Documentation</Link></li>
                <li><Link href="/support">System Status</Link></li>
                <li><Link href="/support">Raise a Ticket</Link></li>
              </ul>
            </div>

            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>Legal</h4>
              <ul className={styles.linkList}>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/cookies">Cookie Policy</Link></li>
                <li><Link href="/security"><ShieldCheck size={14} style={{ display: 'inline', marginRight: 4 }} />Trust & Security</Link></li>
              </ul>
            </div>
          </div>

          {/* Stay Connected Column */}
          <div className={styles.newsletterCol}>
            <h4 className={styles.colTitle}>Stay Updated</h4>
            <p className={styles.newsletterText} style={{ marginBottom: '1rem' }}>
              Follow our engineering logs, research pillars, and updates on our verified developers channels.
            </p>
            <div style={{ padding: '0.85rem 1rem', background: 'var(--color-dark-surface)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255, 255, 255, 0.05)', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <Mail size={16} color="#FCBD00" style={{ flexShrink: 0 }} />
              <div>
                <strong style={{ display: 'block', fontSize: '0.85rem', color: '#fff' }}>General Announcements:</strong>
                <a href="mailto:bitsotron@gmail.com" style={{ color: '#FCBD00', fontWeight: 600 }}>bitsotron@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} BITSOTRON Inc. All rights reserved. Powered by Next.js & Keystatic.
          </p>
          <div className={styles.complianceBadges}>
            <span className="badge badge-dark">SOC2 Type II</span>
            <span className="badge badge-dark">ISO 27001</span>
            <span className="badge badge-dark">FedRAMP Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
