"use client";

import { motion } from "motion/react";
import { Lock } from "lucide-react";
import { PriceCounter } from "./price-counter";
import { BorderBeam } from "./border-beam";
import PayPalButton from "@/components/paypal-button";
import PayPalMessages from "@/components/paypal-messages";

export default function PurchaseBlock() {
  return (
    <section className="py-[var(--section-padding-y)] bg-[var(--color-base)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[640px] mx-auto w-full"
        >
          <BorderBeam>
            <div className="p-6 sm:p-8 md:p-12 flex flex-col items-center rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)]">
              <h2 className="text-xs font-mono tracking-[0.18em] uppercase text-[var(--color-text-muted)] text-center mb-6">
                Complete Student Voice Writing Bundle
              </h2>
              
              <div className="flex flex-col items-center mb-2">
                <PriceCounter />
              </div>
              
              <p className="text-sm text-[var(--color-text-muted)] text-center mb-7">
                or pay over time with PayPal
              </p>

              <div className="w-full h-px bg-[var(--color-border-subtle)] mb-7" />

              <div className="w-full" role="region" aria-label="Purchase">
                <PayPalMessages />
                {/* Studio backdrop box for third-party checkout button */}
                <div className="p-4 sm:p-6 bg-white dark:bg-[rgba(13,37,61,0.5)] border border-[var(--color-border)] rounded-xl shadow-sm mb-2">
                  <div id="paypal-button-container" style={{ minHeight: "48px" }}>
                    <PayPalButton />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-xs text-[var(--color-text-muted)] mt-6">
                <Lock size={12} className="shrink-0" />
                <span>Secured by PayPal &middot; Sandbox Mode Active</span>
              </div>
            </div>
          </BorderBeam>
        </motion.div>
      </div>
    </section>
  );
}
