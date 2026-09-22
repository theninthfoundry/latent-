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
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <div
      className={`relative inline-block select-none overflow-hidden rounded-3xl bg-atelier-indigo border border-atelier-brass/40 shadow-xl ${className}`}
      style={{ width: size, height: size }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Authentic Celestial Sun Woodcut Engraving */}
      <motion.div
        className="relative w-full h-full"
        animate={{ x: mouseOffset.x, y: mouseOffset.y }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
      >
        <img
          src="/artifacts/atelier/celestial-sun.jpg"
          onError={(e) => {
            e.currentTarget.src = "/api/atelier-asset?name=celestial-sun";
          }}
          alt="Celestial Sun Face & Astronomical Rays"
          className="w-full h-full object-cover object-center filter contrast-105"
        />

        {/* Ambient Starlight Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-atelier-indigo/60 via-transparent to-atelier-indigo/20 pointer-events-none" />
      </motion.div>

      {/* Archival Coordinate Badge */}
      <div className="absolute bottom-3 left-0 right-0 text-center font-mono text-[9px] uppercase tracking-widest text-paper/80 pointer-events-none drop-shadow-sm">
        <span>17°23&apos; N &bull; 78°29&apos; E &bull; CELESTIAL SPECIMEN</span>
      </div>
    </div>
  );
}

export default CelestialSun;
