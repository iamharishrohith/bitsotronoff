'use client';

import React from 'react';
import { Cpu, HardDrive, Shield, Battery, Mail, Cpu as Processor, Database, Settings } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './HardwareConfigurator.module.css';

interface PricingRow {
  group: string;
  option: string;
  price: string;
  desc: string;
}

const PRICING_CATALOG: PricingRow[] = [
  // Base Models
  { group: 'Base Platform', option: 'BITSOTRON Core (Software Only)', price: '₹0', desc: 'Software licensing suite for user-provided hardware.' },
  { group: 'Base Platform', option: 'BITSOTRON Edge S1 (Rugged Mini)', price: '₹39,999', desc: 'Rugged portable edge hub for off-grid operations.' },
  { group: 'Base Platform', option: 'BITSOTRON Edge X5 (Enterprise)', price: '₹1,19,999', desc: 'Heavy-duty industrial rack or pole-mount edge server.' },
  
  // CPUs
  { group: 'Processor', option: 'ARM64 Cortex Quad-Core', price: 'Included', desc: 'Thermal-optimized, ultra-low power envelope.' },
  { group: 'Processor', option: 'x86_64 Intel Atom Industrial', price: '+₹12,000', desc: 'High-throughput architecture for dense local databases.' },
  { group: 'Processor', option: 'FPGA Co-processor (Custom DSP)', price: '+₹36,000', desc: 'ASIC/FPGA filters for real-time sensor streams.' },

  // Storage
  { group: 'Storage', option: '256GB Enterprise NVMe SSD', price: 'Included', desc: 'Default casing for documents, manuals, and configurations.' },
  { group: 'Storage', option: '1TB Enterprise NVMe SSD', price: '+₹9,999', desc: 'For off-grid media libraries and large video databases.' },
  { group: 'Storage', option: '2TB Enterprise NVMe SSD', price: '+₹19,999', desc: 'Designed for continuous industrial diagnostics logging.' },

  // Upgrades
  { group: 'Upgrades', option: 'IP67 Waterproof Outdoor Case', price: '+₹14,999', desc: 'Waterproof, dustproof, and shockproof casing.' },
  { group: 'Upgrades', option: 'Li-FePO4 Battery Expansion Pack', price: '+₹11,000', desc: 'Adds 8 hours of standalone field deployment battery.' },
  { group: 'Upgrades', option: 'HSM Cryptographic Secure Chip', price: '+₹24,000', desc: 'Enclave co-processor with post-quantum security key.' }
];

export const HardwareConfigurator: React.FC = () => {
  return (
    <div className={styles.staticContainer}>
      {/* Scrollable Table Wrapper */}
      <div className={styles.scrollWrapper}>
        <table className={styles.pricingTable}>
          <thead>
            <tr>
              <th style={{ width: '20%' }}>Category</th>
              <th style={{ width: '30%' }}>Specification Option</th>
              <th style={{ width: '18%' }}>Pricing (INR)</th>
              <th style={{ width: '32%' }}>Description & Use Case</th>
            </tr>
          </thead>
          <tbody>
            {PRICING_CATALOG.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? styles.evenRow : ''}>
                <td className={styles.categoryCell}>
                  {row.group === 'Base Platform' && <Settings size={14} className={styles.groupIcon} />}
                  {row.group === 'Processor' && <Processor size={14} className={styles.groupIcon} />}
                  {row.group === 'Storage' && <Database size={14} className={styles.groupIcon} />}
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
          * Prices are indicative ex-works estimates. Custom FPGA/ASIC compiler licenses are available for OEM integrations.
        </p>
        <a
          href="mailto:sales@bitsotron.com?subject=BITSOTRON Custom Spec Request&body=Hello BITSOTRON Sales,%0D%0A%0D%0AI would like a commercial quote for a BITSOTRON custom deployment based on the hardware catalog:%0D%0A%0D%0ASelected Options:%0D%0A- [List selected model, CPU, storage, and upgrades here]%0D%0A%0D%0APlease contact me with formal commercial terms.%0D%0A%0D%0ARegards,%0D%0A[Name]"
          className={styles.mailButtonLink}
        >
          <Button variant="primary" icon={<Mail size={18} />}>
            Request Custom Quotation (INR)
          </Button>
        </a>
      </div>
    </div>
  );
};
