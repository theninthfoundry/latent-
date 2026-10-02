"use client";

import React from "react";
import { motion } from "framer-motion";
import { HandDrawnArrow } from "./naive-elements";
import { SplitCTAButton } from "./split-cta-button";
import { ParallaxLayer } from "@/components/motion/scroll-reveal";
import { spatialEase } from "@/lib/motion/easings";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-between py-10 sm:py-14 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto border-t border-paper-border overflow-hidden"
    >
      {/* Top Tag */}
      <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-ink-muted border-b border-paper-border pb-3 shrink-0 relative z-10">
        <span>12 // Final Declaration</span>
        <span>Initiation &bull; Q3/Q4</span>
      </div>

      {/* Background Watermark: Faint Atomic Diagram Coordinate Orbit with subtle parallax */}
      <div className="absolute -bottom-16 -left-16 w-[420px] h-[420px] pointer-events-none select-none opacity-[0.05] mix-blend-multiply overflow-hidden z-0">
        <ParallaxLayer offset={14} direction="down" className="w-full h-full">
          <img
            src="/artifacts/atomic-diagram.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </ParallaxLayer>
      </div>

      {/* Perfectly Contained Single-View Core */}
      <div className="my-auto py-8 sm:py-12 w-full space-y-8 sm:space-y-10 flex-1 flex flex-col justify-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.6, ease: spatialEase }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[5.75rem] xl:text-[6.5rem] font-light text-ink tracking-[-0.035em] leading-[0.92] uppercase select-none max-w-5xl"
        >
          What are you <br />
          trying to make <br />
          <span className="italic font-normal">exist?</span>
        </motion.h2>

        {/* Action Row: Note on left, Start a Project on the RIGHT */}
        <div className="pt-6 sm:pt-8 border-t border-paper-border flex flex-col sm:flex-row sm:items-center justify-between gap-6 w-full shrink-0">
          <div className="flex items-center gap-3 text-ink-muted">
            <HandDrawnArrow direction="down-right" className="w-5 h-5 shrink-0 opacity-80" />
            <span className="font-mono text-xs text-ink-muted max-w-xs font-light leading-relaxed">
              No sales funnels. No account managers. You speak directly with the lab.
            </span>
          </div>

          <div className="flex sm:justify-end">
            <SplitCTAButton
              label="Start a Project"
              href="mailto:inquiries@latent.labs"
              size="lg"
            />
          </div>
        </div>
      </div>

      {/* Bottom Anchor */}
      <div className="font-mono text-[10px] text-ink-muted uppercase tracking-widest flex justify-between pt-3 border-t border-paper-border shrink-0 relative z-10">
        <span>LATENT Labs</span>
        <span>End of Transmission &bull; 2026</span>
      </div>
    </section>
  );
}
