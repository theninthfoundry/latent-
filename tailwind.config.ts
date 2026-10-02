import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F9F8F5",
          subtle: "#F2EFE9",
          card: "#FFFFFF",
          border: "rgba(23, 21, 15, 0.09)",
          darker: "#E7E3D9",
        },
        ink: {
          DEFAULT: "#17150F",
          light: "#2E2A23",
          muted: "#666159",
          faint: "#918C83",
        },
        accent: {
          DEFAULT: "#9A4C2E",
          clay: "#9A4C2E",
          gold: "#8C6F3E",
          inkblue: "#1B2B3A",
        },
        atelier: {
          indigo: "#14283E",
          ink: "#17150F",
          bone: "#F2EEE5",
          paper: "#FAF8F2",
          faded: "#3D5A6E",
          rose: "#9C5852",
          brass: "#856933",
          lime: "#5B7322",
        },
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(23, 21, 15, 0.03), 0 4px 12px rgba(23, 21, 15, 0.02)",
        card: "0 2px 6px rgba(23, 21, 15, 0.03), 0 16px 36px -6px rgba(23, 21, 15, 0.05)",
        float: "0 4px 12px rgba(23, 21, 15, 0.04), 0 24px 48px -8px rgba(23, 21, 15, 0.08)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Fraunces", "Georgia", "serif"],
        sans: ["var(--font-sans)", "IBM Plex Sans", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "IBM Plex Mono", "JetBrains Mono", "monospace"],
        hand: ["var(--font-hand)", "Caveat", "cursive"],
        bodoni: ["var(--font-bodoni)", "Bodoni Moda", "serif"],
        italiana: ["var(--font-italiana)", "Italiana", "serif"],
        playfair: ["var(--font-playfair)", "Playfair Display", "serif"],
        cormorant: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        script: ["var(--font-script)", "Pinyon Script", "cursive"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.025em",
        editorial: "-0.015em",
        wide: "0.04em",
        widest: "0.15em",
      },
    },
  },
  plugins: [],
};

export default config;
