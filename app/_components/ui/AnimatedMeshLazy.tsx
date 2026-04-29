'use client';

// Lazy wrapper around AnimatedMesh. Used by app/layout.tsx so the framer-motion
// + animated radial blob bundle is dynamically imported AFTER first paint
// instead of being eagerly bundled with the root layout. The mesh is purely
// decorative — it sits behind every page section via z-index: -1, never
// intercepts clicks, and doesn't affect what an AI crawler or screen reader
// reads. Deferring it strips ~25 KB + a chunk of main-thread hydration cost
// off LCP/TBT per the 2026-04-29 PageSpeed audit.
//
// `ssr: false` means the mesh never renders server-side. The first paint
// shows the slate-950 body background; the mesh fades in once the chunk
// arrives client-side. Imperceptible visually; significant for perf.

import dynamic from 'next/dynamic';

const AnimatedMesh = dynamic(() => import('./AnimatedMesh'), {
  ssr: false,
  loading: () => null,
});

export default AnimatedMesh;
