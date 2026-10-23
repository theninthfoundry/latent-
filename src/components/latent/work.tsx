"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ParallaxLayer } from "@/components/motion/scroll-reveal";
import { LatentImage } from "./latent-image";

interface ProjectCase {
  id: string;
  code: string;
  title: string;
  client: string;
  tagline: string;
  descriptor: string;
  premise: string;
  contribution: string;
  status: string;
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
    code: "§ 01",
    title: "OTARU",
    client: "Textile Heritage Monograph",
    tagline: "A tactile spatial archive for archival textiles.",
    descriptor: "LIVING IMAGE ARCHIVE",
    premise: "Preserving Japanese textile provenance through sensory digital matter instead of flat e-commerce grids.",
    contribution: "Full stack engineering: WebGL point-cloud rendering, dynamic daylight cycles, and local-first IndexedDB offline caching.",
    status: "Studio Specimen &bull; Production System",
    narrative:
      "A world of water, timber, cloth, and the objects that pass through it. For Otaru, we built a living spatial archive where tactile material provenance, acoustic recordings, and dynamic daylight cycles preserve cultural memory.",
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
    client: "Cognitive Knowledge Systems",
    tagline: "Episodic memory topology with decaying vector resonance.",
    descriptor: "EPISODIC KNOWLEDGE GRAPH",
    premise: "Replacing disposable chat histories with an enduring associative memory graph that connects disparate thoughts over time.",
    contribution: "Designed orbital graph visualization and implemented HNSW vector clustering with Ebbinghaus memory decay math.",
    status: "Applied Research Prototype",
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
    client: "Earth Observation Lab",
    tagline: "Natural language query engine across satellite telemetry.",
    descriptor: "MULTISPECTRAL SATELLITE TELEMETRY",
    premise: "Accelerating climate analysis by turning Petabytes of geospatial raster layers into direct, conversational map queries.",
    contribution: "Engineered GPU tile streaming pipeline and sub-second WebGPU rasterization for synthetic aperture radar arrays.",
    status: "Computational Proof-of-Concept",
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
    client: "Local-First Cryptographic Tooling",
    tagline: "Zero-telemetry hermetic workstation runtime.",
    descriptor: "LOCAL-FIRST SECURE RUNTIME",
    premise: "Constructing an uncompromising privacy boundary for engineers handling sensitive keys and sovereign model weights.",
    contribution: "Implemented Wasm execution sandbox, CRDT multi-device state synchronization, and zero-knowledge integrity verification.",
    status: "Open Source Research Specimen",
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
  const [activeTabs, setActiveTabs] = useState<Record<string, "preview" | "artifacts">>({});

  const toggleTab = (id: string, tab: "preview" | "artifacts") => {
    setActiveTabs((prev) => ({ ...prev, [id]: tab }));
  };

