"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { tactileSpring } from "@/lib/motion/easings";

/**
 * TiltLayer: light CSS-3D depth. Leans toward the pointer (fine pointers only).
 * Reuses the site's tactileSpring; no extra dependency, no layout change.
 * Skipped entirely under prefers-reduced-motion.
 */
export function TiltLayer({
  children,
  className = "",
  max = 6,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number; // max tilt in degrees
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, tactileSpring);
  const sy = useSpring(py, tactileSpring);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-max, max]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [max, -max]);

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <div
      ref={ref}
      className={className}
      style={{ perspective: 1000 }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        px.set((e.clientX - r.left) / r.width - 0.5);
        py.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        px.set(0);
        py.set(0);
      }}
    >
      <motion.div style={{ rotateX, rotateY }} className="w-full h-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

export default TiltLayer;
