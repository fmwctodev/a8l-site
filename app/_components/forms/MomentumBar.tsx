'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * MomentumBar — gamified progress indicator for multi-step forms.
 *
 * Differs from a plain <progress> in three ways meant to add "feel":
 *  1. Dotted stage markers tied to step count, so users can see how far they've come
 *     and how far is left at a glance.
 *  2. A faint sweep gradient inside the filled portion that pulses subtly while the
 *     step is settled (idle), giving the bar a sense of momentum even when nothing
 *     is happening.
 *  3. Smooth ease-out on width changes (not linear), so step advances feel like
 *     a small "snap forward" rather than a mechanical tick.
 *
 * Honors prefers-reduced-motion: the sweep and width animation are disabled.
 */

interface MomentumBarProps {
  currentStep: number;
  totalSteps: number;
  encouragingCopy?: string;
  className?: string;
}

export default function MomentumBar({
  currentStep,
  totalSteps,
  encouragingCopy,
  className = '',
}: MomentumBarProps) {
  const reduceMotion = useReducedMotion();
  const safeTotal = Math.max(1, totalSteps);
  const safeCurrent = Math.min(Math.max(0, currentStep), safeTotal);
  const percent = (safeCurrent / safeTotal) * 100;
  const stepsRemaining = safeTotal - safeCurrent;

  const defaultCopy =
    safeCurrent === 0
      ? "Let's start"
      : safeCurrent === safeTotal
      ? 'Submitting…'
      : stepsRemaining === 1
      ? 'One more — last step'
      : `${stepsRemaining} steps left`;

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-cyan-400 font-medium tracking-wide uppercase">
          Step {Math.min(safeCurrent + 1, safeTotal)} of {safeTotal}
        </span>
        <span className="text-xs text-slate-400">{encouragingCopy ?? defaultCopy}</span>
      </div>
      <div className="relative h-2 w-full bg-slate-800/80 rounded-full overflow-hidden">
        <motion.div
          className="relative h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
          initial={false}
          animate={{ width: `${percent}%` }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
          }
        >
          {!reduceMotion && (
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          )}
        </motion.div>
        {/* Stage markers */}
        <div className="absolute inset-0 flex items-center justify-between pointer-events-none px-0.5">
          {Array.from({ length: safeTotal + 1 }).map((_, i) => {
            const reached = i <= safeCurrent;
            return (
              <span
                key={i}
                className={`w-1 h-1 rounded-full transition-colors duration-500 ${
                  reached ? 'bg-cyan-300' : 'bg-slate-600'
                } ${i === 0 || i === safeTotal ? 'opacity-0' : ''}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
