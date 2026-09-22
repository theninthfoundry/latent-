"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type JaaliState =
  | "dormant"
  | "computational"
  | "resolving"
  | "image"
  | "typography"
  | "ornament";

interface PixelJaaliProps {
  initialState?: JaaliState;
  className?: string;
  allowManualCycle?: boolean;
}

const JAALI_STATES: { id: JaaliState; label: string; desc: string }[] = [
  { id: "dormant", label: "01 / Dormant", desc: "Faint paper substrate" },
  { id: "computational", label: "02 / Computational", desc: "Dense coordinate matrix" },
  { id: "resolving", label: "03 / Resolving", desc: "Kinetic pixel migration" },
  { id: "typography", label: "04 / Typography", desc: "Grid constructs letterforms" },
  { id: "image", label: "05 / Artifact", desc: "Monochrome photographic halftone" },
  { id: "ornament", label: "06 / Ornament", desc: "Symmetrical jaali fretwork" },
];

export function PixelJaali({
  initialState = "dormant",
  className = "",
  allowManualCycle = true,
}: PixelJaaliProps) {
  const [currentState, setCurrentState] = useState<JaaliState>(initialState);

  // 12x8 grid = 96 cells
  const cols = 12;
  const rows = 8;
  const totalCells = cols * rows;

  // Typographic mask for letterforms (spells "LATENT" in pixel blocks)
  const typographyMask = new Set([
    // L
    13, 25, 37, 49, 50,
    // A
    16, 27, 29, 39, 40, 41, 51, 53,
    // T
    18, 19, 20, 31, 43, 55,
    // E
    22, 23, 34, 46, 47, 58, 59,
  ]);

  // Symmetrical Indian jaali / rangoli fretwork mask
  const ornamentMask = new Set([
    14, 15, 20, 21, 26, 27, 32, 33,
    38, 41, 42, 45, 50, 51, 56, 57,
    62, 63, 68, 69, 74, 75, 80, 81
  ]);

  // Image silhouette mask (celestial globe circle)
  const imageMask = new Set([
    16, 17, 18, 19,
    27, 28, 29, 30, 31, 32,
    38, 39, 40, 41, 42, 43, 44, 45,
    50, 51, 52, 53, 54, 55, 56, 57,
    63, 64, 65, 66, 67, 68,
    76, 77, 78, 79
  ]);

  return (
    <div className={`relative p-5 sm:p-7 rounded-2xl bg-paper-card border border-paper-border/80 select-none ${className}`}>
      {/* Background Perforated Cross-Stitch Canvas */}
      <div className="absolute inset-0 cross-stitch-pattern opacity-40 pointer-events-none" />

      {/* Archival Corner Marks */}
      <div className="absolute top-2.5 left-2.5 text-atelier-faded text-[10px]">✦</div>
      <div className="absolute top-2.5 right-2.5 text-atelier-faded text-[10px]">✦</div>
      <div className="absolute bottom-2.5 left-2.5 text-atelier-faded text-[10px]">✦</div>
      <div className="absolute bottom-2.5 right-2.5 text-atelier-faded text-[10px]">✦</div>

      {/* Header with State Selector */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-paper-border/50">
        <div>
          <span className="font-mono text-[9px] uppercase tracking-widest text-ink-muted block">
            Substrate Matrix // Jaali Physics
          </span>
          <h5 className="font-serif text-base sm:text-lg font-light text-ink">
            A single primitive becoming anything.
          </h5>
        </div>

        {allowManualCycle && (
          <div className="flex flex-wrap gap-1 font-mono text-[9px]">
            {JAALI_STATES.map((s) => (
              <button
                key={s.id}
                onClick={() => setCurrentState(s.id)}
                className={`px-2 py-1 rounded transition-all ${
                  currentState === s.id
                    ? "bg-atelier-indigo text-paper font-semibold shadow-xs"
                    : "bg-paper text-ink-muted hover:text-ink border border-paper-border/60"
                }`}
              >
                {s.label.split("/")[1]?.trim()}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* The 96-Cell Living Matrix Canvas */}
      <div className="relative z-10 flex flex-col items-center justify-center py-2">
        <div className="grid grid-cols-12 gap-1 sm:gap-1.5 w-full max-w-[420px]">
          {Array.from({ length: totalCells }).map((_, idx) => {
            // Determine styling based on current state
            let isFilled = false;
            let cellStyle = "bg-paper-border/30 border border-paper-border/40";

            if (currentState === "dormant") {
              isFilled = idx % 11 === 0;
              cellStyle = isFilled
                ? "bg-atelier-indigo/10 border border-atelier-indigo/20"
                : "bg-transparent border border-paper-border/20";
            } else if (currentState === "computational") {
              isFilled = true;
              cellStyle = "bg-atelier-indigo/15 border border-atelier-indigo/35";
            } else if (currentState === "resolving") {
              isFilled = idx % 2 === 0 || idx % 5 === 0;
              cellStyle = isFilled
                ? "bg-atelier-indigo/40 border border-atelier-indigo/60 scale-95"
                : "bg-paper-border/30 border border-paper-border/40";
            } else if (currentState === "typography") {
              isFilled = typographyMask.has(idx);
              cellStyle = isFilled
                ? "bg-atelier-indigo border border-atelier-indigo shadow-xs"
                : "bg-paper-border/20 border border-paper-border/30 opacity-40";
            } else if (currentState === "image") {
              isFilled = imageMask.has(idx);
              cellStyle = isFilled
                ? "bg-atelier-brass/90 border border-atelier-brass"
                : "bg-paper-border/20 border border-paper-border/20 opacity-30";
            } else if (currentState === "ornament") {
              isFilled = ornamentMask.has(idx);
              cellStyle = isFilled
                ? "bg-atelier-indigo/85 border border-atelier-indigo"
                : "bg-paper-subtle border border-paper-border/30";
            }

            return (
              <motion.div
                key={idx}
                animate={{
                  scale: isFilled ? 1 : 0.9,
                  opacity: isFilled ? 1 : 0.35,
                }}
                transition={{ duration: 0.3, delay: (idx % cols) * 0.015 }}
                className={`h-3 sm:h-3.5 rounded-[1.5px] flex items-center justify-center transition-colors duration-300 ${cellStyle}`}
              >
                {isFilled && currentState === "ornament" && (
                  <span className="text-[6px] text-paper font-mono leading-none">✦</span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* State Descriptor Bar */}
        <div className="mt-4 pt-3 border-t border-paper-border/50 w-full flex items-center justify-between font-mono text-[10px] text-ink-muted">
          <span className="uppercase tracking-wider text-atelier-indigo font-medium">
            Active Mode: {currentState.toUpperCase()}
          </span>
          <span>96 Coordinate Nodes &bull; Latent Substrate</span>
        </div>
      </div>
    </div>
  );
}
