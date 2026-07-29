import React from 'react';

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <span className="badge" style={{ marginBottom: '1rem' }}>LEGAL COMPLIANCE</span>
        <h1>Privacy Policy</h1>
        <p style={{ color: '#6b6b6b', fontSize: '0.9rem', marginBottom: '2rem' }}>
          Last updated: January 15, 2026
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: 1.7 }}>
          <h2>1. Information We Collect</h2>
          <p>
            BITSOTRON Inc. collects minimal operational data required to process enterprise telemetry requests, support ticket routing, and account administration. We do not store raw customer sensor streams unless explicitly authorized under custom telemetry diagnostic agreements.
          </p>

          <h2>2. Use of Information</h2>
          <p>
            Data collected is used exclusively for platform maintenance, security patch notifications, and fulfilling support requests. We do not sell or monetize client data.
          </p>

          <h2>3. Security Standards</h2>
          <p>
            All data in transit and at rest is protected using AES-256 and post-quantum cryptographic primitives in compliance with SOC2 Type II and ISO 27001 guidelines.
          </p>
        </div>
      </div>
    </section>
  );
}
