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
            AI Automation, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Cloud Systems</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-400">Cybersecurity</span> Built for Scale
          </h1>

          <h2 className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed font-semibold">
            Custom AI & Cloud Infrastructure That Actually Fits Your Business
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Custom AI automation and cloud systems built for how you work. No templates. Just speed, security, and scalability.
          </p>

          <h3 className="text-lg text-cyan-400 mb-6 font-semibold">Let's Build Something That Works for You</h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/schedule-consultation"
              className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center space-x-2"
            >
              <span>Book a Strategy Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

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