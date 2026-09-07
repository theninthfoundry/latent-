"use client";

import React from "react";
import Link from "next/link";
import { CrowdCanvas } from "@/components/skiper-ui/skiper39";

export function Footer() {
  return (
    <footer className="relative w-full border-t border-paper-border bg-paper text-ink overflow-hidden pt-28 sm:pt-36 pb-0 flex flex-col justify-between">
      {/* 01 — Atmospheric Crowd Canvas Layer (Anchored flush to the bottom floor) */}
      <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none select-none overflow-hidden flex items-end">
        <CrowdCanvas
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png"
          rows={15}
          cols={7}
          scale={0.5}
          className="h-[340px] sm:h-[380px] w-full"
        />
      </div>

      {/* 02 — The Crafted Footer Information (brought a bit down, filling the space harmoniously) */}
      <div className="relative z-10 max-w-[1500px] w-full mx-auto px-6 sm:px-12 lg:px-20 mb-40 sm:mb-48 space-y-12 sm:space-y-16">
        {/* Main Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-12 border-b border-paper-border/60">
          {/* Studio Brand & Worldview */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="font-serif text-3xl sm:text-4xl font-normal tracking-tight block">
              LATENT
            </Link>
            <p className="font-sans text-sm text-ink-muted max-w-sm font-light leading-relaxed">
              A design, research, and technology laboratory for what comes next. We uncover what
              is latent inside ambitious ideas and turn it into real, inevitable
              digital artifacts.
            </p>
            <div className="font-mono text-[10px] text-ink-muted uppercase tracking-widest pt-1 flex items-center gap-3">
              <span>Labs — 01</span>
              <span>&bull;</span>
              <span>Design &amp; Technology Laboratory</span>
            </div>
          </div>

          {/* Index Navigation */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="uppercase tracking-widest text-ink-muted block mb-3 font-semibold">
              Index
            </span>
            <ul className="space-y-2 text-ink">
              <li>
                <Link href="/studio" className="hover:text-ink-muted transition-colors">
                  The Studio
                </Link>
              </li>
              <li>
                <Link href="/studio#method" className="hover:text-ink-muted transition-colors">
                  The Method (07 Stages)
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-ink-muted transition-colors">
                  Selected Archive
                </Link>
              </li>
              <li>
                <Link href="/lab" className="hover:text-ink-muted transition-colors">
                  The Lab &amp; Experiments
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-ink transition-colors font-medium">
                  Terms &amp; Conditions ↗
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Direct Inquiries */}
          <div className="md:col-span-4 space-y-4 font-mono text-xs">
            <span className="uppercase tracking-widest text-ink-muted block mb-2 font-semibold">
              Direct Inquiries
            </span>
            <div>
              <a
                href="mailto:inquiries@latent.studio"
                className="font-serif text-2xl sm:text-3xl text-ink hover:italic transition-all font-light block leading-tight"
              >
                inquiries@latent.studio →
              </a>
              <span className="text-[11px] text-ink-muted font-mono block mt-1">
                Typical response within 24 hours.
              </span>
            </div>

            <div className="flex items-center gap-6 pt-2 text-ink-muted">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-ink transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href="mailto:inquiries@latent.studio?subject=CV%20Request"
                className="hover:text-ink transition-colors"
              >
                Resume / CV ↗
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-ink transition-colors"
              >
                Twitter / X ↗
              </a>
            </div>
          </div>
        </div>

        {/* Filling the Space in Between: Studio Disciplines & Capabilities */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-b border-paper-border/50 font-mono text-xs text-ink-light">
          <div>
            <span className="text-[10px] text-ink-muted uppercase tracking-widest block mb-1">
              Discipline 01
            </span>
            <span className="font-medium text-ink">Spatial &amp; WebGL Systems</span>
          </div>
          <div>
            <span className="text-[10px] text-ink-muted uppercase tracking-widest block mb-1">
              Discipline 02
            </span>
            <span className="font-medium text-ink">Autonomous AI Topologies</span>
          </div>
          <div>
            <span className="text-[10px] text-ink-muted uppercase tracking-widest block mb-1">
              Discipline 03
            </span>
            <span className="font-medium text-ink">Digital Products &amp; Platforms</span>
          </div>
          <div>
            <span className="text-[10px] text-ink-muted uppercase tracking-widest block mb-1">
              Discipline 04
            </span>
            <span className="font-medium text-ink">Brand Systems &amp; Identity</span>
          </div>
        </div>

        {/* Colophon & Legal Bar */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-ink-muted">
          <div className="flex items-center gap-4">
            <span>&copy; {new Date().getFullYear()} LATENT Labs Inc. All rights reserved.</span>
            <span>&bull;</span>
            <Link href="/terms" className="hover:text-ink transition-colors underline underline-offset-4 decoration-paper-border">
              Terms &amp; Conditions ↗
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <span>Typeset in Fraunces &amp; IBM Plex</span>
            <span>The Crowd // Skiper 39</span>
          </div>
        </div>
      </div>

      {/* Grounded Horizon Baseline at the very bottom edge */}
      <div className="w-full h-px bg-paper-border/40 relative z-20" />
    </footer>
  );
}
