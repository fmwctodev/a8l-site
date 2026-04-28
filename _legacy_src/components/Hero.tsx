import React from 'react';
import { ArrowRight, Zap, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { loadSplineScript } from '../utils/splineLoader';

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

      {/* Header Navigation */}
      <Header />

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Custom AI, Automation & Software — <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Engineered for CMMC, NIST, HIPAA, and SOC 2</span> Environments
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            A veteran-owned engineering team building AI agents, workflow automation, and custom applications for federal agencies, defense contractors, healthcare systems, and financial institutions. Security architecture and compliance documentation are the foundation, not the afterthought.
          </p>

          {/* Trust bar */}
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-xs md:text-sm text-cyan-300 mb-10 max-w-4xl mx-auto">
            <span className="px-3 py-1 bg-slate-800/60 border border-slate-700 rounded-full">Veteran-Owned</span>
            <span className="px-3 py-1 bg-slate-800/60 border border-slate-700 rounded-full">SDVOSB Certification Pending</span>
            <span className="px-3 py-1 bg-slate-800/60 border border-slate-700 rounded-full">Registered Federal Contractor · UEI: YY2DR3KSENH7 · CAGE: 9YCS7</span>
            <span className="px-3 py-1 bg-slate-800/60 border border-slate-700 rounded-full">Florida & Montreal</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/capability-statement"
              className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center space-x-2"
            >
              <span>Request our capability statement</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/schedule-consultation"
              className="border border-slate-600 hover:border-cyan-400 text-slate-200 hover:text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Schedule a capability briefing (30 min)
            </Link>
          </div>

          <p className="text-sm text-slate-400 mt-6 max-w-3xl mx-auto">
            No-pressure briefing. We'll walk through your compliance environment, your top automation, software, or AI priority, and tell you whether we're a fit — even if the answer is "you need a different vendor."
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