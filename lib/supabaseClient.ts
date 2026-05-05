import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/**
 * Lazy singleton of the public a8l-os Supabase client.
 *
 * This client uses the anon key — only suitable for operations that the
 * RLS policies allow anonymous users to perform: form submissions via
 * Edge Function, file uploads to public buckets, etc. Anything that
 * needs service-role access goes through an Edge Function.
 *
 * Env vars are checked at call time (not import time) so SSR doesn't
 * crash if NEXT_PUBLIC_SUPABASE_URL isn't set in a particular environment.
 */

let client: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient | null {
  if (client) return client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return null;

  client = createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return client;
}
