'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, Copy, Mail, RefreshCw, Cpu, Database, Shield, Zap, BookOpen, HeartPulse, Store, Wrench, Settings, Battery, Users, ShieldAlert, Layers } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

// Configurator options aligned with pricing rules docs
const USE_CASES = [
  { id: 'case-edu', name: 'Education & Classroom', desc: 'Distribute offline textbooks, lessons, videos, and local quiz tools.' },
  { id: 'case-ngo', name: 'NGO & Rural Community', desc: 'Deploy offline health documentation, community forms, and guides.' },
  { id: 'case-disaster', name: 'Disaster & Emergency Response', desc: 'Provide maps, contact logs, protocols, and coordination tools.' },
  { id: 'case-media', name: 'Photography & Creative Media', desc: 'Fast local media backup, data transfers, and creator group access.' },
  { id: 'case-field', name: 'Field Engineering & Construction', desc: 'Host offline blueprints, manuals, checklists, and sensor APIs.' },
  { id: 'case-business', name: 'Small Business / Shop', desc: 'Local employee files sharing, event brochures, and basic NAS.' },
  { id: 'case-fleet', name: 'Enterprise Fleet (Large Teams)', desc: 'Multi-device deployments, centralized sync, and secure portals.' }
];

const USER_COUNTS = [
  { id: 'users-small', name: '1 to 5 Users', price: 0, desc: 'Ideal for small prototype testing, single classrooms, or solo creators.' },
  { id: 'users-med', name: '6 to 20 Users', price: 6000, desc: 'Designed for average field teams or school computer lab benches.' },
  { id: 'users-large', name: '21 to 50 Users', price: 12000, desc: 'Engineered for dense rural communities or complete office teams.' },
  { id: 'users-xl', name: '51 to 100 Users', price: 24000, desc: 'High-density client bandwidth allocation and priority queue management.' },
  { id: 'users-enterprise', name: '100+ Users', price: 48000, desc: 'Enterprise scaling requiring custom multi-node mesh networking.' }
];

const STORAGE_OPTIONS = [
  { id: 'ssd-64', name: '64GB High-Endurance microSD', price: 0, desc: 'Standard planning configuration for text documents, code, and guides.' },
  { id: 'ssd-256', name: '256GB Enterprise NVMe SSD', price: 4000, desc: 'Recommended storage tier for images, manuals, and templates.' },
  { id: 'ssd-512', name: '512GB Enterprise NVMe SSD', price: 8000, desc: 'Suitable for high-density local files and small media galleries.' },
  { id: 'ssd-1tb', name: '1TB Enterprise NVMe SSD', price: 16000, desc: 'Designed for video libraries, large maps, and field datasets.' }
];

const RUNTIMES = [
  { id: 'run-desk', name: 'Desk Powered (Basic)', price: 0, desc: 'Requires stable external USB-C power input. Ideal for classroom tables.' },
  { id: 'run-short', name: '2 to 4 Hours Backup battery', price: 6000, desc: 'Safety power backup shielding against brief blackouts.' },
  { id: 'run-med', name: '4 to 8 Hours (Extended battery)', price: 12000, desc: 'Li-FePO4 battery pack for full-day portable operations in the field.' },
  { id: 'run-max', name: '8+ Hours (Maximum battery)', price: 20000, desc: 'Double cell battery stack for off-grid operations and emergency response.' }
];

const SECURITY_LEVELS = [
  { id: 'sec-basic', name: 'Basic Local Login', price: 0, desc: 'Standard password protection for local network administration.' },
  { id: 'sec-role', name: 'Role-Based Team Access', price: 5000, desc: 'Enforces user accounts, group permissions, and local audit logs.' },
  { id: 'sec-encrypt', name: 'Encrypted Storage Partition', price: 9000, desc: 'Full disk AES-256 encryption protecting physical data theft.' },
  { id: 'sec-enterprise', name: 'Enterprise Security Policies', price: 18000, desc: 'Integrates local Active Directory, certificate checks, and HSM keys.' }
];

const SERVICES = [
  { id: 'srv-share', name: 'Offline File Sharing & Wiki', price: 0, desc: 'Default tools for uploading, downloading, and hosting wiki documents.' },
  { id: 'srv-chat', name: 'Local Chat & Collaboration', price: 4500, desc: 'Browser-based message board and note sharing for connected clients.' },
  { id: 'srv-dev', name: 'Developer Tools (Git, VS Code)', price: 8500, desc: 'Local Git servers, browser coding sandbox, and container environments.' },
  { id: 'srv-ai', name: 'Edge AI & Inference Modules', price: 16000, desc: 'Hardware-accelerated local search, OCR engine, and assistant runtime.' },
  { id: 'srv-iot', name: 'IoT MQTT Sensor Dashboard', price: 12500, desc: 'Broker and telemetry visuals to monitor local sensors in real-time.' }
];

