"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Mail, Twitter, Disc as Discord } from "lucide-react";
import React from "react";
import { CrowdCanvas } from "@/components/skiper-ui/skiper39";

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-white/10 bg-[#09090b] pt-24 pb-12 text-white"
    >
      {/* Background radial glow */}
      <div className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        {/* Main CTA banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pb-20 border-b border-white/10">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-4 inline-block">
              // Initiate Collaboration
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.05]">
              Let’s create work that leaves an imprint.
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            <a
              href="mailto:studio@neam.design"
              className="group inline-flex items-center gap-4 text-xl sm:text-3xl font-light tracking-tight text-neutral-300 hover:text-white transition-colors"
            >
              <span>studio@neam.design</span>
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-white/20 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-black group-hover:scale-110">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </a>
            <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Available Worldwide
              </span>
              <span>•</span>
              <span>Autonomous Digital Studio</span>
            </div>
          </div>
        </div>

        {/* Links & Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 text-sm">
          <div>
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5 text-neutral-300">
              <li>
                <a href="#works" className="hover:text-white transition-colors">
                  Selected Works
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Studio Disciplines
                </a>
              </li>
              <li>
                <a href="#manifesto" className="hover:text-white transition-colors">
                  Studio Manifesto
                </a>
              </li>
              <li>
                <a href="#crowd" className="hover:text-white transition-colors">
                  Community & Peeps
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-4">
              Connect
            </span>
            <ul className="space-y-2.5 text-neutral-300">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Twitter className="h-3.5 w-3.5" /> Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Discord className="h-3.5 w-3.5" /> Discord
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-4">
              Skiper UI Registry
            </span>
            <ul className="space-y-2.5 text-neutral-400 font-mono text-xs">
              <li>skiper8 • Words Preloader</li>
              <li>skiper54 • clipPath Carousel</li>
              <li>skiper39 • Open Peeps Crowd</li>
            </ul>
          </div>

          <div>
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-4">
              Philosophy
            </span>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We reject the generic web. Every motion, typographic nuance, and transition is built to honor human curiosity.
            </p>
          </div>
        </div>

        {/* Skiper39: Canvas Crowd Section */}
        <div id="crowd" className="relative my-8 rounded-3xl overflow-hidden border border-white/10 bg-neutral-900/40 p-6 sm:p-10 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono tracking-widest text-neutral-300 uppercase">
                The Walking Crowd // Skiper 39
              </span>
            </div>
            <span className="text-[11px] font-mono text-neutral-400">
              Canvas Simulation • Open Peeps by Pablo Stanley
            </span>
          </div>

          {/* Crowd canvas container */}
          <div className="relative h-44 sm:h-56 w-full overflow-hidden rounded-2xl bg-neutral-950 border border-white/5">
            <CrowdCanvas
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png"
              rows={15}
              cols={7}
              className="h-full"
            />
          </div>
        </div>

        {/* Bottom credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-xs text-neutral-400 font-mono">
          <p>© {new Date().getFullYear()} Neam Creative Studio. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Attribution: Skiper UI & Open Peeps</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
