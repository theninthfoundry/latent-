import type { Metadata } from "next";
import {
  Fraunces,
  IBM_Plex_Sans,
  IBM_Plex_Mono,
  Caveat,
  Bodoni_Moda,
  Italiana,
  Playfair_Display,
  Cormorant_Garamond,
  Pinyon_Script,
} from "next/font/google";
import { SmoothScrollProvider } from "@/components/motion/smooth-scroll";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-hand",
  display: "swap",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-italiana",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LATENT — A Studio for What Comes Next",
  description:
    "LATENT is a design and technology studio creating products, brands, AI systems and digital experiences for ambitious ideas.",
  keywords: [
    "digital studio",
    "design and technology",
    "AI systems",
    "product engineering",
    "brand worlds",
    "interaction design",
  ],
  openGraph: {
    title: "LATENT — A Studio for What Comes Next",
    description: "We make new things feel inevitable.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} ${caveat.variable} ${bodoni.variable} ${italiana.variable} ${playfair.variable} ${cormorant.variable} ${pinyonScript.variable}`}
    >
      <body className="bg-paper text-ink font-sans antialiased selection:bg-ink selection:text-paper">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
