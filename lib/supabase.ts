import { createClient, type SupabaseClient } from '@supabase/supabase-js';

// Server-side Supabase client. Used during SSG/ISR by the blog routes and any
// data-fetching server components. Never imported into client components.
//
// Reads both NEXT_PUBLIC_* (preferred) and VITE_* (legacy from the previous Vite
// SPA) so existing Netlify env vars keep working without a rename.
//
// Lazily instantiated so a missing env var during local development doesn't
// crash the Next.js build — callers fall back to empty data and log a warning.

const url =
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.VITE_SUPABASE_URL;
const anon =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.VITE_SUPABASE_ANON_KEY;

let client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (client) return client;
  if (!url || !anon) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn(
        '[supabase] NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY is not set. ' +
          'Blog content will be empty until env vars are configured.',
      );
    }
    return null;
  }
  client = createClient(url, anon, { auth: { persistSession: false } });
  return client;
}
