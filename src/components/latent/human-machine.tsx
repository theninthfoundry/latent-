"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ParallaxLayer } from "@/components/motion/scroll-reveal";

const HUMAN_FACULTIES = [
  { name: "Taste", desc: "Intuitive aesthetic discernment" },
  { name: "Curiosity", desc: "Asking the unprompted question" },
  { name: "Story", desc: "Mythos, meaning, and cultural resonance" },
  { name: "Judgement", desc: "Knowing what to omit" },
  { name: "Empathy", desc: "Understanding the human ache" },
  { name: "Culture", desc: "Historical context and living zeitgeist" },
];

const MACHINE_FACULTIES = [
  { name: "Generation", desc: "Combinatorial synthesis at scale" },
  { name: "Prediction", desc: "Latent trajectory forecasting" },
  { name: "Memory", desc: "Lossless persistent episodic graph" },
  { name: "Computation", desc: "Hyper-dimensional tensor calculus" },
  { name: "Automation", desc: "Zero-latency continuous execution" },
  { name: "Scale", desc: "Planetary concurrency across nodes" },
];

interface Synthesis {
  title: string;
  verdict: string;
  manifesto: string;
}

const SYNTHESIS_MAP: Record<string, Synthesis> = {
  "Taste+Generation": {
    title: "Art Direction",
    verdict: "High-order sensory choreography without algorithmic sludge.",
    manifesto:
      "When human taste directs generative capability, machine output ceases to be statistical sludge and becomes deliberate art direction.",
  },
  "Curiosity+Prediction": {
    title: "Discovery Engine",
    verdict: "Surfacing hidden patterns beyond algorithmic feedback loops.",
    manifesto:
      "Predictive models shouldn't pigeonhole users into echo chambers. Guided by curiosity, they reveal uncharted intellectual frontiers.",
  },
  "Story+Memory": {
    title: "Personalised World",
    verdict: "Living digital environments that evolve with the human spirit.",
    manifesto:
      "A platform with genuine memory doesn't just remember cookie IDs; it preserves the narrative continuum of a user's life.",
  },
  "Judgement+Computation": {
    title: "Decision System",
    verdict: "Precision intelligence where human responsibility remains absolute.",
    manifesto:
      "We harness computational power to eliminate cognitive fatigue, while anchoring moral and strategic weight in human discernment.",
  },
  "Empathy+Automation": {
    title: "Adaptive Experience",
    verdict: "Interfaces that respond with dignity, silence, and gentleness.",
    manifesto:
      "Automation without empathy creates bureaucratic nightmare interfaces. Infused with empathy, technology becomes invisible care.",
  },
  "Culture+Scale": {
    title: "Global Vernacular",
    verdict: "Scalable architecture attuned to micro-cultural nuances.",
    manifesto:
      "Global software rarely honors regional subtleties. We build systems capable of infinite scale while respecting local texture.",
  },
};

