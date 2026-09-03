"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 sm:px-12 backdrop-blur-md bg-black/40 border-b border-white/5"
    >
      {/* Brand / Logo */}
      <Link href="/" className="group flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black font-bold text-sm tracking-tighter transition-transform group-hover:scale-105">
          N
        </div>
        <div className="flex flex-col">
          <span className="font-semibold tracking-tight text-white text-sm">
            NEAM STUDIO
          </span>
          <span className="text-[10px] text-neutral-400 font-mono tracking-widest uppercase">
            DESIGN & MOTION
          </span>
        </div>
      </Link>

      {/* Nav links */}
      <nav className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-wider text-neutral-400">
        <a
          href="#works"
          className="hover:text-white transition-colors duration-200"
        >
          Selected Works
        </a>
        <a
          href="#services"
          className="hover:text-white transition-colors duration-200"
        >
          Capabilities
        </a>
        <a
          href="#about"
          className="hover:text-white transition-colors duration-200"
        >
          Manifesto
        </a>
        <a
          href="#footer"
          className="hover:text-white transition-colors duration-200"
        >
          Contact
        </a>
      </nav>

      {/* Action CTA */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>Available for Q3/Q4</span>
        </div>
        <a
          href="#footer"
          className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition-all hover:bg-neutral-200 hover:shadow-lg hover:shadow-white/10"
        >
          <span>Start Project</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </motion.header>
  );
}
