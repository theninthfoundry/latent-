"use client";

import React, { useEffect } from "react";
import { logger } from "@/lib/logger";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    logger.error("Catastrophic root layout crash", {
      name: error.name,
      message: error.message,
      digest: error.digest,
    });
  }, [error]);

  return (
    <html lang="en">
      <body style={{ backgroundColor: "#F7F6F2", color: "#17150F", fontFamily: "system-ui, sans-serif", margin: 0, padding: "2rem" }}>
        <div style={{ maxWidth: "700px", margin: "4rem auto" }}>
          <p style={{ fontFamily: "monospace", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#736F64" }}>
            LATENT // System Level Fault
          </p>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 400, marginTop: "1rem", marginBottom: "1.5rem" }}>
            A critical application error occurred.
          </h1>
          <p style={{ color: "#736F64", lineHeight: 1.6, marginBottom: "2rem" }}>
            The root layout failed to initialize. Please reload the page or reset the runtime environment.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              backgroundColor: "#17150F",
              color: "#F7F6F2",
              padding: "0.8rem 1.6rem",
              borderRadius: "9999px",
              border: "none",
              cursor: "pointer",
              fontFamily: "monospace",
              fontSize: "12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Reload Application
          </button>
        </div>
      </body>
    </html>
  );
}
