'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

type RevealProps = {
  children: ReactNode;
  /** Delay in seconds before the reveal starts. Default 0. */
  delay?: number;
  /** Direction the content slides in from. Default 'up'. */
  direction?: Direction;
  /** Distance in pixels for the slide. Default 24. */
  distance?: number;
  /** Animation duration in seconds. Default 0.6. */
  duration?: number;
  /** Forwarded className. */
  className?: string;
  /** Render as a different element. Default 'div'. */
  as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'span' | 'li';
};

/**
 * Reveal — Framer Motion wrapper that fades + slides children up when scrolled
 * into view. Honors `prefers-reduced-motion` (renders the final state without
 * animation). Used at the top of every section to give the page a layered,
 * scroll-driven feel.
 */
export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  distance = 24,
  duration = 0.6,
  className,
  as = 'div',
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  const offset = (() => {
    if (reduceMotion || direction === 'none') return { x: 0, y: 0 };
    switch (direction) {
      case 'down':
        return { x: 0, y: -distance };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'up':
      default:
        return { x: 0, y: distance };
    }
  })();

  const variants: Variants = {
    hidden: { opacity: reduceMotion ? 1 : 0, ...offset },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  // Cast to any so the polymorphic `as` prop maps to the matching motion element.
  // Framer Motion's static typing requires concrete components; this adapter keeps
  // the consumer API simple.
  const Comp = (motion as unknown as Record<string, typeof motion.div>)[as];

  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variants}
    >
      {children}
    </Comp>
  );
}
