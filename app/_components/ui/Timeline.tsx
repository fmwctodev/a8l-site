'use client';

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';
import type { LucideIcon } from 'lucide-react';

export type TimelinePhase = {
  icon: LucideIcon;
  name: string;
  duration: string;
  body: string;
};

type TimelineProps = {
  phases: TimelinePhase[];
};

/**
 * Timeline — vertical scroll-driven timeline used by HowWeWork.
 *
 * A central gradient line draws from top to bottom as the section scrolls
 * through the viewport. Each phase node sits on the line; phases alternate
 * left/right and slide in from the appropriate side. Falls back to a clean
 * stack on prefers-reduced-motion.
 */
export default function Timeline({ phases }: TimelineProps) {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // The line draws as the user scrolls from when the timeline first appears
    // to when its bottom reaches the viewport center.
    offset: ['start 80%', 'end 30%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={containerRef} className="relative max-w-5xl mx-auto">
      {/* Center vertical track (mobile: left-aligned; desktop: centered) */}
      <div
        className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-px bg-slate-800/80"
        aria-hidden="true"
      />
      {/* Animated gradient line that draws as you scroll */}
      <motion.div
        className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-2 w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 origin-top shadow-glow-cyan"
        style={reduceMotion ? { height: '100%' } : { height: lineHeight }}
        aria-hidden="true"
      />

      <div className="space-y-12 md:space-y-20">
        {phases.map((phase, i) => {
          const Icon = phase.icon;
          // Alternate sides on desktop. Mobile: always right of the line.
          const isRight = i % 2 === 1;
          return (
            <motion.div
              key={phase.name}
              className="relative grid grid-cols-[3rem_1fr] md:grid-cols-2 md:gap-12 items-start"
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Node on the line */}
              <div
                className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-2 -translate-x-1/2 z-10"
                aria-hidden="true"
              >
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-glow-cyan-lg ring-4 ring-slate-950"
                  initial={reduceMotion ? {} : { scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* Spacer column on the opposite side (desktop only) */}
              {!isRight && <div className="hidden md:block" />}

              {/* Content card */}
              <motion.div
                className={`pl-8 md:pl-0 ${isRight ? 'md:col-start-2' : ''}`}
                initial={{
                  opacity: reduceMotion ? 1 : 0,
                  x: reduceMotion ? 0 : isRight ? 30 : -30,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="bg-gradient-to-br from-slate-900/60 to-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-xl p-6 md:p-8 hover:border-cyan-500/30 hover:shadow-glow-cyan transition-all duration-300">
                  <div className="flex items-baseline gap-3 mb-3">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {phase.name}
                    </h3>
                    <span className="text-sm text-cyan-400 font-mono">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{phase.body}</p>
                </div>
              </motion.div>

              {/* Spacer for right-aligned items so the row balances */}
              {isRight && <div className="hidden md:block md:col-start-1 md:row-start-1" />}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
