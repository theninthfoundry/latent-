"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  mass: number;
  alpha: number;
}

export function LusionCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = -1000;
    let mouseY = -1000;
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    const count = Math.min(64, Math.floor((width * height) / 22000));
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x,
        y,
        originX: x,
        originY: y,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.2 + 1.2,
        mass: Math.random() * 0.6 + 0.7,
        alpha: Math.random() * 0.35 + 0.15,
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handlePointerMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handlePointerLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      scrollVelocity = delta * 0.12;
      lastScrollY = currentScrollY;
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    const maxDist = 130;
    const mouseRadius = 140;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Decay scroll velocity smoothly
      scrollVelocity *= 0.92;
      if (Math.abs(scrollVelocity) < 0.01) scrollVelocity = 0;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Apply scroll impulse
        p.vy -= (scrollVelocity / p.mass) * 0.15;

        // Apply gentle brownian motion
        p.x += p.vx;
        p.y += p.vy;

        // Mouse interaction: Elastic deflection
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouseRadius && dist > 0) {
          const force = (1 - dist / mouseRadius) * 2.2;
          const angle = Math.atan2(dy, dx);
          p.vx -= Math.cos(angle) * force * 0.5;
          p.vy -= Math.sin(angle) * force * 0.5;
        }

        // Return to natural equilibrium
        const ox = p.originX - p.x;
        const oy = p.originY - p.y;
        p.vx += ox * 0.002;
        p.vy += oy * 0.002;

        // Friction damping
        p.vx *= 0.94;
        p.vy *= 0.94;

        // Wrap around boundaries
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Draw particle (warm tactile ink tone)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(23, 21, 15, ${p.alpha})`;
        ctx.fill();

        // Connect nearby nodes with delicate constellation lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.hypot(cdx, cdy);

          if (cdist < maxDist) {
            const lineAlpha = (1 - cdist / maxDist) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(23, 21, 15, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`fixed inset-0 pointer-events-none z-[2] mix-blend-multiply opacity-70 ${className}`}
    />
  );
}

export default LusionCanvas;
