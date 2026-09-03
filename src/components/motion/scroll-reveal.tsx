"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { spatialEase, cinematicEase } from "@/lib/motion/easings";
import { DURATION } from "@/lib/motion/tokens";

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * TextReveal: Apple-style typographic line mask reveal.
 * Hides initial overflow, lifts text gently upwards into view.
 */
export function TextReveal({
  children,
  className = "",
  delay = 0,
  duration = DURATION.slow,
  as: Component = "div",
}: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    // @ts-expect-error dynamic component
    return <Component className={className}>{children}</Component>;
  }

  return (
    // @ts-expect-error dynamic component
    <Component className={`overflow-hidden ${className}`}>
      <motion.span
        className="block will-change-transform"
        initial={{ y: "110%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, amount: "some" }}
        transition={{
          duration,
          delay,
          ease: spatialEase,
        }}
      >
        {children}
      </motion.span>
    </Component>
  );
}

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

/**
 * ImageReveal: Editorial mask wipe reveal using CSS clip-path and subtle settling scale.
 */
export function ImageReveal({
  children,
  className = "",
  delay = 0,
  duration = DURATION.cinematic,
}: ImageRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={`overflow-hidden will-change-transform ${className}`}
      initial={{
        clipPath: "inset(8% 0% 8% 0%)",
        opacity: 0,
        scale: 1.04,
      }}
      whileInView={{
        clipPath: "inset(0% 0% 0% 0%)",
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true, amount: "some" }}
      transition={{
        duration,
        delay,
        ease: cinematicEase,
      }}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxLayerProps {
  children: React.ReactNode;
  className?: string;
  offset?: number; // Maximum pixel displacement (e.g. 15 or 25)
  direction?: "up" | "down";
}

/**
 * ParallaxLayer: Restrained physical parallax depth.
 * Strictly bounded (typically ±15px) to prevent disorienting fly-around effects.
 */
export function ParallaxLayer({
  children,
  className = "",
  offset = 16,
  direction = "up",
}: ParallaxLayerProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const range = direction === "up" ? [offset, -offset] : [-offset, offset];
  const y = useTransform(scrollYProgress, [0, 1], range);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y }} className="w-full h-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
