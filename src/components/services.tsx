"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Palette,
  Sparkles,
  Zap,
  Code2,
  Box,
  ArrowRight,
} from "lucide-react";
import React from "react";

const CAPABILITIES = [
  {
    icon: Sparkles,
    number: "01",
    title: "Brand Architecture & Identity",
    description:
      "Crafting unmistakable visual languages, kinetic typography systems, and modular brand guidelines engineered for contemporary culture.",
    deliverables: ["Visual Identity", "Design Systems", "Typography Design", "Brand Strategy"],
  },
  {
    icon: Box,
    number: "02",
    title: "3D Motion & Spatial Computing",
    description:
      "Immersive three-dimensional environments, tactile product rendering, and dynamic motion choreography that command attention.",
    deliverables: ["CGI Animation", "Product Visualization", "Interactive 3D", "Creative Direction"],
  },
  {
    icon: Code2,
    number: "03",
    title: "Digital Product & Creative Engineering",
    description:
      "High-fidelity web experiences built with Next.js, Framer Motion, and WebGL with obsessive micro-interaction craft.",
    deliverables: ["Creative Frontend", "Interaction Design", "Next.js & WebGL", "Prototyping"],
  },
  {
    icon: Zap,
    number: "04",
    title: "Editorial & Art Direction",
    description:
      "Sculpting cohesive narrative worlds across digital campaign lookbooks, interactive monographs, and spatial installations.",
    deliverables: ["Campaign Direction", "Curatorial Design", "Set & Spatial Concept", "Soundscapes"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/5">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <div>
          <div className="flex items-center gap-2 text-neutral-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white max-w-2xl leading-tight">
            We operate at the convergence of <span className="italic font-serif text-neutral-400">sculptural form</span> and digital engineering.
          </h2>
        </div>
        <p className="text-neutral-400 text-sm max-w-md leading-relaxed">
          From independent pioneers to forward-thinking global brands, we build tactile, poetic digital artifacts that linger.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CAPABILITIES.map((cap, i) => {
          const Icon = cap.icon;
          return (
            <motion.div
              key={cap.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-neutral-950/60 p-8 sm:p-10 transition-all duration-500 hover:border-white/30 hover:bg-neutral-900/60"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs text-neutral-400 tracking-wider">
                    {cap.number}
                  </span>
                  <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-300 transition-colors group-hover:bg-white group-hover:text-black">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white mb-4">
                  {cap.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-8">
                  {cap.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {cap.deliverables.map((d) => (
                  <span
                    key={d}
                    className="text-[11px] font-mono tracking-wide text-neutral-400 bg-white/5 px-2.5 py-1 rounded-md"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