export function HumanMachine() {
  const [selectedHuman, setSelectedHuman] = useState("Taste");
  const [selectedMachine, setSelectedMachine] = useState("Generation");

  const pairKey = `${selectedHuman}+${selectedMachine}`;
  const currentSynthesis =
    SYNTHESIS_MAP[pairKey] || {
      title: `${selectedHuman} × ${selectedMachine}`,
      verdict: "Synthesizing human intent with machine scale.",
      manifesto: `By pairing ${selectedHuman.toLowerCase()} with ${selectedMachine.toLowerCase()}, we expand human reach while preventing technology from drifting into sterile automation.`,
    };

  return (
    <section className="relative pt-12 sm:pt-14 pb-14 sm:pb-16 px-6 sm:px-12 lg:px-20 max-w-[1500px] mx-auto border-t border-paper-border overflow-hidden">
      {/* Monumental Atomic / Flower Halftone Diagram: Noticeable, expansive, living studio synthesis schema */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-10 sm:-right-16 lg:right-[-30px] xl:right-6 w-[680px] h-[680px] sm:w-[820px] sm:h-[820px] lg:w-[940px] lg:h-[940px] pointer-events-none select-none mix-blend-multiply z-0 flex items-center justify-center">
        <motion.div
          key={pairKey}
          initial={{ scale: 0.94 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full relative flex items-center justify-center"
        >
          {/* Continuous graceful rotation */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 32, // Silky, clearly noticeable rotation
            }}
            className="w-full h-full relative"
          >
            {/* Main Atomic Schematic Artwork with organic pulse and crisp opacity */}
            <motion.img
              src="/artifacts/atomic-diagram.png"
              alt=""
              animate={{
                opacity: [0.24, 0.32, 0.24],
                scale: [1, 1.04, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8 sm:mb-10 border-b border-paper-border pb-6 relative z-10">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-1.5 block">
            06 // Synthesis
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-ink">
            Human × Machine.
          </h2>
        </div>
        <p className="font-serif italic text-base sm:text-lg text-ink-light max-w-md font-normal leading-relaxed">
          &ldquo;We don’t build technology to replace judgement. We build it to
          extend what people can imagine.&rdquo;
        </p>
      </div>

      {/* Interactive Matrix Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Human Column */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-paper-border">
            <span className="font-mono text-xs uppercase tracking-widest text-ink font-semibold">
              Human Faculty
            </span>
            <span className="font-mono text-[10px] text-ink-muted">
              Select 01
            </span>
          </div>

          <div className="space-y-2">
            {HUMAN_FACULTIES.map((h) => {
              const isSelected = selectedHuman === h.name;
              return (
                <button
                  key={h.name}
                  onClick={() => setSelectedHuman(h.name)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-150 flex items-center justify-between ${
                    isSelected
                      ? "bg-ink text-paper border-ink shadow-sm"
                      : "bg-paper-card text-ink border-paper-border hover:border-ink/40"
                  }`}
                >
                  <span className="font-serif text-base">{h.name}</span>
                  <span
                    className={`font-mono text-[10px] ${
                      isSelected ? "text-paper/60" : "text-ink-muted"
                    }`}
                  >
                    {h.desc}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Machine Column */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-paper-border">
            <span className="font-mono text-xs uppercase tracking-widest text-ink font-semibold">
              Machine Faculty
            </span>
            <span className="font-mono text-[10px] text-ink-muted">
              Select 02
            </span>
          </div>

          <div className="space-y-2">
            {MACHINE_FACULTIES.map((m) => {
              const isSelected = selectedMachine === m.name;
              return (
                <button
                  key={m.name}
                  onClick={() => setSelectedMachine(m.name)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-150 flex items-center justify-between ${
                    isSelected
                      ? "bg-ink text-paper border-ink shadow-sm"
                      : "bg-paper-card text-ink border-paper-border hover:border-ink/40"
                  }`}
                >
                  <span className="font-serif text-base">{m.name}</span>
                  <span
                    className={`font-mono text-[10px] ${
                      isSelected ? "text-paper/60" : "text-ink-muted"
                    }`}
                  >
                    {m.desc}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Output Synthesis Card */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 p-8 rounded-3xl bg-paper-subtle border border-paper-border">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted block mb-3">
              Active Synthesis
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={pairKey}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-baseline gap-2 font-mono text-xs text-ink-muted">
                  <span>{selectedHuman}</span>
                  <span>+</span>
                  <span>{selectedMachine}</span>
                  <span>=</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-ink font-light tracking-tight">
                  {currentSynthesis.title}
                </h3>

                <p className="font-sans text-sm font-medium text-ink leading-snug">
                  {currentSynthesis.verdict}
                </p>

                <p className="font-sans text-xs text-ink-light font-light leading-relaxed pt-3 border-t border-paper-border">
                  {currentSynthesis.manifesto}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
