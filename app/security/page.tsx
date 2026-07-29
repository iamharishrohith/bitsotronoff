import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, Lock, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

export default function SecurityPage() {
  return (
    <>
      <section className="section section-dark text-center" style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
        <div className="container">
          <span className="badge badge-dark" style={{ marginBottom: '1rem' }}>
            TRUST & SECURITY CENTER
          </span>
          <h1 style={{ marginBottom: '1.25rem' }}>
            Enterprise Zero-Trust <br />
            <span className="gradient-text">& Quantum Security Baseline</span>
          </h1>
          <p style={{ maxWidth: '680px', margin: '0 auto', fontSize: '1.15rem' }}>
            Learn how BITSOTRON safeguards critical cyber-physical systems against adversarial attack.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3" style={{ marginBottom: '4rem' }}>
            <Card variant="default">
              <ShieldCheck size={28} color="#FC9700" style={{ marginBottom: '1rem' }} />
              <h3>SOC2 Type II Certified</h3>
              <p style={{ marginTop: '0.5rem' }}>
                Annual independent third-party audits evaluating security, availability, and confidentiality controls.
              </p>
            </Card>

            <Card variant="default">
              <Lock size={28} color="#FC9700" style={{ marginBottom: '1rem' }} />
              <h3>ISO 27001 Certified</h3>
              <p style={{ marginTop: '0.5rem' }}>
                International information security management system (ISMS) governing software development lifecycles.
              </p>
            </Card>

            <Card variant="default">
              <CheckCircle2 size={28} color="#FC9700" style={{ marginBottom: '1rem' }} />
              <h3>FedRAMP Ready</h3>
              <p style={{ marginTop: '0.5rem' }}>
                Meeting rigorous federal government security baselines for defense and public sector deployments.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <h3>Request Third-Party Audit Reports</h3>
            <p style={{ color: '#6b6b6b', margin: '0.5rem 0 1.5rem' }}>
              We provide NDA-backed access to our latest SOC2 Type II report and penetration test summaries.
            </p>
            <a href="mailto:security@bitsotron.com">
              <Button variant="primary" size="md" icon={<ArrowRight size={16} />}>
                Request SOC2 Audit Packet
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
