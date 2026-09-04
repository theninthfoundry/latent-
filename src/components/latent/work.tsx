"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WashiTape, HandDrawnArrow } from "./naive-elements";
import { ParallaxLayer } from "@/components/motion/scroll-reveal";

interface ProjectCase {
  id: string;
  code: string;
  title: string;
  client: string;
  tagline: string;
  descriptor: string;
  narrative: string;
  deskArtifacts: {
    photo: string;
    photoCaption: string;
    sketchNote: string;
    diagram: string;
    diagramTitle: string;
    codeSnippet: string;
    codeLang: string;
  };
  finalUI: string;
  specs: string[];
}

const CASES: ProjectCase[] = [
  {
    id: "otaru",
    code: "CASE 01",
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
    code: "CASE 02",
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
    code: "CASE 03",
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
    code: "CASE 04",
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

export function Work() {
  const [activeCase, setActiveCase] = useState<ProjectCase>(CASES[0]);

  return (
    <section
      id="work"
      className="relative pt-12 sm:pt-14 pb-14 sm:pb-16 px-6 sm:px-12 lg:px-20 max-w-[1600px] mx-auto border-t border-paper-border overflow-hidden"
    >
      {/* Background Artifact 01: Halftone Stars drifting behind header */}
      <ParallaxLayer
        offset={15}
        direction="up"
        className="absolute top-12 -left-12 w-72 h-72 pointer-events-none select-none opacity-[0.08] mix-blend-multiply overflow-hidden rotate-12 z-0"
      >
        <img
          src="/artifacts/halftone-stars.png"
          alt=""
          className="w-full h-full object-contain scale-125"
        />
      </ParallaxLayer>

      {/* Background Artifact 02: Large Indigo Textile Tapestry Bleed (Asymmetrical Studio Reference) */}
      <ParallaxLayer
        offset={18}
        direction="down"
        className="absolute top-1/3 -right-24 w-[540px] h-[440px] pointer-events-none select-none opacity-[0.06] mix-blend-multiply -rotate-6 overflow-hidden rounded-3xl z-0"
      >
        <img
          src="/artifacts/textile-rug.png"
          alt=""
          className="w-full h-full object-cover scale-110"
        />
      </ParallaxLayer>

      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8 sm:mb-10 border-b border-paper-border pb-6 relative z-10">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-1.5 block">
            04 // The Workshop &amp; Archive
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-ink">
            Things we make.
          </h2>
        </div>
        <p className="font-sans text-sm text-ink-muted max-w-md font-light leading-relaxed">
          Not portfolio thumbnails. A curated look at the actual studio desk
          where ideas transform into physical and digital reality.
        </p>
      </div>

      {/* Project Workbench Selector */}
      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 mb-8 sm:mb-10 font-mono text-xs">
        {CASES.map((c) => {
          const isSelected = activeCase.id === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setActiveCase(c)}
              className={`px-4 py-2.5 rounded-full border transition-all duration-200 flex items-center gap-2.5 ${
                isSelected
                  ? "bg-ink text-paper border-ink shadow-sm"
                  : "bg-paper text-ink-muted border-paper-border hover:border-ink/40 hover:text-ink"
              }`}
            >
              <span>{c.code}</span>
              <span className="text-ink-muted/50">&bull;</span>
              <span className="font-semibold uppercase tracking-wider">{c.title}</span>
            </button>
          );
        })}
      </div>

      {/* The Studio Desk Workbench Spread (Mixed Media) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCase.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-10"
        >
          {/* Top Workbench Row: Large Final UI + Case Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Final UI Display (Large Frame) */}
            <div className="lg:col-span-8 rounded-3xl overflow-hidden border border-paper-border bg-ink aspect-[16/10] relative group shadow-sm">
              <img
                src={activeCase.finalUI}
                alt={activeCase.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />

              {/* Minimal Clean Specimen Badge */}
              <div className="absolute top-5 right-5 font-mono text-[10px] uppercase tracking-widest bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white/90 shadow-sm">
                {activeCase.code} &bull; {activeCase.title}
              </div>
            </div>

            {/* Case Narrative & Technical Specs (Editorial Card) */}
            <div className="lg:col-span-4 p-8 rounded-3xl bg-paper-card border border-paper-border space-y-6 flex flex-col justify-between h-full">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-ink-muted block mb-2">
                  The Premise
                </span>
                <p className="font-serif text-2xl sm:text-3xl text-ink font-light leading-snug">
                  {activeCase.tagline}
                </p>
                <p className="font-sans text-xs sm:text-sm text-ink-light font-light leading-relaxed mt-4">
                  {activeCase.narrative}
                </p>
              </div>

              <div className="pt-6 border-t border-paper-border">
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted block mb-3">
                  Technical Architecture
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeCase.specs.map((spec) => (
                    <span
                      key={spec}
                      className="px-2.5 py-1 rounded bg-paper text-ink-light border border-paper-border font-mono text-[11px]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Workbench Row: Studio Desk Materials (Photo + Note + Code + Diagram) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {/* 1. Research Photograph */}
            <div className="p-4 rounded-2xl bg-paper-card border border-paper-border space-y-3 shadow-sm">
              <div className="rounded-xl overflow-hidden aspect-[4/3] border border-paper-border bg-ink">
                <img
                  src={activeCase.deskArtifacts.photo}
                  alt={activeCase.deskArtifacts.photoCaption}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                {activeCase.deskArtifacts.photoCaption}
              </p>
            </div>

            {/* 2. Handwritten Washi-Taped Studio Note (Naïve 3% rule) */}
            <div className="relative p-6 rounded-2xl bg-[#FFFDF9] border border-paper-border flex flex-col justify-between shadow-sm">
              <WashiTape className="-top-2.5 left-6" />
              <div className="pt-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted block mb-2">
                  Studio Desk Reflection
                </span>
                <p className="font-hand text-2xl sm:text-3xl text-ink leading-snug">
                  {activeCase.deskArtifacts.sketchNote}
                </p>
              </div>
              <div className="pt-4 border-t border-dashed border-paper-border font-mono text-[10px] text-ink-muted">
                Pencil on paper &bull; Field Notebook
              </div>
            </div>

            {/* 3. System Topology Diagram */}
            <div className="p-6 rounded-2xl bg-paper-subtle border border-paper-border flex flex-col justify-between shadow-sm">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted block mb-2">
                  {activeCase.deskArtifacts.diagramTitle}
                </span>
                <div className="font-mono text-xs text-ink leading-relaxed p-3 bg-paper rounded-lg border border-paper-border mt-3">
                  {activeCase.deskArtifacts.diagram}
                </div>
              </div>
              <div className="font-mono text-[10px] text-ink-muted uppercase tracking-widest pt-4">
                Architecture Topology Spec
              </div>
            </div>

            {/* 4. Production Code Fragment */}
            <div className="p-5 rounded-2xl bg-ink border border-ink text-paper font-mono text-xs flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-paper/15 text-[10px] text-paper/60 uppercase">
                  <span>{activeCase.deskArtifacts.codeLang}</span>
                  <span className="text-emerald-400">Verified Build</span>
                </div>
                <pre className="text-[11px] leading-relaxed text-paper/90 overflow-x-auto">
                  <code>{activeCase.deskArtifacts.codeSnippet}</code>
                </pre>
              </div>
              <div className="font-mono text-[10px] text-paper/50 uppercase tracking-widest pt-3 border-t border-paper/15">
                Core Production Substrate
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
