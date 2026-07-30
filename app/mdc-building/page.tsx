'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, Copy, Mail, RefreshCw, Cpu, Database, Shield, Zap, BookOpen, HeartPulse, Store, Wrench, Settings, Battery } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

// Specification details
const BASE_MODELS = [
  { id: 'software', name: 'BITSOTRON Core (Software Only)', price: 0, desc: 'Enterprise micro-kernel OS license for user-provided boards.' },
  { id: 'edge-s1', name: 'BITSOTRON Edge S1 (Rugged Mini)', price: 23999, originalPrice: 39999, desc: 'Rugged portable mini-node for remote environments.' },
  { id: 'edge-x5', name: 'BITSOTRON Edge X5 (Enterprise)', price: 71999, originalPrice: 119999, desc: 'High-performance pole-mount or server rack system.' }
];

const PROCESSORS = [
  { id: 'arm64', name: 'ARM64 Cortex Quad-Core', price: 0, desc: 'Default low-thermal processor. Fits standard telemetry operations.' },
  { id: 'x86_64', name: 'x86_64 Intel Atom Industrial', price: 12000, desc: 'Medium-tier industrial processor for heavy database lookups.' },
  { id: 'fpga', name: 'FPGA Co-processor (Custom DSP)', price: 36000, desc: 'High-speed hardware acceleration for real-time sensor streams.' }
];

const STORAGE_OPTIONS = [
  { id: 'ssd-256', name: '256GB Enterprise NVMe SSD', price: 0, desc: 'Standard space tier for system configurations and telemetry logs.' },
  { id: 'ssd-1tb', name: '1TB Enterprise NVMe SSD', price: 9999, desc: 'Expanded storage tier for offline media assets and libraries.' },
  { id: 'ssd-2tb', name: '2TB Enterprise NVMe SSD', price: 19999, desc: 'Maximum storage tier for extensive industrial telemetry logging.' }
];

const SECTOR_CRATES = [
  { id: 'none', name: 'No Sector Crate (Vanilla OS)', price: 0, desc: 'Pure operating system runtime with no preloaded sector content.' },
  { id: 'crate-edu', name: 'Education Offline Crate', price: 8000, desc: 'Preloaded offline video courses, textbooks, and quiz runtime.' },
  { id: 'crate-health', name: 'Healthcare Offline Crate', price: 10000, desc: 'Preloaded clinical manuals, diagnostic tools, and chart logs.' },
  { id: 'crate-retail', name: 'Retail & Events Crate', price: 7000, desc: 'Preloaded offline catalog managers, templates, and registration.' },
  { id: 'crate-industry', name: 'Industry & Field Crate', price: 12000, desc: 'Preloaded safety guides, checklist libraries, and ROS2 drivers.' }
];

const SERVICES = [
  { id: 'none', name: 'Standard Self-Managed SLA', price: 0, desc: 'Access to standard support tickets and open developer docs.' },
  { id: 'service-seed', name: 'Offline Data Seeding Service', price: 12000, desc: 'We preload and flash your corporate dataset onto the SSD before shipping.' },
  { id: 'service-sla', name: '24/7 Priority SLA Support', price: 24000, desc: 'Guaranteed 1-hour ticket response times from edge systems engineers.' },
  { id: 'service-compile', name: 'Custom Kernel Compile Service', price: 48000, desc: 'Bespoke micro-kernel compiler adjustments for proprietary ASIC/FPGA boards.' }
];

const UPGRADES = [
  { id: 'up-ip67', name: 'IP67 Waterproof Outdoor Case', price: 14999, desc: 'Waterproof, dustproof, and shockproof protective outer shielding.' },
  { id: 'up-battery', name: 'Li-FePO4 Battery Expansion Pack', price: 11000, desc: 'Add-on module yielding up to 8 hours of off-grid field operations.' },
  { id: 'up-hsm', name: 'HSM Cryptographic Secure Chip', price: 24000, desc: 'Air-gapped security enclave co-processor with post-quantum key.' }
];

const STEPS = [
  { name: '1. Base Frame', key: 'base' },
  { name: '2. Processor', key: 'cpu' },
  { name: '3. Storage', key: 'storage' },
  { name: '4. Sector Crate', key: 'crate' },
  { name: '5. Services', key: 'service' },
  { name: '6. Upgrades', key: 'upgrades' }
];

