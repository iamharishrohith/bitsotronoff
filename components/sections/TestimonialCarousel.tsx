'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import styles from './TestimonialCarousel.module.css';

interface TestimonialItem {
  author: string;
  role: string;
  company: string;
  quote: string;
  rating?: number;
}

interface TestimonialCarouselProps {
  items?: TestimonialItem[];
}

const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    author: 'Alexander Wright',
    role: 'VP of Operations',
    company: 'Apex Dynamics Logistical',
    quote: 'BITSOTRON transformed our entire autonomous fleet operation within 60 days. Our incident rates dropped by 92% while throughput grew by 38%.',
    rating: 5,
  },
  {
    author: 'Dr. Clara Monroe',
    role: 'Chief Technology Officer',
    company: 'BioSynth Surgical',
    quote: 'The sub-millisecond determinism of BITSOTRON Core is unmatched. It is the gold standard for surgical robotics control platforms.',
    rating: 5,
  },
  {
    author: 'David Kaufman',
    role: 'Head of Infrastructure Security',
    company: 'GridLock Energy',
    quote: 'BITSOTRON Shield gave us post-quantum zero-trust defense across 12,000 edge grid substations without adding hardware latency.',
    rating: 5,
  },
];

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ items }) => {
  const testimonials = items && items.length > 0 ? items : DEFAULT_TESTIMONIALS;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <div className={styles.carouselContainer}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card variant="glass" className={styles.testimonialCard}>
            <div className={styles.quoteIcon}>
              <Quote size={40} color="#FCBD00" />
            </div>

            <p className={styles.quoteText}>"{current.quote}"</p>

            <div className={styles.ratingRow}>
              {[...Array(current.rating || 5)].map((_, i) => (
                <Star key={i} size={16} fill="#FCBD00" color="#FCBD00" />
              ))}
            </div>

            <div className={styles.authorMeta}>
              <h4 className={styles.authorName}>{current.author}</h4>
              <p className={styles.authorRole}>
                {current.role} • <span className={styles.companyName}>{current.company}</span>
              </p>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className={styles.controlsRow}>
        <button onClick={handlePrev} className={styles.controlBtn} aria-label="Previous Testimonial">
          <ChevronLeft size={20} />
        </button>
        <span className={styles.pageCounter}>
          {currentIndex + 1} / {testimonials.length}
        </span>
        <button onClick={handleNext} className={styles.controlBtn} aria-label="Next Testimonial">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};
