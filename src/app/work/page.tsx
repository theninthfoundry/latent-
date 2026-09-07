import { Metadata } from "next";
import { Navbar } from "@/components/latent/navbar";
import { Work } from "@/components/latent/work";
import { FinalCTA } from "@/components/latent/cta";
import { Footer } from "@/components/latent/footer";

export const metadata: Metadata = {
  title: "Selected Work & Technical Archive — LATENT",
  description:
    "A curated technical archive of products, living spatial systems, episodic memory topologies, and secure local-first runtimes built by LATENT Labs.",
};

export default function WorkPage() {
  return (
    <main id="main-content" className="relative min-h-screen bg-paper text-ink selection:bg-ink selection:text-paper font-sans">
      <Navbar />
      <Work />
      <FinalCTA />
      <Footer />
    </main>
  );
}
