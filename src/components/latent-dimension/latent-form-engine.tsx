"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { useReducedMotion } from "framer-motion";

export type LatentDimensionStage =
  | "absence"       // Shot 01: Faint structural coordinates emerge
  | "connection"    // Shot 02: Fine architectural wires extend
  | "formation"     // Shot 03: Graphite & glass shells slide into position
  | "assembled"     // Shot 04: Fully formed physical sculpture, settles
  | "hero_hold"     // Shot 05: Hero idle breathing, pointer responsive
  | "build"         // Shot 06: Controlled exploded architecture view
  | "repair"        // Shot 07: Localized fault decoupled, diagnosed & restored
  | "evolve"        // Shot 08: Expanded orbital layers & higher capabilities
  | "dimensional";  // Shot 09: Flattening towards 2D editorial plane

export interface LatentFormProps {
  stage?: LatentDimensionStage;
  progress?: number; // 0 to 1 progress within stage, or master scrubber 0 to 8
  interactive?: boolean;
  className?: string;
  width?: number;
  height?: number;
  showTelemetry?: boolean;
}

// 3D Vector & Matrix Math helpers
interface Vec3 {
  x: number;
  y: number;
  z: number;
}

interface ProjectedPoint {
  x: number;
  y: number;
  z: number;
  scale: number;
}

interface Face3D {
  indices: number[];
  material: "graphite" | "smoked_glass" | "warm_ceramic" | "brass_accent";
  normal?: Vec3;
  depth?: number;
}

interface WireEdge {
  p1: number;
  p2: number;
  type: "primary" | "datum" | "connector";
  weight: number;
}

// Model Definition: LATENT_FORM_01 Architecture
// A hybrid sculpture consisting of:
// - Monolithic Graphite Core (beveled octahedron)
// - Smoked Glass Outer Shells (asymmetric curved planes)
// - Architectural Datum Grid & Fine Structural Wires
// - Warm Ceramic Horizon Anchor
const BASE_VERTICES: Vec3[] = [
  // 0-5: CORE (Monolithic Graphite Octahedron)
  { x: 0, y: -1.4, z: 0 },      // 0: Bottom apex
  { x: 1.1, y: 0, z: 0.8 },     // 1: Mid front-right
  { x: -1.1, y: 0, z: 0.8 },    // 2: Mid front-left
  { x: -0.9, y: 0, z: -1.0 },   // 3: Mid back-left
  { x: 0.9, y: 0, z: -1.0 },    // 4: Mid back-right
  { x: 0, y: 1.5, z: 0 },       // 5: Top apex

  // 6-9: SHELL_A (Smoked Glass Floating Shield - Front/Right)
  { x: 0.4, y: 1.8, z: 1.2 },   // 6
  { x: 1.8, y: 0.6, z: 1.4 },   // 7
  { x: 1.6, y: -1.1, z: 1.1 },  // 8
  { x: 0.3, y: -0.8, z: 1.0 },  // 9

  // 10-13: SHELL_B (Brushed Graphite Outer Wing - Left/Back)
  { x: -0.5, y: 1.6, z: -0.6 }, // 10
  { x: -1.7, y: 0.8, z: -0.4 }, // 11
  { x: -1.9, y: -0.9, z: -0.8 },// 12
  { x: -0.7, y: -1.3, z: -0.9 },// 13

  // 14-17: CERAMIC_DATUM_RING (Warm Ivory Architectural Anchor)
  { x: 0.0, y: -0.2, z: 1.6 },  // 14
  { x: 1.6, y: -0.2, z: 0.0 },  // 15
  { x: 0.0, y: -0.2, z: -1.6 }, // 16
  { x: -1.6, y: -0.2, z: 0.0 }, // 17

  // 18-21: EVOLVE_EXPANSION_NODES (Higher Capability Orbitals)
  { x: 0.0, y: 2.3, z: 0.3 },   // 18
  { x: 2.2, y: 0.2, z: -0.4 },  // 19
  { x: -0.3, y: -2.1, z: 0.6 }, // 20
  { x: -2.2, y: 0.1, z: 0.8 },  // 21
];

