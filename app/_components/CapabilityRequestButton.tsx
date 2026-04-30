'use client';

import React from 'react';
import { Download } from 'lucide-react';
import { useCapabilityStatementModal } from './CapabilityStatementModal';

/**
 * CapabilityRequestButton — drop-in replacement for every "Download capability
 * statement" CTA across the site. Opens the global CapabilityStatementModal
 * (provided by CapabilityStatementModalProvider in app/layout.tsx) instead
 * of navigating to the PDF directly. Submitting the modal form triggers the
 * SendGrid email + instant local download.
 *
 * Variants match the two button styles previously used inline:
 *   - "primary"   — gradient pill (used in the on-page CTA blocks).
 *   - "secondary" — outlined glass pill (used in Hero + ghost contexts).
 *
 * Pass `className` for one-off overrides; pass `children` to override the
 * default label "Download capability statement". Pass `showIcon={false}` to
 * suppress the lucide Download icon.
 */
type Variant = 'primary' | 'secondary';

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30',
  secondary:
    'border border-slate-600 bg-slate-900/40 text-slate-200 backdrop-blur-sm hover:border-cyan-400 hover:text-white hover:bg-slate-900/60',
};

interface CapabilityRequestButtonProps {
  variant?: Variant;
  className?: string;
  children?: React.ReactNode;
  showIcon?: boolean;
  iconClassName?: string;
}

export default function CapabilityRequestButton({
  variant = 'primary',
  className = '',
  children,
  showIcon = true,
  iconClassName = 'w-5 h-5',
}: CapabilityRequestButtonProps) {
  const { open } = useCapabilityStatementModal();

  return (
    <button
      type="button"
      onClick={open}
      className={`group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold transition-all min-h-[48px] ${VARIANTS[variant]} ${className}`}
    >
      {showIcon && <Download className={iconClassName} />}
      <span>{children ?? 'Download capability statement'}</span>
    </button>
  );
}
