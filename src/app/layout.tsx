import type { Metadata } from "next";
import {
  Fraunces,
  IBM_Plex_Sans,
  IBM_Plex_Mono,
  Caveat,
} from "next/font/google";
import { SmoothScrollProvider } from "@/components/motion/smooth-scroll";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { GrainOverlay } from "@/components/motion/grain-overlay";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://latent.labs";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LATENT — A Laboratory for What Comes Next",
    template: "%s | LATENT",
  },
  description:
    "LATENT is an autonomous design, research, and technology laboratory creating products, brands, AI systems, and tactile digital experiences for ambitious ideas.",
  keywords: [
    "digital laboratory",
    "design and technology",
    "autonomous AI systems",
    "product engineering",
    "brand worlds",
    "interaction design",
    "creative technology",
    "r&d lab",
  ],
  authors: [{ name: "LATENT Labs" }],
  creator: "LATENT",
  publisher: "LATENT",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "LATENT — A Laboratory for What Comes Next",
    description: "We make new things feel inevitable.",
    url: siteUrl,
    siteName: "LATENT Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LATENT — A Laboratory for What Comes Next",
    description: "We make new things feel inevitable.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LATENT Labs",
  url: siteUrl,
  description: "Autonomous creative engineering, AI architecture, and tactile digital systems.",
  foundingDate: "2026",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Zurich / Tokyo / SF",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} ${caveat.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-paper text-ink font-sans antialiased selection:bg-ink selection:text-paper">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100000] focus:px-4 focus:py-2 focus:bg-ink focus:text-paper focus:text-xs focus:font-mono focus:rounded focus:outline-none focus:ring-2 focus:ring-accent-gold"
        >
          Skip to main content
        </a>
        <ScrollProgress />
        <GrainOverlay />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