  return (
    <section
      id="work"
      className="relative pt-6 sm:pt-8 pb-24 sm:pb-32 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto border-t border-paper-border overflow-hidden"
    >
      {/* Background Artifact 01: Halftone Stars drifting behind header */}
      <ParallaxLayer
        offset={14}
        direction="up"
        className="absolute top-12 -left-12 w-72 h-72 pointer-events-none select-none opacity-[0.06] mix-blend-multiply overflow-hidden rotate-12 z-0"
      >
        <LatentImage
          src="/artifacts/halftone-stars.png"
          alt=""
          width={500}
          height={500}
          className="w-full h-full object-contain scale-125 object-[20%_80%]"
        />
      </ParallaxLayer>

      {/* Background Artifact 02: Large Indigo Textile Tapestry Bleed */}
      <ParallaxLayer
        offset={16}
        direction="down"
        className="absolute top-1/3 -right-24 w-[540px] h-[440px] pointer-events-none select-none opacity-[0.05] mix-blend-multiply -rotate-6 overflow-hidden rounded-3xl z-0"
      >
        <LatentImage
          src="/artifacts/textile-rug.png"
          alt=""
          width={540}
          height={440}
          className="w-full h-full object-cover scale-110 object-[80%_20%]"
        />
      </ParallaxLayer>

      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 sm:mb-12 border-b border-paper-border pb-6 relative z-10">
        <div>
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-ink-muted mb-2 block">
            § 05 // The Archive &bull; Selected Work, Experiments, and Systems
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-ink text-balance">
            Things we make.
          </h2>
        </div>
        <p className="font-sans text-sm text-ink-muted max-w-[62ch] text-pretty font-light leading-[1.6]">
          Selected work, research prototypes, and sovereign software systems. A curated look at the actual studio desk where ambitious ideas transform into production reality.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 relative z-10 pt-4">
        {CASES.map((c) => {
          const isArtifactView = activeTabs[c.id] === "artifacts";

          return (
            <div key={c.id} className="group relative flex flex-col space-y-5">
              {/* Dossier Toggle Switch */}
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-clay animate-pulse" />
                  <span>{c.code} // {c.descriptor}</span>
                </span>
                <div className="flex items-center gap-1 bg-paper-card p-0.5 rounded-lg border border-paper-border">
                  <button
                    type="button"
                    onClick={() => toggleTab(c.id, "preview")}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      !isArtifactView
                        ? "bg-ink text-paper font-medium"
                        : "text-ink-muted hover:text-ink"
                    }`}
                  >
                    System UI
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleTab(c.id, "artifacts")}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      isArtifactView
                        ? "bg-ink text-paper font-medium"
                        : "text-ink-muted hover:text-ink"
                    }`}
                  >
                    Desk Artifacts
                  </button>
                </div>
              </div>

              {/* Display Viewport */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  {!isArtifactView ? (
                    <motion.div
                      key="preview"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-2xl overflow-hidden border border-ink/20 bg-ink aspect-[4/3] sm:aspect-[16/10] relative shadow-sm group/frame"
                    >
                      <LatentImage
                        src={c.finalUI}
                        alt={c.title}
                        fill
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover/frame:scale-[1.03]"
                      />

                      {/* Film Still Registration Marks */}
                      <div className="absolute top-3 left-3 font-mono text-[9px] text-paper/80 bg-ink/70 backdrop-blur-sm px-2 py-0.5 rounded pointer-events-none">
                        FRAME // {c.id.toUpperCase()}_PROD
                      </div>

                      {/* Caption slide on hover */}
                      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 bg-gradient-to-t from-ink/95 via-ink/80 to-transparent text-paper translate-y-4 opacity-0 group-hover/frame:translate-y-0 group-hover/frame:opacity-100 transition-all duration-500 ease-[0.16,1,0.3,1] flex items-end">
                        <p className="font-sans text-xs sm:text-sm font-light text-pretty leading-relaxed text-paper/90 max-w-[50ch]">
                          {c.narrative}
                        </p>
                      </div>

                      {/* Asymmetrical Physical Polaroid Study pinned to corner */}
                      <motion.button
                        type="button"
                        onClick={() => toggleTab(c.id, "artifacts")}
                        whileHover={{ scale: 1.06, rotate: 2 }}
                        className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-28 sm:w-36 bg-[#FFFDF9] p-1.5 sm:p-2 rounded-lg border border-paper-border shadow-[0_12px_24px_rgba(23,21,15,0.24)] rotate-[-4deg] z-20 cursor-pointer text-left transition-all"
                        title="Click to inspect studio working artifacts"
                      >
                        {/* Washi Tape Strip */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-[#F2EDE2]/95 border-l border-r border-dashed border-ink/20 pointer-events-none" />
                        <div className="relative aspect-square w-full overflow-hidden rounded bg-ink/10 mb-1.5">
                          <img
                            src={c.deskArtifacts.photo}
                            alt=""
                            className="w-full h-full object-cover grayscale contrast-125"
                          />
                        </div>
                        <span className="font-mono text-[8px] text-ink-muted uppercase tracking-wider block truncate">
                          ✎ Inspect Study
                        </span>
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="artifacts"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-2xl border border-paper-border bg-[#FFFDF9] aspect-[4/3] sm:aspect-[16/10] p-5 sm:p-6 shadow-card flex flex-col justify-between overflow-y-auto space-y-4 relative"
                    >
                      {/* 2B Pencil Reflection Note */}
                      <div className="relative p-3.5 sm:p-4 rounded-xl bg-paper/70 border border-paper-border/80">
                        <div className="absolute -top-2.5 left-6 w-14 h-3 bg-[#E8E4DA]/90 border-l border-r border-dashed border-ink/20 pointer-events-none" />
                        <span className="font-mono text-[9px] uppercase tracking-widest text-ink-muted block mb-1">
                          Studio Reflection // 2B Pencil on Cotton Paper
                        </span>
                        <p className="font-hand text-base sm:text-lg text-ink leading-relaxed">
                          {c.deskArtifacts.sketchNote}
                        </p>
                      </div>

                      {/* Telemetry Architecture Diagram */}
                      <div className="p-3 bg-paper-card rounded-lg border border-paper-border/70 font-mono text-[10px]">
                        <div className="text-[9px] text-ink-muted uppercase tracking-wider mb-1">
                          {c.deskArtifacts.diagramTitle}
                        </div>
                        <div className="text-atelier-indigo font-medium overflow-x-auto whitespace-nowrap py-0.5">
                          {c.deskArtifacts.diagram}
                        </div>
                      </div>

                      {/* Substrate Kernel Code Snippet */}
                      <div className="p-3 bg-ink text-paper rounded-lg font-mono text-[10px] overflow-x-auto">
                        <div className="text-paper/60 text-[9px] mb-1 flex justify-between">
                          <span>SUBSTRATE KERNEL</span>
                          <span className="text-accent-clay">{c.deskArtifacts.codeLang}</span>
                        </div>
                        <pre className="text-paper/90 leading-relaxed font-mono">{c.deskArtifacts.codeSnippet}</pre>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Metadata (Project Name, Premise, Contribution, Status, Tags) */}
              <div className="space-y-3 px-1 pt-2">
                <div>
                  <h3 className="font-serif text-3xl font-light text-ink tracking-tight">
                    {c.title}
                  </h3>
                  <p className="font-sans text-sm text-ink-muted font-light mt-1">
                    {c.tagline}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-paper-card border border-paper-border space-y-1.5 text-xs font-sans">
                  <p className="text-ink-light">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-ink font-semibold">Premise: </span>
                    {c.premise}
                  </p>
                  <p className="text-ink-muted">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-atelier-indigo font-semibold">Contribution: </span>
                    {c.contribution}
                  </p>
                </div>

                {/* Tech tags as mono pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {c.specs.map((spec) => (
                    <span key={spec} className="font-mono text-[9px] uppercase tracking-wider text-ink/70 px-2.5 py-1 rounded-full bg-paper-subtle border-[0.5px] border-ink/15">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
