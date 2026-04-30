import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, ArrowRight, Search } from 'lucide-react';
import { Reveal, MagneticButton } from './_components/ui';

export const metadata: Metadata = {
  title: 'Page Not Found',
  alternates: { canonical: 'https://autom8ionlab.com/404' },
};

export default function Page() {
  return (
    <>
      <div className="relative pt-32 pb-20 overflow-hidden">
        {/* Decorative grid + scan line — same visual language as HeroScene */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <svg
            className="absolute inset-0 w-full h-full opacity-20"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern id="not-found-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="rgba(6, 182, 212, 0.2)"
                  strokeWidth="1"
                />
              </pattern>
              <radialGradient id="not-found-fade" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="white" stopOpacity="0.6" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <mask id="not-found-mask">
                <rect width="100%" height="100%" fill="url(#not-found-fade)" />
              </mask>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#not-found-grid)"
              mask="url(#not-found-mask)"
              className="animate-grid-slide"
            />
          </svg>
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-scan-horizontal" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <div className="mb-8">
              <span
                className="inline-block text-8xl md:text-[10rem] font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-shift drop-shadow-[0_0_40px_rgba(6,182,212,0.4)]"
                aria-label="404"
              >
                404
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Page Not Found</h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg text-slate-400 mb-12 max-w-xl mx-auto">
              The page you are looking for does not exist or has been moved. Let us help you find what
              you need.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <MagneticButton href="/" variant="primary">
                <Home className="w-5 h-5" />
                Home
              </MagneticButton>
              <MagneticButton href="/#industries" variant="secondary">
                <Search className="w-5 h-5" />
                Industries
              </MagneticButton>
              <MagneticButton href="/get-in-touch" variant="secondary">
                Contact
                <ArrowRight className="w-5 h-5" />
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
