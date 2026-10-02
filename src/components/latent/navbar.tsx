"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { spatialEase } from "@/lib/motion/easings";
import { SplitCTAButton } from "./split-cta-button";

export function Navbar({ isReady = true }: { isReady?: boolean }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
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
            ? "py-3 bg-paper/60 backdrop-blur-md border-b border-paper-border shadow-subtle"
            : "py-4 sm:py-5 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="group flex items-baseline gap-2.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink rounded-sm shrink-0 relative z-50"
            aria-label="LATENT Home"
          >
            <span className="font-serif text-lg sm:text-xl font-normal tracking-tight text-ink transition-opacity group-hover:opacity-75">
              LATENT
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 text-xs font-mono tracking-wider uppercase text-ink-light">
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
            
            <SplitCTAButton label="Start a project" href="/#contact" size="default" />
          </div>

          <button
            className="md:hidden relative z-50 p-2 text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-paper px-6 pt-24 pb-10 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    className="font-serif text-5xl font-light text-ink hover:text-atelier-indigo transition-colors flex items-center gap-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                    {link.hasDot && (
                      <span className="w-3 h-3 rounded-full bg-accent-clay shrink-0" />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-auto pt-8 border-t border-paper-border"
            >
              <SplitCTAButton label="Start a project" href="/#contact" size="lg" className="w-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
