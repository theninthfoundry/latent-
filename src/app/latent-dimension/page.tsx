"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Terminal,
  Layers,
  Sparkles,
  GitBranch,
  CheckCircle2,
  Cpu,
  Eye,
  Sliders,
  ExternalLink,
  Activity,
  Wrench,
  Maximize2,
  Check,
  Zap,
} from "lucide-react";
import LatentFormEngine, {
  LatentDimensionStage,
} from "@/components/latent-dimension/latent-form-engine";
import {
  StageControls,
  STAGE_DESCRIPTORS,
} from "@/components/latent-dimension/stage-controls";
import { LatentDimensionHero } from "@/components/latent-dimension/latent-dimension-hero";

export default function LatentDimensionPage() {
  const [currentStage, setCurrentStage] =
    useState<LatentDimensionStage>("hero_hold");
  const [progress, setProgress] = useState<number>(0.5);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showTelemetry, setShowTelemetry] = useState<boolean>(true);
  const [dimensionalRatio, setDimensionalRatio] = useState<number>(0.2);

  // Auto-play timeline loop
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 1) {
          const stageKeys: LatentDimensionStage[] = [
            "absence",
            "connection",
            "formation",
            "assembled",
            "hero_hold",
            "build",
            "repair",
            "evolve",
            "dimensional",
          ];
          const currentIndex = stageKeys.indexOf(currentStage);
          const nextIndex = (currentIndex + 1) % stageKeys.length;
          setCurrentStage(stageKeys[nextIndex]);
          return 0;
        }
        return prev + 0.025;
      });
    }, 70);

    return () => clearInterval(interval);
  }, [isPlaying, currentStage]);

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-ink selection:text-paper font-sans">
      {/* Precision Isolation Notice Ribbon */}
      <aside
        aria-label="Isolation Notice"
        className="bg-ink text-paper text-xs font-mono py-2 px-4 sm:px-8 border-b border-paper-border flex flex-wrap items-center justify-between gap-2.5"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="tracking-wider uppercase font-semibold text-[11px]">
            LATENT LABS // EXPERIMENTAL 3D MOTION SUITE
          </span>
          <span className="hidden md:inline text-paper/60 text-[11px]">
            &bull; Isolated &amp; Decoupled from Main Page (src/app/page.tsx untouched)
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <span className="text-paper/70 font-mono">
            STATION: <code className="text-paper">/latent-dimension</code>
          </span>
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-paper underline underline-offset-2 hover:text-paper/80"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Return to Live Main</span>
          </Link>
        </div>
      </aside>

      {/* Floating Laboratory Nav */}
      <nav
        aria-label="Laboratory Navigation"
        className="sticky top-0 z-40 bg-paper/90 backdrop-blur-md border-b border-paper-border py-3 px-4 sm:px-8 lg:px-12"
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-baseline gap-2.5">
            <Link
              href="/"
              className="font-serif text-lg font-normal tracking-tight text-ink hover:opacity-80 transition-opacity"
            >
              LATENT
            </Link>
            <span className="text-paper-border font-mono text-sm">/</span>
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
              THE LATENT DIMENSION
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-xs font-mono">
            <a
              href="#director-workbench"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-ink-secondary hover:text-ink border border-paper-border hover:border-ink transition-colors"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Workbench</span>
            </a>

            <a
              href="#transformation-matrix"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-ink-secondary hover:text-ink border border-paper-border hover:border-ink transition-colors"
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Transformations</span>
            </a>

            <a
              href="#project-artifacts"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-ink-secondary hover:text-ink border border-paper-border hover:border-ink transition-colors"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Artifacts</span>
            </a>

            <a
              href="#merge-plan"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-ink text-paper hover:bg-ink/90 transition-colors"
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>Merge Plan</span>
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* PASS 1 & 2: ELEVATED HERO WITH TIGHT SPATIAL LAYOUT */}
        <LatentDimensionHero
          stage={currentStage}
          progress={progress}
          onStageChange={(stg) => {
            setCurrentStage(stg);
            setIsPlaying(false);
          }}
        />

        {/* PASS 3: DENSE DIRECTOR'S WORKBENCH (NO WASTED PADDING) */}
        <section
          id="director-workbench"
          className="py-10 sm:py-16 border-b border-paper-border bg-paper-muted/15"
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-paper-border pb-4">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-ink-secondary">
                  <Cpu className="w-3 h-3 text-ink" />
                  <span>PASS 3 // FULL MOTION &amp; SCROLL TIMELINE CHOREOGRAPHY</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-4xl font-normal tracking-tight text-ink">
                  The Director&apos;s Workbench
                </h2>
              </div>
              <p className="font-sans text-xs sm:text-sm text-ink-secondary max-w-lg leading-relaxed">
                Scrub, switch, or auto-run through all 9 choreographed shots. The sculpture remains
                ONE persistent mathematical system—never destroying or swapping models between sections.
              </p>
            </div>

            {/* Two-Column Workbench: Left Controls Dock, Right Real-Time Viewport */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left Column: Stage Controls & Telemetry */}
              <div className="lg:col-span-5 space-y-4">
                <StageControls
                  currentStage={currentStage}
                  progress={progress}
                  onSelectStage={(stage) => {
                    setCurrentStage(stage);
                    setIsPlaying(false);
                  }}
                  onProgressChange={(val) => {
                    setProgress(val);
                    setIsPlaying(false);
                  }}
                  isPlaying={isPlaying}
                  onTogglePlay={() => setIsPlaying(!isPlaying)}
                  onReset={() => {
                    setCurrentStage("hero_hold");
                    setProgress(0.5);
                    setIsPlaying(false);
                  }}
                  showTelemetry={showTelemetry}
                  onToggleTelemetry={() => setShowTelemetry(!showTelemetry)}
                />

                {/* Mathematical Specs Strip */}
                <div className="p-4 rounded-lg border border-paper-border bg-paper space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between text-ink font-medium border-b border-paper-border/60 pb-2">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-ink" />
                      SYSTEM ARCHITECTURE GUARANTEES
                    </span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">
                      ACTIVE
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-ink-secondary pt-1">
                    <div>
                      <span className="text-ink-muted block text-[10px]">DEPENDENCIES:</span>
                      <span className="font-medium text-ink">0 Added (0 KB Bloat)</span>
                    </div>
                    <div>
                      <span className="text-ink-muted block text-[10px]">FRAME BUDGET:</span>
                      <span className="font-medium text-ink">&lt; 4.2ms / Frame</span>
                    </div>
                    <div>
                      <span className="text-ink-muted block text-[10px]">RENDER METHOD:</span>
                      <span className="font-medium text-ink">Analytical Projection</span>
                    </div>
                    <div>
                      <span className="text-ink-muted block text-[10px]">SCROLL BEHAVIOR:</span>
                      <span className="font-medium text-ink">100% Reversible</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Precision Viewport with Viewfinder Overlay */}
              <div className="lg:col-span-7 bg-paper border border-paper-border rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center relative shadow-subtle">
                <div className="w-full flex items-center justify-between border-b border-paper-border/70 pb-2.5 mb-3 text-xs font-mono text-ink-muted">
                  <span className="flex items-center gap-1.5 text-ink font-medium">
                    <Eye className="w-3.5 h-3.5 text-ink" />
                    <span>VIEWPORT: LATENT_FORM_01 ({currentStage.toUpperCase()})</span>
                  </span>
                  <span>PROGRESSION: {Math.round(progress * 100)}%</span>
                </div>

                <div className="w-full aspect-square max-w-[500px] flex items-center justify-center bg-paper-muted/20 rounded relative overflow-hidden">
                  <LatentFormEngine
                    stage={currentStage}
                    progress={progress}
                    interactive={true}
                    showTelemetry={showTelemetry}
                    className="w-full h-full max-w-[500px] max-h-[500px]"
                  />
                </div>

                <div className="w-full flex items-center justify-between font-mono text-[11px] text-ink-muted pt-3 border-t border-paper-border/70 mt-3">
                  <span>ORBIT: DRAG ANYWHERE ON CANVAS</span>
                  <span>PARALLAX: POINTER OFFSET INFLUENCE</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2: THE 3-STAGE TRANSFORMATION (BUILD / REPAIR / EVOLVE) */}
        <section
          id="transformation-matrix"
          className="py-12 sm:py-16 border-b border-paper-border bg-paper"
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-paper-border pb-4">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-ink-secondary">
                  <Zap className="w-3 h-3 text-ink" />
                  <span>THE CONTINUOUS TRIAD // CORE CAPABILITIES NARRATIVE</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-4xl font-normal tracking-tight text-ink">
                  BUILD &bull; REPAIR &bull; EVOLVE
                </h2>
              </div>
              <p className="font-sans text-xs sm:text-sm text-ink-secondary max-w-lg leading-relaxed">
                Rather than introducing generic service cards, LATENT utilizes one persistent 3D
                system that transforms state as the visitor scrolls through capabilities.
              </p>
            </div>

            {/* 3-Column Studio Specimen Spread */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              {/* BUILD Panel */}
              <div className="p-5 rounded-lg border border-paper-border bg-paper-muted/20 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted border-b border-paper-border/60 pb-2">
                    <span>STAGE 01</span>
                    <span className="font-semibold text-ink">CREATION AS ASSEMBLY</span>
                  </div>
                  <h3 className="font-serif text-xl text-ink font-normal">
                    BUILD — From Nothing to Structure
                  </h3>
                  <p className="text-xs font-sans text-ink-secondary leading-relaxed">
                    Components separate into an intentional exploded architectural view. Thin
                    structural connections reveal the internal engineering before assembling
                    into a coherent product.
                  </p>
                  <div className="space-y-1.5 pt-2 border-t border-paper-border/60 text-xs font-mono text-ink-secondary">
                    <div className="text-[10px] text-ink-muted uppercase">REAL PRACTICE DELIVERABLES:</div>
                    <div>&bull; Custom WebGL &amp; Digital Products</div>
                    <div>&bull; AI-Powered Production Software</div>
                    <div>&bull; Internal Operational Tooling</div>
                    <div>&bull; First-Principles Engineering</div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setCurrentStage("build");
                    setProgress(0.65);
                    const el = document.getElementById("director-workbench");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full py-2 px-3 rounded bg-ink text-paper text-xs font-mono uppercase tracking-wider hover:bg-ink/90 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Preview BUILD State</span>
                </button>
              </div>

              {/* REPAIR Panel */}
              <div className="p-5 rounded-lg border border-paper-border bg-paper-muted/20 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted border-b border-paper-border/60 pb-2">
                    <span>STAGE 02</span>
                    <span className="font-semibold text-ink">SYSTEM RECOVERY</span>
                  </div>
                  <h3 className="font-serif text-xl text-ink font-normal">
                    REPAIR — Find the Broken Connection
                  </h3>
                  <p className="text-xs font-sans text-ink-secondary leading-relaxed">
                    A visible structural fault develops: one secondary connection isolates and drifts.
                    The system identifies the fault, isolates the affected component, and securely
                    reconnects without crashing.
                  </p>
                  <div className="space-y-1.5 pt-2 border-t border-paper-border/60 text-xs font-mono text-ink-secondary">
                    <div className="text-[10px] text-ink-muted uppercase">REAL PRACTICE DELIVERABLES:</div>
                    <div>&bull; Forensic Software Debugging</div>
                    <div>&bull; Performance &amp; Memory Investigation</div>
                    <div>&bull; Security Vulnerability Neutralization</div>
                    <div>&bull; Non-Destructive Refactoring</div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setCurrentStage("repair");
                    setProgress(0.4);
                    const el = document.getElementById("director-workbench");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full py-2 px-3 rounded bg-ink text-paper text-xs font-mono uppercase tracking-wider hover:bg-ink/90 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Wrench className="w-3.5 h-3.5" />
                  <span>Preview REPAIR State</span>
                </button>
              </div>

              {/* EVOLVE Panel */}
              <div className="p-5 rounded-lg border border-paper-border bg-paper-muted/20 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted border-b border-paper-border/60 pb-2">
                    <span>STAGE 03</span>
                    <span className="font-semibold text-ink">EXPANDING CAPACITY</span>
                  </div>
                  <h3 className="font-serif text-xl text-ink font-normal">
                    EVOLVE — The System Expands
                  </h3>
                  <p className="text-xs font-sans text-ink-secondary leading-relaxed">
                    The core object remains fully recognizable, but new orbital capability nodes
                    emerge. The system acquires higher sophistication without sacrificing foundational
                    stability.
                  </p>
                  <div className="space-y-1.5 pt-2 border-t border-paper-border/60 text-xs font-mono text-ink-secondary">
                    <div className="text-[10px] text-ink-muted uppercase">REAL PRACTICE DELIVERABLES:</div>
                    <div>&bull; Autonomous Agent Integration</div>
                    <div>&bull; Continuous Pipeline Automation</div>
                    <div>&bull; Dynamic Architectural Upgrades</div>
                    <div>&bull; Multi-Cloud Data Scaling</div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setCurrentStage("evolve");
                    setProgress(0.75);
                    const el = document.getElementById("director-workbench");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full py-2 px-3 rounded bg-ink text-paper text-xs font-mono uppercase tracking-wider hover:bg-ink/90 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Preview EVOLVE State</span>
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3: DIMENSIONAL TRANSITION INTERACTIVE PLAYGROUND */}
        <section
          id="dimensional-transition"
          className="py-12 sm:py-16 border-b border-paper-border bg-paper-muted/15"
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-paper-border pb-4">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-ink-secondary">
                  <Layers className="w-3 h-3 text-ink" />
                  <span>THE DIMENSIONAL TRANSITION // 3D TO EDITORIAL PLANE</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-4xl font-normal tracking-tight text-ink">
                  When Sculpture Becomes Editorial Design
                </h2>
              </div>
              <p className="font-sans text-xs sm:text-sm text-ink-secondary max-w-lg leading-relaxed">
                As the sculpture nears the camera, its surfaces compress into 2D planes, aligning with
                the typographic grid. Use the interactive morph slider below to test the transition.
              </p>
            </div>

            {/* Interactive Morph Slider Bar */}
            <div className="p-4 rounded-lg border border-paper-border bg-paper space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-ink-muted">
                <span>INTERACTIVE FLATTENING SLIDER: 3D VOLUME &larr;&rarr; 2D POSTER</span>
                <span className="font-semibold text-ink">
                  MORPH: {Math.round(dimensionalRatio * 100)}%
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={dimensionalRatio}
                onChange={(e) => setDimensionalRatio(parseFloat(e.target.value))}
                className="w-full accent-ink cursor-pointer bg-paper-border h-2 rounded-lg appearance-none"
                aria-label="Morph ratio between 3D volume and 2D editorial plane"
              />
            </div>

            {/* Live Dual Comparison: 3D Projection into Swiss Typographic Poster */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              
              {/* 3D Planar Form */}
              <div className="p-6 rounded-lg border border-paper-border bg-paper flex flex-col items-center justify-center relative shadow-xs">
                <div className="w-full flex items-center justify-between text-[11px] font-mono text-ink-muted border-b border-paper-border/60 pb-2 mb-4">
                  <span>3D SPATIAL PROJECTION</span>
                  <span>STAGE: DIMENSIONAL</span>
                </div>
                <div className="w-full aspect-square max-w-[380px] flex items-center justify-center">
                  <LatentFormEngine
                    stage="dimensional"
                    progress={dimensionalRatio}
                    interactive={true}
                    showTelemetry={false}
                    className="w-full h-full max-w-[380px] max-h-[380px]"
                  />
                </div>
                <p className="font-mono text-[10px] text-ink-muted mt-2">
                  Z-depth compression: {(1 - dimensionalRatio * 0.8).toFixed(2)}x
                </p>
              </div>

              {/* 2D Editorial Typographic Result */}
              <div className="p-6 rounded-lg border border-paper-border bg-[#fbf9f4] flex flex-col justify-between relative shadow-xs">
                <div className="w-full flex items-center justify-between text-[11px] font-mono text-ink-muted border-b border-paper-border/60 pb-2 mb-4">
                  <span>RESOLVED 2D EDITORIAL GRID</span>
                  <span>SWISS COMPOSITION</span>
                </div>

                <div className="space-y-4 my-auto">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-ink-secondary">
                    ISSUE NO. 04 // WORKSHOP ARCHIVE
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-ink font-normal leading-tight">
                    The boundary between an idea, a structure, and a product dissolves.
                  </h3>
                  <p className="font-sans text-xs text-ink-secondary leading-relaxed">
                    Most agency sites use 3D as floating decoration around text. LATENT makes the
                    geometry itself become the typography grid, ensuring every spatial coordinate
                    has an architectural purpose.
                  </p>
                </div>

                <div className="pt-4 border-t border-paper-border/60 flex items-center justify-between text-[11px] font-mono text-ink-muted">
                  <span>DOM ACCESSIBLE HTML</span>
                  <span className="text-emerald-700 font-semibold">&check; ZERO TEXT IN WEBGL</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 4: THE PROJECT ARTIFACTS STUDIO SPREAD */}
        <section
          id="project-artifacts"
          className="py-12 sm:py-16 border-b border-paper-border bg-paper"
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-paper-border pb-4">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-ink-secondary">
                  <Layers className="w-3 h-3 text-ink" />
                  <span>THE WORK ARCHIVE // LIVING SYSTEMS REPRESENTATION</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-4xl font-normal tracking-tight text-ink">
                  Bespoke Project Artifacts
                </h2>
              </div>
              <p className="font-sans text-xs sm:text-sm text-ink-secondary max-w-lg leading-relaxed">
                Rather than generic portfolio thumbnails, each studio project has a distinct
                visual representation sharing the same underlying material grammar.
              </p>
            </div>

            {/* 4-Project Architecture Spread */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* OTARU */}
              <div className="p-4 rounded-lg border border-paper-border bg-paper-muted/20 space-y-3 hover:border-ink transition-colors">
                <div className="h-32 rounded bg-gradient-to-br from-[#2a2926] to-[#151412] p-3 flex flex-col justify-between text-paper font-mono text-[10px]">
                  <span>SPECIMEN // OTARU</span>
                  <span className="text-paper/60">MATERIAL &amp; TACTILE STUDY</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-ink-muted uppercase block">
                    PROJECT 01
                  </span>
                  <h4 className="font-serif text-lg font-medium text-ink">OTARU</h4>
                  <p className="text-xs text-ink-secondary mt-1 leading-snug">
                    Tactile material physics and high-precision digital commerce experience.
                  </p>
                </div>
                <div className="text-[10px] font-mono text-ink-muted border-t border-paper-border/60 pt-2">
                  INTERACTION: LIGHT &amp; SURFACE ANGLE REVEAL
                </div>
              </div>

              {/* SOLOMON */}
              <div className="p-4 rounded-lg border border-paper-border bg-paper-muted/20 space-y-3 hover:border-ink transition-colors">
                <div className="h-32 rounded bg-paper-muted p-3 flex flex-col justify-between border border-paper-border font-mono text-[10px] text-ink relative overflow-hidden">
                  <div className="w-20 h-20 rounded-full border border-ink/30 absolute -right-4 -bottom-4" />
                  <div className="w-12 h-12 rounded-full border border-ink/40 absolute -right-0 -bottom-0" />
                  <span>SPECIMEN // SOLOMON</span>
                  <span className="text-ink-muted">CONCENTRIC COGNITIVE MATRIX</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-ink-muted uppercase block">
                    PROJECT 02
                  </span>
                  <h4 className="font-serif text-lg font-medium text-ink">SOLOMON</h4>
                  <p className="text-xs text-ink-secondary mt-1 leading-snug">
                    Intelligent system engine with multi-layered neural query coordination.
                  </p>
                </div>
                <div className="text-[10px] font-mono text-ink-muted border-t border-paper-border/60 pt-2">
                  INTERACTION: ORBITAL RING SELECTION
                </div>
              </div>

              {/* SATQUERY */}
              <div className="p-4 rounded-lg border border-paper-border bg-paper-muted/20 space-y-3 hover:border-ink transition-colors">
                <div className="h-32 rounded bg-gradient-to-br from-[#14283e] to-[#0c1826] p-3 flex flex-col justify-between text-paper font-mono text-[10px]">
                  <span>SPECIMEN // SATQUERY</span>
                  <span className="text-paper/60">GEOGRAPHIC STRATA</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-ink-muted uppercase block">
                    PROJECT 03
                  </span>
                  <h4 className="font-serif text-lg font-medium text-ink">SATQUERY</h4>
                  <p className="text-xs text-ink-secondary mt-1 leading-snug">
                    Spatial satellite data infrastructure and terrain telemetry visualization.
                  </p>
                </div>
                <div className="text-[10px] font-mono text-ink-muted border-t border-paper-border/60 pt-2">
                  INTERACTION: DEPTH STRATA ELEVATION
                </div>
              </div>

              {/* DEVSTATE */}
              <div className="p-4 rounded-lg border border-paper-border bg-paper-muted/20 space-y-3 hover:border-ink transition-colors">
                <div className="h-32 rounded bg-paper-muted p-3 flex flex-col justify-between border border-paper-border font-mono text-[10px] text-ink relative">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    <span>SPECIMEN // DEVSTATE</span>
                  </div>
                  <span className="text-ink-muted">NETWORKED DEPENDENCY GRAPH</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-ink-muted uppercase block">
                    PROJECT 04
                  </span>
                  <h4 className="font-serif text-lg font-medium text-ink">DEVSTATE</h4>
                  <p className="text-xs text-ink-secondary mt-1 leading-snug">
                    Distributed developer systems monitoring with automated fault isolation.
                  </p>
                </div>
                <div className="text-[10px] font-mono text-ink-muted border-t border-paper-border/60 pt-2">
                  INTERACTION: NODE TOPOLOGY EXPANSION
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 5: MERGE VERIFICATION & ZERO-RISK PLAN */}
        <section
          id="merge-plan"
          className="py-12 sm:py-16 border-b border-paper-border bg-paper-muted/15"
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-6">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-paper-border pb-4">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-ink-secondary">
                  <GitBranch className="w-3 h-3 text-ink" />
                  <span>INTEGRATION ARCHITECTURE // STRICT ISOLATION</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-4xl font-normal tracking-tight text-ink">
                  Safe &amp; Ready for Your Review
                </h2>
              </div>
              <span className="text-xs font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded">
                STATUS: READY FOR EVALUATION
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* Left: Verification Checklist */}
              <div className="p-5 rounded-lg border border-paper-border bg-paper space-y-3 text-xs font-mono">
                <h4 className="font-serif text-base text-ink font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Technical Verification Matrix</span>
                </h4>
                <ul className="space-y-2 text-ink-secondary text-[11px]">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Separate Files: All 3D code isolated in <code>src/components/latent-dimension/</code></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Main Untouched: <code>src/app/page.tsx</code> retains current production code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Zero External Dependencies: Custom TypeScript 3D projection engine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Continuous Narrative: One master timeline coordinates all 9 stages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Editorial Discipline: Preserved paper-and-ink palette &amp; typography</span>
                  </li>
                </ul>
              </div>

              {/* Right: Git Commit & Merge Procedure */}
              <div className="p-5 rounded-lg border border-paper-border bg-ink text-paper space-y-3 font-mono text-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-paper/70 pb-2 border-b border-paper/20 mb-2">
                    <span>GIT COMMIT READY</span>
                    <span className="text-[10px] bg-paper/20 px-2 py-0.5 rounded">READY</span>
                  </div>
                  <p className="text-paper/80 font-sans text-xs leading-relaxed">
                    Once you inspect and approve the animation, we can merge <code>LatentDimensionHero</code>
                    directly into <code>src/app/page.tsx</code> or replace the hero in one clean step.
                  </p>
                </div>

                <div className="bg-paper/10 p-3 rounded text-[11px] space-y-1 select-all font-mono">
                  <div className="text-emerald-300"># Current commit files to stage:</div>
                  <div>git add src/components/latent-dimension/ src/app/latent-dimension/</div>
                  <div className="text-emerald-300 pt-1"># Commit with description:</div>
                  <div>git commit -m &quot;feat(latent-dimension): add isolated 3D sculpture and motion suite&quot;</div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 6: THE CLOSING SCENE (WHAT ARE YOU TRYING TO MAKE EXIST?) */}
        <section className="py-16 sm:py-24 bg-paper text-ink">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted block">
              FINAL EQUILIBRIUM // INVITATION
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight max-w-3xl mx-auto leading-tight">
              What are you trying to make <span className="italic font-light">exist?</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-ink-secondary max-w-lg mx-auto leading-relaxed">
              We partner with founders and engineering studios to design, engineer, and ship
              software that feels inevitable.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-ink text-paper text-xs font-mono uppercase tracking-wider font-medium hover:bg-ink/90 transition-all shadow-sm"
              >
                <span>Initiate Dialogue</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-5 py-3 rounded border border-paper-border text-ink text-xs font-mono uppercase tracking-wider hover:border-ink transition-colors"
              >
                <span>View Full Production Site</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Laboratory Technical Footer */}
      <footer className="border-t border-paper-border py-6 px-4 sm:px-8 lg:px-12 text-xs font-mono text-ink-muted bg-paper-muted/20">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif text-ink text-sm font-medium">LATENT LABS</span>
            <span>// THE LATENT DIMENSION PROTOTYPE</span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-ink transition-colors">
              Main Site
            </Link>
            <span>&bull;</span>
            <a
              href="https://github.com/theninthfoundry/latent-"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-ink transition-colors"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
