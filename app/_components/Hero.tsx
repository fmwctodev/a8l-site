'use client';
import { ArrowRight, Download } from 'lucide-react';
import { HeroScene, MagneticButton, Reveal } from './ui';

/**
 * Hero — LOCKED v3 §"Final Homepage Copy" §1.
 *
 * The Spline embed has been replaced with the bespoke <HeroScene /> component
 * (layered SVG/CSS with parallax). Headline, subhead, CTAs, and subcopy all
 * fade-and-rise in sequence via <Reveal> with staggered delays. Primary CTA
 * uses <MagneticButton> for the cursor-tracking premium feel.
 */
const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Layered SVG/CSS scene replaces the Spline embed. */}
      <HeroScene />

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <Reveal as="div" delay={0}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Custom AI, Automation &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Compliance Engineering
              </span>
              <span className="block text-2xl md:text-4xl lg:text-5xl mt-3 text-slate-200 font-semibold">
                — Built for Audit From Day One
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              We build custom AI agents, workflow automation, and LLM systems for mid-market
              companies in regulated industries — engineered to commercial speed, documented to
              federal standards.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            {/* Trust bar removed from hero per stakeholder direction. The same
                veteran-owned / SDVOSB / federal-registration signals appear in
                the footer trust band, capability statement, and Organization
                JSON-LD, so search/AI surfaces still pick them up. */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <MagneticButton href="/schedule-consultation" variant="primary">
                Schedule a discovery call
                <ArrowRight className="w-5 h-5" />
              </MagneticButton>
              <MagneticButton href="/capability-statement" variant="secondary">
                <Download className="w-4 h-4" />
                Download capability statement
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={0.36}>
            <p className="text-sm text-slate-400 mt-6 max-w-3xl mx-auto">
              30-minute call. We&apos;ll talk through your environment, your priority, and tell you
              whether we&apos;re a fit — even if the answer is &quot;you need a different vendor.&quot;
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
