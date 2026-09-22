import { Metadata } from "next";
import { Navbar } from "@/components/latent/navbar";
import { Capabilities } from "@/components/latent/capabilities";
import { DiagnosticEngine } from "@/components/latent/diagnostic-engine";
import { FinalCTA } from "@/components/latent/cta";
import { Footer } from "@/components/latent/footer";

export const metadata: Metadata = {
  title: "Capabilities — What Latent Does to Digital Matter — LATENT Atelier",
  description:
    "We build, repair, evolve, rescue, operate, and transform digital matter. Explore Latent's 10 capabilities and run the autonomous Digital Diagnostic Engine.",
};

export default function CapabilitiesPage() {
  return (
    <main id="main-content" className="relative min-h-screen bg-paper text-ink selection:bg-ink selection:text-paper font-sans">
      <Navbar />

      <div className="pt-16 sm:pt-20">
        <Capabilities />
      </div>

      <section className="px-6 sm:px-12 lg:px-20 max-w-[1600px] mx-auto pb-24">
        <DiagnosticEngine />
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
