import { createClient, type SupabaseClient } from '@supabase/supabase-js';

// Server-side Supabase client for the BLOG project.
//
// The marketing site spans TWO Supabase projects:
//   1. a8l-os (uscpncgnkmjirbrpidgu) — backs form submissions via the
//      `form-submit` Edge Function. Its anon key is in
//      NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY (used by
//      lib/supabaseClient.ts and app/_components/forms/useA8LOSFormSubmit.ts).
//   2. blog (kspcfjjrlgquzheokdtl) — hosts `blog_posts`. THIS file is the
//      client for that project. Reads NEXT_PUBLIC_BLOG_SUPABASE_URL /
//      NEXT_PUBLIC_BLOG_SUPABASE_ANON_KEY first.
//
// Fallback chain keeps the prior single-project deployments working:
//   NEXT_PUBLIC_BLOG_SUPABASE_URL → NEXT_PUBLIC_SUPABASE_URL → VITE_SUPABASE_URL
//
// If the blog-specific vars aren't set, we silently fall back to the generic
// vars. That's why /blog was returning empty in production — the generic vars
// pointed at a8l-os, which has no blog_posts table.
//
// Lazily instantiated so a missing env var during local development doesn't
// crash the Next.js build — callers fall back to empty data and log a warning.

const url =
  process.env.NEXT_PUBLIC_BLOG_SUPABASE_URL ??
  process.env.NEXT_PUBLIC_SUPABASE_URL ??
  process.env.VITE_SUPABASE_URL;
const anon =
  process.env.NEXT_PUBLIC_BLOG_SUPABASE_ANON_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  process.env.VITE_SUPABASE_ANON_KEY;

let client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (client) return client;
  if (!url || !anon) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn(
        '[supabase] NEXT_PUBLIC_BLOG_SUPABASE_URL/KEY (preferred) or ' +
          'NEXT_PUBLIC_SUPABASE_URL/KEY is not set. ' +
          'Blog content will be empty until env vars are configured.',
      );
    }
    return null;
  }
  client = createClient(url, anon, { auth: { persistSession: false } });
  return client;
}
