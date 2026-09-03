"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import type Lenis from "lenis";

interface SmoothScrollContextValue {
  lenis: Lenis | undefined;
  reducedMotion: boolean;
}

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  lenis: undefined,
  reducedMotion: false,
});

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

export { useLenis };

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Detect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // If user requests reduced motion, bypass Lenis smoothing completely
  if (reducedMotion) {
    return (
      <SmoothScrollContext.Provider value={{ lenis: undefined, reducedMotion: true }}>
        {children}
      </SmoothScrollContext.Provider>
    );
  }

  return (
    <ReactLenis
      root
      options={{
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Controlled Apple-like deceleration curve
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.92, // Weighted physical feel
        touchMultiplier: 1.1,
        infinite: false,
        autoResize: true,
      }}
    >
      <SmoothScrollInternalWrapper reducedMotion={reducedMotion}>
        {children}
      </SmoothScrollInternalWrapper>
    </ReactLenis>
  );
}

function SmoothScrollInternalWrapper({
  children,
  reducedMotion,
}: {
  children: React.ReactNode;
  reducedMotion: boolean;
}) {
  const lenis = useLenis();

  return (
    <SmoothScrollContext.Provider value={{ lenis, reducedMotion }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
