'use client';

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'framer-motion';
import Link from 'next/link';
import type { ReactNode, MouseEvent as ReactMouseEvent } from 'react';

type MagneticButtonProps = {
  children: ReactNode;
  /** Internal route (next/link) or external URL (anchor). */
  href: string;
  /** Variant — visual treatment. */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** Tailwind class additions. */
  className?: string;
  /** External target — adds rel/target attributes when href starts with `http` or `mailto:`. */
  external?: boolean;
  /** Maximum pixel offset toward cursor. Default 6. */
  strength?: number;
};

const VARIANT_CLASSES: Record<NonNullable<MagneticButtonProps['variant']>, string> = {
  primary:
    'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40',
  secondary:
    'border border-slate-600 text-slate-200 hover:border-cyan-400 hover:text-cyan-400 bg-slate-900/40',
  ghost:
    'text-slate-200 hover:text-cyan-400',
};

/**
 * MagneticButton — premium CTA. On pointer move, applies a subtle transform
 * toward the cursor (capped at `strength` px). Includes a sheen sweep on hover
 * (.shimmer-sheen ::before) and respects prefers-reduced-motion.
 *
 * Use href with a leading `/` for internal routes (renders as next/link), or
 * a full URL / mailto: / tel: for external (renders as <a>).
 */
export default function MagneticButton({
  children,
  href,
  variant = 'primary',
  className = '',
  external,
  strength = 6,
}: MagneticButtonProps) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 20, mass: 0.4 });

  const handleMove = (e: ReactMouseEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left - rect.width / 2;
    const my = e.clientY - rect.top - rect.height / 2;
    // Normalize to -1..1 then scale to `strength`.
    x.set((mx / rect.width) * strength * 2);
    y.set((my / rect.height) * strength * 2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClasses =
    'relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shimmer-sheen';

  const finalClasses = `${baseClasses} ${VARIANT_CLASSES[variant]} ${className}`.trim();

  // Use Link for internal routes; <a> for everything else.
  const isInternal = href.startsWith('/') && !external;

  if (isInternal) {
    return (
      <Link href={href} legacyBehavior passHref>
        <motion.a
          className={finalClasses}
          style={{ x: springX, y: springY }}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        >
          <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.a
      href={href}
      className={finalClasses}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...(external || /^https?:\/\//.test(href)
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </motion.a>
  );
}
