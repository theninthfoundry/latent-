"use client";

import React from "react";
import { ParallaxLayer } from "@/components/motion/scroll-reveal";

const DISCIPLINES = [
  { name: "Product Design", lead: "Spatial systems & tactile interfaces" },
  { name: "Creative Engineering", lead: "Next.js, WebGL & zero-latency code" },
  { name: "Applied Intelligence", lead: "Autonomous agents & latent semantic models" },
  { name: "Brand Worldbuilding", lead: "Typographic physics & narrative lore" },
  { name: "Systems Architecture", lead: "Distributed cloud, edge compute & security" },
  { name: "Research & Inquiry", lead: "Cultural archaeology & qualitative synthesis" },
];

const DIFFICULT_QUESTIONS = [
  "A founder with an idea that doesn’t fit into any existing software category.",
  "An established company whose digital presence no longer reflects its true scale or ambition.",
  "A technology team trying to make AI genuinely valuable rather than another superficial chatbot.",
  "A cultural institution or luxury maison ready to transform a catalog into an evocative digital world.",
  "A product that works technically but has failed to find its inevitable aesthetic and emotional form.",
];

const ENGAGEMENT_MODELS = [
  {
    phase: "01",
    timing: "At the beginning.",
    action: "We find the idea.",
    detail:
      "Opportunity discovery, product thesis, narrative architecture, and speculative prototyping before code.",
  },
  {
    phase: "02",
    timing: "In the middle.",
    action: "We build what doesn’t exist.",
    detail:
      "End-to-end design, full-stack software engineering, AI model integration, and launch-grade polish.",
  },
  {
    phase: "03",
    timing: "After launch.",
    action: "We evolve what exists.",
    detail:
      "Continuous interaction tuning, telemetry analysis, experimental features, and new capability layers.",
  },
];

export function Studio() {
  return (
    <section
      id="studio"
      className="relative pt-12 sm:pt-14 pb-14 sm:pb-16 px-6 sm:px-12 lg:px-20 max-w-[1500px] mx-auto border-t border-paper-border"
    >
      {/* Chapter 1: The Studio Constellation */}
      <div className="mb-12 sm:mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8 sm:mb-10 border-b border-paper-border pb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-1.5 block">
              § 05 // The Collective
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-ink">
              Small by design. <br />
              <span className="italic font-normal text-ink-muted">Deep by default.</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-ink-muted max-w-md font-light leading-relaxed">
            We deliberately remain a compact, senior studio. No account managers
            diluting decisions. You collaborate directly with the designers and
            engineers shaping your world.
          </p>
        </div>

        {/* Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DISCIPLINES.map((d, i) => (
            <div
              key={d.name}
              className="p-6 rounded-2xl bg-paper-card border border-paper-border"
            >
              <span className="font-mono text-xs text-ink-muted block mb-3">
                [ 0{i + 1} ]
              </span>
              <h3 className="font-serif text-xl font-light text-ink mb-1">
                {d.name}
              </h3>
              <p className="font-sans text-xs text-ink-muted font-light">
                {d.lead}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Chapter 2: Difficult Questions (Qualification) */}
      <div className="relative mb-12 sm:mb-14 pt-8 sm:pt-10 border-t border-paper-border overflow-hidden">
        {/* Halftone Stars Background Watermark with restrained parallax */}
        <ParallaxLayer offset={16} direction="up" className="absolute top-12 -right-16 w-80 h-80 pointer-events-none select-none opacity-[0.08] mix-blend-multiply overflow-hidden rotate-45 z-0">
          <img
            src="/artifacts/halftone-stars.png"
            alt=""
            className="w-full h-full object-contain scale-110"
          />
        </ParallaxLayer>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-1.5 block">
              § 06 // Fit
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-ink leading-tight">
              We like difficult questions.
            </h2>
            <p className="font-sans text-sm text-ink-muted font-light leading-relaxed mt-4">
              Our studio is built specifically for projects that resist formulaic
              templates and conventional agency processes.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {DIFFICULT_QUESTIONS.map((q, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-paper border border-paper-border flex items-baseline gap-4 hover:border-ink/40 transition-colors"
              >
                <span className="font-mono text-xs text-ink-muted shrink-0">
                  // {idx + 1}
                </span>
                <p className="font-serif text-lg sm:text-xl font-light text-ink leading-snug">
                  {q}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chapter 3: Where We Enter (Engagement Models) */}
      <div className="pt-8 sm:pt-10 border-t border-paper-border">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8 sm:mb-10 border-b border-paper-border pb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-1.5 block">
              § 07 // Engagement
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-ink">
              Where we enter.
            </h2>
          </div>
          <p className="font-sans text-sm text-ink-muted max-w-md font-light leading-relaxed">
            Flexibility without ambiguity. We partner across the lifecycle of an
            initiative.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ENGAGEMENT_MODELS.map((model) => (
            <div
              key={model.phase}
              className="p-8 rounded-2xl bg-paper-card border border-paper-border flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-ink-muted block mb-3">
                  Stage {model.phase}
                </span>
                <h3 className="font-serif text-2xl font-light text-ink mb-1">
                  {model.timing}
                </h3>
                <p className="font-sans text-sm font-medium text-ink-light mb-4">
                  {model.action}
                </p>
                <p className="font-sans text-xs text-ink-muted font-light leading-relaxed">
                  {model.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
