import React from 'react';
import { SupportFaq } from '@/components/sections/SupportFaq';
import { TicketForm } from '@/components/sections/TicketForm';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FileText, Download, ShieldAlert, LifeBuoy, ArrowRight } from 'lucide-react';

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
              <p style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
                Comprehensive API references, Rust crate definitions, and ROS2 telemetry driver guides.
              </p>
              <a href="#faq" style={{ fontWeight: 600, color: '#FC9700', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                Browse Docs <ArrowRight size={14} />
              </a>
            </Card>

            <Card variant="default">
              <div style={{ width: 44, height: 44, borderRadius: 8, background: 'rgba(252,151,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Download size={24} color="#FC9700" />
              </div>
              <h3>Software Downloads</h3>
              <p style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
                Download BITSOTRON v3.0 Toolchain binaries for x86_64 and ARM64 platforms.
              </p>
              <a href="#downloads" style={{ fontWeight: 600, color: '#FC9700', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                Download Binaries <ArrowRight size={14} />
              </a>
            </Card>

            <Card variant="default">
              <div style={{ width: 44, height: 44, borderRadius: 8, background: 'rgba(252,151,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <ShieldAlert size={24} color="#FC9700" />
              </div>
              <h3>Hardware Warranty & RMA</h3>
              <p style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
                3-Year advance hardware replacement guarantee for all enterprise BITSOTRON Edge units.
              </p>
              <a href="#ticket" style={{ fontWeight: 600, color: '#FC9700', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                Request RMA <ArrowRight size={14} />
              </a>
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

      {/* Raise a Support Ticket Form */}
      <section id="ticket" className="section section-surface">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <span className="badge">PRIORITY ESCALATION</span>
            <h2 style={{ marginTop: '0.75rem' }}>Submit a Support Ticket</h2>
            <p style={{ marginTop: '0.5rem' }}>
              Directly routed to Zendesk support queue. Enterprise SLAs guarantee response within 1 hour for Critical tickets.
            </p>
          </div>
          <TicketForm />
        </div>
      </section>
    </>
  );
}
