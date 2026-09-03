"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface ImageCursorTrailProps {
  items?: string[];
  maxNumberOfImages?: number;
  distance?: number;
  imgClass?: string;
  className?: string;
  children?: React.ReactNode;
}

interface TrailItem {
  id: number;
  x: number;
  y: number;
  rotation: number;
  src: string;
}

const DEFAULT_ARTIFACTS = [
  "/otaru-archive.png",
  "/solomon-archive.png",
  "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=300&auto=format&fit=crop",
];

export function ImageCursorTrail({
  items = DEFAULT_ARTIFACTS,
  maxNumberOfImages = 6,
  distance = 35,
  // 3 to 4 times standard cursor size (~48px to 56px), minimal & subtle
  imgClass = "w-12 h-12 sm:w-14 sm:h-14 rounded-xl border border-paper-border/80 shadow-md bg-paper overflow-hidden",
  className = "",
  children,
}: ImageCursorTrailProps) {
  const [trail, setTrail] = useState<TrailItem[]>([]);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);
  const nextIndexRef = useRef(0);
  const idCounterRef = useRef(0);

  useEffect(() => {
    // Only track on fine pointer (desktops / mice), skip coarse touch devices
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const handlePointerMove = (e: PointerEvent) => {
      const currentX = e.clientX;
      const currentY = e.clientY;

      if (lastPosRef.current) {
        const dist = Math.hypot(
          currentX - lastPosRef.current.x,
          currentY - lastPosRef.current.y
        );
        if (dist < distance) return;
      }

      lastPosRef.current = { x: currentX, y: currentY };

      const newId = ++idCounterRef.current;
      const imageSrc = items[nextIndexRef.current % items.length];
      nextIndexRef.current += 1;
      const rotation = (Math.random() - 0.5) * 18; // -9deg to +9deg subtle slant

      setTrail((prev) => {
        const next = [
          ...prev,
          { id: newId, x: currentX, y: currentY, rotation, src: imageSrc },
        ];
        if (next.length > maxNumberOfImages) {
          return next.slice(next.length - maxNumberOfImages);
        }
        return next;
      });

      // Auto dismiss after 700ms
      setTimeout(() => {
        setTrail((prev) => prev.filter((item) => item.id !== newId));
      }, 700);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [distance, items, maxNumberOfImages]);

  return (
    <div className={`relative ${className}`}>
      {children}

      {/* Cursor Trail Elements Portal Layer */}
      <div className="fixed inset-0 pointer-events-none select-none z-[9999] overflow-hidden">
        <AnimatePresence>
          {trail.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.5, rotate: item.rotation - 4 }}
              animate={{ opacity: 1, scale: 1, rotate: item.rotation }}
              exit={{ opacity: 0, scale: 0.6, transition: { duration: 0.25 } }}
              transition={{ type: "spring", stiffness: 380, damping: 24 }}
              style={{
                position: "fixed",
                left: item.x,
                top: item.y,
                transform: "translate(-50%, -50%)",
              }}
              className={imgClass}
            >
              <img
                src={item.src}
                alt="Artifact trail specimen"
                className="w-full h-full object-cover rounded-[inherit] pointer-events-none select-none"
                loading="eager"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export { ImageCursorTrail as Skiper18 };
