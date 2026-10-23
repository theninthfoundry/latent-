"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CREATIVE_ASSETS } from "@/lib/creative-assets";
import { InteractiveSticker } from "./interactive-sticker";

export function CreativeEphemeraCanvas() {
  const [isOpen, setIsOpen] = useState(false);
  const [keyReset, setKeyReset] = useState(0);

  return (
    <>
      {/* Dynamic WebGL-style SVG Filter Pipeline */}
      <svg className="fixed w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="creative-lens-warp" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015"
              numOctaves="2"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="4"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          <filter id="analog-risograph-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
              result="grain"
            />
            <feColorMatrix type="saturate" values="0" />
            <feBlend mode="multiply" in="SourceGraphic" in2="grain" />
          </filter>
        </defs>
      </svg>

      {/* Floating Persistent Creative Ephemera Dock */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-paper/95 backdrop-blur-md border border-paper-border rounded-2xl p-5 shadow-[0_20px_50px_rgba(23,21,15,0.22)] w-[320px] sm:w-[400px] max-w-[calc(100vw-3rem)] max-h-[84vh] overflow-y-auto flex flex-col gap-4"
            >
              <div className="flex items-center justify-between border-b border-paper-border pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-clay animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-widest text-ink font-medium">
                    Studio Ephemera Tray
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="font-mono text-[11px] text-ink-muted hover:text-ink transition-colors p-1"
                >
                  ✕
                </button>
              </div>

              <p className="font-sans text-xs text-ink-muted font-light leading-relaxed">
                Physical stickers &amp; studio marks. Drag any specimen directly into the page workspace, or inspect its tactile craft.
              </p>

              {/* Sticker Thumbnail Grid */}
              <div
                key={keyReset}
                className="grid grid-cols-3 gap-3 p-2 bg-paper-card border border-paper-border/60 rounded-xl"
              >
                {CREATIVE_ASSETS.map((asset) => (
                  <div
                    key={asset.id}
                    className="relative flex flex-col items-center justify-center p-2 rounded-lg hover:bg-paper transition-colors group cursor-grab active:cursor-grabbing"
                    title={asset.philosophy}
                  >
                    <InteractiveSticker
                      id={asset.id}
                      size="custom"
                      widthClass="w-16 h-16 sm:w-20 sm:h-20"
                      enableDrag={true}
                      showCaption={false}
                    />
                    <span className="font-mono text-[9px] text-ink-muted uppercase tracking-wider mt-1 text-center truncate max-w-full">
                      {asset.name.replace(/["“”]/g, "")}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-paper-border/50 text-[10px] font-mono text-ink-muted">
                <span>{CREATIVE_ASSETS.length} marks loaded</span>
                <button
                  type="button"
                  onClick={() => setKeyReset((k) => k + 1)}
                  className="underline hover:text-ink transition-colors"
                >
                  Reset Placements
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trigger Pill Button */}
        <motion.button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className={`group flex items-center gap-2.5 px-4 py-2 rounded-full shadow-lg border transition-all duration-300 ${
            isOpen
              ? "bg-ink text-paper border-ink"
              : "bg-paper/90 backdrop-blur-md text-ink border-paper-border hover:border-ink hover:shadow-xl"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-clay" />
          <span className="font-mono text-[11px] tracking-wider uppercase font-medium">
            ✦ Studio Ephemera ({CREATIVE_ASSETS.length})
          </span>
          <span className="font-sans text-xs text-ink-muted group-hover:text-paper transition-colors">
            {isOpen ? "↓" : "↑"}
          </span>
        </motion.button>
      </div>
    </>
  );
}

export default CreativeEphemeraCanvas;
