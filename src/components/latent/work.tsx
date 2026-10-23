"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { ArrowLeft, ArrowRight, Play, ExternalLink } from "lucide-react";
import Image from "next/image";

export interface ProjectWork {
  id: string;
  code: string;
  title: string;
  client: string;
  category: "Websites" | "AI Systems" | "Brand Worlds" | "Software" | "Research";
  descriptor: string;
  image: string;
  year: string;
  badge: string;
  tagline: string;
  href?: string;
}

const PROJECTS: ProjectWork[] = [
  {
    id: "otaru",
    code: "§ 01",
    title: "OTARU",
    client: "Textile Heritage Monograph",
    category: "Websites",
    descriptor: "LIVING SPATIAL ARCHIVE",
    tagline: "Tactile spatial archive preserving Japanese textile provenance with WebGL & daylight cycles.",
    image: "/otaru-archive.png",
    year: "2026",
    badge: "WebGL / Spatial",
    href: "#",
  },
  {
    id: "solomon",
    code: "§ 02",
    title: "SOLOMON",
    client: "Cognitive Knowledge Systems",
    category: "AI Systems",
    descriptor: "EPISODIC KNOWLEDGE GRAPH",
    tagline: "Autonomous episodic memory topology linking research thoughts through decaying semantic vectors.",
    image: "/solomon-archive.png",
    year: "2026",
    badge: "HNSW / AI",
    href: "#",
  },
  {
    id: "satquery",
    code: "§ 03",
    title: "SATQUERY",
    client: "Earth Observation Lab",
    category: "Research",
    descriptor: "MULTISPECTRAL TELEMETRY",
    tagline: "Natural language query engine across Petabytes of satellite raster telemetry in milliseconds.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    year: "2025",
    badge: "WebGPU / Radar",
    href: "#",
  },
  {
    id: "devstate",
    code: "§ 04",
    title: "DEVSTATE",
    client: "Local-First Cryptographic Tooling",
    category: "Software",
    descriptor: "HERMETIC RUNTIME",
    tagline: "Zero-telemetry developer workstation operating in local memory with verifiable zero-knowledge proofs.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    year: "2026",
    badge: "Rust / ZK-Proof",
    href: "#",
  },
  {
    id: "atelier-physical",
    code: "§ 05",
    title: "ATELIER PHYSICAL",
    client: "Latent Physical Lab",
    category: "Brand Worlds",
    descriptor: "SPATIAL COMPUTING",
    tagline: "Physical studio research lab mapping Japanese cotton, timber, light, and tactile digital matter.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop",
    year: "2025",
    badge: "Spatial / Craft",
    href: "#",
  },
  {
    id: "kinetic-monoposto",
    code: "§ 06",
    title: "KINETIC MONOPOSTO",
    client: "Aerodynamics Lab",
    category: "Software",
    descriptor: "HIGH-FREQUENCY COMPUTE",
    tagline: "Real-time computational telemetry core with bilateral symmetry and sub-millisecond latency.",
    image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=1200&auto=format&fit=crop",
    year: "2026",
    badge: "Telemetry / 0.4ms",
    href: "#",
  },
];

const CATEGORIES = ["All", "Websites", "AI Systems", "Brand Worlds", "Software", "Research"] as const;

