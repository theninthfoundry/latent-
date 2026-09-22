"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CarpetFrame } from "./carpet-frame";
import { ArrowRight, CheckCircle, AlertCircle, Sparkles, Send } from "lucide-react";

interface SpecimenAudit {
  id: string;
  name: string;
  url: string;
  category: string;
  scores: {
    performance: number;
    mobileUx: number;
    accessibility: number;
    seo: number;
    codeHealth: number;
    visualSystem: number;
    security: string;
  };
  summary: {
    observations: number;
    actionable: number;
    critical: number;
  };
  whatIsWrong: string;
  whyItMatters: string;
  whatShouldChange: string;
  verdict: "repair" | "evolve" | "sound";
  verdictLabel: string;
}

const SPECIMENS: SpecimenAudit[] = [
  {
    id: "legacy-shop",
    name: "Luxury E-Commerce Specimen",
    url: "archive.atelier-textiles.com",
    category: "Retail Infrastructure",
    scores: {
      performance: 48,
      mobileUx: 42,
      accessibility: 65,
      seo: 54,
      codeHealth: 59,
      visualSystem: 38,
      security: "Encrypted / Low Surface",
    },
    summary: { observations: 38, actionable: 12, critical: 5 },
    whatIsWrong:
      "Mobile navigation collapses below 768px. Homepage loads 5.4MB of uncompressed raster banners. Cart checkout flow fails silently on iOS Safari due to local storage quota rejection.",
    whyItMatters:
      "68% of visitors abandon checkout within the first 4 seconds. Visual inconsistency between catalog and checkout creates acute brand distrust.",
    whatShouldChange:
      "Refactor cart state into an atomic offline-safe IndexedDB store. Modernize responsive jaali-style image grids with AVIF pipeline. Harmonize visual typography.",
    verdict: "repair",
    verdictLabel: "LATENT RECOMMENDS: REPAIR",
  },
  {
    id: "abandoned-saas",
    name: "Abandoned SaaS Dashboard",
    url: "app.telemetry-node.io",
    category: "Internal Tooling",
    scores: {
      performance: 61,
      mobileUx: 36,
      accessibility: 52,
      seo: 41,
      codeHealth: 34,
      visualSystem: 49,
      security: "Header Leak Detected",
    },
    summary: { observations: 44, actionable: 18, critical: 7 },
    whatIsWrong:
      "Inherited Next.js 12 repository with 14 orphaned dependencies, unpinned Docker base images, and vanished developer documentation. 8 API endpoints leak raw SQL errors in response headers.",
    whyItMatters:
      "The internal team is afraid to touch the codebase. Every new feature takes three weeks to patch and frequently crashes production builds.",
    whatShouldChange:
      "Latent Rescue takeover: quarantine dependencies, reconstruct automated testing matrix, migrate App Router, and deliver architectural schematics.",
    verdict: "evolve",
    verdictLabel: "LATENT RECOMMENDS: EVOLVE / RESCUE",
  },
  {
    id: "sound-monograph",
    name: "Architectural Studio Monograph",
    url: "studio-kanso.design",
    category: "Digital Identity",
    scores: {
      performance: 94,
      mobileUx: 91,
      accessibility: 88,
      seo: 92,
      codeHealth: 95,
      visualSystem: 97,
      security: "Static / Zero Surface",
    },
    summary: { observations: 8, actionable: 1, critical: 0 },
    whatIsWrong:
      "Minor font-display swap warning on slow connections. Minimal semantic markup omission on secondary image captions.",
    whyItMatters:
      "Virtually zero material impact. The site is fast, dignified, and visually restrained.",
    whatShouldChange:
      "Nothing substantial. We do not manufacture problems where genuine craft already exists.",
    verdict: "sound",
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
    <div id="audit" className="w-full max-w-5xl mx-auto my-12 sm:my-16 space-y-6">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-paper-border/60">
        <div className="space-y-1.5">
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted block">
            § 06 // LATENT DIAGNOSTIC
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-light text-ink">
            We find what isn&apos;t working.
          </h3>
          <p className="font-sans text-xs sm:text-sm text-ink-muted font-light max-w-lg leading-relaxed">
            Not marketing fluff or generic Lighthouse scores. An unvarnished technical inspection of code health, UX friction, and security surface.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-paper-card border border-paper-border font-mono text-[10px] uppercase tracking-wider">
          <button
            onClick={() => setActiveTab("specimens")}
            className={`px-3.5 py-1.5 rounded-full transition-all ${
              activeTab === "specimens"
                ? "bg-atelier-indigo text-paper font-medium shadow-xs"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            Specimen Audits
          </button>
          <button
            onClick={() => setActiveTab("live")}
            className={`px-3.5 py-1.5 rounded-full transition-all ${
              activeTab === "live"
                ? "bg-atelier-indigo text-paper font-medium shadow-xs"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            Connect for Live Audit
          </button>
        </div>
      </div>

      {activeTab === "specimens" ? (
        /* 01 — Specimen Audits */
        <div className="space-y-6">
          {/* Specimen Case Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted mr-2">
              Select Specimen:
            </span>
            {SPECIMENS.map((specimen) => (
              <button
                key={specimen.id}
                onClick={() => setSelectedSpecimen(specimen)}
                className={`px-3 py-1.5 rounded-lg border font-mono text-xs transition-all ${
                  selectedSpecimen.id === specimen.id
                    ? "bg-ink text-paper border-ink"
                    : "bg-paper text-ink-muted border-paper-border hover:border-ink/40"
                }`}
              >
                <span>{specimen.name.split(" ")[0]}</span>
                <span className="text-ink-muted/50 ml-1.5">({specimen.category})</span>
              </button>
            ))}
          </div>

          {/* The Formal Latent Report Framed in Carpet Grammar */}
          <CarpetFrame
            variant="brass"
            title={`LATENT REPORT / 001 // ${selectedSpecimen.url}`}
            tag={selectedSpecimen.verdictLabel}
          >
            <div className="space-y-7">
              {/* Telemetry Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  { label: "Performance", val: `${selectedSpecimen.scores.performance}/100` },
                  { label: "Mobile UX", val: `${selectedSpecimen.scores.mobileUx}/100` },
                  { label: "Accessibility", val: `${selectedSpecimen.scores.accessibility}/100` },
                  { label: "SEO Health", val: `${selectedSpecimen.scores.seo}/100` },
                  { label: "Code Health", val: `${selectedSpecimen.scores.codeHealth}/100` },
                  { label: "Visual System", val: `${selectedSpecimen.scores.visualSystem}/100` },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-3 rounded-xl bg-paper-card border border-paper-border/70"
                  >
                    <span className="font-mono text-[9px] uppercase text-ink-muted block mb-1">
                      {item.label}
                    </span>
                    <span className="font-serif text-xl font-normal text-ink">{item.val}</span>
                  </div>
                ))}
              </div>

              {/* The Three Diagnostic Realities */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* 1. What Is Wrong */}
                <div className="p-5 rounded-2xl bg-paper-card border border-paper-border space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-red-700 font-semibold flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>01 // What Is Wrong</span>
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-ink font-light leading-relaxed">
                    {selectedSpecimen.whatIsWrong}
                  </p>
                </div>

                {/* 2. Why It Matters */}
                <div className="p-5 rounded-2xl bg-paper-card border border-paper-border space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-amber-700 font-semibold flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>02 // Why It Matters</span>
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-ink font-light leading-relaxed">
                    {selectedSpecimen.whyItMatters}
                  </p>
                </div>

                {/* 3. What Should Change */}
                <div className="p-5 rounded-2xl bg-paper-card border border-paper-border space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-atelier-indigo font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>03 // What Should Change</span>
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-ink font-light leading-relaxed">
                    {selectedSpecimen.whatShouldChange}
                  </p>
                </div>
              </div>

              {/* Dignified Recommendation Footer */}
              <div className="p-4 rounded-xl bg-atelier-indigo/5 border border-atelier-indigo/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
                <div>
                  <span className="text-atelier-indigo uppercase tracking-widest block text-[9px] font-semibold">
                    Studio Finding
                  </span>
                  <span className="font-serif text-lg text-ink font-normal">
                    {selectedSpecimen.verdictLabel}
                  </span>
                </div>
                {selectedSpecimen.verdict === "sound" ? (
                  <span className="text-emerald-800 font-mono text-xs">
                    ✓ Verified Sound Substrate &bull; Zero Action Required
                  </span>
                ) : (
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-atelier-indigo text-paper text-[11px] uppercase tracking-wider hover:bg-ink transition-colors self-start sm:self-auto"
                  >
                    <span>Remediate with Latent</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </CarpetFrame>
        </div>
      ) : (
        /* 02 — Request a Live System Audit */
        <div className="p-8 sm:p-10 rounded-3xl bg-paper-card border border-paper-border space-y-6">
          {!liveRequested ? (
            <form onSubmit={handleLiveSubmit} className="space-y-5 max-w-xl">
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-atelier-brass block">
                  Commission Telemetry Inspection
                </span>
                <h4 className="font-serif text-2xl font-light text-ink">
                  Connect your project to Latent.
                </h4>
                <p className="font-sans text-xs text-ink-muted leading-relaxed">
                  Provide your production URL or repository. Our senior engineers review code entropy, mobile runtime performance, and security headers, returning a formal Latent Report within 48 hours.
                </p>
              </div>

              <div>
                <label className="block font-mono text-[9px] uppercase tracking-widest text-ink-muted mb-1.5">
                  Production URL or GitHub Repository
                </label>
                <input
                  type="text"
                  required
                  placeholder="https://yourproduct.com or github.com/org/repo"
                  value={liveUrl}
                  onChange={(e) => setLiveUrl(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl bg-paper border border-paper-border font-mono text-xs text-ink placeholder:text-ink-muted/50 focus:outline-none focus:border-atelier-indigo focus:ring-1 focus:ring-atelier-indigo"
                />
              </div>

              <div>
                <label className="block font-mono text-[9px] uppercase tracking-widest text-ink-muted mb-1.5">
                  Where should we send the report?
                </label>
                <input
                  type="email"
                  required
                  placeholder="founder@company.com"
                  value={liveEmail}
                  onChange={(e) => setLiveEmail(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl bg-paper border border-paper-border font-mono text-xs text-ink placeholder:text-ink-muted/50 focus:outline-none focus:border-atelier-indigo focus:ring-1 focus:ring-atelier-indigo"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-atelier-indigo text-paper font-mono text-xs uppercase tracking-wider hover:bg-ink transition-colors flex items-center gap-2"
                >
                  <span>Request Live System Audit</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-atelier-indigo/10 text-atelier-indigo flex items-center justify-center mx-auto">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-2xl font-light text-ink">
                Audit Request Registered.
              </h4>
              <p className="font-sans text-xs text-ink-muted max-w-sm mx-auto leading-relaxed">
                We have queued <code className="px-1 py-0.5 rounded bg-paper-subtle font-mono text-ink">{liveUrl}</code> for inspection. Expect the formal diagnostic report at <strong className="text-ink">{liveEmail}</strong> within 48 hours.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
