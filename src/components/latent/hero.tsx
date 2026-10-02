"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { SplitCTAButton } from "./split-cta-button";
import Image from "next/image";

const cinematicEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero({ isReady = false }: { isReady?: boolean }) {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, 24]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 24]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-10 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto overflow-hidden"
    >
      <motion.div
        style={shouldReduceMotion ? {} : { opacity: heroOpacity, y: heroY }}
        className="relative w-full flex-1 flex flex-col justify-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.6, ease: cinematicEase, delay: 0.1 }}
          className="mb-8 font-mono text-[10px] text-ink-muted tracking-wider uppercase flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-clay" />
          2 slots open
        </motion.div>

        <div className="w-full relative z-20">
          <h1 className="font-serif text-[clamp(3rem,10vw,9rem)] font-light tracking-[-0.035em] text-ink leading-[0.9] uppercase select-none">
            <span className="block overflow-hidden py-0.5">
              <motion.span
                className="block will-change-transform"
                initial={shouldReduceMotion ? { opacity: 0 } : { y: "100%", opacity: 0 }}
                animate={isReady ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
                transition={{ duration: 0.7, ease: cinematicEase, delay: 0.1 }}
              >
                We make
              </motion.span>
            </span>
            <span className="block overflow-hidden py-0.5">
              <motion.span
                className="block will-change-transform"
                initial={shouldReduceMotion ? { opacity: 0 } : { y: "100%", opacity: 0 }}
                animate={isReady ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
                transition={{ duration: 0.7, ease: cinematicEase, delay: 0.2 }}
              >
                new things feel
              </motion.span>
            </span>
            <span className="block overflow-hidden py-0.5">
              <motion.span
                className="block italic font-normal tracking-[-0.02em] text-ink will-change-transform"
                initial={shouldReduceMotion ? { opacity: 0 } : { y: "100%", opacity: 0 }}
                animate={isReady ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
                transition={{ duration: 0.75, ease: cinematicEase, delay: 0.3 }}
              >
                inevitable.
              </motion.span>
            </span>
          </h1>
        </div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ delay: 0.4, duration: 0.6, ease: cinematicEase }}
          className="mt-12 sm:mt-16 max-w-[50ch] relative z-20 flex flex-col gap-8"
        >
          <p className="font-sans text-lg sm:text-xl text-ink-light font-light leading-[1.6]">
            A design and research laboratory for ideas that haven’t found their final form yet.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <SplitCTAButton label="Start a project" href="/#contact" size="hero" />
            <a href="/studio#method" className="font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-ink transition-colors underline underline-offset-4 decoration-paper-border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink py-1">
              Method →
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Art-directed image with parallax */}
      <motion.div
        style={shouldReduceMotion ? {} : { y: imageY }}
        className="absolute right-0 lg:right-16 top-1/4 w-[45vw] max-w-[500px] aspect-[3/4] opacity-70 md:opacity-100 mix-blend-multiply z-0 pointer-events-none hidden sm:block overflow-hidden rounded-sm"
      >
        <Image
          src="https://images.unsplash.com/photo-1544256718-3b6102d1d07c?auto=format&fit=crop&q=80&w=800"
          alt="Art directed studio"
          fill
          priority
          sizes="(max-width: 768px) 0vw, 50vw"
          className="object-cover grayscale contrast-125"
        />
      </motion.div>
    </section>
  );
}
