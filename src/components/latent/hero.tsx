"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { HandDrawnArrow } from "./naive-elements";
import { SplitCTAButton } from "./split-cta-button";
import { spatialEase } from "@/lib/motion/easings";

export function Hero({ isReady = true }: { isReady?: boolean }) {
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
      className="relative min-h-[88vh] lg:h-[92vh] flex flex-col justify-between pt-20 sm:pt-22 pb-6 sm:pb-8 px-6 sm:px-12 lg:px-20 max-w-[1600px] mx-auto overflow-hidden"
    >
      <motion.div
        style={shouldReduceMotion ? {} : { opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="w-full h-full flex flex-col justify-between flex-1 will-change-transform"
      >
        {/* Discreet Studio Coordinates & Index Tag */}
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-ink-muted border-b border-paper-border/60 pb-2.5 mb-4 sm:mb-5 shrink-0">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-ink" />
            <span>Vol. 01 // Digital Studio &bull; Research</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span>Design &bull; Systems &bull; Artifacts</span>
            <span>LATENT &bull; 2026</span>
          </div>
        </div>

        {/* Monumental Typography: Spatial Lift & Settle */}
        <div className="w-full my-auto flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: spatialEase, delay: 0.1 }}
          >
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[7.75rem] xl:text-[8.1rem] font-light tracking-tighter text-ink leading-[0.88] uppercase select-none">
              We make <br />
              new things <br />
              feel <br />
              <span className="italic font-normal tracking-tight">inevitable.</span>
            </h1>
          </motion.div>

          {/* Refined Lower Grid: Lifted 10% higher up */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ delay: 0.42, duration: 0.8, ease: spatialEase }}
            className="mt-6 sm:mt-7 pt-5 border-t border-paper-border/60 grid grid-cols-1 md:grid-cols-12 gap-6 items-end shrink-0"
          >
            <div className="md:col-span-7 flex items-start gap-4 text-ink-muted">
              <HandDrawnArrow
                direction="down-right"
                className="w-6 h-6 text-ink-muted shrink-0 mt-0.5"
              />
              <p className="font-sans text-xs sm:text-sm md:text-base text-ink font-light max-w-lg leading-relaxed">
                A design and technology studio for ideas that haven’t found their
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
                href="#method"
                className="font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-ink transition-colors underline underline-offset-4 decoration-paper-border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink"
              >
                Method →
              </a>
            </div>
          </motion.div>
        </div>

        {/* Hero Bottom Micro-Anchor */}
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-ink-muted pt-4 shrink-0">
          <div>[ 70% Conviction &bull; 0% Noise ]</div>
          <div className="flex items-center gap-1.5">
            <span>Scroll to explore</span>
            <span>↓</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
