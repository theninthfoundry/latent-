import fs from 'fs';
import path from 'path';

const srcDir = 'C:\\Users\\namir\\.gemini\\antigravity-ide\\brain\\23e67b16-98c8-452e-974b-f4fb5b7cf986\\.user_uploaded';
const destDir = 'd:\\neam\\public\\artifacts\\creative';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = [
  { src: 'media_1792691998379.png', dest: 'star-sketch.png' },
  { src: 'media_1792692004310.png', dest: 'exclamation-halftone.png' },
  { src: 'media_1792692007401.png', dest: 'not-ai-badge.png' },
  { src: 'media_1792692010659.png', dest: 'behind-the-scenes.png' },
  { src: 'media_1792692021724.png', dest: 'lightning-sparks.png' }
];

for (const f of files) {
  const s = path.join(srcDir, f.src);
  const d = path.join(destDir, f.dest);
  if (fs.existsSync(s)) {
    fs.copyFileSync(s, d);
    console.log(`Copied ${f.src} -> ${f.dest}`);
  } else {
    console.warn(`File not found: ${s}`);
  }
}
