"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
  RotateCcw,
  Sliders,
  Cpu,
  Layers,
  Check,
} from "lucide-react";
import LatentFormEngine, { LatentDimensionStage } from "./latent-form-engine";

interface LatentDimensionHeroProps {
  stage?: LatentDimensionStage;
  progress?: number;
  onStageChange?: (stage: LatentDimensionStage) => void;
}

export function LatentDimensionHero({
  stage: initialStage = "hero_hold",
  progress: initialProgress = 0.5,
  onStageChange,
}: LatentDimensionHeroProps) {
  const [activeStage, setActiveStage] =
    useState<LatentDimensionStage>(initialStage);
  const [activeProgress, setActiveProgress] = useState<number>(initialProgress);
  const [cameraKey, setCameraKey] = useState<number>(0);

  const handleStageSelect = (stg: LatentDimensionStage, prog = 0.5) => {
    setActiveStage(stg);
    setActiveProgress(prog);
    if (onStageChange) onStageChange(stg);
  };

  const quickStages: { id: LatentDimensionStage; label: string; prog: number }[] =
    [
      { id: "hero_hold", label: "01. Core Equilibrium", prog: 0.5 },
      { id: "build", label: "02. Exploded (Build)", prog: 0.6 },
      { id: "repair", label: "03. Fault & Repair", prog: 0.35 },
      { id: "evolve", label: "04. Orbital Evolve", prog: 0.8 },
      { id: "dimensional", label: "05. 2D Editorial", prog: 0.9 },
    ];

  return (
    <section className="relative min-h-[94vh] flex flex-col justify-between pt-20 sm:pt-28 pb-8 overflow-hidden bg-paper text-ink border-b border-paper-border">
      {/* Precision Blueprint Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(26,25,23,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(26,25,23,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Top Laboratory Metadata Header Bar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-paper-border pb-3 text-[11px] font-mono text-ink-muted">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-ink font-semibold">
              <span className="w-2 h-2 rounded-full bg-ink animate-pulse" />
              SPECIMEN // LATENT_FORM_01
            </span>
            <span className="text-paper-border">|</span>
            <span className="hidden md:inline">SYSTEM: POLAR DUAL-AXIS GIMBAL</span>
            <span className="text-paper-border hidden md:inline">|</span>
            <span className="hidden lg:inline text-ink-secondary">
              RIG: 22 VERTICES &bull; 28 EDGES &bull; 14 FACES
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-[10px]">
              CALIBRATION: NOMINAL
            </span>
            <span className="text-paper-border hidden sm:inline">|</span>
            <span className="px-2 py-0.5 rounded bg-paper-muted border border-paper-border text-ink font-medium">
              MODE: {activeStage.toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      {/* Main Hero Split View: Compact, High-Density Editorial Layout */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full my-auto py-6 sm:py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Authentic Headline + Dense Studio Index */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-paper-muted/80 border border-paper-border text-[11px] font-mono uppercase tracking-widest text-ink">
                <Sparkles className="w-3 h-3 text-ink" />
                <span>THE LATENT DIMENSION // 3D ARCHITECTURE</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-ink leading-[1.04]">
                We make new things feel <span className="italic font-light">inevitable.</span>
              </h1>

              <p className="font-sans text-sm sm:text-base text-ink-secondary max-w-xl leading-relaxed">
                An idea exists before its final form. LATENT makes that form possible.
                Suspended in architectural space, this sculpture is not decoration—it is
                our living identity: graphite precision, smoked glass depth, and
                structural tension resolving into a coherent system.
              </p>
            </div>

            {/* Studio Capabilities Matrix: Fills Space with High-Value Editorial Context */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <div className="p-3 rounded border border-paper-border bg-paper-muted/25 hover:bg-paper-muted/40 transition-colors">
                <span className="font-mono text-[10px] text-ink-muted uppercase block">
                  01 // SPATIAL SYSTEMS
                </span>
                <span className="font-sans text-xs font-semibold text-ink block mt-0.5">
                  WebGL &amp; 3D Interactions
                </span>
                <p className="text-[11px] text-ink-secondary mt-1 leading-snug">
                  Zero generic templates. Bespoke procedural forms built from first principles.
                </p>
              </div>

              <div className="p-3 rounded border border-paper-border bg-paper-muted/25 hover:bg-paper-muted/40 transition-colors">
                <span className="font-mono text-[10px] text-ink-muted uppercase block">
                  02 // INTELLIGENT SOFTWARE
                </span>
                <span className="font-sans text-xs font-semibold text-ink block mt-0.5">
                  AI &amp; Internal Tools
                </span>
                <p className="text-[11px] text-ink-secondary mt-1 leading-snug">
                  Complex logic orchestrated into calm, tactile, reliable interfaces.
                </p>
              </div>

              <div className="p-3 rounded border border-paper-border bg-paper-muted/25 hover:bg-paper-muted/40 transition-colors">
                <span className="font-mono text-[10px] text-ink-muted uppercase block">
                  03 // SYSTEM RECOVERY
                </span>
                <span className="font-sans text-xs font-semibold text-ink block mt-0.5">
                  Diagnostic &amp; Repair
                </span>
                <p className="text-[11px] text-ink-secondary mt-1 leading-snug">
                  Isolate broken dependencies and stabilize legacy code without rebuilds.
                </p>
              </div>

              <div className="p-3 rounded border border-paper-border bg-paper-muted/25 hover:bg-paper-muted/40 transition-colors">
                <span className="font-mono text-[10px] text-ink-muted uppercase block">
                  04 // EDITORIAL RESTRAINT
                </span>
                <span className="font-sans text-xs font-semibold text-ink block mt-0.5">
                  Swiss Typography &amp; Ink
                </span>
                <p className="text-[11px] text-ink-secondary mt-1 leading-snug">
                  Warm paper aesthetics with razor-sharp computational hierarchy.
                </p>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#director-workbench"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-ink text-paper text-xs font-mono uppercase tracking-wider font-medium hover:bg-ink/90 transition-all shadow-sm"
              >
                <span>Director&apos;s Workbench</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#transformation-matrix"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded border border-paper-border text-ink-secondary hover:text-ink hover:border-ink text-xs font-mono uppercase tracking-wider transition-colors"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>BUILD / REPAIR / EVOLVE</span>
              </a>

              <Link
                href="/"
                className="text-xs font-mono text-ink-muted underline underline-offset-4 hover:text-ink ml-auto"
              >
                Back to Live Main
              </Link>
            </div>
          </div>

          {/* Right Column: Architectural 3D Viewport with Framing Reticles */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            
            {/* Viewport Frame with Optical Corner Markers */}
            <div className="relative w-full max-w-[560px] bg-paper border border-paper-border/80 rounded-lg p-3 sm:p-4 shadow-subtle">
              
              {/* Corner Registration Marks */}
              <div className="absolute top-2 left-2 font-mono text-[9px] text-ink-muted/50 select-none">
                + [0,0]
              </div>
              <div className="absolute top-2 right-2 font-mono text-[9px] text-ink-muted/50 select-none">
                [1440,0] +
              </div>
              <div className="absolute bottom-2 left-2 font-mono text-[9px] text-ink-muted/50 select-none">
                + [0,900]
              </div>
              <div className="absolute bottom-2 right-2 font-mono text-[9px] text-ink-muted/50 select-none">
                [1440,900] +
              </div>

              {/* Viewport Header Bar */}
              <div className="flex items-center justify-between border-b border-paper-border/60 pb-2 mb-2 px-1 text-[10px] font-mono text-ink-muted">
                <span className="flex items-center gap-1.5 text-ink">
                  <Cpu className="w-3 h-3" />
                  <span>RAYTRACED PROJECTION RIG</span>
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setCameraKey((k) => k + 1)}
                    className="inline-flex items-center gap-1 hover:text-ink transition-colors"
                    title="Reset camera angles"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>RESET</span>
                  </button>
                  <span>&bull;</span>
                  <span>ZOOM: 135%</span>
                </div>
              </div>

              {/* 3D Canvas Viewport */}
              <div className="relative w-full aspect-square max-w-[520px] max-h-[460px] mx-auto flex items-center justify-center overflow-hidden rounded bg-paper-muted/20">
                <LatentFormEngine
                  key={cameraKey}
                  stage={activeStage}
                  progress={activeProgress}
                  interactive={true}
                  showTelemetry={true}
                  className="w-full h-full max-w-[520px] max-h-[460px]"
                />

                {/* Real-Time Specimen Leader Annotations */}
                <div className="absolute top-4 left-4 pointer-events-none hidden sm:block font-mono text-[10px] text-ink-secondary bg-paper/90 px-2 py-1 rounded border border-paper-border/80 shadow-xs">
                  <span className="text-ink font-semibold">CORE_A:</span> Monolithic Graphite
                </div>
                <div className="absolute bottom-4 right-4 pointer-events-none hidden sm:block font-mono text-[10px] text-ink-secondary bg-paper/90 px-2 py-1 rounded border border-paper-border/80 shadow-xs">
                  <span className="text-ink font-semibold">SHELL_B:</span> Smoked Silica
                </div>
              </div>

              {/* Interactive Quick-Stage Switcher Bar */}
              <div className="mt-3 pt-2.5 border-t border-paper-border/70 space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono text-ink-muted px-1">
                  <span>QUICK STAGE TRIGGER</span>
                  <span>DRAG TO ROTATE &bull; HOVER TO TILT</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
                  {quickStages.map((qs) => {
                    const isSelected = activeStage === qs.id;
                    return (
                      <button
                        key={qs.id}
                        type="button"
                        onClick={() => handleStageSelect(qs.id, qs.prog)}
                        className={`px-2 py-1.5 rounded text-[10px] font-mono tracking-tight flex items-center justify-center gap-1 transition-all ${
                          isSelected
                            ? "bg-ink text-paper font-semibold shadow-xs"
                            : "bg-paper-muted/40 hover:bg-paper-muted text-ink-secondary border border-paper-border/50"
                        }`}
                      >
                        {isSelected && <Check className="w-2.5 h-2.5 shrink-0" />}
                        <span className="truncate">{qs.label.split(". ")[1]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Tactical Navigation Micro-Caption */}
            <div className="font-mono text-[10px] text-ink-muted mt-2 tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-ink/40" />
              <span>MATHEMATICAL SPATIAL ENGINE // NO THREE.JS DEPENDENCY</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Technical Spec Sheet: Densely Fills Space with Architectural Intelligence */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full relative z-10 pt-2">
        <div className="border-t border-paper-border pt-3 grid grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          
          <div className="p-2.5 rounded border border-paper-border/60 bg-paper-muted/15 flex items-start gap-2.5">
            <div className="w-6 h-6 rounded bg-[#2a2926] shrink-0 border border-paper-border mt-0.5" />
            <div>
              <span className="font-mono text-[10px] text-ink-muted uppercase block">
                01 // GRAPHITE MONOLITH
              </span>
              <span className="font-sans font-medium text-ink block text-xs">
                Light Absorption 94%
              </span>
              <span className="font-mono text-[10px] text-ink-secondary">
                Brushed micro-roughness
              </span>
            </div>
          </div>

          <div className="p-2.5 rounded border border-paper-border/60 bg-paper-muted/15 flex items-start gap-2.5">
            <div className="w-6 h-6 rounded bg-[#14283e] shrink-0 border border-paper-border mt-0.5" />
            <div>
              <span className="font-mono text-[10px] text-ink-muted uppercase block">
                02 // SMOKED SILICA
              </span>
              <span className="font-sans font-medium text-ink block text-xs">
                Refraction Index 1.52
              </span>
              <span className="font-mono text-[10px] text-ink-secondary">
                Edge specular glint
              </span>
            </div>
          </div>

          <div className="p-2.5 rounded border border-paper-border/60 bg-paper-muted/15 flex items-start gap-2.5">
            <div className="w-6 h-6 rounded bg-paper-muted flex items-center justify-center shrink-0 border border-paper-border mt-0.5">
              <Layers className="w-3.5 h-3.5 text-ink" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-ink-muted uppercase block">
                03 // HIGH-TENSILE WIRE
              </span>
              <span className="font-sans font-medium text-ink block text-xs">
                Vector Tension Load
              </span>
              <span className="font-mono text-[10px] text-ink-secondary">
                Dynamic topological links
              </span>
            </div>
          </div>

          <div className="p-2.5 rounded border border-paper-border/60 bg-paper-muted/15 flex items-start gap-2.5">
            <div className="w-6 h-6 rounded bg-[#e8e2d4] shrink-0 border border-paper-border mt-0.5" />
            <div>
              <span className="font-mono text-[10px] text-ink-muted uppercase block">
                04 // WARM HORIZON
              </span>
              <span className="font-sans font-medium text-ink block text-xs">
                Ceramic Cotton Rag
              </span>
              <span className="font-mono text-[10px] text-ink-secondary">
                Anchors to paper palette
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
