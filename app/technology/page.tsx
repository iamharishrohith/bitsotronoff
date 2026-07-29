import React from 'react';
import Link from 'next/link';
import { getTechConfigData } from '@/lib/keystatic';
import { TechArchitectureDiagram } from '@/components/sections/TechArchitectureDiagram';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Cpu, ShieldCheck, Zap, Lock, Terminal, ArrowRight, Factory } from 'lucide-react';

export default async function TechnologyPage() {
  const techConfig = await getTechConfigData();

  return (
    <>
      {/* Header Banner */}
      <section className="section section-dark text-center" style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
        <div className="container">
          <span className="badge badge-dark" style={{ marginBottom: '1rem' }}>
            DEEP TECH ARCHITECTURE
          </span>
          <h1 style={{ marginBottom: '1.25rem' }}>
            Inside the BITSOTRON <br />
            <span className="gradient-text">Neural Micro-Kernel Runtime</span>
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.15rem' }}>
            {techConfig?.archDescription || 'Written from scratch in memory-safe Rust, BITSOTRON replaces legacy operating systems on autonomous robotics with deterministic, zero-heap micro-kernels.'}
          </p>
        </div>
      </section>

      {/* SVG System Architecture Diagram */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="badge">SYSTEM INTERNALS</span>
            <h2 style={{ marginTop: '0.75rem' }}>System Architecture & Telemetry Mesh</h2>
            <p style={{ maxWidth: '640px', margin: '0.5rem auto 0' }}>
              Click any architecture node below to inspect zero-trust boundaries and edge-to-cloud data flows.
            </p>
          </div>
          <TechArchitectureDiagram />
        </div>
      </section>

      {/* R&D & Innovation Highlights */}
      <section className="section section-surface">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <span className="badge">RESEARCH & INNOVATION</span>
            <h2 style={{ marginTop: '0.75rem' }}>Pioneering R&D Pillars</h2>
          </div>

          <div className="grid-3">
            <Card variant="default">
              <div style={{ width: 44, height: 44, borderRadius: 8, background: 'rgba(252,151,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Terminal size={24} color="#FC9700" />
              </div>
              <h3>Zero-Heap Allocation</h3>
              <p style={{ marginTop: '0.5rem' }}>
                Eliminates garbage collection pauses and dynamic memory fragmentation, ensuring strict worst-case execution time bounds.
              </p>
            </Card>

            <Card variant="default">
              <div style={{ width: 44, height: 44, borderRadius: 8, background: 'rgba(252,151,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Lock size={24} color="#FC9700" />
              </div>
              <h3>NIST Post-Quantum Cryptography</h3>
              <p style={{ marginTop: '0.5rem' }}>
                Integrated Kyber-1024 key encapsulation and Dilithium digital signatures protect telemetry against future quantum attack.
              </p>
            </Card>

            <Card variant="default">
              <div style={{ width: 44, height: 44, borderRadius: 8, background: 'rgba(252,151,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Zap size={24} color="#FC9700" />
              </div>
              <h3>Multi-Agent Swarm Mesh</h3>
              <p style={{ marginTop: '0.5rem' }}>
                Ultra-compact peer-to-peer consensus protocol allowing hardware units to synchronize spatial positioning without cloud latency.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Conditional Hardware / Manufacturing Section */}
      {techConfig?.hardwareSectionEnabled && (
        <section className="section section-dark">
          <div className="container">
            <div className="grid-2" style={{ alignItems: 'center' }}>
              <div>
                <span className="badge badge-dark" style={{ marginBottom: '1rem' }}>
                  HARDWARE & MANUFACTURING PROCESS
                </span>
                <h2 style={{ marginBottom: '1.25rem' }}>
                  Military-Grade Hardware Manufacturing & QA
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                  Every BITSOTRON Edge unit undergoes Class-100 cleanroom assembly, environmental thermal shock stress-testing from -40°C to +85°C, and hardware-in-the-loop (HIL) automated validation.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#FCBD00' }}>
                    <Factory size={18} /> ISO 9001 & AS9100 Certified Cleanroom Facilities
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#FCBD00' }}>
                    <ShieldCheck size={18} /> Tamper-Proof Cryptographic Enclave Hardware Seals
                  </span>
                </div>
              </div>
              <div>
                <Card variant="glass">
                  <h3 style={{ color: '#FCBD00', marginBottom: '1rem' }}>Production Standards</h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                    <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                      <strong>PCB Substrate:</strong> High-density 12-layer Rogers TG-180
                    </li>
                    <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                      <strong>Vibration Shock:</strong> MIL-STD-810H Method 514.8 Compliance
                    </li>
                    <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                      <strong>EMC Shielding:</strong> FCC Class A & CE Industrial Interference Proof
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Security Overview Callout */}
      <section className="section text-center">
        <div className="container">
          <span className="badge" style={{ marginBottom: '1rem' }}>SECURITY BASELINE</span>
          <h2>Zero-Trust Security & Audit Compliance</h2>
          <p style={{ maxWidth: '640px', margin: '0.75rem auto 2rem' }}>
            Read our full security whitepaper and third-party penetration test audit reports.
          </p>
          <Link href="/security">
            <Button variant="primary" size="lg" icon={<ArrowRight size={18} />}>
              Explore Trust & Security Center
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
