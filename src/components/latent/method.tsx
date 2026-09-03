"use client";

import React from "react";
import { motion } from "framer-motion";
import { HandDrawnArrow } from "./naive-elements";
import { ParallaxLayer } from "@/components/motion/scroll-reveal";
import { spatialEase } from "@/lib/motion/easings";

const METHOD_STEPS = [
  {
    num: "01",
    name: "DISCOVER",
    thesis: "Find the thing worth making.",
    marginalia: "research / strategy / culture / product opportunity",
    footnote: "interrogate what is already true before writing a line",
  },
  {
    num: "02",
    name: "IMAGINE",
    thesis: "Give the idea a shape.",
    marginalia: "narratives / concepts / product worlds / brand physics",
    footnote: "if it cannot be sketched on a napkin, it cannot survive a sprint",
  },
  {
    num: "03",
    name: "DESIGN",
    thesis: "Make it feel inevitable.",
    marginalia: "interaction / visual systems / typography / sensory UX",
    footnote: "every detail must earn its presence or be stripped away",
  },
  {
    num: "04",
    name: "BUILD",
    thesis: "Turn the impossible into something real.",
    marginalia: "web applications / native software / platforms / runtimes",
    footnote: "code is not translation; code is the final material",
  },
  {
    num: "05",
    name: "INTELLIGENCE",
    thesis: "Give products a mind.",
    marginalia: "applied AI / autonomous agents / latent models / vision",
    footnote: "we don't replace judgment; we augment human imagination",
  },
  {
    num: "06",
    name: "SYSTEMS",
    thesis: "Make the beautiful thing survive reality.",
    marginalia: "distributed cloud / security / zero-latency / scale",
    footnote: "complexity belongs strictly backstage",
  },
  {
    num: "07",
    name: "EVOLVE",
    thesis: "Because finished is only the beginning.",
    marginalia: "behavioral telemetry / experimentation / continuous release",
    footnote: "launch is an inflection point, not a finish line",
  },
];

export function Method() {
  return (
    <section
      id="method"
      className="relative pt-16 sm:pt-20 pb-28 sm:pb-36 px-6 sm:px-12 lg:px-20 max-w-[1600px] mx-auto border-t border-paper-border overflow-hidden"
    >
      {/* Architectural Surface: Cropped Blue Painted Checker Wall with restrained Parallax */}
      <div className="absolute top-0 right-0 w-full md:w-[42%] h-full pointer-events-none select-none overflow-hidden opacity-[0.16] mix-blend-multiply z-0">
        <ParallaxLayer offset={22} direction="up" className="w-full h-full">
          <img
            src="/artifacts/blue-checker.png"
            alt=""
            className="w-full h-full object-cover object-left-top scale-110"
          />
        </ParallaxLayer>
        {/* Soft edge feathering into paper */}
        <div className="absolute inset-0 bg-gradient-to-r from-paper via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-paper via-transparent to-paper" />
      </div>

      {/* Editorial Spread Top Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 sm:mb-16 border-b border-paper-border pb-8 items-baseline relative z-10">
        <div className="md:col-span-2 font-mono text-xs uppercase tracking-widest text-ink-muted">
          Vol. 07 / Studio Folio
        </div>
        <div className="md:col-span-7">
          <h2 className="font-serif text-xs uppercase tracking-widest text-ink-muted mb-2">
            The Lifecycle of an Idea
          </h2>
          <div className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-ink">
            The Method.
          </div>
        </div>
        <div className="md:col-span-3 text-left md:text-right font-mono text-[11px] text-ink-muted">
          Continuous Architecture &bull; pp. 14–21
        </div>
      </div>

      {/* The Editorial Publication Spread */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">
        {/* Left Column: Numbered Stages */}
        <div className="lg:col-span-7 space-y-10 sm:space-y-14">
          {METHOD_STEPS.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: spatialEase, delay: idx * 0.04 }}
              className="grid grid-cols-12 gap-4 items-baseline border-b border-paper-border/60 pb-7 group cursor-default"
            >
              {/* Number */}
              <div className="col-span-2 font-mono text-sm sm:text-base text-ink-muted group-hover:text-ink font-medium tracking-tight transition-colors">
                {step.num}
              </div>

              {/* Title & Thesis */}
              <div className="col-span-10 space-y-1">
                <h3 className="font-serif text-2xl sm:text-4xl font-light text-ink tracking-tight group-hover:italic group-hover:translate-x-1 transition-all duration-300">
                  {step.name}
                </h3>
                <p className="font-sans text-sm sm:text-base text-ink-light font-light leading-relaxed">
                  {step.thesis}
                </p>
                <div className="lg:hidden pt-2 font-mono text-[11px] text-ink-muted">
                  {step.marginalia}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Editorial Marginalia, Footnotes & Naïve Moment */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-12 lg:pl-8 lg:border-l border-paper-border">
          {/* Marginalia Disciplines Stream */}
          <div className="space-y-8">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted block border-b border-paper-border pb-2">
              Cross-Disciplinary Substrate
            </span>

            <div className="space-y-6 font-mono text-xs text-ink-muted leading-relaxed">
              {METHOD_STEPS.map((step) => (
                <div key={step.num} className="flex items-baseline gap-3">
                  <span className="text-ink font-semibold">{step.num}</span>
                  <span className="text-ink-light">{step.marginalia}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Naive Sketch Reflection in Marginalia */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: spatialEase }}
            className="p-6 rounded-2xl bg-paper-card border border-paper-border relative shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
          >
            <div className="flex items-center gap-2 mb-2 text-ink-muted">
              <HandDrawnArrow direction="down-right" className="w-5 h-5" />
              <span className="font-hand text-xl text-ink">editorial rule:</span>
            </div>
            <p className="font-hand text-2xl text-ink leading-snug">
              &ldquo;We don&apos;t pitch seven distinct departments. We move a single
              idea across seven states of matter until it exists.&rdquo;
            </p>
            <span className="font-mono text-[10px] text-ink-muted uppercase tracking-widest mt-4 block">
              LATENT Studio Handbook / p. 09
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
