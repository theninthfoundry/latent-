"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Check } from "lucide-react";

interface LatentFixModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LatentFixModal({ isOpen, onClose }: LatentFixModalProps) {
  const [whatHappened, setWhatHappened] = useState("");
  const [targetSystem, setTargetSystem] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!whatHappened) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setWhatHappened("");
    setTargetSystem("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-ink/70 backdrop-blur-md">
          {/* Backdrop Click Dismiss */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0"
          />

          {/* Minimal Atelier Back Door Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-md bg-paper p-7 sm:p-9 rounded-2xl border border-paper-border shadow-2xl overflow-hidden"
          >
            {/* Fine Indian stitch line at top */}
            <div className="absolute top-0 left-0 right-0 textile-stitch-x opacity-60" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-1.5 text-ink-muted hover:text-ink transition-colors rounded-full focus:outline-none"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {!submitted ? (
              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-atelier-indigo">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                    <span>LATENT / FIX &bull; Emergency Atelier Entry</span>
                  </div>
                  <h3 className="font-serif text-3xl font-light text-ink tracking-tight">
                    Something broken? <br />
                    <span className="italic text-ink-muted">Send it.</span>
                  </h3>
                </div>

                {/* The 2-field raw submission */}
                <form onSubmit={handleSubmit} className="space-y-4 pt-1">
                  <div>
                    <label className="block font-mono text-[9px] uppercase tracking-widest text-ink-muted mb-1.5">
                      What happened?
                    </label>
                    <textarea
                      rows={3}
                      required
                      autoFocus
                      placeholder="e.g. Navigation collapsed on mobile, deployment failing on Vercel, or checkout throws 500 error..."
                      value={whatHappened}
                      onChange={(e) => setWhatHappened(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-paper-card border border-paper-border font-sans text-xs sm:text-sm text-ink placeholder:text-ink-muted/50 focus:outline-none focus:border-atelier-indigo focus:ring-1 focus:ring-atelier-indigo resize-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[9px] uppercase tracking-widest text-ink-muted mb-1.5">
                      Target URL or Repository
                    </label>
                    <input
                      type="text"
                      placeholder="https://... or github.com/..."
                      value={targetSystem}
                      onChange={(e) => setTargetSystem(e.target.value)}
                      className="w-full h-11 px-3.5 rounded-xl bg-paper-card border border-paper-border font-mono text-xs sm:text-sm text-ink placeholder:text-ink-muted/50 focus:outline-none focus:border-atelier-indigo focus:ring-1 focus:ring-atelier-indigo"
                    />
                  </div>

                  {/* Submission Action */}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-ink-muted">
                      Direct to <strong className="text-ink">fix@latent.studio</strong>
                    </span>
                    <button
                      type="submit"
                      className="h-10 px-5 rounded-full bg-atelier-indigo text-paper font-mono text-xs uppercase tracking-wider hover:bg-ink transition-colors flex items-center gap-2 shadow-xs"
                    >
                      <span>Send</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* Immediate Confirmation State */
              <div className="py-8 text-center space-y-4">
                <div className="w-10 h-10 rounded-full bg-atelier-indigo/10 text-atelier-indigo flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-2xl font-light text-ink">
                    We&apos;ll take a look.
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-ink-muted max-w-xs mx-auto font-light leading-relaxed">
                    Signal logged into the repair docket. We inspect the breakdown and dispatch direct diagnostic findings.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-4 py-1.5 rounded-full bg-paper border border-paper-border text-ink font-mono text-[10px] uppercase tracking-wider hover:bg-paper-subtle transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
