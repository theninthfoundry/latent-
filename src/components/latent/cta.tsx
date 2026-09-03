"use client";

import React from "react";
import { HandDrawnArrow } from "./naive-elements";
import { SplitCTAButton } from "./split-cta-button";
import { TextReveal, ParallaxLayer } from "@/components/motion/scroll-reveal";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative min-h-[90vh] lg:h-[92vh] flex flex-col justify-between py-8 sm:py-12 px-6 sm:px-12 lg:px-20 max-w-[1600px] mx-auto border-t border-paper-border overflow-hidden"
    >
      {/* Top Tag */}
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-ink-muted border-b border-paper-border pb-3 shrink-0 relative z-10">
        <span>12 // Final Declaration</span>
        <span>Initiation &bull; Q3/Q4</span>
      </div>

      {/* Background Watermark: Faint Atomic Diagram Coordinate Orbit with subtle parallax */}
      <div className="absolute -bottom-16 -left-16 w-[420px] h-[420px] pointer-events-none select-none opacity-[0.06] mix-blend-multiply overflow-hidden z-0">
        <ParallaxLayer offset={14} direction="down" className="w-full h-full">
          <img
            src="/artifacts/atomic-diagram.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </ParallaxLayer>
      </div>

      {/* Perfectly Contained Single-View Core */}
      <div className="my-auto py-6 sm:py-8 w-full space-y-8 sm:space-y-10 flex-1 flex flex-col justify-center relative z-10">
        <div className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[5.75rem] xl:text-[6.5rem] font-light text-ink tracking-tight leading-[0.92] uppercase select-none max-w-5xl">
          <TextReveal delay={0}>What are you</TextReveal>
          <TextReveal delay={0.07}>trying to make</TextReveal>
          <TextReveal delay={0.14}>
            <span className="italic font-normal">exist?</span>
          </TextReveal>
        </div>

        {/* Action Row: Note on left, Start a Project on the RIGHT */}
        <div className="pt-6 border-t border-paper-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-6 w-full shrink-0">
          <div className="flex items-center gap-3 text-ink-muted">
            <HandDrawnArrow direction="down-right" className="w-5 h-5 shrink-0" />
            <span className="font-mono text-xs text-ink-muted max-w-xs font-light leading-relaxed">
              No sales funnels. No account managers. You speak directly with the studio.
            </span>
          </div>

          <div className="flex sm:justify-end">
            <SplitCTAButton
              label="Start a Project"
              href="mailto:inquiries@latent.studio"
              size="lg"
            />
          </div>
        </div>
      </div>

      {/* Bottom Anchor */}
      <div className="font-mono text-[10px] text-ink-muted uppercase tracking-widest flex justify-between pt-3 border-t border-paper-border shrink-0 relative z-10">
        <span>LATENT Digital Studio</span>
        <span>End of Transmission &bull; 2026</span>
      </div>
    </section>
  );
}
