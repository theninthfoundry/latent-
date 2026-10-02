# LATENT: Visual & Forensic Design Audit

**Date:** October 2026
**Role:** Principal Product Designer / Senior Front-end Engineer
**Objective:** Elevate the LATENT site into a premium, polished experience with a refined, editorial, museum-catalogue sensibility. 

Before refactoring the tokens and components, a comprehensive visual and forensic audit was conducted across 390px, 768px, 1280px, and 1728px viewports. Below are the 12 biggest design problems identified, ranked by impact.

---

### 1. Spacing Rhythm & Inconsistency
**Impact: Critical**
- **Issue:** Ad-hoc padding and margin values were used across different sections, causing a lack of structural rhythm. The "breathing room" required for a premium, editorial feel was missing. Sections felt either too constrained or disjointed.
- **Resolution:** Implement a strict 8px spacing scale (`8/16/24/32/48/64/96/128`) with generous, mathematical whitespace. Section padding must use clamped values (e.g., `clamp(96px, 14vw, 200px)`).

### 2. Typographic Scale Proliferation
**Impact: Critical**
- **Issue:** Too many font weights, sizes, and arbitrary line-heights scattered throughout the site. The typographic hierarchy lacked intention and modularity, leading to a loss of the "museum-catalogue" aesthetic.
- **Resolution:** Restrict to two typefaces: Fraunces (Display) and IBM Plex (Sans/Mono). Enforce a 1.25 modular scale. Apply tight tracking to headings (`-0.02em`) and relaxed line-heights (`1.6`) on body copy, with measures maxed at `62ch`.

### 3. Color Palette Fragmentation
**Impact: High**
- **Issue:** The site relied on disjointed color values, including harsh pure blacks (`#000000`) and pure whites (`#ffffff`), which detract from a calm, boutique feel.
- **Resolution:** Unify the palette under a single neutral ramp and one accent. Replace harsh blacks/whites with warm off-white (paper) and deep ink tones to create a tactile, printed-matter aesthetic.

### 4. Insufficient Contrast & WCAG Failures
**Impact: High**
- **Issue:** Several text-to-background contrast ratios fell below WCAG AA requirements, particularly with lighter text on the substrate background or accent colors.
- **Resolution:** Adjust the ink and accent values to strictly adhere to WCAG AA minimums (4.5:1 for normal text).

### 5. Alignment Drift
**Impact: High**
- **Issue:** Elements drifted off the primary grid line across different viewports. Centered text mixed arbitrarily with left-aligned blocks, undermining structural integrity.
- **Resolution:** Enforce a strict `max-w-[1440px]` container grid with consistent horizontal padding (`px-6 sm:px-10 lg:px-16`). Maintain rigid left-alignment for editorial blocks.

### 6. Mobile Layout Squeeze (Breakage)
**Impact: High**
- **Issue:** At 390px, elements that looked fine on desktop were abruptly compressed rather than gracefully stacking. Typography did not scale down appropriately, causing awkward wrapping.
- **Resolution:** Use fluid typography (clamp) and responsive grid stack configurations. Ensure comfortable touch targets and legible type at small sizes.

### 7. Visual Noise & Density
**Impact: Medium**
- **Issue:** Too much information competing for attention within individual viewports. The density of UI elements contradicted the "calm/cinematic" intent.
- **Resolution:** Embrace whitespace as a primary design element. Reduce unnecessary borders, dividers, and decorative noise. Let typography and spacing do the heavy lifting.

### 8. Motion & A11y Gaps
**Impact: Medium**
- **Issue:** Animations felt arbitrary in duration and easing, and did not respect the user's system preferences for reduced motion. 
- **Resolution:** Standardize motion physics to a specific easing curve (e.g., `[0.16, 1, 0.3, 1]`) and duration (400ms–600ms). Implement `prefers-reduced-motion` bypasses universally.

### 9. Focus States Missing or Inconsistent
**Impact: Medium**
- **Issue:** Keyboard navigation was an afterthought. Interactive elements either lacked a focus state or used default, unstyled browser rings that clashed with the brand.
- **Resolution:** Implement intentional, stylized focus rings (`:focus-visible:ring-1 :focus-visible:ring-ink`) on all interactive buttons, links, and form elements.

### 10. Imagery Repetition & Overuse
**Impact: Medium**
- **Issue:** Repetitive or overly dominant imagery overshadowed the text and structural elegance of the site. Images weren't paced correctly across the scroll experience.
- **Resolution:** Treat images curatorially. Provide generous breathing room around assets and limit their density to maintain an editorial cadence.

### 11. Lack of Modular System (Design Tokens)
**Impact: Foundational**
- **Issue:** Hardcoded values (hex codes, pixel values) were used in individual components rather than referencing a central source of truth.
- **Resolution:** Create a centralized token system via CSS variables (`globals.css` / `tailwind.config.ts`) to manage spacing, color, typography, and shadows uniformly.

### 12. Hierarchy Imbalances
**Impact: Foundational**
- **Issue:** Secondary elements occasionally overpowered primary actions, leading to a confusing user journey.
- **Resolution:** Clarify visual weight. Use size, weight, and color strictly to guide the user's eye from the most important to the least important information seamlessly.

---

**Next Steps:**
This audit informed the subsequent foundational refactoring. The site's Design Tokens (`globals.css`, `tailwind.config.ts`) have been rewritten, and all core components have been refactored to align with these principles without changing content or routing.
