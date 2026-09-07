"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { spatialEase } from "@/lib/motion/easings";

export interface ProcessStage {
  num: string;
  name: string;
  thesis: string;
  marginalia: string;
  footnote: string;
}

export const METHOD_STAGES: ProcessStage[] = [
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

export function ProcessStepper({ stages = METHOD_STAGES }: { stages?: ProcessStage[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative pl-6 sm:pl-10 space-y-12 sm:space-y-16">
      {/* Background Track Line */}
      <div className="absolute left-[11px] sm:left-[19px] top-4 bottom-4 w-[2px] bg-paper-border" />

      {/* Animated Filled SVG Line that draws itself as you scroll */}
      <motion.div
        style={{ height: lineHeight }}
        className="absolute left-[11px] sm:left-[19px] top-4 w-[2px] bg-ink origin-top"
      />

      {stages.map((stage, idx) => (
        <motion.div
          key={stage.num}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: spatialEase, delay: idx * 0.05 }}
          className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start group"
        >
          {/* Timeline Node Ring */}
          <div className="absolute -left-[30px] sm:-left-[46px] top-1.5 w-6 h-6 rounded-full bg-paper border-2 border-paper-border flex items-center justify-center group-hover:border-ink transition-colors duration-300">
            <div className="w-2 h-2 rounded-full bg-ink-muted group-hover:bg-ink transition-colors duration-300" />
          </div>

          {/* Number & Stage Name */}
          <div className="lg:col-span-4 flex items-baseline gap-3">
            <span className="font-mono text-xs text-ink-muted tracking-widest uppercase">
              {stage.num} //
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-light text-ink tracking-tight group-hover:italic transition-all duration-300">
              {stage.name}
            </h3>
          </div>

          {/* Thesis & Details */}
          <div className="lg:col-span-8 space-y-2">
            <p className="font-serif text-xl sm:text-2xl text-ink font-light leading-snug">
              {stage.thesis}
            </p>
            <div className="font-mono text-xs text-ink-muted pt-1">
              [ {stage.marginalia} ]
            </div>
            <div className="font-sans text-xs text-ink-light/80 italic pt-1 border-t border-dashed border-paper-border/60">
              &ldquo;{stage.footnote}&rdquo;
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ProcessStepper;
