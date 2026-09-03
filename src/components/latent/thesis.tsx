"use client";

import React from "react";
import { motion } from "framer-motion";
import { TextReveal, ParallaxLayer } from "@/components/motion/scroll-reveal";
import { spatialEase } from "@/lib/motion/easings";

export function Thesis() {
  return (
    <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 px-6 sm:px-12 lg:px-20 max-w-[1500px] mx-auto border-t border-paper-border overflow-hidden">
      {/* Halftone Stars Marginalia: Restrained spatial depth in upper right margin */}
      <ParallaxLayer
        offset={14}
        direction="down"
        className="absolute -top-8 -right-8 w-64 sm:w-80 aspect-square pointer-events-none select-none opacity-[0.12] mix-blend-multiply overflow-hidden z-0"
      >
        <img
          src="/artifacts/halftone-stars.png"
          alt=""
          className="w-full h-full object-contain rotate-6 scale-110"
        />
      </ParallaxLayer>

      {/* Editorial Header Tag */}
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-ink-muted mb-12 sm:mb-16 relative z-10">
        <span>§ 02 — On Scope &amp; Ambition</span>
        <span>The Thesis</span>
      </div>

      {/* Monumental Editorial Serif Statement */}
      <div className="max-w-5xl relative z-10">
        <blockquote className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-ink leading-[1.04] tracking-tight">
          <TextReveal delay={0}>Some ideas need a website.</TextReveal>
          <TextReveal delay={0.08}>
            Some need a{" "}
            <span className="italic font-normal underline decoration-paper-border underline-offset-8">
              world.
            </span>
          </TextReveal>
          <div className="text-ink-muted font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-4 sm:mt-6">
            <TextReveal delay={0.16}>We work somewhere between the two.</TextReveal>
          </div>
        </blockquote>

        {/* Marginalia Note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: spatialEase }}
          className="mt-12 sm:mt-16 pt-8 border-t border-paper-border/70 flex flex-col sm:flex-row sm:items-baseline justify-between gap-6"
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

        {/* Studio Axioms Triptych: Rich editorial intelligence with micro-hover states */}
        <div className="mt-12 sm:mt-16 pt-10 border-t border-paper-border grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: spatialEase, delay: 0.05 }}
            className="space-y-2 group p-3 -m-3 rounded-lg transition-colors hover:bg-paper-card/40"
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
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: spatialEase, delay: 0.12 }}
            className="space-y-2 group p-3 -m-3 rounded-lg transition-colors hover:bg-paper-card/40"
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
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: spatialEase, delay: 0.19 }}
            className="space-y-2 group p-3 -m-3 rounded-lg transition-colors hover:bg-paper-card/40"
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
        </div>
      </div>
    </section>
  );
}
