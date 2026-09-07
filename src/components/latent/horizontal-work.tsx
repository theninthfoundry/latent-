"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, X, Code2, Cpu, Compass, Layers } from "lucide-react";
import { spatialEase } from "@/lib/motion/easings";
import { WashiTape } from "./naive-elements";

interface ProjectCase {
  id: string;
  code: string;
  title: string;
  client: string;
  tagline: string;
  descriptor: string;
  narrative: string;
  finalUI: string;
  specs: string[];
  deskArtifacts: {
    photo: string;
    photoCaption: string;
    sketchNote: string;
    diagram: string;
    diagramTitle: string;
    codeSnippet: string;
    codeLang: string;
  };
}

const CASES: ProjectCase[] = [
  {
    id: "otaru",
    code: "§ 01",
    title: "OTARU",
    client: "Otaru Textile Archive, Tokyo",
    tagline: "The mountain remembers.",
    descriptor: "LIVING IMAGE ARCHIVE",
    narrative:
      "A world of water, timber, cloth, and the objects that pass through it. For Otaru, we built a living spatial archive where tactile material provenance, acoustic recordings, and dynamic daylight cycles preserve Japanese cultural memory.",
    finalUI: "/otaru-archive.png",
    specs: ["WebGL point-cloud", "Audio spatialization", "Next.js App Router", "IndexedDB"],
    deskArtifacts: {
      photo: "/artifacts/dithered-clouds.png",
      photoCaption: "Artifact A // Atmospheric cloud formation study",
      sketchNote:
        "“People don’t want another checkout funnel. They want to hold the fabric up to the window.”",
      diagram:
        "Textile Surface ──▶ 120fps Point-Cloud ──▶ Dynamic Acoustic Friction ──▶ Provenance Token",
      diagramTitle: "Sensory interaction loop",
      codeSnippet: `export function useTextileTension(threadId: string) {
  const [warp, setWarp] = useState<TensileMesh>();
  return { warp, acousticSeal: verifySashikoKnot(threadId) };
}`,
      codeLang: "TypeScript",
    },
  },
  {
    id: "solomon",
    code: "§ 02",
    title: "SOLOMON",
    client: "Cognitive Research Labs",
    tagline: "An AI that remembers.",
    descriptor: "EPISODIC KNOWLEDGE GRAPH",
    narrative:
      "Instead of transient chat windows that forget everything upon page refresh, Solomon constructs an autonomous, lifelong episodic memory topology for researchers, linking thoughts written months apart through decaying semantic vector resonance.",
    finalUI: "/solomon-archive.png",
    specs: ["HNSW vector index", "Orbital memory topology", "Local quantization", "Graph neural nets"],
    deskArtifacts: {
      photo:
        "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop",
      photoCaption: "Artifact B // Latent dimensional clustering study",
      sketchNote:
        "“Stop treating the model like a search box. It’s an intellectual twin with a long memory.”",
      diagram:
        "Active Thought ──▶ Semantic Projection ──▶ Ebbinghaus Decay Gate ──▶ Long-term Episodic Graph",
      diagramTitle: "Temporal memory topology",
      codeSnippet: `const memoryTrace = await graph.traverse({
  origin: currentThoughtVector,
  decayThreshold: 0.18,
  semanticHops: 4
});`,
      codeLang: "Rust / TS",
    },
  },
  {
    id: "satquery",
    code: "§ 03",
    title: "SATQUERY",
    client: "Planetary Observation Network",
    tagline: "A machine that sees the Earth.",
    descriptor: "MULTISPECTRAL SATELLITE TELEMETRY",
    narrative:
      "Allowing climate researchers to query Petabytes of raw multispectral satellite raster telemetry using natural language in milliseconds. The interface becomes geography itself.",
    finalUI:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400&auto=format&fit=crop",
    specs: ["Synthetic Aperture Radar", "GeoTIFF GPU streaming", "WebGPU rendering"],
    deskArtifacts: {
      photo:
        "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=800&auto=format&fit=crop",
      photoCaption: "Artifact C // Thermal canopy moisture differential",
      sketchNote:
        "“When you zoom out far enough, software stops looking like UI and starts looking like terrain.”",
      diagram:
        "Orbital Swarm ──▶ Multi-Band Downlink ──▶ GPU Tile Rasterizer ──▶ Real-time Natural Query",
      diagramTitle: "Planetary telemetry pipeline",
      codeSnippet: `const stream = new OrbitTelemetryStream({
  spectralBands: ['B04', 'B08', 'B12'],
  boundingPolygon: geoCoordinates
});`,
      codeLang: "C++ / WebGPU",
    },
  },
  {
    id: "devstate",
    code: "§ 04",
    title: "DEVSTATE",
    client: "Cryptographic Engineering Foundation",
    tagline: "A computer that stays private.",
    descriptor: "LOCAL-FIRST SECURE RUNTIME",
    narrative:
      "A developer workstation operating entirely in local-first memory with zero outbound telemetry, verifiable zero-knowledge proofs, and encrypted peer-to-peer workspace synchronization.",
    finalUI:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1400&auto=format&fit=crop",
    specs: ["Zero-Knowledge Proofs", "Rust microkernel", "Wasm sandbox", "CRDT peer sync"],
    deskArtifacts: {
      photo:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
      photoCaption: "Artifact D // Hardware hermetic seal verification",
      sketchNote:
        "“Privacy isn’t a toggle in user preferences. It’s an uncompromising architectural boundary.”",
      diagram:
        "Local Memory Kernel ──(ZK Proof Assertion)──▶ Encrypted Peer Cluster [No Cloud Database]",
      diagramTitle: "Zero-knowledge memory boundary",
      codeSnippet: `pub async fn assert_hermetic_seal(state: &LocalRuntime) -> Result<ZKProof, PrivacyFault> {
    state.verify_zero_network_leak()?;
    Ok(generate_zk_proof(state))
}`,
      codeLang: "Rust",
    },
  },
];

