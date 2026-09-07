"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { HandDrawnArrow } from "./naive-elements";
import { SplitCTAButton } from "./split-cta-button";

// Bespoke Apple-grade spatial easing curve: immediate impulse with liquid deceleration
const cinematicEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero({ isReady = false }: { isReady?: boolean }) {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Continuous scroll-linked spatial transition into Thesis
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.985]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, 24]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[88vh] lg:h-[92vh] flex flex-col justify-between pt-20 sm:pt-22 pb-6 sm:pb-8 px-6 sm:px-12 lg:px-20 max-w-[1600px] mx-auto overflow-hidden [perspective:1000px]"
    >
      <motion.div
        style={shouldReduceMotion ? {} : { opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="w-full h-full flex flex-col justify-between flex-1 will-change-transform"
      >
        {/* Discreet Studio Coordinates & Index Tag: Slides down softly */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.85, ease: cinematicEase, delay: 0.55 }}
          className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-ink-muted border-b border-paper-border/60 pb-2.5 mb-4 sm:mb-5 shrink-0"
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-ink animate-pulse" />
            <span>§ 01 // Digital Laboratory &bull; Research</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span>Design &bull; Systems &bull; Artifacts</span>
            <span>LATENT LABS &bull; 2026</span>
          </div>
        </motion.div>

        {/* Monumental Typography: Line-by-line masked spatial rise */}
        <div className="w-full my-auto flex-1 flex flex-col justify-center">
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[7.75rem] xl:text-[8.1rem] font-light tracking-tighter text-ink leading-[0.88] uppercase select-none [perspective:1000px]">
            {/* Line 01 */}
            <span className="block overflow-hidden py-1">
              <motion.span
                className="block will-change-transform"
                initial={shouldReduceMotion ? { opacity: 0 } : { y: "115%", opacity: 0, rotateX: 14 }}
                animate={isReady ? { y: "0%", opacity: 1, rotateX: 0 } : { y: "115%", opacity: 0, rotateX: 14 }}
                transition={{ duration: 1.05, ease: cinematicEase, delay: 0.08 }}
              >
                We make
              </motion.span>
            </span>

            {/* Line 02 */}
            <span className="block overflow-hidden py-1">
              <motion.span
                className="block will-change-transform"
                initial={shouldReduceMotion ? { opacity: 0 } : { y: "115%", opacity: 0, rotateX: 14 }}
                animate={isReady ? { y: "0%", opacity: 1, rotateX: 0 } : { y: "115%", opacity: 0, rotateX: 14 }}
                transition={{ duration: 1.05, ease: cinematicEase, delay: 0.22 }}
              >
                new things
              </motion.span>
            </span>

            {/* Line 03 */}
            <span className="block overflow-hidden py-1">
              <motion.span
                className="block will-change-transform"
                initial={shouldReduceMotion ? { opacity: 0 } : { y: "115%", opacity: 0, rotateX: 14 }}
                animate={isReady ? { y: "0%", opacity: 1, rotateX: 0 } : { y: "115%", opacity: 0, rotateX: 14 }}
                transition={{ duration: 1.05, ease: cinematicEase, delay: 0.36 }}
              >
                feel
              </motion.span>
            </span>

            {/* Line 04: The italicized editorial anchor */}
            <span className="block overflow-hidden py-1">
              <motion.span
                className="block italic font-normal tracking-tight will-change-transform"
                initial={shouldReduceMotion ? { opacity: 0 } : { y: "115%", opacity: 0, rotateX: 14 }}
                animate={isReady ? { y: "0%", opacity: 1, rotateX: 0 } : { y: "115%", opacity: 0, rotateX: 14 }}
                transition={{ duration: 1.15, ease: cinematicEase, delay: 0.50 }}
              >
                inevitable.
              </motion.span>
            </span>
          </h1>

          {/* Refined Lower Grid: Emerges in rhythm right after the headline settles */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ delay: 0.68, duration: 0.9, ease: cinematicEase }}
            className="mt-6 sm:mt-7 pt-5 border-t border-paper-border/60 grid grid-cols-1 md:grid-cols-12 gap-6 items-end shrink-0"
          >
            <div className="md:col-span-7 flex items-start gap-4 text-ink-muted">
              <HandDrawnArrow
                direction="down-right"
                className="w-6 h-6 text-ink-muted shrink-0 mt-0.5"
              />
              <p className="font-sans text-xs sm:text-sm md:text-base text-ink font-light max-w-lg leading-relaxed">
                A design and research laboratory for ideas that haven’t found their
                final form yet. We find what is latent and turn it into something real.
              </p>
            </div>

            <div className="md:col-span-5 flex items-center md:justify-end gap-5">
              <SplitCTAButton
                label="Start a project"
                href="#contact"
                size="hero"
              />
              <a
                href="/studio#method"
                className="font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-ink transition-colors underline underline-offset-4 decoration-paper-border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink"
              >
                Method →
              </a>
            </div>
          </motion.div>
        </div>

        {/* Hero Bottom Micro-Anchor: Fades in quietly as final note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isReady ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: cinematicEase, delay: 0.88 }}
          className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-ink-muted pt-4 shrink-0"
        >
          <div>[ 70% Conviction &bull; 0% Noise ]</div>
          <div className="flex items-center gap-1.5">
            <span>Scroll to explore</span>
            <span>↓</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
