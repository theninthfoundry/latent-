/** @type {import('next').NextConfig} */
import fs from 'fs';
import path from 'path';

try {
  const srcDir = 'C:\\Users\\namir\\.gemini\\antigravity-ide\\brain\\03c1a863-6222-4951-9062-fd13d2cc6633\\.user_uploaded';
  const destDir = path.resolve('public/artifacts/atelier');
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  const mapping = {
    'media_1790086245117.jpg': 'carpet-border.jpg',
    'media_1790086267512.png': 'botanical-flower.png',
    'media_1790086275081.jpg': 'celestial-sun.jpg',
    'media_1790086287759.png': 'pixel-jaali.png',
    'media_1790086374082.png': 'risograph-hand.png'
  };
  for (const [srcFile, destFile] of Object.entries(mapping)) {
    const srcPath = path.join(srcDir, srcFile);
    const destPath = path.join(destDir, destFile);
    if (fs.existsSync(srcPath) && !fs.existsSync(destPath)) {
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