export function HorizontalWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeModalCase, setActiveModalCase] = useState<ProjectCase | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth scroll spring for horizontal gliding
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 32,
    stiffness: 180,
    mass: 0.6,
  });

  // Map progress (0 to 1) to horizontal translation percentage across 4 cards
  // 4 cards roughly width 640px each with margins requires ~ -68% to -74% translation
  const xTranslation = useTransform(smoothProgress, [0, 1], ["2%", "-72%"]);

  // Calculate current active project index for indicator (0 to 3)
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const idx = Math.min(3, Math.floor(latest * 4));
      setActiveIndex(idx);
    });
  }, [scrollYProgress]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModalCase) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModalCase]);

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative h-[360vh] bg-paper border-t border-paper-border"
    >
      {/* Pinned Sticky Window */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-16 sm:pt-20 pb-8 px-6 sm:px-12 lg:px-20 max-w-[1600px] mx-auto overflow-hidden">
        {/* Section Masthead Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-paper-border/70 pb-4 z-10 shrink-0">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-ink-muted mb-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-clay" />
              <span>§ 04 // Technical Archive</span>
              <span>&bull;</span>
              <span>Living Deployments</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-ink tracking-tight">
              Selected Work.
            </h2>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs text-ink-muted">
            <div className="hidden md:flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-accent-clay" />
              <span>Scroll down to glide horizontally</span>
            </div>
            <div className="px-3 py-1 rounded-full bg-paper-card border border-paper-border text-[11px] text-ink font-semibold">
              CASE {String(activeIndex + 1).padStart(2, "0")} / 04
            </div>
          </div>
        </div>

        {/* The 3D Horizontal Kinetic Rail */}
        <div className="my-auto w-full overflow-visible py-4 z-10">
          <motion.div
            style={shouldReduceMotion ? {} : { x: xTranslation }}
            className="flex items-stretch gap-8 sm:gap-12 will-change-transform"
          >
            {CASES.map((project, idx) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.35, ease: spatialEase }}
                className="w-[84vw] sm:w-[540px] md:w-[620px] lg:w-[680px] shrink-0 rounded-3xl bg-paper-card border border-paper-border p-6 sm:p-8 flex flex-col justify-between shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(23,21,15,0.08)] hover:border-ink/40 transition-all group relative overflow-hidden"
              >
                {/* Subtle Washi Tape in top corner */}
                <div className="absolute -top-2.5 right-12 z-20">
                  <WashiTape className="w-20 opacity-70" />
                </div>

                {/* Card Header */}
                <div className="space-y-3 pb-4 border-b border-paper-border/60">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                    <span className="font-semibold text-accent-clay">{project.code}</span>
                    <span>{project.descriptor}</span>
                  </div>

                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-ink group-hover:italic transition-all">
                      {project.title}
                    </h3>
                    <span className="font-mono text-xs text-ink-muted shrink-0">
                      {project.client}
                    </span>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-ink-light font-light italic">
                    &ldquo;{project.tagline}&rdquo;
                  </p>
                </div>

                {/* Card Main Interactive Image Stage */}
                <div className="my-5 relative rounded-2xl overflow-hidden border border-paper-border bg-ink aspect-[16/10] group-hover:border-ink/60 transition-colors">
                  <img
                    src={project.finalUI}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {/* Specs Pill Overlays */}
                  <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 z-10">
                    {project.specs.slice(0, 3).map((spec) => (
                      <span
                        key={spec}
                        className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-paper font-mono text-[9px] uppercase tracking-wider"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Lower Narrative & Trigger */}
                <div className="space-y-4 pt-1">
                  <p className="font-sans text-xs sm:text-sm text-ink-light font-light leading-relaxed line-clamp-2">
                    {project.narrative}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-paper-border/60">
                    {/* Live Snippet Preview Chip */}
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-ink-muted">
                      <Code2 className="w-3 h-3 text-emerald-600" />
                      <span>{project.deskArtifacts.codeLang} Substrate</span>
                    </div>

                    {/* Inspect Trigger */}
                    <button
                      type="button"
                      onClick={() => setActiveModalCase(project)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-ink text-paper hover:bg-ink-light transition-all font-mono text-[10px] uppercase tracking-wider shadow-sm group-hover:scale-105"
                    >
                      <span>Inspect Case</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Horizontal Scrub Progress Indicator */}
        <div className="shrink-0 z-10 pt-4 border-t border-paper-border/70 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-ink-muted">
            <span>01 // OTARU</span>
            <span>02 // SOLOMON</span>
            <span>03 // SATQUERY</span>
            <span>04 // DEVSTATE</span>
          </div>

          {/* Interactive Dynamic Scrub Line */}
          <div className="flex-1 max-w-md h-1 rounded-full bg-paper-border/80 overflow-hidden relative">
            <motion.div
              style={shouldReduceMotion ? { width: "100%" } : { scaleX: scrollYProgress }}
              className="h-full bg-ink origin-left"
            />
          </div>

          <div className="font-mono text-[10px] uppercase text-ink-muted tracking-widest shrink-0">
            [ 100% Client-Side Physics ]
          </div>
        </div>
      </div>

      {/* Deep-Dive Case Study Drawer Modal */}
      <AnimatePresence>
        {activeModalCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/70 backdrop-blur-md flex justify-end"
            onClick={() => setActiveModalCase(null)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: spatialEase }}
              className="w-full max-w-2xl h-full bg-paper p-6 sm:p-10 overflow-y-auto space-y-8 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalCase(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-paper-border hover:bg-paper-card transition-colors text-ink"
                aria-label="Close Case Drawer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Drawer Masthead */}
              <div className="space-y-3 pr-12">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-muted">
                  <span>{activeModalCase.code}</span>
                  <span>&bull;</span>
                  <span>{activeModalCase.client}</span>
                </div>
                <h3 className="font-serif text-4xl sm:text-5xl font-light text-ink">
                  {activeModalCase.title}
                </h3>
                <p className="font-sans text-base text-ink-light font-light leading-relaxed">
                  {activeModalCase.narrative}
                </p>
              </div>

              {/* Desk Artifact: Photo Study */}
              <div className="rounded-2xl overflow-hidden border border-paper-border bg-ink">
                <img
                  src={activeModalCase.deskArtifacts.photo}
                  alt={activeModalCase.deskArtifacts.photoCaption}
                  className="w-full h-56 object-cover opacity-90"
                />
                <div className="p-3 bg-paper-card border-t border-paper-border font-mono text-[10px] text-ink-muted">
                  {activeModalCase.deskArtifacts.photoCaption}
                </div>
              </div>

              {/* Naïve Note & Interaction Diagram */}
              <div className="p-6 rounded-2xl bg-paper-card border border-paper-border space-y-4 relative">
                <div className="washi-tape -top-3 left-8" />
                <p className="font-hand text-2xl text-ink leading-snug">
                  {activeModalCase.deskArtifacts.sketchNote}
                </p>

                <div className="pt-4 border-t border-dashed border-paper-border space-y-1.5 font-mono text-xs text-ink-muted">
                  <div className="text-[10px] uppercase tracking-widest text-ink font-semibold">
                    {activeModalCase.deskArtifacts.diagramTitle}
                  </div>
                  <div className="p-3 rounded-lg bg-paper border border-paper-border text-[11px] leading-relaxed text-ink">
                    {activeModalCase.deskArtifacts.diagram}
                  </div>
                </div>
              </div>

              {/* Production Code Substrate */}
              <div className="rounded-2xl bg-ink p-5 border border-ink space-y-3 font-mono text-xs text-paper shadow-md">
                <div className="flex items-center justify-between pb-2 border-b border-paper/15 text-[10px] text-paper/60 uppercase">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{activeModalCase.deskArtifacts.codeLang}</span>
                  </div>
                  <span className="text-emerald-400">Production Substrate</span>
                </div>
                <pre className="text-[11px] leading-relaxed text-paper/90 overflow-x-auto">
                  <code>{activeModalCase.deskArtifacts.codeSnippet}</code>
                </pre>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-widest text-ink-muted block font-semibold">
                  Architectural Specifications
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeModalCase.specs.map((spec) => (
                    <span
                      key={spec}
                      className="px-3 py-1 rounded-full bg-paper-card border border-paper-border font-mono text-xs text-ink"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default HorizontalWork;
