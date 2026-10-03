"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CarpetFrame } from "./carpet-frame";
import { ArrowRight, CheckCircle, AlertCircle, Sparkles, Send, ShieldCheck, AlertTriangle, AlertOctagon } from "lucide-react";

interface SpecimenAudit {
  id: string;
  name: string;
  url: string;
  category: string;
  headlineNote: string;
  scores: {
    speed: { val: number; note: string };
    mobileUx: { val: number; note: string };
    codeHealth: { val: number; note: string };
    visualSystem: { val: number; note: string };
  };
  whatIsWrong: React.ReactNode;
  whyItMatters: React.ReactNode;
  whatShouldChange: React.ReactNode;
  handwrittenNote: string;
  verdict: "repair" | "evolve" | "sound";
  statusBadge: React.ReactNode;
  verdictLabel: string;
}

const SPECIMENS: SpecimenAudit[] = [
  {
    id: "legacy-shop",
    name: "Luxury E-Commerce Specimen",
    url: "archive.atelier-textiles.com",
    category: "Retail Infrastructure",
    headlineNote: "High-ticket luxury apparel store experiencing silent mobile checkout failure.",
    scores: {
      speed: { val: 48, note: "5.4MB uncompressed banners" },
      mobileUx: { val: 42, note: "Nav collapses below 768px" },
      codeHealth: { val: 59, note: "Silent iOS storage crash" },
      visualSystem: { val: 38, note: "Font mismatch & broken grid" },
    },
    whatIsWrong: (
      <>
        Mobile navigation <span className="font-serif italic text-accent-clay font-semibold">collapses below 768px</span>. Homepage loads 5.4MB of uncompressed raster banners. Cart checkout flow <span className="font-mono text-xs bg-accent-clay/10 text-accent-clay px-1.5 py-0.5 rounded font-medium">fails silently on iOS Safari</span> due to local storage quota rejection.
      </>
    ),
    whyItMatters: (
      <>
        <span className="font-serif italic text-ink font-semibold">68% of visitors abandon checkout</span> within the first 4 seconds. Visual inconsistency between catalog and checkout creates acute brand distrust and an estimated <span className="font-mono text-xs text-accent-clay font-semibold">~$14k/mo revenue leakage</span>.
      </>
    ),
    whatShouldChange: (
      <>
        Refactor cart state into an <span className="font-serif italic text-atelier-indigo font-semibold">atomic offline-safe IndexedDB store</span>. Modernize responsive jaali-style image grids with an automated AVIF pipeline. Harmonize visual typography.
      </>
    ),
    handwrittenNote: "Real issue: 5.4MB uncompressed images causing immediate mobile bounce. Fixed in a 48h surgical sprint.",
    statusBadge: <span className="flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5" strokeWidth={1.5} /> CRITICAL RUNTIME FRICTION DETECTED</span>,
    verdictLabel: "LATENT RECOMMENDS: REPAIR",
  },
  {
    id: "abandoned-saas",
    name: "Abandoned SaaS Dashboard",
    url: "app.telemetry-node.io",
    category: "Internal Tooling",
    headlineNote: "B2B analytics portal orphaned after previous dev agency abruptly exited.",
    scores: {
      speed: { val: 61, note: "Next.js 12 chunk bloat" },
      mobileUx: { val: 36, note: "Broken tables on tablet" },
      codeHealth: { val: 34, note: "14 orphaned packages & leaks" },
      visualSystem: { val: 49, note: "Clashing CSS & styles" },
    },
    whatIsWrong: (
      <>
        Inherited Next.js 12 repository with <span className="font-serif italic text-accent-clay font-semibold">14 orphaned dependencies</span>, unpinned Docker base images, and vanished developer documentation. 8 API endpoints <span className="font-mono text-xs bg-red-500/10 text-red-800 px-1.5 py-0.5 rounded font-medium">leak raw SQL errors</span> in response headers.
      </>
    ),
    whyItMatters: (
      <>
        The internal team is <span className="font-serif italic text-accent-clay font-semibold">afraid to touch the codebase</span>. Every new feature takes three weeks to patch and frequently crashes production builds during customer demos.
      </>
    ),
    whatShouldChange: (
      <>
        Latent Rescue takeover: <span className="font-serif italic text-atelier-indigo font-semibold">quarantine dependencies</span>, reconstruct automated testing matrix, migrate App Router, and deliver clear architectural schematics.
      </>
    ),
    handwrittenNote: "Common disaster when external agencies vanish. We stabilize code without needing a total rewrite.",
    statusBadge: <span className="flex items-center gap-1.5"><AlertOctagon className="w-3.5 h-3.5" strokeWidth={1.5} /> ORPHANED ARCHITECTURE & DATA LEAK</span>,
    verdictLabel: "LATENT RECOMMENDS: EVOLVE / RESCUE",
  },
  {
    id: "sound-monograph",
    name: "Architectural Studio Monograph",
    url: "studio-kanso.design",
    category: "Digital Identity",
    headlineNote: "Restrained, dignified portfolio built with disciplined craft and semantic clarity.",
    scores: {
      speed: { val: 94, note: "Fast < 750ms render" },
      mobileUx: { val: 91, note: "Fluid 60fps touch gestures" },
      codeHealth: { val: 95, note: "Zero external dependencies" },
      visualSystem: { val: 97, note: "Harmonious Fraunces serif" },
    },
    whatIsWrong: (
      <>
        Minor font-display swap warning on slow connections. Minimal semantic markup omission on secondary image captions. <span className="font-serif italic text-emerald-800 font-semibold">Zero material defects found.</span>
      </>
    ),
    whyItMatters: (
      <>
        <span className="font-serif italic text-emerald-800 font-semibold">Virtually zero negative impact.</span> The website is fast, dignified, and visually restrained. Visitors navigate with calmness and high trust.
      </>
    ),
    whatShouldChange: (
      <>
        <span className="font-serif italic text-emerald-800 font-semibold">Nothing substantial.</span> We do not manufacture fake problems where genuine craft already exists. Keep your capital and maintain current system.
      </>
    ),
    handwrittenNote: "Uncompromising studio integrity: if a codebase is already well-made, we advise you to leave it untouched.",
    statusBadge: <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5" strokeWidth={1.5} /> VERIFIED SOUND SUBSTRATE (ARCHIVAL GRADE)</span>,
    verdictLabel: "LATENT RECOMMENDS: LEAVE IT",
  },
];

