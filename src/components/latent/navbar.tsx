"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { spatialEase } from "@/lib/motion/easings";

export function Navbar({ isReady = true }: { isReady?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
      transition={{ duration: 0.8, ease: spatialEase, delay: 0.35 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-12 transition-all duration-300 ${
        isScrolled
          ? "py-3.5 bg-paper/90 backdrop-blur-md border-b border-paper-border/80 shadow-[0_4px_30px_rgba(23,21,15,0.03)]"
          : "py-5 bg-paper/70 backdrop-blur-sm border-b border-paper-border/40"
      }`}
    >
      {/* Brand Identity */}
      <Link href="/" className="group flex items-baseline gap-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink rounded-sm">
        <span className="font-serif text-lg font-normal tracking-tight text-ink transition-opacity group-hover:opacity-70">
          LATENT
        </span>
        <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-widest text-ink-muted">
          studio — 01
        </span>
      </Link>

      {/* Primary Navigation */}
      <div className="flex items-center gap-7 text-xs font-mono tracking-wider uppercase text-ink-light">
        <a
          href="#studio"
          className="hover:text-ink transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink rounded-sm"
        >
          Studio
        </a>
        <a
          href="#work"
          className="hover:text-ink transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink rounded-sm"
        >
          Work
        </a>
        <a
          href="#lab"
          className="hover:text-ink transition-colors duration-200 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink rounded-sm"
        >
          <span>Lab</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent-clay" />
        </a>
        <a
          href="#contact"
          className="hover:text-ink transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink rounded-sm"
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
}
