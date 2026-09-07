"use client";

import React, { useRef } from "react";
import { motion, useScroll, useVelocity, useSpring, useTransform, useReducedMotion } from "framer-motion";

interface VelocitySkewProps {
  children: React.ReactNode;
  className?: string;
  maxSkew?: number;
}

export function VelocitySkew({ children, className = "", maxSkew = 1.5 }: VelocitySkewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Smooth out the raw velocity with physical spring dampening
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 45,
    stiffness: 280,
    mass: 0.8,
  });

  // Map velocity range (-1800px/s to 1800px/s) to skew (-maxSkew to maxSkew deg)
  const skewY = useTransform(
    smoothVelocity,
    [-1800, 0, 1800],
    [-maxSkew, 0, maxSkew]
  );

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={containerRef}
      style={{ skewY }}
      className={`origin-center will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default VelocitySkew;
