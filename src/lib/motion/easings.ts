/**
 * LATENT Studio Apple-Inspired Cubic-Bezier Curves & Physics
 */

// Apple-inspired smooth deceleration: swift initial movement, prolonged natural settling
export const spatialEase = [0.16, 1, 0.3, 1] as const;

// Cinematic S-curve for continuous section pacing
export const cinematicEase = [0.65, 0, 0.35, 1] as const;

// Subtle Apple typographic morph curve (blur, scale, opacity blend)
export const appleMorph = [0.4, 0, 0.2, 1] as const;

// Curtain lift and departure curve
export const exitEase = [0.76, 0, 0.24, 1] as const;

// Restrained spring configuration for physical microinteractions (zero bounce, tactile settling)
export const tactileSpring = {
  type: "spring",
  stiffness: 280,
  damping: 26,
  mass: 0.8,
} as const;

// Magnetic pull spring
export const magneticSpring = {
  type: "spring",
  stiffness: 180,
  damping: 18,
  mass: 0.1,
} as const;
