"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CarpetFrame } from "./carpet-frame";
import { ArrowRight, CheckCircle, AlertCircle, Sparkles, Send, ShieldCheck } from "lucide-react";

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
  statusBadge: string;
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
    handwrittenNote: "← Real issue: 5.4MB uncompressed images causing immediate mobile bounce. Fixed in a 48h surgical sprint.",
    verdict: "repair",
    statusBadge: "⚠️ CRITICAL RUNTIME FRICTION DETECTED",
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
    handwrittenNote: "← Common disaster when external agencies vanish. We stabilize code without needing a total rewrite.",
    verdict: "evolve",
    statusBadge: "🛑 ORPHANED ARCHITECTURE & DATA LEAK",
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
    handwrittenNote: "← Uncompromising studio integrity: if a codebase is already well-made, we advise you to leave it untouched.",
    verdict: "sound",
    statusBadge: "✦ VERIFIED SOUND SUBSTRATE (ARCHIVAL GRADE)",
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
    <div id="audit" className="w-full max-w-5xl mx-auto my-12 sm:my-16 space-y-8">
      {/* Editorial Header with Mixed Typography */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-paper-border/70">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-ink-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-clay" />
            <span>§ 06 // LATENT DIAGNOSTIC &bull; TELEMETRY MONOGRAPH</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-ink tracking-tight">
            We find what{" "}
            <span className="italic font-normal text-accent-clay underline decoration-atelier-brass/60 underline-offset-4">
              isn&apos;t working
            </span>
            .
          </h3>
          <p className="font-sans text-xs sm:text-sm text-ink-muted font-light max-w-xl leading-relaxed">
            Not marketing fluff or generic Lighthouse scores. An unvarnished technical inspection of{" "}
            <span className="font-mono text-xs bg-paper-subtle px-1.5 py-0.5 rounded border border-paper-border text-ink">
              runtime friction
            </span>
            , mobile breakdown, code entropy, and security surface.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-paper-card border border-atelier-brass/40 font-mono text-[10px] uppercase tracking-wider shadow-2xs">
          <button
            onClick={() => setActiveTab("specimens")}
            className={`px-4 py-1.5 rounded-full transition-all ${
              activeTab === "specimens"
                ? "bg-atelier-indigo text-paper font-semibold shadow-xs"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            Specimen Audits
          </button>
          <button
            onClick={() => setActiveTab("live")}
            className={`px-4 py-1.5 rounded-full transition-all ${
              activeTab === "live"
                ? "bg-atelier-indigo text-paper font-semibold shadow-xs"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            Request Live Audit
          </button>
        </div>
      </div>

      {activeTab === "specimens" ? (
        /* 01 — Specimen Audits */
        <div className="space-y-6">
          {/* Specimen Case Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted mr-1">
              Select Specimen:
            </span>
            {SPECIMENS.map((specimen) => (
              <button
                key={specimen.id}
                onClick={() => setSelectedSpecimen(specimen)}
                className={`px-3.5 py-2 rounded-xl border font-mono text-xs transition-all flex items-center gap-2 ${
                  selectedSpecimen.id === specimen.id
                    ? "bg-ink text-paper border-ink shadow-sm ring-1 ring-atelier-brass/50"
                    : "bg-paper text-ink-light border-paper-border hover:border-ink/40"
                }`}
              >
                <span className="font-medium">{specimen.name.split(" ")[0]}</span>
                <span className={`text-[10px] ${selectedSpecimen.id === specimen.id ? "text-atelier-brass" : "text-ink-muted"}`}>
                  ({specimen.category})
                </span>
              </button>
            ))}
          </div>

          {/* The Master Diagnostic Monograph Framed in Carpet Grammar */}
          <CarpetFrame
            variant="brass"
            title={`LATENT REPORT / 001 // ${selectedSpecimen.url}`}
            tag={selectedSpecimen.verdictLabel}
          >
            <div className="space-y-6">
              {/* Prominent Health Status Header Banner */}
              <div
                className={`p-3.5 sm:p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  selectedSpecimen.verdict === "sound"
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-900"
                    : selectedSpecimen.verdict === "evolve"
                    ? "bg-amber-500/10 border-amber-500/30 text-amber-900"
                    : "bg-accent-clay/10 border-accent-clay/30 text-accent-clay"
                }`}
              >
                <div className="flex items-center gap-2.5 font-mono text-xs font-bold tracking-wider uppercase">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      selectedSpecimen.verdict === "sound"
                        ? "bg-emerald-600"
                        : "bg-accent-clay animate-pulse"
                    }`}
                  />
                  <span>{selectedSpecimen.statusBadge}</span>
                </div>
                <span className="font-mono text-[10px] text-ink-muted uppercase tracking-widest">
                  Target: <strong className="text-ink">{selectedSpecimen.url}</strong>
                </span>
              </div>

              {/* 4 Intuitive System Vitals (Clear, visual, understandable) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {[
                  {
                    title: "01. Runtime Speed",
                    val: selectedSpecimen.scores.speed.val,
                    note: selectedSpecimen.scores.speed.note,
                  },
                  {
                    title: "02. Mobile Conversion",
                    val: selectedSpecimen.scores.mobileUx.val,
                    note: selectedSpecimen.scores.mobileUx.note,
                  },
                  {
                    title: "03. Code & State Health",
                    val: selectedSpecimen.scores.codeHealth.val,
                    note: selectedSpecimen.scores.codeHealth.note,
                  },
                  {
                    title: "04. Visual System",
                    val: selectedSpecimen.scores.visualSystem.val,
                    note: selectedSpecimen.scores.visualSystem.note,
                  },
                ].map((item) => {
                  const isLow = item.val < 50;
                  const isMed = item.val >= 50 && item.val < 80;
                  const isHigh = item.val >= 80;

                  return (
                    <div
                      key={item.title}
                      className="p-3.5 rounded-2xl bg-paper-card border border-paper-border space-y-2 shadow-2xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-ink-muted">
                          {item.title}
                        </span>
                        <span
                          className={`font-serif text-lg font-semibold ${
                            isLow
                              ? "text-accent-clay"
                              : isMed
                              ? "text-amber-800"
                              : "text-emerald-800"
                          }`}
                        >
                          {item.val}/100
                        </span>
                      </div>

                      {/* Visual Health Gauge */}
                      <div className="w-full h-1.5 bg-paper-subtle rounded-full overflow-hidden">
                        <div
                          style={{ width: `${item.val}%` }}
                          className={`h-full rounded-full ${
                            isLow
                              ? "bg-accent-clay"
                              : isMed
                              ? "bg-amber-700"
                              : "bg-emerald-600"
                          }`}
                        />
                      </div>

                      <div className="font-mono text-[10px] text-ink-light pt-0.5 truncate">
                        {item.note}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* The Three Diagnostic Realities (Distinct Colors, Borders & Inline Fonts) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                {/* 1. What Is Wrong */}
                <div className="p-5 sm:p-6 rounded-2xl bg-paper-card border border-accent-clay/35 space-y-2.5 shadow-2xs">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent-clay font-bold flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>01 // The Breakdown</span>
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-ink font-light leading-relaxed">
                    {selectedSpecimen.whatIsWrong}
                  </p>
                </div>

                {/* 2. Why It Matters */}
                <div className="p-5 sm:p-6 rounded-2xl bg-paper-card border border-amber-600/35 space-y-2.5 shadow-2xs">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-amber-800 font-bold flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>02 // The Business Cost</span>
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-ink font-light leading-relaxed">
                    {selectedSpecimen.whyItMatters}
                  </p>
                </div>

                {/* 3. What Should Change */}
                <div className="p-5 sm:p-6 rounded-2xl bg-paper-card border border-atelier-indigo/35 space-y-2.5 shadow-2xs">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-atelier-indigo font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>03 // Latent Prescription</span>
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-ink font-light leading-relaxed">
                    {selectedSpecimen.whatShouldChange}
                  </p>
                </div>
              </div>

              {/* Handwritten Engineer Marginalia Note in Caveat */}
              <div className="p-3 rounded-xl bg-paper-subtle border border-paper-border flex items-center justify-between">
                <span className="font-hand text-base sm:text-lg text-accent-clay">
                  {selectedSpecimen.handwrittenNote}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-ink-muted hidden sm:inline">
                  ATELIER NOTES
                </span>
              </div>

              {/* Dignified Recommendation Action Footer */}
              <div className="p-4 sm:p-5 rounded-2xl bg-paper border border-atelier-brass/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs shadow-2xs">
                <div>
                  <span className="text-atelier-indigo uppercase tracking-widest block text-[9px] font-bold">
                    Studio Finding // Action Protocol
                  </span>
                  <span className="font-serif text-xl text-ink font-normal">
                    {selectedSpecimen.verdictLabel}
                  </span>
                </div>

                {selectedSpecimen.verdict === "sound" ? (
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 font-mono text-[11px] font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verified Sound Substrate &bull; Zero Action Required</span>
                  </div>
                ) : (
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-atelier-indigo text-paper text-[11px] uppercase tracking-wider hover:bg-ink transition-all shadow-xs hover:shadow-sm self-start sm:self-auto"
                  >
                    <span>Remediate with Latent</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </CarpetFrame>
        </div>
      ) : (
        /* 02 — Request a Live System Audit */
        <div className="p-8 sm:p-12 rounded-3xl bg-paper-card border border-atelier-brass/50 space-y-6 shadow-sm">
          {!liveRequested ? (
            <form onSubmit={handleLiveSubmit} className="space-y-5 max-w-xl">
              <div className="space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-atelier-brass font-semibold block">
                  COMMISSION SYSTEM TELEMETRY INSPECTION
                </span>
                <h4 className="font-serif text-3xl font-light text-ink">
                  Connect your project to the atelier.
                </h4>
                <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
                  Provide your production URL or repository. Latent engineers review code entropy, mobile runtime performance, and security headers, returning a formal Latent Report within 48 hours.
                </p>
                <div className="font-hand text-base text-accent-clay pt-1">
                  ← We inspect the real code, not generic bot scans.
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-ink-muted mb-1.5">
                  Production URL or GitHub Repository
                </label>
                <input
                  type="text"
                  required
                  placeholder="https://yourproduct.com or github.com/org/repo"
                  value={liveUrl}
                  onChange={(e) => setLiveUrl(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl bg-paper border border-paper-border font-mono text-xs text-ink placeholder:text-ink-muted/50 focus:outline-none focus:border-atelier-indigo focus:ring-1 focus:ring-atelier-indigo shadow-2xs"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-ink-muted mb-1.5">
                  Where should we dispatch the report?
                </label>
                <input
                  type="email"
                  required
                  placeholder="founder@company.com"
                  value={liveEmail}
                  onChange={(e) => setLiveEmail(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl bg-paper border border-paper-border font-mono text-xs text-ink placeholder:text-ink-muted/50 focus:outline-none focus:border-atelier-indigo focus:ring-1 focus:ring-atelier-indigo shadow-2xs"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-atelier-indigo text-paper font-mono text-xs uppercase tracking-wider hover:bg-ink transition-all flex items-center gap-2 shadow-xs hover:shadow-sm"
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
