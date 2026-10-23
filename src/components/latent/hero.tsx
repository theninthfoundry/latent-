"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { SplitCTAButton } from "./split-cta-button";
import Image from "next/image";
import { TiltLayer } from "@/components/motion/tilt-layer";
import { InteractiveSticker } from "./interactive-sticker";

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
      className="relative flex flex-col pt-28 sm:pt-36 pb-20 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto overflow-hidden"
    >
      <motion.div
        style={shouldReduceMotion ? {} : { opacity: heroOpacity, y: heroY }}
        className="relative w-full flex-1 flex flex-col z-10"
      >
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
          animate={isReady || shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.6, ease: cinematicEase, delay: 0.1 }}
          className="mb-4 sm:mb-6 font-mono text-[10px] text-ink-muted tracking-widest uppercase flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-clay" />
          Independent Design &amp; Technology Studio
        </motion.div>

        <div className="w-full relative z-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 relative">
            <h1 className="font-serif text-[clamp(3rem,10vw,8.5rem)] font-light tracking-[-0.035em] text-ink leading-[0.9] uppercase select-none">
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  className="block will-change-transform"
                  initial={shouldReduceMotion ? { opacity: 1 } : { y: "100%", opacity: 0 }}
                  animate={isReady || shouldReduceMotion ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
                  transition={{ duration: 0.7, ease: cinematicEase, delay: 0.1 }}
                >
                  We make
                </motion.span>
              </span>
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  className="block will-change-transform"
                  initial={shouldReduceMotion ? { opacity: 1 } : { y: "100%", opacity: 0 }}
                  animate={isReady || shouldReduceMotion ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
                  transition={{ duration: 0.7, ease: cinematicEase, delay: 0.2 }}
                >
                  new things feel
                </motion.span>
              </span>
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  className="block italic font-normal tracking-[-0.02em] text-ink will-change-transform"
                  initial={shouldReduceMotion ? { opacity: 1 } : { y: "100%", opacity: 0 }}
                  animate={isReady || shouldReduceMotion ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
                  transition={{ duration: 0.75, ease: cinematicEase, delay: 0.3 }}
                >
                  inevitable.
                </motion.span>
              </span>
            </h1>

            {/* Monumental Ink Brutalist Star integrated directly into the typographic composition */}
            <div className="shrink-0 flex items-center justify-center lg:pb-2 pointer-events-auto">
              <InteractiveSticker
                id="star-sketch"
                size="custom"
                widthClass="w-52 sm:w-68 md:w-80 lg:w-[360px]"
                initialRotate={-8}
                noBackground={true}
                blendMode="multiply"
                showCaption={false}
                parallaxSpeed={0.25}
              />
            </div>
          </div>
        </div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          animate={isReady || shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ delay: 0.45, duration: 0.6, ease: cinematicEase }}
          className="mt-10 sm:mt-14 max-w-[56ch] relative z-20 flex flex-col gap-6"
        >
          <p className="font-sans text-base sm:text-lg text-ink-light font-light leading-[1.6]">
            A design and engineering lab. We build websites, brand worlds and AI systems, and we repair or take over the ones that broke.
          </p>

          <div className="font-mono text-[11px] text-ink-muted tracking-wider uppercase flex items-center gap-2">
            <span>Design</span>
            <span className="text-paper-border">&bull;</span>
            <span>Engineering</span>
            <span className="text-paper-border">&bull;</span>
            <span>AI Systems</span>
            <span className="text-paper-border">&bull;</span>
            <span>Strategy</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            <SplitCTAButton label="Start a project" href="/#contact" size="hero" />
            <a
              href="/#work"
              className="font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-ink transition-colors underline underline-offset-4 decoration-paper-border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink py-1"
            >
              Explore our work →
            </a>
          </div>

          <div className="pt-4 border-t border-paper-border/60 font-mono text-[10px] uppercase tracking-widest text-ink-muted flex items-center gap-3">
            <span className="text-atelier-indigo font-semibold">BUILD / REPAIR / EVOLVE</span>
            <span className="text-paper-border">&bull;</span>
            <span>A studio for what comes next.</span>
          </div>

          {/* Interactive "THIS IS NOT AI" Human Conviction Badge */}
          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <InteractiveSticker
              id="not-ai-badge"
              size="custom"
              widthClass="w-44 sm:w-56 md:w-68"
              initialRotate={-3}
              washiTape={false}
              noBackground={true}
              blendMode="multiply"
              showCaption={false}
              parallaxSpeed={0.2}
            />
            <div className="font-mono text-[10px] text-ink-muted leading-relaxed max-w-[28ch]">
              Human Conviction Mark &bull; Tactile zine artifact stamped into the studio archive
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Art-directed architectural studio specimen with contact-sheet registration */}
      <motion.div
        style={shouldReduceMotion ? {} : { y: imageY }}
        className="absolute right-0 lg:right-16 top-1/4 w-[42vw] max-w-[480px] aspect-[3/4] z-0 hidden sm:block select-none group pointer-events-auto"
      >
        <div className="relative w-full h-full p-3 bg-paper-card/70 border border-paper-border/80 rounded-lg shadow-sm overflow-hidden transition-all duration-500 hover:shadow-card hover:border-ink/30">
          {/* Technical Corner Registration Crosshairs */}
          <span className="absolute top-2 left-2 font-mono text-[9px] text-ink-muted/70 tracking-widest pointer-events-none">
            + 35°40'N
          </span>
          <span className="absolute top-2 right-2 font-mono text-[9px] text-ink-muted/70 tracking-widest pointer-events-none">
            139°46'E +
          </span>
          <span className="absolute bottom-7 left-2 font-mono text-[8px] text-ink-muted/60 tracking-wider uppercase pointer-events-none">
            ANALOG // 400 ISO
          </span>
          <span className="absolute bottom-7 right-2 font-mono text-[8px] text-ink-muted/60 tracking-wider uppercase pointer-events-none">
            REF № 01
          </span>

          {/* Main Photo Frame */}
          <div className="relative w-full h-[calc(100%-28px)] overflow-hidden rounded-sm mix-blend-multiply">
            <TiltLayer className="absolute inset-0" max={6}>
              <Image
                src="https://images.unsplash.com/photo-1544256718-3b6102d1d07c?auto=format&fit=crop&q=80&w=800"
                alt="Art directed studio workspace"
                fill
                priority
                sizes="(max-width: 768px) 0vw, 45vw"
                className="object-cover grayscale contrast-125 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
              />
              
              {/* Translucent Drafting Tracing Paper Overlay revealed on hover */}
              <div className="absolute inset-0 bg-[#F9F8F4]/30 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex flex-col justify-between p-4 font-mono text-[9px] text-ink">
                <div className="flex justify-between border-b border-ink/20 pb-1">
                  <span>ATELIER FLOOR PLAN</span>
                  <span className="text-accent-clay">SCALE 1:50</span>
                </div>
                <div className="flex justify-between border-t border-ink/20 pt-1 text-[8px] text-ink-muted">
                  <span>TIMBER / CLOTH / LIGHT</span>
                  <span>LATENT PHYSICAL LAB</span>
                </div>
              </div>
            </TiltLayer>
          </div>

          {/* Bottom Contact Sheet Caption */}
          <div className="h-7 mt-1.5 flex items-center justify-between font-mono text-[9px] text-ink-muted uppercase tracking-wider px-1">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-clay animate-pulse" />
              <span>Studio Physical Workspace</span>
            </span>
            <span className="text-atelier-indigo font-medium">Plate 01</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
