"use client";

import React, { useEffect } from "react";
import { logger } from "@/lib/logger";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    logger.error("Unhandled client error in render tree", {
      name: error.name,
      message: error.message,
      digest: error.digest,
    });
  }, [error]);

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#17150F] flex flex-col justify-between px-6 sm:px-12 lg:px-20 py-12 selection:bg-[#17150F] selection:text-[#F7F6F2]">
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#736F64] border-b border-[#17150F]/10 pb-4">
        <span>LATENT &bull; STUDIO</span>
        <span>ERROR RECOVERY // UNEXPECTED FAULT</span>
      </div>

      <div className="max-w-3xl my-auto py-16">
        <span className="font-mono text-xs uppercase tracking-widest text-[#736F64] block mb-4">
          Runtime Interruption
        </span>
        <h1 className="font-serif text-5xl sm:text-6xl font-normal leading-[1.1] tracking-tight mb-8">
          The canvas encountered an unexpected disruption.
        </h1>
        <p className="font-sans text-lg text-[#736F64] max-w-xl mb-12 leading-relaxed">
          An isolated fault occurred in the presentation layer. You can reset the interface state without losing your browsing session.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#17150F] text-[#F7F6F2] text-xs font-mono uppercase tracking-widest rounded-full hover:bg-[#17150F]/85 transition-colors cursor-pointer"
        >
          <span>&circlearrowright; Reset Canvas State</span>
        </button>
      </div>

      <div className="font-mono text-[10px] uppercase tracking-widest text-[#736F64] border-t border-[#17150F]/10 pt-4 flex items-center justify-between">
        <span>LATENT Autonomous Digital Studio &copy; 2026</span>
        <span>Fault Digest: {error.digest || "Local"}</span>
      </div>
    </div>
  );
}
