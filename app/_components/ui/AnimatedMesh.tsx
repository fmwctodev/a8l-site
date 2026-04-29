'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * AnimatedMesh — cinematic ambient background mounted once at body level.
 *
 * Three blurred radial blobs (cyan, blue, violet) crossfade and reposition
 * slowly (12–20s loops) over a slate-950 base. A faint SVG-noise overlay
 * adds film grain.
 *
 * Fixed-position, pointer-events: none, z-index: -1 — sits behind every
 * page section without ever intercepting clicks.
 *
 * Honors prefers-reduced-motion: blobs render in their initial position
 * without animating.
 */
export default function AnimatedMesh() {
  const reduceMotion = useReducedMotion();

  // Three blob configs. Position values are percentages; framer-motion
  // animates between them over the duration.
  const blobs = [
    {
      key: 'cyan',
      className:
        'mesh-blob bg-cyan-500/30 w-[42rem] h-[42rem]',
      animate: reduceMotion
        ? { x: '-10%', y: '-10%' }
        : {
            x: ['-10%', '15%', '-5%', '-10%'],
            y: ['-10%', '8%', '-15%', '-10%'],
            scale: [1, 1.15, 0.9, 1],
          },
      duration: 24,
    },
    {
      key: 'blue',
      className:
        'mesh-blob bg-blue-500/25 w-[36rem] h-[36rem] right-[-6rem] top-[20%]',
      animate: reduceMotion
        ? { x: '0%', y: '0%' }
        : {
            x: ['0%', '-12%', '6%', '0%'],
            y: ['0%', '10%', '-8%', '0%'],
            scale: [1, 0.95, 1.1, 1],
          },
      duration: 28,
    },
    {
      key: 'violet',
      className:
        'mesh-blob bg-violet-500/20 w-[34rem] h-[34rem] left-[20%] bottom-[-8rem]',
      animate: reduceMotion
        ? { x: '0%', y: '0%' }
        : {
            x: ['0%', '8%', '-10%', '0%'],
            y: ['0%', '-6%', '5%', '0%'],
            scale: [1, 1.1, 0.95, 1],
          },
      duration: 32,
    },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-950"
    >
      {blobs.map((blob) => (
        <motion.div
          key={blob.key}
          className={blob.className}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: reduceMotion ? 0 : Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />
      ))}
      {/* Subtle vignette so blobs don't bleed into UI in extreme cases */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/60" />
      {/* Film grain noise — adds analog texture */}
      <div className="absolute inset-0 noise-overlay" />
    </div>
  );
}
