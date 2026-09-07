"use client";

import React from "react";
import { ParallaxLayer } from "@/components/motion/scroll-reveal";
import { HandDrawnArrow } from "./naive-elements";
import { ProcessStepper } from "./process-stepper";
import { Reveal } from "@/components/motion/reveal";

export function MethodStudio() {
  return (
    <section
      id="method"
      className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20 max-w-[1600px] mx-auto border-t border-paper-border overflow-hidden"
    >
      {/* Background Painted Texture Surface */}
      <div className="absolute top-0 right-0 w-full md:w-[42%] h-full pointer-events-none select-none overflow-hidden opacity-[0.12] mix-blend-multiply z-0">
        <ParallaxLayer offset={22} direction="up" className="w-full h-full">
          <img
            src="/artifacts/blue-checker.png"
            alt=""
            className="w-full h-full object-cover object-left-top scale-110"
          />
        </ParallaxLayer>
        <div className="absolute inset-0 bg-gradient-to-r from-paper via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-paper via-transparent to-paper" />
      </div>

      {/* Editorial Spread Top Header */}
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-14 sm:mb-20 border-b border-paper-border pb-6 items-baseline relative z-10">
          <div className="md:col-span-2 font-mono text-xs uppercase tracking-widest text-ink-muted">
            § 02 / Studio Folio
          </div>
          <div className="md:col-span-7">
            <h2 className="font-serif text-xs uppercase tracking-widest text-ink-muted mb-1.5">
              The Lifecycle of an Idea
            </h2>
            <div className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-ink">
              The Method.
            </div>
          </div>
          <div className="md:col-span-3 text-left md:text-right font-mono text-[11px] text-ink-muted">
            Continuous Architecture &bull; 7 States of Matter
          </div>
        </div>
      </Reveal>

      {/* Main Grid: Process Stepper on Left, Substrate & Reflections on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">
        {/* Left Column: Animated Process Stepper */}
        <div className="lg:col-span-8">
          <ProcessStepper />
        </div>

        {/* Right Column: Studio Architecture & Naïve Reflection */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-8 lg:pl-8 lg:border-l border-paper-border">
          {/* Active Spiral Execution Note */}
          <div className="p-6 rounded-2xl bg-paper-card border border-paper-border font-mono text-xs space-y-3 shadow-sm">
            <div className="flex justify-between items-center text-ink-muted text-[10px] uppercase tracking-wider pb-2 border-b border-paper-border">
              <span>Pipeline Architecture</span>
              <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active Spiral
              </span>
            </div>
            <p className="font-sans text-xs text-ink-light font-light leading-relaxed">
              Every phase executes concurrently in tight 2-week continuous delivery cycles. Design, code, and intelligence evolve in unison rather than sequential department handoffs.
            </p>
          </div>

          {/* Naïve Handwritten Reflection */}
          <div className="p-6 rounded-2xl bg-paper-card border border-paper-border relative shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-3">
            <div className="flex items-center gap-2 text-ink-muted">
              <HandDrawnArrow direction="down-right" className="w-5 h-5" />
              <span className="font-hand text-xl text-ink">editorial rule:</span>
            </div>
            <p className="font-hand text-2xl text-ink leading-snug">
              &ldquo;We don&apos;t pitch seven distinct departments. We move a single
              idea across seven states of matter until it exists.&rdquo;
            </p>
            <span className="font-mono text-[10px] text-ink-muted uppercase tracking-widest block pt-2 border-t border-paper-border/60">
              LATENT Labs Handbook &bull; p. 09
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MethodStudio;
