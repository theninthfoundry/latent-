"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Check, ShieldAlert, Sparkles } from "lucide-react";

interface LatentFixModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LatentFixModal({ isOpen, onClose }: LatentFixModalProps) {
  const [whatHappened, setWhatHappened] = useState("");
  const [targetSystem, setTargetSystem] = useState("");
  const [contactEmail, setContactEmail] = useState("");
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
    setContactEmail("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-ink/75 backdrop-blur-md">
          {/* Backdrop Click Dismiss */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0"
          />

          {/* Handcrafted Atelier Dispatch Docket */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 14 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg bg-paper p-7 sm:p-10 rounded-3xl border border-atelier-brass/50 shadow-2xl overflow-hidden"
          >
            {/* Tilted Parchment Washi Tape at Top Left */}
            <div className="washi-tape -top-2.5 left-10 opacity-90 shadow-xs" />

            {/* Fine Indian stitch line at top */}
            <div className="absolute top-0 left-0 right-0 textile-stitch-x opacity-60" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-ink-muted hover:text-ink hover:bg-paper-subtle transition-colors rounded-full focus:outline-none"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {!submitted ? (
              <div className="space-y-6 pt-2">
                {/* Docket Rubber Stamp Header */}
                <div className="flex items-center justify-between border-b border-paper-border pb-3">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-accent-clay/40 bg-accent-clay/5 font-mono text-[9px] uppercase tracking-widest text-accent-clay font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-clay animate-pulse" />
                    <span>LATENT // EMERGENCY DISPATCH DOCKET № 2026</span>
                  </div>
                  <span className="font-mono text-[10px] text-ink-muted tracking-widest hidden sm:inline">
                    17°23&apos; N, 78°29&apos; E
                  </span>
                </div>

                {/* Mixed-Font Headline */}
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl sm:text-4xl font-light text-ink tracking-tight leading-[1.1]">
                    Something{" "}
                    <span className="italic font-normal text-accent-clay">
                      broken
                    </span>
                    ? <br />
                    Send it to the{" "}
                    <span className="italic font-normal text-atelier-indigo underline decoration-atelier-brass/60 underline-offset-4">
                      atelier
                    </span>
                    .
                  </h3>

                  {/* Handwritten Annotation in Caveat */}
                  <p className="font-hand text-lg sm:text-xl text-accent-clay leading-snug pt-1">
                    ← Direct to senior engineers. No support tickets. We inspect broken deploys, collapsed layouts &amp; failing checkouts within 24 hours.
                  </p>
                </div>

                {/* Dispatch Form */}
                <form onSubmit={handleSubmit} className="space-y-4 pt-1">
                  <div>
                    <label className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-ink-muted mb-1.5">
                      <span>01 // What happened?</span>
                      <span className="text-accent-clay font-medium">* Required</span>
                    </label>
                    <textarea
                      rows={3}
                      required
                      autoFocus
                      placeholder="e.g. Mobile navigation collapses below 768px, checkout throws 500 on iOS Safari, or deployment failing on Vercel..."
                      value={whatHappened}
                      onChange={(e) => setWhatHappened(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-paper-card border border-paper-border font-sans text-xs sm:text-sm text-ink placeholder:text-ink-muted/50 focus:outline-none focus:border-atelier-indigo focus:ring-1 focus:ring-atelier-indigo resize-none leading-relaxed transition-all shadow-2xs"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-widest text-ink-muted mb-1.5">
                        02 // Target URL or Repo
                      </label>
                      <input
                        type="text"
                        placeholder="https://... or github.com/..."
                        value={targetSystem}
                        onChange={(e) => setTargetSystem(e.target.value)}
                        className="w-full h-10 px-3.5 rounded-xl bg-paper-card border border-paper-border font-mono text-xs text-ink placeholder:text-ink-muted/50 focus:outline-none focus:border-atelier-indigo focus:ring-1 focus:ring-atelier-indigo transition-all shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-widest text-ink-muted mb-1.5">
                        03 // Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="founder@company.com"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full h-10 px-3.5 rounded-xl bg-paper-card border border-paper-border font-mono text-xs text-ink placeholder:text-ink-muted/50 focus:outline-none focus:border-atelier-indigo focus:ring-1 focus:ring-atelier-indigo transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Submission Action */}
                  <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-paper-border/80">
                    <div className="font-mono text-[10px] text-ink-muted flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      <span>Direct intake: <strong className="text-ink">fix@latent.studio</strong></span>
                    </div>

                    <button
                      type="submit"
                      className="group h-11 px-6 rounded-full bg-atelier-indigo text-paper font-mono text-xs uppercase tracking-wider hover:bg-ink transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md active:scale-[0.98]"
                    >
                      <span className="font-semibold">Dispatch Signal</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* Stamped Archival Confirmation State */
              <div className="py-8 text-center space-y-5">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-500/20 shadow-xs">
                  <Check className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-paper-subtle border border-paper-border font-mono text-[9px] uppercase tracking-widest text-ink-muted">
                    DOCKET LOGGED // STATUS: QUEUED FOR INSPECTION
                  </span>
                  <h4 className="font-serif text-3xl font-light text-ink">
                    Signal registered. <br />
                    <span className="italic font-normal text-atelier-indigo">We&apos;ll take it from here.</span>
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-ink-muted max-w-sm mx-auto font-light leading-relaxed pt-1">
                    Your breakdown has been dispatched directly to Latent engineers. We inspect the code, reproduce the friction, and reply to <strong className="text-ink">{contactEmail || "your email"}</strong> within 24 hours.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2 rounded-full bg-paper border border-atelier-brass/60 text-ink font-mono text-xs uppercase tracking-wider hover:bg-paper-card transition-all shadow-2xs"
                  >
                    Close Docket
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

export default LatentFixModal;
