import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getHomePageData } from '@/lib/keystatic';
import { HeroSection } from '@/components/sections/HeroSection';
import { Button } from '@/components/ui/Button';
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  GraduationCap,
  HeartPulse,
  MonitorSmartphone,
  Store,
  UsersRound,
  Video,
  Wifi,
} from 'lucide-react';
import { AnimationStoryboard } from '@/components/sections/AnimationStoryboard';
import styles from './page.module.css';

const customerSteps = [
  {
    icon: Wifi,
    title: 'Connect locally',
    desc: 'Users join the BITSOTRON Wi‑Fi network from any phone, tablet, or laptop.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Open the portal',
    desc: 'They visit a simple browser portal such as mdc.local. No app download required.',
  },
  {
    icon: CheckCircle2,
    title: 'Access content',
    desc: 'Videos, documents, forms, catalogs, guides, and dashboards load from the device.',
  },
];

const contentTypes = [
  { icon: Video, label: 'Videos' },
  { icon: FileText, label: 'Documents' },
  { icon: ClipboardCheck, label: 'Forms' },
  { icon: BarChart3, label: 'Dashboards' },
];

const sectors = [
  {
    icon: GraduationCap,
    title: 'Education',
    desc: 'Offline video lessons, digital notes, quizzes, forms, and training resources.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    desc: 'Local access to health guides, camp forms, patient instructions, and awareness content.',
  },
  {
    icon: Store,
    title: 'Retail & Events',
    desc: 'Product catalogs, registration forms, demo videos, brochures, and visitor engagement.',
  },
  {
    icon: Building2,
    title: 'Industry & Field Teams',
    desc: 'Operational manuals, onboarding material, safety guides, and service documentation.',
  },
];

const investorSignals = [
  'Clear offline-first market need',
  'Works across multiple sectors',
  'Hardware + software platform story',
  'Simple user behavior: connect, open, access',
];

export default async function HomePage() {
  const homeData = await getHomePageData();

  return (
    <>
      <HeroSection
        announcement={homeData?.announcement}
        headline={homeData?.headline}
        subheadline={homeData?.subheadline}
      />

      <section className="section section-surface">
        <div className="container">
          <div className={styles.showcaseGrid}>
            <div className={styles.showcaseCopy}>
              <span className="badge">Investor-ready product story</span>
              <h2>One device. One local network. Instant digital access.</h2>
              <p>
                BITSOTRON turns any location into a private digital content zone. Customers do not need to understand
                servers, cloud dashboards, or network complexity — they simply connect and access what they need.
              </p>
              <div className={styles.signalList}>
                {investorSignals.map((item) => (
                  <span key={item}>
                    <CheckCircle2 size={17} />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.productVisual}>
              <Image
                src="/hero-render.png"
                alt="BITSOTRON offline dashboard interface"
                width={760}
                height={760}
                className={styles.productImage}
                priority
              />
              <div className={styles.visualBadge}>
                <UsersRound size={18} />
                <span>Designed for non-technical users</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="badge">Customer UX</span>
            <h2>Simple enough for first-time users. Strong enough for field deployment.</h2>
            <p>
              The product journey is intentionally simple: connect to the local network, open the browser portal, and
              use the content. This makes the value easy to understand for customers, partners, and investors.
            </p>
          </div>

          <div className={styles.stepGrid}>
            {customerSteps.map(({ icon: Icon, title, desc }, index) => (
              <article key={title} className={styles.stepCard}>
                <span className={styles.stepNumber}>0{index + 1}</span>
                <div className={styles.stepIcon}>
                  <Icon size={25} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <div className={styles.contentGrid}>
            <div>
              <span className="badge">What customers access</span>
              <h2>Digital resources without internet friction.</h2>
              <p>
                BITSOTRON is easier to explain when the content is visible. The interface highlights the exact resource
                types customers care about: learning, forms, operations, product information, and local dashboards.
              </p>
            </div>
            <div className={styles.contentTiles}>
              {contentTypes.map(({ icon: Icon, label }) => (
                <div key={label} className={styles.contentTile}>
                  <Icon size={26} />
                  <strong>{label}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.architectureHeader}>
            <span className="badge">Interactive architecture</span>
            <h2>From power-on to offline content delivery</h2>
          </div>

          <AnimationStoryboard />
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="badge">Market use cases</span>
            <h2>Built for sectors where connectivity cannot be assumed.</h2>
          </div>

          <div className={styles.sectorGrid}>
            {sectors.map(({ icon: Icon, title, desc }) => (
              <article key={title} className={styles.sectorCard}>
                <div className={styles.sectorIcon}>
                  <Icon size={24} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`section section-dark ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaPanel}>
            <span className="badge badge-dark">Ready to deploy?</span>
            <h2>Bring reliable digital access to places where connectivity fails.</h2>
            <p>
              Schedule a technical consultation to map your content, users, deployment site, admin workflows, and
              offline data needs into a BITSOTRON rollout plan.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact">
                <Button variant="primary" size="lg" icon={<ArrowRight size={18} />}>
                  Book Technical Consultation
                </Button>
              </Link>
              <Link href="/technology">
                <Button variant="secondary" size="lg">
                  View Architecture
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
