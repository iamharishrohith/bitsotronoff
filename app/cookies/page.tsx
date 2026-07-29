import React from 'react';

export default function CookiesPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <span className="badge" style={{ marginBottom: '1rem' }}>COOKIE POLICY</span>
        <h1>Cookie & Tracking Policy</h1>
        <p style={{ color: '#6b6b6b', fontSize: '0.9rem', marginBottom: '2rem' }}>
          Last updated: January 15, 2026
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: 1.7 }}>
          <h2>1. Essential Cookies Only</h2>
          <p>
            BITSOTRON uses strictly necessary cookies required for session authentication, Keystatic CMS admin functionality, and security CSRF protection. We do not use intrusive third-party tracking cookies.
          </p>
        </div>
      </div>
    </section>
  );
}
