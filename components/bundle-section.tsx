"use client";

import { motion } from "motion/react";
import { 
  Laptop, 
  Cpu, 
  Mic, 
  GraduationCap, 
  HardDrive, 
  ShieldCheck, 
  Monitor, 
  CheckCircle2, 
  Zap, 
  Layers,
  Award
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function BundleSection() {
  return (
    <section id="bundle-details" className="py-20 bg-[var(--color-surface-2)] border-t border-[var(--color-border)]">
      <div className="container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <h2 className="font-sans font-light text-3xl sm:text-4xl lg:text-[2.5rem] text-[var(--color-text)] leading-tight tracking-[-0.03em]">
              Everything You Need
            </h2>
            <h3 className="font-sans font-light text-3xl sm:text-4xl lg:text-[2.5rem] text-[var(--color-text-muted)] leading-tight tracking-[-0.03em] mt-1">
              Included in the Bundle
            </h3>
            <p className="text-sm font-light text-[var(--color-text-muted)] max-w-xl mt-4 leading-relaxed">
              No guesswork. Pre-configured and certified for court reporting voice writing curriculum.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Column 1 & 2: Core Computer Console (Flagship Item) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden shadow-sm"
          >
            {/* Top Badge & Header */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-surface-2)] flex items-center justify-center shrink-0 border border-[var(--color-border)]">
                    <Laptop className="w-5 h-5 text-[var(--primary)]" />
                  </div>
                  <div>
                    <span className="text-[9px] text-[var(--primary)] font-sans tracking-[0.1em] uppercase bg-[var(--color-accent-glow)] px-2 py-0.5 rounded-full inline-block mb-1 font-semibold border-none">
                      Featured Core System
                    </span>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-text)]">
                      Computer System
                    </h3>
                  </div>
                </div>
                <div className="text-[10px] font-mono bg-[var(--color-surface-2)] text-[var(--color-text-muted)] px-3 py-1 rounded-sm border border-[var(--color-border)] uppercase tracking-wider">
                  CHASSIS: 14&quot; Business-Class
                </div>
              </div>

              <p className="text-sm text-[var(--color-text-muted)] mb-8 leading-relaxed max-w-xl font-light">
                A business-class hardware terminal engineered to support demanding real-time voice writing workloads with ultra-low latency and absolute system stability.
              </p>

              {/* Technical Specifications Spec-Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Spec 1 */}
                <div className="p-4 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] flex flex-col justify-between hover:border-[var(--primary)]/35 transition-all duration-200">
                  <div className="flex items-center gap-2 text-[var(--color-text)] mb-2">
                    <Cpu className="w-3.5 h-3.5 text-[var(--primary)]" />
                    <span className="text-[9px] font-mono tracking-wider uppercase">Processor</span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.05em] text-[var(--color-text)]">AMD Ryzen AI PRO</span>
                  <span className="text-[10px] text-[var(--color-text-muted)] mt-1 font-mono uppercase tracking-wider">Series PRO 350 NPU</span>
                </div>

                {/* Spec 2 */}
                <div className="p-4 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] flex flex-col justify-between hover:border-[var(--primary)]/35 transition-all duration-200">
                  <div className="flex items-center gap-2 text-[var(--color-text)] mb-2">
                    <Layers className="w-3.5 h-3.5 text-[var(--primary)]" />
                    <span className="text-[9px] font-mono tracking-wider uppercase">Memory</span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.05em] text-[var(--color-text)]">32GB Dual-Channel</span>
                  <span className="text-[10px] text-[var(--color-text-muted)] mt-1 font-mono uppercase tracking-wider">DDR5 High-Frequency</span>
                </div>

                {/* Spec 3 */}
                <div className="p-4 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] flex flex-col justify-between hover:border-[var(--primary)]/35 transition-all duration-200">
                  <div className="flex items-center gap-2 text-[var(--color-text)] mb-2">
                    <HardDrive className="w-3.5 h-3.5 text-[var(--primary)]" />
                    <span className="text-[9px] font-mono tracking-wider uppercase">Storage</span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.05em] text-[var(--color-text)]">1TB SSD NVMe</span>
                  <span className="text-[10px] text-[var(--color-text-muted)] mt-1 font-mono uppercase tracking-wider">PCIe Lightning Speed</span>
                </div>

                {/* Spec 4 */}
                <div className="p-4 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] flex flex-col justify-between hover:border-[var(--primary)]/35 transition-all duration-200">
                  <div className="flex items-center gap-2 text-[var(--color-text)] mb-2">
                    <Monitor className="w-3.5 h-3.5 text-[var(--primary)]" />
                    <span className="text-[9px] font-mono tracking-wider uppercase">Form Factor</span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.05em] text-[var(--color-text)]">14&quot; Business Panel</span>
                  <span className="text-[10px] text-[var(--color-text-muted)] mt-1 font-mono uppercase tracking-wider">Anti-Glare, Eye-Safe</span>
                </div>

                {/* Spec 5 */}
                <div className="p-4 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] flex flex-col justify-between hover:border-[var(--primary)]/35 transition-all duration-200">
                  <div className="flex items-center gap-2 text-[var(--color-text)] mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary)]" />
                    <span className="text-[9px] font-mono tracking-wider uppercase">Optimization</span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.05em] text-[var(--color-text)]">Eclipse Ready</span>
                  <span className="text-[10px] text-[var(--color-text-muted)] mt-1 font-mono uppercase tracking-wider">Speechmatics Certified</span>
                </div>

                {/* Spec 6 */}
                <div className="p-4 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] flex flex-col justify-between hover:border-[var(--primary)]/35 transition-all duration-200">
                  <div className="flex items-center gap-2 text-[var(--color-text)] mb-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[var(--primary)]" />
                    <span className="text-[9px] font-mono tracking-wider uppercase">Warranty</span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.05em] text-[var(--color-text)]">3-Yr Premier Support</span>
                  <span className="text-[10px] text-[var(--color-text-muted)] mt-1 font-mono uppercase tracking-wider">Next-Business-Day Assistance</span>
                </div>
              </div>
            </div>

            {/* Included Accessories Tray */}
            <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" />
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[var(--color-text)]">Workspace Add-ons Included</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider bg-[var(--color-surface-2)] text-[var(--color-text-muted)] border border-[var(--color-border)] px-3 py-1 rounded-sm">
                  4-Port Premium USB Hub
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider bg-[var(--color-surface-2)] text-[var(--color-text-muted)] border border-[var(--color-border)] px-3 py-1 rounded-sm">
                  Tailored Protective Laptop Case
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Audio Gear & Software Stack */}
          <div className="flex flex-col gap-6">
            
            {/* Voice Writing Equipment Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6 md:p-8 flex flex-col justify-between flex-1 shadow-sm"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] flex items-center justify-center shrink-0">
                    <Mic className="w-4 h-4 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold tracking-[0.1em] uppercase text-[var(--color-text-muted)]">
                      Voice Writing Gear
                    </h3>
                  </div>
                </div>
                <div className="h-px w-full bg-[var(--color-border)] my-3" />
                
                <ul className="space-y-4 mt-6">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[var(--primary)] mt-[7px] shrink-0 rounded-full" />
                    <div>
                      <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text)] block">Ultimate Double Dragon 2 Stenomask</span>
                      <span className="text-xs text-[var(--color-text-muted)] leading-relaxed font-light">Accurate voice capturing in noisy or classroom environments.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[var(--primary)] mt-[7px] shrink-0 rounded-full" />
                    <div>
                      <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text)] block">MuffleMitt-AM Sound Cover</span>
                      <span className="text-xs text-[var(--color-text-muted)] leading-relaxed font-light">Specially lined to absorb sound and suppress voice feedback.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[var(--primary)] mt-[7px] shrink-0 rounded-full" />
                    <div>
                      <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text)] block">High-Fidelity Headphones</span>
                      <span className="text-xs text-[var(--color-text-muted)] leading-relaxed font-light">Crystal clear stereo reproduction for precise auditing.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Software Suite Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6 md:p-8 flex flex-col justify-between flex-1 shadow-sm"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] flex items-center justify-center shrink-0">
                    <Cpu className="w-4 h-4 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold tracking-[0.1em] uppercase text-[var(--color-text-muted)]">
                      Eclipse Software Suite
                    </h3>
                  </div>
                </div>
                <div className="h-px w-full bg-[var(--color-border)] my-3" />
                
                <ul className="space-y-4 mt-6">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[var(--primary)] mt-[7px] shrink-0 rounded-full" />
                    <div>
                      <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text)] block">Eclipse Student Edition License</span>
                      <span className="text-xs text-[var(--color-text-muted)] leading-relaxed font-light">Industry standard CAT software preloaded and activated.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[var(--primary)] mt-[7px] shrink-0 rounded-full" />
                    <div>
                      <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text)] block">500 Speech Recognition Hours</span>
                      <span className="text-xs text-[var(--color-text-muted)] leading-relaxed font-light">Invaluable built-in cloud-based translation allowance.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>

          {/* Bottom Full-Width Training & Support Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="lg:col-span-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6 sm:p-8 md:p-10 shadow-sm"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-[var(--primary)]" />
              </div>
              <div>
                <h3 className="font-sans font-light text-xl text-[var(--color-text)] tracking-tight">
                  Elite Student Support &amp; Webinars
                </h3>
                <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] mt-1">
                  Supporting your transition from student to certified professional.
                </p>
              </div>
            </div>

            <div className="h-px w-full bg-[var(--color-border)] mb-6" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Support detail */}
              <div className="p-5 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] hover:border-[var(--primary)]/35 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-6 w-6 items-center justify-center border border-[var(--primary)] rounded-full font-mono text-[10px] font-bold text-[var(--primary)]">01</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text)]">Anytime Support™ Helpline</span>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed pl-9 font-light">
                  Instant, priority remote assistance for court reporting students. Call our live technicians anytime to resolve setup, microphone, or driver challenges.
                </p>
              </div>

              {/* Webinar credit detail */}
              <div className="p-5 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] hover:border-[var(--primary)]/35 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-6 w-6 items-center justify-center border border-[var(--primary)] rounded-full font-mono text-[10px] font-bold text-[var(--primary)]">02</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text)]">
                    $400 Webinar Credit Allowance
                  </span>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed pl-9 font-light">
                  Receive a complementary $400 training credit to attend specialized voice writing webinars, added directly alongside your school discount.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
