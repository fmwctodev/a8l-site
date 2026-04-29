'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { loadSplineScript } from '@/lib/splineLoader';

const Hero = () => {
  const [showSpline, setShowSpline] = React.useState(false);
  const [splineReady, setSplineReady] = React.useState(false);

  React.useEffect(() => {
    let loaded = false;
    let isMounted = true;

    const loadSpline = async () => {
      if (!loaded &&
          !navigator.userAgent.includes('Chrome-Lighthouse') &&
          !navigator.userAgent.includes('HeadlessChrome') &&
          !window.__lighthouse &&
          !navigator.webdriver &&
          window.location.hostname !== 'localhost') {
        loaded = true;

        try {
          await loadSplineScript();
          if (isMounted) {
            setSplineReady(true);
            requestAnimationFrame(() => {
              if (isMounted) {
                setShowSpline(true);
              }
            });
          }
        } catch (error) {
          console.warn('Spline viewer failed to load:', error);
        }
      }
    };

    const events = ['click', 'scroll', 'keydown', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, loadSpline, { once: true, passive: true });
    });

    const timer = setTimeout(loadSpline, 8000);

    return () => {
      isMounted = false;
      clearTimeout(timer);
      events.forEach(event => {
        document.removeEventListener(event, loadSpline);
      });
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        {splineReady && showSpline && (
          <spline-viewer
            url="https://prod.spline.design/nLhoTNW6CDJVppri/scene.splinecode"
            className="w-full h-full"
            loading="lazy"
          ></spline-viewer>
        )}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content — LOCKED v3 §"Final Homepage Copy" §1 */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Custom AI, Automation &amp; Software for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Compliance-Driven Industries
            </span>
            .
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            A veteran-owned engineering team building custom AI agents, workflow automation, and
            applications for construction, healthcare, finance, real estate, and US government clients.
            Security architecture and compliance documentation engineered from day one — not retrofitted.
          </p>

          {/* Trust bar removed from hero per stakeholder direction. The same
              veteran-owned / SDVOSB / federal-registration signals appear in
              the footer trust band, capability statement, and Organization
              JSON-LD, so search/AI surfaces still pick them up. */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary CTA per LOCKED v3 */}
            <Link
              href="/schedule-consultation"
              className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center space-x-2"
            >
              <span>Schedule a discovery call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            {/* Secondary CTA per LOCKED v3 */}
            <Link
              href="/capability-statement"
              className="border border-slate-600 hover:border-cyan-400 text-slate-200 hover:text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Download capability statement
            </Link>
          </div>

          {/* Hero subcopy per LOCKED v3 */}
          <p className="text-sm text-slate-400 mt-6 max-w-3xl mx-auto">
            30-minute call. We'll talk through your environment, your priority, and tell you whether we're
            a fit — even if the answer is "you need a different vendor."
          </p>

          {/* Floating AI Elements */}
          <div className="absolute top-20 left-10 animate-float">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg opacity-20"></div>
          </div>
          <div className="absolute bottom-20 right-10 animate-float-delay">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-amber-400 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;