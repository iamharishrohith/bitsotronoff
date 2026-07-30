'use client';

import React from 'react';
import { Cpu, HardDrive, Shield, Battery, Mail, Cpu as Processor, Database, Settings, BookOpen, HeartPulse, Store, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './HardwareConfigurator.module.css';

interface PricingRow {
  group: string;
  option: string;
  price: string;
  desc: string;
}

const PRICING_CATALOG: PricingRow[] = [
  // Base Models (40% discount already applied or mentioned)
  { group: 'Base Platform', option: 'BITSOTRON Core (Software Only)', price: '₹0', desc: 'Software licensing suite for user-provided hardware.' },
  { group: 'Base Platform', option: 'BITSOTRON Edge S1 (Rugged Mini)', price: '₹23,999', desc: 'Rugged portable edge hub. (40% Launch Discount Applied! Originally ₹39,999)' },
  { group: 'Base Platform', option: 'BITSOTRON Edge X5 (Enterprise)', price: '₹71,999', desc: 'Heavy-duty industrial rack edge server. (40% Launch Discount Applied! Originally ₹1,19,999)' },
  
  // CPUs
  { group: 'Processor', option: 'ARM64 Cortex Quad-Core', price: 'Included', desc: 'Thermal-optimized, ultra-low power envelope.' },
  { group: 'Processor', option: 'x86_64 Intel Atom Industrial', price: '+₹12,000', desc: 'High-throughput architecture for dense local databases.' },
  { group: 'Processor', option: 'FPGA Co-processor (Custom DSP)', price: '+₹36,000', desc: 'ASIC/FPGA filters for real-time sensor streams.' },

  // Storage
  { group: 'Storage', option: '256GB Enterprise NVMe SSD', price: 'Included', desc: 'Default casing for documents, manuals, and configurations.' },
  { group: 'Storage', option: '1TB Enterprise NVMe SSD', price: '+₹9,999', desc: 'For off-grid media libraries and large video databases.' },
  { group: 'Storage', option: '2TB Enterprise NVMe SSD', price: '+₹19,999', desc: 'Designed for continuous industrial diagnostics logging.' },

  // Sector Customizations
  { group: 'Sector Crate', option: 'Education Offline Crate', price: '+₹8,000', desc: 'Preloaded offline video lessons, notes database, and local quiz builder.' },
  { group: 'Sector Crate', option: 'Healthcare Offline Crate', price: '+₹10,000', desc: 'Preloaded health guides, diagnostic manuals, and patient charts templates.' },
  { group: 'Sector Crate', option: 'Retail & Events Crate', price: '+₹7,000', desc: 'Offline catalog builder, visitor registration logs, and digital brochures.' },
  { group: 'Sector Crate', option: 'Industry & Field Crate', price: '+₹12,000', desc: 'Operational manuals, safety checklists, and ROS2 sensor telemetry integration.' },

  // Services
  { group: 'Services', option: 'Offline Data Seeding Service', price: '+₹12,000', desc: 'Pre-flashing SSD storage with your customized corporate media databases.' },
  { group: 'Services', option: 'SLA Priority Support (24/7)', price: '+₹24,000/yr', desc: 'Guaranteed 1-hour engineer response SLA for edge environments.' },
  { group: 'Services', option: 'Custom Kernel Compile Service', price: '+₹48,000', desc: 'Bespoke micro-kernel compilation for custom ASICs and FPGAs.' },

  // Upgrades
  { group: 'Upgrades', option: 'IP67 Waterproof Outdoor Case', price: '+₹14,999', desc: 'Waterproof, dustproof, and shockproof casing.' },
  { group: 'Upgrades', option: 'Li-FePO4 Battery Expansion Pack', price: '+₹11,000', desc: 'Adds 8 hours of standalone field deployment battery.' },
  { group: 'Upgrades', option: 'HSM Cryptographic Secure Chip', price: '+₹24,000', desc: 'Enclave co-processor with post-quantum security key.' }
];

export const HardwareConfigurator: React.FC = () => {
  return (
    <div className={styles.staticContainer}>
      {/* Launch Offer Callout Banner */}
      <div className={styles.offerBanner}>
        <div className={styles.offerHeader}>
          <span className={styles.offerBadge}>⚡ PRE-BOOK LAUNCH OFFER</span>
          <span className={styles.discountBadge}>UP TO 40% OFF</span>
        </div>
        <p className={styles.offerText}>
          Pre-book any <strong>BITSOTRON Edge physical hardware unit</strong> today and get a <strong>lifetime free subscription</strong> to BITSOTRON Core software plus up to <strong>40% discount</strong> on edge hardware units!
        </p>
      </div>

      {/* Scrollable Table Wrapper */}
      <div className={styles.scrollWrapper}>
        <table className={styles.pricingTable}>
          <thead>
            <tr>
              <th style={{ width: '22%' }}>Category</th>
              <th style={{ width: '30%' }}>Specification / Service Option</th>
              <th style={{ width: '18%' }}>Pricing (INR)</th>
              <th style={{ width: '30%' }}>Description & Use Case</th>
            </tr>
          </thead>
          <tbody>
            {PRICING_CATALOG.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? styles.evenRow : ''}>
                <td className={styles.categoryCell}>
                  {row.group === 'Base Platform' && <Settings size={14} className={styles.groupIcon} />}
                  {row.group === 'Processor' && <Processor size={14} className={styles.groupIcon} />}
                  {row.group === 'Storage' && <Database size={14} className={styles.groupIcon} />}
                  {row.group === 'Sector Crate' && (
                    row.option.includes('Education') ? <BookOpen size={14} className={styles.groupIcon} /> :
                    row.option.includes('Healthcare') ? <HeartPulse size={14} className={styles.groupIcon} /> :
                    row.option.includes('Retail') ? <Store size={14} className={styles.groupIcon} /> :
                    <Wrench size={14} className={styles.groupIcon} />
                  )}
                  {row.group === 'Services' && <Wrench size={14} className={styles.groupIcon} />}
                  {row.group === 'Upgrades' && <Shield size={14} className={styles.groupIcon} />}
                  {row.group}
                </td>
                <td className={styles.optionName}>{row.option}</td>
                <td className={styles.priceCell}>{row.price}</td>
                <td className={styles.descCell}>{row.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.contactPanel}>
        <p className={styles.disclaimer}>
          * Prices are indicative ex-works estimates. Pre-book promotion applies to orders placed before launch date.
        </p>
        <a
          href="mailto:sales@bitsotron.com?subject=BITSOTRON Pre-Book Custom Spec Request&body=Hello BITSOTRON Sales,%0D%0A%0D%0AI would like to pre-book a BITSOTRON hardware deployment (applying the 40% discount and free Core subscription):%0D%0A%0D%0ASelected Configuration Options:%0D%0A- [List selected model, CPU, storage, sector crates, and services here]%0D%0A%0D%0APlease contact me to lock in the pre-book rates and coordinate logistics.%0D%0A%0D%0ARegards,%0D%0A[Name]"
          className={styles.mailButtonLink}
        >
          <Button variant="primary" icon={<Mail size={18} />}>
            Pre-Book Custom spec with 40% Discount
          </Button>
        </a>
      </div>
    </div>
  );
};
