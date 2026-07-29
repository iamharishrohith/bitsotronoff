import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/lib/keystatic';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, ArrowRight, Cpu, ShieldCheck, Check } from 'lucide-react';

interface ProductDetailProps {
  params: { slug: string };
}

export default async function ProductDetailPage({ params }: ProductDetailProps) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <section className="section section-dark" style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
        <div className="container">
          <Link href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#FCBD00', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            <ArrowLeft size={16} /> Back to All Products
          </Link>
          <span className="badge badge-dark" style={{ display: 'block', width: 'max-content', marginBottom: '1rem' }}>
            {product.category?.toUpperCase()} SOLUTION
          </span>
          <h1 style={{ marginBottom: '1rem' }}>{product.title}</h1>
          <p style={{ fontSize: '1.25rem', color: '#FCBD00', fontWeight: 600, maxWidth: '720px' }}>
            {product.tagline}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <h2>Product Overview</h2>
            <p style={{ fontSize: '1.1rem', marginTop: '1rem', marginBottom: '2rem', lineHeight: 1.7 }}>
              {product.summary}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Card variant="surface">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <Check size={20} color="#16a34a" style={{ marginTop: 4 }} />
                  <div>
                    <h4 style={{ margin: 0 }}>Deterministic Memory-Safe Architecture</h4>
                    <p style={{ margin: '4px 0 0', fontSize: '0.9rem' }}>
                      Written in pure Rust with strict compile-time safety checks and sub-millisecond execution guarantees.
                    </p>
                  </div>
                </div>
              </Card>

              <Card variant="surface">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <Check size={20} color="#16a34a" style={{ marginTop: 4 }} />
                  <div>
                    <h4 style={{ margin: 0 }}>Off-Grid Zero-Tether Autonomy</h4>
                    <p style={{ margin: '4px 0 0', fontSize: '0.9rem' }}>
                      Maintains full operational intelligence even during total connectivity failure.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div>
            <Card variant="dark">
              <h3 style={{ color: '#FCBD00', marginBottom: '1rem' }}>Deployment Specifications</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #3a3a3a', paddingBottom: '0.5rem' }}>
                  <span style={{ color: '#a1a1a1' }}>Latency Guarantee:</span>
                  <span style={{ fontWeight: 600 }}>&lt; 0.4 ms</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #3a3a3a', paddingBottom: '0.5rem' }}>
                  <span style={{ color: '#a1a1a1' }}>Security Baseline:</span>
                  <span style={{ fontWeight: 600 }}>Post-Quantum Crypto</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #3a3a3a', paddingBottom: '0.5rem' }}>
                  <span style={{ color: '#a1a1a1' }}>Hardware Target:</span>
                  <span style={{ fontWeight: 600 }}>ARM64, x86_64, FPGA</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem' }}>
                  <span style={{ color: '#a1a1a1' }}>Certifications:</span>
                  <span style={{ fontWeight: 600 }}>SOC2 Type II, ISO 27001</span>
                </li>
              </ul>

              <div style={{ marginTop: '2rem' }}>
                <Link href="/contact" style={{ width: '100%' }}>
                  <Button variant="primary" size="lg" style={{ width: '100%' }} icon={<ArrowRight size={18} />}>
                    Request Trial License
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
