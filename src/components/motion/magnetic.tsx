"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { magneticSpring } from "@/lib/motion/easings";

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // Max pixel offset (default 7)
}

/**
 * Magnetic: Subtle physical magnetic microinteraction.
 * Moves slightly toward the cursor on hover with a weighted physical spring response.
 */
export function Magnetic({
  children,
  className = "",
  strength = 7,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Check if pointer is coarse (touchscreen)
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || shouldReduceMotion || !ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    // Normalize and scale to max strength
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxRadius = Math.max(width, height) / 2;

    const factor = Math.min(distance / maxRadius, 1);
    const x = (deltaX / (maxRadius || 1)) * strength * factor;
    const y = (deltaY / (maxRadius || 1)) * strength * factor;

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  if (shouldReduceMotion || isTouchDevice) {
    return <div className={`inline-block ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={magneticSpring}
      className={`inline-block will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
