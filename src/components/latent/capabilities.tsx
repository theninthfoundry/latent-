"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BotanicalBloom } from "./botanical-bloom";
import { CelestialSun } from "./celestial-sun";
import { LatentFixModal } from "./latent-fix-modal";
import { ArrowUpRight, Wrench, Sparkles, Shield, AlertOctagon, RotateCw, ArrowRight } from "lucide-react";

export type MatterVerb =
  | "build"
  | "repair"
  | "evolve"
  | "rescue"
  | "transform"
  | "audit"
  | "recover"
  | "care"
  | "experiment"
  | "archive";

export function Capabilities() {
  const [activeVerb, setActiveVerb] = useState<MatterVerb>("build");
  const [hoveredVerb, setHoveredVerb] = useState<MatterVerb | null>(null);
  const [fixModalOpen, setFixModalOpen] = useState(false);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  // The active substrate state is either what's hovered or what's selected
  const substrateState = hoveredVerb || activeVerb;

  return (
    <section
      id="capabilities"
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto border-t border-paper-border overflow-hidden select-none"
    >
      {/* Dynamic Substrate Canvas Reaction (Indian Craft in Motion) */}
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-700">
        {substrateState === "repair" ? (
          /* REPAIR: Self-Healing Damaged Pixel Field */
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <motion.div
              initial={{ scale: 0.95, opacity: 0.2 }}
              animate={{ scale: 1, opacity: 0.35 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-16 gap-1"
            >
              {Array.from({ length: 64 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    backgroundColor: i % 3 === 0 ? "#14283E" : "transparent",
                    borderColor: "#14283E",
                  }}
                  className="w-3 h-3 border border-paper-border"
                />
              ))}
            </motion.div>
          </div>
        ) : substrateState === "audit" ? (
          /* AUDIT: Sweeping Telemetry Scanline */
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "100%" }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
            className="w-full h-px bg-atelier-indigo/25 shadow-[0_0_8px_rgba(20,40,62,0.3)]"
          />
        ) : substrateState === "experiment" ? (
          /* EXPERIMENT: Unpredictable Ambient Star Drift */
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-1/4 left-1/3 text-atelier-indigo"><Sparkles className="w-3 h-3" strokeWidth={1.5} /></div>
            <div className="absolute top-2/3 right-1/4 text-atelier-brass"><Sparkles className="w-3 h-3" strokeWidth={1.5} /></div>
          </div>
        ) : substrateState === "care" ? (
          /* CARE: Deep Calm Breathing Lattice */
          <div className="absolute inset-0 jaali-grid opacity-10" />
        ) : (
          /* DEFAULT / DORMANT: Faint cross-stitch texture */
          <div className="absolute inset-0 cross-stitch-pattern opacity-8" />
        )}
      </div>

      {/* 01 — The Quiet Entrance */}
      <div className="relative z-10 max-w-4xl mb-16 sm:mb-20">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-ink-muted mb-4 border-b border-paper-border/60 pb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-atelier-indigo" />
          <span>§ 03 // DIGITAL MATTER</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-ink tracking-[-0.03em] leading-[1.05] mb-6 text-balance">
          We <span className="italic font-normal text-atelier-indigo">build</span>. We{" "}
          <span className="font-normal text-accent-clay">repair</span>. <br />
          We <span className="font-normal text-atelier-faded">evolve</span>. We{" "}
          <span className="font-normal text-atelier-brass">rescue</span>. <br />
          <span className="font-normal text-ink-muted">
            We transform. We experiment.
          </span>
        </h2>

        <p className="font-sans text-base sm:text-lg text-ink-light font-light max-w-[62ch] text-pretty leading-[1.6]">
          Latent does not only create things from zero. Digital systems are{" "}
          <span className="font-serif italic text-ink font-normal">living matter</span>:
          they are born, they break, they evolve, they get abandoned, and they are transformed into{" "}
          <span className="font-mono text-xs bg-paper-subtle px-1.5 py-0.5 rounded border border-paper-border text-ink">
            inevitable software
          </span>
          .
        </p>

        {/* Back Door: LATENT / FIX (Handcrafted Seal) */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
          <button
            onClick={() => setFixModalOpen(true)}
            className="group px-4 py-2 rounded-full bg-paper border border-atelier-brass/50 hover:border-atelier-brass text-ink font-mono text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2.5 shadow-subtle hover:shadow-card focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink"
            aria-label="Open emergency repair dispatch docket"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-clay" />
            </span>
            <span className="group-hover:text-atelier-indigo">
              Something broken? → <span className="font-serif italic lowercase font-normal">dispatch to atelier</span>
            </span>
            <span className="text-atelier-brass opacity-60 group-hover:opacity-100 transition-opacity text-[10px]">
              <Sparkles className="w-2.5 h-2.5 text-atelier-brass opacity-60 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
            </span>
          </button>
          <span className="font-mono text-[11px] text-ink-muted hidden sm:inline">
            Direct senior triage &bull; fix@latent.labs
          </span>
        </div>
      </div>

      {/* 02 — The Hierarchy: Sovereign Anchor + Primary Doors */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 sm:mb-20 items-stretch">
        {/* HERO ANCHOR: BUILD (Disproportionately Sovereign) */}
        <div
          onMouseEnter={() => setHoveredVerb("build")}
          onMouseLeave={() => setHoveredVerb(null)}
          onClick={() => setActiveVerb("build")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setActiveVerb("build");
            }
          }}
          tabIndex={0}
          role="button"
          aria-label="Select BUILD capability"
          className={`lg:col-span-6 p-8 sm:p-12 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atelier-indigo ${
            activeVerb === "build"
              ? "bg-atelier-indigo text-paper border-atelier-indigo shadow-md"
              : "bg-paper-card text-ink border-paper-border hover:border-atelier-indigo/60"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest opacity-70">
              Hero Capability // Genesis
            </span>
            <BotanicalBloom
              size={40}
              mode={activeVerb === "build" ? "bloom" : "bud"}
              interactive={false}
            />
          </div>

          <div className="my-8 space-y-3">
            <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-none">
              BUILD
            </h3>
            <p className="font-mono text-xs uppercase tracking-widest text-atelier-brass font-medium">
              We build inevitables.
            </p>
            <p className="font-sans text-sm sm:text-base font-light opacity-90 max-w-md leading-relaxed">
              Things that <span className="font-serif italic text-paper font-normal">should exist</span>. Taking ideas from zero to their inevitable tactile existence: <span className="text-atelier-brass font-medium">websites</span>, brand worlds, living archives, and autonomous AI systems.
            </p>
            <div className="font-mono text-[10px] uppercase tracking-widest text-atelier-brass/90 pt-4 border-t border-current/10 mt-6">
              The reason Latent exists.
            </div>
          </div>

          <div className="pt-6 border-t border-current/20 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider opacity-75">
            <span>Genesis Offering &bull; From Zero</span>
            <span className="flex items-center gap-1 font-semibold">
              Explore Build →
            </span>
          </div>
        </div>

        {/* PRIMARY TWIN DOORS: REPAIR & EVOLVE */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Door A: REPAIR */}
          <div
            onMouseEnter={() => setHoveredVerb("repair")}
            onMouseLeave={() => setHoveredVerb(null)}
            onClick={() => setActiveVerb("repair")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActiveVerb("repair");
              }
            }}
            tabIndex={0}
            role="button"
            aria-label="Select REPAIR capability"
            className={`p-7 sm:p-8 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-900 ${
              activeVerb === "repair"
                ? "bg-paper text-ink border-accent-clay/60 shadow-sm ring-1 ring-accent-clay/30"
                : "bg-paper-card text-ink border-paper-border hover:border-ink/40"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                Door 01 // Restoration
              </span>
              <Wrench className="w-4 h-4 text-accent-clay" />
            </div>

            <div className="my-6 space-y-2">
              <h4 className="font-serif text-3xl font-light text-ink">REPAIR</h4>
              <p className="font-mono text-[11px] text-accent-clay font-medium">
                We repair what <span className="font-serif italic font-normal">shouldn&apos;t have broken</span>.
              </p>
              <p className="font-sans text-xs text-ink-muted leading-relaxed">
                Precise architectural surgery on <span className="font-mono text-[10px] bg-accent-clay/10 text-accent-clay px-1.5 py-0.5 rounded">collapsed mobile layouts</span>, broken forms, and failing deployments.
              </p>
              <div className="hidden"></div>
            </div>

            <div className="pt-4 border-t border-paper-border font-mono text-[10px] text-accent-clay flex items-center justify-between">
              <span>Emergency Intake Available</span>
              <Sparkles className="w-2.5 h-2.5" strokeWidth={1.5} />
            </div>
          </div>

          {/* Door B: EVOLVE */}
          <div
            onMouseEnter={() => setHoveredVerb("evolve")}
            onMouseLeave={() => setHoveredVerb(null)}
            onClick={() => setActiveVerb("evolve")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActiveVerb("evolve");
              }
            }}
            tabIndex={0}
            role="button"
            aria-label="Select EVOLVE capability"
            className={`p-7 sm:p-8 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atelier-faded ${
              activeVerb === "evolve"
                ? "bg-paper text-ink border-atelier-faded shadow-sm ring-1 ring-atelier-faded/30"
                : "bg-paper-card text-ink border-paper-border hover:border-ink/40"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                Door 02 // Mutation
              </span>
              <Sparkles className="w-4 h-4 text-atelier-faded" />
            </div>

            <div className="my-6 space-y-2">
              <h4 className="font-serif text-3xl font-light text-ink">EVOLVE</h4>
              <p className="font-mono text-[11px] text-atelier-faded font-medium">
                We evolve things that <span className="font-serif italic font-normal">still have a future</span>.
              </p>
              <p className="font-sans text-xs text-ink-muted leading-relaxed">
                Old to new. Static to <span className="text-atelier-faded font-medium underline decoration-atelier-faded/40">interactive</span>. Slow to fast. Generic to distinctive. Working across time.
              </p>
              <div className="hidden"></div>
            </div>

            <div className="pt-4 border-t border-paper-border font-mono text-[10px] text-ink-muted flex items-center justify-between">
              <span>Modernization &bull; Zero Disruption</span>
              <Sparkles className="w-2.5 h-2.5" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>

      {/* 03 — The Superpowers: RESCUE & TRANSFORM */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 sm:mb-20">
        {/* SUPERPOWER 1: RESCUE (Forensic Salvage Dossier) */}
        <div
          onMouseEnter={() => setHoveredVerb("rescue")}
          onMouseLeave={() => setHoveredVerb(null)}
          onClick={() => setActiveVerb("rescue")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setActiveVerb("rescue");
            }
          }}
          tabIndex={0}
          role="button"
          aria-label="Select RESCUE capability"
          className={`relative p-7 sm:p-9 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atelier-brass ${
            activeVerb === "rescue"
              ? "bg-paper text-ink border-atelier-brass shadow-md ring-1 ring-atelier-brass/50"
              : "bg-paper-card text-ink border-paper-border hover:border-ink/40"
          }`}
        >
          {/* Tilted washi tape on folder corner */}
          <div className="washi-tape -top-2.5 left-8 opacity-80" />

          <div>
            <div className="flex items-center justify-between mb-4 pt-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-accent-clay/30 bg-accent-clay/5 font-mono text-[10px] uppercase tracking-widest text-accent-clay font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-clay" />
                <span>03 // RESCUE &bull; TAKEOVER</span>
              </div>
              <span className="font-mono text-[10px] text-ink-muted uppercase">
                Forensic Dossier
              </span>
            </div>

            {/* Editorial Headline with Inline Fonts & Color Contrast */}
            <blockquote className="font-serif text-2xl sm:text-3xl font-light text-ink leading-snug mb-4">
              “Your developer{" "}
              <span className="italic font-normal text-accent-clay">
                disappeared
              </span>
              . <br />
              Your agency{" "}
              <span className="italic font-normal text-atelier-faded">
                left
              </span>
              . <br />
              The code{" "}
              <span className="font-mono text-xs bg-paper-subtle px-2 py-0.5 rounded border border-paper-border text-ink">
                still exists
              </span>
              . <br />
              <span className="italic font-normal text-atelier-indigo underline decoration-atelier-brass underline-offset-4">
                We’ll take it from here.
              </span>”
            </blockquote>

            {/* Forensic Case File Evidence Docket */}
            <div className="my-4 p-5 rounded bg-[#FAF9F5] border-[0.5px] border-ink/20 space-y-3 relative shadow-sm">
              <div className="flex items-center justify-between border-b-[0.5px] border-ink/15 pb-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink/70 font-bold">
                  CASE FILE // INCIDENT #409
                </span>
                {/* Stamp style mark */}
                <div className="border border-red-700/80 text-red-700/80 px-2 py-0.5 transform rotate-2 font-mono text-[9px] font-bold tracking-widest uppercase">
                  RECOVERABLE
                </div>
              </div>

              {/* 3 Clear Evidence Items */}
              <div className="grid grid-cols-1 gap-0 text-xs font-mono border-[0.5px] border-ink/15 bg-white">
                <div className="flex items-start gap-4 p-2 border-b-[0.5px] border-ink/15">
                  <span className="text-accent-clay font-bold w-4">01</span>
                  <div className="flex-1 text-[10px]">
                    <span className="font-bold text-ink block uppercase tracking-wide">Broken Deployment</span>
                    <span className="text-ink/70 mt-0.5 block">Failing Vercel build loops &amp; unpinned Docker images.</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-2 border-b-[0.5px] border-ink/15">
                  <span className="text-atelier-brass font-bold w-4">02</span>
                  <div className="flex-1 text-[10px]">
                    <span className="font-bold text-ink block uppercase tracking-wide">Zero Documentation</span>
                    <span className="text-ink/70 mt-0.5 block">No schema maps, API keys, or runbooks left behind.</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-2 bg-ink/5">
                  <span className="text-atelier-indigo font-bold w-4">03</span>
                  <div className="flex-1 text-[10px]">
                    <span className="font-bold text-atelier-indigo block uppercase tracking-wide">Latent Protocol</span>
                    <span className="text-ink/80 mt-0.5 block">Quarantine entropy, pin dependencies &amp; ship release.</span>
                  </div>
                </div>
              </div>

              {/* Handwritten Marginalia Annotation */}
              <div className="pt-3 border-t-[0.5px] border-ink/15 flex items-center justify-between">
                <span className="hidden"></span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-ink/50">
                  ILLUSTRATIVE SCENARIO
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-ink-muted font-light max-w-[62ch] text-pretty leading-[1.6]">
              Abandoned repositories, unfinished SaaS, and undocumented AI prototypes. Give us the repo artifact; we establish sanity and finish it.
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-paper-border flex items-center justify-between font-mono text-[11px]">
            <span className="text-ink-muted flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-clay" />
              <span>Status: Operational Takeover</span>
            </span>
            <span className="text-atelier-indigo font-medium link-underline flex items-center gap-1">
              Initiate Rescue →
            </span>
          </div>
        </div>

        {/* SUPERPOWER 2: TRANSFORM (Visually Dramatic Metamorphosis) */}
        <div
          onMouseEnter={() => setHoveredVerb("transform")}
          onMouseLeave={() => setHoveredVerb(null)}
          onClick={() => setActiveVerb("transform")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setActiveVerb("transform");
            }
          }}
          tabIndex={0}
          role="button"
          aria-label="Select TRANSFORM capability"
          className={`p-7 sm:p-9 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atelier-indigo ${
            activeVerb === "transform"
              ? "bg-paper text-ink border-atelier-indigo shadow-md ring-1 ring-atelier-indigo/50"
              : "bg-paper-card text-ink border-paper-border hover:border-ink/40"
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-atelier-indigo/30 bg-atelier-indigo/5 font-mono text-[10px] uppercase tracking-widest text-atelier-indigo font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-atelier-indigo" />
                <span>04 // TRANSFORM &bull; METAMORPHOSIS</span>
              </div>
              <span className="font-mono text-[10px] text-ink-muted uppercase">
                Substrate Mutation
              </span>
            </div>

            {/* Editorial Headline with Inline Fonts */}
            <h4 className="font-serif text-2xl sm:text-3xl font-light text-ink leading-snug mb-2">
              We turn{" "}
              <span className="italic font-normal text-accent-clay">
                chaotic manual spreadsheets
              </span>{" "}
              into{" "}
              <span className="italic font-normal text-atelier-indigo underline decoration-atelier-brass underline-offset-4">
                autonomous software
              </span>
              .
            </h4>

            {/* Stepped Sequence Breadcrumb */}
            <div className="font-mono text-[9px] text-ink-muted uppercase tracking-wider py-1.5 border-b border-paper-border/60">
              MESSY CELLS &rarr; BUSINESS LOGIC &rarr; BESPOKE INTERFACE &rarr; SOVEREIGN APP
            </div>

            {/* Draggable Comparison Slider */}
            <div className="my-4 relative h-[180px] sm:h-[220px] rounded-2xl overflow-hidden border border-paper-border select-none shadow-sm cursor-ew-resize group"
                 onMouseDown={() => setIsDragging(true)}
                 onMouseUp={() => setIsDragging(false)}
                 onMouseLeave={() => setIsDragging(false)}
                 onMouseMove={(e) => {
                   if (isDragging) {
                     const rect = e.currentTarget.getBoundingClientRect();
                     const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
                     setSliderPos((x / rect.width) * 100);
                   }
                 }}
                 onTouchMove={(e) => {
                   const rect = e.currentTarget.getBoundingClientRect();
                   const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
                   setSliderPos((x / rect.width) * 100);
                 }}
            >
              {/* RIGHT / UNDERNEATH: AFTER (Clean Interface) */}
              <div className="absolute inset-0 bg-atelier-indigo p-5 sm:p-6 text-paper flex flex-col justify-center">
                <div className="max-w-[200px] ml-auto text-right">
                  <div className="font-mono text-[9px] uppercase tracking-wider text-emerald-400 mb-2 flex items-center justify-end gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Dispatch
                  </div>
                  <div className="font-serif text-2xl font-normal leading-tight mb-3">Autonomous Order Engine</div>
                  <div className="w-full bg-paper/20 h-1 rounded-full overflow-hidden mb-2">
                    <div className="bg-atelier-brass h-full w-[94%] rounded-full" />
                  </div>
                  <div className="font-mono text-[9px] text-paper/70 flex justify-between">
                    <span>94% Synchronized</span>
                    <span>0 Errors</span>
                  </div>
                </div>
              </div>

              {/* LEFT / OVERLAY: BEFORE (Messy Spreadsheet) */}
              <div className="absolute inset-0 bg-paper-subtle overflow-hidden border-r-2 border-ink shadow-[4px_0_12px_rgba(0,0,0,0.1)]" style={{ width: `${sliderPos}%` }}>
                <div className="w-full h-full p-4 min-w-[300px]">
                  <div className="font-mono text-[10px] text-accent-clay mb-3 font-semibold flex items-center gap-1.5 border-b border-paper-border/50 pb-2">
                    <AlertOctagon className="w-3.5 h-3.5" strokeWidth={1.5} /> Google Sheets #4 (16 hrs lost/wk)
                  </div>
                  <div className="grid grid-cols-4 gap-px bg-paper-border border border-paper-border rounded text-[9px] font-mono text-ink-muted">
                    <div className="bg-paper p-1.5 text-center">A</div><div className="bg-paper p-1.5 text-center">B</div><div className="bg-paper p-1.5 text-center">C</div><div className="bg-paper p-1.5 text-center">D</div>
                    <div className="bg-paper p-1.5">14,288</div><div className="bg-paper p-1.5">94.2%</div><div className="bg-red-500/10 text-red-700 font-bold p-1.5">#REF!</div><div className="bg-paper p-1.5">N/A</div>
                    <div className="bg-paper p-1.5">28,400</div><div className="bg-amber-500/10 text-amber-800 p-1.5">SYNC LAG</div><div className="bg-paper p-1.5">98.1%</div><div className="bg-paper p-1.5">OK</div>
                  </div>
                </div>
              </div>

              {/* Slider Handle */}
              <div className="absolute top-0 bottom-0 -ml-3.5 w-7 flex items-center justify-center cursor-ew-resize z-10" style={{ left: `${sliderPos}%` }}>
                <div className="w-7 h-7 bg-ink rounded-full flex items-center justify-center shadow-md border-2 border-paper">
                  <div className="flex gap-0.5">
                    <div className="w-0.5 h-2.5 bg-paper/60 rounded-full" />
                    <div className="w-0.5 h-2.5 bg-paper/60 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            <p className="font-sans text-xs text-ink-muted font-light leading-relaxed">
              We translate fragmented operational spreadsheets, static PDFs, and broken back-office rituals into high-speed, bespoke software tailored to your workflow.
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-paper-border font-mono text-[11px] text-ink-muted flex items-center justify-between">
            <span>Spreadsheet → App &bull; PDF → Workflow</span>
            <span className="text-atelier-indigo font-medium link-underline flex items-center gap-1">
              Explore Mutations →
            </span>
          </div>
        </div>
      </div>

      {/* 04 — Infrastructure, Soul, and Memory (Compact Index) */}
      <div className="relative z-10 flex flex-col border-t border-paper-border mt-16 sm:mt-20">
        {[
          { id: "audit", label: "01", title: "Audit", desc: "We find what isn't working. Code • UX • Security" },
          { id: "recover", label: "02", title: "Recover", desc: "We recover what was lost. Deployments • Repos" },
          { id: "care", label: "03", title: "Care", desc: "Worth keeping alive. Guardianship • Hygiene" },
          { id: "experiment", label: "04", title: "Experiment", desc: "Things that shouldn't exist yet. Celestial • Machine" },
          { id: "archive", label: "05", title: "Archive", desc: "Things we made to know. Specimens • Tools" }
        ].map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setHoveredVerb(item.id as MatterVerb)}
            onMouseLeave={() => setHoveredVerb(null)}
            onClick={() => setActiveVerb(item.id as MatterVerb)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActiveVerb(item.id as MatterVerb);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`Select ${item.title} capability`}
            className="group flex flex-col md:flex-row md:items-center justify-between p-5 border-b border-paper-border hover:bg-paper-subtle transition-all cursor-pointer focus-visible:outline-none focus-visible:bg-paper-subtle"
          >
            <div className="flex items-center gap-6 md:w-1/3">
              <span className="font-mono text-[10px] uppercase text-ink-muted w-6">{item.label}</span>
              <span className="font-serif text-2xl sm:text-3xl font-light text-ink group-hover:text-atelier-indigo transition-colors">{item.title}</span>
            </div>
            
            <div className="mt-2 md:mt-0 font-sans text-sm text-ink-muted font-light text-pretty md:w-1/2 overflow-hidden max-h-0 md:max-h-12 group-hover:max-h-24 transition-all duration-300 ease-in-out opacity-60 group-hover:opacity-100">
              {item.desc}
            </div>

            <div className="hidden md:flex md:w-1/6 justify-end opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight className="w-5 h-5 text-atelier-indigo" strokeWidth={1.5} />
            </div>
          </div>
        ))}
      </div>

      {/* Emergency Intake Back Door Modal */}
      <LatentFixModal isOpen={fixModalOpen} onClose={() => setFixModalOpen(false)} />
    </section>
  );
}

export default Capabilities;
