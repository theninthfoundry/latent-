/** @type {import('next').NextConfig} */
import fs from 'fs';
import path from 'path';

try {
  const atelierSrcDir = 'C:\\Users\\namir\\.gemini\\antigravity-ide\\brain\\03c1a863-6222-4951-9062-fd13d2cc6633\\.user_uploaded';
  const atelierDestDir = path.resolve('public/artifacts/atelier');
  if (!fs.existsSync(atelierDestDir)) {
    fs.mkdirSync(atelierDestDir, { recursive: true });
  }
  const atelierMapping = {
    'media_1790086245117.jpg': 'carpet-border.jpg',
    'media_1790086267512.png': 'botanical-flower.png',
    'media_1790086275081.jpg': 'celestial-sun.jpg',
    'media_1790086287759.png': 'pixel-jaali.png',
    'media_1790086374082.png': 'risograph-hand.png'
  };
  for (const [srcFile, destFile] of Object.entries(atelierMapping)) {
    const srcPath = path.join(atelierSrcDir, srcFile);
    const destPath = path.join(atelierDestDir, destFile);
    if (fs.existsSync(srcPath) && !fs.existsSync(destPath)) {
      fs.copyFileSync(srcPath, destPath);
    }
  }

  // Creative stickers & graphics sync
  const creativeSrcDir = 'C:\\Users\\namir\\.gemini\\antigravity-ide\\brain\\23e67b16-98c8-452e-974b-f4fb5b7cf986\\.user_uploaded';
  const creativeDestDir = path.resolve('public/artifacts/creative');
  if (!fs.existsSync(creativeDestDir)) {
    fs.mkdirSync(creativeDestDir, { recursive: true });
  }
  const creativeMapping = {
    'media_1792691998379.png': 'star-sketch.png',
    'media_1792692004310.png': 'exclamation-halftone.png',
    'media_1792692007401.png': 'not-ai-badge.png',
    'media_1792692010659.png': 'behind-the-scenes.png',
    'media_1792692021724.png': 'lightning-sparks.png',
    'media_1792692254501.png': 'f1-telemetry-car.png',
    'media_1792692258518.png': 'liquid-star-spine.png',
    'media_1792692261063.png': 'radial-starburst-halo.png',
    'media_1792692297304.jpg': 'gothic-corner-filigree.jpg'
  };
  for (const [srcFile, destFile] of Object.entries(creativeMapping)) {
    const srcPath = path.join(creativeSrcDir, srcFile);
    const destPath = path.join(creativeDestDir, destFile);
    if (fs.existsSync(srcPath) && (!fs.existsSync(destPath) || fs.statSync(destPath).size === 0)) {
      fs.copyFileSync(srcPath, destPath);
    }
  }
} catch (e) {
  // ignore
}

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval';
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com data:;
  img-src 'self' data: blob: https://images.unsplash.com https://s3-us-west-2.amazonaws.com https://assets.codepen.io https://skiper-ui.com;
  media-src 'self';
  connect-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com;
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
`.replace(/\s{2,}/g, ' ').trim();

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy,
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "s3-us-west-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "assets.codepen.io",
      },
      {
        protocol: "https",
        hostname: "skiper-ui.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

