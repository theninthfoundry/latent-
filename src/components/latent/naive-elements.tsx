import React from "react";

/**
 * Naïve Design Elements (3% of LATENT visual language):
 * Intentionally imperfect, direct, curious, and human.
 * Provides organic tension against ultra-sophisticated technology.
 */

export function HandDrawnArrow({
  className = "w-12 h-12 text-ink-muted",
  direction = "down-right",
}: {
  className?: string;
  direction?: "down-right" | "down" | "right" | "curved-down";
}) {
  if (direction === "curved-down") {
    return (
      <svg
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M10 8 C 28 8, 48 18, 44 42 M 34 36 L 44 43 L 50 32"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (direction === "down") {
    return (
      <svg
        viewBox="0 0 24 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M12 4 C 11.5 16, 12.8 28, 12 42 M 6 36 L 12 43 L 18 35"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 12 C 18 12, 34 16, 38 34 M 28 32 L 38 36 L 40 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ImperfectCircle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <svg
        className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] pointer-events-none text-ink/40"
        viewBox="0 0 100 60"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M10 32 C 8 14, 25 6, 52 8 C 80 10, 96 18, 92 36 C 88 52, 60 56, 32 54 C 14 52, 6 42, 12 28"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export function ScribbleUnderline({ className = "text-ink/30" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-3 ${className}`}
      preserveAspectRatio="none"
    >
      <path
        d="M2 8 C 24 4, 60 3, 118 7 M 10 10 C 42 7, 85 6, 110 9"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WashiTape({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-5 w-20 bg-[#E2DFD7]/80 backdrop-blur-[1px] border-l-2 border-r-2 border-dashed border-ink/20 shadow-sm rotate-[-2deg] select-none pointer-events-none z-20 ${className}`}
    />
  );
}
