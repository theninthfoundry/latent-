"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export interface ProjectCardData {
  id: string;
  code: string;
  title: string;
  descriptor: string;
  premise: string;
  image: string;
  year?: string;
  tags?: string[];
  href?: string;
}

interface ProjectCardProps {
  project: ProjectCardData;
  aspectRatio?: "video" | "square" | "wide";
  showPremiseByDefault?: boolean;
}

export function ProjectCard({
  project,
  aspectRatio = "video",
  showPremiseByDefault = false,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const aspectClass =
    aspectRatio === "square"
      ? "aspect-square"
      : aspectRatio === "wide"
      ? "aspect-[16/10]"
      : "aspect-[16/10] sm:aspect-[16/9]";

  const href = project.href || `/work#${project.id}`;

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group block relative focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink rounded-2xl overflow-hidden"
    >
      {/* Visual Container */}
      <div className={`relative w-full ${aspectClass} overflow-hidden rounded-2xl bg-paper-subtle border border-paper-border transition-all duration-500 group-hover:border-ink/40 shadow-sm`}>
        {/* Background Image with slow zoom and subtle tone shift */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] filter saturate-[0.88] group-hover:saturate-100"
        />

        {/* Subtle Vignette Gradient on bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-300 pointer-events-none" />

        {/* Floating Top Tag */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-paper/90 backdrop-blur-md border border-paper-border/80 text-ink shadow-sm">
            {project.code}
          </span>
          <div className="w-8 h-8 rounded-full bg-paper/90 backdrop-blur-md border border-paper-border/80 flex items-center justify-center text-ink transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-sm">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Floating Bottom Card Details & Premise Reveal */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-paper flex flex-col justify-end pointer-events-none">
          <div className="space-y-1">
            <span className="font-mono text-[10px] tracking-widest uppercase text-paper/70 block">
              {project.descriptor}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-paper leading-tight group-hover:italic transition-all duration-300">
              {project.title}
            </h3>
          </div>

          {/* Premise reveal: smoothly slides in on hover or visible by default */}
          <div
            className={`transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
              showPremiseByDefault || isHovered
                ? "max-h-24 opacity-100 mt-2.5 pt-2 border-t border-paper/20"
                : "max-h-0 opacity-0 mt-0"
            }`}
          >
            <p className="font-sans text-xs sm:text-sm text-paper/90 font-light leading-relaxed line-clamp-2">
              {project.premise}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
