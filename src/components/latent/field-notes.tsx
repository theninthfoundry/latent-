"use client";

import React from "react";
import { ParallaxLayer } from "@/components/motion/scroll-reveal";

interface Note {
  number: string;
  date: string;
  statement: string;
  elaboration: string;
}

const NOTES: Note[] = [
  {
    number: "N-42",
    date: "Aug 2026",
    statement: "We spent three days trying to remove a button.",
    elaboration:
      "The client wanted a confirmation dialog. We realized if the action is naturally undoable and the spatial layout is calm, the confirmation button only existed to cover for bad design.",
  },
  {
    number: "N-39",
    date: "July 2026",
    statement: "The prototype failed. That was the useful part.",
    elaboration:
      "When the physics simulation broke under heavy gesture velocity, it revealed where the human hand expects friction. You learn nothing from a mockup that works on a slide deck.",
  },
  {
    number: "N-31",
    date: "May 2026",
    statement: "We made the interface quieter and suddenly people understood it.",
    elaboration:
      "Most digital design screams for attention because the core product lacks conviction. When you strip the decorative gradients and badges away, only the true value remains.",
  },
  {
    number: "N-24",
    date: "April 2026",
    statement: "The best interaction happened when nothing happened.",
    elaboration:
      "Restraint is the rarest design currency. An interface that holds its breath while you think is infinitely more polite than one that immediately bombards you with suggestions.",
  },
];

export function FieldNotes() {
  return (
    <section className="relative py-32 px-6 sm:px-12 lg:px-20 max-w-[1500px] mx-auto border-t border-paper-border">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-paper-border pb-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-2 block">
            08 // Marginalia
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-ink">
            Field Notes.
          </h2>
        </div>
        <p className="font-sans text-sm text-ink-muted max-w-md font-light leading-relaxed">
          Not blog posts. Brief observations from the studio floor when nobody is
          watching.
        </p>
      </div>

      {/* Editorial Stream */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {NOTES.map((note) => (
          <div
            key={note.number}
            className="p-8 rounded-2xl bg-paper-card border border-paper-border flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-ink-muted pb-4 mb-4 border-b border-paper-border/60">
                <span>{note.number}</span>
                <span>{note.date}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-ink tracking-tight mb-3">
                &ldquo;{note.statement}&rdquo;
              </h3>
              <p className="font-sans text-xs sm:text-sm text-ink-light font-light leading-relaxed">
                {note.elaboration}
              </p>
            </div>
          </div>
        ))}

        {/* Major Studio Editorial Artifact: FIELD NOTE 004 & Indigo Rug Specimen */}
        <div className="p-8 sm:p-10 rounded-3xl bg-paper-card border border-paper-border md:col-span-2 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative overflow-hidden">
          {/* Subtle botanical rug background watermark with restrained parallax */}
          <ParallaxLayer offset={14} direction="up" className="absolute -right-16 -bottom-16 w-96 h-96 pointer-events-none select-none opacity-[0.06] mix-blend-multiply z-0">
            <img
              src="/artifacts/textile-rug.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </ParallaxLayer>

          <div className="lg:col-span-5 space-y-4 relative z-10">
            <div className="flex items-center justify-between font-mono text-xs text-ink-muted pb-4 border-b border-paper-border/60">
              <span>FIELD NOTE 004</span>
              <span>Material Reference // 07</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-4xl font-light text-ink tracking-tight leading-snug">
              &ldquo;We keep returning to objects that feel older than the technology around them.&rdquo;
            </h3>
            <p className="font-sans text-xs sm:text-sm text-ink-light font-light leading-relaxed">
              When software ignores physical history, it becomes disposable. We study ancient botanical dye matrices, worn indigo threads, and hand-knotted geometries to understand how digital systems can age with grace.
            </p>
            <div className="font-mono text-[10px] uppercase tracking-widest text-ink-muted pt-2 flex items-center gap-3">
              <span>Archive Taxonomy</span>
              <span>&bull;</span>
              <span>Woven Indigo &bull; Ref. 07</span>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-paper-border/80 shadow-sm relative group bg-[#F7F6F2]">
            <img
              src="/artifacts/textile-rug.png"
              alt="Indigo textile botanical pattern specimen"
              className="w-full h-60 sm:h-80 object-cover object-center mix-blend-multiply opacity-85 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4 font-mono text-[9px] uppercase tracking-widest bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white/90 border border-white/20">
              Studio Reference Specimen
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
