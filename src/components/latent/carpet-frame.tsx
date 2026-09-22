"use client";

import React from "react";

interface CarpetFrameProps {
  children: React.ReactNode;
  className?: string;
  variant?: "brass" | "indigo" | "subtle";
  title?: string;
  tag?: string;
}

export function CarpetFrame({
  children,
  className = "",
  variant = "brass",
  title,
  tag,
}: CarpetFrameProps) {
  const strokeColor =
    variant === "brass"
      ? "rgba(182, 160, 106, 0.45)"
      : variant === "indigo"
      ? "rgba(20, 44, 72, 0.35)"
      : "rgba(226, 223, 215, 0.85)";

  const accentColor =
    variant === "brass"
      ? "#B6A06A"
      : variant === "indigo"
      ? "#142C48"
      : "#78736A";

  return (
    <div className={`relative p-5 sm:p-8 rounded-2xl bg-paper border border-paper-border/80 shadow-[0_8px_30px_rgba(20,44,72,0.03)] overflow-hidden ${className}`}>
      {/* Corner Filigree: Top-Left */}
      <svg
        className="absolute top-2 left-2 w-10 h-10 pointer-events-none text-current opacity-80"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 38V12C2 6.477 6.477 2 12 2H38"
          stroke={strokeColor}
          strokeWidth="1.2"
        />
        <path
          d="M6 34V14C6 9.582 9.582 6 14 6H34"
          stroke={strokeColor}
          strokeWidth="0.8"
          strokeDasharray="2 3"
        />
        <circle cx="10" cy="10" r="1.5" fill={accentColor} />
        {/* Botanical leaf swirl */}
        <path
          d="M10 10C14 10 18 14 18 18C18 22 14 26 10 26"
          stroke={strokeColor}
          strokeWidth="0.75"
        />
        <path
          d="M10 10C10 14 14 18 18 18C22 18 26 14 26 10"
          stroke={strokeColor}
          strokeWidth="0.75"
        />
      </svg>

      {/* Corner Filigree: Top-Right */}
      <svg
        className="absolute top-2 right-2 w-10 h-10 pointer-events-none text-current opacity-80"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M38 38V12C38 6.477 33.523 2 28 2H2"
          stroke={strokeColor}
          strokeWidth="1.2"
        />
        <path
          d="M34 34V14C34 9.582 30.418 6 26 6H6"
          stroke={strokeColor}
          strokeWidth="0.8"
          strokeDasharray="2 3"
        />
        <circle cx="30" cy="10" r="1.5" fill={accentColor} />
        <path
          d="M30 10C26 10 22 14 22 18C22 22 26 26 30 26"
          stroke={strokeColor}
          strokeWidth="0.75"
        />
        <path
          d="M30 10C30 14 26 18 22 18C18 18 14 14 14 10"
          stroke={strokeColor}
          strokeWidth="0.75"
        />
      </svg>

      {/* Corner Filigree: Bottom-Left */}
      <svg
        className="absolute bottom-2 left-2 w-10 h-10 pointer-events-none text-current opacity-80"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2V28C2 33.523 6.477 38 12 38H38"
          stroke={strokeColor}
          strokeWidth="1.2"
        />
        <path
          d="M6 6V26C6 30.418 9.582 34 14 34H34"
          stroke={strokeColor}
          strokeWidth="0.8"
          strokeDasharray="2 3"
        />
        <circle cx="10" cy="30" r="1.5" fill={accentColor} />
        <path
          d="M10 30C14 30 18 26 18 22C18 18 14 14 10 14"
          stroke={strokeColor}
          strokeWidth="0.75"
        />
        <path
          d="M10 30C10 26 14 22 18 22C22 22 26 26 26 30"
          stroke={strokeColor}
          strokeWidth="0.75"
        />
      </svg>

      {/* Corner Filigree: Bottom-Right */}
      <svg
        className="absolute bottom-2 right-2 w-10 h-10 pointer-events-none text-current opacity-80"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M38 2V28C38 33.523 33.523 38 28 38H2"
          stroke={strokeColor}
          strokeWidth="1.2"
        />
        <path
          d="M34 6V26C34 30.418 30.418 34 26 34H6"
          stroke={strokeColor}
          strokeWidth="0.8"
          strokeDasharray="2 3"
        />
        <circle cx="30" cy="30" r="1.5" fill={accentColor} />
        <path
          d="M30 30C26 30 22 26 22 22C22 18 26 14 30 14"
          stroke={strokeColor}
          strokeWidth="0.75"
        />
        <path
          d="M30 30C30 26 26 22 22 22C18 22 14 26 14 30"
          stroke={strokeColor}
          strokeWidth="0.75"
        />
      </svg>

      {/* Optional Archival Header Header Ribbon */}
      {(title || tag) && (
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-paper-border/60 font-mono text-[10px] uppercase tracking-widest text-ink-muted">
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: accentColor }}
            />
            <span>{title}</span>
          </div>
          {tag && <span className="text-atelier-brass font-medium">{tag}</span>}
        </div>
      )}

      {/* Interior Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