const STEPS = [
  { name: '1. Use Case', key: 'usecase' },
  { name: '2. Users Count', key: 'users' },
  { name: '3. Storage Needs', key: 'storage' },
  { name: '4. Battery Life', key: 'runtime' },
  { name: '5. Security', key: 'security' },
  { name: '6. Services', key: 'services' }
];

export default function MDCBuildingPage() {
  const [activeStep, setActiveStep] = useState(0);

  // Selections state
  const [selectedCase, setSelectedCase] = useState('case-edu');
  const [selectedUsers, setSelectedUsers] = useState('users-small');
  const [selectedStorage, setSelectedStorage] = useState('ssd-64');
  const [selectedRuntime, setSelectedRuntime] = useState('run-desk');
  const [selectedSecurity, setSelectedSecurity] = useState('sec-basic');
  const [selectedService, setSelectedService] = useState('srv-share');
  const [copied, setCopied] = useState(false);

  // Retrieve objects
  const caseObj = USE_CASES.find(x => x.id === selectedCase) || USE_CASES[0];
  const usersObj = USER_COUNTS.find(x => x.id === selectedUsers) || USER_COUNTS[0];
  const storageObj = STORAGE_OPTIONS.find(x => x.id === selectedStorage) || STORAGE_OPTIONS[0];
  const runtimeObj = RUNTIMES.find(x => x.id === selectedRuntime) || RUNTIMES[0];
  const securityObj = SECURITY_LEVELS.find(x => x.id === selectedSecurity) || SECURITY_LEVELS[0];
  const serviceObj = SERVICES.find(x => x.id === selectedService) || SERVICES[0];

  // Dynamic recommendation logic based on docs/29-product-configurator-pricing-rules.md
  let recommendedEdition = 'Prototype / Pilot Edition';
  let basePrice = 11999; // originally 19999 (40% off)
  let originalBasePrice = 19999;
  let editionCode = 'PROTO';

  const isEnterprise = selectedCase === 'case-fleet' || selectedUsers === 'users-enterprise' || selectedSecurity === 'sec-enterprise';
  const isField = selectedCase === 'case-disaster' || selectedCase === 'case-field' || selectedCase === 'case-media' || selectedRuntime === 'run-med' || selectedRuntime === 'run-max';
  const isEdu = selectedCase === 'case-edu' || selectedCase === 'case-ngo';

  if (isEnterprise) {
    recommendedEdition = 'Pro / Enterprise Edition';
    basePrice = 0; // Quote based
    originalBasePrice = 0;
    editionCode = 'PRO-ENT';
  } else if (isField) {
    recommendedEdition = 'Field Edition';
    basePrice = 35999; // originally 59999 (40% off)
    originalBasePrice = 59999;
    editionCode = 'FIELD';
  } else if (isEdu) {
    recommendedEdition = 'Education / Basic Edition';
    basePrice = 17999; // originally 29999 (40% off)
    originalBasePrice = 29999;
    editionCode = 'BASIC';
  }

  // Pricing calculations
  const addOnsTotal = usersObj.price + storageObj.price + runtimeObj.price + securityObj.price + serviceObj.price;
  const isQuoteBased = recommendedEdition === 'Pro / Enterprise Edition';
  const subtotal = isQuoteBased ? 0 : basePrice + addOnsTotal;
  const originalSubtotal = isQuoteBased ? 0 : originalBasePrice + addOnsTotal;
  const totalSavings = isQuoteBased ? 0 : originalSubtotal - subtotal;

  // Configuration ID string
  const configCode = `BITSO-MDC-${editionCode}-${selectedUsers.replace('users-', '').toUpperCase()}-${selectedStorage.replace('ssd-', '').toUpperCase()}-${selectedRuntime.replace('run-', '').toUpperCase()}-${selectedSecurity.replace('sec-', '').toUpperCase()}-${selectedService.replace('srv-', '').toUpperCase()}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(configCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setSelectedCase('case-edu');
    setSelectedUsers('users-small');
    setSelectedStorage('ssd-64');
    setSelectedRuntime('run-desk');
    setSelectedSecurity('sec-basic');
    setSelectedService('srv-share');
    setActiveStep(0);
  };

  // Precomposed email body
  const mailSubject = `BITSOTRON MDC Custom Build Pre-Book Request (${configCode})`;
  const mailBody = `Hello BITSOTRON Sales,%0D%0A%0D%0AI would like to pre-book a customized BITSOTRON Mini Data Center (MDC) using the configurator tool:%0D%0A%0D%0AConfiguration Specifications:%0D%0A- Configuration Code: ${configCode}%0D%0A- Recommended Edition: ${recommendedEdition}%0D%0A- Target Use Case: ${caseObj.name}%0D%0A- User Bandwidth: ${usersObj.name}%0D%0A- Storage Option: ${storageObj.name}%0D%0A- Battery Runtime Option: ${runtimeObj.name}%0D%0A- Security Enforcement: ${securityObj.name}%0D%0A- Service Modules: ${serviceObj.name}%0D%0A%0D%0AEstimated Ex-Works Price: ${isQuoteBased ? 'Contact for Quote (Enterprise)' : `₹${subtotal.toLocaleString('en-IN')}`}%0D%0A(Pre-book package includes lifetime free BITSOTRON Core license and 40% discount on edge hardware)%0D%0A%0D%0APlease contact me to finalize this configuration and outline billing steps.%0D%0A%0D%0ARegards,%0D%0A[Name]%0D%0A[Phone Number]`;

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
            Design your bespoke Mission Diagnostic Computer (MDC) using exact product engineering specifications.
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
                  <h3 className={styles.stepTitle}>Choose Target Use Case</h3>
                  <p className={styles.stepDesc}>Selecting your primary deployment scenario auto-calibrates micro-kernel settings and chassis selections.</p>
                  <div className={styles.optionsGrid}>
                    {USE_CASES.map(opt => {
                      const Icon =
                        opt.id === 'case-edu' ? BookOpen :
                        opt.id === 'case-ngo' ? HeartPulse :
                        opt.id === 'case-disaster' ? Shield :
                        opt.id === 'case-media' ? Database :
                        opt.id === 'case-field' ? Wrench :
                        opt.id === 'case-business' ? Store : Settings;
                      return (
                        <div
                          key={opt.id}
                          onClick={() => setSelectedCase(opt.id)}
                          className={`${styles.optionCard} ${selectedCase === opt.id ? styles.activeCard : ''}`}
                        >
                          <div className={styles.optionHeader}>
                            <h4 className={styles.optionTitle} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              <Icon size={18} color="#FC9700" style={{ flexShrink: 0 }} />
                              {opt.name}
                            </h4>
                          </div>
                          <p className={styles.optionText}>{opt.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeStep === 1 && (
                <div>
                  <h3 className={styles.stepTitle}>Select Active User Bandwidth</h3>
                  <p className={styles.stepDesc}>Define the typical number of clients connecting concurrently to the device Wi-Fi hotspot.</p>
                  <div className={styles.optionsGrid}>
                    {USER_COUNTS.map(opt => (
                      <div
                        key={opt.id}
                        onClick={() => setSelectedUsers(opt.id)}
                        className={`${styles.optionCard} ${selectedUsers === opt.id ? styles.activeCard : ''}`}
                      >
                        <div className={styles.optionHeader}>
                          <h4 className={styles.optionTitle} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <Users size={18} color="#FC9700" style={{ flexShrink: 0 }} />
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

              {activeStep === 2 && (
                <div>
                  <h3 className={styles.stepTitle}>Configure Storage Needs</h3>
                  <p className={styles.stepDesc}>Configure the storage capacity based on how much local data (PDFs, offline media, directories) you need.</p>
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
                  <h3 className={styles.stepTitle}>Select Battery Life / Runtime</h3>
                  <p className={styles.stepDesc}>Select the internal Li-FePO4 battery pack capacity required for remote or off-grid operations.</p>
                  <div className={styles.optionsGrid}>
                    {RUNTIMES.map(opt => (
                      <div
                        key={opt.id}
                        onClick={() => setSelectedRuntime(opt.id)}
                        className={`${styles.optionCard} ${selectedRuntime === opt.id ? styles.activeCard : ''}`}
                      >
                        <div className={styles.optionHeader}>
                          <h4 className={styles.optionTitle} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <Battery size={18} color="#FC9700" style={{ flexShrink: 0 }} />
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

              {activeStep === 4 && (
                <div>
                  <h3 className={styles.stepTitle}>Configure Security Level</h3>
                  <p className={styles.stepDesc}>Opt-in to hardware cryptographic enclaves, partition encryption, or simple role directories.</p>
                  <div className={styles.optionsGrid}>
                    {SECURITY_LEVELS.map(opt => (
                      <div
                        key={opt.id}
                        onClick={() => setSelectedSecurity(opt.id)}
                        className={`${styles.optionCard} ${selectedSecurity === opt.id ? styles.activeCard : ''}`}
                      >
                        <div className={styles.optionHeader}>
                          <h4 className={styles.optionTitle} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <Shield size={18} color="#FC9700" style={{ flexShrink: 0 }} />
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

              {activeStep === 5 && (
                <div>
                  <h3 className={styles.stepTitle}>Choose Core Service Module</h3>
                  <p className={styles.stepDesc}>Opt-in to custom collaboration features, developer Git servers, local MQTT setups, or Edge AI modules.</p>
                  <div className={styles.optionsGrid}>
                    {SERVICES.map(opt => {
                      const Icon =
                        opt.id === 'srv-share' ? Settings :
                        opt.id === 'srv-chat' ? BookOpen :
                        opt.id === 'srv-dev' ? Cpu :
                        opt.id === 'srv-ai' ? Zap : Shield;
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
              <div className={styles.consoleHeader}>
                <div className={styles.statusWrapper}>
                  <div className={styles.statusDot} />
                  <span>SPECIFICATION MATRIX</span>
                </div>
                <span>v1.0.4-SYS</span>
              </div>

              <div className={styles.consoleBody}>
                <h4 className={styles.consoleHeading}>Recommended System</h4>

                {/* Recommended Edition */}
                <div className={styles.partRow} style={{ marginBottom: 10 }}>
                  <span className={styles.partLabel} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Layers size={14} color="#FCBD00" /> System Edition:
                  </span>
                  <span className={styles.partVal} style={{ color: '#FCBD00', fontSize: '1rem', fontWeight: 800 }}>
                    {recommendedEdition}
                  </span>
                </div>

                <hr className={styles.divider} />

                <h4 className={styles.consoleHeading} style={{ marginTop: 10 }}>Selected Configuration</h4>

                {/* Use case */}
                <div className={styles.partRow}>
                  <span className={styles.partLabel}>Use Case:</span>
                  <span className={styles.partVal}>{caseObj.name.split(' & ')[0]}</span>
                </div>

                {/* Users count */}
                <div className={styles.partRow}>
                  <span className={styles.partLabel}>User Range:</span>
                  <span className={styles.partVal}>{usersObj.name}</span>
                </div>

                {/* Storage */}
                <div className={styles.partRow}>
                  <span className={styles.partLabel}>Storage size:</span>
                  <span className={styles.partVal}>{storageObj.name.split(' ')[0]}</span>
                </div>

                {/* Battery */}
                <div className={styles.partRow}>
                  <span className={styles.partLabel}>Battery backup:</span>
                  <span className={styles.partVal}>{runtimeObj.name.split(' ')[0]}</span>
                </div>

                {/* Security */}
                <div className={styles.partRow}>
                  <span className={styles.partLabel}>Security level:</span>
                  <span className={styles.partVal}>{securityObj.name.split(' ')[0]}</span>
                </div>

                {/* Service */}
                <div className={styles.partRow}>
                  <span className={styles.partLabel}>Service module:</span>
                  <span className={styles.partVal}>{serviceObj.name.split(' & ')[0]}</span>
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
                {!isQuoteBased && (
                  <div className={styles.promoPanel}>
                    <strong>⚡ PRE-BOOK OFFERS INCLUDED:</strong>
                    <ul style={{ paddingLeft: '1.2rem', margin: '4px 0 0', fontSize: '0.75rem' }}>
                      <li>Lifetime free BITSOTRON Core license</li>
                      <li>40% launch discount on hardware chassis</li>
                    </ul>
                  </div>
                )}

                {/* Estimated Cost */}
                <div className={styles.priceWrapper}>
                  <span className={styles.priceLabel}>Ex-Works Estimated Cost:</span>
                  <div className={styles.priceVal}>
                    {isQuoteBased ? (
                      <span style={{ fontSize: '1.3rem', color: '#FCBD00', fontWeight: 'bold' }}>Enterprise Quote</span>
                    ) : (
                      <>
                        ₹{subtotal.toLocaleString('en-IN')}
                        <span className={styles.currency}>INR</span>
                      </>
                    )}
                  </div>
                </div>

                <a
                  href={`mailto:sales@bitsotron.com?subject=${mailSubject}&body=${mailBody}`}
                  className={styles.prebookButtonLink}
                >
                  <Button variant="primary" size="lg" style={{ width: '100%' }} icon={<Mail size={18} />}>
                    {isQuoteBased ? 'Request Enterprise Quote' : 'Pre-Book Custom MDC (INR)'}
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
