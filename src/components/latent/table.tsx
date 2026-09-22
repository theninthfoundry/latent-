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
    type: "Risograph Optical Specimen",
    note: "“No stock photos. Ever. Every mark must feel printed by human hands.”",
    artifactTitle: "Risograph Halftone Study — Studio Specimen № 014",
    renderArtifact: () => (
      <div className="relative rounded-2xl overflow-hidden border border-paper-border bg-paper-card p-6 flex flex-col items-center justify-center">
        <div className="washi-tape -top-2 left-8 opacity-80" />
        <img
          src="/artifacts/atelier/risograph-hand.png"
          onError={(e) => {
            e.currentTarget.src = "/api/atelier-asset?name=risograph-hand";
          }}
          alt="Risograph Halftone Hand & Vintage Camera with Red Star Flash"
          className="h-64 sm:h-80 object-contain drop-shadow-[0_12px_32px_rgba(23,21,15,0.18)]"
        />
        <div className="w-full mt-4 p-3 bg-paper border border-paper-border rounded-xl font-mono text-[11px] text-ink-muted flex justify-between items-center">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-clay" />
            <span>Risograph Halftone Specimen &bull; 300 DPI</span>
          </span>
          <span className="text-accent-clay font-medium uppercase text-[10px]">
            Atelier Archive № 014
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "code",
    name: "Code",
    subtitle: "The tactile substrate",
    type: "Cross-Stitch Pixel Lattice",
    note: "“Code is not translation; code is needlepoint made of light.”",
    artifactTitle: "Pixel Jaali & Computational Typography",
    renderArtifact: () => (
      <div className="relative rounded-2xl overflow-hidden border border-paper-border bg-paper-card p-6 flex flex-col items-center justify-center">
        <div className="washi-tape -top-2 left-8 opacity-80" />
        <img
          src="/artifacts/atelier/pixel-jaali.png"
          onError={(e) => {
            e.currentTarget.src = "/api/atelier-asset?name=pixel-jaali";
          }}
          alt="Cross-stitch Needlepoint Pixel Grid — Do What You Love"
          className="h-64 sm:h-80 object-contain drop-shadow-[0_8px_24px_rgba(20,44,72,0.12)] rounded-lg"
        />
        <div className="w-full mt-4 p-3 bg-paper border border-paper-border rounded-xl font-mono text-[11px] text-ink-muted flex justify-between items-center">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-atelier-indigo" />
            <span>Pixel Lattice &bull; Needlepoint Cross-Stitch</span>
          </span>
          <span className="text-atelier-indigo font-medium uppercase text-[10px]">
            Substrate Matrix
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "textile",
    name: "Textile",
    subtitle: "Carpet & filigree grammar",
    type: "Silk & Wool Royal Tapestry",
    note: "“A border is not decoration; it is an architectural container.”",
    artifactTitle: "Indian/Persian Royal Medallion Tapestry",
    renderArtifact: () => (
      <div className="relative rounded-2xl overflow-hidden border border-paper-border bg-paper-card p-6 flex flex-col items-center justify-center">
        <div className="washi-tape -top-2 left-8 opacity-80" />
        <img
          src="/artifacts/atelier/carpet-border.jpg"
          onError={(e) => {
            e.currentTarget.src = "/api/atelier-asset?name=carpet-border";
          }}
          alt="Royal Indian Floral Carpet Tapestry with Filigree Medallion"
          className="h-64 sm:h-80 object-contain drop-shadow-[0_12px_32px_rgba(23,21,15,0.15)] rounded-lg"
        />
        <div className="w-full mt-4 p-3 bg-paper border border-paper-border rounded-xl font-mono text-[11px] text-ink-muted flex justify-between items-center">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-atelier-brass" />
            <span>Royal Acanthus &amp; Rose Medallion &bull; Silk Weft</span>
          </span>
          <span className="text-atelier-brass font-medium uppercase text-[10px]">
            Textile Heritage
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "celestial",
    name: "Celestial",
    subtitle: "Astronomical coordinates",
    type: "Solar Woodcut Engraving",
    note: "“Time is a spatial dimension when mapped to the stars.”",
    artifactTitle: "Solar Meridian & Star Constellation Map",
    renderArtifact: () => (
      <div className="relative rounded-2xl overflow-hidden border border-paper-border bg-atelier-indigo p-6 flex flex-col items-center justify-center">
        <div className="washi-tape -top-2 left-8 opacity-80" />
        <img
          src="/artifacts/atelier/celestial-sun.jpg"
          onError={(e) => {
            e.currentTarget.src = "/api/atelier-asset?name=celestial-sun";
          }}
          alt="Celestial Sun Face with Constellations and Solar Rays"
          className="h-64 sm:h-80 object-contain drop-shadow-[0_12px_32px_rgba(0,0,0,0.4)] rounded-lg"
        />
        <div className="w-full mt-4 p-3 bg-paper text-ink border border-paper-border rounded-xl font-mono text-[11px] text-ink-muted flex justify-between items-center">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-atelier-brass" />
            <span>17°23&apos; N &bull; 78°29&apos; E &bull; Solar Rays</span>
          </span>
          <span className="text-atelier-indigo font-medium uppercase text-[10px]">
            Celestial Specimen
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "botanical",
    name: "Botanical",
    subtitle: "The living mark",
    type: "Hand-Drawn Indigo Flower",
    note: "“Growth is not linear. It expands in five deliberate directions.”",
    artifactTitle: "Indigo Botanical Specimen with Pearl Stamens",
    renderArtifact: () => (
      <div className="relative rounded-2xl overflow-hidden border border-paper-border bg-paper-card p-6 flex flex-col items-center justify-center">
        <div className="washi-tape -top-2 left-8 opacity-80" />
        <img
          src="/artifacts/atelier/botanical-flower.png"
          onError={(e) => {
            e.currentTarget.src = "/api/atelier-asset?name=botanical-flower";
          }}
          alt="Authentic Indigo Botanical Flower with Pearl Stamens"
          className="h-64 sm:h-80 object-contain drop-shadow-[0_12px_32px_rgba(20,44,72,0.2)]"
        />
        <div className="w-full mt-4 p-3 bg-paper border border-paper-border rounded-xl font-mono text-[11px] text-ink-muted flex justify-between items-center">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-atelier-indigo" />
            <span>Indigo Botanical Bloom &bull; Pearl Stamen Center</span>
          </span>
          <span className="text-atelier-indigo font-medium uppercase text-[10px]">
            Living Mark
          </span>
        </div>
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
];

export function TheTable() {
  const [activeMaterial, setActiveMaterial] = useState(MATERIALS[0]);

  return (
    <section className="relative pt-12 sm:pt-14 pb-14 sm:pb-16 px-6 sm:px-12 lg:px-20 max-w-[1500px] mx-auto border-t border-paper-border overflow-hidden">
      {/* Studio Table Material Watermark 01: Authentic Royal Carpet Tapestry with restrained parallax */}
      <ParallaxLayer offset={16} direction="up" className="absolute -top-10 -right-16 w-80 h-72 pointer-events-none select-none opacity-[0.12] mix-blend-multiply -rotate-6 overflow-hidden rounded-2xl z-0">
        <img
          src="/artifacts/atelier/carpet-border.jpg"
          onError={(e) => {
            e.currentTarget.src = "/api/atelier-asset?name=carpet-border";
          }}
          alt=""
          className="w-full h-full object-cover scale-110"
        />
      </ParallaxLayer>

      {/* Studio Table Material Watermark 02: Authentic Celestial Sun Specimen with restrained parallax */}
      <ParallaxLayer offset={18} direction="down" className="absolute bottom-10 -left-20 w-[440px] h-[440px] pointer-events-none select-none opacity-[0.09] mix-blend-multiply rotate-45 overflow-hidden z-0">
        <img
          src="/artifacts/atelier/celestial-sun.jpg"
          onError={(e) => {
            e.currentTarget.src = "/api/atelier-asset?name=celestial-sun";
          }}
          alt=""
          className="w-full h-full object-contain"
        />
      </ParallaxLayer>

      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8 sm:mb-10 border-b border-paper-border pb-6 relative z-10">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-1.5 block">
            § 03 // Materials &bull; The Atelier Desk
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-ink">
            The Studio Table.
          </h2>
        </div>
        <p className="font-sans text-sm text-ink-muted max-w-md font-light leading-relaxed">
          We move comfortably between disciplines. Inspect the actual raw
          materials, prints, textiles, and optical specimens we bring to the desk every morning.
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
          <div className="p-8 rounded-3xl bg-paper-card border border-paper-border shadow-2xs">
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
              <p className="font-hand text-2xl text-accent-clay leading-relaxed">
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

export default TheTable;
