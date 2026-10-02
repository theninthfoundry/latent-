/**
 * LATENT Labs Apple-Inspired Cubic-Bezier Curves & Physics
 */

// Unhurried easing: cubic-bezier(0.22, 1, 0.36, 1)
export const spatialEase = [0.22, 1, 0.36, 1] as const;
export const cinematicEase = [0.22, 1, 0.36, 1] as const;
export const appleMorph = [0.22, 1, 0.36, 1] as const;
export const exitEase = [0.22, 1, 0.36, 1] as const;

// Restrained spring configuration for physical microinteractions (zero bounce, tactile settling)
export const tactileSpring = {
  type: "spring",
  stiffness: 280,
  damping: 40,
  mass: 1,
  bounce: 0,
} as const;

// Magnetic pull spring (unhurried)
export const magneticSpring = {
  type: "spring",
  stiffness: 150,
  damping: 30,
  mass: 1,
  bounce: 0,
} as const;
