"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BotanicalBloom } from "./botanical-bloom";
import { CelestialSun } from "./celestial-sun";
import { LatentFixModal } from "./latent-fix-modal";
import { ArrowUpRight, Wrench, Sparkles, Shield, AlertOctagon, RotateCw } from "lucide-react";

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
          We build. We repair. <br />
          We evolve. We rescue. <br />
          <span className="italic font-normal text-ink-muted">
            We transform. We experiment.
          </span>
        </h2>

        <p className="font-sans text-base sm:text-lg text-ink-light font-light max-w-2xl leading-relaxed">
          Latent does not only create things from zero. Digital systems are living matter: they are born, they break, they evolve, they get abandoned, and they are transformed.
        </p>

        {/* Back Door: LATENT / FIX */}
        <div className="mt-8 flex items-center gap-4">
          <button
            onClick={() => setFixModalOpen(true)}
            className="px-4 py-2 rounded-full bg-paper-card border border-paper-border hover:border-atelier-indigo text-ink font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 group shadow-2xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
            <span className="group-hover:text-atelier-indigo">Something broken? → Send it.</span>
          </button>
          <span className="font-mono text-[11px] text-ink-muted hidden sm:inline">
            Direct intake to fix@latent.studio
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
              Things that should exist. Taking ideas from zero to their inevitable tactile existence: websites, brand worlds, living archives, and autonomous AI systems.
            </p>
          </div>

          <div className="pt-6 border-t border-current/20 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider opacity-75">
            <span>The reason Latent exists</span>
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
                ? "bg-paper text-ink border-red-900/60 shadow-sm ring-1 ring-red-900/30"
                : "bg-paper-card text-ink border-paper-border hover:border-ink/40"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                Door 01 // Restoration
              </span>
              <Wrench className="w-4 h-4 text-red-800" />
            </div>

            <div className="my-6 space-y-2">
              <h4 className="font-serif text-3xl font-light text-ink">REPAIR</h4>
              <p className="font-mono text-[11px] text-red-800 font-medium">
                We repair what shouldn&apos;t have broken.
              </p>
              <p className="font-sans text-xs text-ink-muted leading-relaxed">
                Precise architectural surgery on collapsed mobile layouts, broken forms, and failing deployments.
              </p>
            </div>

            <div className="pt-4 border-t border-paper-border font-mono text-[10px] text-ink-muted">
              Emergency Repair Available
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
                We evolve things that still have a future.
              </p>
              <p className="font-sans text-xs text-ink-muted leading-relaxed">
                Old to new. Static to interactive. Slow to fast. Generic to distinctive. Working across time.
              </p>
            </div>

            <div className="pt-4 border-t border-paper-border font-mono text-[10px] text-ink-muted">
              Modernization &bull; No Rebuild Required
            </div>
          </div>
        </div>
      </div>

      {/* 03 — The Superpowers: RESCUE & TRANSFORM */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 sm:mb-20">
        {/* SUPERPOWER 1: RESCUE */}
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
          className={`p-8 sm:p-10 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atelier-brass ${
            activeVerb === "rescue"
              ? "bg-paper text-ink border-atelier-brass shadow-sm ring-1 ring-atelier-brass/40"
              : "bg-paper-card text-ink border-paper-border hover:border-ink/40"
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-atelier-brass font-medium">
                03 // RESCUE
              </span>
              <span className="font-mono text-[10px] text-ink-muted uppercase">
                Takeover Capability
              </span>
            </div>

            <blockquote className="font-serif text-2xl sm:text-3xl font-light text-ink leading-snug mb-4">
              “Your developer disappeared. <br />
              Your agency left. <br />
              The code still exists. <br />
              <span className="italic font-normal text-atelier-indigo">
                We’ll take it from here.
              </span>”
            </blockquote>

            {/* System Status Docket */}
            <div className="my-4 p-3.5 rounded-xl bg-paper-subtle border border-paper-border font-mono text-[10px] space-y-1.5">
              <div className="flex justify-between border-b border-paper-border/60 pb-1">
                <span className="text-ink-muted">PROJECT</span>
                <span className="font-semibold text-ink">FOUND</span>
              </div>
              <div className="flex justify-between border-b border-paper-border/60 py-1">
                <span className="text-ink-muted">STATUS</span>
                <span className="text-amber-800 font-medium">UNFINISHED</span>
              </div>
              <div className="flex justify-between border-b border-paper-border/60 py-1">
                <span className="text-ink-muted">DOCUMENTATION</span>
                <span className="text-red-700">MISSING</span>
              </div>
              <div className="flex justify-between border-b border-paper-border/60 py-1">
                <span className="text-ink-muted">DEPLOYMENT</span>
                <span className="text-red-700">BROKEN</span>
              </div>
              <div className="flex justify-between border-b border-paper-border/60 py-1">
                <span className="text-ink-muted">OWNER</span>
                <span className="text-ink-muted">UNKNOWN</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-ink-muted">CODEBASE</span>
                <span className="text-emerald-700 font-semibold">RECOVERABLE BY LATENT</span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-ink-muted font-light leading-relaxed">
              Abandoned repositories, unfinished apps, undocumented setups, and untangled AI prototypes. Give us the artifact; we establish sanity and finish it.
            </p>
          </div>

          <div className="pt-5 mt-4 border-t border-paper-border flex items-center justify-between font-mono text-[11px]">
            <span className="text-ink-muted">Status: Operational Takeover</span>
            <span className="text-atelier-indigo font-medium">Initiate Rescue →</span>
          </div>
        </div>

        {/* SUPERPOWER 2: TRANSFORM (Visually Literal Metamorphosis) */}
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
          className={`p-8 sm:p-10 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atelier-indigo ${
            activeVerb === "transform"
              ? "bg-paper text-ink border-atelier-indigo shadow-sm ring-1 ring-atelier-indigo/40"
              : "bg-paper-card text-ink border-paper-border hover:border-ink/40"
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-atelier-indigo font-medium">
                04 // TRANSFORM
              </span>
              <span className="font-mono text-[10px] text-ink-muted uppercase">
                Substrate Mutation
              </span>
            </div>

            <h4 className="font-serif text-2xl sm:text-3xl font-light text-ink mb-2">
              We turn existing things into different things.
            </h4>

            {/* Stepped Sequence Indicator */}
            <div className="font-mono text-[9px] text-ink-muted uppercase tracking-wider py-1 border-b border-paper-border/50">
              CELLS &rarr; ROWS &rarr; STRUCTURE &rarr; LOGIC &rarr; INTERFACE &rarr; APPLICATION
            </div>

            {/* Visual Literal Metamorphosis: Spreadsheet -> UI Application */}
            <div className="my-5 p-4 rounded-xl bg-paper border border-paper-border space-y-3">
              <div className="flex items-center justify-between text-[10px] font-mono text-ink-muted border-b border-paper-border/60 pb-2">
                <span>RAW MATERIAL</span>
                <span className="text-atelier-indigo font-semibold">METAMORPHOSIS →</span>
                <span>FINISHED INTERFACE</span>
              </div>

              <div className="grid grid-cols-2 gap-4 items-center">
                {/* Left: Spreadsheet Rows */}
                <div className="space-y-1 font-mono text-[9px] text-ink-muted bg-paper-subtle p-2.5 rounded border border-paper-border">
                  <div className="flex justify-between border-b border-paper-border/40 pb-1">
                    <span>A1: 14,200</span>
                    <span>B1: 94.2%</span>
                  </div>
                  <div className="flex justify-between border-b border-paper-border/40 py-1">
                    <span>A2: 28,400</span>
                    <span>B2: 98.1%</span>
                  </div>
                  <div className="flex justify-between pt-1 text-ink">
                    <span>SUM: 42,600</span>
                    <span className="text-emerald-700">STABLE</span>
                  </div>
                </div>

                {/* Right: Modern Application Card */}
                <div className="p-3 rounded-lg bg-atelier-indigo text-paper text-[10px] font-sans space-y-2 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] uppercase tracking-wider text-atelier-brass">
                      Sovereign UI
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="font-serif text-sm font-light">
                    Autonomous Dispatch
                  </div>
                  <div className="h-1 w-full bg-paper/20 rounded-full overflow-hidden">
                    <div className="h-full bg-atelier-brass w-3/4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-paper-border font-mono text-[11px] text-ink-muted flex items-center justify-between">
            <span>Spreadsheet → App &bull; PDF → Workflow</span>
            <span className="text-atelier-indigo font-medium">Explore Mutations →</span>
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
          <span className="font-mono text-[10px] text-ink-muted uppercase">§ 06 // AUDIT</span>
          <span className="font-serif text-lg text-ink font-normal">We find what isn&apos;t working.</span>
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
          <span className="font-mono text-[10px] text-ink-muted uppercase">§ 07 // RECOVER</span>
          <span className="font-serif text-lg text-ink font-normal">We recover what was lost.</span>
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
          <span className="font-mono text-[10px] text-ink-muted uppercase">§ 08 // CARE</span>
          <span className="font-serif text-lg text-ink font-normal">Worth keeping alive.</span>
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
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase text-atelier-brass">§ 09 // EXPERIMENT</span>
            <span className="font-mono text-[10px] animate-pulse">✦</span>
          </div>
          <span className="font-serif text-lg font-light leading-snug">Things that shouldn&apos;t exist yet.</span>
          <span className="font-mono text-[9px] text-paper/70">Celestial &bull; Machine</span>
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
          className="p-5 rounded-2xl bg-paper-card border border-paper-border hover:border-atelier-brass transition-all cursor-pointer flex flex-col justify-between h-36 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atelier-brass"
        >
          <span className="font-mono text-[10px] text-ink-muted uppercase">§ 10 // ARCHIVE</span>
          <span className="font-serif text-lg text-ink font-normal">Things we made to know.</span>
          <span className="font-mono text-[9px] text-ink-muted">Specimens &bull; Tools</span>
        </div>
      </div>

      {/* Emergency Intake Back Door Modal */}
      <LatentFixModal isOpen={fixModalOpen} onClose={() => setFixModalOpen(false)} />
    </section>
  );
}
