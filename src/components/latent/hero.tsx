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
      className="relative min-h-[88vh] lg:min-h-[90vh] flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-10 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto overflow-hidden"
    >
      <motion.div
        style={shouldReduceMotion ? {} : { opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="w-full h-full flex flex-col justify-between flex-1 will-change-transform"
      >
        {/* Discreet Studio Coordinates & Index Tag: Slides down softly */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-ink-muted border-b border-paper-border pb-3 mb-6 sm:mb-8 shrink-0"
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-atelier-indigo" />
            <span>§ 01 // Digital Atelier &bull; India &bull; 2026</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-ink-muted">
            <span>Systems &bull; Botany &bull; Digital Matter</span>
            <span>LATENT &bull; 17°23&apos; N, 78°29&apos; E</span>
          </div>
        </motion.div>

        {/* Monumental Typography: Line-by-line masked spatial rise */}
        <div className="w-full my-auto flex-1 flex flex-col justify-center py-6 sm:py-10">
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[7.25rem] xl:text-[7.75rem] font-light tracking-[-0.035em] text-ink leading-[0.92] sm:leading-[0.9] uppercase select-none">
            {/* Line 01 */}
            <span className="block overflow-hidden py-0.5">
              <motion.span
                className="block will-change-transform"
                initial={shouldReduceMotion ? { opacity: 0 } : { y: "100%", opacity: 0 }}
                animate={isReady ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
                transition={{ duration: 0.7, ease: cinematicEase, delay: 0.08 }}
              >
                We make
              </motion.span>
            </span>

            {/* Line 02 */}
            <span className="block overflow-hidden py-0.5">
              <motion.span
                className="block will-change-transform"
                initial={shouldReduceMotion ? { opacity: 0 } : { y: "100%", opacity: 0 }}
                animate={isReady ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
                transition={{ duration: 0.7, ease: cinematicEase, delay: 0.18 }}
              >
                new things
              </motion.span>
            </span>

            {/* Line 03 */}
            <span className="block overflow-hidden py-0.5">
              <motion.span
                className="block will-change-transform"
                initial={shouldReduceMotion ? { opacity: 0 } : { y: "100%", opacity: 0 }}
                animate={isReady ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
                transition={{ duration: 0.7, ease: cinematicEase, delay: 0.28 }}
              >
                feel
              </motion.span>
            </span>

            {/* Line 04: The italicized editorial anchor */}
            <span className="block overflow-hidden py-0.5">
              <motion.span
                className="block italic font-normal tracking-[-0.02em] text-ink will-change-transform"
                initial={shouldReduceMotion ? { opacity: 0 } : { y: "100%", opacity: 0 }}
                animate={isReady ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
                transition={{ duration: 0.75, ease: cinematicEase, delay: 0.38 }}
              >
                inevitable.
              </motion.span>
            </span>
          </h1>

          {/* Refined Lower Grid: Emerges in rhythm right after the headline settles */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ delay: 0.5, duration: 0.6, ease: cinematicEase }}
            className="mt-8 sm:mt-10 pt-6 border-t border-paper-border grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-end shrink-0"
          >
            <div className="md:col-span-7 flex items-start gap-4 text-ink-muted">
              <HandDrawnArrow
                direction="down-right"
                className="w-5 h-5 text-accent-clay shrink-0 mt-1 opacity-90"
              />
              <div className="space-y-2">
                <p className="font-sans text-sm sm:text-base text-ink-light font-light max-w-[65ch] leading-[1.6]">
                  A design and research laboratory for ideas that haven’t found their{" "}
                  <span className="font-serif italic text-accent-clay font-normal">final form</span> yet.
                  We find what is{" "}
                  <span className="font-serif italic text-atelier-indigo font-normal underline decoration-paper-border underline-offset-4">
                    latent
                  </span>{" "}
                  and turn it into something real.
                </p>
                <div className="font-hand text-base sm:text-lg text-accent-clay flex items-center gap-1.5 pt-0.5">
                  <span>← No generic templates. We build from first principles.</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col items-start md:items-end gap-2.5">
              <div className="flex items-center gap-5">
                <SplitCTAButton
                  label="Start a project"
                  href="#contact"
                  size="hero"
                />
                <a
                  href="/studio#method"
                  className="font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-ink transition-colors underline underline-offset-4 decoration-paper-border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink py-1"
                >
                  Method →
                </a>
              </div>
              <span className="font-mono text-[10px] text-atelier-brass tracking-wider uppercase">
                ✦ 2 slots open for 2026 commissions
              </span>
            </div>
          </motion.div>
        </div>

        {/* Hero Bottom Micro-Anchor: Fades in quietly as final note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isReady ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, ease: cinematicEase, delay: 0.65 }}
          className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-ink-muted pt-4 border-t border-paper-border/60 shrink-0"
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
