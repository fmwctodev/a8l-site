import type { ReactNode } from 'react';

type Variant = 'hover' | 'glow' | 'flat';

type PremiumCardProps = {
  children: ReactNode;
  /**
   * Visual treatment.
   * - `hover` (default): default border, hover lifts, gains cyan glow + cyan border, scales 1.01
   * - `glow`: always-on cyan glow + brighter border
   * - `flat`: no hover state at all
   */
  variant?: Variant;
  /** Tailwind override / addition. */
  className?: string;
  /** Render as a different element. */
  as?: 'div' | 'article' | 'section' | 'li' | 'a';
  /** Forwarded only when as='a'. */
  href?: string;
};

/**
 * PremiumCard — unified card visual used across every section. Glass-morphic
 * gradient background, slate border, optional hover lift + cyan glow.
 *
 * Server component — does not import framer-motion. Wrap in <Stagger> /
 * <StaggerItem> when you want entrance motion.
 */
export default function PremiumCard({
  children,
  variant = 'hover',
  className = '',
  as = 'div',
  href,
}: PremiumCardProps) {
  const base =
    'relative bg-gradient-to-br from-slate-900/60 to-slate-900/30 backdrop-blur-sm border rounded-xl overflow-hidden';

  const variantClasses = {
    hover:
      'border-slate-800 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-glow-cyan hover:-translate-y-0.5 hover:bg-gradient-to-br hover:from-slate-900/70 hover:to-slate-900/40',
    glow: 'border-cyan-500/30 shadow-glow-cyan',
    flat: 'border-slate-800',
  }[variant];

  const classes = `${base} ${variantClasses} ${className}`.trim();

  if (as === 'a' && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  const Comp = as as 'div';
  return <Comp className={classes}>{children}</Comp>;
}
