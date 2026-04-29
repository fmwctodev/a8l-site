'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type StaggerProps = {
  children: ReactNode;
  /** Time in seconds between each child entrance. Default 0.08. */
  staggerDelay?: number;
  /** Initial delay for the first child. Default 0. */
  initialDelay?: number;
  /** Distance in pixels each child slides up. Default 20. */
  distance?: number;
  /** Forwarded className. */
  className?: string;
};

/**
 * Stagger — wraps a list of children where each child should fade-and-rise in
 * sequence as the container scrolls into view. Pair with <StaggerItem> for the
 * children, or wrap any element directly — Framer Motion's variants flow down
 * to descendants that read the parent's `variants`.
 */
export default function Stagger({
  children,
  staggerDelay = 0.08,
  initialDelay = 0,
  distance = 20,
  className,
}: StaggerProps) {
  const reduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : staggerDelay,
        delayChildren: reduceMotion ? 0 : initialDelay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={containerVariants}
      // Surface the `--stagger-distance` to descendants so StaggerItem can read it.
      style={{ ['--stagger-distance' as string]: `${distance}px` }}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'li' | 'tr' | 'article' | 'section';
};

/**
 * StaggerItem — child component for Stagger. Inherits the parent's stagger
 * variants. Renders fade + rise on entrance, identity at rest.
 */
export function StaggerItem({ children, className, as = 'div' }: StaggerItemProps) {
  const reduceMotion = useReducedMotion();

  const itemVariants: Variants = {
    hidden: {
      opacity: reduceMotion ? 1 : 0,
      y: reduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const Comp = (motion as unknown as Record<string, typeof motion.div>)[as];

  return (
    <Comp className={className} variants={itemVariants}>
      {children}
    </Comp>
  );
}
