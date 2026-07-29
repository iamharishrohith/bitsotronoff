import React from 'react';
import Link from 'next/link';
import { getHomePageData } from '@/lib/keystatic';
import { HeroSection } from '@/components/sections/HeroSection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Cpu, ShieldCheck, Zap, Globe } from 'lucide-react';
import { AnimationStoryboard } from '@/components/sections/AnimationStoryboard';

export default async function HomePage() {
  const homeData = await getHomePageData();

  return (
    <>
      <HeroSection
        announcement={homeData?.announcement}
        headline={homeData?.headline}
        subheadline={homeData?.subheadline}
      />

      {/* Solutions Overview Section */}
      <section className="section section-surface">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2>Company Architecture</h2>
          </div>

          <AnimationStoryboard />
        </div>
      </section>

      {/* Global Call to Action Section */}
      <section className="section section-dark">
        <div className="container text-center">
          <span className="badge badge-dark" style={{ marginBottom: '1rem' }}>
            READY TO DEPLOY?
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', marginBottom: '1rem' }}>
            Deploy Autonomous Intelligence <br />
            <span className="gradient-text">To Your Hardware Infrastructure</span>
          </h2>
          <p style={{ maxWidth: '680px', margin: '0 auto 2.5rem', fontSize: '1.15rem' }}>
            Schedule an architectural deep dive with our lead robotics engineers and secure your sandbox trial.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact">
              <Button variant="primary" size="lg" icon={<ArrowRight size={18} />}>
                Book Technical Consultation
              </Button>
            </Link>
            <Link href="/technology">
              <Button variant="secondary" size="lg">
                View Architecture Docs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
