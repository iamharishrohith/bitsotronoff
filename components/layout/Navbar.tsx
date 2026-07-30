'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'MDC Building', href: '/mdc-building' },
  { label: 'Technology', href: '/technology' },
  { label: 'Support', href: '/support' },
  { label: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Brand Logo */}
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logoWrapper}>
            <span className={styles.logoMark}>
              <Image
                src="/logo.png"
                alt="BITSOTRON Logo"
                width={46}
                height={46}
                priority
                className={styles.logoImage}
              />
            </span>
            <span className={styles.logoText}>
              BITSO<span className="gradient-text">TRON</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className={styles.desktopNav}>
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${isActive ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className={styles.desktopCta}>
          <Link href="/mdc-building">
            <Button variant="primary" size="sm" icon={<ArrowRight size={16} />}>
              Build MDC
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles.hamburgerBtn}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} color="#ffffff" /> : <Menu size={24} color="#ffffff" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={styles.mobileDrawer}
          >
            <div className={`container ${styles.mobileContent}`}>
              <nav className={styles.mobileNav}>
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`${styles.mobileNavLink} ${isActive ? styles.mobileActive : ''}`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className={styles.mobileCtaWrapper}>
                <Link href="/mdc-building" style={{ width: '100%' }}>
                  <Button variant="primary" size="md" style={{ width: '100%' }}>
                    Build MDC
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
