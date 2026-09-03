/**
 * LATENT Studio Motion Design System Tokens
 * 
 * Strict Motion Hierarchy:
 * 1. Structure -> 2. Spatial movement -> 3. Typography -> 4. Opacity -> 5. Scale -> 6. Blur -> 7. Parallax
 * 
 * Rule: Less motion. More meaning. Make the interface feel inevitable.
 */

export const DURATION = {
  instant: 0.1,    // Immediate feedback (active presses, tiny shifts)
  fast: 0.24,       // Microinteractions, button transitions, hover states
  standard: 0.45,   // UI element reveals, state transitions, focus shifts
  slow: 0.8,        // Editorial text reveals, large component entrance
  cinematic: 1.2,   // Section continuum, welcome wake-up morph
} as const;

export const DELAY = {
  staggerFast: 0.04,
  staggerStandard: 0.08,
  staggerSlow: 0.14,
} as const;

export const DEPTH_LAYER = {
  FOREGROUND: 1.0,  // Interactive buttons, active cards, focal typography
  MIDGROUND: 0.85,  // Section headers, descriptive copy, editorial columns
  BACKGROUND: 0.3,  // Architectural artifacts (checkers, textiles, diagrams, stars)
} as const;

export const MOTION_VERBS = {
  ENTER: {
    duration: DURATION.slow,
    yOffset: 24,
    blur: 6,
  },
  REVEAL: {
    duration: DURATION.slow,
    yMask: "100%",
    clipStart: "inset(10% 0% 10% 0%)",
  },
  FOCUS: {
    duration: DURATION.standard,
    scale: 1.015,
  },
  HOVER: {
    duration: DURATION.fast,
    scale: 1.02,
  },
  PRESS: {
    duration: DURATION.instant,
    scale: 0.97,
  },
} as const;
