"use client";

import React from "react";
import { Reveal } from "@/components/motion/reveal";
import { ParallaxLayer } from "@/components/motion/scroll-reveal";
import { InteractiveSticker } from "./interactive-sticker";
import { RotatingCelestialHalo, LiquidMarginSpine } from "./architectural-borders";

export function ThesisTeaser() {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto border-t border-paper-border overflow-hidden">
      {/* Halftone Stars Marginalia */}
      <ParallaxLayer
        offset={14}
        direction="down"
        className="absolute -top-6 -right-6 w-64 sm:w-80 aspect-square pointer-events-none select-none opacity-[0.08] mix-blend-multiply overflow-hidden z-0"
      >
        <img
          src="/artifacts/halftone-stars.png"
          alt=""
          className="w-full h-full object-contain rotate-6 scale-110"
        />
      </ParallaxLayer>

      {/* Symmetrical Rotating Celestial Radial Starburst Halo */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none z-0">
        <RotatingCelestialHalo size={720} opacity={0.16} speedMultiplier={0.7} />
      </div>

      {/* Vertical Liquid Star Margin Spine */}
      <LiquidMarginSpine side="right" heightClass="h-72 sm:h-96 md:h-[480px]" />

      {/* Editorial Header Tag */}
      <Reveal>
        <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-ink-muted mb-12 sm:mb-16 relative z-10 border-b border-paper-border/60 pb-3">
          <span>§ 01 // The Thesis</span>
          <span>Why we work the way we do</span>
        </div>
      </Reveal>

      {/* Monumental Editorial Serif Statement */}
      <div className="max-w-5xl relative z-10 space-y-10 sm:space-y-12">
        <Reveal delay={0.05}>
          <blockquote className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light text-ink leading-[1.04] tracking-[-0.03em] text-balance">
            Some ideas need a website. <br />
            Some need a{" "}
            <span className="italic font-normal text-atelier-indigo underline decoration-paper-border underline-offset-8">
              world.
            </span>{" "}
            <br />
            <span className="text-ink-muted font-normal text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] block mt-4 sm:mt-6">
              We work <span className="font-serif italic text-accent-clay font-normal">somewhere between the two</span>.
            </span>
          </blockquote>
        </Reveal>

        {/* Trimmed Single Elaboration Sentence */}
        <Reveal delay={0.12}>
          <div className="pt-8 border-t border-paper-border flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-[60ch]">
              <p className="font-sans text-base sm:text-lg text-ink-light font-light text-pretty leading-[1.6]">
                Most digital projects stop at utility or surface decoration. We design the
                entire container: the <span className="font-serif italic text-atelier-indigo">visual language</span>, the underlying system, the
                way it responds, and the cultural aura it projects into the world.
              </p>
              <div className="font-mono text-[10px] uppercase tracking-widest text-ink-muted pt-2 border-t border-paper-border/50">
                Digital architecture treated with the permanence of stone and textile.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 shrink-0">
              <InteractiveSticker
                id="behind-the-scenes"
                size="custom"
                widthClass="w-44 sm:w-56 md:w-68"
                initialRotate={-2}
                noBackground={true}
                blendMode="multiply"
                showCaption={false}
                parallaxSpeed={0.18}
              />
              <div className="font-mono text-xs text-ink-muted shrink-0 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-atelier-brass" />
                <span>Ref. Labs Manifesto &bull; p. 04</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ThesisTeaser;
