/**
 * Studio Image Background Cutout Engine
 * Converts white/off-white background pixels to transparent alpha channels in real-time.
 * Ensures graphics and sketches sit seamlessly on paper background with zero bounding boxes.
 */

const cutoutCache = new Map<string, string>();

export interface CutoutOptions {
  threshold?: number; // Luminance threshold (0-255). Pixels above this become transparent.
  feather?: number;   // Feathering range for soft anti-aliased edges.
  tintInk?: boolean;  // Tint ink pixels to studio ink tone #17150F.
}

export function getCutoutImage(
  src: string,
  options: CutoutOptions = {}
): Promise<string> {
  const { threshold = 220, feather = 45, tintInk = true } = options;
  const cacheKey = `${src}_${threshold}_${feather}_${tintInk}`;

  if (cutoutCache.has(cacheKey)) {
    return Promise.resolve(cutoutCache.get(cacheKey)!);
  }

  if (typeof window === "undefined") {
    return Promise.resolve(src);
  }

  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const width = img.naturalWidth || img.width;
        const height = img.naturalHeight || img.height;

        if (width === 0 || height === 0) {
          resolve(src);
          return;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });

        if (!ctx) {
          resolve(src);
          return;
        }

        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, width, height);
        const data = imgData.data;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3];

          if (a === 0) continue;

          // Standard perceptual luminance
          const lum = 0.299 * r + 0.587 * g + 0.114 * b;

          if (lum >= threshold) {
            // Background: 100% Transparent
            data[i + 3] = 0;
          } else if (lum > threshold - feather) {
            // Edge feathering: smooth anti-aliased gradient
            const factor = (threshold - lum) / feather;
            data[i + 3] = Math.round(a * factor);
          }

          // Optional ink tinting to studio palette #17150F
          if (tintInk && data[i + 3] > 0) {
            data[i] = 23;     // #17
            data[i + 1] = 21; // #15
            data[i + 2] = 15; // #0F
          }
        }

        ctx.putImageData(imgData, 0, 0);
        const dataUrl = canvas.toDataURL("image/png");
        cutoutCache.set(cacheKey, dataUrl);
        resolve(dataUrl);
      } catch (err) {
        // Fallback to original src if canvas read fails
        console.warn("Cutout processing error:", err);
        resolve(src);
      }
    };

    img.onerror = () => {
      resolve(src);
    };

    img.src = src;
  });
}
