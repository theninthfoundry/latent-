"use client";

import React from "react";
import { HandDrawnArrow, ImperfectCircle, WashiTape } from "./naive-elements";
import { ParallaxLayer } from "@/components/motion/scroll-reveal";

interface Experiment {
  code: string;
  question: string;
  status: "PROTOTYPE" | "IN PROGRESS" | "43% COMPLETE" | "ARCHIVED" | "ONGOING" | "FAILED";
  hypothesis: string;
  finding: string;
  naiveObservation: string;
}

const EXPERIMENTS: Experiment[] = [
  {
    code: "EXP 01",
    question: "Can a website behave like a place?",
    status: "43% COMPLETE",
    hypothesis:
      "If we replace standard vertical document scrolling with spatial proximity acoustics and lighting states, does navigation feel like walking into an architectural room?",
    finding:
      "Users lingered 3.4× longer. But desktop mice require physical inertia simulation to avoid disorientation.",
    naiveObservation: "acoustics worked better than 3D meshes. keep digging.",
  },
  {
    code: "EXP 02",
    question: "What happens when an AI remembers?",
    status: "IN PROGRESS",
    hypothesis:
      "Rather than clearing context windows, can an interface maintain a lifelong topological memory graph that decays unimportant facts naturally like human sleep?",
    finding:
      "Decay curves modeled on human forgetting curves created an eerie sense of intimacy and intellectual rapport.",
    naiveObservation: "it started remembering conversations from 4 months ago. wow.",
  },
  {
    code: "EXP 03",
    question: "Interfaces without interfaces.",
    status: "PROTOTYPE",
    hypothesis:
      "Can we build a data analysis suite where there is zero UI visible until your cursor hesitates over a latent insight?",
    finding:
      "Users were confused for the first 60 seconds, then refused to return to toolbars and sidebars.",
    naiveObservation: "we spent three weeks deleting buttons. worth it.",
  },
  {
    code: "EXP 04",
    question: "Can software have atmosphere?",
    status: "ONGOING",
    hypothesis:
      "Can ambient environmental conditions (local cloud cover, twilight, atmospheric pressure) subtly modulate UI typography weight and spacing?",
    finding:
      "Subtle shifts of 0.5px line-height aligned with dusk induced an immediate physiological calming effect in users.",
    naiveObservation: "it breathes with the room. very strange and very good.",
  },
  {
    code: "EXP 05",
    question: "Designing for machines and humans simultaneously.",
    status: "ARCHIVED",
    hypothesis:
      "What if every HTML DOM element carried both human typography and structured semantic vector graphs for autonomous agent scrapers?",
    finding:
      "Too heavy for mobile networks in 2024; archived until web-native edge vector serialization matures.",
    naiveObservation: "failed. that was the useful part.",
  },
  {
    code: "EXP 06",
    question: "Can an interface listen before you touch?",
    status: "PROTOTYPE",
    hypothesis:
      "Can micro-hesitation velocity vectors predict intent before physical click input, pre-rendering downstream states with zero perceived latency?",
    finding:
      "Perceived latency dropped to 0ms. But mouse acceleration curves must be individualized to prevent false triggering.",
    naiveObservation: "felt like telepathy when we dialed the threshold in.",
  },
];

