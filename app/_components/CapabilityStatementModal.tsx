'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Download,
  FileText,
  Loader2,
  Mail,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import { conversionEvents } from '@/lib/analytics';
import CelebrationBurst from './ui/CelebrationBurst';

/**
 * CapabilityStatementModal — global popup form replacing the old footer-embedded
 * "Request our capability statement" form. Any "Download capability statement"
 * CTA across the site triggers this modal via the `useCapabilityStatementModal`
 * hook (provided sitewide by `CapabilityStatementModalProvider` in
 * app/layout.tsx).
 *
 * Submission flow is identical to the original Footer handler so SendGrid +
 * Netlify Forms integrations stay unchanged:
 *   1. POST to /__forms.html (Netlify Forms registration via public/__forms.html)
 *   2. POST to /.netlify/functions/capabilities-webhook (SendGrid + Supabase
 *      Storage — emails the PDF as an attachment + links to /schedule-consultation)
 *   3. Fire `formSubmitCapability` + `downloadCapabilityPdf` GA4 events
 *   4. Trigger an instant local PDF download via a hidden anchor click
 *   5. Show inline success state with a CTA to /schedule-consultation
 *      (no full-page redirect — keeps the modal context for context).
 *
 * Aesthetic matches the rest of the site (slate-950 base + cyan-400/blue-400
 * gradient accents). Honors prefers-reduced-motion.
 */

// ----- Context ---------------------------------------------------------------

interface CapabilityStatementModalContextValue {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

const CapabilityStatementModalContext =
  createContext<CapabilityStatementModalContextValue | null>(null);

export function useCapabilityStatementModal() {
  const ctx = useContext(CapabilityStatementModalContext);
  if (!ctx) {
    throw new Error(
      'useCapabilityStatementModal must be used inside CapabilityStatementModalProvider'
    );
  }
  return ctx;
}

// ----- Provider --------------------------------------------------------------

export function CapabilityStatementModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ open, close, isOpen }), [open, close, isOpen]);

  return (
    <CapabilityStatementModalContext.Provider value={value}>
      {children}
      <CapabilityStatementModal isOpen={isOpen} onClose={close} />
    </CapabilityStatementModalContext.Provider>
  );
}

// ----- Modal -----------------------------------------------------------------

