import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

// Dynamic Open Graph image for every page on the site. Per the Implementation
// Plan §4.4 — every URL gets a unique 1200×630 PNG so LinkedIn / X / Slack
// previews look intentional, not generic logo fallback.
//
// Wire from any page via:
//   metadata.openGraph.images = [{
//     url: '/api/og?title=Custom+LLM+Systems+for+Regulated+Data&section=Solutions',
//     width: 1200, height: 630,
//   }]
//
// Query params:
//   title    — required. The page's H1, max 8 words / 80 chars to fit comfortably.
//   section  — optional. Eyebrow label above the title (e.g. "Solutions", "Industries", "Blog").
//
// Edge runtime keeps cold starts under 100ms. Output is cached at the CDN
// for 24h via the Cache-Control header below; updating a title forces a new
// URL (different query string) so cache invalidation is automatic.

export const runtime = 'edge';

const FALLBACK_TITLE = 'Custom AI, Automation & Compliance Engineering';
const FALLBACK_SECTION = 'Autom8ion Lab';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get('title') ?? FALLBACK_TITLE).slice(0, 120);
  const section = (searchParams.get('section') ?? FALLBACK_SECTION).slice(0, 40);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px 96px',
          background:
            'linear-gradient(135deg, #020617 0%, #0F172A 40%, #082F49 80%, #020617 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Top: brand row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            fontSize: '32px',
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 800,
              color: '#020617',
            }}
          >
            A8
          </div>
          <span style={{ color: '#E2E8F0' }}>Autom8ion Lab</span>
        </div>

        {/* Middle: section eyebrow + title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              fontSize: '24px',
              fontWeight: 500,
              color: '#22D3EE',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
            }}
          >
            {section}
          </div>
          <div
            style={{
              fontSize: title.length > 60 ? '64px' : '76px',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#F8FAFC',
              maxWidth: '950px',
            }}
          >
            {title}
          </div>
        </div>

        {/* Bottom: proof bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            fontSize: '22px',
            color: '#94A3B8',
          }}
        >
          <span style={{ color: '#22D3EE' }}>Veteran-Owned</span>
          <span>·</span>
          <span>SDVOSB Pending</span>
          <span>·</span>
          <span>30-Day Launches</span>
          <span>·</span>
          <span style={{ color: '#22D3EE' }}>autom8ionlab.com</span>
        </div>

        {/* Decorative accent — subtle grid + scan line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '320px',
            height: '320px',
            background:
              'radial-gradient(circle at 100% 0%, rgba(34, 211, 238, 0.18) 0%, transparent 70%)',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        'Cache-Control': 'public, max-age=86400, s-maxage=86400, immutable',
      },
    },
  );
}
