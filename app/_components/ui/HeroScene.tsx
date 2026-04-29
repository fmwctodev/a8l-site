'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

/**
 * HeroScene — bespoke layered SVG/CSS scene that replaces the Spline embed.
 *
 * Layers (back to front):
 *  1. Animated grid (uses existing animate-grid-slide keyframe from globals.css)
 *  2. Glowing orb network — 3 nodes connected by faint gradient lines, pulsing
 *  3. Floating compliance-framework chips — CMMC, NIST 800-171, HIPAA, SOC 2,
 *     FedRAMP — each on a staggered float animation
 *  4. Particle dots — uses existing particle-1..5 keyframes
 *  5. Horizontal scan line sweeping every ~8s (animate-scan-horizontal)
 *
 * Each layer uses Framer Motion useScroll + useTransform to parallax at a
 * different rate, giving depth as the user scrolls into the page.
 *
 * Sized to fill its parent container. Hero composes it absolute-positioned
 * behind the headline content.
 */
export default function HeroScene() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Each layer parallaxes at a different rate. Back layer moves least; front
  // moves most (creates depth as you scroll past the hero).
  const gridY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '-15%']);
  const nodesY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '-30%']);
  const chipsY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '-50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.6, 0]);

  // Compliance frameworks displayed as floating chips.
  // Position values are inset percentages (top, left).
  const chips = [
    { label: 'CMMC 2.0', top: '12%', left: '8%', delay: 0, animation: 'animate-float' },
    { label: 'NIST 800-171', top: '22%', left: '78%', delay: 1.5, animation: 'animate-float-delay' },
    { label: 'HIPAA', top: '60%', left: '12%', delay: 2.2, animation: 'animate-float' },
    { label: 'SOC 2 Type II', top: '70%', left: '74%', delay: 0.8, animation: 'animate-float-delay' },
    { label: 'FedRAMP', top: '40%', left: '46%', delay: 3.0, animation: 'animate-float' },
  ];

  // Network node positions (percentage-based inside the scene).
  const nodes = [
    { cx: 25, cy: 35, r: 6 },
    { cx: 70, cy: 25, r: 5 },
    { cx: 55, cy: 75, r: 7 },
  ];
  // Connections between nodes (line indices).
  const lines = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 0, to: 2 },
  ];

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ opacity: opacity as unknown as number }}
    >
      {/* Layer 1: Animated grid */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{ y: gridY }}
      >
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(6, 182, 212, 0.15)"
                strokeWidth="1"
              />
            </pattern>
            <radialGradient id="grid-fade" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0.6" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="grid-mask">
              <rect width="100%" height="100%" fill="url(#grid-fade)" />
            </mask>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#hero-grid)"
            mask="url(#grid-mask)"
            className={reduceMotion ? '' : 'animate-grid-slide'}
          />
        </svg>
      </motion.div>

      {/* Layer 2: Network of glowing nodes */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        style={{ y: nodesY }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(34, 211, 238, 0.35)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.55)" />
            <stop offset="100%" stopColor="rgba(34, 211, 238, 0.35)" />
          </linearGradient>
          <radialGradient id="node-glow">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="1" />
            <stop offset="60%" stopColor="#22d3ee" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Connection lines */}
        {lines.map((l, i) => (
          <line
            key={i}
            x1={nodes[l.from].cx}
            y1={nodes[l.from].cy}
            x2={nodes[l.to].cx}
            y2={nodes[l.to].cy}
            stroke="url(#line-gradient)"
            strokeWidth="0.15"
            vectorEffect="non-scaling-stroke"
          />
        ))}

        {/* Nodes — outer glow + inner solid dot */}
        {nodes.map((n, i) => (
          <g key={i} className={reduceMotion ? '' : 'animate-circuit-pulse'} style={{ animationDelay: `${i * 0.7}s`, transformOrigin: `${n.cx}% ${n.cy}%` }}>
            <circle cx={n.cx} cy={n.cy} r={n.r * 2} fill="url(#node-glow)" />
            <circle cx={n.cx} cy={n.cy} r={n.r * 0.5} fill="#22d3ee" />
          </g>
        ))}
      </motion.svg>

      {/* Layer 3: Floating framework chips */}
      <motion.div className="absolute inset-0" style={{ y: chipsY }}>
        {chips.map((chip) => (
          <div
            key={chip.label}
            className={`absolute hidden sm:flex items-center px-3 py-1.5 rounded-full bg-slate-900/70 backdrop-blur-md border border-cyan-400/20 text-xs font-mono text-cyan-300 shadow-glow-cyan ${reduceMotion ? '' : chip.animation}`}
            style={{
              top: chip.top,
              left: chip.left,
              animationDelay: `${chip.delay}s`,
            }}
          >
            {chip.label}
          </div>
        ))}
      </motion.div>

      {/* Layer 4: Particle accents */}
      {!reduceMotion && (
        <div className="absolute inset-0">
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className={`absolute w-1.5 h-1.5 rounded-full bg-cyan-300/60 animate-particle-${i}`}
              style={{
                left: `${15 + i * 15}%`,
                top: `${30 + (i % 2) * 30}%`,
              }}
            />
          ))}
        </div>
      )}

      {/* Layer 5: Horizontal scan line — barely-there sweep */}
      {!reduceMotion && (
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-scan-horizontal" />
      )}

      {/* Bottom fade — keeps text readable above the scene without a separate overlay */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-slate-950/80" />
    </div>
  );
}
