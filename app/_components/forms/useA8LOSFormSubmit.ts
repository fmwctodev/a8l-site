'use client';

import { useCallback, useState } from 'react';

/**
 * Posts a form submission to the a8l-os public form-submit Edge Function.
 *
 * The Edge Function (supabase/functions/form-submit/index.ts) accepts both
 * `/form-submit/{slug}` and `/form-submit` with `{formId}` in the body — we
 * use the slug variant so the marketing site only needs to know the form's
 * stable public_slug, never a UUID.
 *
 * Env vars (set in Netlify):
 *   NEXT_PUBLIC_SUPABASE_URL       — a8l-os production Supabase URL
 *   NEXT_PUBLIC_SUPABASE_ANON_KEY  — public anon key
 *
 * Edge Function uses its service-role key internally for the actual writes;
 * the anon key is only required because Supabase rejects unauthenticated
 * requests at the gateway level.
 */

interface SubmitResult {
  success: boolean;
  message?: string;
  submission_id?: string;
  contact_id?: string | null;
  opportunity_id?: string | null;
  duplicate?: boolean;
}

interface UseA8LOSFormSubmitState {
  loading: boolean;
  error: string | null;
  result: SubmitResult | null;
}

export function useA8LOSFormSubmit(slug: string) {
  const [state, setState] = useState<UseA8LOSFormSubmitState>({
    loading: false,
    error: null,
    result: null,
  });

  const submit = useCallback(
    async (data: Record<string, unknown>): Promise<SubmitResult> => {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !anonKey) {
        const msg =
          'Form is not yet configured. Email info@autom8ionlab.com or call +1 855-439-0072.';
        setState({ loading: false, error: msg, result: null });
        return { success: false, message: msg };
      }

      setState({ loading: true, error: null, result: null });

      try {
        const url = `${supabaseUrl}/functions/v1/form-submit/${encodeURIComponent(slug)}`;
        const idempotencyKey =
          (typeof crypto !== 'undefined' && 'randomUUID' in crypto
            ? crypto.randomUUID()
            : `${Date.now()}-${Math.random().toString(36).slice(2)}`);

        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${anonKey}`,
            apikey: anonKey,
          },
          body: JSON.stringify({
            data: {
              ...data,
              _idempotency_key: idempotencyKey,
              landing_page:
                typeof window !== 'undefined' ? window.location.pathname : undefined,
              referrer:
                typeof document !== 'undefined' ? document.referrer : undefined,
            },
          }),
        });

        const json = (await res.json().catch(() => ({}))) as Partial<SubmitResult> & {
          error?: string;
        };

        if (!res.ok) {
          const errMsg = json.error || `Submission failed (HTTP ${res.status})`;
          setState({ loading: false, error: errMsg, result: null });
          return { success: false, message: errMsg };
        }

        const result: SubmitResult = {
          success: Boolean(json.success ?? true),
          message: json.message,
          submission_id: json.submission_id,
          contact_id: json.contact_id ?? null,
          opportunity_id: json.opportunity_id ?? null,
          duplicate: json.duplicate,
        };
        setState({ loading: false, error: null, result });
        return result;
      } catch (err) {
        const msg =
          err instanceof Error
            ? err.message
            : 'Network error. Please try again or email info@autom8ionlab.com.';
        setState({ loading: false, error: msg, result: null });
        return { success: false, message: msg };
      }
    },
    [slug]
  );

  return { ...state, submit };
}
