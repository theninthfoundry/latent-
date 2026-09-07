"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { spatialEase } from "@/lib/motion/easings";

export function PinnedThesis() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Background subtle scale & depth
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 1.02]);

  // Progressive opacity & y-shifts for the three monumental statement lines
  const line1Opacity = useTransform(scrollYProgress, [0.05, 0.25], [0.25, 1]);
  const line1Y = useTransform(scrollYProgress, [0.05, 0.25], [20, 0]);

  const line2Opacity = useTransform(scrollYProgress, [0.25, 0.5], [0.2, 1]);
  const line2Y = useTransform(scrollYProgress, [0.25, 0.5], [30, 0]);
  const line2Scale = useTransform(scrollYProgress, [0.25, 0.55], [0.96, 1]);

  const line3Opacity = useTransform(scrollYProgress, [0.45, 0.7], [0.15, 1]);
  const line3Y = useTransform(scrollYProgress, [0.45, 0.7], [35, 0]);

  // Explanatory footnote and colophon reveal
  const noteOpacity = useTransform(scrollYProgress, [0.65, 0.88], [0, 1]);
  const noteY = useTransform(scrollYProgress, [0.65, 0.88], [24, 0]);

  // Astrolabe coordinate ring rotation
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  // Opposing coordinate ribbons
  const ribbonX1 = useTransform(scrollYProgress, [0, 1], ["0%", "-28%"]);
  const ribbonX2 = useTransform(scrollYProgress, [0, 1], ["-20%", "6%"]);

  return (
    <section ref={containerRef} className="relative h-[220vh] bg-paper">
      {/* Sticky Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-16 sm:py-20 px-6 sm:px-12 lg:px-20 max-w-[1500px] mx-auto overflow-hidden">
        {/* Subtle Architectural Coordinate Watermark Ring */}
        <motion.div
          style={shouldReduceMotion ? {} : { rotate: ringRotate, scale: bgScale }}
          className="absolute right-[-80px] sm:right-[-40px] top-1/2 -translate-y-1/2 w-[480px] sm:w-[620px] aspect-square pointer-events-none select-none opacity-[0.06] mix-blend-multiply z-0"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full stroke-ink fill-none" strokeWidth="0.5">
            <circle cx="100" cy="100" r="95" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="75" />
            <circle cx="100" cy="100" r="45" strokeDasharray="1 4" />
            <line x1="100" y1="0" x2="100" y2="200" strokeDasharray="2 2" />
            <line x1="0" y1="100" x2="200" y2="100" strokeDasharray="2 2" />
            <circle cx="100" cy="100" r="3" fill="currentColor" />
          </svg>
        </motion.div>

        {/* Section Index Header */}
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-ink-muted shrink-0 z-10 border-b border-paper-border/70 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-clay" />
            <span>§ 02 — Scope &amp; Ambition</span>
          </div>
          <span>The Thesis &bull; Pinned Slide</span>
        </div>

        {/* Monumental Kinetic Text Presentation */}
        <div className="my-auto max-w-5xl z-10 space-y-4 sm:space-y-6">
          {/* Line 01 */}
          <motion.div
            style={shouldReduceMotion ? {} : { opacity: line1Opacity, y: line1Y }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light text-ink leading-[1.04] tracking-tight"
          >
            Some ideas need a website.
          </motion.div>

          {/* Line 02 */}
          <motion.div
            style={shouldReduceMotion ? {} : { opacity: line2Opacity, y: line2Y, scale: line2Scale }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light text-ink leading-[1.04] tracking-tight origin-left"
          >
            Some need a{" "}
            <span className="italic font-normal underline decoration-accent-clay/60 underline-offset-8">
              world.
            </span>
          </motion.div>

          {/* Line 03 */}
          <motion.div
            style={shouldReduceMotion ? {} : { opacity: line3Opacity, y: line3Y }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-light text-ink-muted leading-[1.08] tracking-tight pt-2"
          >
            We work somewhere between the two.
          </motion.div>
        </div>

        {/* Bottom Pinned Footer & Opposing Ribbons */}
        <div className="shrink-0 z-10 space-y-6">
          {/* Explanatory Note with Progress Scrub */}
          <motion.div
            style={shouldReduceMotion ? {} : { opacity: noteOpacity, y: noteY }}
            className="pt-6 border-t border-paper-border/70 flex flex-col sm:flex-row sm:items-baseline justify-between gap-6"
          >
            <p className="font-sans text-sm sm:text-base text-ink-light font-light max-w-2xl leading-relaxed">
              Most digital projects stop at utility or decoration. We design the
              entire container: the visual language, the underlying system, the
              way it responds, and the cultural aura it projects.
            </p>

            <div className="font-mono text-xs text-ink-muted shrink-0 flex items-center gap-3">
              <span>[ Ref. Labs Manifesto &bull; p. 04 ]</span>
              <span className="w-1.5 h-1.5 rounded-full bg-ink animate-pulse" />
            </div>
          </motion.div>

          {/* Opposing Kinetic Ribbon Ticker */}
          <div className="overflow-hidden font-mono text-[9px] uppercase tracking-widest text-ink-muted/50 border-t border-paper-border/40 pt-2 select-none flex flex-col gap-1">
            <motion.div style={shouldReduceMotion ? {} : { x: ribbonX1 }} className="whitespace-nowrap">
              LATENT LABS // TOKYO (35.6762° N, 139.6503° E) &bull; SAN FRANCISCO (37.7749° N, 122.4194° W) &bull; ZURICH (47.3769° N, 8.5417° E) &bull; RESEARCH ROOM
            </motion.div>
            <motion.div style={shouldReduceMotion ? {} : { x: ribbonX2 }} className="whitespace-nowrap">
              AUTONOMOUS CREATIVE SYSTEMS &bull; LIVING SPATIAL CODE &bull; FRAME BUDGET ARCHITECTURE &bull; TACTILE DIGITAL MATTER
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PinnedThesis;
