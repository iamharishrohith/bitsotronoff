import React from 'react';
import Link from 'next/link';
import { getProducts } from '@/lib/keystatic';
import { ProductComparisonTable } from '@/components/sections/ProductComparisonTable';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Cpu, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      {/* Products Banner */}
      <section className="section section-dark text-center" style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
        <div className="container">
          <span className="badge badge-dark" style={{ marginBottom: '1rem' }}>
            PRODUCTS & SOLUTIONS
          </span>
          <h1 style={{ marginBottom: '1.25rem' }}>
            Next-Gen Autonomous <br />
            <span className="gradient-text">Micro-Kernel & Hardware Suite</span>
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.15rem' }}>
            Built for extreme reliability, sub-millisecond determinism, and zero-trust security across distributed robotics and edge infrastructure.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section section-surface">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <span className="badge">PRODUCT LINEUP</span>
            <h2 style={{ marginTop: '0.75rem' }}>Select a Product Solution</h2>
          </div>

          <div className="grid-3">
            {products.map((item) => {
              const prod = item.entry;
              return (
                <Card key={item.slug} variant="default">
                  <div style={{ width: 48, height: 48, borderRadius: 8, background: 'rgba(252,151,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <Cpu size={24} color="#FC9700" />
                  </div>
                  <h3>{prod.title}</h3>
                  <p style={{ color: '#FC9700', fontWeight: 600, fontSize: '0.875rem', margin: '4px 0 12px' }}>
                    {prod.tagline}
                  </p>
                  <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>{prod.summary}</p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: '1.5rem', fontSize: '0.85rem', color: '#6b6b6b' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <CheckCircle2 size={14} color="#16a34a" /> Sub-ms hard real-time latency
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <CheckCircle2 size={14} color="#16a34a" /> Rust memory-safe kernel
                    </span>
                  </div>

                  <Link href={`/products/${item.slug}`}>
                    <Button variant="outline" size="sm" style={{ width: '100%' }} icon={<ArrowRight size={16} />}>
                      View Technical Specs
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Comparison Table Section */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="badge">FEATURE COMPARISON</span>
            <h2 style={{ marginTop: '0.75rem' }}>Technical Specifications & Tiers</h2>
            <p style={{ maxWidth: '640px', margin: '0.5rem auto 0' }}>
              Compare specifications across BITSOTRON Core, Edge hardware units, and Shield cryptographic modules.
            </p>
          </div>
          <ProductComparisonTable />
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="section section-dark text-center">
        <div className="container">
          <span className="badge badge-dark" style={{ marginBottom: '1rem' }}>CUSTOM INTEGRATION</span>
          <h2 style={{ marginBottom: '1rem' }}>Need Tailored Micro-Kernel Hardware?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem' }}>
            Our hardware engineering group builds custom ASIC, FPGA, and ROS2 integration drivers for enterprise OEM partners.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg" icon={<ArrowRight size={18} />}>
              Contact Solutions Architecture Team
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
