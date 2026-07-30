import React from 'react';
import { Card } from '@/components/ui/Card';
import { Mail, Phone } from 'lucide-react';

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
              We are currently transitioning our automated ticketing systems. For immediate engineering assistance, hardware benchmarks, or licensing inquiries, please reach out directly to our systems architecture group.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
              <div style={{ padding: '1rem', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <strong style={{ fontSize: '0.9rem', color: 'var(--color-dark)' }}>📨 General & Press Inquiries:</strong><br />
                <a href="mailto:bitsotron@gmail.com" style={{ color: '#FC9700', fontWeight: 600, fontSize: '0.95rem' }}>bitsotron@gmail.com</a>
              </div>
              <div style={{ padding: '1rem', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <strong style={{ fontSize: '0.9rem', color: 'var(--color-dark)' }}>🛠️ Systems Engineering:</strong><br />
                <a href="mailto:engineering@bitsotron.com" style={{ color: '#FC9700', fontWeight: 600, fontSize: '0.95rem' }}>engineering@bitsotron.com</a>
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
              <p style={{ color: '#6b6b6b', fontSize: '0.95rem' }}>
                <strong>Official Email:</strong> <a href="mailto:bitsotron@gmail.com" style={{ color: '#FC9700', fontWeight: 600 }}>bitsotron@gmail.com</a> <br />
                <strong>Technical:</strong> engineering@bitsotron.com <br />
                <strong>Sales & OEM:</strong> sales@bitsotron.com
              </p>
            </Card>

            <Card variant="surface">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: 'rgba(252,151,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={20} color="#FC9700" />
                </div>
                <h3 style={{ fontSize: '1.15rem', margin: 0 }}>Phone Hotline</h3>
              </div>
              <p style={{ color: '#6b6b6b', fontSize: '0.95rem' }}>
                +1 (800) 555-BITSO (Toll Free US/CA) <br />
                +41 44 555 2400 (European Hub)
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
