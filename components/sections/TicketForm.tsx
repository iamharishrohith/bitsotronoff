'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { LifeBuoy, CheckCircle2, AlertCircle } from 'lucide-react';
import styles from './TicketForm.module.css';

export const TicketForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: 'BITSOTRON Core',
    severity: 'medium',
    description: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [ticketId, setTicketId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/ticket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setTicketId(data.ticketId);
        setFormData({ name: '', email: '', product: 'BITSOTRON Core', severity: 'medium', description: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Failed to submit support ticket.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error while generating ticket.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="t-name" className={styles.label}>Your Name *</label>
          <input
            id="t-name"
            type="text"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="t-email" className={styles.label}>Work Email *</label>
          <input
            id="t-email"
            type="email"
            required
            placeholder="john@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="t-product" className={styles.label}>Affected Product Solution *</label>
          <select
            id="t-product"
            value={formData.product}
            onChange={(e) => setFormData({ ...formData, product: e.target.value })}
            className={styles.input}
          >
            <option value="BITSOTRON Core">BITSOTRON Core (Neural Engine)</option>
            <option value="BITSOTRON Edge">BITSOTRON Edge (Micro-Compute)</option>
            <option value="BITSOTRON Shield">BITSOTRON Shield (Cryptographic Suite)</option>
            <option value="Swarm Mesh">Swarm Mesh Gateway</option>
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="t-severity" className={styles.label}>Severity Level *</label>
          <select
            id="t-severity"
            value={formData.severity}
            onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
            className={styles.input}
          >
            <option value="low">Low — General Guidance</option>
            <option value="medium">Medium — Minor Performance Issue</option>
            <option value="high">High — Partial Outage</option>
            <option value="critical">Critical — Hardware Inoperable</option>
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="t-desc" className={styles.label}>Detailed Problem Description *</label>
        <textarea
          id="t-desc"
          rows={5}
          required
          placeholder="Please describe error logs, kernel panics, or hardware diagnostic codes (minimum 15 characters)..."
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className={styles.textarea}
        />
      </div>

      <Button variant="primary" size="lg" type="submit" disabled={status === 'loading'} icon={<LifeBuoy size={18} />}>
        {status === 'loading' ? 'Submitting Ticket...' : 'Generate Zendesk Support Ticket'}
      </Button>

      {status === 'success' && (
        <div className={styles.successBox}>
          <CheckCircle2 size={20} />
          <span>Support Ticket {ticketId} generated successfully! Check email for tracking updates.</span>
        </div>
      )}

      {status === 'error' && (
        <div className={styles.errorBox}>
          <AlertCircle size={20} />
          <span>{errorMsg}</span>
        </div>
      )}
    </form>
  );
};