export function DiagnosticEngine() {
  const [activeTab, setActiveTab] = useState<"specimens" | "live">("specimens");
  const [selectedSpecimen, setSelectedSpecimen] = useState<SpecimenAudit>(SPECIMENS[0]);
  const [liveUrl, setLiveUrl] = useState("");
  const [liveEmail, setLiveEmail] = useState("");
  const [liveRequested, setLiveRequested] = useState(false);

  const handleLiveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!liveUrl) return;
    setLiveRequested(true);
  };

  return (
    <div id="audit" className="w-full max-w-5xl mx-auto my-10 sm:my-14 space-y-8">
      {/* Editorial Header with Mixed Typography */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-paper-border">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-ink-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-clay" />
            <span>§ 04 // LATENT DIAGNOSTIC &bull; TELEMETRY MONOGRAPH</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-ink tracking-[-0.03em] text-balance">
            We find what{" "}
            <span className="italic font-normal text-accent-clay underline decoration-paper-border underline-offset-4">
              isn&apos;t working
            </span>
            .
          </h3>
          <p className="font-sans text-xs sm:text-sm text-ink-muted font-light max-w-[62ch] text-pretty leading-[1.6]">
            Not marketing fluff or generic Lighthouse scores. An unvarnished technical inspection of{" "}
            <span className="font-mono text-xs bg-paper-subtle px-1.5 py-0.5 rounded border border-paper-border text-ink">
              runtime friction
            </span>
            , mobile breakdown, code entropy, and security surface.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-paper-card border border-paper-border font-mono text-[10px] uppercase tracking-wider shadow-subtle shrink-0">
          <button
            onClick={() => setActiveTab("specimens")}
            className={`px-4 py-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink ${
              activeTab === "specimens"
                ? "bg-atelier-indigo text-paper font-semibold shadow-subtle"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            Specimen Audits
          </button>
          <button
            onClick={() => setActiveTab("live")}
            className={`px-4 py-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink ${
              activeTab === "live"
                ? "bg-atelier-indigo text-paper font-semibold shadow-subtle"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            Request Live Audit
          </button>
        </div>
      </div>

      {activeTab === "specimens" ? (
        /* 01 — Specimen Audits */
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 w-full max-w-[1440px] mx-auto relative pt-8">
          {/* Sticky Left Meta Column */}
          <div className="lg:w-[320px] shrink-0 lg:sticky lg:top-32 space-y-12">
            
            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                Specimen Index
              </span>
              <div
                className="flex flex-col gap-1 p-1 bg-paper-card border border-paper-border rounded-xl"
                role="radiogroup"
                aria-label="Select Specimen"
              >
                {SPECIMENS.map((specimen) => (
                  <button
                    key={specimen.id}
                    role="radio"
                    aria-checked={selectedSpecimen.id === specimen.id}
                    onClick={() => setSelectedSpecimen(specimen)}
                    className={`px-4 py-3 rounded-lg font-mono text-[11px] text-left transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink ${
                      selectedSpecimen.id === specimen.id
                        ? "bg-ink text-paper shadow-sm font-semibold"
                        : "text-ink-muted hover:bg-paper-subtle hover:text-ink"
                    }`}
                  >
                    <div className="flex justify-between items-center w-full">
                      <span>{specimen.name}</span>
                      {selectedSpecimen.id === specimen.id && <CheckCircle className="w-3.5 h-3.5 text-paper" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4 font-mono text-[10px]">
               <div className="border-b border-paper-border pb-3">
                 <span className="text-ink-muted block mb-1">Target URL</span> 
                 <span className="text-ink text-xs">{selectedSpecimen.url}</span>
               </div>
               <div className="border-b border-paper-border pb-3">
                 <span className="text-ink-muted block mb-1">Audit Verdict</span> 
                 <span className="font-semibold text-ink text-xs">{selectedSpecimen.verdictLabel}</span>
               </div>
               <div className="pt-2">
                 <span className="text-ink-muted block mb-1">Status</span> 
                 <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${
                      selectedSpecimen.verdict === "sound" ? "bg-emerald-700" : selectedSpecimen.verdict === "evolve" ? "bg-atelier-brass" : "bg-accent-clay"
                    }`} />
                    <span className="text-ink uppercase">{selectedSpecimen.statusBadge}</span>
                 </div>
               </div>
            </div>
          </div>

          {/* The Master Diagnostic Document (Right) */}
          <div className="flex-1 min-w-0">
            <CarpetFrame
              variant="brass"
              title={`LATENT REPORT / 001 // ${selectedSpecimen.url.toUpperCase()}`}
              tag={selectedSpecimen.verdictLabel}
              className="w-full"
            >
              <div className="space-y-6">
                
                {/* Top Alert Banner */}
                <div className={`px-5 py-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  selectedSpecimen.verdict === 'repair' ? 'bg-accent-clay/5 border-accent-clay/20 text-accent-clay' :
                  selectedSpecimen.verdict === 'evolve' ? 'bg-amber-500/5 border-amber-500/20 text-amber-800' :
                  'bg-emerald-500/5 border-emerald-500/20 text-emerald-800'
                }`}>
                  <div className="font-mono text-[11px] font-bold uppercase tracking-wider flex items-center">
                    {selectedSpecimen.statusBadge}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest opacity-60">
                    TARGET: <span className="font-semibold">{selectedSpecimen.url.toUpperCase()}</span>
                  </div>
                </div>

                {/* Scores Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { title: "01. Runtime Speed", val: selectedSpecimen.scores.speed.val, note: selectedSpecimen.scores.speed.note },
                    { title: "02. Mobile Conversion", val: selectedSpecimen.scores.mobileUx.val, note: selectedSpecimen.scores.mobileUx.note },
                    { title: "03. Code & State Health", val: selectedSpecimen.scores.codeHealth.val, note: selectedSpecimen.scores.codeHealth.note },
                    { title: "04. Visual System", val: selectedSpecimen.scores.visualSystem.val, note: selectedSpecimen.scores.visualSystem.note },
                  ].map((item) => {
                    const isLow = item.val < 50;
                    const isMed = item.val >= 50 && item.val < 80;
                    
                    const scoreColor = isLow ? "text-accent-clay" : isMed ? "text-amber-700" : "text-emerald-700";
                    const barColor = isLow ? "bg-accent-clay" : isMed ? "bg-amber-700" : "bg-emerald-700";

                    return (
                      <div key={item.title} className="p-4 rounded-xl border border-paper-border/80 bg-white flex flex-col gap-3 shadow-sm">
                        <div className="flex justify-between items-start">
                          <span className="font-mono text-[9px] uppercase tracking-widest text-ink-muted max-w-[80px] leading-tight">
                            {item.title}
                          </span>
                          <span className={`font-serif text-2xl font-semibold ${scoreColor}`}>
                            {item.val}/100
                          </span>
                        </div>
                        <div className="h-1.5 w-full bg-ink/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.val}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className={`h-full rounded-full ${barColor}`}
                          />
                        </div>
                        <span className="font-sans text-[11px] text-ink-muted">
                          {item.note}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Diagnostic Blocks */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl border border-accent-clay/20 bg-white space-y-3 shadow-sm">
                    <div className="flex items-center gap-2 text-accent-clay font-mono text-[10px] uppercase tracking-widest font-bold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>01 // The Breakdown</span>
                    </div>
                    <p className="font-sans text-[13px] text-ink/80 leading-relaxed text-pretty">
                      {selectedSpecimen.whatIsWrong}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-amber-700/20 bg-white space-y-3 shadow-sm">
                    <div className="flex items-center gap-2 text-amber-800 font-mono text-[10px] uppercase tracking-widest font-bold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>02 // The Business Cost</span>
                    </div>
                    <p className="font-sans text-[13px] text-ink/80 leading-relaxed text-pretty">
                      {selectedSpecimen.whyItMatters}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-atelier-indigo/20 bg-white space-y-3 shadow-sm">
                    <div className="flex items-center gap-2 text-atelier-indigo font-mono text-[10px] uppercase tracking-widest font-bold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>03 // Latent Prescription</span>
                    </div>
                    <p className="font-sans text-[13px] text-ink/80 leading-relaxed text-pretty">
                      {selectedSpecimen.whatShouldChange}
                    </p>
                  </div>
                </div>

                {/* Handwritten Note */}
                <div className="px-5 py-4 rounded-xl bg-[#F0EBE1]/50 border border-paper-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="font-hand text-lg text-accent-clay/90">
                    &larr; {selectedSpecimen.handwrittenNote}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-ink/40 font-bold shrink-0">
                    Atelier Notes
                  </span>
                </div>

                {/* Footer Action */}
                <div className="pt-2">
                  <div className="px-6 py-4 rounded-xl border border-paper-border bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-ink">
                      Studio Finding // Action Protocol
                    </span>
                    {selectedSpecimen.verdict === "sound" ? (
                      <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 font-mono text-[11px] font-bold uppercase tracking-wider">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Verified Sound</span>
                      </div>
                    ) : (
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-atelier-indigo text-paper font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-ink transition-all shadow-sm"
                      >
                        <span>Remediate with Latent</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </CarpetFrame>
          </div>
        </div>
      ) : (
        /* 02 — Request a Live System Audit */
        <div className="p-7 sm:p-10 rounded-2xl bg-paper-card border border-paper-border space-y-6 shadow-card">
          {!liveRequested ? (
            <form onSubmit={handleLiveSubmit} className="space-y-5 max-w-xl">
              <div className="space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted font-medium block">
                  COMMISSION SYSTEM TELEMETRY INSPECTION
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl font-light text-ink tracking-tight">
                  Connect your project to the atelier.
                </h4>
                <p className="font-sans text-xs sm:text-sm text-ink-muted leading-[1.6] max-w-[60ch]">
                  Provide your production URL or repository. Latent engineers review code entropy, mobile runtime performance, and security headers, returning a formal Latent Report within 48 hours.
                </p>
                <div className="font-mono text-[10px] uppercase tracking-widest text-ink-muted pt-1">
                  We inspect the real code, not generic bot scans.
                </div>
              </div>

              <div>
                <label htmlFor="diag-live-url" className="block font-mono text-[10px] uppercase tracking-widest text-ink-muted mb-1.5 font-medium">
                  Production URL or GitHub Repository
                </label>
                <input
                  id="diag-live-url"
                  type="text"
                  required
                  placeholder="https://yourproduct.com or github.com/org/repo"
                  value={liveUrl}
                  onChange={(e) => setLiveUrl(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl bg-paper border border-paper-border font-mono text-xs text-ink placeholder:text-ink-muted/50 focus:outline-none focus-visible:ring-1 focus-visible:ring-ink focus-visible:border-ink transition-colors shadow-subtle"
                />
              </div>

              <div>
                <label htmlFor="diag-live-email" className="block font-mono text-[10px] uppercase tracking-widest text-ink-muted mb-1.5 font-medium">
                  Where should we dispatch the report?
                </label>
                <input
                  id="diag-live-email"
                  type="email"
                  required
                  placeholder="founder@company.com"
                  value={liveEmail}
                  onChange={(e) => setLiveEmail(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl bg-paper border border-paper-border font-mono text-xs text-ink placeholder:text-ink-muted/50 focus:outline-none focus-visible:ring-1 focus-visible:ring-ink focus-visible:border-ink transition-colors shadow-subtle"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-atelier-indigo text-paper font-mono text-xs uppercase tracking-wider hover:bg-ink transition-all flex items-center gap-2 shadow-subtle hover:shadow-card focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink"
                >
                  <span className="font-semibold">Request Live Telemetry Audit</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-500/20 shadow-xs">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-3xl font-light text-ink">
                Audit Request Registered.
              </h4>
              <p className="font-sans text-xs sm:text-sm text-ink-muted max-w-md mx-auto leading-relaxed">
                We have queued <code className="px-1.5 py-0.5 rounded bg-paper font-mono text-ink border border-paper-border">{liveUrl}</code> for technical inspection. Expect the formal diagnostic monograph at <strong className="text-ink">{liveEmail}</strong> within 48 hours.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default DiagnosticEngine;
