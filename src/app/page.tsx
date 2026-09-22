"use client";

import React, { useState, useEffect } from "react";
import { Skiper8 } from "@/components/skiper-ui/skiper8";
import { Navbar } from "@/components/latent/navbar";
import { Hero } from "@/components/latent/hero";
import { ThesisTeaser } from "@/components/latent/thesis-teaser";
import { TheTable } from "@/components/latent/table";
import { Capabilities } from "@/components/latent/capabilities";
import { DiagnosticEngine } from "@/components/latent/diagnostic-engine";
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
        {/* Navigation Masthead with Emergency Fix trigger */}
        <Navbar isReady={isLoaded} />

        {/* 01 — Hero: Heroic Identity "We make new things feel inevitable." */}
        <Hero isReady={isLoaded} />

        {/* 02 — Thesis Teaser */}
        <ThesisTeaser />

        {/* 03 — The Studio Table (Interactive Materials & Substrates) */}
        <TheTable />

        {/* 04 — The Capability Universe: What Latent Does to Digital Matter */}
        <Capabilities />

        {/* 05 — The Digital Diagnostic Engine (Telemetry Inspection & Report) */}
        <section className="px-6 sm:px-12 lg:px-20 max-w-[1600px] mx-auto pb-16">
          <DiagnosticEngine />
        </section>

        {/* 06 — Projects & Work (Curated Technical Archive) */}
        <Work />

        {/* 07 — Final Closing Commission CTA */}
        <FinalCTA />

        {/* 08 — Architectural Footer & Crafted Atelier Colophon */}
        <Footer />
      </main>
    </>
  );
}
