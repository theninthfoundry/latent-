"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface CelestialSunProps {
  className?: string;
  size?: number;
}

export function CelestialSun({ className = "", size = 280 }: CelestialSunProps) {
  const shouldReduceMotion = useReducedMotion();
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glint, setGlint] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;

    // Restrained physical tilt: max +/- 8 degrees
    const rotY = (nx - 0.5) * 16;
    const rotX = -(ny - 0.5) * 16;

    setRotate({ x: rotX, y: rotY });
    setGlint({ x: nx * 100, y: ny * 100 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlint({ x: 50, y: 50 });
  };

  return (
    <div
      className={`relative inline-block select-none rounded-3xl ${className}`}
      style={{
        width: size,
        height: size,
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Physical Paper & Brass Plaque */}
      <motion.div
        className="relative w-full h-full rounded-3xl overflow-hidden bg-atelier-indigo border border-atelier-brass/50 shadow-2xl transition-shadow duration-300"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={
          shouldReduceMotion
            ? { rotateX: 0, rotateY: 0 }
            : { rotateX: rotate.x, rotateY: rotate.y }
        }
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 24,
          mass: 0.8,
        }}
      >
        {/* Layer 01: Deep Indigo Substrate (Z: 0) */}
        <div
          className="absolute inset-0 bg-atelier-indigo"
          style={{ transform: "translateZ(0px)" }}
        />

        {/* Layer 02: Woodcut Engraving Artwork (Z: 14px) */}
        <motion.div
          className="relative w-full h-full"
          style={{ transform: shouldReduceMotion ? "none" : "translateZ(14px)" }}
        >
          <img
            src="/artifacts/atelier/celestial-sun.jpg"
            onError={(e) => {
              e.currentTarget.src = "/api/atelier-asset?name=celestial-sun";
            }}
            alt="Celestial Sun Face & Astronomical Rays"
            className="w-full h-full object-cover object-center filter contrast-105"
          />

          {/* Starlight Ambient Tint */}
          <div className="absolute inset-0 bg-gradient-to-t from-atelier-indigo/60 via-transparent to-atelier-indigo/20 pointer-events-none" />
        </motion.div>

        {/* Layer 03: Specular Glint Reflection across tactile surface (Z: 24px) */}
        {!shouldReduceMotion && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-30 mix-blend-overlay"
            style={{
              background: `radial-gradient(circle at ${glint.x}% ${glint.y}%, rgba(255,255,255,0.7) 0%, transparent 60%)`,
              transform: "translateZ(24px)",
            }}
          />
        )}

        {/* Layer 04: Brass Filigree Astrolabe Border & Tick Marks (Z: 28px) */}
        <div
          className="absolute inset-2 rounded-2xl border border-atelier-brass/30 pointer-events-none flex flex-col justify-between p-2.5"
          style={{ transform: shouldReduceMotion ? "none" : "translateZ(28px)" }}
        >
          <div className="flex justify-between items-center font-mono text-[8px] uppercase tracking-widest text-atelier-brass/80">
            <span>N &bull; 17°23&apos;</span>
            <span className="w-1.5 h-1.5 rounded-full border border-atelier-brass/60" />
            <span>E &bull; 78°29&apos;</span>
          </div>

          {/* Archival Coordinate Badge */}
          <div className="text-center font-mono text-[9px] uppercase tracking-widest text-paper/90 drop-shadow-sm bg-atelier-indigo/80 backdrop-blur-xs py-1 rounded border border-atelier-brass/30">
            <span>CELESTIAL SPECIMEN № 001</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CelestialSun;
