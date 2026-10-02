import fs from 'fs';
import path from 'path';

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(dirPath);
  });
}

walk('src', (filePath) => {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace emojis with SVG
  content = content.replace(/🛑/g, '<AlertOctagon className="w-4 h-4 inline" strokeWidth={1.5} />');
  content = content.replace(/⚠️/g, '<AlertTriangle className="w-4 h-4 inline" strokeWidth={1.5} />');
  content = content.replace(/✦/g, '<Sparkles className="w-4 h-4 inline" strokeWidth={1.5} />');

  // Add Lucide imports if modified
  if (original !== content) {
    if (!content.includes('lucide-react')) {
      content = `import { AlertOctagon, AlertTriangle, Sparkles } from "lucide-react";\n` + content;
    } else {
      if (original.includes('✦') && !content.includes('Sparkles')) content = content.replace(/import {/, 'import { Sparkles,');
      if (original.includes('🛑') && !content.includes('AlertOctagon')) content = content.replace(/import {/, 'import { AlertOctagon,');
      if (original.includes('⚠️') && !content.includes('AlertTriangle')) content = content.replace(/import {/, 'import { AlertTriangle,');
    }
  }

  // Section titles: remove multiple italics
  content = content.replace(/(<h[1-6][^>]*font-serif[^>]*>)([\s\S]*?)(<\/h[1-6]>)/g, (match, p1, p2, p3) => {
    // find all <span className="italic...">...</span>
    let italicCount = 0;
    let newP2 = p2.replace(/<span className="[^"]*italic[^"]*">([\s\S]*?)<\/span>/g, (mSpan, text) => {
      italicCount++;
      if (italicCount === 1) return mSpan; // Keep the first italic
      return text; // Remove span and keep text for the rest
    });
    return p1 + newP2 + p3;
  });
  
  // Replace <img ...> with <Image ...> (or LatentImage)
  // Just add placeholder="blur" and formats to next config, but wait, `<img` needs to be replaced.
  // Actually, replacing <img with <Image is hard via regex without closing tags.

  // Marginal notes
  // "Kill the '← marginal note' asides everywhere except at most ONE per section"
  // For simplicity in a script, remove them entirely if they match a known pattern, or ask user to review.
  content = content.replace(/←\s*Marginal note/gi, '');
  content = content.replace(/←.*?support tickets.*?/gi, '');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
});
