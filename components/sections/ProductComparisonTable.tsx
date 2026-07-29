'use client';

import React from 'react';
import { Check, X, ShieldCheck } from 'lucide-react';
import styles from './ProductComparisonTable.module.css';

interface SpecRow {
  feature: string;
  core: string | boolean;
  edge: string | boolean;
  shield: string | boolean;
}

const SPEC_ROWS: SpecRow[] = [
  { feature: 'Deterministic Latency', core: '<0.4 ms', edge: '<1.2 ms', shield: '<0.1 ms' },
  { feature: 'Processing Capacity', core: 'Distributed TOPS', edge: '50 TOPS / 15W', shield: 'Cryptographic Engine' },
  { feature: 'Quantum Cryptography', core: true, edge: true, shield: true },
  { feature: 'Off-Grid Isolation Autonomy', core: true, edge: true, shield: true },
  { feature: 'Fault-Tolerant Micro-kernel', core: true, edge: true, shield: true },
  { feature: 'Hardware Acceleration', core: 'GPU / NPU Swarm', edge: 'FPGA & ASIC', shield: 'HSM Enclave' },
  { feature: 'SWaP Optimized Hardware Option', core: false, edge: true, shield: true },
  { feature: '24/7 Mission Control Support', core: 'Dedicated Engineer', edge: 'Standard SLA', shield: 'Air-Gapped Hotline' },
];

export const ProductComparisonTable: React.FC = () => {
  const renderCell = (val: string | boolean) => {
    if (typeof val === 'boolean') {
      return val ? (
        <Check size={20} className={styles.checkIcon} />
      ) : (
        <X size={20} className={styles.crossIcon} />
      );
    }
    return <span>{val}</span>;
  };

  return (
    <div className={styles.comparisonWrapper}>
      {/* Desktop Table View */}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.featureHeader}>Specification / Feature</th>
              <th className={styles.productHeader}>
                <div className={styles.headerTitle}>BITSOTRON Core</div>
                <div className={styles.headerTag}>Neural Runtime</div>
              </th>
              <th className={styles.productHeader}>
                <div className={styles.headerTitle}>BITSOTRON Edge</div>
                <div className={styles.headerTag}>Micro-Hardware</div>
              </th>
              <th className={styles.productHeader}>
                <div className={`${styles.headerTitle} gradient-text`}>BITSOTRON Shield</div>
                <div className={styles.headerTag}>Crypto Armor</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {SPEC_ROWS.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? styles.evenRow : ''}>
                <td className={styles.featureCell}>{row.feature}</td>
                <td className={styles.valueCell}>{renderCell(row.core)}</td>
                <td className={styles.valueCell}>{renderCell(row.edge)}</td>
                <td className={styles.valueCell}>{renderCell(row.shield)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Cards View */}
      <div className={styles.mobileCardsView}>
        {['BITSOTRON Core', 'BITSOTRON Edge', 'BITSOTRON Shield'].map((prod, pIdx) => (
          <div key={prod} className={styles.mobileCard}>
            <div className={styles.mobileCardHeader}>
              <ShieldCheck size={20} color="#FCBD00" />
              <h3>{prod}</h3>
            </div>
            <div className={styles.mobileSpecsList}>
              {SPEC_ROWS.map((row, rIdx) => {
                const val = pIdx === 0 ? row.core : pIdx === 1 ? row.edge : row.shield;
                return (
                  <div key={rIdx} className={styles.mobileSpecItem}>
                    <span className={styles.mobileSpecLabel}>{row.feature}</span>
                    <span className={styles.mobileSpecVal}>{renderCell(val)}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