interface CapabilityStatementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function CapabilityStatementModal({ isOpen, onClose }: CapabilityStatementModalProps) {
  const reduceMotion = useReducedMotion();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // ESC + body scroll lock + focus on first field when opened.
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Defer focus until after enter animation begins so motion doesn't fight us.
    const t = window.setTimeout(() => firstFieldRef.current?.focus(), 80);

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(t);
    };
  }, [isOpen, onClose]);

  // Reset state when the modal is reopened after a successful submission.
  useEffect(() => {
    if (isOpen) {
      setSubmitError(false);
      // Don't auto-clear hasSubmitted — keep the success state if the user reopens.
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company') ?? '',
    };

    try {
      // 1. Netlify Forms registration — required by @netlify/plugin-nextjs v5.
      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      // 2. SendGrid + Supabase Storage webhook — emails PDF + booking link.
      try {
        const response = await fetch('/.netlify/functions/capabilities-webhook', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error('Webhook error response:', errorData);
          setSubmitError(true);
        }
      } catch (webhookError) {
        console.error('Webhook execution failed:', webhookError);
        setSubmitError(true);
      }

      // 3. GA4 conversion events — fire BEFORE download so the click registers
      //    even if the PDF download cancels the navigation.
      conversionEvents.formSubmitCapability();
      conversionEvents.downloadCapabilityPdf();

      // 4. Instant local PDF download.
      const downloadLink = document.createElement('a');
      downloadLink.href = '/downloads/Autom8ion_Lab_Capabilities_Statement.pdf';
      downloadLink.download = 'Autom8ion_Lab_Capabilities_Statement.pdf';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      // 5. Show inline success state. No redirect — keeps the modal context.
      setHasSubmitted(true);
      setIsSubmitting(false);
    } catch (error) {
      console.error('Form submission failed:', error);
      setSubmitError(true);
      setIsSubmitting(false);
    }
  };

  const overlayMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.18, ease: 'easeOut' as const },
      };

  const panelMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24, scale: 0.97 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 16, scale: 0.98 },
        transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
      };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          {...overlayMotion}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          aria-modal="true"
          role="dialog"
          aria-labelledby="capability-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          {/* Backdrop with subtle gradient — distinct from generic black wash. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
          />
          {/* Faint cyan vignette behind the panel for premium depth. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5"
          />

          <motion.div
            {...panelMotion}
            className="relative z-10 w-full max-w-xl bg-slate-900/95 border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-500/10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated gradient sheen along the top — matches CapabilityStatementCTA. */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none bg-gradient-to-br from-cyan-500/[0.04] via-transparent to-blue-500/[0.04]"
            />

            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-20 inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-slate-700 hover:border-cyan-400/50 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative p-6 sm:p-8">
              {hasSubmitted ? (
                <SuccessState onClose={onClose} />
              ) : (
                <FormState
                  onSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                  submitError={submitError}
                  firstFieldRef={firstFieldRef}
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ----- Subviews --------------------------------------------------------------

function FormState({
  onSubmit,
  isSubmitting,
  submitError,
  firstFieldRef,
}: {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
  submitError: boolean;
  firstFieldRef: React.Ref<HTMLInputElement>;
}) {
  return (
    <>
      <div className="mb-5 flex items-center gap-2">
        <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30">
          <FileText className="w-4 h-4 text-cyan-300" />
        </span>
        <span className="text-cyan-300 text-[11px] font-semibold tracking-[0.18em] uppercase">
          Capability Statement · v3 · 2026
        </span>
      </div>

      <h2
        id="capability-modal-title"
        className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight"
      >
        Request our{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          capability statement
        </span>
      </h2>

      <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-5">
        Add Autom8ion Lab to your vendor list, qualified vendor pool, or prime/sub team. Enter
        your details — we&apos;ll email the latest version (PDF) and a link to schedule a
        capability briefing.
      </p>

      {/* Trust strip — anchors the SDVOSB / federal-contractor signal. */}
      <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium text-slate-400">
        <span className="inline-flex items-center gap-1.5 text-cyan-300">
          <ShieldCheck className="w-3.5 h-3.5" />
          SDVOSB Certified
        </span>
        <span className="text-slate-600">·</span>
        <span>SBA Certified</span>
        <span className="text-slate-600">·</span>
        <span className="font-mono text-slate-500">UEI YY2DR3KSENH7</span>
        <span className="text-slate-600">·</span>
        <span className="font-mono text-slate-500">CAGE 9YCS7</span>
      </div>

      {submitError && (
        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/40 rounded-lg text-red-300 text-sm">
          Something went wrong on our end. Your download should still have started — if not,
          please email{' '}
          <a href="mailto:info@autom8ionlab.com" className="underline hover:text-red-200">
            info@autom8ionlab.com
          </a>
          .
        </div>
      )}

      <form
        onSubmit={onSubmit}
        name="capabilities-statement"
        data-netlify="true"
        className="space-y-3"
      >
        <input type="hidden" name="form-name" value="capabilities-statement" />
        {/* Honeypot for Netlify spam filter. */}
        <p className="hidden">
          <label>
            Don&apos;t fill this out: <input name="bot-field" />
          </label>
        </p>

        <div>
          <label htmlFor="cap-modal-name" className="sr-only">
            Name
          </label>
          <input
            ref={firstFieldRef}
            type="text"
            id="cap-modal-name"
            name="name"
            placeholder="Your name"
            required
            autoComplete="name"
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg bg-slate-950/60 text-white placeholder-slate-500 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/60 focus:border-cyan-400/60 disabled:opacity-50 disabled:cursor-not-allowed text-base transition-colors"
          />
        </div>
        <div>
          <label htmlFor="cap-modal-email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="cap-modal-email"
            name="email"
            placeholder="Work email"
            required
            autoComplete="email"
            inputMode="email"
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg bg-slate-950/60 text-white placeholder-slate-500 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/60 focus:border-cyan-400/60 disabled:opacity-50 disabled:cursor-not-allowed text-base transition-colors"
          />
        </div>
        <div>
          <label htmlFor="cap-modal-company" className="sr-only">
            Company / Agency (optional)
          </label>
          <input
            type="text"
            id="cap-modal-company"
            name="company"
            placeholder="Company / Agency (optional)"
            autoComplete="organization"
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg bg-slate-950/60 text-white placeholder-slate-500 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/60 focus:border-cyan-400/60 disabled:opacity-50 disabled:cursor-not-allowed text-base transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 disabled:opacity-60 disabled:cursor-not-allowed min-h-[48px] touch-manipulation"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending PDF…
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              Send PDF + start download
            </>
          )}
        </button>
      </form>

      <p className="mt-4 text-xs text-slate-500 leading-relaxed">
        We&apos;ll email you the PDF and a link to book a 30-minute capability briefing — no
        spam, no list-rental, no follow-up sequence.
      </p>
    </>
  );
}

function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <div className="relative text-center py-4">
      {/* Celebration burst — subtle particle ring on success. */}
      <div className="relative h-24 mb-4 flex items-center justify-center">
        <CelebrationBurst />
        <span className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/40">
          <CheckCircle2 className="w-8 h-8 text-cyan-300" />
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 flex items-center justify-center gap-2">
        <Sparkles className="w-5 h-5 text-cyan-400" />
        Your download is starting
      </h2>

      <p className="text-slate-300 mb-2 leading-relaxed">
        We&apos;ve also emailed you the PDF and a link to book a capability briefing.
      </p>
      <p className="text-slate-500 text-sm mb-6 inline-flex items-center justify-center gap-1.5">
        <Mail className="w-3.5 h-3.5" />
        Check your inbox (or spam) — sender is <span className="text-slate-400">info@autom8ionlab.com</span>
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/schedule-consultation"
          onClick={onClose}
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all min-h-[48px]"
        >
          Schedule a capability briefing
          <ArrowRight className="w-4 h-4" />
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors min-h-[48px]"
        >
          Close
        </button>
      </div>
    </div>
  );
}
