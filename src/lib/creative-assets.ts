export interface CreativeSticker {
  id: string;
  name: string;
  filename: string;
  fallbackName: string;
  philosophy: string;
  category: "badge" | "mark" | "signal" | "stamp" | "energy";
  defaultRotation: number;
  aspectRatio: string;
  tags: string[];
}

export const CREATIVE_ASSETS: CreativeSticker[] = [
  {
    id: "not-ai-badge",
    name: "“THIS IS NOT AI”",
    filename: "not-ai-badge.png",
    fallbackName: "not-ai-badge",
    philosophy: "A declaration of human conviction, tactile imperfection, and un-automated intent.",
    category: "badge",
    defaultRotation: -4,
    aspectRatio: "3/4",
    tags: ["manifesto", "human-craft", "sticker", "zine"],
  },
  {
    id: "star-sketch",
    name: "Ink Brutalist Star",
    filename: "star-sketch.png",
    fallbackName: "star-sketch",
    philosophy: "The imperfect North Star. Hand-drawn brushstroke resisting sterile corporate geometry.",
    category: "mark",
    defaultRotation: 8,
    aspectRatio: "1/1",
    tags: ["celestial", "brushstroke", "raw", "brutalist"],
  },
  {
    id: "exclamation-halftone",
    name: "Halftone Exclamation !!",
    filename: "exclamation-halftone.png",
    fallbackName: "exclamation-halftone",
    philosophy: "Pop-art screenprint urgency. A call to awaken curiosity before logic intervenes.",
    category: "signal",
    defaultRotation: -6,
    aspectRatio: "4/5",
    tags: ["halftone", "screenprint", "signal", "comic"],
  },
  {
    id: "behind-the-scenes",
    name: "Behind the Scenes",
    filename: "behind-the-scenes.png",
    fallbackName: "behind-the-scenes",
    philosophy: "Transparent workshop grammar. Exposing the timber and wiring beneath the marble floor.",
    category: "stamp",
    defaultRotation: 2,
    aspectRatio: "1/1",
    tags: ["editorial", "typography", "stamp", "archival"],
  },
  {
    id: "lightning-sparks",
    name: "Kinetic Lightning Voltage",
    filename: "lightning-sparks.png",
    fallbackName: "lightning-sparks",
    philosophy: "The friction point where digital ether clashes with biological handwork.",
    category: "energy",
    defaultRotation: 5,
    aspectRatio: "1/1",
    tags: ["voltage", "energy", "zine", "kinetic"],
  },
  {
    id: "f1-telemetry-car",
    name: "Formula 1 #44 Telemetry Monoposto",
    filename: "f1-telemetry-car.png",
    fallbackName: "f1-telemetry-car",
    philosophy: "The pinnacle of mechanical symmetry and high-frequency aerodynamic compute. Zero latency in carbon fiber.",
    category: "signal",
    defaultRotation: 0,
    aspectRatio: "1/2",
    tags: ["engineering", "aerodynamics", "telemetry", "symmetry", "speed"],
  },
  {
    id: "liquid-star-spine",
    name: "Liquid Star Constellation Spine",
    filename: "liquid-star-spine.png",
    fallbackName: "liquid-star-spine",
    philosophy: "A chrome fluid filament linking three celestial nodes. An organic border spine bridging layout axes.",
    category: "mark",
    defaultRotation: 0,
    aspectRatio: "1/2",
    tags: ["chrome", "liquid", "stars", "border", "vertical-spine"],
  },
  {
    id: "radial-starburst-halo",
    name: "Celestial Radial Starburst Halo",
    filename: "radial-starburst-halo.png",
    fallbackName: "radial-starburst-halo",
    philosophy: "A 360-degree radial rosette of optical starbursts. Pure circular symmetry and orbital equilibrium.",
    category: "mark",
    defaultRotation: 0,
    aspectRatio: "1/1",
    tags: ["radial", "symmetry", "celestial", "rosette", "halo"],
  },
  {
    id: "gothic-corner-filigree",
    name: "Neo-Baroque Architectural Corner Filigree",
    filename: "gothic-corner-filigree.jpg",
    fallbackName: "gothic-corner-filigree",
    philosophy: "An intricate gothic crosshair bracket with organic thorny vines. An authentic architectural boundary container.",
    category: "badge",
    defaultRotation: 0,
    aspectRatio: "3/4",
    tags: ["architectural", "corner-border", "filigree", "gothic", "framing"],
  },
];

/**
 * Returns primary public URL with fallback API URL
 */
export function getCreativeAssetUrl(id: string): { primary: string; fallback: string } {
  const asset = CREATIVE_ASSETS.find((a) => a.id === id);
  if (!asset) {
    return {
      primary: `/artifacts/creative/${id}.png`,
      fallback: `/api/creative-asset?name=${id}`,
    };
  }
  return {
    primary: `/artifacts/creative/${asset.filename}`,
    fallback: `/api/creative-asset?name=${asset.fallbackName}`,
  };
}
