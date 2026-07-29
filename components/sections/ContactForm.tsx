'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import styles from './ContactForm.module.css';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Failed to submit form.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Dr. Sarah Connor"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>Work Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="sarah@enterprise.com"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="subject" className={styles.label}>Subject *</label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="BITSOTRON Core Hardware Evaluation Request"
          value={formData.subject}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>Message *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Please specify your hardware architecture, node count, and telemetry latency requirements..."
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
        />
      </div>

      <Button variant="primary" size="lg" type="submit" disabled={status === 'loading'} icon={<Send size={18} />}>
        {status === 'loading' ? 'Sending Request...' : 'Send Message'}
      </Button>

      {status === 'success' && (
        <div className={styles.successBox}>
          <CheckCircle2 size={20} />
          <span>Thank you! Your message has been routed to our solutions team.</span>
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
