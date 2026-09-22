"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface CelestialSunProps {
  className?: string;
  size?: number;
}

export function CelestialSun({ className = "", size = 260 }: CelestialSunProps) {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <div
      className={`relative inline-block select-none overflow-hidden rounded-full bg-atelier-indigo/5 border border-atelier-indigo/15 p-4 ${className}`}
      style={{ width: size, height: size }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Star Constellations */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        viewBox="0 0 300 300"
        fill="none"
      >
        {/* Constellation Lines */}
        <polyline
          points="40,60 90,80 140,40 180,90 240,70"
          stroke="rgba(20, 44, 72, 0.25)"
          strokeWidth="0.75"
          strokeDasharray="2 3"
        />
        <polyline
          points="30,220 80,240 150,210 220,260 270,200"
          stroke="rgba(20, 44, 72, 0.25)"
          strokeWidth="0.75"
          strokeDasharray="2 3"
        />
        {/* Constellation Nodes */}
        {[
          [40, 60],
          [90, 80],
          [140, 40],
          [180, 90],
          [240, 70],
          [30, 220],
          [80, 240],
          [150, 210],
          [220, 260],
          [270, 200],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="1.5" fill="#B6A06A" />
        ))}
      </svg>

      {/* Rotating Sunburst Rays */}
      <motion.svg
        viewBox="0 0 300 300"
        className="w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <g stroke="#142C48" strokeWidth="1" opacity="0.6">
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 360) / 24;
            const isWave = i % 2 === 0;
            return (
              <line
                key={i}
                x1="150"
                y1="30"
                x2="150"
                y2={isWave ? "10" : "18"}
                transform={`rotate(${angle} 150 150)`}
                strokeDasharray={isWave ? "none" : "2 2"}
              />
            );
          })}
        </g>
      </motion.svg>

      {/* Central Celestial Face with Subtle Gaze Tracking */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ x: mouseOffset.x, y: mouseOffset.y }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
      >
        <svg
          viewBox="0 0 160 160"
          className="w-3/5 h-3/5 drop-shadow-[0_4px_12px_rgba(20,44,72,0.15)]"
        >
          {/* Face Halo Circle */}
          <circle
            cx="80"
            cy="80"
            r="60"
            fill="#FAF8F1"
            stroke="#142C48"
            strokeWidth="1.5"
          />

          {/* Stippled cheeks & aura */}
          <circle cx="56" cy="94" r="6" fill="#C9A5A0" opacity="0.4" />
          <circle cx="104" cy="94" r="6" fill="#C9A5A0" opacity="0.4" />

          {/* Eyebrows */}
          <path
            d="M50 68 C58 62 66 64 70 70"
            fill="none"
            stroke="#142C48"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M110 68 C102 62 94 64 90 70"
            fill="none"
            stroke="#142C48"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Expressive Celestial Eyes */}
          <g fill="#142C48">
            {/* Left Eye */}
            <ellipse cx="60" cy="76" rx="6" ry="3.5" />
            <circle cx="58.5" cy="75" r="1.2" fill="#FAF8F1" />
            {/* Right Eye */}
            <ellipse cx="100" cy="76" rx="6" ry="3.5" />
            <circle cx="98.5" cy="75" r="1.2" fill="#FAF8F1" />
          </g>

          {/* Sculpted Nose */}
          <path
            d="M80 72 V92 C80 95 76 96 73 96"
            fill="none"
            stroke="#142C48"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Serene Lips */}
          <path
            d="M68 112 C74 108 86 108 92 112"
            fill="none"
            stroke="#142C48"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M72 112 C76 116 84 116 88 112"
            fill="none"
            stroke="#142C48"
            strokeWidth="1.2"
          />

          {/* Forehead Astronomical Third Eye / Bindu */}
          <circle cx="80" cy="54" r="2.5" fill="#B6A06A" />
          <circle
            cx="80"
            cy="54"
            r="5"
            fill="none"
            stroke="#B6A06A"
            strokeWidth="0.6"
            strokeDasharray="1 2"
          />
        </svg>
      </motion.div>

      {/* Archival Coordinate Badge */}
      <div className="absolute bottom-2 left-0 right-0 text-center font-mono text-[9px] uppercase tracking-widest text-atelier-indigo/60 pointer-events-none">
        17°23&apos; N &bull; 78°29&apos; E
      </div>
    </div>
  );
}
