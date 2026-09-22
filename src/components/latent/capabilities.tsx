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

  // The active substrate state is either what's hovered or what's selected
  const substrateState = hoveredVerb || activeVerb;

  return (
    <section
      id="capabilities"
      className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-20 max-w-[1600px] mx-auto border-t border-paper-border overflow-hidden select-none"
    >
      {/* Dynamic Substrate Canvas Reaction (Indian Craft in Motion) */}
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-700">
        {substrateState === "repair" ? (
          /* REPAIR: Self-Healing Damaged Pixel Field */
          <div className="absolute inset-0 flex items-center justify-center opacity-25">
            <motion.div
              initial={{ scale: 0.95, opacity: 0.2 }}
              animate={{ scale: 1, opacity: 0.4 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-16 gap-1"
            >
              {Array.from({ length: 64 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    backgroundColor: i % 3 === 0 ? "#142C48" : "transparent",
                    borderColor: "#142C48",
                  }}
                  className="w-3 h-3 border border-paper-border/60"
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
            className="w-full h-px bg-atelier-indigo/30 shadow-[0_0_12px_rgba(20,44,72,0.4)]"
          />
        ) : substrateState === "experiment" ? (
          /* EXPERIMENT: Unpredictable Ambient Star Drift */
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/3 text-xs text-atelier-indigo animate-bounce">✦</div>
            <div className="absolute top-2/3 right-1/4 text-xs text-atelier-brass animate-pulse">✦</div>
          </div>
        ) : substrateState === "care" ? (
          /* CARE: Deep Calm Breathing Lattice */
          <div className="absolute inset-0 jaali-grid opacity-15" />
        ) : (
          /* DEFAULT / DORMANT: Faint cross-stitch texture */
          <div className="absolute inset-0 cross-stitch-pattern opacity-10" />
        )}
      </div>

      {/* 01 — The Quiet Entrance */}
      <div className="relative z-10 max-w-4xl mb-20 sm:mb-24">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-ink-muted mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-atelier-indigo" />
          <span>§ 04 // DIGITAL MATTER</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-ink tracking-tight leading-[1.05] mb-6">
          We <span className="italic font-normal text-atelier-indigo">build</span>. We{" "}
          <span className="italic font-normal text-accent-clay">repair</span>. <br />
          We <span className="italic font-normal text-atelier-faded">evolve</span>. We{" "}
          <span className="italic font-normal text-atelier-brass">rescue</span>. <br />
          <span className="italic font-normal text-ink-muted">
            We transform. We experiment.
          </span>
        </h2>

        <p className="font-sans text-base sm:text-lg text-ink-light font-light max-w-2xl leading-relaxed">
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
            className="group px-4 py-2 rounded-full bg-paper border border-atelier-brass/60 hover:border-atelier-brass text-ink font-mono text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2.5 shadow-2xs hover:shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-clay opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-clay" />
            </span>
            <span className="group-hover:text-atelier-indigo">
              Something broken? → <span className="font-serif italic lowercase font-normal">dispatch to atelier</span>
            </span>
            <span className="text-atelier-brass opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[10px]">
              ✦
            </span>
          </button>
          <span className="font-mono text-[11px] text-ink-muted hidden sm:inline">
            Direct senior triage &bull; fix@latent.studio
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
            <div className="font-hand text-lg text-atelier-brass/90 pt-1">
              ← The reason Latent exists.
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
              <div className="font-hand text-base text-accent-clay pt-1">
                ← Direct emergency triage within 24h.
              </div>
            </div>

            <div className="pt-4 border-t border-paper-border font-mono text-[10px] text-accent-clay flex items-center justify-between">
              <span>Emergency Intake Available</span>
              <span>✦</span>
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
              <div className="font-hand text-base text-atelier-faded pt-1">
                ← Modernization without rebuilding from zero.
              </div>
            </div>

            <div className="pt-4 border-t border-paper-border font-mono text-[10px] text-ink-muted flex items-center justify-between">
              <span>Modernization &bull; Zero Disruption</span>
              <span>✦</span>
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
            <div className="my-4 p-4 rounded-2xl bg-paper-subtle/80 border border-paper-border space-y-2.5 relative">
              <div className="flex items-center justify-between border-b border-paper-border/80 pb-2">
                <span className="font-mono text-[9px] uppercase tracking-widest text-ink-muted font-semibold">
                  EVIDENCE LOG // INCIDENT #409
                </span>
                <span className="font-mono text-[9px] uppercase text-emerald-800 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  RECOVERABLE BY LATENT
                </span>
              </div>

              {/* 3 Clear Evidence Items */}
              <div className="grid grid-cols-1 gap-2 pt-0.5 text-xs font-sans">
                <div className="flex items-start gap-2.5 p-2 rounded-lg bg-paper border border-paper-border/60">
                  <span className="text-accent-clay font-mono text-xs mt-0.5">🛑</span>
                  <div>
                    <span className="font-mono text-[10px] uppercase font-semibold text-accent-clay block">
                      Broken Deployment
                    </span>
                    <span className="text-ink-light text-[11px] font-light">
                      Failing Vercel build loops &amp; unpinned Docker base images.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-lg bg-paper border border-paper-border/60">
                  <span className="text-amber-700 font-mono text-xs mt-0.5">⚠️</span>
                  <div>
                    <span className="font-mono text-[10px] uppercase font-semibold text-amber-700 block">
                      Zero Documentation
                    </span>
                    <span className="text-ink-light text-[11px] font-light">
                      Previous agency left no schema maps, API keys, or runbooks.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-lg bg-paper border border-paper-border/60">
                  <span className="text-emerald-700 font-mono text-xs mt-0.5">✦</span>
                  <div>
                    <span className="font-mono text-[10px] uppercase font-semibold text-emerald-700 block">
                      Latent Protocol
                    </span>
                    <span className="text-ink-light text-[11px] font-light">
                      Senior takeover: quarantine entropy, pin dependencies &amp; ship stable release.
                    </span>
                  </div>
                </div>
              </div>

              {/* Handwritten Marginalia Annotation */}
              <div className="pt-2 border-t border-paper-border/70 flex items-center justify-between">
                <span className="font-hand text-base text-accent-clay">
                  ← Handled 14 broken repos in 2026. Zero rebuilds needed.
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-ink-muted">
                  48-HR TAKEOVER
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-ink-muted font-light leading-relaxed">
              Abandoned repositories, unfinished SaaS, and undocumented AI prototypes. Give us the repo artifact; we establish sanity and finish it.
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-paper-border flex items-center justify-between font-mono text-[11px]">
            <span className="text-ink-muted flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-clay" />
              <span>Status: Operational Takeover</span>
            </span>
            <span className="text-atelier-indigo font-medium hover:underline flex items-center gap-1">
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

            {/* High-Contrast Before & After Visual Metamorphosis */}
            <div className="my-4 p-4 rounded-2xl bg-paper-subtle/80 border border-paper-border space-y-3">
              <div className="flex items-center justify-between text-[10px] font-mono border-b border-paper-border/70 pb-2">
                <span className="text-accent-clay font-medium flex items-center gap-1">
                  <span>BEFORE // The Drag</span>
                </span>
                <span className="text-atelier-indigo font-semibold px-2 py-0.5 rounded bg-atelier-indigo/10 border border-atelier-indigo/20 flex items-center gap-1">
                  <span>✦ MUTATION ✦</span>
                </span>
                <span className="text-emerald-800 font-medium flex items-center gap-1">
                  <span>AFTER // Sovereign Software</span>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 items-stretch">
                {/* Left: The Messy Old Spreadsheet */}
                <div className="space-y-1.5 font-mono text-[9px] bg-paper p-3 rounded-xl border border-paper-border shadow-2xs">
                  <div className="flex items-center justify-between text-ink-muted pb-1 border-b border-paper-border">
                    <span className="font-bold text-accent-clay">⚠️ Google Sheets #4</span>
                    <span className="text-accent-clay bg-accent-clay/10 px-1 py-0.5 rounded">16 hrs lost/wk</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-[9px] text-ink-muted pt-1">
                    <span className="bg-paper-subtle p-1 rounded font-mono">A1: 14,288</span>
                    <span className="bg-paper-subtle p-1 rounded font-mono">B1: 94.2%</span>
                    <span className="bg-red-500/10 text-red-700 p-1 rounded font-mono font-bold">#REF! ERR</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-[9px] text-ink-muted">
                    <span className="bg-paper-subtle p-1 rounded font-mono">A2: 28,400</span>
                    <span className="bg-amber-500/10 text-amber-800 p-1 rounded font-mono">SYNC LAG</span>
                    <span className="bg-paper-subtle p-1 rounded font-mono">B2: 98.1%</span>
                  </div>
                  <div className="pt-1.5 text-[9px] text-accent-clay border-t border-paper-border/60 flex justify-between">
                    <span>Manual copy-paste</span>
                    <span className="font-semibold">Fragile</span>
                  </div>
                </div>

                {/* Right: The Polished Autonomous Software UI */}
                <div className="p-3.5 rounded-xl bg-atelier-indigo text-paper text-[10px] font-sans flex flex-col justify-between shadow-md relative overflow-hidden group">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] uppercase tracking-wider text-atelier-brass font-semibold">
                      Latent Custom System
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[8px] text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live Dispatch</span>
                    </span>
                  </div>

                  <div className="my-2 space-y-1">
                    <div className="font-serif text-base font-normal tracking-tight">
                      Autonomous Order Engine
                    </div>
                    <div className="font-mono text-[9px] text-paper/70 flex items-center justify-between">
                      <span>Throughput: +312%</span>
                      <span className="text-emerald-400 font-semibold">0 Errors</span>
                    </div>
                  </div>

                  <div className="w-full bg-paper/20 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-atelier-brass h-full w-4/5 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Handwritten Annotation */}
              <div className="pt-2 border-t border-paper-border/70 flex items-center justify-between">
                <span className="font-hand text-base text-atelier-indigo">
                  ← Replaced 4 clumsy Excel sheets with a single bespoke web interface.
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-700 font-semibold">
                  Zero Manual Entry
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-ink-muted font-light leading-relaxed">
              We translate fragmented operational spreadsheets, static PDFs, and broken back-office rituals into high-speed, bespoke software tailored to your workflow.
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-paper-border font-mono text-[11px] text-ink-muted flex items-center justify-between">
            <span>Spreadsheet → App &bull; PDF → Workflow</span>
            <span className="text-atelier-indigo font-medium hover:underline flex items-center gap-1">
              Explore Mutations →
            </span>
          </div>
        </div>
      </div>

      {/* 04 — Infrastructure, Soul, and Memory (Quiet Constellation) */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* AUDIT */}
        <div
          onMouseEnter={() => setHoveredVerb("audit")}
          onMouseLeave={() => setHoveredVerb(null)}
          onClick={() => setActiveVerb("audit")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setActiveVerb("audit");
            }
          }}
          tabIndex={0}
          role="button"
          aria-label="Select AUDIT capability"
          className="p-5 rounded-2xl bg-paper-card border border-paper-border hover:border-atelier-indigo transition-all cursor-pointer flex flex-col justify-between h-36 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atelier-indigo"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-ink-muted uppercase">§ 06 // AUDIT</span>
            <span className="font-mono text-[9px] text-atelier-indigo font-bold">48H</span>
          </div>
          <span className="font-serif text-lg text-ink font-normal leading-snug">
            We find what <span className="italic text-accent-clay">isn&apos;t working</span>.
          </span>
          <span className="font-mono text-[9px] text-ink-muted">Code &bull; UX &bull; Security</span>
        </div>

        {/* RECOVER */}
        <div
          onMouseEnter={() => setHoveredVerb("recover")}
          onMouseLeave={() => setHoveredVerb(null)}
          onClick={() => setActiveVerb("recover")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setActiveVerb("recover");
            }
          }}
          tabIndex={0}
          role="button"
          aria-label="Select RECOVER capability"
          className="p-5 rounded-2xl bg-paper-card border border-paper-border hover:border-atelier-rose transition-all cursor-pointer flex flex-col justify-between h-36 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atelier-rose"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-ink-muted uppercase">§ 07 // RECOVER</span>
            <span className="font-mono text-[9px] text-accent-clay font-bold">DNA</span>
          </div>
          <span className="font-serif text-lg text-ink font-normal leading-snug">
            We recover what was <span className="italic text-accent-clay">lost</span>.
          </span>
          <span className="font-mono text-[9px] text-ink-muted">Deployments &bull; Repos</span>
        </div>

        {/* CARE */}
        <div
          onMouseEnter={() => setHoveredVerb("care")}
          onMouseLeave={() => setHoveredVerb(null)}
          onClick={() => setActiveVerb("care")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setActiveVerb("care");
            }
          }}
          tabIndex={0}
          role="button"
          aria-label="Select CARE capability"
          className="p-5 rounded-2xl bg-paper-card border border-paper-border hover:border-atelier-faded transition-all cursor-pointer flex flex-col justify-between h-36 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atelier-faded"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-ink-muted uppercase">§ 08 // CARE</span>
            <span className="font-mono text-[9px] text-emerald-700 font-bold">CALM</span>
          </div>
          <span className="font-serif text-lg text-ink font-normal leading-snug">
            Worth keeping <span className="italic text-atelier-faded">alive</span>.
          </span>
          <span className="font-mono text-[9px] text-ink-muted">Guardianship &bull; Hygiene</span>
        </div>

        {/* EXPERIMENT (The Alien Soul) */}
        <div
          onMouseEnter={() => setHoveredVerb("experiment")}
          onMouseLeave={() => setHoveredVerb(null)}
          onClick={() => setActiveVerb("experiment")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setActiveVerb("experiment");
            }
          }}
          tabIndex={0}
          role="button"
          aria-label="Select EXPERIMENT capability"
          className="p-5 rounded-2xl bg-atelier-indigo text-paper border border-atelier-indigo hover:shadow-md transition-all cursor-pointer flex flex-col justify-between h-36 relative overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atelier-brass"
        >
          {/* Subtle Celestial Sun Specimen Watermark */}
          <img
            src="/artifacts/atelier/celestial-sun.jpg"
            onError={(e) => {
              e.currentTarget.src = "/api/atelier-asset?name=celestial-sun";
            }}
            alt=""
            className="absolute -right-4 -bottom-4 w-28 h-28 object-cover rounded-full opacity-20 pointer-events-none group-hover:opacity-40 group-hover:scale-110 transition-all duration-500"
          />

          <div className="relative z-10 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase text-atelier-brass">§ 09 // EXPERIMENT</span>
            <span className="font-mono text-[10px] animate-pulse">✦</span>
          </div>
          <span className="relative z-10 font-serif text-lg font-light leading-snug">
            Things that <span className="italic text-atelier-brass">shouldn&apos;t exist</span> yet.
          </span>
          <span className="relative z-10 font-mono text-[9px] text-paper/70">Celestial &bull; Machine</span>
        </div>

        {/* ARCHIVE (The Museum Memory) */}
        <div
          onMouseEnter={() => setHoveredVerb("archive")}
          onMouseLeave={() => setHoveredVerb(null)}
          onClick={() => setActiveVerb("archive")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setActiveVerb("archive");
            }
          }}
          tabIndex={0}
          role="button"
          aria-label="Select ARCHIVE capability"
          className="p-5 rounded-2xl bg-paper-card border border-paper-border hover:border-atelier-brass transition-all cursor-pointer flex flex-col justify-between h-36 relative overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atelier-brass"
        >
          {/* Subtle Royal Carpet Filigree Watermark */}
          <img
            src="/artifacts/atelier/carpet-border.jpg"
            onError={(e) => {
              e.currentTarget.src = "/api/atelier-asset?name=carpet-border";
            }}
            alt=""
            className="absolute -right-6 -bottom-6 w-32 h-32 object-cover rounded-xl opacity-15 mix-blend-multiply pointer-events-none group-hover:opacity-35 group-hover:scale-105 transition-all duration-500"
          />

          <div className="relative z-10 flex items-center justify-between">
            <span className="font-mono text-[10px] text-ink-muted uppercase">§ 10 // ARCHIVE</span>
            <span className="font-mono text-[9px] text-atelier-brass font-bold">№ 014</span>
          </div>
          <span className="relative z-10 font-serif text-lg text-ink font-normal leading-snug">
            Things we made to <span className="italic text-atelier-brass">know</span>.
          </span>
          <span className="relative z-10 font-mono text-[9px] text-ink-muted">Specimens &bull; Tools</span>
        </div>
      </div>

      {/* Emergency Intake Back Door Modal */}
      <LatentFixModal isOpen={fixModalOpen} onClose={() => setFixModalOpen(false)} />
    </section>
  );
}

export default Capabilities;
