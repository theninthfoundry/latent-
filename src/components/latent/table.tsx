"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ParallaxLayer } from "@/components/motion/scroll-reveal";

interface Material {
  id: string;
  name: string;
  subtitle: string;
  type: string;
  note: string;
  artifactTitle: string;
  renderArtifact: () => React.ReactNode;
}

const MATERIALS: Material[] = [
  {
    id: "idea",
    name: "Idea",
    subtitle: "The latent premise",
    type: "Handwritten Ephemera",
    note: "“If it doesn’t create a small ache in the chest, throw it away.”",
    artifactTitle: "Labs Notebook Entry — July 14",
    renderArtifact: () => (
      <div className="relative p-8 rounded-2xl bg-[#FFFDF9] border border-paper-border shadow-sm">
        <div className="washi-tape -top-3 left-10" />
        <p className="font-hand text-3xl text-ink leading-relaxed">
          What if the website isn’t a store at all, but a spatial warehouse where
          the lights only turn on when you step into a room?
        </p>
        <div className="mt-6 pt-4 border-dashed border-t border-paper-border font-mono text-[11px] text-ink-muted">
          Pencil 2B on Japanese cotton paper
        </div>
      </div>
    ),
  },
  {
    id: "image",
    name: "Image",
    subtitle: "Visual atmosphere",
    type: "Optical Contact Sheet",
    note: "“No stock photos. Ever.”",
    artifactTitle: "Optical Chromatic Study — Vespera Pavilion",
    renderArtifact: () => (
      <div className="relative rounded-2xl overflow-hidden border border-paper-border bg-ink">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
          alt="Architectural light study"
          className="w-full h-64 sm:h-80 object-cover opacity-90"
        />
        <div className="p-4 bg-paper-card border-t border-paper-border font-mono text-[11px] text-ink-muted flex justify-between">
          <span>50mm f/1.4 • Kodak Portra 400 Tone</span>
          <span>Tokyo Lab Archive</span>
        </div>
      </div>
    ),
  },
  {
    id: "code",
    name: "Code",
    subtitle: "The tactile substrate",
    type: "Production Syntax",
    note: "“Code is not translation; code is the final material.”",
    artifactTitle: "Kinetic Easing Matrix in Rust/TS",
    renderArtifact: () => (
      <div className="rounded-2xl bg-ink p-6 border border-ink font-mono text-xs text-paper overflow-x-auto shadow-sm">
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-paper/10 text-[10px] text-paper/60 uppercase">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span>src/engine/spring.ts</span>
        </div>
        <pre className="text-paper/90 leading-relaxed">
          <code>{`export function springSimulation(
  target: number, 
  velocity: number, 
  stiffness = 180, 
  damping = 12
) {
  const force = -stiffness * (current - target) - damping * velocity;
  return current + velocity * dt + 0.5 * force * dt * dt;
}`}</code>
        </pre>
      </div>
    ),
  },
  {
    id: "data",
    name: "Data",
    subtitle: "Mathematical topography",
    type: "Empirical Distribution",
    note: "“Numbers are poems when arranged with intention.”",
    artifactTitle: "Cluster Dispersion Telemetry — N=24,000",
    renderArtifact: () => (
      <div className="p-6 rounded-2xl bg-paper-card border border-paper-border font-mono text-xs">
        <div className="flex justify-between items-center pb-4 border-b border-paper-border text-ink-muted text-[11px]">
          <span>DISTRIBUTION VECTOR</span>
          <span>CONFIDENCE: 99.4%</span>
        </div>
        <div className="py-8 flex items-end justify-between gap-2 h-44">
          {[20, 35, 60, 45, 80, 95, 70, 85, 40, 65, 90, 100, 75, 50, 30].map(
            (val, i) => (
              <div
                key={i}
                style={{ height: `${val}%` }}
                className="w-full bg-ink hover:bg-accent-gold transition-colors rounded-t"
              />
            )
          )}
        </div>
        <div className="flex justify-between text-[10px] text-ink-muted pt-2 border-t border-paper-border">
          <span>00:00:00</span>
          <span>GAUSSIAN CURVE CLUSTERING</span>
          <span>23:59:59</span>
        </div>
      </div>
    ),
  },
  {
    id: "voice",
    name: "Voice",
    subtitle: "Acoustic resonance",
    type: "Waveform Spectroscopy",
    note: "“Silence has a louder frequency than noise.”",
    artifactTitle: "Spatial Audio Spatialization Spec",
    renderArtifact: () => (
      <div className="p-8 rounded-2xl bg-paper-subtle border border-paper-border flex flex-col justify-center items-center text-center">
        <div className="flex items-center gap-1.5 h-20 mb-6">
          {[4, 12, 28, 48, 80, 64, 32, 16, 55, 90, 100, 72, 44, 20, 8, 30, 60, 40, 10].map(
            (h, i) => (
              <span
                key={i}
                style={{ height: `${h}%` }}
                className="w-1.5 bg-ink rounded-full animate-pulse"
              />
            )
          )}
        </div>
        <p className="font-serif text-lg text-ink font-light">
          Binaural Room Impulse Response (BRIR)
        </p>
        <span className="font-mono text-xs text-ink-muted mt-1">
          48.0 kHz • 24-bit Lossless
        </span>
      </div>
    ),
  },
  {
    id: "motion",
    name: "Motion",
    subtitle: "Choreography of time",
    type: "Kinetic Study",
    note: "“Motion should feel slow, physical and deliberate.”",
    artifactTitle: "Bezier Arc Continuity Loop",
    renderArtifact: () => (
      <div className="p-8 rounded-2xl bg-paper-card border border-paper-border flex flex-col items-center justify-center text-center">
        <div className="relative w-36 h-36 flex items-center justify-center mb-4">
          <div className="absolute inset-0 border border-ink/20 rounded-full animate-spin [animation-duration:8s]" />
          <div className="w-16 h-16 border border-ink rounded-lg rotate-45 animate-pulse" />
          <div className="w-3 h-3 bg-ink rounded-full" />
        </div>
        <span className="font-mono text-xs text-ink font-medium uppercase">
          cubic-bezier(0.16, 1, 0.3, 1)
        </span>
        <span className="font-mono text-[10px] text-ink-muted mt-1">
          Fluid mechanical dampening
        </span>
      </div>
    ),
  },
  {
    id: "model",
    name: "Model",
    subtitle: "Latent cognition",
    type: "Neural Embeddings",
    note: "“AI is a material, not a personality.”",
    artifactTitle: "1536-Dimensional Semantic Neighbor Search",
    renderArtifact: () => (
      <div className="p-6 rounded-2xl bg-ink text-paper border border-ink font-mono text-xs space-y-4">
        <div className="flex justify-between text-paper/60 text-[10px] uppercase">
          <span>Latent Query: &ldquo;inevitable design&rdquo;</span>
          <span>Resonance: 0.982</span>
        </div>
        <div className="space-y-2 text-paper/80">
          <div className="p-2 bg-paper/5 rounded border border-paper/10">
            01. Structural clarity without excess decoration (0.982)
          </div>
          <div className="p-2 bg-paper/5 rounded border border-paper/10">
            02. Tactile resonance matching human intuition (0.965)
          </div>
          <div className="p-2 bg-paper/5 rounded border border-paper/10">
            03. Invisible technology disappearing into interface (0.941)
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "system",
    name: "System",
    subtitle: "Enduring architecture",
    type: "Topology Diagram",
    note: "“Complexity belongs backstage.”",
    artifactTitle: "Fault-Tolerant Distributed Node Mesh",
    renderArtifact: () => (
      <div className="p-6 rounded-2xl bg-paper-card border border-paper-border font-mono text-xs space-y-4">
        <div className="text-ink-muted text-[10px] uppercase flex justify-between">
          <span>Distributed Mesh Topology</span>
          <span>Zero-Egress Failover</span>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center py-4">
          <div className="p-3 bg-paper border border-paper-border rounded">
            <span className="block font-medium text-ink">Edge PoP</span>
            <span className="text-[10px] text-ink-muted">&lt; 12ms</span>
          </div>
          <div className="p-3 bg-ink text-paper rounded border border-ink">
            <span className="block font-medium">Memory Ring</span>
            <span className="text-[10px] text-paper/70">CRDT Sync</span>
          </div>
          <div className="p-3 bg-paper border border-paper-border rounded">
            <span className="block font-medium text-ink">Zero-Trust</span>
            <span className="text-[10px] text-ink-muted">Encrypted</span>
          </div>
        </div>
      </div>
    ),
  },
];

export function TheTable() {
  const [activeMaterial, setActiveMaterial] = useState(MATERIALS[0]);

  return (
    <section className="relative pt-12 sm:pt-14 pb-14 sm:pb-16 px-6 sm:px-12 lg:px-20 max-w-[1500px] mx-auto border-t border-paper-border overflow-hidden">
      {/* Studio Table Material Watermark 01: Blue Checker Swatch on Desk with restrained parallax */}
      <ParallaxLayer offset={16} direction="up" className="absolute -top-10 -right-16 w-80 h-72 pointer-events-none select-none opacity-[0.10] mix-blend-multiply -rotate-6 overflow-hidden rounded-2xl z-0">
        <img
          src="/artifacts/blue-checker.png"
          alt=""
          className="w-full h-full object-cover scale-110"
        />
      </ParallaxLayer>

      {/* Studio Table Material Watermark 02: Atomic Diagram Specimen with restrained parallax */}
      <ParallaxLayer offset={18} direction="down" className="absolute bottom-10 -left-20 w-[440px] h-[440px] pointer-events-none select-none opacity-[0.07] mix-blend-multiply rotate-45 overflow-hidden z-0">
        <img
          src="/artifacts/atomic-diagram.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </ParallaxLayer>

      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8 sm:mb-10 border-b border-paper-border pb-6 relative z-10">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-1.5 block">
            § 03 // Materials
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-ink">
            The Studio Table.
          </h2>
        </div>
        <p className="font-sans text-sm text-ink-muted max-w-md font-light leading-relaxed">
          We move comfortably between disciplines. Inspect the actual raw
          materials we bring to the desk every morning.
        </p>
      </div>

      {/* Materials Selector Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-8 sm:mb-10">
        {MATERIALS.map((mat) => {
          const isSelected = activeMaterial.id === mat.id;
          return (
            <button
              key={mat.id}
              onClick={() => setActiveMaterial(mat)}
              className={`p-3.5 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between h-24 ${
                isSelected
                  ? "bg-ink text-paper border-ink shadow-sm"
                  : "bg-paper-card text-ink border-paper-border hover:border-ink/40"
              }`}
            >
              <span
                className={`font-mono text-[10px] uppercase tracking-wider ${
                  isSelected ? "text-paper/70" : "text-ink-muted"
                }`}
              >
                {mat.type.split(" ")[0]}
              </span>
              <span className="font-serif text-base font-normal">{mat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Material Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Metadata & Studio Note */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-paper-card border border-paper-border">
            <span className="font-mono text-[11px] uppercase tracking-widest text-ink-muted block mb-2">
              Material // {activeMaterial.name}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-ink mb-2">
              {activeMaterial.subtitle}
            </h3>
            <p className="font-mono text-xs text-ink-muted uppercase tracking-wider mb-6">
              Classification: {activeMaterial.type}
            </p>

            {/* Handwritten Note (Naïve Design 3% secret) */}
            <div className="pt-6 border-t border-paper-border">
              <span className="font-mono text-[10px] uppercase text-ink-muted tracking-widest block mb-1">
                Studio Reflection:
              </span>
              <p className="font-hand text-2xl text-ink leading-relaxed">
                {activeMaterial.note}
              </p>
            </div>
          </div>
        </div>

        {/* Right: Live Artifact Render */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMaterial.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {activeMaterial.renderArtifact()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
