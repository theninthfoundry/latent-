import { Metadata } from "next";
import { Skiper60 } from "@/components/skiper-ui/skiper60";
import { Navbar } from "@/components/latent/navbar";
import { Footer } from "@/components/latent/footer";

export const metadata: Metadata = {
  title: "Terms & Conditions — LATENT",
  description:
    "Terms and Conditions governing the use of the LATENT digital studio website, research materials, code, and intellectual property.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-ink selection:text-paper font-sans">
      <Navbar />
      <Skiper60 />
      <Footer />
    </div>
  );
}
