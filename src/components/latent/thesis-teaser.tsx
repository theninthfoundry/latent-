"use client";

import React from "react";
import { Reveal } from "@/components/motion/reveal";
import { ParallaxLayer } from "@/components/motion/scroll-reveal";

export function ThesisTeaser() {
  return (
    <section className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-20 max-w-[1500px] mx-auto border-t border-paper-border overflow-hidden">
      {/* Halftone Stars Marginalia */}
      <ParallaxLayer
        offset={16}
        direction="down"
        className="absolute -top-6 -right-6 w-64 sm:w-80 aspect-square pointer-events-none select-none opacity-[0.12] mix-blend-multiply overflow-hidden z-0"
      >
        <img
          src="/artifacts/halftone-stars.png"
          alt=""
          className="w-full h-full object-contain rotate-6 scale-110"
        />
      </ParallaxLayer>

      {/* Editorial Header Tag */}
      <Reveal>
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-ink-muted mb-12 sm:mb-16 relative z-10">
          <span>§ 02 — Scope &amp; Ambition</span>
          <span>The Thesis</span>
        </div>
      </Reveal>

      {/* Monumental Editorial Serif Statement */}
      <div className="max-w-5xl relative z-10 space-y-10 sm:space-y-12">
        <Reveal delay={0.05}>
          <blockquote className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-ink leading-[1.05] tracking-tight">
            Some ideas need a website. <br />
            Some need a{" "}
            <span className="italic font-normal underline decoration-paper-border underline-offset-8">
              world.
            </span>{" "}
            <br />
            <span className="text-ink-muted font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl block mt-4 sm:mt-6">
              We work somewhere between the two.
            </span>
          </blockquote>
        </Reveal>

        {/* Trimmed Single Elaboration Sentence */}
        <Reveal delay={0.15}>
          <div className="pt-8 border-t border-paper-border/70 flex flex-col sm:flex-row sm:items-baseline justify-between gap-6">
            <p className="font-sans text-base sm:text-lg text-ink-light font-light max-w-2xl leading-relaxed">
              Most digital projects stop at utility or decoration. We design the
              entire container: the visual language, the underlying system, the
              way it responds, and the cultural aura it projects.
            </p>
            <div className="font-mono text-xs text-ink-muted shrink-0">
              [ Ref. Labs Manifesto &bull; p. 04 ]
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ThesisTeaser;
