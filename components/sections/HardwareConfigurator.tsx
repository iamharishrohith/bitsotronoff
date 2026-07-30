'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Cpu, HardDrive, ShieldCheck, Battery, Clipboard, Check, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './HardwareConfigurator.module.css';

interface ConfigOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

const MODELS: ConfigOption[] = [
  { id: 'core', name: 'BITSOTRON Core (Software Only)', price: 0, description: 'Licensing suite for user-provided hardware.' },
  { id: 'edge-s1', name: 'BITSOTRON Edge S1 (Rugged Mini Hub)', price: 499, description: 'Rugged portable edge hub for field operations.' },
  { id: 'edge-x5', name: 'BITSOTRON Edge X5 (Enterprise Hub)', price: 1499, description: 'Heavy-duty industrial rack or pole-mount edge center.' },
];

const CPUS: ConfigOption[] = [
  { id: 'arm64', name: 'ARM64 (Cortex Quad-Core)', price: 0, description: 'Ultra-low power envelope, thermal-efficient.' },
  { id: 'x86_64', name: 'x86_64 (Intel Atom Industrial)', price: 150, description: 'High-throughput architecture for dense database access.' },
  { id: 'fpga', name: 'FPGA Co-processor (Custom DSP)', price: 450, description: 'Custom hardware ASIC/FPGA for real-time telemetry filters.' },
];

const STORAGE: ConfigOption[] = [
  { id: '256gb', name: '256GB Enterprise NVMe SSD', price: 0, description: 'Baseline storage for docs, guides, and minor video databases.' },
  { id: '1tb', name: '1TB Enterprise NVMe SSD', price: 120, description: 'Standard storage for offline videos, libraries, and local forms.' },
  { id: '2tb', name: '2TB Enterprise NVMe SSD', price: 240, description: 'Heavy storage for continuous diagnostics database recording.' },
];

const ACCESSORIES = [
  { id: 'ip67', name: 'IP67 Waterproof Outdoor Case', price: 180, description: 'Rugged dustproof, shockproof case for outdoor field teams.', icon: ShieldCheck },
  { id: 'battery', name: 'Li-FePO4 Battery Expansion Pack', price: 140, description: 'Adds 8 hours of standalone offline battery deployment.', icon: Battery },
  { id: 'hsm', name: 'HSM Cryptographic Security Module', price: 290, description: 'Dedicated secure enclave with post-quantum cryptography chip.', icon: Cpu },
];

