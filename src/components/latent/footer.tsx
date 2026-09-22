"use client";

import React from "react";
import Link from "next/link";
import { CrowdCanvas } from "@/components/skiper-ui/skiper39";
import { BotanicalBloom } from "./botanical-bloom";

export function Footer() {
  return (
    <footer className="relative w-full border-t border-paper-border bg-paper text-ink overflow-hidden pt-24 sm:pt-32 pb-0 flex flex-col justify-between">
      {/* 01 — Atmospheric Crowd Canvas Layer */}
      <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none select-none overflow-hidden flex items-end opacity-90">
        <CrowdCanvas
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png"
          rows={15}
          cols={7}
          scale={0.5}
          className="h-[320px] sm:h-[360px] w-full"
        />
      </div>

      {/* 02 — The Crafted Footer Information */}
      <div className="relative z-10 max-w-[1500px] w-full mx-auto px-6 sm:px-12 lg:px-20 mb-36 sm:mb-44 space-y-12 sm:space-y-16">
        {/* Main Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-12 border-b border-paper-border/60">
          {/* Studio Brand & Worldview */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Link href="/" className="font-serif text-3xl sm:text-4xl font-normal tracking-tight block">
                LATENT
              </Link>
              <BotanicalBloom size={32} />
            </div>
            <p className="font-sans text-sm text-ink-muted max-w-sm font-light leading-relaxed">
              A digital atelier with Indian cultural memory, working between systems, images, machines, and culture. We uncover what is latent inside ambitious ideas and build inevitables.
            </p>
            <div className="font-mono text-[10px] text-ink-muted uppercase tracking-widest pt-1 flex items-center gap-3">
              <span>Digital Atelier &bull; India &bull; 2026</span>
              <span>&bull;</span>
              <span>17°23&apos; N, 78°29&apos; E</span>
            </div>
          </div>

          {/* Index Navigation */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="uppercase tracking-widest text-ink-muted block mb-3 font-semibold">
              Index
            </span>
            <ul className="space-y-2 text-ink">
              <li>
                <Link href="/#capabilities" className="hover:text-atelier-indigo transition-colors">
                  Capabilities (Digital Matter)
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-atelier-indigo transition-colors">
                  Selected Archive
                </Link>
              </li>
              <li>
                <Link href="/studio" className="hover:text-atelier-indigo transition-colors">
                  The Studio &amp; Methods
                </Link>
              </li>
              <li>
                <Link href="/lab" className="hover:text-atelier-indigo transition-colors">
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
                className="font-serif text-2xl sm:text-3xl text-ink hover:text-atelier-indigo transition-all font-light block leading-tight"
              >
                inquiries@latent.studio →
              </a>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span className="text-[11px] text-ink-muted font-mono">
                  Emergency repair dispatched via fix@latent.studio
                </span>
              </div>
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

        {/* 10 Matter Capabilities Strip */}
        <div className="py-6 border-b border-paper-border/50 font-mono text-xs text-ink-light">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {[
              "01 BUILD",
              "02 REPAIR",
              "03 RESCUE",
              "04 EVOLVE",
              "05 TRANSFORM",
              "06 AUDIT",
              "07 RECOVER",
              "08 CARE",
              "09 EXPERIMENT",
              "10 ARCHIVE",
            ].map((cap, idx) => (
              <span key={idx} className="text-[10px] tracking-widest text-ink-muted hover:text-atelier-indigo transition-colors cursor-default">
                {cap}
              </span>
            ))}
          </div>
        </div>

        {/* Colophon & Legal Bar */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-ink-muted">
          <div className="flex items-center gap-4">
            <span>&copy; {new Date().getFullYear()} LATENT &bull; We build inevitables.</span>
            <span>&bull;</span>
            <span className="text-atelier-brass font-medium">Made slowly.</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Typeset in Fraunces &amp; IBM Plex</span>
            <span>Crafted Digital Atelier</span>
          </div>
        </div>
      </div>

      {/* Grounded Horizon Baseline */}
      <div className="w-full h-px bg-paper-border/40 relative z-20" />
    </footer>
  );
}

export default Footer;
