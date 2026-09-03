"use client";

import Autoplay from "embla-carousel-autoplay";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface CarouselImage {
  src: string;
  alt: string;
  title: string;
  category?: string;
}

const DEFAULT_PROJECT_IMAGES: CarouselImage[] = [
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    alt: "Minimalist brutalist architecture studio",
    title: "Vespera Pavilion",
    category: "Architecture & Spatial",
  },
  {
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    alt: "Fluid 3D kinetic digital artwork",
    title: "Aura Kinetic Identity",
    category: "3D & Brand Experience",
  },
  {
    src: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop",
    alt: "Holographic generative typography",
    title: "Prism Monograph",
    category: "Editorial & Typography",
  },
  {
    src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    alt: "Cybernetic luxury device hardware",
    title: "Nexus Neuro-System",
    category: "Industrial Design",
  },
  {
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    alt: "Haute couture monochrome fashion editorial",
    title: "Nocturne Maison",
    category: "Art Direction",
  },
  {
    src: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop",
    alt: "Abstract sculptural light installation",
    title: "Elysian Lumina",
    category: "Spatial Installation",
  },
];

interface Carousel006Props {
  images?: CarouselImage[];
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  showNavigation?: boolean;
  showPagination?: boolean;
}

export const Carousel_006 = ({
  images = DEFAULT_PROJECT_IMAGES,
  className,
  autoplay = false,
  loop = true,
  showNavigation = true,
  showPagination = true,
}: Carousel006Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className={cn("relative w-full py-6 select-none", className)}>
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          loop,
          slidesToScroll: 1,
        }}
        plugins={
          autoplay
            ? [
                Autoplay({
                  delay: 3500,
                  stopOnInteraction: true,
                  stopOnMouseEnter: true,
                }),
              ]
            : []
        }
      >
        <CarouselContent className="flex h-[540px] w-full items-center">
          {images.map((img, index) => {
            const isSelected = current === index;
            return (
              <CarouselItem
                key={index}
                className="relative flex h-[82%] w-full basis-[82%] items-center justify-center transition-all duration-500 sm:basis-[60%] md:basis-[42%] lg:basis-[34%] xl:basis-[28%]"
              >
                <motion.div
                  initial={false}
                  animate={{
                    clipPath: isSelected
                      ? "inset(0% 0 0% 0 round 1.75rem)"
                      : "inset(14% 0 14% 0 round 1.75rem)",
                    scale: isSelected ? 1 : 0.94,
                    opacity: isSelected ? 1 : 0.6,
                  }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className="group relative h-full w-full overflow-hidden shadow-2xl"
                >
                  <div className="relative h-full w-full overflow-hidden bg-neutral-900 border border-white/10">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Category pill on card */}
                    {img.category && (
                      <div className="absolute top-4 left-4 rounded-full bg-black/50 backdrop-blur-md px-3 py-1 text-xs font-medium text-neutral-300 border border-white/10">
                        {img.category}
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Animated project title display below active slide */}
                <AnimatePresence mode="wait">
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
                      transition={{ duration: 0.4 }}
                      className="absolute bottom-0 left-0 flex h-[16%] w-full translate-y-full flex-col items-center justify-center text-center"
                    >
                      <span className="text-sm font-semibold tracking-wide text-white">
                        {img.title}
                      </span>
                      {img.category && (
                        <span className="text-xs text-neutral-400">
                          {img.category}
                        </span>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* Navigation Arrows */}
        {showNavigation && (
          <div className="flex w-full items-center justify-between gap-4 px-6 pt-12">
            <div className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
              [ {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")} ]
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous project"
                onClick={() => api?.scrollPrev()}
                className="rounded-full bg-white/5 border border-white/10 p-3 text-white transition-all hover:bg-white hover:text-black hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next project"
                onClick={() => api?.scrollNext()}
                className="rounded-full bg-white/5 border border-white/10 p-3 text-white transition-all hover:bg-white hover:text-black hover:scale-105 active:scale-95"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {/* Pagination Dots */}
        {showPagination && (
          <div className="flex w-full items-center justify-center pt-6">
            <div className="flex items-center gap-2">
              {Array.from({ length: images.length }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => api?.scrollTo(idx)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    current === idx
                      ? "w-8 bg-white"
                      : "w-2 bg-neutral-700 hover:bg-neutral-500"
                  )}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </Carousel>
    </div>
  );
};

export const Skiper54 = Carousel_006;
