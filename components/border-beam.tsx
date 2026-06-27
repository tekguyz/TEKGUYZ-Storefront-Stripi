"use client";

import { motion, useReducedMotion } from "motion/react";
import React, { useEffect, useState } from "react";

export function BorderBeam({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted || prefersReducedMotion) {
    return (
      <div className="relative p-px rounded-lg border border-[var(--color-border)]">
        <div className="relative z-10 bg-[var(--color-surface)] rounded-lg overflow-hidden">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="relative p-[1px] rounded-lg overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          borderRadius: "inherit",
          background: "conic-gradient(from 0deg, transparent 0%, var(--color-text) 25%, transparent 50%)",
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 6, ease: "linear", repeat: Infinity }}
      />
      <div 
        className="absolute inset-[1px] z-10 bg-[var(--color-surface)] rounded-lg"
      />
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
}
