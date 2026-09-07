"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { spatialEase } from "@/lib/motion/easings";

export function Navbar({ isReady = true }: { isReady?: boolean }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

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
    { href: "/work", label: "Work" },
    { href: "/studio", label: "Studio" },
    { href: "/lab", label: "Lab", hasDot: true },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
      transition={{ duration: 0.8, ease: spatialEase, delay: 0.35 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-12 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-paper/90 backdrop-blur-md border-b border-paper-border/80 shadow-[0_4px_30px_rgba(23,21,15,0.03)]"
          : "py-5 bg-paper/70 backdrop-blur-sm border-b border-paper-border/40"
      }`}
    >
      {/* Brand Identity */}
      <Link
        href="/"
        className="group flex items-baseline gap-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink rounded-sm"
      >
        <span className="font-serif text-lg font-normal tracking-tight text-ink transition-opacity group-hover:opacity-70">
          LATENT
        </span>
        <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-widest text-ink-muted">
          labs — 01
        </span>
      </Link>

      {/* Primary Navigation */}
      <div className="flex items-center gap-6 sm:gap-8 text-xs font-mono tracking-wider uppercase text-ink-light">
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
              className={`relative transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink rounded-sm flex items-center gap-1.5 ${
                isActive ? "text-ink font-semibold" : "text-ink-muted hover:text-ink"
              }`}
            >
              <span>{link.label}</span>
              {link.hasDot && (
                <span className="w-1.5 h-1.5 rounded-full bg-accent-clay shrink-0" />
              )}
              {isActive && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-ink rounded-full"
                  transition={{ duration: 0.3, ease: spatialEase }}
                />
              )}
            </Link>
          );
        })}

        {/* Recruiter Fast-Path: Persistent GitHub & CV links */}
        <div className="hidden md:flex items-center gap-2 pl-4 border-l border-paper-border/80">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="px-2.5 py-1 rounded-full bg-paper border border-paper-border/90 text-ink-muted hover:text-ink hover:border-ink/40 transition-all flex items-center gap-1 text-[10px] tracking-widest uppercase font-mono"
            title="Recruiter Fast-Path: GitHub Profile"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-2.5 h-2.5" />
          </a>
          <a
            href="mailto:inquiries@latent.studio?subject=Portfolio%20Inquiry%20/%20Resume%20Request"
            className="px-2.5 py-1 rounded-full bg-ink text-paper hover:bg-accent-gold hover:text-ink transition-all flex items-center gap-1 text-[10px] tracking-widest uppercase font-mono"
            title="Recruiter Fast-Path: Request CV / Work"
          >
            <span>CV</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
