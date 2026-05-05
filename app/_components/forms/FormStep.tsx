'use client';

import { ReactNode } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Send } from 'lucide-react';

/**
 * FormStep — generic step wrapper for multi-step forms.
 *
 * Provides:
 *  - Title + subhead slot
 *  - Children (the actual fields)
 *  - Back / Next / Submit buttons with consistent styling
 *  - Validation gate (caller passes `canAdvance`; Next is disabled until true)
 *  - Smooth slide-in transition between steps (honors reduced-motion)
 *
 * Caller owns field state. This is just the shell.
 */

interface FormStepProps {
  stepKey: string;
  title: string;
  subhead?: string;
  children: ReactNode;
  isFirst?: boolean;
  isLast?: boolean;
  canAdvance: boolean;
  isSubmitting?: boolean;
  onBack?: () => void;
  onNext?: () => void;
  onSubmit?: () => void;
  nextLabel?: string;
  submitLabel?: string;
  errorMessage?: string | null;
}

export default function FormStep({
  stepKey,
  title,
  subhead,
  children,
  isFirst = false,
  isLast = false,
  canAdvance,
  isSubmitting = false,
  onBack,
  onNext,
  onSubmit,
  nextLabel = 'Next',
  submitLabel = 'Submit',
  errorMessage,
}: FormStepProps) {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={stepKey}
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduceMotion ? undefined : { opacity: 0, y: -16 }}
        transition={
          reduceMotion ? { duration: 0 } : { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
        }
        className="space-y-6"
      >
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">{title}</h3>
          {subhead && (
            <p className="text-slate-400 mt-2 text-sm sm:text-base">{subhead}</p>
          )}
        </div>

        <div className="space-y-5">{children}</div>

        {errorMessage && (
          <div className="bg-red-950/40 border border-red-800/60 rounded-lg p-3 text-red-300 text-sm">
            {errorMessage}
          </div>
        )}

        <div className="flex items-center justify-between gap-4 pt-2">
          <button
            type="button"
            onClick={onBack}
            disabled={isFirst || isSubmitting}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          {isLast ? (
            <button
              type="button"
              onClick={onSubmit}
              disabled={!canAdvance || isSubmitting}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-glow-cyan transition-all duration-300 hover:from-cyan-400 hover:to-blue-400 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <Send className="w-4 h-4" />
              {isSubmitting ? 'Sending…' : submitLabel}
            </button>
          ) : (
            <button
              type="button"
              onClick={onNext}
              disabled={!canAdvance || isSubmitting}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-glow-cyan transition-all duration-300 hover:from-cyan-400 hover:to-blue-400 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {nextLabel}
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* Reusable field primitives used by the gamified forms. Kept in this file so
   the import surface stays small and the styling stays consistent. */

interface FieldShellProps {
  label: string;
  htmlFor?: string;
  optional?: boolean;
  error?: string | null;
  hint?: string;
  children: ReactNode;
}

export function FieldShell({ label, htmlFor, optional, error, hint, children }: FieldShellProps) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="text-sm font-medium text-slate-200 mb-1.5 flex items-center gap-2">
        {label}
        {optional && <span className="text-xs text-slate-500 font-normal">(optional)</span>}
      </span>
      {children}
      {hint && !error && <span className="block mt-1 text-xs text-slate-500">{hint}</span>}
      {error && <span className="block mt-1 text-xs text-red-400">{error}</span>}
    </label>
  );
}

const inputBase =
  'w-full bg-slate-900/60 border border-slate-700/60 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 transition-all';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export function TextInput({ invalid, className = '', ...props }: TextInputProps) {
  return (
    <input
      {...props}
      className={`${inputBase} ${
        invalid ? 'border-red-500/50 focus:border-red-500/70 focus:ring-red-500/20' : ''
      } ${className}`}
    />
  );
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

export function TextArea({ invalid, className = '', ...props }: TextAreaProps) {
  return (
    <textarea
      {...props}
      className={`${inputBase} resize-y min-h-[96px] ${
        invalid ? 'border-red-500/50 focus:border-red-500/70 focus:ring-red-500/20' : ''
      } ${className}`}
    />
  );
}

interface ChipOption {
  value: string;
  label: string;
}

interface ChipPickerProps {
  options: ChipOption[];
  value: string | string[];
  multi?: boolean;
  onChange: (next: string | string[]) => void;
}

export function ChipPicker({ options, value, multi = false, onChange }: ChipPickerProps) {
  const selectedSet = new Set(Array.isArray(value) ? value : value ? [value] : []);
  const toggle = (val: string) => {
    if (multi) {
      const next = new Set(selectedSet);
      if (next.has(val)) next.delete(val);
      else next.add(val);
      onChange(Array.from(next));
    } else {
      onChange(val);
    }
  };
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(opt => {
        const selected = selectedSet.has(opt.value);
        return (
          <button
            type="button"
            key={opt.value}
            onClick={() => toggle(opt.value)}
            className={`px-4 py-2 text-sm font-medium rounded-full border transition-all ${
              selected
                ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/60 text-cyan-300 shadow-glow-cyan'
                : 'bg-slate-900/60 border-slate-700/60 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-200'
            }`}
            aria-pressed={selected}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