export function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const isDraggingRef = useRef(false);

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  // Scroll reaction: as the section scrolls, advance the active card index
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isDraggingRef.current || shouldReduceMotion) return;
    // Map scroll progress across the filtered cards
    const clampedProgress = Math.max(0, Math.min(1, (latest - 0.2) / 0.6));
    const nextIdx = Math.min(
      filteredProjects.length - 1,
      Math.floor(clampedProgress * filteredProjects.length)
    );
    if (nextIdx !== activeIndex && nextIdx >= 0) {
      setActiveIndex(nextIdx);
    }
  });

  // Keep index within bounds on filter change
  useEffect(() => {
    setActiveIndex(0);
  }, [selectedCategory]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : filteredProjects.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < filteredProjects.length - 1 ? prev + 1 : 0));
  };

  // 3D Coverflow positioning calculation
  const getCardStyle = (diff: number) => {
    if (diff === 0) {
      // Center active card
      return {
        x: "0%",
        scale: 1.08,
        rotateY: 0,
        zIndex: 40,
        opacity: 1,
        filter: "brightness(1)",
        boxShadow: "0 28px 60px -15px rgba(23, 21, 15, 0.4), 0 10px 24px -8px rgba(23, 21, 15, 0.25)",
      };
    }
    if (diff === -1) {
      // 1 Card Left
      return {
        x: "-58%",
        scale: 0.88,
        rotateY: 12,
        zIndex: 30,
        opacity: 0.9,
        filter: "brightness(0.92)",
        boxShadow: "0 18px 36px -10px rgba(23, 21, 15, 0.25)",
      };
    }
    if (diff === 1) {
      // 1 Card Right
      return {
        x: "58%",
        scale: 0.88,
        rotateY: -12,
        zIndex: 30,
        opacity: 0.9,
        filter: "brightness(0.92)",
        boxShadow: "0 18px 36px -10px rgba(23, 21, 15, 0.25)",
      };
    }
    if (diff === -2) {
      // 2 Cards Left
      return {
        x: "-105%",
        scale: 0.74,
        rotateY: 20,
        zIndex: 20,
        opacity: 0.65,
        filter: "brightness(0.85)",
        boxShadow: "0 12px 24px -8px rgba(23, 21, 15, 0.18)",
      };
    }
    if (diff === 2) {
      // 2 Cards Right
      return {
        x: "105%",
        scale: 0.74,
        rotateY: -20,
        zIndex: 20,
        opacity: 0.65,
        filter: "brightness(0.85)",
        boxShadow: "0 12px 24px -8px rgba(23, 21, 15, 0.18)",
      };
    }
    if (diff < -2) {
      return {
        x: "-145%",
        scale: 0.6,
        rotateY: 26,
        zIndex: 10,
        opacity: 0,
        filter: "brightness(0.7)",
        boxShadow: "none",
      };
    }
    return {
      x: "145%",
      scale: 0.6,
      rotateY: -26,
      zIndex: 10,
      opacity: 0,
      filter: "brightness(0.7)",
      boxShadow: "none",
    };
  };

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto overflow-hidden select-none"
    >
      {/* 01 — Section Header */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
        <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-ink-muted mb-2 block">
          GALLERY // SELECTED ARCHIVE
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-ink mb-3">
          Things we make.
        </h2>
        <p className="font-sans text-xs sm:text-sm text-ink-muted max-w-[48ch] font-light leading-relaxed">
          See the studio through our lens: sovereign software, tactile living archives, and applied research.
        </p>

        {/* 02 — Category Filter Pills */}
        <div className="mt-8 flex items-center justify-center flex-wrap gap-2 max-w-full overflow-x-auto py-1">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink ${
                  isSelected
                    ? "bg-ink text-paper shadow-sm"
                    : "bg-paper-card text-ink-muted hover:text-ink border border-paper-border hover:border-ink/40"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* 03 — 3D Coverflow Cards Stage */}
      <div
        className="relative w-full h-[460px] sm:h-[540px] md:h-[600px] flex items-center justify-center overflow-visible"
        style={{ perspective: 1200 }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {filteredProjects.map((project, index) => {
            const diff = index - activeIndex;
            const isCenter = diff === 0;
            const style = getCardStyle(diff);

            return (
              <motion.div
                key={project.id}
                initial={false}
                animate={{
                  x: style.x,
                  scale: style.scale,
                  rotateY: style.rotateY,
                  zIndex: style.zIndex,
                  opacity: style.opacity,
                  filter: style.filter,
                  boxShadow: style.boxShadow,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 24,
                  mass: 0.8,
                }}
                onClick={() => setActiveIndex(index)}
                className={`absolute w-[260px] sm:w-[320px] md:w-[380px] h-[370px] sm:h-[460px] md:h-[510px] rounded-3xl overflow-hidden cursor-pointer will-change-transform bg-ink group ${
                  isCenter ? "pointer-events-auto" : "cursor-pointer"
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Full-bleed Project Cover Image */}
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 260px, (max-width: 768px) 320px, 380px"
                    className="object-cover object-center transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
                  />

                  {/* Gradient Vignette for Editorial Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />

                  {/* Top Badge: Year & Tech Classification */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-paper/90 pointer-events-none z-10">
                    <span className="px-2.5 py-1 rounded-full bg-ink/60 backdrop-blur-md border border-white/15">
                      {project.code} &bull; {project.year}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-ink/60 backdrop-blur-md border border-white/15 text-accent-clay">
                      {project.badge}
                    </span>
                  </div>

                  {/* Bottom Information Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-paper z-10 flex items-end justify-between gap-4">
                    <div className="space-y-1">
                      <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-paper/70 block">
                        {project.descriptor}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-white leading-tight">
                        {project.title}
                      </h3>
                      <p className="font-sans text-[11px] sm:text-xs text-paper/80 font-light line-clamp-2 max-w-[28ch] leading-relaxed pt-0.5">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Circular Action Indicator (Play/Explore) */}
                    <div className="shrink-0 w-10 h-10 rounded-full bg-paper/95 text-ink flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <ExternalLink className="w-4 h-4 text-ink" strokeWidth={1.8} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 04 — Bottom Circular Navigation Controls */}
      <div className="mt-8 sm:mt-10 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous work"
          className="w-12 h-12 rounded-full border border-ink/20 hover:border-ink hover:bg-ink hover:text-paper transition-all duration-200 flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink cursor-pointer bg-paper-card shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={1.8} />
        </button>

        <span className="font-mono text-xs text-ink-muted uppercase tracking-wider px-2">
          {activeIndex + 1} / {filteredProjects.length}
        </span>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next work"
          className="w-12 h-12 rounded-full border border-ink/20 hover:border-ink hover:bg-ink hover:text-paper transition-all duration-200 flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink cursor-pointer bg-paper-card shadow-sm"
        >
          <ArrowRight className="w-4 h-4" strokeWidth={1.8} />
        </button>
      </div>
    </section>
  );
}

export default Work;