export function Lab() {
  return (
    <section
      id="lab"
      className="relative pt-12 sm:pt-14 pb-14 sm:pb-16 px-6 sm:px-12 lg:px-20 max-w-[1600px] mx-auto border-t border-paper-border overflow-hidden"
    >
      {/* Studio Lab Background Watermark: Stippled Atomic Schematic Coordinate Orbit with restrained parallax */}
      <ParallaxLayer offset={18} direction="up" className="absolute -top-12 -left-24 w-[520px] h-[520px] pointer-events-none select-none opacity-[0.07] mix-blend-multiply rotate-12 overflow-hidden z-0">
        <img
          src="/artifacts/atomic-diagram.png"
          alt=""
          className="w-full h-full object-contain scale-110"
        />
      </ParallaxLayer>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8 sm:mb-10 border-b border-paper-border pb-6 relative z-10">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-1.5 block">
            § 01 // Research Room
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-ink">
            The Lab.
          </h2>
        </div>

        <p className="font-sans text-sm text-ink-muted max-w-md font-light leading-relaxed">
          Where unfinished ideas are tested without commercial pressure. If
          everything we try works, we aren’t asking difficult enough questions.
        </p>
      </div>

      {/* Naïve Diagram Signature Banner (The tension between high tech and primitive human sketch) */}
      <div className="mb-8 sm:mb-10 p-6 sm:p-10 rounded-3xl bg-paper-card border border-paper-border relative overflow-hidden">
        {/* Subtle Blue Painted Checker Texture Wash on Right Side */}
        <div className="absolute top-0 right-0 w-44 h-full pointer-events-none select-none opacity-[0.12] mix-blend-multiply overflow-hidden">
          <img
            src="/artifacts/blue-checker.png"
            alt=""
            className="w-full h-full object-cover scale-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-paper-card via-transparent to-transparent" />
        </div>

        <WashiTape className="-top-2 left-12" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted block mb-3">
              The Reality of Making // Studio Axiom
            </span>
            <div className="flex flex-wrap items-baseline gap-3 sm:gap-6 font-mono text-xs sm:text-sm uppercase tracking-widest">
              <span className="text-ink font-semibold">IDEA</span>
              <span className="text-ink-muted">&rarr;</span>
              <span className="font-hand text-2xl text-ink lowercase tracking-normal">
                ????
              </span>
              <span className="text-ink-muted">&rarr;</span>
              <span className="text-ink font-semibold">PROTOTYPE</span>
              <span className="text-ink-muted">&rarr;</span>
              <ImperfectCircle className="font-hand text-2xl text-ink lowercase tracking-normal">
                oh.
              </ImperfectCircle>
              <span className="text-ink-muted">&rarr;</span>
              <span className="text-ink font-semibold">SYSTEM</span>
            </div>
          </div>

          <div className="font-hand text-xl sm:text-2xl text-ink max-w-xs leading-tight">
            &ldquo;That <span className="underline italic">oh.</span> is more
            interesting than another polished agency paragraph.&rdquo;
          </div>
        </div>
      </div>

      {/* Experiment Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EXPERIMENTS.map((exp, idx) => (
          <div
            key={exp.code}
            className="group relative rounded-2xl border border-paper-border bg-paper p-7 flex flex-col justify-between transition-all hover:border-ink/40 hover:bg-paper-card"
          >
            <div>
              {/* Header with status tag */}
              <div className="flex items-center justify-between font-mono text-xs mb-6 pb-3 border-b border-paper-border/70">
                <span className="text-ink-muted">{exp.code}</span>
                <span
                  className={`px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wider font-mono font-medium ${
                    exp.status === "FAILED"
                      ? "bg-red-50 text-red-700 border border-red-200"
                      : exp.status === "PROTOTYPE"
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : "bg-paper-subtle text-ink-light border border-paper-border"
                  }`}
                >
                  {exp.status}
                </span>
              </div>

              {/* Experiment Core Question */}
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-ink tracking-tight mb-4 leading-snug">
                {exp.question}
              </h3>

              {/* Hypothesis & Finding */}
              <div className="space-y-3 font-sans text-xs text-ink-light font-light leading-relaxed">
                <p>
                  <strong className="font-mono text-[10px] uppercase tracking-wider text-ink-muted block mb-0.5">
                    Hypothesis:
                  </strong>
                  {exp.hypothesis}
                </p>
                <p className="pt-2 border-t border-paper-border/60">
                  <strong className="font-mono text-[10px] uppercase tracking-wider text-ink-muted block mb-0.5">
                    Observation:
                  </strong>
                  {exp.finding}
                </p>
              </div>
            </div>

            {/* Naïve Handwritten Studio Observation (3% human touch) */}
            <div className="mt-6 pt-4 border-t border-dashed border-paper-border flex items-baseline gap-2">
              <span className="font-hand text-xl sm:text-2xl text-ink leading-snug">
                ↘ {exp.naiveObservation}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
