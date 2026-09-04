"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { spatialEase, cinematicEase } from "@/lib/motion/easings";
import { DURATION } from "@/lib/motion/tokens";

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "div" | "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "section" | "article";
}

/**
 * TextReveal: Apple-style typographic line mask reveal.
 * Parent container is observed by useInView; inner span lifts upwards with spatialEase.
 */
export function TextReveal({
  children,
  className = "",
  delay = 0,
  duration = DURATION.slow,
  as: Component = "div",
}: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  if (shouldReduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Component ref={containerRef as any} className={`overflow-hidden ${className}`}>
      <motion.span
        className="block will-change-transform"
        initial={{ y: "105%", opacity: 0 }}
        animate={isInView ? { y: "0%", opacity: 1 } : { y: "105%", opacity: 0 }}
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
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <motion.div
        className="w-full h-full will-change-transform"
        initial={{
          clipPath: "inset(8% 0% 8% 0%)",
          opacity: 0,
          scale: 1.04,
        }}
        animate={
          isInView
            ? { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, scale: 1 }
            : { clipPath: "inset(8% 0% 8% 0%)", opacity: 0, scale: 1.04 }
        }
        transition={{
          duration,
          delay,
          ease: cinematicEase,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

interface ParallaxLayerProps {
  children: React.ReactNode;
  className?: string;
  offset?: number;
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

  const isAbsolute = className.includes("absolute");
  const positionClass = isAbsolute ? "" : "relative";

  return (
    <div ref={ref} className={`${positionClass} ${className}`}>
      <motion.div style={{ y }} className="w-full h-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
