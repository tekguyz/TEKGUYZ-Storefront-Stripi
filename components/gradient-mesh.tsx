"use client";

import { motion, useMotionValue, useSpring, useReducedMotion, useTransform } from "motion/react";
import { useEffect } from "react";

export function GradientMesh() {
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  
  const smoothX = useSpring(mouseX, { stiffness: 30, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 30, damping: 25 });

  const x1 = useTransform(smoothX, [0, 100], ["-5%", "5%"]);
  const x2 = useTransform(smoothX, [0, 100], ["3%", "-3%"]);
  const x3 = useTransform(smoothX, [0, 100], ["-4%", "4%"]);
  const x4 = useTransform(smoothX, [0, 100], ["2%", "-2%"]);
  const yScale = useTransform(smoothY, [0, 100], ["-5%", "5%"]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) * 100);
      mouseY.set((e.clientY / window.innerHeight) * 100);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, prefersReducedMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 h-[70vh] max-h-[800px]">
      {/* Cream Stop (Leftmost) */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[550px] h-[550px] blur-[100px] will-change-transform opacity-80"
        style={{
          background: "radial-gradient(circle, var(--gradient-mesh-1) 0%, transparent 80%)",
          x: x1,
          y: yScale
        }}
      />
      {/* Lemon / Sherbet Orange Stop */}
      <motion.div
        className="absolute -top-[15%] left-[15%] w-[450px] h-[450px] blur-[90px] will-change-transform opacity-40"
        style={{
          background: "radial-gradient(circle, var(--gradient-mesh-2) 0%, transparent 85%)",
          x: x2
        }}
      />
      {/* Lavender Stop */}
      <motion.div
        className="absolute -top-[20%] left-[35%] w-[500px] h-[500px] blur-[100px] will-change-transform opacity-50"
        style={{
          background: "radial-gradient(circle, var(--gradient-mesh-5) 0%, transparent 80%)",
          x: x3,
          y: yScale
        }}
      />
      {/* Indigo Stop */}
      <motion.div
        className="absolute -top-[15%] right-[15%] w-[550px] h-[550px] blur-[110px] will-change-transform opacity-35"
        style={{
          background: "radial-gradient(circle, var(--gradient-mesh-3) 0%, transparent 75%)",
          x: x4
        }}
      />
      {/* Ruby Pink Stop (Rightmost) */}
      <motion.div
        className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] blur-[100px] will-change-transform opacity-45"
        style={{
          background: "radial-gradient(circle, var(--gradient-mesh-4) 0%, transparent 80%)",
          x: x1,
          y: yScale
        }}
      />
    </div>
  );
}
