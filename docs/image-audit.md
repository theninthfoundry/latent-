# Image Audit: Duplicates & Assets Required

## 1. Celestial Sun (`celestial-sun.jpg`)
**Current Usage:**
- `table.tsx` (x2)
- `celestial-sun.tsx`
- `capabilities.tsx` (Experiment badge)

**Action Needed:**
This asset appears 4 times. To maintain the "no image may appear more than once" rule, we need 3 new distinct art-directed variants of this solar/celestial theme (e.g., lunar eclipse, orbital decay, nebula). 
*Flag: Please supply 3 new celestial assets.*

## 2. Carpet Border (`carpet-border.jpg`)
**Current Usage:**
- `table.tsx` (x2)
- `carpet-frame.tsx`
- `capabilities.tsx` (Archive badge)

**Action Needed:**
This asset appears 4 times. We need 3 new textile/filigree assets (e.g., sashiko weave, tapestry edge, woven jacquard). 
*Flag: Please supply 3 new textile/archive assets.*

## 3. Halftone Stars (`halftone-stars.png`)
**Current Usage:**
- `work.tsx`
- `thesis.tsx`
- `thesis-teaser.tsx`
- `studio.tsx`

**Action Needed:**
Used as a background texture across 4 components. We should crop it into distinct quadrants or supply new geometric halftone patterns (e.g., halftone circles, grid matrix, noise gradient) so each section has a unique substrate texture.
*Flag: Please supply 3 new halftone/texture assets (or authorize cropping the existing one).*

## 4. Other Images
Images within `work.tsx` cases (e.g., `otaru-archive.png`, `solomon-archive.png`, and Unsplash placeholders) are currently unique per project case, which is fine, but they must be processed through the new `<LatentImage>` component to ensure a unified editorial color grade.
