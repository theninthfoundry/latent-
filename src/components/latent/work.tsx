"use client";

import React from "react";
import { ParallaxLayer } from "@/components/motion/scroll-reveal";
import { LatentImage } from "./latent-image";

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

export function Work() {


  return (
    <section
      id="work"
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto border-t border-paper-border overflow-hidden"
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
            § 05 // The Workshop &amp; Archive
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-ink text-balance">
            Things we make.
          </h2>
        </div>
        <p className="font-sans text-sm text-ink-muted max-w-[62ch] text-pretty font-light leading-[1.6]">
          Not portfolio thumbnails. A curated look at the actual studio desk
          where ideas transform into physical and digital reality.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 relative z-10 pt-4">
        {CASES.map((c) => (
          <div key={c.id} className="group relative flex flex-col space-y-5">
            {/* Large Cover Frame */}
            <div className="rounded-2xl overflow-hidden border-[0.5px] border-ink/20 bg-ink aspect-[4/3] sm:aspect-[16/10] relative shadow-sm cursor-pointer">
              <LatentImage
                src={c.finalUI}
                alt={c.title}
                fill
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-[1.03]"
              />
              
              {/* Caption slide on hover */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 bg-gradient-to-t from-ink/95 via-ink/80 to-transparent text-paper translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[0.16,1,0.3,1] flex items-end">
                <p className="font-sans text-xs sm:text-sm font-light text-pretty leading-relaxed text-paper/90 max-w-[50ch]">
                  {c.narrative}
                </p>
              </div>
            </div>

            {/* Metadata (Project Name, Premise, Tags) */}
            <div className="space-y-3 px-1">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-ink-muted block mb-1.5">
                  {c.code} // {c.client}
                </span>
                <h3 className="font-serif text-3xl font-light text-ink tracking-tight">
                  {c.title}
                </h3>
              </div>
              <p className="font-sans text-base text-ink-muted font-light text-pretty">
                {c.tagline}
              </p>
              
              {/* Tech tags as mono pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {c.specs.map((spec) => (
                  <span key={spec} className="font-mono text-[9px] uppercase tracking-wider text-ink/70 px-2.5 py-1 rounded-full bg-paper-subtle border-[0.5px] border-ink/15">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
