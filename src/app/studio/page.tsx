import { Metadata } from "next";
import { Navbar } from "@/components/latent/navbar";
import { Principles } from "@/components/latent/principles";
import { MethodStudio } from "@/components/latent/method-studio";
import { TheTable } from "@/components/latent/table";
import { HumanMachine } from "@/components/latent/human-machine";
import { Studio } from "@/components/latent/studio";
import { FinalCTA } from "@/components/latent/cta";
import { Footer } from "@/components/latent/footer";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "The Studio — Philosophy, Methodology & Practice — LATENT Labs",
  description:
    "How we build, who we are, and who we work with. Explore LATENT Labs' 7-stage methodology, materials table, human-machine synthesis, and principles.",
};

export default function StudioPage() {
  return (
    <main id="main-content" className="relative min-h-screen bg-paper text-ink selection:bg-ink selection:text-paper font-sans">
      <Navbar />

      {/* Studio Page Hero Masthead */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-6 sm:px-12 lg:px-20 max-w-[1600px] mx-auto">
        <Reveal>
          <div className="max-w-4xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted block">
              LATENT LABS // Practice &amp; Philosophy &bull; 2026
            </span>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-ink leading-[0.95] uppercase">
              The Studio.
            </h1>
            <p className="font-sans text-base sm:text-lg text-ink-light font-light max-w-2xl leading-relaxed pt-2">
              A practice of research, architectural systems, and tactile code. We do not hand off static mockups or pitch layered agency departments; we move ideas across seven states of matter until they exist.
            </p>
          </div>
        </Reveal>

        {/* Section 01: Principles (The 4 Axioms) */}
        <Principles />
      </section>

      {/* Section 02: The Method with ProcessStepper */}
      <MethodStudio />

      {/* Section 03: The Studio Table (Materials) */}
      <TheTable />

      {/* Section 04: Human × Machine (Synthesis) */}
      <HumanMachine />

      {/* Section 05, 06, 07: The Collective, Fit, and Engagement */}
      <Studio />

      {/* Closing CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
