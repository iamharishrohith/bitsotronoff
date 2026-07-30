import React from 'react';
import { SupportFaq } from '@/components/sections/SupportFaq';
import { Card } from '@/components/ui/Card';
import { FileText, Download, ShieldAlert, LifeBuoy } from 'lucide-react';

export default function SupportPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="section section-dark text-center" style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
        <div className="container">
          <span className="badge badge-dark" style={{ marginBottom: '1rem' }}>
            HELP CENTER & DOCUMENTATION
          </span>
          <h1 style={{ marginBottom: '1.25rem' }}>
            BITSOTRON Support Hub <br />
            <span className="gradient-text">& Mission Control</span>
          </h1>
          <p style={{ maxWidth: '680px', margin: '0 auto', fontSize: '1.15rem' }}>
            Search developer documentation, download kernel toolchains, check warranty coverage, or submit a priority ticket.
          </p>
        </div>
      </section>

      {/* Quick Resources Cards */}
      <section className="section section-surface">
        <div className="container">
          <div className="grid-3">
            <Card variant="default">
              <div style={{ width: 44, height: 44, borderRadius: 8, background: 'rgba(252,151,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <FileText size={24} color="#FC9700" />
              </div>
              <h3>Developer Documentation</h3>
              <p style={{ marginTop: '0.5rem', color: 'var(--color-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Comprehensive API references, Rust crate definitions, and ROS2 telemetry driver guides.
              </p>
            </Card>

            <Card variant="default">
              <div style={{ width: 44, height: 44, borderRadius: 8, background: 'rgba(252,151,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Download size={24} color="#FC9700" />
              </div>
              <h3>Software Downloads</h3>
              <p style={{ marginTop: '0.5rem', color: 'var(--color-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Download BITSOTRON v3.0 Toolchain binaries for x86_64 and ARM64 platforms.
              </p>
            </Card>

            <Card variant="default">
              <div style={{ width: 44, height: 44, borderRadius: 8, background: 'rgba(252,151,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <ShieldAlert size={24} color="#FC9700" />
              </div>
              <h3>Hardware Warranty & RMA</h3>
              <p style={{ marginTop: '0.5rem', color: 'var(--color-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                3-Year advance hardware replacement guarantee for all enterprise BITSOTRON Edge units.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Searchable FAQ Accordion */}
      <section id="faq" className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="badge">KNOWLEDGE BASE</span>
            <h2 style={{ marginTop: '0.75rem' }}>Frequently Asked Technical Questions</h2>
          </div>
          <SupportFaq />
        </div>
      </section>

      {/* Support Escalation Info */}
      <section id="ticket" className="section section-surface">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <span className="badge">PRIORITY ESCALATION</span>
          <h2 style={{ marginTop: '0.75rem', marginBottom: '1rem' }}>Get Premium Support</h2>
          <p style={{ marginTop: '0.5rem', marginBottom: '2rem', lineHeight: '1.7' }}>
            We are upgrading our support queue channels. For critical issues, ticket submissions, and SLA priority escalations, please contact us directly via email.
          </p>
          <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '0.5rem', padding: '1.5rem', background: 'var(--color-dark)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-dark)' }}>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <LifeBuoy size={16} color="#FC9700" /> Dedicated Support Line:
            </span>
            <a href="mailto:support@bitsotron.com" style={{ color: '#FC9700', fontWeight: 700, fontSize: '1.15rem' }}>support@bitsotron.com</a>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', marginTop: '0.5rem' }}>Typical response within 1 hour for Enterprise SLAs</span>
          </div>
        </div>
      </section>
    </>
  );
}
