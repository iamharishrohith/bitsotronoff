import React from 'react';
import Link from 'next/link';
import { getCaseStudies, getTestimonials, getPartners } from '@/lib/keystatic';
import { TestimonialCarousel } from '@/components/sections/TestimonialCarousel';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CountUp } from '@/components/ui/CountUp';
import { ArrowRight, Trophy, TrendingUp, ShieldCheck } from 'lucide-react';

export default async function CustomersPage() {
  const caseStudies = await getCaseStudies();
  const rawTestimonials = await getTestimonials();
  const partners = await getPartners();

  const testimonials = rawTestimonials.map((t) => ({
    author: t.entry.author,
    role: t.entry.role || '',
    company: t.entry.company || '',
    quote: t.entry.quote || '',
    rating: t.entry.rating || 5,
  }));

  return (
    <>
      {/* Header Banner */}
      <section className="section section-dark text-center" style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
        <div className="container">
          <span className="badge badge-dark" style={{ marginBottom: '1rem' }}>
            CUSTOMER SUCCESS
          </span>
          <h1 style={{ marginBottom: '1.25rem' }}>
            Proven Results in High-Stakes <br />
            <span className="gradient-text">Autonomous Operations</span>
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.15rem' }}>
            See how global enterprises and deep-tech pioneers scale robotics with BITSOTRON micro-kernels.
          </p>
        </div>
      </section>

      {/* Success Metrics Count-up Stats */}
      <section className="section" style={{ backgroundColor: '#fcfcfc' }}>
        <div className="container">
          <div className="grid-4 text-center">
            <div>
              <h3 style={{ fontSize: '2.5rem', color: '#FC9700' }}>
                <CountUp end={340} suffix="%" />
              </h3>
              <p style={{ fontWeight: 600, color: '#262626' }}>Average Client ROI</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2.5rem', color: '#FC9700' }}>
                <CountUp end={92} suffix="%" />
              </h3>
              <p style={{ fontWeight: 600, color: '#262626' }}>Reduction in Fleet Accidents</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2.5rem', color: '#FC9700' }}>
                <CountUp end={500} suffix="M+" />
              </h3>
              <p style={{ fontWeight: 600, color: '#262626' }}>Daily Edge Decisions</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2.5rem', color: '#FC9700' }}>
                <CountUp end={99.999} decimals={3} suffix="%" />
              </h3>
              <p style={{ fontWeight: 600, color: '#262626' }}>System Availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '2rem' }}>
            <span className="badge badge-dark">EXECUTIVE REVIEWS</span>
            <h2 style={{ marginTop: '0.75rem' }}>What Enterprise Leaders Say</h2>
          </div>
          <TestimonialCarousel items={testimonials} />
        </div>
      </section>

      {/* Case Studies Grid (From Keystatic) */}
      <section className="section section-surface">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <span className="badge">FEATURED CASE STUDIES</span>
            <h2 style={{ marginTop: '0.75rem' }}>In-Depth Deployment Stories</h2>
          </div>

          <div className="grid-2">
            {caseStudies.map((cs) => {
              const entry = cs.entry;
              return (
                <Card key={cs.slug} variant="default">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span className="badge">{entry.industry}</span>
                    <span style={{ fontWeight: 800, color: '#16a34a', fontSize: '0.9rem' }}>
                      {entry.headlineMetric}
                    </span>
                  </div>
                  <h3>{entry.title}</h3>
                  <p style={{ color: '#FC9700', fontWeight: 600, fontSize: '0.9rem', margin: '4px 0 12px' }}>
                    Client: {entry.client}
                  </p>
                  <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>{entry.summary}</p>
                  <Link href={`/customers/${cs.slug}`}>
                    <Button variant="outline" size="sm" icon={<ArrowRight size={16} />}>
                      Read Full Case Study
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner & Client Logo Grid */}
      <section className="section text-center">
        <div className="container">
          <span className="badge" style={{ marginBottom: '1rem' }}>TRUSTED ECOSYSTEM</span>
          <h2>Client & Partner Network</h2>
          <div className="grid-4" style={{ marginTop: '2.5rem' }}>
            {partners.map((p) => (
              <Card key={p.slug} variant="surface">
                <h4 style={{ color: '#262626' }}>{p.entry.name}</h4>
                <p style={{ fontSize: '0.8rem', color: '#6b6b6b' }}>{p.entry.category}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
