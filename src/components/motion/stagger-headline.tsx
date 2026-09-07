"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface StaggerHeadlineProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p";
  delay?: number;
  duration?: number;
  stagger?: number;
  italicIndices?: number[]; // indices of words to style italic
  isReady?: boolean;
}

export function StaggerHeadline({
  text,
  className = "",
  as: Component = "h1",
  delay = 0.2,
  duration = 0.85,
  stagger = 0.07,
  italicIndices = [],
  isReady = true,
}: StaggerHeadlineProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!isReady || !ref.current) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const words = ref.current.querySelectorAll(".headline-word-inner");
      gsap.set(words, { opacity: 1, y: 0 });
      return;
    }

    const words = ref.current.querySelectorAll(".headline-word-inner");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0, y: "110%", rotateX: 10 },
        {
          opacity: 1,
          y: "0%",
          rotateX: 0,
          duration,
          stagger,
          ease: "power3.out",
          delay,
        }
      );
    });

    return () => ctx.revert();
  }, [isReady, delay, duration, stagger]);

  const words = text.split(" ");

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Component ref={ref as any} className={`${className} [perspective:1000px]`}>
      {words.map((word, i) => {
        const isItalic = italicIndices.includes(i) || (italicIndices.length === 0 && i === words.length - 1 && word.includes("inevitable"));
        return (
          <span key={i} className="inline-block overflow-hidden py-1 mr-[0.26em] align-top">
            <span
              className={`headline-word-inner inline-block will-change-transform ${
                isItalic ? "italic font-normal" : ""
              }`}
            >
              {word}
            </span>
          </span>
        );
      })}
    </Component>
  );
}

export default StaggerHeadline;
