"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HandDrawnArrow } from "./naive-elements";

export function Entrance({ onComplete }: { onComplete?: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          aria-label="Opening mark"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-between py-24 bg-paper text-ink px-6 select-none cursor-pointer"
          onClick={() => {
            setVisible(false);
            onComplete?.();
          }}
        >
          {/* Top minimal mark */}
          <div className="font-serif text-sm tracking-widest uppercase text-ink-muted">
            LATENT
          </div>

          {/* Center bold minimalist statement */}
          <div className="text-center space-y-6 max-w-md">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-serif text-2xl sm:text-3xl font-light tracking-tight text-ink leading-tight uppercase"
            >
              There is something <br />
              here.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="font-serif text-lg sm:text-xl font-light text-ink-muted italic"
            >
              We find it.
            </motion.p>
          </div>

          {/* Bottom hand-drawn down arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center gap-2"
          >
            <HandDrawnArrow direction="down" className="w-5 h-10 text-ink-muted animate-bounce" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-ink-muted">
              enter
            </span>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
