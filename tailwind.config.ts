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
          DEFAULT: "#F7F6F2",
          subtle: "#EFECE6",
          card: "#FAF9F6",
          border: "#E2DFD7",
          darker: "#E5E1D8",
        },
        ink: {
          DEFAULT: "#17150F",
          light: "#2E2A23",
          muted: "#78736A",
          faint: "#A39E95",
        },
        accent: {
          gold: "#C5A880",
          clay: "#A25738",
          inkblue: "#2A3A4A",
        },
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
        tight: "-0.02em",
        editorial: "-0.015em",
        wide: "0.04em",
        widest: "0.15em",
      },
    },
  },
  plugins: [],
};

export default config;
