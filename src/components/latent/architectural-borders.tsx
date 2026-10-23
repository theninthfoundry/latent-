"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  useVelocity,
} from "framer-motion";
import { getCreativeAssetUrl } from "@/lib/creative-assets";

/**
 * 01 — Gothic Architectural Corner Frame
 * Quad-axial symmetry framing a container with the gothic corner filigree.
 */
export function GothicCornerFrame({
  children,
  className = "",
  size = 120,
  opacity = 0.22,
  inset = "-12px",
}: {
  children: React.ReactNode;
  className?: string;
  size?: number;
  opacity?: number;
  inset?: string;
}) {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [imgSrc, setImgSrc] = useState(
    getCreativeAssetUrl("gothic-corner-filigree").primary
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const subtleParallax = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Top-Left Corner */}
      <motion.div
        className="absolute pointer-events-none select-none z-10 transition-opacity duration-300"
        style={{
          y: reduceMotion ? 0 : subtleParallax,
          top: inset,
          left: inset,
          width: size,
          height: size,
          opacity,
        }}
      >
        <img
          src={imgSrc}
          alt=""
          onError={() =>
            setImgSrc(getCreativeAssetUrl("gothic-corner-filigree").fallback)
          }
          className="w-full h-full object-contain mix-blend-multiply"
        />
      </motion.div>

      {/* Top-Right Corner (Horizontally Mirrored) */}
      <motion.div
        className="absolute pointer-events-none select-none z-10 transition-opacity duration-300 scale-x-[-1]"
        style={{
          y: reduceMotion ? 0 : subtleParallax,
          top: inset,
          right: inset,
          width: size,
          height: size,
          opacity,
        }}
      >
        <img
          src={imgSrc}
          alt=""
          onError={() =>
            setImgSrc(getCreativeAssetUrl("gothic-corner-filigree").fallback)
          }
          className="w-full h-full object-contain mix-blend-multiply"
        />
      </motion.div>

      {/* Bottom-Left Corner (Vertically Mirrored) */}
      <motion.div
        className="absolute pointer-events-none select-none z-10 transition-opacity duration-300 scale-y-[-1]"
        style={{
          y: reduceMotion ? 0 : subtleParallax,
          bottom: inset,
          left: inset,
          width: size,
          height: size,
          opacity,
        }}
      >
        <img
          src={imgSrc}
          alt=""
          onError={() =>
            setImgSrc(getCreativeAssetUrl("gothic-corner-filigree").fallback)
          }
          className="w-full h-full object-contain mix-blend-multiply"
        />
      </motion.div>

      {/* Bottom-Right Corner (Quad Mirrored) */}
      <motion.div
        className="absolute pointer-events-none select-none z-10 transition-opacity duration-300 scale-[-1]"
        style={{
          y: reduceMotion ? 0 : subtleParallax,
          bottom: inset,
          right: inset,
          width: size,
          height: size,
          opacity,
        }}
      >
        <img
          src={imgSrc}
          alt=""
          onError={() =>
            setImgSrc(getCreativeAssetUrl("gothic-corner-filigree").fallback)
          }
          className="w-full h-full object-contain mix-blend-multiply"
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/**
 * 02 — Rotating Celestial Radial Starburst Halo
 * Radial 360-degree symmetry with scroll-responsive orbital inertia.
 */
export function RotatingCelestialHalo({
  className = "",
  size = 320,
  opacity = 0.12,
  speedMultiplier = 1,
}: {
  className?: string;
  size?: number | string;
  opacity?: number;
  speedMultiplier?: number;
}) {
  const reduceMotion = useReducedMotion();
  const [imgSrc, setImgSrc] = useState(
    getCreativeAssetUrl("radial-starburst-halo").primary
  );

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 25, stiffness: 180 });

  // Rotate smoothly based on scroll distance + continuous drift
  const rotateFromScroll = useTransform(scrollY, [0, 4000], [0, 360 * speedMultiplier]);
  const velocityPulse = useTransform(smoothVelocity, [-2000, 0, 2000], [1.08, 1, 1.08]);

  return (
    <div
      className={`pointer-events-none select-none overflow-hidden ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      <motion.div
        style={{
          rotate: reduceMotion ? 0 : rotateFromScroll,
          scale: reduceMotion ? 1 : velocityPulse,
        }}
        className="w-full h-full flex items-center justify-center will-change-transform"
      >
        <img
          src={imgSrc}
          alt=""
          onError={() =>
            setImgSrc(getCreativeAssetUrl("radial-starburst-halo").fallback)
          }
          className="w-full h-full object-contain mix-blend-multiply"
          style={{ opacity }}
        />
      </motion.div>
    </div>
  );
}

/**
 * 03 — Liquid Star Constellation Margin Spine
 * Vertical margin border running down sections, stretching on scroll velocity.
 */
export function LiquidMarginSpine({
  className = "",
  side = "right",
  heightClass = "h-48 sm:h-64",
}: {
  className?: string;
  side?: "left" | "right";
  heightClass?: string;
}) {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [imgSrc, setImgSrc] = useState(
    getCreativeAssetUrl("liquid-star-spine").primary
  );

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 28, stiffness: 220 });

  // Subtle liquid tension stretch when scrolling fast
  const stretchY = useTransform(smoothVelocity, [-1500, 0, 1500], [1.14, 1, 1.14]);
  const flexX = useTransform(smoothVelocity, [-1500, 0, 1500], [0.94, 1, 0.94]);

  return (
    <div
      ref={containerRef}
      className={`absolute ${side === "left" ? "-left-6 sm:-left-10" : "-right-6 sm:-right-10"} top-1/2 -translate-y-1/2 pointer-events-none select-none z-10 ${className}`}
    >
      <motion.div
        style={{
          scaleY: reduceMotion ? 1 : stretchY,
          scaleX: reduceMotion ? 1 : flexX,
        }}
        className={`w-12 sm:w-16 ${heightClass} will-change-transform opacity-30 hover:opacity-70 transition-opacity`}
      >
        <img
          src={imgSrc}
          alt=""
          onError={() =>
            setImgSrc(getCreativeAssetUrl("liquid-star-spine").fallback)
          }
          className="w-full h-full object-contain mix-blend-multiply"
        />
      </motion.div>
    </div>
  );
}

/**
 * 04 — Formula 1 #44 Telemetry Monoposto Machine
 * Bilateral mechanical symmetry with dynamic telemetry hud and scroll acceleration.
 */
export function F1TelemetrySpecimen({
  className = "",
}: {
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [imgSrc, setImgSrc] = useState(
    getCreativeAssetUrl("f1-telemetry-car").primary
  );

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const carY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const aeroSpread = useTransform(scrollYProgress, [0, 1], [0.96, 1.04]);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-2xl bg-paper-card border border-paper-border p-6 sm:p-8 flex flex-col items-center justify-between overflow-hidden shadow-sm group select-none ${className}`}
    >
      {/* Symmetrical Atmospheric Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#17150F_0.8px,transparent_0.8px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

      {/* Top Telemetry Masthead (Symmetrical) */}
      <div className="w-full flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-ink-muted border-b border-paper-border/70 pb-3 relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-clay animate-pulse" />
          <span>SPECIMEN № 44 // KINETIC MONOPOSTO</span>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <span>LATENCY: 0.4ms</span>
          <span className="text-paper-border">&bull;</span>
          <span>AERO BALANCE: 46.2%</span>
        </div>
      </div>

      {/* Center Symmetrical Telemetry Staging Ground */}
      <div className="relative w-full py-8 flex items-center justify-center my-2">
        {/* Left Telemetry HUD Bracket */}
        <div className="hidden md:flex flex-col gap-3 font-mono text-[9px] text-ink-muted/80 absolute left-2 top-1/2 -translate-y-1/2 border-l border-dashed border-paper-border pl-3">
          <div>
            <span className="text-ink font-semibold">DOWNFORCE</span>
            <div className="text-[11px] text-atelier-indigo font-bold">1,840 kg</div>
          </div>
          <div>
            <span className="text-ink font-semibold">V-MAX TELEMETRY</span>
            <div className="text-[11px] text-ink">352.4 km/h</div>
          </div>
          <div>
            <span className="text-ink font-semibold">G-LATERAL</span>
            <div className="text-[11px] text-accent-clay">5.2 G</div>
          </div>
        </div>

        {/* The Symmetrical F1 Car */}
        <motion.div
          style={{
            y: reduceMotion ? 0 : carY,
            scale: reduceMotion ? 1 : aeroSpread,
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative z-10 w-44 sm:w-56 md:w-64 max-h-[360px] flex items-center justify-center cursor-grab active:cursor-grabbing will-change-transform"
        >
          {/* Subtle Ground Effect Shadow */}
          <div className="absolute inset-x-4 bottom-2 h-8 bg-ink/15 rounded-full blur-md pointer-events-none group-hover:bg-ink/25 transition-colors" />

          <img
            src={imgSrc}
            alt="Formula 1 #44 High Performance Telemetry Car"
            onError={() =>
              setImgSrc(getCreativeAssetUrl("f1-telemetry-car").fallback)
            }
            className="w-full h-auto object-contain mix-blend-multiply drop-shadow-[0_12px_24px_rgba(23,21,15,0.22)]"
          />
        </motion.div>

        {/* Right Telemetry HUD Bracket */}
        <div className="hidden md:flex flex-col gap-3 font-mono text-[9px] text-ink-muted/80 absolute right-2 top-1/2 -translate-y-1/2 border-r border-dashed border-paper-border pr-3 text-right">
          <div>
            <span className="text-ink font-semibold">CHASSIS MASS</span>
            <div className="text-[11px] text-ink font-bold">798 kg</div>
          </div>
          <div>
            <span className="text-ink font-semibold">POWER UNIT</span>
            <div className="text-[11px] text-atelier-indigo">1,025 BHP</div>
          </div>
          <div>
            <span className="text-ink font-semibold">SYSTEM RESPONSE</span>
            <div className="text-[11px] text-accent-clay">ZERO DELAY</div>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Caption */}
      <div className="w-full pt-3 border-t border-paper-border/70 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[10px] text-ink-muted relative z-10">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-atelier-brass" />
          <span>High-Frequency Compute &bull; Absolute Bilateral Symmetry</span>
        </span>
        <span className="text-atelier-indigo font-medium uppercase tracking-wider text-[9px]">
          Computational Telemetry Core
        </span>
      </div>
    </div>
  );
}
