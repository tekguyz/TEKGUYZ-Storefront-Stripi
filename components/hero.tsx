"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useReducedMotion } from "motion/react";
import { GradientMesh } from "./gradient-mesh";
import { ProductImage } from "./product-image";
import { PriceCounter } from "./price-counter";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const STAGGER_DELAY = 0.08;

function AnimatedHeadline({ text }: { text: string }) {
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(" ");
  
  return (
    <span className="inline-block">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: prefersReducedMotion ? 0 : 0.1 + i * STAGGER_DELAY
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const targetRef = useRef<HTMLButtonElement | null>(null);
  const mousePosRef = useRef({ x: -1000, y: -1000 });
  const mouseActiveRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseActiveRef.current = true;
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseActiveRef.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    let animationFrameId: number;

    const animateLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (mouseActiveRef.current && targetRef.current) {
        const rect = targetRef.current.getBoundingClientRect();
        const x1 = rect.left + rect.width / 2;
        const y1 = rect.top + rect.height / 2;

        const x0 = mousePosRef.current.x;
        const y0 = mousePosRef.current.y;

        const dist = Math.hypot(x1 - x0, y1 - y0);
        
        // Define proximity thresholds
        const maxDist = 500;
        const minDist = 40;

        if (dist > minDist && dist < maxDist) {
          // Smooth opacity calculation (proximity fade)
          const opacity = Math.max(0, Math.min(1, (maxDist - dist) / 350));

          // Angle of approach
          // Let's stop the arrow some distance before reaching the center of button
          const stopDist = 30; // approx distance from center to outer edge of CTA button
          const angleToCenter = Math.atan2(y1 - y0, x1 - x0);
          
          const targetX = x1 - Math.cos(angleToCenter) * stopDist;
          const targetY = y1 - Math.sin(angleToCenter) * stopDist;

          // Define dynamic control point
          const cx = (x0 + targetX) / 2;
          const cy = (y0 + targetY) / 2 - 80;

          // Recalculate approach angle at the end target
          const angle = Math.atan2(targetY - cy, targetX - cx);

          // Determine theme stroke color
          const isDark = document.documentElement.classList.contains("dark");
          const strokeColor = isDark 
            ? `rgba(185, 185, 249, ${opacity * 0.45})` 
            : `rgba(83, 58, 253, ${opacity * 0.45})`;

          // Draw dotted line
          ctx.beginPath();
          ctx.moveTo(x0, y0);
          ctx.quadraticCurveTo(cx, cy, targetX, targetY);
          
          ctx.strokeStyle = strokeColor;
          ctx.lineWidth = 1.5;
          ctx.setLineDash([8, 4]);
          ctx.stroke();

          // Draw arrowhead
          const headLength = 10;
          const headAngle = Math.PI / 6; // 30 degrees

          const xLeft = targetX - headLength * Math.cos(angle - headAngle);
          const yLeft = targetY - headLength * Math.sin(angle - headAngle);

          const xRight = targetX - headLength * Math.cos(angle + headAngle);
          const yRight = targetY - headLength * Math.sin(angle + headAngle);

          ctx.beginPath();
          ctx.setLineDash([]); // solid arrowhead
          ctx.moveTo(targetX, targetY);
          ctx.lineTo(xLeft, yLeft);
          ctx.moveTo(targetX, targetY);
          ctx.lineTo(xRight, yRight);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(animateLoop);
    };

    animateLoop();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] pt-20 pb-6 md:pt-24 md:pb-8 overflow-hidden flex flex-col justify-center">
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--color-accent)] z-[100]"
      />
      <GradientMesh />
      
      <div className="container relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-6 md:gap-8 items-center">
          
          <div className="flex flex-col items-start order-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
            >
              <Badge variant="outline" className="mb-2 md:mb-4 border-none text-[var(--primary)] dark:text-[#b9b9f9] bg-[var(--color-accent-glow)] dark:bg-[rgba(102,94,253,0.15)] rounded-full text-[10px] tracking-[0.1em] uppercase font-sans font-semibold px-3 py-1">
                Complete Student Bundle
              </Badge>
            </motion.div>
            
            <h1 className="font-sans text-4xl xs:text-5xl md:text-5xl lg:text-[2.75rem] xl:text-[3.5rem] font-light tracking-[-0.03em] text-[var(--color-text)] leading-[1.05] mb-3 md:mb-4 flex flex-col gap-1">
              <AnimatedHeadline text="Downey Voice Writing" />
              <AnimatedHeadline text="Student Bundle" />
            </h1>
            
            <motion.p 
              className="text-sm md:text-base text-[var(--color-text-muted)] max-w-[480px] mb-4 md:mb-6 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: prefersReducedMotion ? 0 : 0.5, duration: prefersReducedMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              A complete, ready-to-use package featuring a business-class 14-inch laptop optimized for voice writers, Eclipse Student Software, professional voice writing equipment, training resources, and support.
            </motion.p>
            
            <div className="flex flex-col gap-0.5 mb-5 md:mb-6">
              <PriceCounter />
              <motion.span 
                className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider font-mono mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: prefersReducedMotion ? 0 : 0.7, duration: prefersReducedMotion ? 0 : 0.4 }}
              >
                or pay over time with PayPal
              </motion.span>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: prefersReducedMotion ? 0 : 0.8, duration: prefersReducedMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-auto"
            >
              <Button 
                ref={targetRef}
                size="lg" 
                className="w-full md:w-auto h-12 md:h-14 bg-[var(--primary)] hover:bg-[#4434d4] active:bg-[#2e2b8c] text-[var(--primary-foreground)] rounded-full px-8 font-medium text-sm tracking-normal transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] border-none shadow-md"
                onClick={() => {
                  const el = document.getElementById("paypal-button-container");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "center" });
                  }
                }}
              >
                Buy with PayPal &rarr;
              </Button>
            </motion.div>
            
          </div>

          <div className="order-2 w-full flex justify-center items-center mt-8 md:mt-0">
            <ProductImage />
          </div>

        </div>
      </div>
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10" />
    </section>
  );
}
