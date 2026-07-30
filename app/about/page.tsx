import React from 'react';
import Link from 'next/link';
import { getAboutPageData, getTeamMembers, getPartners } from '@/lib/keystatic';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Award, Compass, Target, Heart, Linkedin, ArrowRight } from 'lucide-react';

export default async function AboutPage() {
  const aboutData = await getAboutPageData();
  const teamMembers = await getTeamMembers();
  const partners = await getPartners();

  return (
    <>
      {/* Header Banner */}
      <section className="section section-dark text-center" style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
        <div className="container">
          <span className="badge badge-dark" style={{ marginBottom: '1rem' }}>
            ABOUT BITSOTRON
          </span>
          <h1 style={{ marginBottom: '1.25rem' }}>
            Pioneering the Next Era of <br />
            <span className="gradient-text">Cyber-Physical Intelligence</span>
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.15rem' }}>
            {aboutData?.storyTitle || 'We build fault-tolerant, sub-millisecond AI micro-kernels bridging physical robotics and cloud software.'}
          </p>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="section section-surface">
        <div className="container">
          <div className="grid-3" style={{ marginBottom: '4rem' }}>
            <Card variant="default">
              <div style={{ width: 44, height: 44, borderRadius: 8, background: 'rgba(252,151,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Target size={24} color="#FC9700" />
              </div>
              <h3>Our Mission</h3>
              <p style={{ marginTop: '0.5rem' }}>
                {aboutData?.mission || 'To empower global industries with resilient, zero-latency autonomous intelligence that bridges physical robotics and cloud software.'}
              </p>
            </Card>

            <Card variant="default">
              <div style={{ width: 44, height: 44, borderRadius: 8, background: 'rgba(252,151,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Compass size={24} color="#FC9700" />
              </div>
              <h3>Our Vision</h3>
              <p style={{ marginTop: '0.5rem' }}>
                {aboutData?.vision || 'A world where critical infrastructure operates flawlessly through self-healing, deterministic AI operating systems.'}
              </p>
            </Card>

            <Card variant="default">
              <div style={{ width: 44, height: 44, borderRadius: 8, background: 'rgba(252,151,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Heart size={24} color="#FC9700" />
              </div>
              <h3>Core Principles</h3>
              <p style={{ marginTop: '0.5rem' }}>
                Zero compromise on safety, mathematical determinism, radical transparency, and post-quantum security baseline.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Startup Journey */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <div style={{ padding: '2.5rem', background: 'var(--color-surface)', borderRadius: 'var(--radius-2xl)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
            <span className="badge" style={{ marginBottom: '1rem' }}>OUR STATUS</span>
            <h2 style={{ marginBottom: '1rem' }}>We are a Startup</h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--color-muted)', lineHeight: '1.7', margin: '0 auto', maxWidth: '640px' }}>
              BITSOTRON is an agile, early-stage systems and hardware startup. We are focused on engineering the next generation of offline-first digital infrastructure and autonomous micro-kernel solutions for edge physical environments.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team Grid (Keystatic Collection) */}
      <section className="section section-surface">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <span className="badge">LEADERSHIP TEAM</span>
            <h2 style={{ marginTop: '0.75rem' }}>World-Class Robotics & AI Pioneers</h2>
          </div>

          <div className="grid-3">
            {teamMembers.length > 0 ? (
              teamMembers.map((member) => (
                <Card key={member.slug} variant="default">
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.5rem', color: '#262626', marginBottom: '1rem' }}>
                    {member.entry.name.charAt(0)}
                  </div>
                  <h3>{member.entry.name}</h3>
                  <p style={{ color: '#FC9700', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                    {member.entry.role}
                  </p>
                  <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>{member.entry.bio}</p>
                  {member.entry.linkedin && (
                    <a href={member.entry.linkedin} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.85rem', color: '#0077b5', fontWeight: 600 }}>
                      <Linkedin size={16} /> LinkedIn Profile
                    </a>
                  )}
                </Card>
              ))
            ) : (
              <p style={{ gridColumn: '1 / -1', textAlign: 'center' }}>Loading leadership team...</p>
            )}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="section section-dark text-center">
        <div className="container">
          <span className="badge badge-dark" style={{ marginBottom: '1rem' }}>
            GLOBAL ECOSYSTEM
          </span>
          <h2 style={{ marginBottom: '3rem' }}>Strategic Industry Partners</h2>
          <div className="grid-4">
            {partners.map((partner) => (
              <Card key={partner.slug} variant="glass">
                <div style={{ padding: '1rem 0' }}>
                  <h3 style={{ fontSize: '1.25rem', color: '#FCBD00' }}>{partner.entry.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>{partner.entry.category}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
