"use client";

import React, { useState, useEffect } from "react";
import { Skiper8 } from "@/components/skiper-ui/skiper8";
import { Navbar } from "@/components/latent/navbar";
import { Hero } from "@/components/latent/hero";
import { PinnedThesis } from "@/components/latent/pinned-thesis";
import { TheTable } from "@/components/latent/table";
import { HorizontalWork } from "@/components/latent/horizontal-work";
import { FinalCTA } from "@/components/latent/cta";
import { Footer } from "@/components/latent/footer";
import { LusionCanvas } from "@/components/motion/lusion-canvas";
import { VelocitySkew } from "@/components/motion/velocity-skew";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Explicitly enforce native browser pointer on client mount
    if (typeof document !== "undefined") {
      document.body.classList.remove("has-custom-cursor");
      document.body.style.cursor = "default";
    }
  }, []);

  return (
    <>
      {/* Skiper8 Words Preloader: Animated multilingual text reveal + curved SVG wave exit */}
      <Skiper8 onComplete={() => setIsLoaded(true)} duration={2200} />

      {/* Lusion-Inspired Fluid-Ink Physics Background Canvas */}
      <LusionCanvas />

      <main id="main-content" className="relative min-h-screen bg-paper text-ink selection:bg-ink selection:text-paper font-sans overflow-x-clip">
        {/* Navigation Masthead */}
        <Navbar isReady={isLoaded} />

        {/* 01 — Hero with 3D Perspective Scroll Drift */}
        <Hero isReady={isLoaded} />

        {/* Velocity Skew Container adds physical mass & spring inertia to vertical sections */}
        <VelocitySkew maxSkew={1.2}>
          {/* 02 — Pinned Scrubbed Thesis Slide (Word-by-word illumination + opposing coordinate ribbons) */}
          <PinnedThesis />

          {/* 03 — The Studio Table (Interactive Materials & Substrates) */}
          <TheTable />
        </VelocitySkew>

        {/* 04 — Pinned Horizontal 3D Work Gallery (360vh scroll-glide + case drawer inspector) */}
        <HorizontalWork />

        <VelocitySkew maxSkew={1.2}>
          {/* 05 — Final Closing CTA */}
          <FinalCTA />

          {/* 06 — Architectural Footer & Colophon */}
          <Footer />
        </VelocitySkew>
      </main>
    </>
  );
}
