"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useVelocity,
  useReducedMotion,
} from "framer-motion";
import { getCreativeAssetUrl, CREATIVE_ASSETS } from "@/lib/creative-assets";

interface InteractiveStickerProps {
  id: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "custom";
  widthClass?: string;
  initialRotate?: number;
  enableDrag?: boolean;
  parallaxSpeed?: number;
  label?: string;
  showCaption?: boolean;
  washiTape?: boolean;
  glitchOnHover?: boolean;
}

export function InteractiveSticker({
  id,
  className = "",
  size = "md",
  widthClass,
  initialRotate = 0,
  enableDrag = true,
  parallaxSpeed = 0.15,
  label,
  showCaption = false,
  washiTape = false,
  glitchOnHover = true,
}: InteractiveStickerProps) {
  const reduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [imgSrc, setImgSrc] = useState<string>("");

  const asset = CREATIVE_ASSETS.find((a) => a.id === id);
  const defaultRotation = initialRotate || asset?.defaultRotation || 0;

  useEffect(() => {
    const urls = getCreativeAssetUrl(id);
    setImgSrc(urls.primary);
  }, [id]);

  // 3D Tilt Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 18, stiffness: 220, mass: 0.6 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [14, -14]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-14, 14]);
  const sheenX = useTransform(smoothMouseX, [-0.5, 0.5], ["0%", "100%"]);
  const sheenY = useTransform(smoothMouseY, [-0.5, 0.5], ["0%", "100%"]);

  // Scroll velocity torque & parallax
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 25, stiffness: 200 });

  // Aerodynamic wind tilt from scroll velocity
  const velocityRotate = useTransform(smoothVelocity, [-1500, 1500], [-8, 8]);
  const velocityScale = useTransform(smoothVelocity, [-1500, 0, 1500], [0.97, 1, 0.97]);

  // Vertical parallax offset
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [-20 * parallaxSpeed * 10, 20 * parallaxSpeed * 10]
  );

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const sizeClasses = {
    sm: "w-20 sm:w-24",
    md: "w-28 sm:w-36 md:w-44",
    lg: "w-40 sm:w-52 md:w-64",
    xl: "w-56 sm:w-72 md:w-88",
    custom: widthClass || "w-36",
  }[size];

  // Subtle synthesized audio feedback on pick up / release
  const playTactileClick = (freq = 440, type: OscillatorType = "sine") => {
    try {
      if (typeof window === "undefined") return;
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch {
      // Audio context might be restricted before interaction; safe to ignore
    }
  };

  return (
    <div
      ref={cardRef}
      className={`relative inline-block select-none ${className}`}
      style={{ perspective: 1200 }}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={handlePointerLeave}
    >
      {/* Optional Washi Tape holding sticker */}
      {washiTape && (
        <div
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 h-4 w-16 bg-[#F2EDE2]/90 backdrop-blur-[2px] border-l border-r border-dashed border-ink/20 shadow-sm pointer-events-none"
          style={{ transform: `translateX(-50%) rotate(${defaultRotation > 0 ? -3 : 3}deg)` }}
        />
      )}

      {/* Main Draggable / Animated Motion Layer */}
      <motion.div
        drag={enableDrag && !reduceMotion}
        dragConstraints={{ left: -120, right: 120, top: -120, bottom: 120 }}
        dragElastic={0.18}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
        onDragStart={() => {
          setIsDragging(true);
          playTactileClick(520, "triangle");
        }}
        onDragEnd={() => {
          setIsDragging(false);
          playTactileClick(380, "sine");
        }}
        style={{
          rotateX: reduceMotion ? 0 : rotateX,
          rotateY: reduceMotion ? 0 : rotateY,
          rotateZ: reduceMotion ? defaultRotation : defaultRotation,
          y: reduceMotion ? 0 : parallaxY,
          scale: reduceMotion ? 1 : velocityScale,
        }}
        whileHover={{
          scale: reduceMotion ? 1 : 1.05,
          cursor: enableDrag ? "grab" : "pointer",
        }}
        whileDrag={{
          scale: 1.12,
          cursor: "grabbing",
          zIndex: 50,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className={`relative ${sizeClasses} cursor-grab active:cursor-grabbing will-change-transform group`}
      >
        {/* Aerodynamic torque wrapper */}
        <motion.div
          style={{ rotate: reduceMotion ? 0 : velocityRotate }}
          className="relative w-full h-full"
        >
          {/* Dynamic Paper Drop Shadow */}
          <div
            className={`absolute inset-0 rounded-lg pointer-events-none transition-all duration-300 ${
              isDragging
                ? "shadow-[0_24px_48px_rgba(23,21,15,0.32),0_12px_20px_rgba(23,21,15,0.2)] scale-105"
                : isHovered
                ? "shadow-[0_16px_32px_rgba(23,21,15,0.2),0_6px_12px_rgba(23,21,15,0.12)]"
                : "shadow-[0_8px_18px_rgba(23,21,15,0.12),0_2px_6px_rgba(23,21,15,0.08)]"
            }`}
          />

          {/* Holographic / Sheen Reflection Highlight */}
          <motion.div
            className="absolute inset-0 rounded-lg pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-300 mix-blend-overlay z-20"
            style={{
              background: `radial-gradient(circle at ${sheenX} ${sheenY}, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 65%)`,
            }}
          />

          {/* Sticker Image Content */}
          <div className="relative overflow-hidden rounded-lg p-1">
            <img
              src={imgSrc || `/artifacts/creative/${id}.png`}
              alt={label || asset?.name || "Creative Ephemera"}
              onError={() => {
                // Self-healing fallback to dynamic API route
                setImgSrc(`/api/creative-asset?name=${id}`);
              }}
              draggable={false}
              className={`w-full h-auto object-contain select-none transition-transform duration-300 ${
                glitchOnHover && isHovered ? "filter contrast-110 drop-shadow-[0_2px_4px_rgba(20,44,72,0.2)]" : ""
              }`}
            />
          </div>

          {/* Interactive Tag / Hover Tooltip */}
          {showCaption && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
              transition={{ duration: 0.2 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-ink text-paper text-[10px] font-mono uppercase tracking-wider py-1 px-2.5 rounded shadow-lg pointer-events-none z-40 border border-paper-border/30"
            >
              <span>{label || asset?.name}</span>
              <span className="text-accent-clay ml-1.5 font-sans">✦</span>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default InteractiveSticker;
