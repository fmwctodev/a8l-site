'use client';

// Lazy wrapper around HeroScene. Used by app/_components/Hero.tsx (now a
// server component for fast LCP) so the framer-motion parallax bundle can
// still be code-split via next/dynamic with ssr:false.
//
// `ssr: false` is only allowed in client components, hence this wrapper.
// The underlying HeroScene is decorative — pure visual layered SVG/CSS
// behind the H1 + CTAs. Deferring it lets the H1 text paint server-side
// on first byte without waiting for framer-motion to hydrate.

import dynamic from 'next/dynamic';

const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => null,
});

export default HeroScene;
