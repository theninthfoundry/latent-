import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const ASSET_MAPPING: Record<string, { file: string; mime: string }> = {
  "botanical-flower": { file: "media_1790086267512.png", mime: "image/png" },
  "celestial-sun": { file: "media_1790086275081.jpg", mime: "image/jpeg" },
  "carpet-border": { file: "media_1790086245117.jpg", mime: "image/jpeg" },
  "pixel-jaali": { file: "media_1790086287759.png", mime: "image/png" },
  "risograph-hand": { file: "media_1790086374082.png", mime: "image/png" },
};

const SRC_DIR = "C:\\Users\\namir\\.gemini\\antigravity-ide\\brain\\03c1a863-6222-4951-9062-fd13d2cc6633\\.user_uploaded";
const PUBLIC_ATELIER_DIR = path.resolve("public/artifacts/atelier");

// Self-healing: ensure public/artifacts/atelier is populated
function ensureAssetsPopulated() {
  try {
    if (!fs.existsSync(PUBLIC_ATELIER_DIR)) {
      fs.mkdirSync(PUBLIC_ATELIER_DIR, { recursive: true });
    }

    const staticMapping: Record<string, string> = {
      "media_1790086267512.png": "botanical-flower.png",
      "media_1790086275081.jpg": "celestial-sun.jpg",
      "media_1790086245117.jpg": "carpet-border.jpg",
      "media_1790086287759.png": "pixel-jaali.png",
      "media_1790086374082.png": "risograph-hand.png",
    };

    for (const [srcFile, destFile] of Object.entries(staticMapping)) {
      const srcPath = path.join(SRC_DIR, srcFile);
      const destPath = path.join(PUBLIC_ATELIER_DIR, destFile);
      if (fs.existsSync(srcPath) && !fs.existsSync(destPath)) {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  } catch (err) {
    console.error("Asset sync error:", err);
  }
}

export async function GET(request: NextRequest) {
  ensureAssetsPopulated();

  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");

  if (!name || !ASSET_MAPPING[name]) {
    return new NextResponse("Asset not found", { status: 404 });
  }

  const { file, mime } = ASSET_MAPPING[name];
  const publicPath = path.join(PUBLIC_ATELIER_DIR, file.endsWith(".png") ? `${name}.png` : `${name}.jpg`);
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
