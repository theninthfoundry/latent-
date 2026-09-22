"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export type BotanicalRarityMode = "bud" | "petal" | "bloom" | "dissolve" | "specimen";

interface BotanicalBloomProps {
  size?: number;
  className?: string;
  interactive?: boolean;
  mode?: BotanicalRarityMode;
  onActivate?: () => void;
}

export function BotanicalBloom({
  size = 48,
  className = "",
  interactive = true,
  mode = "bud",
  onActivate,
}: BotanicalBloomProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Derive dynamic state from mode and hover
  const activeMode: BotanicalRarityMode =
    mode === "bud" && isHovered ? "petal" : mode;

  if (activeMode === "bud") {
    return (
      <div
        className={`relative inline-flex items-center justify-center cursor-pointer select-none group ${className}`}
        style={{ width: size, height: size }}
        onMouseEnter={() => interactive && setIsHovered(true)}
        onMouseLeave={() => interactive && setIsHovered(false)}
        onClick={onActivate}
        title="Living Mark: Latent Atelier"
      >
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex items-center justify-center"
        >
          {/* Subtle cross-stitch asterisk */}
          <span className="font-mono text-atelier-faded text-sm sm:text-base transition-colors group-hover:text-atelier-indigo">
            ✦
          </span>
          {/* Faint micro pistil dot */}
          <span className="absolute w-1 h-1 rounded-full bg-atelier-brass/80 group-hover:scale-150 transition-transform" />
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
      onClick={onActivate}
    >
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-[0_4px_12px_rgba(20,44,72,0.1)]"
        animate={{
          rotate: activeMode === "bloom" ? 360 : 0,
        }}
        transition={{
          rotate: {
            duration: activeMode === "bloom" ? 36 : 0,
            repeat: activeMode === "bloom" ? Infinity : 0,
            ease: "linear",
          },
        }}
      >
        <defs>
          <radialGradient id="indigoPetalGradRefined" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#142C48" stopOpacity="0.95" />
            <stop offset="65%" stopColor="#2A4A6E" stopOpacity="0.8" />
            <stop offset="90%" stopColor="#7894A6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#C9A5A0" stopOpacity="0.1" />
          </radialGradient>

          <radialGradient id="centerPearlRefined" cx="35%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#FAF8F1" />
            <stop offset="60%" stopColor="#F3EFE5" />
            <stop offset="100%" stopColor="#B6A06A" />
          </radialGradient>

          <filter id="bloomSoftRefined" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Stippled Ring for Specimen/Bloom */}
        {(activeMode === "bloom" || activeMode === "specimen") && (
          <circle
            cx="100"
            cy="100"
            r="84"
            fill="none"
            stroke="rgba(20, 44, 72, 0.15)"
            strokeWidth="0.75"
            strokeDasharray="2 6"
          />
        )}

        {/* Petal Rendering:
            - If "petal" mode: only one primary petal opens outward
            - If "bloom": all 5 petals spread
            - If "dissolve": stippled points replace petals
        */}
        {activeMode === "petal" ? (
          /* Single unfolded petal revealing dynamic life */
          <g>
            <motion.path
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.15, opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              d="M100 100 C80 60 70 30 100 10 C130 30 120 60 100 100 Z"
              fill="url(#indigoPetalGradRefined)"
              stroke="rgba(20, 44, 72, 0.5)"
              strokeWidth="0.75"
            />
            {/* Core bud with pearl */}
            <circle cx="100" cy="100" r="5" fill="url(#centerPearlRefined)" stroke="#142C48" strokeWidth="0.8" />
          </g>
        ) : activeMode === "dissolve" ? (
          /* Disintegrating into pixel/jaali dots */
          <g fill="#142C48" opacity="0.6">
            {[
              [100, 30], [80, 50], [120, 50], [60, 80], [140, 80],
              [90, 70], [110, 70], [75, 110], [125, 110], [100, 140],
              [85, 160], [115, 160], [100, 100],
            ].map(([x, y], i) => (
              <rect key={i} x={x - 2} y={y - 2} width="4" height="4" />
            ))}
          </g>
        ) : (
          /* Full 5-Petal Indigo Bloom */
          [0, 72, 144, 216, 288].map((angle, index) => (
            <motion.g
              key={index}
              transform={`rotate(${angle} 100 100)`}
              animate={{
                scale: activeMode === "bloom" ? 1.12 : 1,
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <path
                d="M100 100 C75 60 65 30 100 8 C135 30 125 60 100 100 Z"
                fill="url(#indigoPetalGradRefined)"
                stroke="rgba(20, 44, 72, 0.4)"
                strokeWidth="0.75"
                filter="url(#bloomSoftRefined)"
              />
              <path
                d="M100 95 C100 60 98 40 100 20"
                stroke="rgba(243, 239, 229, 0.45)"
                strokeWidth="0.75"
                strokeDasharray="3 4"
              />
            </motion.g>
          ))
        )}

        {/* Center Pearl Stamens */}
        {activeMode !== "dissolve" && (
          <g>
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const cx = 100 + Math.cos(rad) * 10;
              const cy = 100 + Math.sin(rad) * 10;
              return (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r="2.8"
                  fill="url(#centerPearlRefined)"
                  stroke="#142C48"
                  strokeWidth="0.5"
                />
              );
            })}
            <circle
              cx="100"
              cy="100"
              r="4.2"
              fill="url(#centerPearlRefined)"
              stroke="#142C48"
              strokeWidth="0.8"
            />
          </g>
        )}
      </motion.svg>
    </div>
  );
}
