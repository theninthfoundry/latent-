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
import { getCutoutImage } from "@/lib/cutout";

interface InteractiveStickerProps {
  id: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "custom";
  widthClass?: string;
  initialRotate?: number;
  enableDrag?: boolean;
  parallaxSpeed?: number;
  label?: string;
  showCaption?: boolean;
  washiTape?: boolean;
  glitchOnHover?: boolean;
  blendMode?: "multiply" | "normal" | "screen";
  noBackground?: boolean;
  cutout?: boolean;
  tintInk?: boolean;
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
  glitchOnHover = false,
  blendMode = "multiply",
  noBackground = true,
  cutout = true,
  tintInk = false,
}: InteractiveStickerProps) {
  const reduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [imgSrc, setImgSrc] = useState<string>("");
  const [processedSrc, setProcessedSrc] = useState<string>("");

  const asset = CREATIVE_ASSETS.find((a) => a.id === id);
  const defaultRotation = initialRotate || asset?.defaultRotation || 0;

  useEffect(() => {
    const urls = getCreativeAssetUrl(id);
    const initialUrl = urls.primary;
    setImgSrc(initialUrl);

    if (cutout) {
      getCutoutImage(initialUrl, {
        threshold: 215,
        feather: 45,
        tintInk: tintInk,
      }).then((cutoutUrl) => {
        setProcessedSrc(cutoutUrl);
      });
    }
  }, [id, cutout, tintInk]);

  // 3D Tilt Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 240, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [16, -16]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-16, 16]);

  // Scroll velocity torque & aerodynamic wind tilt
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 25, stiffness: 200 });

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
    sm: "w-32 sm:w-44",
    md: "w-48 sm:w-60 md:w-72",
    lg: "w-64 sm:w-80 md:w-96",
    xl: "w-80 sm:w-96 md:w-[480px]",
    "2xl": "w-96 sm:w-[440px] md:w-[560px]",
    "3xl": "w-[400px] sm:w-[540px] md:w-[680px]",
    custom: widthClass || "w-64",
  }[size];

  // Tactile audio feedback on pick up / release
  const playTactileClick = (freq = 440, type: OscillatorType = "sine") => {
    try {
      if (typeof window === "undefined") return;
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
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

  const activeSrc = processedSrc || imgSrc || `/artifacts/creative/${id}.png`;

  return (
    <div
      ref={cardRef}
      className={`relative inline-block select-none bg-transparent border-0 p-0 m-0 ${className}`}
      style={{ perspective: 1200 }}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={handlePointerLeave}
    >
      {/* Optional Washi Tape holding sticker */}
      {washiTape && (
        <div
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 h-4 w-20 bg-[#F2EDE2]/90 backdrop-blur-[2px] border-l border-r border-dashed border-ink/20 shadow-sm pointer-events-none"
          style={{ transform: `translateX(-50%) rotate(${defaultRotation > 0 ? -3 : 3}deg)` }}
        />
      )}

      {/* Main Draggable / Animated Motion Layer */}
      <motion.div
        drag={enableDrag && !reduceMotion}
        dragConstraints={{ left: -160, right: 160, top: -160, bottom: 160 }}
        dragElastic={0.2}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 22 }}
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
          scale: reduceMotion ? 1 : 1.06,
          cursor: enableDrag ? "grab" : "pointer",
        }}
        whileDrag={{
          scale: 1.12,
          cursor: "grabbing",
          zIndex: 50,
        }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 22,
        }}
        className={`relative ${sizeClasses} cursor-grab active:cursor-grabbing will-change-transform group bg-transparent border-none p-0 shadow-none`}
      >
        {/* Aerodynamic torque wrapper */}
        <motion.div
          style={{ rotate: reduceMotion ? 0 : velocityRotate }}
          className="relative w-full h-full bg-transparent border-none p-0"
        >
          {/* Pure Graphic Artwork — ZERO Background, ZERO Box, ZERO Border */}
          <div className="relative w-full h-full bg-transparent border-none p-0 overflow-visible flex items-center justify-center">
            <img
              src={activeSrc}
              alt={label || asset?.name || "Creative Artwork"}
              onError={() => {
                const fallbackUrl = `/api/creative-asset?name=${id}`;
                setImgSrc(fallbackUrl);
                if (cutout) {
                  getCutoutImage(fallbackUrl, {
                    threshold: 215,
                    feather: 45,
                    tintInk: tintInk,
                  }).then((url) => setProcessedSrc(url));
                }
              }}
              draggable={false}
              className={`w-full h-auto object-contain select-none pointer-events-none transition-transform duration-300 bg-transparent border-none outline-none ${
                blendMode === "multiply"
                  ? "mix-blend-multiply"
                  : blendMode === "screen"
                  ? "mix-blend-screen"
                  : ""
              }`}
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                boxShadow: "none",
              }}
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
