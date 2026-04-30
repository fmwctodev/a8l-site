import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import HeroScene from './ui/HeroSceneLazy';
import CapabilityRequestButton from './CapabilityRequestButton';

/**
 * Hero — LOCKED v3 §"Final Homepage Copy" §1.
 *
 * REWRITTEN for performance per the 2026-04-29 PageSpeed audit. The previous
 * implementation wrapped the H1, subhead, and CTAs in framer-motion `<Reveal>`
 * blocks that set `initial={ opacity: 0 }`. That meant every above-the-fold
 * element was invisible until framer-motion finished hydrating — pushing
 * mobile LCP to 6.9s.
 *
 * The new implementation:
 *   - Server-renders all hero content with full opacity from the first byte
 *     (no JS hydration required to make the H1 visible).
 *   - Uses pure-CSS keyframe animations (`fade-up`, `fade-up-delay-N`) for
 *     the layered fade-in effect. CSS keyframes start animating BEFORE
 *     framer-motion would have hydrated, so the perceived motion is faster
 *     AND the H1 is paintable immediately.
 *   - Replaces framer-motion `<MagneticButton>` with plain Next.js `<Link>`
 *     styled to match. The cursor-tracking magnetic effect adds a few KB of
 *     framer-motion main-thread work for an above-the-fold element that
 *     Lighthouse measures cold; the visual difference is imperceptible.
 *
 * No `'use client'` directive — this component is now SSR-only. HeroScene
 * still runs client-side via dynamic import.
 */
const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Layered SVG/CSS scene replaces the Spline embed. */}
      <HeroScene />

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="fade-up text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Custom AI, Automation &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Compliance Engineering
            </span>
            <span className="block text-2xl md:text-4xl lg:text-5xl mt-3 text-slate-200 font-semibold">
              — Built for Audit From Day One
            </span>
          </h1>

          <p className="fade-up fade-up-delay-1 text-lg md:text-xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            We build custom AI agents, workflow automation, and LLM systems for mid-market
            companies in regulated industries — engineered to commercial speed, documented to
            federal standards.
          </p>

          <div className="fade-up fade-up-delay-2 mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/schedule-consultation"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:from-blue-700 hover:to-cyan-600 hover:shadow-xl hover:shadow-cyan-500/30 min-h-[48px]"
            >
              Schedule a discovery call
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <CapabilityRequestButton
              variant="secondary"
              className="px-8 py-4"
              iconClassName="w-4 h-4"
            />

          </div>

          <p className="fade-up fade-up-delay-3 text-sm text-slate-400 mt-6 max-w-3xl mx-auto">
            30-minute call. We&apos;ll talk through your environment, your priority, and tell you
            whether we&apos;re a fit — even if the answer is &quot;you need a different vendor.&quot;
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
