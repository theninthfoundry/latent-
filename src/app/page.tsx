"use client";

import React, { useState, useEffect } from "react";
import { Skiper8 } from "@/components/skiper-ui/skiper8";
import { Navbar } from "@/components/latent/navbar";
import { Hero } from "@/components/latent/hero";
import { Thesis } from "@/components/latent/thesis";
import { Method } from "@/components/latent/method";
import { Work } from "@/components/latent/work";
import { TheTable } from "@/components/latent/table";
import { HumanMachine } from "@/components/latent/human-machine";
import { Lab } from "@/components/latent/lab";
import { FieldNotes } from "@/components/latent/field-notes";
import { Studio } from "@/components/latent/studio";
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
        <Navbar />


        {/* 01 — Hero: Reveals as the curved wave sweeps upwards */}
        <Hero isReady={isLoaded} />

        {/* 02 — Thesis: Bold Minimalism to Editorial */}
        <Thesis />

        {/* 03 — The Latent Method: Editorial Publication Spread */}
        <Method />

        {/* 04 — Work: Editorial to Mixed Media Studio Desk */}
        <Work />

        {/* 05 — The Table: Mixed Media to Naïve Studio Materials */}
        <TheTable />

        {/* 06 — Human × Machine: Bold Minimalism to Editorial Pairing Matrix */}
        <HumanMachine />

        {/* 07 — The Lab: Naïve + Mixed Media Research Room */}
        <Lab />

        {/* 08 — Field Notes: Naïve + Editorial Studio Observations */}
        <FieldNotes />

        {/* 09, 10, 11 — The Studio: Editorial Constellation & Difficult Questions */}
        <Studio />

        {/* 12 — Final CTA: Extreme Bold Minimalism */}
        <FinalCTA />

        {/* 13 — Architectural Footer & Colophon */}
        <Footer />
      </main>
    </>
  );
}
