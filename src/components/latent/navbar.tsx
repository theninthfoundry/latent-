"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { spatialEase } from "@/lib/motion/easings";
import { LatentFixModal } from "./latent-fix-modal";

export function Navbar({ isReady = true }: { isReady?: boolean }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [fixModalOpen, setFixModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#capabilities", label: "Capabilities" },
    { href: "/work", label: "Work" },
    { href: "/studio", label: "Studio" },
    { href: "/lab", label: "Lab", hasDot: true },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        aria-label="Primary Navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-paper/95 backdrop-blur-md border-b border-paper-border shadow-subtle"
            : "py-4 sm:py-5 bg-paper/80 backdrop-blur-sm border-b border-paper-border/60"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 flex items-center justify-between gap-4">
          {/* Brand Identity */}
          <Link
            href="/"
            className="group flex items-baseline gap-2.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink rounded-sm shrink-0"
            aria-label="LATENT Home"
          >
            <span className="font-serif text-lg sm:text-xl font-normal tracking-tight text-ink transition-opacity group-hover:opacity-75">
              LATENT
            </span>
            <span className="hidden md:inline font-mono text-[10px] uppercase tracking-widest text-ink-muted">
              atelier &mdash; 2026
            </span>
          </Link>

          {/* Primary Navigation & Actions */}
          <div className="flex items-center gap-3 sm:gap-6 text-xs font-mono tracking-wider uppercase text-ink-light overflow-x-auto no-scrollbar py-1">
            <div className="flex items-center gap-4 sm:gap-6 shrink-0">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : link.href.startsWith("/#")
                    ? false
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-1 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink rounded-sm flex items-center gap-1.5 ${
                      isActive ? "text-ink font-semibold" : "text-ink-muted hover:text-ink"
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.hasDot && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-clay shrink-0 opacity-80" />
                    )}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-ink rounded-full"
                        transition={{ duration: 0.3, ease: spatialEase }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Emergency Intake Trigger: LATENT / FIX (Calm Atelier Brass Seal) */}
            <button
              onClick={() => setFixModalOpen(true)}
              className="group relative px-3 py-1 rounded-full bg-paper border border-atelier-brass/50 hover:border-atelier-brass text-ink hover:text-atelier-indigo transition-all duration-300 flex items-center gap-2 text-[10px] tracking-widest uppercase font-mono shadow-subtle shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink"
              title="Emergency Repair Intake: fix@latent.studio"
              aria-label="Open emergency repair dispatch docket"
            >
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-clay" />
              </span>
              <span className="font-medium tracking-wider">Fix</span>
              <span className="text-[9px] text-atelier-brass opacity-60 group-hover:opacity-100 transition-opacity">✦</span>
            </button>

            {/* Persistent GitHub & CV links */}
            <div className="hidden lg:flex items-center gap-2 pl-3 border-l border-paper-border shrink-0">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 rounded-full bg-paper border border-paper-border text-ink-muted hover:text-ink hover:border-ink/30 transition-all flex items-center gap-1 text-[10px] tracking-widest uppercase font-mono focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink"
                title="Recruiter Fast-Path: GitHub Profile"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-2.5 h-2.5" />
              </a>
              <a
                href="mailto:inquiries@latent.studio?subject=Portfolio%20Inquiry%20/%20Resume%20Request"
                className="px-2.5 py-1 rounded-full bg-ink text-paper hover:bg-ink-light transition-all flex items-center gap-1 text-[10px] tracking-widest uppercase font-mono focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink"
                title="Recruiter Fast-Path: Request CV / Work"
              >
                <span>CV</span>
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Emergency Repair Modal */}
      <LatentFixModal isOpen={fixModalOpen} onClose={() => setFixModalOpen(false)} />
    </>
  );
}

export default Navbar;
