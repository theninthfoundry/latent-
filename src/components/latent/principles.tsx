"use client";

import React from "react";
import { Reveal } from "@/components/motion/reveal";

export const STUDIO_PRINCIPLES = [
  {
    num: "01",
    tag: "Texture",
    title: "Form follows friction.",
    text: "Not everything should be frictionless. The most meaningful digital artifacts command slow inspection, hold weight, and resist casual disposal.",
  },
  {
    num: "02",
    tag: "Materiality",
    title: "Code is the material.",
    text: "We do not hand off static mockups. Code is the physical marble, chisel, and kiln — responsive physics, frame budgets, and living typography.",
  },
  {
    num: "03",
    tag: "Longevity",
    title: "Cultural durability.",
    text: "We build systems designed to outlive framework cycles, quarterly trends, and the transient disposable interfaces of the modern web.",
  },
  {
    num: "04",
    tag: "Restraint",
    title: "Silence as design.",
    text: "An interface that holds its breath while you think is infinitely more polite and effective than one that constantly demands attention.",
  },
];

export function Principles() {
  return (
    <section id="principles" className="relative py-20 sm:py-28 border-t border-paper-border scroll-mt-24">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-paper-border pb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-1.5 block">
              § 01 — Core Axioms
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-ink">
              Studio Principles.
            </h2>
          </div>
          <p className="font-sans text-sm text-ink-muted max-w-md font-light leading-relaxed">
            The philosophical boundaries governing every product, code commit, and typographic layout we author.
          </p>
        </div>
      </Reveal>

      {/* 4-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {STUDIO_PRINCIPLES.map((principle, idx) => (
          <Reveal key={principle.num} delay={idx * 0.08}>
            <div className="h-full p-6 sm:p-7 rounded-2xl bg-paper-card border border-paper-border flex flex-col justify-between space-y-6 group hover:border-ink/40 transition-colors duration-300">
              <div className="space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted block">
                  Principle {principle.num} // {principle.tag}
                </span>
                <h3 className="font-serif text-2xl font-normal text-ink group-hover:italic transition-all">
                  {principle.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-ink-light font-light leading-relaxed">
                  {principle.text}
                </p>
              </div>
              <div className="pt-4 border-t border-paper-border/70 font-mono text-[10px] text-ink-muted uppercase tracking-widest">
                [ LATENT Labs Manifesto ]
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Principles;
