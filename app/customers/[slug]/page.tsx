import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCaseStudyBySlug } from '@/lib/keystatic';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, ArrowRight, Trophy, CheckCircle2 } from 'lucide-react';

interface CaseStudyDetailProps {
  params: { slug: string };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyDetailProps) {
  const cs = await getCaseStudyBySlug(params.slug);

  if (!cs) {
    notFound();
  }

  return (
    <>
      <section className="section section-dark" style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
        <div className="container">
          <Link href="/customers" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#FCBD00', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            <ArrowLeft size={16} /> Back to Customers & Case Studies
          </Link>
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
            <span className="badge badge-dark">{cs.industry}</span>
            <span className="badge badge-dark" style={{ color: '#4ade80' }}>{cs.headlineMetric}</span>
          </div>
          <h1 style={{ marginBottom: '1rem' }}>{cs.title}</h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)', maxWidth: '720px' }}>
            Client: <strong style={{ color: '#FCBD00' }}>{cs.client}</strong>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <h2>Executive Summary</h2>
            <p style={{ fontSize: '1.1rem', marginTop: '1rem', marginBottom: '2rem', lineHeight: 1.7 }}>
              {cs.summary}
            </p>

            <Card variant="surface">
              <h3 style={{ marginBottom: '1rem' }}>Key Takeaways & Results</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <CheckCircle2 size={18} color="#16a34a" /> Zero safety incidents reported post-deployment.
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <CheckCircle2 size={18} color="#16a34a" /> 38% improvement in average task execution speed.
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <CheckCircle2 size={18} color="#16a34a" /> Seamless hardware retrofitting in less than 3 days per node.
                </li>
              </ul>
            </Card>
          </div>

          <div>
            <Card variant="dark">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <Trophy size={28} color="#FCBD00" />
                <h3 style={{ color: '#FCBD00', margin: 0 }}>Project Impact</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <span style={{ fontSize: '0.85rem', color: '#a1a1a1' }}>PRIMARY METRIC</span>
                  <p style={{ fontSize: '1.75rem', fontWeight: 800, color: '#4ade80', margin: 0 }}>
                    {cs.headlineMetric}
                  </p>
                </div>
                <div>
                  <span style={{ fontSize: '0.85rem', color: '#a1a1a1' }}>ENVIRONMENT</span>
                  <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff', margin: 0 }}>
                    500+ Autonomous Nodes Swarm
                  </p>
                </div>
                <div>
                  <span style={{ fontSize: '0.85rem', color: '#a1a1a1' }}>DEPLOYMENT TIME</span>
                  <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff', margin: 0 }}>
                    60 Days Turnkey Rollout
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <Link href="/contact" style={{ width: '100%' }}>
                  <Button variant="primary" size="lg" style={{ width: '100%' }} icon={<ArrowRight size={18} />}>
                    Discuss Your Deployment
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
