'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * CelebrationBurst — one-shot ring of soft particles emanating from a central
 * point. Used by /thank-you and /application-received to acknowledge a
 * successful form submission with a subtle, premium flourish.
 *
 * Renders 12 particles in a circle. Each fades from full opacity at the center
 * to zero as it scales outward. Plays once on mount, then static.
 *
 * Honors prefers-reduced-motion (renders nothing).
 */
export default function CelebrationBurst() {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;

  const particleCount = 12;
  const radius = 80; // px

  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
      {Array.from({ length: particleCount }).map((_, i) => {
        const angle = (i / particleCount) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return (
          <motion.span
            key={i}
            className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-glow-cyan"
            initial={{ x: 0, y: 0, opacity: 1, scale: 0.5 }}
            animate={{ x, y, opacity: 0, scale: 1.5 }}
            transition={{
              duration: 1.4,
              delay: 0.2 + (i % 3) * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        );
      })}
    </div>
  );
}
