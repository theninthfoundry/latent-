# LATENT

> **"We make new things feel inevitable."**  
> An autonomous creative engineering and digital systems studio.

LATENT is a production-grade digital platform engineered with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and GSAP. It embodies a restrained, tactile, and cinematic editorial aesthetic—quiet confidence, spatial continuity, and purposeful physical interaction.

---

## Table of Contents

- [Design Philosophy & System](#design-philosophy--system)
- [Directory Architecture](#directory-architecture)
- [Signature Motion & Interaction Systems](#signature-motion--interaction-systems)
- [Section Catalog](#section-catalog)
- [Security & Production Hardening](#security--production-hardening)
- [Performance & Core Web Vitals](#performance--core-web-vitals)
- [Observability & Error Handling](#observability--error-handling)
- [SEO & Structured Data](#seo--structured-data)
- [Local Development & Testing](#local-development--testing)
- [Vercel Deployment](#vercel-deployment)

---

## Design Philosophy & System

LATENT rejects generic templates, aggressive neon gradients, and superficial micro-animations in favor of a cohesive digital publication aesthetic:

- **Surface Palette**:
  - `paper` (`#F7F6F2`): Warm editorial museum-grade paper substrate.
  - `paper-subtle` (`#EFECE6`): Gentle parchment elevation.
  - `paper-border` (`#E2DFD7`): Refined hairline structural dividers.
  - `paper-card` (`#FAF9F6`): Tactile card surfaces.
- **Ink Palette**:
  - `ink` (`#17150F`): Deep organic carbon black for monumental headlines.
  - `ink-light` (`#2E2A23`): Warm charcoal for body text and navigation.
  - `ink-muted` (`#78736A`): Quiet editorial notes and monospace indices.
  - `ink-faint` (`#A39E95`): Tertiary metadata and timestamp coordinates.
- **Accents**:
  - `accent-gold` (`#C5A880`): Studio bookmark accents and focal tags.
  - `accent-clay` (`#A25738`): Tangible craft markers and laboratory indicators.
  - `accent-inkblue` (`#2A3A4A`): Quiet blueprint references.
- **Typography Matrix**:
  - **Monumental Display**: *Fraunces* (variable serif with soft axis and optical size).
  - **Technical Clarity**: *IBM Plex Sans* & *IBM Plex Mono* for indices and structural labels.
  - **Calligraphic Script**: *Caveat* & *Pinyon Script* for marginalia, notes, and human signatures.
  - **Classical Serifs**: *Bodoni Moda* & *Cormorant Garamond* for editorial spreads.

---

## Directory Architecture

```
d:/neam/
├── .github/
│   └── workflows/
│       └── ci.yml                 # Automated CI: Typecheck, Lint, and Production Build
├── public/                        # Static assets, vector marks, and studio artifacts
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── inquiry/
│   │   │       └── route.ts       # Hardened POST endpoint with rate limit & honeypot
│   │   ├── error.tsx              # Component-level client error boundary
│   │   ├── global-error.tsx       # Root layout fallback crash boundary
│   │   ├── globals.css            # Tailwind layers, paper styling, and washi tape
│   │   ├── layout.tsx             # Root layout, Google Fonts, JSON-LD, and skip link
│   │   ├── not-found.tsx          # Custom editorial 404 void screen
│   │   ├── page.tsx               # Primary single-page studio composition
│   │   ├── robots.ts              # Dynamic robots.txt route
│   │   └── sitemap.ts             # Dynamic XML sitemap route
│   ├── components/
│   │   ├── latent/
│   │   │   ├── cta.tsx            # Final split-action interactive commission triggers
│   │   │   ├── field-notes.tsx    # Publication observations & editorial critique
│   │   │   ├── footer.tsx         # Studio colophon, copyright, & crowd canvas footnote
│   │   │   ├── hero.tsx           # Monumental spatial lift typography
│   │   │   ├── human-machine.tsx  # Synthesis matrix contrasting code & organic taste
│   │   │   ├── lab.tsx            # Interactive experimental research directory
│   │   │   ├── method.tsx         # Circular 3-phase engineering methodology
│   │   │   ├── naive-elements.tsx # Tactile hand-drawn arrows & paper markers
│   │   │   ├── navbar.tsx         # Responsive studio masthead & navigation
│   │   │   ├── split-cta-button.tsx # Tactile split-state interactive action button
│   │   │   ├── studio.tsx         # Philosophy constellation & difficult questions
│   │   │   ├── table.tsx          # Tangible materials, physical instruments, & samples
│   │   │   ├── thesis.tsx         # Dual-state editorial studio manifesto
│   │   │   └── work.tsx           # Selected client case studies & digital systems
│   │   ├── motion/
│   │   │   ├── smooth-cursor.tsx  # Cursor subsystem stub (native pointer enabled)
│   │   │   └── smooth-scroll.tsx  # Lenis smooth inertia scrolling integration
│   │   └── skiper-ui/
│   │       ├── skiper8.tsx        # Exact Words Preloader & Dennis Snellenberg SVG wave
│   │       ├── skiper39.tsx       # Performance-gated CrowdCanvas simulation
│   │       └── skiper60.tsx       # Motion interaction primitive
│   └── lib/
│       ├── logger.ts              # Structured JSON logger with correlation IDs
│       ├── security.ts            # Token-bucket rate limiter & string sanitizer
│       ├── validation.ts          # RFC 5322 validation & honeypot bot trap
│       └── motion/
│           └── easings.ts         # Cinematic Bézier curves & spatial physics
├── .env.example                   # Sanitized environment configuration template
├── .gitignore                     # Comprehensive secrets & cache protection
├── components.json                # shadcn/ui configuration
├── next.config.mjs                # CSP, HSTS, security headers, & image domains
├── package.json                   # Project metadata & dependencies
├── tailwind.config.ts             # Extended studio design tokens & typography
└── tsconfig.json                  # Strict TypeScript configuration
```

---

## Signature Motion & Interaction Systems

### 1. `@skiper-ui/skiper8` — Words Preloader & Curved SVG Wave
- **Location**: `src/components/skiper-ui/skiper8.tsx`
- **Multilingual Rapid Cycle**: Sequences through 8 international greetings (`Hello`, `Bonjour`, `Ciao`, `Olà`, `やあ`, `Hallå`, `Guten tag`, `Hallo`).
- **Signature Exit Curve**: Morphing quadratic Bézier curve inspired by Dennis Snellenberg:
  - `initialPath`: `M0 0 L${w} 0 L${w} ${h} Q${w/2} ${h + 300} 0 ${h} L0 0` (300px downward curve).
  - `targetPath`: `M0 0 L${w} 0 L${w} ${h} Q${w/2} ${h} 0 ${h} L0 0` (flat horizontal exit).
  - Cubic-Bézier easing `[0.76, 0, 0.24, 1]` with synchronized slide-up timing.

### 2. `CrowdCanvas` / `Skiper39` — Viewport-Gated Footer Canvas
- **Location**: `src/components/skiper-ui/skiper39.tsx`
- HTML5 `<canvas>` simulation powered by GSAP and Open Peeps illustrations.
- **Battery & CPU Optimization**: Integrated with `IntersectionObserver` to halt the `gsap.ticker` render loop whenever the footer is outside the viewport.

### 3. Smooth Inertia Scrolling
- **Location**: `src/components/motion/smooth-scroll.tsx`
- Powered by Lenis with momentum damping for continuous spatial transitions across sections.

---

## Section Catalog & Digital Matter Topology

| # | Section | Component | Description |
|---|---|---|---|
| `00` | **Preloader** | `Skiper8` | Rapid multilingual reveal and Dennis Snellenberg curved wave exit. |
| `01` | **Hero** | `Hero` | Monumental typography (*"WE MAKE NEW THINGS FEEL INEVITABLE"*), coordinate tags, and Indian digital atelier markers. |
| `02` | **Thesis** | `ThesisTeaser` | Studio manifesto: *"Some ideas need a website. Some need a world. We work somewhere between the two."* |
| `03` | **The Table** | `TheTable` | Tangible desk view featuring physical studio tools, washi tape, and raw substrates. |
| `04` | **Digital Matter** | `Capabilities` | The capability hierarchy: Sovereign **BUILD**, primary doors **REPAIR** & **EVOLVE**, superpowers **RESCUE** (takeover manifesto) & **TRANSFORM** (spreadsheet-to-app metamorphosis), and the quiet constellation (**AUDIT**, **RECOVER**, **CARE**, **EXPERIMENT**, **ARCHIVE**). |
| `05` | **Diagnostic Engine** | `DiagnosticEngine` | Empirical **Specimen Audits** (*E-Commerce, Abandoned SaaS, Architectural Monograph*) + **Live Audit Connection**. Features the signature *"LATENT RECOMMENDS: LEAVE IT"* finding. |
| `06` | **Selected Work** | `Work` | Living technical archives: *OTARU* (textile point-cloud), *SOLOMON* (episodic AI memory), and *SATQUERY* (multispectral Earth telemetry). |
| `07` | **Final CTA** | `FinalCTA` | Split commission buttons with tactile interaction triggers. |
| `08` | **Footer & Colophon** | `Footer` | Colophon, *“Made slowly. Digital Atelier • India • 2026”*, capabilities strip, and live crowd canvas. |
| `✦` | **LATENT / FIX** | `LatentFixModal` | Frictionless emergency intake portal (*"Something broken? Send it."* &bull; `fix@latent.studio`). |

---

## The Material System

Every visual and interactive decision is grounded in physical substrate materials:

- **Paper (`#FAF8F1` / `#F7F6F2`)**: Bone, cream, and subtle paper grain. Silence and restraint.
- **Ink (`#111111` / `#17150F`)**: Almost black. High-contrast Swiss-grade typography and structural boundaries.
- **Indigo (`#142C48`)**: Primary Latent studio identity. Deep dye of cultural memory and computation.
- **Brass (`#B6A06A`)**: Rare metadata, archival coordinate stamps, and formal report accents.
- **Pista (`#C7D46A`)**: Extremely rare live signal indicator.
- **Pixel**: The underlying computational structure and jaali grid physics.
- **Botanical**: Living organism state. The rare blue flower punctuation (`✦` &rarr; petal &rarr; bloom &rarr; dissolve).
- **Textile**: Formal archive state. Indian carpet border grammar (90% bare paper, 10% discovered artifact).
- **Celestial**: Astronomical and experimental studio state (`17°23' N, 78°29' E`).

---

## The 70 / 20 / 8 / 2 Quietness Constraint

A strict design and engineering rule governing the interface:

- **70% — Silence**: Paper space, whitespace, motionless editorial typography, quiet confidence.
- **20% — Atmosphere**: Subtle ambient motion, breathing stitches, coordinate pulses.
- **8% — Interaction**: Reactive craft responses (damaged pixel self-healing, scanlines, literal transformations).
- **2% — Magic**: Unexpected wonder where the visitor pauses: *"What just happened?"*

---

## Craft Principles Over Cultural Clichés

Latent strictly rejects stereotypical ornamental clichés (no mandalas, diyas, temples, Sanskrit text, or elephants).
Instead, it embodies **underlying craft disciplines translated into digital form**:
* **Jaali** &rarr; Perforated pixel matrix and multi-state computational canvas.
* **Kalamkari** &rarr; Precision hand-drawn botanical linework.
* **Block Printing** &rarr; Repeated computational cell motifs.
* **Textile & Carpet Borders** &rarr; Restrained framing around formal artifacts.
* **Indigo Dye** &rarr; Sovereign color identity.
* **Astronomical Diagrams** &rarr; Celestial studio figure and coordinate system.

---

## Art Direction Freeze & Quality Gates

> **LATENT is not seeking more visual ideas. The visual language is complete. Future work should refine, simplify, or extend existing systems rather than introduce new ones.**

Every future element must strictly belong to the nine locked materials:
**Paper &bull; Ink &bull; Indigo &bull; Brass &bull; Pista &bull; Pixel &bull; Botanical &bull; Textile &bull; Celestial**

Before considering any change production-ready, it must pass the **Five Quality Gates**:

1. **First 10 Seconds**: A completely new visitor understands: **LATENT &bull; We build inevitables.** without needing to decipher anything else.
2. **Scroll Intention**: Every transition is slow, intentional, and liquid. Animation never competes with typography.
3. **Mobile Composition**: A dedicated tactile composition preserving **paper &rarr; craft &rarr; system &rarr; silence**, not a cramped desktop grid.
4. **Performance Integrity**: Zero performance irony. Sub-second paint, optimized assets, and lightweight execution for a studio that repairs and audits others.
5. **Radical Accessibility**: First-class keyboard traversal, clear focus rings, strict contrast, semantic landmark trees, and full reduced-motion support.

---

## Security & Production Hardening

LATENT is hardened for direct exposure to the public internet:

1. **Content-Security-Policy (CSP)**:
   - Configured in `next.config.mjs`.
   - Restricts executable scripts to self and framework requirements.
   - Enforces `frame-ancestors 'none'` to eliminate clickjacking vectors.
2. **HTTP Security Headers**:
   - `Strict-Transport-Security`: `max-age=63072000; includeSubDomains; preload`
   - `X-Frame-Options`: `DENY`
   - `X-Content-Type-Options`: `nosniff`
   - `Referrer-Policy`: `strict-origin-when-cross-origin`
   - `Permissions-Policy`: `camera=(), microphone=(), geolocation=(), browsing-topics=()`
   - `poweredByHeader: false` (removes Next.js technology fingerprint)
3. **Hardened Inquiry Route (`POST /api/inquiry`)**:
   - **Cross-Origin Protection**: Validates request `Origin` and `Sec-Fetch-Site`.
   - **Token-Bucket Rate Limiting**: In-memory sliding window limiter tracking client IPs.
   - **Payload Ceiling**: Rejects payloads exceeding 16KB.
   - **RFC 5322 Email Validation**: Strict regex verification.
   - **Honeypot Bot Trap**: Silent rejection of automated submissions populating the hidden `website_url_hp` field.
   - **HTML Sanitization**: Escapes special characters to prevent injection into notification streams.

---

## Performance & Core Web Vitals

- **Google Font Pruning**: Audited and purged unused Google Fonts (`Italiana`, `Playfair_Display`) from `layout.tsx`, reducing initial payload by ~80KB.
- **Intersection-Gated GSAP Ticker**: Footer crowd simulation automatically pauses animation frames when off-screen.
- **Next.js Image Optimization**: Configured remote pattern security for Unsplash, S3, Codepen, and Skiper UI assets with AVIF/WebP auto-negotiation.

---

## Observability & Error Handling

- **Structured JSON Logger (`src/lib/logger.ts`)**:
  - Outputs ISO-8601 timestamps, log levels (`DEBUG`, `INFO`, `WARN`, `ERROR`), and correlation IDs (`req_...`).
  - Automatically redacts sensitive fields (`password`, `token`, `secret`, `authorization`, `cookie`, `apiKey`).
- **Editorial Custom 404 (`src/app/not-found.tsx`)**:
  - Contextual error screen: *"The artifact you seek has dissolved into the archive."*
  - Instant return navigation back to the studio index.
- **Graceful Error Boundaries**:
  - `src/app/error.tsx`: Component-level boundary providing an isolated state reset button.
  - `src/app/global-error.tsx`: Clean root-level HTML fallback preventing blank screens in case of catastrophic layout failure.

---

## SEO & Structured Data

- **Metadata Base**: Canonical domain resolution via `NEXT_PUBLIC_SITE_URL`.
- **OpenGraph & Twitter Cards**: Complete rich media tags for social previews.
- **JSON-LD Schema**: Embedded `Organization` structured data in root `<head>`.
- **Dynamic Sitemap**: Auto-generated XML sitemap served at `/sitemap.xml`.
- **Dynamic Robots**: Automated crawl directive served at `/robots.txt` (disallowing internal `/api/` paths).
- **Accessibility**: Includes high-contrast, keyboard-focusable skip link (`Skip to main content` -> `#main-content`).

---

## Local Development & Testing

### Prerequisites
- Node.js 18.17+ or 20+
- pnpm 9+

### Setup
```bash
# 1. Clone repository
git clone <repository-url>
cd neam

# 2. Install dependencies
pnpm install

# 3. Provision environment file
cp .env.example .env.local

# 4. Start development server
pnpm dev
```

Navigate to `http://localhost:3000`.

### Quality Verification
```bash
# Typecheck TypeScript codebase
pnpm exec tsc --noEmit

# Lint source files
pnpm run lint

# Compile production bundle
pnpm run build

# Preview production server locally
pnpm start
```

---

## Vercel Deployment

The project is configured for automated, zero-configuration deployment to [Vercel](https://vercel.com):

1. Connect your repository to Vercel.
2. Ensure the framework preset is set to **Next.js**.
3. Configure the environment variables in the Vercel Project Settings:
   - `NEXT_PUBLIC_SITE_URL`: Set to your production domain (e.g., `https://latent.studio`).
   - `APP_ENV`: `production`
   - `CONTACT_RATE_LIMIT_MAX`: `5` (optional)
   - `CONTACT_RATE_LIMIT_WINDOW_SECONDS`: `60` (optional)
   - `INQUIRY_NOTIFICATION_WEBHOOK_URL`: Webhook URL for team alerts (optional).
4. Trigger the deployment. Security headers, robots, sitemaps, and optimized assets will be automatically served from edge regions.

---

## Colophon

- **Design & Direction**: LATENT Autonomous Digital Studio
- **Release**: Volume 01 // Research & Systems &bull; 2026
- **License**: Private & Proprietary
