"use client";

import React, { useState, useEffect } from "react";
import { Skiper8 } from "@/components/skiper-ui/skiper8";
import { Navbar } from "@/components/latent/navbar";
import { Hero } from "@/components/latent/hero";
import { ThesisTeaser } from "@/components/latent/thesis-teaser";
import { TheTable } from "@/components/latent/table";
import { Work } from "@/components/latent/work";
import { FinalCTA } from "@/components/latent/cta";
import { Footer } from "@/components/latent/footer";

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

      <main id="main-content" className="relative min-h-screen bg-paper text-ink selection:bg-ink selection:text-paper font-sans">
        {/* Navigation Masthead */}
        <Navbar isReady={isLoaded} />

        {/* 01 — Hero */}
        <Hero isReady={isLoaded} />

        {/* 02 — Next Slide: Thesis */}
        <ThesisTeaser />

        {/* 03 — The Studio Table (Interactive Materials & Substrates) */}
        <TheTable />

        {/* 04 — Projects & Work (Full Interactive Technical Archive) */}
        <Work />

        {/* 05 — Final Closing CTA */}
        <FinalCTA />

        {/* 06 — Architectural Footer & Colophon */}
        <Footer />
      </main>
    </>
  );
}