export default function MDCBuildingPage() {
  const [activeStep, setActiveStep] = useState(0);

  // Selections state
  const [selectedBase, setSelectedBase] = useState('software');
  const [selectedCpu, setSelectedCpu] = useState('arm64');
  const [selectedStorage, setSelectedStorage] = useState('ssd-256');
  const [selectedCrate, setSelectedCrate] = useState('none');
  const [selectedService, setSelectedService] = useState('none');
  const [selectedUpgrades, setSelectedUpgrades] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  // Find objects helper
  const baseObj = BASE_MODELS.find(x => x.id === selectedBase) || BASE_MODELS[0];
  const cpuObj = PROCESSORS.find(x => x.id === selectedCpu) || PROCESSORS[0];
  const storageObj = STORAGE_OPTIONS.find(x => x.id === selectedStorage) || STORAGE_OPTIONS[0];
  const crateObj = SECTOR_CRATES.find(x => x.id === selectedCrate) || SECTOR_CRATES[0];
  const serviceObj = SERVICES.find(x => x.id === selectedService) || SERVICES[0];
  const activeUpgrades = UPGRADES.filter(x => selectedUpgrades.includes(x.id));

  // Pricing math
  const subtotal = baseObj.price + cpuObj.price + storageObj.price + crateObj.price + serviceObj.price + activeUpgrades.reduce((sum, x) => sum + x.price, 0);
  
  // Total original price math for launch offer showcase
  const originalSubtotal = (baseObj.originalPrice || baseObj.price) + cpuObj.price + storageObj.price + crateObj.price + serviceObj.price + activeUpgrades.reduce((sum, x) => sum + x.price, 0);
  const totalSavings = originalSubtotal - subtotal;

  // Build ID string format: e.g. BITSO-MDC-EDGE-S1-FPGA-SSD-2TB-CRATE-HEALTH-SERVICE-SEED-IP67
  const upgradeStr = selectedUpgrades.length > 0 ? selectedUpgrades.map(u => u.replace('up-', '').toUpperCase()).join('-') : 'NONE';
  const configCode = `BITSO-MDC-${selectedBase.toUpperCase()}-${selectedCpu.toUpperCase()}-${selectedStorage.toUpperCase()}-${selectedCrate.replace('crate-', '').toUpperCase()}-${selectedService.replace('service-', '').toUpperCase()}-${upgradeStr}`;

  // Toggle upgrades selection
  const handleToggleUpgrade = (id: string) => {
    if (selectedUpgrades.includes(id)) {
      setSelectedUpgrades(selectedUpgrades.filter(x => x !== id));
    } else {
      setSelectedUpgrades([...selectedUpgrades, id]);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(configCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setSelectedBase('software');
    setSelectedCpu('arm64');
    setSelectedStorage('ssd-256');
    setSelectedCrate('none');
    setSelectedService('none');
    setSelectedUpgrades([]);
    setActiveStep(0);
  };

  // Precomposed email body
  const mailSubject = `BITSOTRON MDC Custom Build Pre-Book Request (${configCode})`;
  const mailBody = `Hello BITSOTRON Sales,%0D%0A%0D%0AI would like to pre-book a customized BITSOTRON micro-compute system using the interactive MDC builder tool:%0D%0A%0D%0AConfiguration Specifications:%0D%0A- Configuration Code: ${configCode}%0D%0A- Base Platform Model: ${baseObj.name}%0D%0A- Processor Module: ${cpuObj.name}%0D%0A- Storage Option: ${storageObj.name}%0D%0A- Sector Offline Crate: ${crateObj.name}%0D%0A- Custom Support/Services: ${serviceObj.name}%0D%0A- Upgrades Added: ${activeUpgrades.map(u => u.name).join(', ') || 'None'}%0D%0A%0D%0AEstimated Ex-Works Price: ₹${subtotal.toLocaleString('en-IN')}%0D%0A(Pre-book package includes lifetime free BITSOTRON Core license and 40% discount on edge hardware)%0D%0A%0D%0APlease contact me to finalize this configuration and outline billing steps.%0D%0A%0D%0ARegards,%0D%0A[Name]%0D%0A[Phone Number]`;

  return (
    <div className={styles.pageWrapper}>
      <div className="container">
        {/* Header Block */}
        <div className={styles.builderHeader}>
          <Link href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.9rem', color: 'var(--color-muted)', marginBottom: '1.5rem', textDecoration: 'none' }}>
            <ArrowLeft size={16} /> Back to Products Overview
          </Link>
          <h1>BITSOTRON MDC Building Portal</h1>
          <p style={{ maxWidth: '640px', margin: '0.5rem auto 0', color: 'var(--color-muted)' }}>
            Design your bespoke Mission Diagnostic Computer (MDC). Mix components, select sector modules, and configure edge licenses.
          </p>
        </div>

        {/* Builder Grid */}
        <div className={styles.builderGrid}>
          {/* Left Column: Interactive Wizard Selector */}
          <div>
            {/* Step Navigation Tabs */}
            <div className={styles.stepsNav}>
              {STEPS.map((step, idx) => (
                <button
                  key={step.key}
                  onClick={() => setActiveStep(idx)}
                  className={`${styles.stepBtn} ${activeStep === idx ? styles.activeStepBtn : ''}`}
                >
                  {step.name}
                </button>
              ))}
            </div>

            {/* Configurator Box Panel */}
            <div className={styles.buildPanel}>
              {activeStep === 0 && (
                <div>
                  <h3 className={styles.stepTitle}>Choose Base Platform Model</h3>
                  <p className={styles.stepDesc}>The chassis defines the computing frame, size limits, and base micro-kernel target license.</p>
                  <div className={styles.optionsGrid}>
                    {BASE_MODELS.map(opt => {
                      const Icon = opt.id === 'software' ? Settings : opt.id === 'edge-s1' ? Zap : Cpu;
                      return (
                        <div
                          key={opt.id}
                          onClick={() => setSelectedBase(opt.id)}
                          className={`${styles.optionCard} ${selectedBase === opt.id ? styles.activeCard : ''}`}
                        >
                          <div className={styles.optionHeader}>
                            <h4 className={styles.optionTitle} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              <Icon size={18} color="#FC9700" style={{ flexShrink: 0 }} />
                              {opt.name}
                            </h4>
                            <span className={styles.optionCost}>₹{opt.price.toLocaleString('en-IN')}</span>
                          </div>
                          <p className={styles.optionText}>{opt.desc}</p>
                          {opt.originalPrice && (
                            <div style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 600, marginTop: '4px' }}>
                              Save ₹{(opt.originalPrice - opt.price).toLocaleString('en-IN')} (40% Off!)
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeStep === 1 && (
                <div>
                  <h3 className={styles.stepTitle}>Select CPU Engine / Processor</h3>
                  <p className={styles.stepDesc}>Select the processor core architecture best matching your edge diagnostics throughput goals.</p>
                  <div className={styles.optionsGrid}>
                    {PROCESSORS.map(opt => {
                      const Icon = opt.id === 'arm64' ? Cpu : opt.id === 'x86_64' ? Settings : Zap;
                      return (
                        <div
                          key={opt.id}
                          onClick={() => setSelectedCpu(opt.id)}
                          className={`${styles.optionCard} ${selectedCpu === opt.id ? styles.activeCard : ''}`}
                        >
                          <div className={styles.optionHeader}>
                            <h4 className={styles.optionTitle} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              <Icon size={18} color="#FC9700" style={{ flexShrink: 0 }} />
                              {opt.name}
                            </h4>
                            <span className={styles.optionCost}>{opt.price === 0 ? 'Included' : `+₹${opt.price.toLocaleString('en-IN')}`}</span>
                          </div>
                          <p className={styles.optionText}>{opt.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div>
                  <h3 className={styles.stepTitle}>Configure Enterprise Storage Tier</h3>
                  <p className={styles.stepDesc}>Select NVMe storage capacity based on how much telemetry and files you want to log locally offline.</p>
                  <div className={styles.optionsGrid}>
                    {STORAGE_OPTIONS.map(opt => (
                      <div
                        key={opt.id}
                        onClick={() => setSelectedStorage(opt.id)}
                        className={`${styles.optionCard} ${selectedStorage === opt.id ? styles.activeCard : ''}`}
                      >
                        <div className={styles.optionHeader}>
                          <h4 className={styles.optionTitle} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <Database size={18} color="#FC9700" style={{ flexShrink: 0 }} />
                            {opt.name}
                          </h4>
                          <span className={styles.optionCost}>{opt.price === 0 ? 'Included' : `+₹${opt.price.toLocaleString('en-IN')}`}</span>
                        </div>
                        <p className={styles.optionText}>{opt.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div>
                  <h3 className={styles.stepTitle}>Select Sector Offline Content Crate</h3>
                  <p className={styles.stepDesc}>Choose sector-specific database packages preloaded offline to bootstrap local usage immediately.</p>
                  <div className={styles.optionsGrid}>
                    {SECTOR_CRATES.map(opt => {
                      const Icon =
                        opt.id === 'none' ? Settings :
                        opt.id === 'crate-edu' ? BookOpen :
                        opt.id === 'crate-health' ? HeartPulse :
                        opt.id === 'crate-retail' ? Store : Wrench;
                      return (
                        <div
                          key={opt.id}
                          onClick={() => setSelectedCrate(opt.id)}
                          className={`${styles.optionCard} ${selectedCrate === opt.id ? styles.activeCard : ''}`}
                        >
                          <div className={styles.optionHeader}>
                            <h4 className={styles.optionTitle} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              <Icon size={18} color="#FC9700" style={{ flexShrink: 0 }} />
                              {opt.name}
                            </h4>
                            <span className={styles.optionCost}>{opt.price === 0 ? 'Included' : `+₹${opt.price.toLocaleString('en-IN')}`}</span>
                          </div>
                          <p className={styles.optionText}>{opt.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeStep === 4 && (
                <div>
                  <h3 className={styles.stepTitle}>Add Engineering & Support Services</h3>
                  <p className={styles.stepDesc}>Opt-in to micro-kernel optimization, data loading, or custom 24/7 hardware support response layers.</p>
                  <div className={styles.optionsGrid}>
                    {SERVICES.map(opt => {
                      const Icon =
                        opt.id === 'none' ? Settings :
                        opt.id === 'service-seed' ? Database :
                        opt.id === 'service-sla' ? Shield : Wrench;
                      return (
                        <div
                          key={opt.id}
                          onClick={() => setSelectedService(opt.id)}
                          className={`${styles.optionCard} ${selectedService === opt.id ? styles.activeCard : ''}`}
                        >
                          <div className={styles.optionHeader}>
                            <h4 className={styles.optionTitle} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              <Icon size={18} color="#FC9700" style={{ flexShrink: 0 }} />
                              {opt.name}
                            </h4>
                            <span className={styles.optionCost}>{opt.price === 0 ? 'Included' : `+₹${opt.price.toLocaleString('en-IN')}`}</span>
                          </div>
                          <p className={styles.optionText}>{opt.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeStep === 5 && (
                <div>
                  <h3 className={styles.stepTitle}>Auxiliary Hardware Upgrades</h3>
                  <p className={styles.stepDesc}>Add optional protective casing shells, battery expansion bricks, or security co-processors.</p>
                  <div className={styles.optionsGrid}>
                    {UPGRADES.map(opt => {
                      const isSelected = selectedUpgrades.includes(opt.id);
                      const Icon =
                        opt.id === 'up-ip67' ? Shield :
                        opt.id === 'up-battery' ? Battery : Shield;
                      return (
                        <div
                          key={opt.id}
                          onClick={() => handleToggleUpgrade(opt.id)}
                          className={`${styles.optionCard} ${isSelected ? styles.activeCard : ''}`}
                        >
                          <div className={styles.optionHeader}>
                            <h4 className={styles.optionTitle} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20, border: '2px solid #FC9700', borderRadius: '4px', flexShrink: 0, background: isSelected ? '#FC9700' : 'transparent' }}>
                                {isSelected && <Check size={14} color="#fff" />}
                              </span>
                              <Icon size={18} color="#FC9700" style={{ flexShrink: 0 }} />
                              {opt.name}
                            </h4>
                            <span className={styles.optionCost}>+₹{opt.price.toLocaleString('en-IN')}</span>
                          </div>
                          <p className={styles.optionText} style={{ paddingLeft: 30 }}>{opt.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Wizard Steps Navigator Buttons */}
              <div className={styles.wizardActions}>
                <Button
                  variant="outline"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(activeStep - 1)}
                  icon={<ArrowLeft size={16} />}
                >
                  Previous Step
                </Button>
                {activeStep < 5 ? (
                  <Button
                    variant="primary"
                    onClick={() => setActiveStep(activeStep + 1)}
                    icon={<ArrowRight size={16} />}
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    onClick={handleReset}
                    icon={<RefreshCw size={16} />}
                  >
                    Reset Builder
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Floating Console Summary */}
          <div className={styles.sidebarSummary}>
            <div className={styles.consoleCard}>
              {/* CSS 3D Model Visualizer */}
              <div className={styles.modelViewport}>
                <div className={styles.modelStage}>
                  {/* Base Chassis Box */}
                  <div className={`${styles.cube} ${
                    selectedBase === 'software' ? styles.cubeSoftware :
                    selectedBase === 'edge-s1' ? styles.cubeEdgeS1 : styles.cubeEdgeX5
                  }`}>
                    {/* Front Face with LED Light & Text */}
                    <div className={`${styles.face} ${styles.faceFront}`}>
                      <div className={`${styles.ledLight} ${
                        selectedBase !== 'software' ? styles.ledLightActive : ''
                      }`} />
                      <span style={{ fontSize: selectedBase === 'software' ? '7px' : '9px', color: '#FC9700', fontWeight: 'bold', letterSpacing: '0.05em' }}>
                        {selectedBase === 'software' ? 'CORE v1.0' :
                         selectedBase === 'edge-s1' ? 'EDGE S1' : 'EDGE X5'}
                      </span>
                    </div>
                    {/* Other 3D Cube Faces */}
                    <div className={`${styles.face} ${styles.faceBack}`} />
                    <div className={`${styles.face} ${styles.faceLeft}`} />
                    <div className={`${styles.face} ${styles.faceRight}`} />
                    <div className={`${styles.face} ${styles.faceTop}`}>
                      {/* CPU chip light on top */}
                      {selectedCpu === 'fpga' ? (
                        <div className={`${styles.procCoreLight} ${styles.procFpgaLight}`} />
                      ) : selectedCpu === 'x86_64' ? (
                        <div className={styles.chipGrid}>
                          <span /><span /><span />
                          <span /><span /><span />
                          <span /><span /><span />
                        </div>
                      ) : (
                        <div className={styles.procCoreLight} />
                      )}
                    </div>
                    <div className={`${styles.face} ${styles.faceBottom}`} />
                  </div>

                  {/* Battery Expansion Attachment (renders under Edge chassis if selected) */}
                  {selectedUpgrades.includes('up-battery') && selectedBase !== 'software' && (
                    <div className={`${styles.batteryUpgrade} ${
                      selectedBase === 'edge-s1' ? styles.batS1 : styles.batX5
                    }`}>
                      <div className={`${styles.batteryFace} ${styles.batteryFaceFront}`} />
                      <div className={`${styles.batteryFace} ${styles.batteryFaceBack}`} />
                      <div className={`${styles.batteryFace} ${styles.batteryFaceLeft}`} />
                      <div className={`${styles.batteryFace} ${styles.batteryFaceRight}`} />
                      <div className={`${styles.batteryFace} ${styles.batteryFaceTop}`} />
                      <div className={`${styles.batteryFace} ${styles.batteryFaceBottom}`} />
                    </div>
                  )}

                  {/* IP67 Outer Shield Casing (renders surrounding Edge S1 / X5 if selected) */}
                  {selectedUpgrades.includes('up-ip67') && selectedBase !== 'software' && (
                    <div className={`${styles.caseUpgrade} ${
                      selectedBase === 'edge-s1' ? styles.caseS1 : styles.caseX5
                    }`}>
                      <div className={`${styles.caseFace} ${styles.caseFaceFront}`} />
                      <div className={`${styles.caseFace} ${styles.caseFaceBack}`} />
                      <div className={`${styles.caseFace} ${styles.caseFaceLeft}`} />
                      <div className={`${styles.caseFace} ${styles.caseFaceRight}`} />
                      <div className={`${styles.caseFace} ${styles.caseFaceTop}`} />
                      <div className={`${styles.caseFace} ${styles.caseFaceBottom}`} />
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.consoleHeader}>
                <div className={styles.statusWrapper}>
                  <div className={styles.statusDot} />
                  <span>SPECIFICATION MATRIX</span>
                </div>
                <span>v1.0.4-SYS</span>
              </div>

              <div className={styles.consoleBody}>
                <h4 className={styles.consoleHeading}>Build Components</h4>

                {/* Base platform */}
                <div className={styles.partRow}>
                  <span className={styles.partLabel}>Base:</span>
                  <span className={styles.partVal}>{baseObj.name.split(' (')[0]}</span>
                </div>

                {/* CPU */}
                <div className={styles.partRow}>
                  <span className={styles.partLabel}>CPU:</span>
                  <span className={styles.partVal}>{cpuObj.name.split(' (')[0]}</span>
                </div>

                {/* Storage */}
                <div className={styles.partRow}>
                  <span className={styles.partLabel}>Storage:</span>
                  <span className={styles.partVal}>{storageObj.name.split(' ')[0]}</span>
                </div>

                {/* Sector Crate */}
                <div className={styles.partRow}>
                  <span className={styles.partLabel}>Sector Crate:</span>
                  <span className={styles.partVal}>{crateObj.id === 'none' ? 'None' : crateObj.name.split(' ')[0]}</span>
                </div>

                {/* Service */}
                <div className={styles.partRow}>
                  <span className={styles.partLabel}>Service:</span>
                  <span className={styles.partVal}>{serviceObj.id === 'none' ? 'Self-Managed' : serviceObj.name.split(' (')[0].split(' ')[0]}</span>
                </div>

                {/* Upgrades list */}
                <div className={styles.partRow}>
                  <span className={styles.partLabel}>Upgrades:</span>
                  <span className={styles.partVal}>
                    {activeUpgrades.length === 0 ? 'None' : `${activeUpgrades.length} Selected`}
                  </span>
                </div>

                <hr className={styles.divider} />

                {/* Unique Build Code */}
                <div className={styles.partRow} style={{ flexDirection: 'column', alignItems: 'stretch', gap: 6 }}>
                  <span className={styles.partLabel} style={{ fontSize: '0.75rem' }}>CONFIGURATION SPEC CODE:</span>
                  <div className={styles.codePanel}>
                    <code>{configCode}</code>
                    <button
                      onClick={handleCopyCode}
                      className={styles.copyBtn}
                      title="Copy build configuration code"
                      aria-label="Copy configuration code"
                    >
                      {copied ? <Check size={16} color="#16a34a" /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>

                <hr className={styles.divider} />

                {/* Promotion details */}
                {(selectedBase !== 'software' || totalSavings > 0) && (
                  <div className={styles.promoPanel}>
                    <strong>⚡ PRE-BOOK OFFERS INCLUDED:</strong>
                    <ul style={{ paddingLeft: '1.2rem', margin: '4px 0 0', fontSize: '0.75rem' }}>
                      <li>Lifetime free BITSOTRON Core license</li>
                      {selectedBase !== 'software' && <li>40% launch discount on hardware chassis</li>}
                    </ul>
                  </div>
                )}

                {/* Estimated Cost */}
                <div className={styles.priceWrapper}>
                  <span className={styles.priceLabel}>Ex-Works Estimated Cost:</span>
                  <div className={styles.priceVal}>
                    ₹{subtotal.toLocaleString('en-IN')}
                    <span className={styles.currency}>INR</span>
                  </div>
                </div>

                <a
                  href={`mailto:sales@bitsotron.com?subject=${mailSubject}&body=${mailBody}`}
                  className={styles.prebookButtonLink}
                >
                  <Button variant="primary" size="lg" style={{ width: '100%' }} icon={<Mail size={18} />}>
                    Pre-Book Custom MDC (INR)
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
