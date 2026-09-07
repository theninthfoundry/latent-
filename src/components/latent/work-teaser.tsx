"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard, ProjectCardData } from "./project-card";

const TEASER_PROJECTS: ProjectCardData[] = [
  {
    id: "otaru",
    code: "§ 01",
    title: "OTARU",
    descriptor: "LIVING IMAGE ARCHIVE",
    premise:
      "A world of water, timber, cloth, and living daylight cycles preserving Japanese textile provenance.",
    image: "/otaru-archive.png",
    href: "/work#otaru",
  },
  {
    id: "solomon",
    code: "§ 02",
    title: "SOLOMON",
    descriptor: "EPISODIC KNOWLEDGE GRAPH",
    premise:
      "An autonomous episodic memory topology linking research thoughts across months through decaying semantic vector resonance.",
    image: "/solomon-archive.png",
    href: "/work#solomon",
  },
  {
    id: "satquery",
    code: "§ 03",
    title: "SATQUERY",
    descriptor: "MULTISPECTRAL SATELLITE TELEMETRY",
    premise:
      "Natural language queries over petabytes of raw multispectral satellite raster telemetry in milliseconds.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400&auto=format&fit=crop",
    href: "/work#satquery",
  },
];

export function WorkTeaser() {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20 max-w-[1600px] mx-auto border-t border-paper-border">
      {/* Editorial Header */}
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-1.5 block">
              § 04 — Selected Artifacts
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-ink">
              Selected Work.
            </h2>
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-ink transition-colors"
          >
            <span>Explore full archive (04)</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>

      {/* 3 Image-Forward Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {TEASER_PROJECTS.map((project, idx) => (
          <Reveal key={project.id} delay={idx * 0.1}>
            <ProjectCard project={project} aspectRatio="wide" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default WorkTeaser;
