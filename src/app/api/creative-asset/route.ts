import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const ASSET_MAPPING: Record<string, { file: string; mime: string; ext: string }> = {
  "star-sketch": { file: "media_1792691998379.png", mime: "image/png", ext: "png" },
  "exclamation-halftone": { file: "media_1792692004310.png", mime: "image/png", ext: "png" },
  "not-ai-badge": { file: "media_1792692007401.png", mime: "image/png", ext: "png" },
  "behind-the-scenes": { file: "media_1792692010659.png", mime: "image/png", ext: "png" },
  "lightning-sparks": { file: "media_1792692021724.png", mime: "image/png", ext: "png" },
  "f1-telemetry-car": { file: "media_1792692254501.png", mime: "image/png", ext: "png" },
  "liquid-star-spine": { file: "media_1792692258518.png", mime: "image/png", ext: "png" },
  "radial-starburst-halo": { file: "media_1792692261063.png", mime: "image/png", ext: "png" },
  "gothic-corner-filigree": { file: "media_1792692297304.jpg", mime: "image/jpeg", ext: "jpg" },
};

const SRC_DIR = "C:\\Users\\namir\\.gemini\\antigravity-ide\\brain\\23e67b16-98c8-452e-974b-f4fb5b7cf986\\.user_uploaded";
const PUBLIC_CREATIVE_DIR = path.resolve("public/artifacts/creative");

// Self-healing: ensure public/artifacts/creative is populated
export function ensureCreativeAssetsPopulated() {
  try {
    if (!fs.existsSync(PUBLIC_CREATIVE_DIR)) {
      fs.mkdirSync(PUBLIC_CREATIVE_DIR, { recursive: true });
    }

    for (const [key, info] of Object.entries(ASSET_MAPPING)) {
      const srcPath = path.join(SRC_DIR, info.file);
      const destPath = path.join(PUBLIC_CREATIVE_DIR, `${key}.${info.ext}`);
      if (fs.existsSync(srcPath) && !fs.existsSync(destPath)) {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  } catch (err) {
    console.error("Creative asset sync error:", err);
  }
}

export async function GET(request: NextRequest) {
  ensureCreativeAssetsPopulated();

  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");

  if (!name || !ASSET_MAPPING[name]) {
    return new NextResponse("Asset not found", { status: 404 });
  }

  const { file, mime, ext } = ASSET_MAPPING[name];
  const publicPath = path.join(PUBLIC_CREATIVE_DIR, `${name}.${ext}`);
  const srcPath = path.join(SRC_DIR, file);

  const targetPath = fs.existsSync(publicPath) ? publicPath : fs.existsSync(srcPath) ? srcPath : null;

  if (!targetPath) {
    return new NextResponse("Asset file missing", { status: 404 });
  }

  const fileBuffer = fs.readFileSync(targetPath);
  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": mime,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
