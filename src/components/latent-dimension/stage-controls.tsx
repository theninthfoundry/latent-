"use client";

import React from "react";
import {
  LatentDimensionStage,
} from "./latent-form-engine";
import { Play, Pause, RotateCcw, Eye, Compass } from "lucide-react";

export interface StageDescriptor {
  id: LatentDimensionStage;
  num: string;
  label: string;
  subtitle: string;
  thesis: string;
  materials: string[];
}

export const STAGE_DESCRIPTORS: StageDescriptor[] = [
  {
    id: "absence",
    num: "01",
    label: "The Absence",
    subtitle: "Latent emergence from the void",
    thesis: "Before a form exists, its coordinates are already waiting in space. A single point appears.",
    materials: ["Structural datum points", "Narrow ambient illumination"],
  },
  {
    id: "connection",
    num: "02",
    label: "The First Connection",
    subtitle: "Fine structural wires extend",
    thesis: "Fine architectural lines draw the tension between possibilities. The skeleton becomes readable.",
    materials: ["Fine structural wire", "Directional key light"],
  },
  {
    id: "formation",
    num: "03",
    label: "Formation",
    subtitle: "Graphite & smoked glass slide into position",
    thesis: "Surfaces travel along deliberate geometric paths. The physical matter takes shape.",
    materials: ["Smoked glass shield", "Brushed graphite shell", "Fine wire"],
  },
  {
    id: "assembled",
    num: "04",
    label: "The Object Realized",
    subtitle: "Monolithic physical equilibrium",
    thesis: "The components settle into physical equilibrium. A tangible piece of digital architecture.",
    materials: ["Monolithic graphite core", "Translucent smoked glass", "Warm ceramic horizon"],
  },
  {
    id: "hero_hold",
    num: "05",
    label: "Hero Hold",
    subtitle: "Restrained idle & pointer inspection",
    thesis: "The sculpture breathes with subtle parallax. It responds as an instrument being examined.",
    materials: ["Balanced material hierarchy", "Rim light highlights"],
  },
  {
    id: "build",
    num: "06",
    label: "BUILD",
    subtitle: "Assembly as an architectural language",
    thesis: "Secondary shells decouple along radial axes, revealing internal engineering and datum structures.",
    materials: ["Exploded core architecture", "Exposed internal wire connections"],
  },
  {
    id: "repair",
    num: "07",
    label: "REPAIR",
    subtitle: "Controlled disruption & recovery",
    thesis: "One secondary connection isolates and drifts. The system diagnoses the fault and securely reconnects.",
    materials: ["Divergent connector pin", "Fault isolation illumination"],
  },
  {
    id: "evolve",
    num: "08",
    label: "EVOLVE",
    subtitle: "Orbital expansion without loss of core",
    thesis: "The system expands with new capability nodes. The original foundation remains intact at the core.",
    materials: ["Orbital capability nodes", "Multi-layered network connections"],
  },
  {
    id: "dimensional",
    num: "09",
    label: "Dimensional Transition",
    subtitle: "3D sculpture flattens into 2D editorial plane",
    thesis: "Surfaces compress toward the screen plane, smoothly dissolving the boundary between 3D matter and editorial layout.",
    materials: ["Planar projection alignment", "Editorial paper typography integration"],
  },
];

interface StageControlsProps {
  currentStage: LatentDimensionStage;
  progress: number;
  onSelectStage: (stage: LatentDimensionStage) => void;
  onProgressChange: (progress: number) => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onReset: () => void;
  showTelemetry: boolean;
  onToggleTelemetry: () => void;
}

export function StageControls({
  currentStage,
  progress,
  onSelectStage,
  onProgressChange,
  isPlaying,
  onTogglePlay,
  onReset,
  showTelemetry,
  onToggleTelemetry,
}: StageControlsProps) {
  const currentDescriptor =
    STAGE_DESCRIPTORS.find((s) => s.id === currentStage) || STAGE_DESCRIPTORS[4];

  return (
    <div className="w-full bg-paper border border-paper-border rounded-lg p-5 sm:p-6 shadow-subtle space-y-5">
      {/* Header / Director's Telemetry */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-paper-border/60 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-ink animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
              THE LATENT DIMENSION // DIRECTOR&apos;S DOCK
            </span>
          </div>
          <h4 className="font-serif text-lg text-ink font-medium mt-1">
            {currentDescriptor.num}. {currentDescriptor.label}
          </h4>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onTogglePlay}
            aria-label={isPlaying ? "Pause cinematic timeline" : "Play cinematic timeline"}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded border border-ink text-ink hover:bg-ink hover:text-paper transition-colors"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span>Auto-Run</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onReset}
            title="Reset to Hero Hold"
            aria-label="Reset camera and stage"
            className="p-1.5 text-xs rounded border border-paper-border text-ink-secondary hover:text-ink hover:border-ink transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={onToggleTelemetry}
            aria-label="Toggle mathematical HUD telemetry"
            className={`inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-mono rounded border transition-colors ${
              showTelemetry
                ? "bg-ink text-paper border-ink"
                : "border-paper-border text-ink-muted hover:text-ink"
            }`}
          >
            <Eye className="w-3 h-3" />
            <span className="hidden sm:inline">Telemetry</span>
          </button>
        </div>
      </div>

      {/* Narrative Thesis */}
      <div className="space-y-1.5">
        <p className="text-sm font-sans text-ink leading-relaxed">
          {currentDescriptor.thesis}
        </p>
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-[11px] font-mono text-ink-muted uppercase tracking-wider">
            Active Materials:
          </span>
          {currentDescriptor.materials.map((mat) => (
            <span
              key={mat}
              className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-paper-muted/60 border border-paper-border text-ink-secondary"
            >
              {mat}
            </span>
          ))}
        </div>
      </div>

      {/* Stage Selector Grid */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-ink-muted">
          <span>SEQUENCE SHOTS</span>
          <span>CHOREOGRAPHED TIMELINE</span>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-9 gap-1.5">
          {STAGE_DESCRIPTORS.map((s) => {
            const isSelected = s.id === currentStage;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => onSelectStage(s.id)}
                className={`flex flex-col items-center justify-center py-2 px-1 rounded text-center transition-all ${
                  isSelected
                    ? "bg-ink text-paper shadow-sm"
                    : "bg-paper-muted/40 hover:bg-paper-muted text-ink-secondary border border-paper-border/60 hover:border-ink/40"
                }`}
              >
                <span className="font-mono text-[10px] tracking-wider opacity-70">
                  {s.num}
                </span>
                <span className="text-[11px] font-sans font-medium line-clamp-1">
                  {s.label.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Scrubbing Slider */}
      <div className="space-y-1.5 pt-1">
        <div className="flex items-center justify-between text-xs font-mono text-ink-muted">
          <span className="flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5" />
            <span>INTER-STAGE SCRUBBER</span>
          </span>
          <span>{Math.round(progress * 100)}%</span>
        </div>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={progress}
          onChange={(e) => onProgressChange(parseFloat(e.target.value))}
          className="w-full accent-ink cursor-pointer bg-paper-border h-1.5 rounded-lg appearance-none"
          aria-label="Progress scrubber for current stage"
        />
      </div>
    </div>
  );
}