export const HardwareConfigurator: React.FC = () => {
  const [model, setModel] = useState(MODELS[1]);
  const [cpu, setCpu] = useState(CPUS[0]);
  const [storage, setStorage] = useState(STORAGE[0]);
  const [selectedAccs, setSelectedAccs] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const handleAccToggle = (id: string) => {
    setSelectedAccs(prev =>
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    const accPrice = ACCESSORIES
      .filter(a => selectedAccs.includes(a.id))
      .reduce((sum, a) => sum + a.price, 0);
    return model.price + cpu.price + storage.price + accPrice;
  };

  const generateConfigCode = () => {
    const modelCode = model.id.toUpperCase();
    const cpuCode = cpu.id.toUpperCase();
    const storageCode = storage.id.toUpperCase();
    const accCodes = selectedAccs.map(a => a.toUpperCase()).join('-');
    return `BITSO-${modelCode}-${cpuCode}-${storageCode}${accCodes ? `-${accCodes}` : ''}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateConfigCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // If model is Core (Software only), reset hardware options that require physical hub
  useEffect(() => {
    if (model.id === 'core') {
      setCpu(CPUS[0]);
      setStorage(STORAGE[0]);
      setSelectedAccs([]);
    }
  }, [model]);

  const configCode = generateConfigCode();
  const totalPrice = calculateTotal();

  return (
    <div className={styles.container}>
      <div className={styles.configGrid}>
        {/* Left Side: Options */}
        <div className={styles.optionsCol}>
          {/* Step 1: Base Platform */}
          <div className={styles.optionSection}>
            <span className={styles.stepBadge}>STEP 1</span>
            <h3 className={styles.sectionTitle}>Select Base Platform</h3>
            <div className={styles.optionsList}>
              {MODELS.map(opt => (
                <div
                  key={opt.id}
                  onClick={() => setModel(opt)}
                  className={`${styles.optionCard} ${model.id === opt.id ? styles.activeCard : ''}`}
                >
                  <div className={styles.optionHeader}>
                    <span className={styles.optionName}>{opt.name}</span>
                    <span className={styles.optionPrice}>
                      {opt.price === 0 ? 'Included' : `+$${opt.price}`}
                    </span>
                  </div>
                  <p className={styles.optionDesc}>{opt.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step 2 & 3: Hardware (Only show if not Software Only) */}
          {model.id !== 'core' && (
            <>
              {/* Step 2: CPU Architecture */}
              <div className={styles.optionSection}>
                <span className={styles.stepBadge}>STEP 2</span>
                <h3 className={styles.sectionTitle}>Select Processor Architecture</h3>
                <div className={styles.optionsList}>
                  {CPUS.map(opt => (
                    <div
                      key={opt.id}
                      onClick={() => setCpu(opt)}
                      className={`${styles.optionCard} ${cpu.id === opt.id ? styles.activeCard : ''}`}
                    >
                      <div className={styles.optionHeader}>
                        <span className={styles.optionName}>{opt.name}</span>
                        <span className={styles.optionPrice}>
                          {opt.price === 0 ? 'Included' : `+$${opt.price}`}
                        </span>
                      </div>
                      <p className={styles.optionDesc}>{opt.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3: Storage */}
              <div className={styles.optionSection}>
                <span className={styles.stepBadge}>STEP 3</span>
                <h3 className={styles.sectionTitle}>Select NVMe SSD Storage</h3>
                <div className={styles.optionsList}>
                  {STORAGE.map(opt => (
                    <div
                      key={opt.id}
                      onClick={() => setStorage(opt)}
                      className={`${styles.optionCard} ${storage.id === opt.id ? styles.activeCard : ''}`}
                    >
                      <div className={styles.optionHeader}>
                        <span className={styles.optionName}>{opt.name}</span>
                        <span className={styles.optionPrice}>
                          {opt.price === 0 ? 'Included' : `+$${opt.price}`}
                        </span>
                      </div>
                      <p className={styles.optionDesc}>{opt.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 4: Accessories */}
              <div className={styles.optionSection}>
                <span className={styles.stepBadge}>STEP 4</span>
                <h3 className={styles.sectionTitle}>Select Accessory Upgrades</h3>
                <div className={styles.optionsList}>
                  {ACCESSORIES.map(opt => {
                    const Icon = opt.icon;
                    const isSelected = selectedAccs.includes(opt.id);
                    return (
                      <div
                        key={opt.id}
                        onClick={() => handleAccToggle(opt.id)}
                        className={`${styles.optionCard} ${isSelected ? styles.activeCard : ''}`}
                      >
                        <div className={styles.optionHeader}>
                          <span className={styles.optionName} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <Icon size={16} color={isSelected ? '#FC9700' : 'var(--color-muted)'} />
                            {opt.name}
                          </span>
                          <span className={styles.optionPrice}>+${opt.price}</span>
                        </div>
                        <p className={styles.optionDesc}>{opt.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Right Side: Summary Console */}
        <div className={styles.summaryCol}>
          <div className={styles.consoleCard}>
            <div className={styles.consoleHeader}>
              <div className={styles.statusDot} />
              <span>CONFIGURATION CONSOLE</span>
            </div>
            
            <div className={styles.consoleBody}>
              <div className={styles.summaryItem}>
                <span className={styles.summaryLabel}>Platform Model</span>
                <span className={styles.summaryValue}>{model.name}</span>
              </div>

              {model.id !== 'core' && (
                <>
                  <div className={styles.summaryItem}>
                    <span className={styles.summaryLabel}>Processor</span>
                    <span className={styles.summaryValue}>{cpu.name}</span>
                  </div>
                  <div className={styles.summaryItem}>
                    <span className={styles.summaryLabel}>Storage Casing</span>
                    <span className={styles.summaryValue}>{storage.name}</span>
                  </div>
                  {selectedAccs.length > 0 && (
                    <div className={styles.summaryItem} style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 6 }}>
                      <span className={styles.summaryLabel}>Add-on Modules:</span>
                      <div className={styles.accessoriesBadgeRow}>
                        {ACCESSORIES
                          .filter(a => selectedAccs.includes(a.id))
                          .map(a => (
                            <span key={a.id} className={styles.accBadge}>{a.name}</span>
                          ))
                        }
                      </div>
                    </div>
                  )}
                </>
              )}

              <hr className={styles.divider} />

              <div className={styles.codeRow}>
                <span className={styles.codeLabel}>Config ID Spec:</span>
                <div className={styles.codeContainer}>
                  <code>{configCode}</code>
                  <button onClick={handleCopy} className={styles.copyBtn} aria-label="Copy code">
                    {copied ? <Check size={16} color="#16a34a" /> : <Clipboard size={16} />}
                  </button>
                </div>
              </div>

              <div className={styles.priceRow}>
                <span className={styles.priceLabel}>Estimated Unit Price:</span>
                <span className={styles.priceValue}>
                  ${totalPrice}
                  <span className={styles.currency}> USD</span>
                </span>
              </div>

              <a
                href={`mailto:sales@bitsotron.com?subject=BITSOTRON Custom Configuration Request: ${configCode}&body=Hello BITSOTRON Sales,%0D%0A%0D%0AI would like a commercial quotation for the following edge configuration:%0D%0A%0D%0AConfiguration Code: ${configCode}%0D%0ABase Model: ${model.name}%0D%0ACPU: ${cpu.name}%0D%0AStorage: ${storage.name}%0D%0AModules: ${selectedAccs.length > 0 ? selectedAccs.join(', ') : 'None'}%0D%0A%0D%0APlease get in touch with detailed pricing and delivery estimates.%0D%0A%0D%0AThanks!`}
                className={styles.mailLink}
              >
                <Button variant="primary" style={{ width: '100%' }} icon={<Mail size={18} />}>
                  Email Purchase Spec Code
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
