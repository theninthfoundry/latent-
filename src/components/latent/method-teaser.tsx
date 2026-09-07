"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const TEASER_STAGES = [
  { num: "01", name: "Discover" },
  { num: "02", name: "Imagine" },
  { num: "03", name: "Design" },
  { num: "04", name: "Build" },
  { num: "05", name: "Intelligence" },
  { num: "06", name: "Systems" },
  { num: "07", name: "Evolve" },
];

export function MethodTeaser() {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20 max-w-[1600px] mx-auto border-t border-paper-border">
      {/* Editorial Header */}
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-1.5 block">
              § 03 — The Lifecycle
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-ink">
              The Method.
            </h2>
          </div>
          <Link
            href="/studio#method"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-ink transition-colors"
          >
            <span>See our process</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>

      {/* Compact 01 -> 07 Number Strip */}
      <Reveal delay={0.1}>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-px bg-paper-border border border-paper-border rounded-2xl overflow-hidden shadow-sm">
          {TEASER_STAGES.map((step) => (
            <Link
              key={step.num}
              href="/studio#method"
              className="group bg-paper hover:bg-paper-card p-5 sm:p-6 transition-colors flex flex-col justify-between h-32 sm:h-36"
            >
              <span className="font-mono text-xs text-ink-muted group-hover:text-ink transition-colors font-medium">
                {step.num}
              </span>
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-normal text-ink group-hover:italic transition-all">
                  {step.name}
                </h3>
                <span className="font-mono text-[9px] uppercase tracking-widest text-ink-muted/80 opacity-0 group-hover:opacity-100 transition-opacity">
                  Phase &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default MethodTeaser;
