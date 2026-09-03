"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { appleMorph, exitEase } from "@/lib/motion/easings";

const WORDS = [
  {
    text: "Hello",
    script: "Welcome",
    font: "font-script",
    fontSize: "96",
    label: "Milano // Calligrafia",
  },
  {
    text: "Bonjour",
    script: "Bienvenue",
    font: "font-cormorant italic",
    fontSize: "92",
    label: "Paris // Haute Écriture",
  },
  {
    text: "Hola",
    script: "Bienvenido",
    font: "font-script",
    fontSize: "96",
    label: "Madrid // Caligrafía",
  },
  {
    text: "こんにちは",
    script: "ようこそ",
    font: "font-sans font-light tracking-wide",
    fontSize: "76",
    label: "Tokyo // 書道 Shodō",
  },
  {
    text: "你好",
    script: "欢迎",
    font: "font-sans font-light tracking-wide",
    fontSize: "84",
    label: "Shanghai // 書法 Shūfǎ",
  },
  {
    text: "안녕하세요",
    script: "환영합니다",
    font: "font-sans font-light tracking-wide",
    fontSize: "76",
    label: "Seoul // 서예 Seoye",
  },
  {
    text: "Ciao",
    script: "Benvenuto",
    font: "font-script",
    fontSize: "105",
    label: "Roma // Corsivo Italiano",
  },
  {
    text: "Hallo",
    script: "Willkommen",
    font: "font-cormorant italic",
    fontSize: "94",
    label: "Berlin // Typografie",
  },
  {
    text: "Namaste",
    script: "नमस्ते",
    font: "font-cormorant italic",
    fontSize: "92",
    label: "Sanskrit • Hindi // नमस्ते",
  },
  {
    text: "LATENT",
    script: "Studio",
    font: "font-bodoni italic",
    fontSize: "86",
    label: "Design & Technology Practice",
  },
];

interface Skiper8Props {
  onComplete?: () => void;
  className?: string;
  duration?: number;
}

export function Skiper8({ onComplete, className }: Skiper8Props) {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Deliberate cadence: 1150ms per greeting, slightly longer 1600ms on LATENT
    const isFinal = index === WORDS.length - 1;
    const wordDuration = isFinal ? 1600 : 1150;

    if (isFinal) {
      const timer = setTimeout(() => {
        setIsActive(false);
        onComplete?.();
      }, wordDuration + 400);
      return () => clearTimeout(timer);
    }

    const interval = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, wordDuration);

    return () => clearTimeout(interval);
  }, [index, onComplete]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 400} 0 ${dimension.height} L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curveVariants = {
    initial: {
      d: initialPath,
      transition: { duration: 0.95, ease: exitEase },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.95, ease: exitEase, delay: 0.2 },
    },
  };

  const slideUpVariants = {
    initial: { top: 0, opacity: 1 },
    exit: {
      top: "-100vh",
      opacity: 0.98,
      transition: { duration: 1.0, ease: exitEase, delay: 0.15 },
    },
  };

  if (!isActive) return null;

  const current = WORDS[index];

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          variants={slideUpVariants}
          initial="initial"
          exit="exit"
          className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white text-[#17150F] select-none ${
            className || ""
          }`}
        >
          {dimension.width > 0 && (
            <>
              {/* Apple Wake-Up Sequence Stage */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-4xl min-h-[320px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.98, filter: "blur(6px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.015, filter: "blur(5px)" }}
                    transition={{
                      duration: 0.38,
                      ease: appleMorph,
                    }}
                    className="relative flex flex-col items-center justify-center gap-3 w-full"
                  >
                    {/* Native Script / Companion Accent */}
                    {current.script &&
                      current.script !== "Welcome" &&
                      current.script !== "Bienvenue" &&
                      current.script !== "Bienvenido" &&
                      current.script !== "Benvenuto" &&
                      current.script !== "Willkommen" &&
                      current.script !== "Studio" && (
                        <motion.span
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 0.85, y: 0 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="font-serif text-2xl sm:text-3xl text-accent-gold font-light tracking-[0.25em] block"
                        >
                          {current.script}
                        </motion.span>
                      )}

                    {/* Apple Stroke-Draw SVG Vector Canvas */}
                    <div className="relative w-full max-w-[700px] h-[140px] sm:h-[180px] flex items-center justify-center overflow-visible">
                      <svg
                        viewBox="0 0 800 200"
                        className="w-full h-full overflow-visible"
                      >
                        {/* 01. Ghost guide hairline */}
                        <text
                          x="50%"
                          y="50%"
                          textAnchor="middle"
                          dominantBaseline="central"
                          className={`${current.font} fill-none stroke-[#17150F]/10`}
                          style={{
                            fontSize: `${current.fontSize}px`,
                            strokeWidth: "1px",
                            letterSpacing: "0.02em",
                          }}
                        >
                          {current.text}
                        </text>

                        {/* 02. Apple Animated Stroke Drawing (Controlled physical draw) */}
                        <motion.text
                          x="50%"
                          y="50%"
                          textAnchor="middle"
                          dominantBaseline="central"
                          className={`${current.font} fill-none stroke-[#17150F]`}
                          style={{
                            fontSize: `${current.fontSize}px`,
                            strokeWidth: "1.25px",
                            letterSpacing: "0.02em",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                          }}
                          initial={{
                            strokeDasharray: 1400,
                            strokeDashoffset: 1400,
                          }}
                          animate={{
                            strokeDashoffset: 0,
                          }}
                          transition={{
                            duration: 0.85,
                            ease: [0.45, 0, 0.15, 1],
                          }}
                        >
                          {current.text}
                        </motion.text>

                        {/* 03. Ink Settling Fill (Fades smoothly in as the stroke finishes) */}
                        <motion.text
                          x="50%"
                          y="50%"
                          textAnchor="middle"
                          dominantBaseline="central"
                          className={`${current.font} fill-[#17150F] stroke-none`}
                          style={{
                            fontSize: `${current.fontSize}px`,
                            letterSpacing: "0.02em",
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            delay: 0.52,
                            duration: 0.35,
                            ease: "easeIn",
                          }}
                        >
                          {current.text}
                        </motion.text>
                      </svg>

                      {/* Apple Stylus Nib Tracer */}
                      <motion.div
                        key={`stylus-${index}`}
                        initial={{ left: "18%", opacity: 0 }}
                        animate={{
                          left: ["18%", "82%"],
                          opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                          duration: 0.85,
                          ease: [0.45, 0, 0.15, 1],
                        }}
                        className="absolute bottom-6 h-1.5 w-1.5 rounded-full bg-accent-gold pointer-events-none shadow-[0_0_8px_rgba(197,168,128,0.8)]"
                      />
                    </div>

                    {/* Editorial Provenance Subtitle */}
                    <motion.span
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.55,
                        duration: 0.32,
                      }}
                      className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#78736A] font-light"
                    >
                      {current.label}
                    </motion.span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* White Curved SVG Bottom Wave Curtain */}
              <svg className="pointer-events-none absolute top-0 -z-10 h-[calc(100%+400px)] w-full fill-white shadow-2xl">
                <motion.path
                  variants={curveVariants}
                  initial="initial"
                  exit="exit"
                />
              </svg>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
