import { Metadata } from "next";
import { Navbar } from "@/components/latent/navbar";
import { Lab } from "@/components/latent/lab";
import { FieldNotes } from "@/components/latent/field-notes";
import { FinalCTA } from "@/components/latent/cta";
import { Footer } from "@/components/latent/footer";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "The Lab & Field Notes — R&D Experiments — LATENT Labs",
  description:
    "Experimental R&D room and studio marginalia from LATENT Labs. Prototyping spatial websites, lifelong episodic AI memory, and interfaces without interfaces.",
};

export default function LabPage() {
  return (
    <main id="main-content" className="relative min-h-screen bg-paper text-ink selection:bg-ink selection:text-paper font-sans">
      <Navbar />

      {/* Lab Masthead */}
      <section className="pt-28 sm:pt-36 pb-6 px-6 sm:px-12 lg:px-20 max-w-[1600px] mx-auto">
        <Reveal>
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted block">
              LATENT LABS // Research &amp; Inquiry Division
            </span>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-ink leading-[0.95] uppercase">
              The Lab.
            </h1>
            <p className="font-sans text-base sm:text-lg text-ink-light font-light max-w-2xl leading-relaxed pt-2">
              Where speculative models, acoustic typography, and non-commercial software prototypes are interrogated. If everything we try works, we aren’t asking difficult enough questions.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Section 01: The 6 Experiments */}
      <Lab />

      {/* Section 02: Field Notes / Marginalia */}
      <FieldNotes />

      {/* Closing CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
