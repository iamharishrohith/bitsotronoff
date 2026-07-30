import React from 'react';
import { Card } from '@/components/ui/Card';
import { Mail, Phone, Briefcase, Wrench } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="section section-dark text-center" style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
        <div className="container">
          <span className="badge badge-dark" style={{ marginBottom: '1rem' }}>
            CONNECT WITH US
          </span>
          <h1 style={{ marginBottom: '1.25rem' }}>
            Get in Touch with Our <br />
            <span className="gradient-text">Systems Architecture Group</span>
          </h1>
          <p style={{ maxWidth: '680px', margin: '0 auto', fontSize: '1.15rem' }}>
            Whether you need custom micro-kernel drivers, hardware benchmarks, or trial license keys.
          </p>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="section">
        <div className="container grid-2" style={{ alignItems: 'start' }}>
          <div>
            <span className="badge" style={{ marginBottom: '0.75rem' }}>
              DIRECT CONTACT
            </span>
            <h2 style={{ marginBottom: '1rem' }}>Get in Touch</h2>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.7' }}>
              For business inquiries, architectural partnerships, or licensing requirements, feel free to reach out to our core systems leadership.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
              <div style={{ padding: '1rem', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: 6, background: 'rgba(252,151,0,0.1)', color: '#FC9700', flexShrink: 0 }}>
                  <Briefcase size={16} />
                </div>
                <div>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--color-muted)', display: 'block' }}>Founder / CEO:</strong>
                  <span style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-dark)' }}>Thamizharasan N</span>
                </div>
              </div>
              <div style={{ padding: '1rem', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: 6, background: 'rgba(252,151,0,0.1)', color: '#FC9700', flexShrink: 0 }}>
                  <Wrench size={16} />
                </div>
                <div>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--color-muted)', display: 'block' }}>Tech Lead:</strong>
                  <span style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-dark)' }}>Harish Rohith S</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Card variant="surface">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: 'rgba(252,151,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={20} color="#FC9700" />
                </div>
                <h3 style={{ fontSize: '1.15rem', margin: 0 }}>Email Inquiries</h3>
              </div>
              <p style={{ color: '#6b6b6b', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Reach us directly at:<br />
                <a href="mailto:iamharishrohith@gmail.com" style={{ color: '#FC9700', fontWeight: 600 }}>iamharishrohith@gmail.com</a>
              </p>
            </Card>

            <Card variant="surface">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: 'rgba(252,151,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={20} color="#FC9700" />
                </div>
                <h3 style={{ fontSize: '1.15rem', margin: 0 }}>Phone Hotline</h3>
              </div>
              <p style={{ color: '#6b6b6b', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Call or message directly for technical escalations:<br />
                <a href="tel:8903416887" style={{ color: '#FC9700', fontWeight: 600 }}>+91 89034 16887</a>
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
