import { revalidatePath, revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

/**
 * On-demand ISR revalidation endpoint.
 *
 * The /blog index and every /blog/[slug] page are statically generated at
 * build time and revalidated by ISR on a 60-second timer. Netlify's edge
 * cache wraps that, so even after Supabase content lands the live site can
 * keep serving the stale build for hours unless something explicitly busts
 * the cache.
 *
 * This route lets the Supabase migration GitHub Action (or a manual curl
 * call after writing to blog_posts) ask Next.js to drop its cache for the
 * affected blog paths. Netlify's Durable Cache key is part of Next.js's
 * own ISR cache key, so this is enough — no separate Netlify purge call.
 *
 * Usage:
 *   POST /api/revalidate?token=<secret>             (revalidates /blog index)
 *   POST /api/revalidate?token=<secret>&path=<path>  (revalidates one path)
 *   POST /api/revalidate?token=<secret>&slug=<slug>  (revalidates one post)
 *
 * Token must match REVALIDATE_TOKEN in the Netlify env.
 */

export const dynamic = 'force-dynamic';

function unauthorized() {
  return NextResponse.json({ revalidated: false, reason: 'unauthorized' }, { status: 401 });
}

async function handle(request: Request) {
  const expected = process.env.REVALIDATE_TOKEN;
  if (!expected) {
    return NextResponse.json(
      { revalidated: false, reason: 'REVALIDATE_TOKEN not configured' },
      { status: 500 },
    );
  }

  const url = new URL(request.url);
  const token = url.searchParams.get('token') ?? request.headers.get('x-revalidate-token');
  if (token !== expected) return unauthorized();

  const path = url.searchParams.get('path');
  const slug = url.searchParams.get('slug');
  const revalidated: string[] = [];

  if (slug) {
    revalidatePath(`/blog/${slug}`);
    revalidated.push(`/blog/${slug}`);
  }

  if (path) {
    revalidatePath(path);
    revalidated.push(path);
  }

  // Default: refresh the blog index. Always do this on a no-arg call so a
  // dumb webhook with no payload still does the right thing.
  if (!slug && !path) {
    revalidatePath('/blog');
    revalidated.push('/blog');
  }

  return NextResponse.json({ revalidated, now: Date.now() });
}

export async function POST(request: Request) {
  return handle(request);
}

// Allow GET for easy manual testing / curl. Same token guard applies.
export async function GET(request: Request) {
  return handle(request);
}
