"use client";

import { motion, useMotionValue, useSpring, useReducedMotion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PRODUCT } from "@/lib/constants";

const IMAGES = [
  "/downey-voicewriting-student-14.jpg",
  "/p14s-g6-front.png",
  "/p14s-g6-left-angle-front.png",
  "/p14s-g6-right-angle-front.png",
  "/p14s-g6-top-view.png",
  "/p14s-g6-flat.png",
  "/p14s-g6-back-view-angled-2.png",
  "/p14s-g6-back-view-angled.png",
  "/p14s-g6-right-side-semi-close.png",
  "/p14s-g6-closed-top-view-back.png",
  "/p14s-g6-bottom-view-closed.png",
];

export function ProductImage() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Core motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring interpolations
  const rotateX = useSpring(mouseY, { stiffness: 60, damping: 25 });
  const rotateY = useSpring(mouseX, { stiffness: 60, damping: 25 });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !mounted) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const degreesX = -(y / (rect.height / 2)) * 8;
    const degreesY = (x / (rect.width / 2)) * 6;

    mouseX.set(degreesY);
    mouseY.set(degreesX);
  };

  const handleMouseLeave = () => {
    if (prefersReducedMotion || !mounted) return;
    mouseX.set(0);
    mouseY.set(0);
  };

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div 
        className="relative w-full flex justify-center items-center group touch-pan-y"
        style={{ perspective: "1200px" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <button 
          onClick={prevImage}
          className="absolute left-0 md:left-4 z-20 p-2 md:p-3 bg-background hover:bg-foreground hover:text-background text-foreground rounded-full border border-foreground opacity-0 group-hover:opacity-100 transition-all duration-200"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.9, ease: [0.16, 1, 0.3, 1], delay: prefersReducedMotion ? 0 : 0.3 }}
          style={{
            rotateX: prefersReducedMotion ? 0 : rotateX,
            rotateY: prefersReducedMotion ? 0 : rotateY,
            transformStyle: "preserve-3d"
          }}
          /* FIX 1: Permanent premium white studio card wrapper for ALL images on BOTH themes */
          className="w-full aspect-[4/3] max-w-[480px] relative rounded-lg p-6 flex justify-center items-center overflow-hidden bg-white border border-[var(--color-border)] shadow-md hover:border-foreground transition-colors duration-300"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex justify-center items-center p-6"
            >
              <Image
                src={IMAGES[currentIndex]}
                alt={`${PRODUCT.name} view ${currentIndex + 1}`}
                width={620}
                height={465}
                priority={currentIndex === 0}
                className="object-contain w-full h-full max-w-full max-h-full mx-auto pointer-events-none"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <button 
          onClick={nextImage}
          className="absolute right-0 md:right-4 z-20 p-2 md:p-3 bg-background hover:bg-foreground hover:text-background text-foreground rounded-full border border-foreground opacity-0 group-hover:opacity-100 transition-all duration-200"
          aria-label="Next image"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto max-w-full py-2 px-2 scrollbar-hide snap-x">
        {IMAGES.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            /* FIX 2: Fixed thumbnail buttons to use solid white backgrounds across both themes so the asset boxes blend seamlessly */
            className={cn(
              "relative flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-[6px] overflow-hidden border transition-all duration-200 snap-center p-0.5 bg-white",
              currentIndex === idx 
                ? "border-foreground opacity-100 scale-105 shadow-sm" 
                : "border-zinc-200/60 opacity-60 hover:opacity-100 hover:border-zinc-300"
            )}
          >
            <Image
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              fill
              sizes="(max-width: 768px) 64px, 80px"
              className="object-contain p-1"
            />
          </button>
        ))}
      </div>
    </div>
  );
}