// Solid Polygons for Shading
const MODEL_FACES: Face3D[] = [
  // Core Top Pyramid (Graphite)
  { indices: [5, 1, 2], material: "graphite" },
  { indices: [5, 2, 3], material: "graphite" },
  { indices: [5, 3, 4], material: "graphite" },
  { indices: [5, 4, 1], material: "graphite" },

  // Core Bottom Pyramid (Graphite)
  { indices: [0, 2, 1], material: "graphite" },
  { indices: [0, 3, 2], material: "graphite" },
  { indices: [0, 4, 3], material: "graphite" },
  { indices: [0, 1, 4], material: "graphite" },

  // Shell A (Smoked Glass Translucent Plane)
  { indices: [6, 7, 8, 9], material: "smoked_glass" },

  // Shell B (Brushed Graphite Wing)
  { indices: [10, 11, 12, 13], material: "graphite" },

  // Ceramic Ring Segment (Warm Ivory)
  { indices: [14, 15, 16, 17], material: "warm_ceramic" },
];

// Structural Wire Connections
const MODEL_EDGES: WireEdge[] = [
  // Core Skeleton
  { p1: 0, p2: 1, type: "primary", weight: 1.2 },
  { p1: 0, p2: 2, type: "primary", weight: 1.2 },
  { p1: 0, p2: 3, type: "primary", weight: 1.2 },
  { p1: 0, p2: 4, type: "primary", weight: 1.2 },
  { p1: 5, p2: 1, type: "primary", weight: 1.2 },
  { p1: 5, p2: 2, type: "primary", weight: 1.2 },
  { p1: 5, p2: 3, type: "primary", weight: 1.2 },
  { p1: 5, p2: 4, type: "primary", weight: 1.2 },
  { p1: 1, p2: 2, type: "primary", weight: 1.2 },
  { p1: 2, p2: 3, type: "primary", weight: 1.2 },
  { p1: 3, p2: 4, type: "primary", weight: 1.2 },
  { p1: 4, p2: 1, type: "primary", weight: 1.2 },

  // Structural Connectors from Core to Shell A
  { p1: 1, p2: 7, type: "connector", weight: 0.8 },
  { p1: 5, p2: 6, type: "connector", weight: 0.8 },
  { p1: 0, p2: 9, type: "connector", weight: 0.8 },

  // Shell A perimeter
  { p1: 6, p2: 7, type: "primary", weight: 1.0 },
  { p1: 7, p2: 8, type: "primary", weight: 1.0 },
  { p1: 8, p2: 9, type: "primary", weight: 1.0 },
  { p1: 9, p2: 6, type: "primary", weight: 1.0 },

  // Shell B perimeter
  { p1: 10, p2: 11, type: "primary", weight: 1.0 },
  { p1: 11, p2: 12, type: "primary", weight: 1.0 },
  { p1: 12, p2: 13, type: "primary", weight: 1.0 },
  { p1: 13, p2: 10, type: "primary", weight: 1.0 },

  // Connectors from Core to Shell B
  { p1: 3, p2: 11, type: "connector", weight: 0.8 },
  { p1: 5, p2: 10, type: "connector", weight: 0.8 },

  // Datum Ellipse Lines
  { p1: 14, p2: 15, type: "datum", weight: 0.6 },
  { p1: 15, p2: 16, type: "datum", weight: 0.6 },
  { p1: 16, p2: 17, type: "datum", weight: 0.6 },
  { p1: 17, p2: 14, type: "datum", weight: 0.6 },
];

