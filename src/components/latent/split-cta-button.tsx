"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";

interface SplitCTAButtonProps {
  label?: string;
  href?: string;
  size?: "default" | "hero" | "lg";
  className?: string;
}

export function SplitCTAButton({
  label = "Start a Project",
  href = "mailto:inquiries@latent.studio",
  size = "default",
  className = "",
}: SplitCTAButtonProps) {
  const isHero = size === "hero";
  const isLg = size === "lg";

  const buttonElement = (
    <Button
      className={`group not-disabled:inset-shadow-none inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full border-none bg-transparent p-0 font-normal shadow-none hover:bg-transparent transition-all duration-300 hover:scale-[1.02] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 ${className}`}
    >
      {/* Pill Text Label */}
      <span
        className={`rounded-full bg-ink text-paper font-sans transition-colors duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-accent-gold group-hover:text-ink ${
          isHero
            ? "px-5 py-2.5 text-xs sm:text-sm font-medium tracking-wide"
            : isLg
            ? "px-9 py-4 sm:px-12 sm:py-5 text-lg sm:text-2xl font-light tracking-tight"
            : "px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-medium"
        }`}
      >
        {label}
      </span>

      {/* Split Arrow Circle */}
      <div
        className={`relative flex items-center justify-center overflow-hidden rounded-full bg-ink text-paper transition-colors duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-accent-gold group-hover:text-ink shrink-0 ${
          isHero
            ? "h-9 w-9 sm:h-10 sm:w-10"
            : isLg
            ? "h-14 w-14 sm:h-16 sm:w-16"
            : "h-11 w-11 sm:h-12 sm:w-12"
        }`}
      >
        {/* Primary Arrow: slides out up-right on hover */}
        <ArrowUpRight
          className={`transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-7 group-hover:-translate-y-7 ${
            isHero
              ? "h-4 w-4"
              : isLg
              ? "h-6 w-6 sm:h-7 sm:w-7"
              : "h-5 w-5"
          }`}
        />
        {/* Secondary Arrow: slides in from bottom-left on hover */}
        <ArrowUpRight
          className={`absolute transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] -translate-x-7 translate-y-7 group-hover:translate-x-0 group-hover:translate-y-0 ${
            isHero
              ? "h-4 w-4"
              : isLg
              ? "h-6 w-6 sm:h-7 sm:w-7"
              : "h-5 w-5"
          }`}
        />
      </div>
    </Button>
  );

  const wrapped = (
    <Magnetic strength={6}>
      {buttonElement}
    </Magnetic>
  );

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} className="inline-block focus-visible:outline-none">
        {wrapped}
      </a>
    );
  }

  return (
    <Link href={href} className="inline-block focus-visible:outline-none">
      {wrapped}
    </Link>
  );
}
