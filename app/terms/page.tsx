import React from 'react';

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <span className="badge" style={{ marginBottom: '1rem' }}>TERMS OF SERVICE</span>
        <h1>Terms & Conditions</h1>
        <p style={{ color: '#6b6b6b', fontSize: '0.9rem', marginBottom: '2rem' }}>
          Last updated: January 15, 2026
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: 1.7 }}>
          <h2>1. Platform Usage & Licensing</h2>
          <p>
            BITSOTRON Core and BITSOTRON Edge firmware are licensed subject to enterprise Master Service Agreements (MSAs). Unauthorized reverse engineering or extraction of cryptographic enclave binaries is strictly prohibited.
          </p>

          <h2>2. Service Level Guarantees</h2>
          <p>
            System availability guarantees (99.999% uptime) are subject to client compliance with recommended hardware deployment topologies and hardware-in-the-loop validation protocols.
          </p>
        </div>
      </div>
    </section>
  );
}
