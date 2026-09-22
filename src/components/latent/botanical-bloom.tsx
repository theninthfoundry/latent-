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
      {/* Authentic Handcrafted Indigo Botanical Flower Asset */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        animate={{
          rotate: activeMode === "bloom" ? [0, 360] : 0,
          scale: activeMode === "bloom" ? [1, 1.04, 1] : isHovered ? 1.08 : 1,
        }}
        transition={{
          rotate: {
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <img
          src="/artifacts/atelier/botanical-flower.png"
          onError={(e) => {
            e.currentTarget.src = "/api/atelier-asset?name=botanical-flower";
          }}
          alt="Latent Botanical Mark"
          className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(20,44,72,0.22)] pointer-events-none"
        />
      </motion.div>
    </div>
  );
}

export default BotanicalBloom;
