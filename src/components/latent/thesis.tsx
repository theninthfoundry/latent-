"use client";

import React from "react";
import { motion } from "framer-motion";
import { ParallaxLayer } from "@/components/motion/scroll-reveal";
import { spatialEase } from "@/lib/motion/easings";

export function Thesis() {
  return (
    <section className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 px-6 sm:px-12 lg:px-20 max-w-[1500px] mx-auto border-t border-paper-border overflow-hidden">
      {/* Halftone Stars Marginalia: Restrained spatial depth in upper right margin */}
      <ParallaxLayer
        offset={14}
        direction="down"
        className="absolute -top-6 -right-6 w-60 sm:w-72 aspect-square pointer-events-none select-none opacity-[0.14] mix-blend-multiply overflow-hidden z-0"
      >
        <img
          src="/artifacts/halftone-stars.png"
          alt=""
          className="w-full h-full object-contain rotate-6 scale-110"
        />
      </ParallaxLayer>

      {/* Editorial Header Tag */}
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-ink-muted mb-8 sm:mb-10 relative z-10">
        <span>§ 02 — On Scope &amp; Ambition</span>
        <span>The Thesis</span>
      </div>

      {/* Monumental Editorial Serif Statement */}
      <div className="max-w-5xl relative z-10">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.85, ease: spatialEase }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-ink leading-[1.04] tracking-tight"
        >
          Some ideas need a website. <br />
          Some need a{" "}
          <span className="italic font-normal underline decoration-paper-border underline-offset-8">
            world.
          </span>{" "}
          <br />
          <span className="text-ink-muted font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl block mt-4 sm:mt-5">
            We work somewhere between the two.
          </span>
        </motion.blockquote>

        {/* Marginalia Note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: spatialEase }}
          className="mt-8 sm:mt-10 pt-6 border-t border-paper-border/70 flex flex-col sm:flex-row sm:items-baseline justify-between gap-6"
        >
          <p className="font-sans text-sm sm:text-base text-ink-light font-light max-w-xl leading-relaxed">
            Most digital projects stop at utility or decoration. We design the
            entire container: the visual language, the underlying system, the
            way it responds, and the cultural aura it projects.
          </p>

          <div className="font-mono text-xs text-ink-muted shrink-0">
            [ Ref. Studio Manifesto / p. 04 ]
          </div>
        </motion.div>

        {/* Studio Axioms 4-Column Grid: Fills whitespace across the editorial spread */}
        <div className="mt-8 sm:mt-10 pt-8 border-t border-paper-border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: spatialEase, delay: 0.04 }}
            className="space-y-2 group p-3 -m-3 rounded-lg transition-colors hover:bg-paper-card/50"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted block">
              Axiom 01 // Texture
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-normal text-ink group-hover:italic transition-all">
              Form follows friction.
            </h4>
            <p className="font-sans text-xs sm:text-sm text-ink-muted font-light leading-relaxed">
              Not everything should be frictionless. The most meaningful digital
              artifacts command slow inspection, hold weight, and resist casual
              disposal.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: spatialEase, delay: 0.08 }}
            className="space-y-2 group p-3 -m-3 rounded-lg transition-colors hover:bg-paper-card/50"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted block">
              Axiom 02 // Materiality
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-normal text-ink group-hover:italic transition-all">
              Code is the material.
            </h4>
            <p className="font-sans text-xs sm:text-sm text-ink-muted font-light leading-relaxed">
              We do not hand off static mockups. Code is the physical marble,
              chisel, and kiln — responsive physics, frame budgets, and living
              typography.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: spatialEase, delay: 0.12 }}
            className="space-y-2 group p-3 -m-3 rounded-lg transition-colors hover:bg-paper-card/50"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted block">
              Axiom 03 // Longevity
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-normal text-ink group-hover:italic transition-all">
              Cultural durability.
            </h4>
            <p className="font-sans text-xs sm:text-sm text-ink-muted font-light leading-relaxed">
              We build systems designed to outlive framework cycles, quarterly
              trends, and the transient disposable interfaces of the modern web.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: spatialEase, delay: 0.16 }}
            className="space-y-2 group p-3 -m-3 rounded-lg transition-colors hover:bg-paper-card/50"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted block">
              Axiom 04 // Restraint
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-normal text-ink group-hover:italic transition-all">
              Silence as design.
            </h4>
            <p className="font-sans text-xs sm:text-sm text-ink-muted font-light leading-relaxed">
              An interface that holds its breath while you think is infinitely
              more polite and effective than one that constantly demands attention.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