export function LatentFormEngine({
  stage = "assembled",
  progress = 0,
  interactive = true,
  className = "",
  width = 680,
  height = 680,
  showTelemetry = true,
}: LatentFormProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Camera and Orientation State
  const [rotX, setRotX] = useState(-0.18);
  const [rotY, setRotY] = useState(0.55);
  const [zoom, setZoom] = useState(135);
  const [isHovered, setIsHovered] = useState(false);
  const [pointerOffset, setPointerOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  // Animation Time accumulator
  const timeRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);

  // Directional Light Vector (Key Light from upper-left-front)
  const keyLight: Vec3 = { x: -0.55, y: 0.75, z: 0.65 };
  const lightMag = Math.sqrt(keyLight.x ** 2 + keyLight.y ** 2 + keyLight.z ** 2);
  const lightDir = { x: keyLight.x / lightMag, y: keyLight.y / lightMag, z: keyLight.z / lightMag };

  // Determine stage-specific transform offsets & visibility
  const getStageTransform = useCallback(
    (stg: LatentDimensionStage, prog: number) => {
      // Base offsets for each vertex
      const offsets = BASE_VERTICES.map(() => ({ x: 0, y: 0, z: 0, visible: true, opacity: 1 }));
      let globalScale = 1;
      let wireOpacity = 1;
      let faceOpacity = 1;
      let faultActive = false;
      let evolveActive = false;

      switch (stg) {
        case "absence":
          // Shot 01: Faint structural coordinates emerge
          offsets.forEach((o, i) => {
            o.visible = i < 6;
            o.opacity = i < 3 ? 0.3 + prog * 0.4 : (prog > 0.4 ? 0.2 : 0);
          });
          wireOpacity = 0.15 * prog;
          faceOpacity = 0;
          globalScale = 0.85;
          break;

        case "connection":
          // Shot 02: Fine wires trace connections
          offsets.forEach((o, i) => {
            o.visible = i < 14;
            o.opacity = i < 6 ? 0.8 : 0.4 * prog;
          });
          wireOpacity = 0.2 + prog * 0.6;
          faceOpacity = prog * 0.2;
          globalScale = 0.9 + prog * 0.05;
          break;

        case "formation":
          // Shot 03: Shells slide into position along radial axes
          const slideBack = (1 - prog) * 1.8;
          // Shell A slides in from top-right
          offsets[6].x += slideBack; offsets[6].y += slideBack * 0.8;
          offsets[7].x += slideBack * 1.2; offsets[7].z += slideBack;
          offsets[8].x += slideBack; offsets[8].y -= slideBack * 0.5;
          offsets[9].x += slideBack * 0.8;
          // Shell B slides in from back-left
          offsets[10].x -= slideBack * 1.1; offsets[10].z -= slideBack;
          offsets[11].x -= slideBack * 1.3;
          offsets[12].x -= slideBack * 0.9; offsets[12].y -= slideBack * 0.6;
          offsets[13].x -= slideBack * 0.7;

          wireOpacity = 0.75;
          faceOpacity = 0.2 + prog * 0.7;
          globalScale = 0.95 + prog * 0.05;
          break;

        case "assembled":
        case "hero_hold":
          // Shot 04 & 05: Pristine physical sculpture settled
          wireOpacity = 0.85;
          faceOpacity = 0.95;
          globalScale = 1.0;
          break;

        case "build":
          // Exploded architectural assembly view
          const explode = 0.45 + prog * 0.55;
          // Core expands slightly
          offsets[5].y += explode * 0.6;
          offsets[0].y -= explode * 0.6;
          // Shell A translates outward
          [6, 7, 8, 9].forEach((idx) => {
            offsets[idx].x += explode * 1.1;
            offsets[idx].z += explode * 0.9;
          });
          // Shell B translates opposite
          [10, 11, 12, 13].forEach((idx) => {
            offsets[idx].x -= explode * 1.2;
            offsets[idx].z -= explode * 0.8;
          });
          wireOpacity = 0.9;
          faceOpacity = 0.85;
          globalScale = 1.02;
          break;

        case "repair":
          // Controlled fault in Shell A connector pin
          faultActive = true;
          const faultDrift = Math.sin(prog * Math.PI) * 0.7;
          // Shell A point 7 decouples and drifts
          offsets[7].x += faultDrift * 1.4;
          offsets[7].y -= faultDrift * 0.8;
          offsets[8].z += faultDrift * 0.9;
          wireOpacity = 0.8;
          faceOpacity = 0.9;
          globalScale = 1.0;
          break;

        case "evolve":
          // New expansion orbital planes deploy
          evolveActive = true;
          const deploy = prog;
          [18, 19, 20, 21].forEach((idx) => {
            offsets[idx].visible = true;
            offsets[idx].opacity = deploy;
          });
          wireOpacity = 0.9;
          faceOpacity = 0.95;
          globalScale = 1.0 + deploy * 0.08;
          break;

        case "dimensional":
          // Compressing toward 2D editorial elevation plane
          const flatten = prog;
          offsets.forEach((o) => {
            o.z = -o.z * (1 - flatten * 0.85); // Z-axis flattens
          });
          globalScale = 1.0 + flatten * 0.12;
          wireOpacity = 0.95;
          faceOpacity = 0.85;
          break;
      }

      return { offsets, globalScale, wireOpacity, faceOpacity, faultActive, evolveActive };
    },
    []
  );

  // Render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let isMounted = true;

    const render = () => {
      if (!isMounted) return;

      timeRef.current += 0.016;
      const t = timeRef.current;

      // Handle Device Pixel Ratio for razor-sharp rendering on Retina screens
      const dpr = window.devicePixelRatio || 1;
      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Idle breathing physics
      const idleBreathing = shouldReduceMotion ? 0 : Math.sin(t * 0.8) * 0.02;
      const idleY = shouldReduceMotion ? 0 : Math.cos(t * 0.6) * 0.015;

      // Camera Angles: user rotation + pointer parallax + idle
      const currentRotX = rotX + pointerOffset.y * 0.18 + idleY;
      const currentRotY = rotY + pointerOffset.x * 0.22 + idleBreathing;

      const cosX = Math.cos(currentRotX);
      const sinX = Math.sin(currentRotX);
      const cosY = Math.cos(currentRotY);
      const sinY = Math.sin(currentRotY);

      const { offsets, globalScale, wireOpacity, faceOpacity, faultActive, evolveActive } =
        getStageTransform(stage, progress);

      const effectiveZoom = zoom * globalScale;

      // 1. Transform & Project All Vertices
      const projected: ProjectedPoint[] = BASE_VERTICES.map((v, i) => {
        const offset = offsets[i] || { x: 0, y: 0, z: 0 };
        const vx = v.x + offset.x;
        const vy = v.y + offset.y;
        const vz = v.z + offset.z;

        // Rotation around Y axis
        const x1 = vx * cosY + vz * sinY;
        const y1 = vy;
        const z1 = -vx * sinY + vz * cosY;

        // Rotation around X axis
        const x2 = x1;
        const y2 = y1 * cosX - z1 * sinX;
        const z2 = y1 * sinX + z1 * cosX;

        // Camera perspective projection
        const fov = 4.2;
        const distance = fov + z2;
        const scale = fov / Math.max(distance, 0.5);

        return {
          x: cx + x2 * effectiveZoom * scale,
          y: cy - y2 * effectiveZoom * scale,
          z: z2,
          scale,
        };
      });

      // 2. Draw Subtle Spatial Datum Grid Floor (Laboratory Coordinates)
      ctx.strokeStyle = "rgba(23, 21, 15, 0.05)";
      ctx.lineWidth = 0.5;
      const gridRadius = 2.4;
      const floorY = -1.8;
      for (let r = 0.8; r <= gridRadius; r += 0.8) {
        ctx.beginPath();
        for (let a = 0; a <= Math.PI * 2; a += Math.PI / 16) {
          const gx = Math.cos(a) * r;
          const gz = Math.sin(a) * r;
          const x1 = gx * cosY + gz * sinY;
          const z1 = -gx * sinY + gz * cosY;
          const x2 = x1;
          const y2 = floorY * cosX - z1 * sinX;
          const z2 = floorY * sinX + z1 * cosX;
          const s = 4.2 / Math.max(4.2 + z2, 0.5);
          const px = cx + x2 * effectiveZoom * s;
          const py = cy - y2 * effectiveZoom * s;
          if (a === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }

      // 3. Sort Faces by Depth for Proper Painter's Rendering
      const sortedFaces = MODEL_FACES.map((face) => {
        let totalZ = 0;
        face.indices.forEach((idx) => {
          totalZ += projected[idx].z;
        });
        const depth = totalZ / face.indices.length;

        // Calculate Surface Normal
        const p0 = projected[face.indices[0]];
        const p1 = projected[face.indices[1]];
        const p2 = projected[face.indices[2]];
        const ux = p1.x - p0.x;
        const uy = p1.y - p0.y;
        const vx = p2.x - p0.x;
        const vy = p2.y - p0.y;
        const crossZ = ux * vy - uy * vx;

        return {
          ...face,
          depth,
          isFrontFacing: crossZ > 0,
        };
      }).sort((a, b) => a.depth - b.depth);

      // 4. Render Shaded Solid Surfaces
      if (faceOpacity > 0.02) {
        sortedFaces.forEach((face) => {
          const pts = face.indices.map((idx) => projected[idx]);

          ctx.beginPath();
          ctx.moveTo(pts[0].x, pts[0].y);
          for (let i = 1; i < pts.length; i++) {
            ctx.lineTo(pts[i].x, pts[i].y);
          }
          ctx.closePath();

          // Compute material shading based on angle to Key Light
          const midZ = (pts[0].z + pts[1].z) / 2;
          const lightFactor = Math.max(0.2, Math.min(1.0, 0.5 + midZ * 0.35));

          if (face.material === "graphite") {
            // Dark graphite metal with tonal brushed reflection
            const baseLuma = Math.round(24 + lightFactor * 32);
            ctx.fillStyle = `rgba(${baseLuma}, ${baseLuma + 2}, ${baseLuma + 6}, ${0.88 * faceOpacity})`;
            ctx.fill();

            // Beveled Edge Sheen
            ctx.strokeStyle = `rgba(212, 208, 197, ${0.25 * faceOpacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          } else if (face.material === "smoked_glass") {
            // Translucent smoked glass with depth refraction tint
            ctx.fillStyle = `rgba(20, 40, 62, ${0.42 * faceOpacity})`;
            ctx.fill();

            // Specular Glint along top glass edge
            ctx.strokeStyle = `rgba(180, 205, 230, ${0.65 * faceOpacity})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          } else if (face.material === "warm_ceramic") {
            // Warm ivory connecting to paper palette
            ctx.fillStyle = `rgba(242, 238, 229, ${0.8 * faceOpacity})`;
            ctx.fill();
            ctx.strokeStyle = `rgba(106, 83, 40, ${0.35 * faceOpacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        });
      }

      // 5. Render Structural Wireframe Connections
      if (wireOpacity > 0.02) {
        MODEL_EDGES.forEach((edge) => {
          const p1 = projected[edge.p1];
          const p2 = projected[edge.p2];

          // Check if this connection is currently faulted (in REPAIR stage)
          const isFaultedEdge = faultActive && (edge.p1 === 7 || edge.p2 === 7);

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);

          if (isFaultedEdge) {
            // Faulted connection: pulsing accent clay & dashed disconnect
            ctx.strokeStyle = `rgba(180, 60, 36, ${0.85 + Math.sin(t * 8) * 0.15})`;
            ctx.lineWidth = 1.8;
            ctx.setLineDash([4, 4]);
          } else if (edge.type === "primary") {
            ctx.strokeStyle = `rgba(23, 21, 15, ${0.75 * wireOpacity})`;
            ctx.lineWidth = edge.weight;
            ctx.setLineDash([]);
          } else if (edge.type === "connector") {
            ctx.strokeStyle = `rgba(106, 83, 40, ${0.65 * wireOpacity})`;
            ctx.lineWidth = edge.weight;
            ctx.setLineDash([2, 3]);
          } else {
            ctx.strokeStyle = `rgba(20, 40, 62, ${0.45 * wireOpacity})`;
            ctx.lineWidth = edge.weight;
            ctx.setLineDash([1, 2]);
          }

          ctx.stroke();
          ctx.setLineDash([]);
        });
      }

      // 6. Render Coordinate Nodes & Vertex Points
      projected.forEach((p, idx) => {
        const o = offsets[idx];
        if (!o || !o.visible || o.opacity <= 0.02) return;

        const isCoreVertex = idx < 6;
        const isFaultedNode = faultActive && idx === 7;
        const isEvolveNode = evolveActive && idx >= 18;

        const nodeRadius = isFaultedNode ? 3.5 : isCoreVertex ? 2.5 : 1.8;

        ctx.beginPath();
        ctx.arc(p.x, p.y, nodeRadius * p.scale, 0, Math.PI * 2);

        if (isFaultedNode) {
          ctx.fillStyle = "#A83C24"; // Alert Accent Clay
        } else if (isEvolveNode) {
          ctx.fillStyle = "#14283E"; // Atelier Indigo
        } else if (isCoreVertex) {
          ctx.fillStyle = "#17150F"; // Ink Graphite
        } else {
          ctx.fillStyle = "#6A5328"; // Atelier Brass
        }

        ctx.fill();

        // Node halo ring on key points
        if (isCoreVertex || isFaultedNode || isEvolveNode) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, (nodeRadius + 2.5) * p.scale, 0, Math.PI * 2);
          ctx.strokeStyle = isFaultedNode
            ? "rgba(168, 60, 36, 0.4)"
            : "rgba(23, 21, 15, 0.2)";
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      });

      // 7. Telemetry & Architectural Marginalia Overlay
      if (showTelemetry) {
        ctx.font = "9px 'IBM Plex Mono', monospace";
        ctx.fillStyle = "rgba(23, 21, 15, 0.45)";

        // Top-Left Coordinates
        ctx.fillText(`§ LATENT_FORM_01 // STAGE: ${stage.toUpperCase()}`, 24, 32);
        ctx.fillText(`ROT_X: ${currentRotX.toFixed(2)}  ROT_Y: ${currentRotY.toFixed(2)}  FOV: 4.2`, 24, 46);

        // Top-Right Status Badge
        const statusText = faultActive
          ? "FAULT DETECTED // STABILIZING"
          : evolveActive
          ? "ORBITAL EXPANSION ACTIVE"
          : "EQUILIBRIUM VERIFIED";
        const textWidth = ctx.measureText(statusText).width;
        ctx.fillStyle = faultActive ? "#803D24" : "#14283E";
        ctx.fillText(statusText, width - textWidth - 24, 32);

        // Bottom Coordinate Datum Line
        ctx.strokeStyle = "rgba(23, 21, 15, 0.08)";
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(24, height - 36);
        ctx.lineTo(width - 24, height - 36);
        ctx.stroke();

        ctx.fillStyle = "rgba(23, 21, 15, 0.4)";
        ctx.fillText("ARCHITECTURAL SUBSTRATE &bull; GRAPHITE / SMOKED GLASS / BRASS", 24, height - 20);
        ctx.fillText("N 17°23' &bull; E 78°29'", width - 130, height - 20);
      }

      ctx.restore();

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      isMounted = false;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [
    width,
    height,
    rotX,
    rotY,
    zoom,
    pointerOffset,
    stage,
    progress,
    shouldReduceMotion,
    getStageTransform,
    showTelemetry,
  ]);

  // Pointer Interaction Handlers
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!interactive) return;

    if (isDragging) {
      const dx = e.clientX - lastMousePos.current.x;
      const dy = e.clientY - lastMousePos.current.y;
      setRotY((prev) => prev + dx * 0.008);
      setRotX((prev) => Math.max(-0.8, Math.min(0.8, prev + dy * 0.008)));
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    } else {
      const rect = e.currentTarget.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      setPointerOffset({ x: nx, y: ny });
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!interactive) return;
    setIsDragging(true);
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={`relative select-none flex items-center justify-center ${className}`}
      style={{ width, height }}
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={() => {
        setIsDragging(false);
        setPointerOffset({ x: 0, y: 0 });
        setIsHovered(false);
      }}
      onPointerEnter={() => setIsHovered(true)}
    >
      <canvas
        ref={canvasRef}
        style={{ width, height }}
        className="w-full h-full block cursor-grab active:cursor-grabbing"
      />
    </div>
  );
}

export default LatentFormEngine;
