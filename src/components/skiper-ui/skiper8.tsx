"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "Hallo",
];

interface Skiper8Props {
  onComplete?: () => void;
  className?: string;
  words?: string[];
  duration?: number;
}

export function Skiper8({
  onComplete,
  className,
  words = WORDS,
}: Skiper8Props) {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1440,
    height: typeof window !== "undefined" ? window.innerHeight : 900,
  });
  const [isActive, setIsActive] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  // Measure window dimensions
  useEffect(() => {
    const updateDimension = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimension();
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  // Word cycling sequence with guaranteed progression
  useEffect(() => {
    if (!isActive) return;

    if (index >= words.length - 1) {
      const exitTimer = setTimeout(() => {
        setIsActive(false);
      }, 400);
      return () => clearTimeout(exitTimer);
    }

    const stepDelay = index === 0 ? 550 : 110;
    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, stepDelay);

    return () => clearTimeout(timeout);
  }, [index, words.length, isActive]);

  // Absolute fail-safe: Force dismiss after 2.5s maximum under all conditions
  useEffect(() => {
    const failSafeTimer = setTimeout(() => {
      setIsActive(false);
      setIsDismissed(true);
      onComplete?.();
    }, 2500);

    return () => clearTimeout(failSafeTimer);
  }, [onComplete]);

  const w = dimension.width || 1440;
  const h = dimension.height || 900;

  const initialPath = useMemo(
    () => `M0 0 L${w} 0 L${w} ${h} Q${w / 2} ${h + 260} 0 ${h} L0 0`,
    [w, h]
  );
  const targetPath = useMemo(
    () => `M0 0 L${w} 0 L${w} ${h} Q${w / 2} ${h} 0 ${h} L0 0`,
    [w, h]
  );

  const curveVariants = {
    initial: {
      d: initialPath,
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.15 },
    },
  };

  const slideUpVariants = {
    initial: {
      y: "0%",
    },
    exit: {
      y: "-100%",
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1], delay: 0.1 },
    },
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        setIsDismissed(true);
        onComplete?.();
      }}
    >
      {isActive && (
        <motion.div
          variants={slideUpVariants}
          initial="initial"
          exit="exit"
          style={{ willChange: "transform" }}
          className={`fixed inset-0 w-screen h-screen z-[99999] flex items-center justify-center bg-[#141516] text-white select-none ${
            className || ""
          }`}
        >
          {/* Word Reveal */}
          <div className="relative z-10 flex items-center gap-3 text-3xl font-medium tracking-wide sm:text-5xl">
            <span className="h-3 w-3 rounded-full bg-white/70" />
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.1 }}
            >
              {words[Math.min(index, words.length - 1)]}
            </motion.p>
          </div>

          {/* Curved SVG Exit Wave */}
          <svg className="pointer-events-none absolute top-0 left-0 h-[calc(100%+260px)] w-full overflow-visible fill-[#141516]">
            <motion.path
              variants={curveVariants}
              initial="initial"
              exit="exit"
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
