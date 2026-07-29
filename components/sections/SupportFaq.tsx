'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Search } from 'lucide-react';
import styles from './SupportFaq.module.css';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: '1',
    category: 'Architecture & Latency',
    question: 'How does BITSOTRON achieve sub-0.4ms deterministic latency?',
    answer: 'BITSOTRON is written in memory-safe Rust with custom lock-free data structures and zero-heap allocation micro-kernels that run directly on bare metal or specialized FPGA hardware.',
  },
  {
    id: '2',
    category: 'Security',
    question: 'Is BITSOTRON Shield quantum-resistant?',
    answer: 'Yes, BITSOTRON Shield incorporates CRYSTALS-Kyber and Dilithium NIST-standard post-quantum cryptographic primitives for payload encryption and node authentication.',
  },
  {
    id: '3',
    category: 'Deployment',
    question: 'Can BITSOTRON operate completely off-grid without internet access?',
    answer: 'Absolutely. BITSOTRON Edge nodes contain local decision micro-kernels that operate with 100% autonomy even under severe signal loss or total network disconnection.',
  },
  {
    id: '4',
    category: 'Compliance',
    question: 'What security certifications does BITSOTRON hold?',
    answer: 'BITSOTRON maintains active SOC2 Type II certification, ISO 27001 compliance, and FedRAMP Ready status for government deployments.',
  },
  {
    id: '5',
    category: 'Hardware',
    question: 'What hardware architectures are supported?',
    answer: 'BITSOTRON supports x86_64, ARM64, NVIDIA Jetson, AMD Xilinx FPGAs, and RISC-V microprocessors.',
  },
];

export const SupportFaq: React.FC = () => {
  const [search, setSearch] = useState('');
  const [openId, setOpenId] = useState<string | null>('1');

  const filteredFaqs = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.faqWrapper}>
      {/* Search Bar */}
      <div className={styles.searchBarContainer}>
        <Search size={20} className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search documentation or questions (e.g. latency, security, hardware)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      {/* Accordion List */}
      <div className={styles.faqList}>
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className={styles.faqItem}>
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className={styles.faqQuestionBtn}
                >
                  <span className={styles.categoryBadge}>{faq.category}</span>
                  <h4 className={styles.faqQuestion}>{faq.question}</h4>
                  <ChevronDown
                    size={20}
                    className={`${styles.chevron} ${isOpen ? styles.openChevron : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className={styles.faqAnswerWrapper}
                    >
                      <p className={styles.faqAnswer}>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        ) : (
          <p className={styles.noResults}>No matching questions found for "{search}".</p>
        )}
      </div>
    </div>
  );
};
