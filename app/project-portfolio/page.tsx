import type { Metadata } from 'next';
import { Reveal } from '@/app/_components/ui';
import PortfolioTabs from '@/app/_components/PortfolioTabs';

// Unlisted page: noindex + nofollow, not in nav/footer/sitemap. Mirrors the
// robots metadata pattern on /thank-you. Also disallowed in app/robots.ts.
export const metadata: Metadata = {
  title: 'Project Portfolio',
  description: 'Selected websites, apps, and platforms engineered by Autom8ion Lab.',
  alternates: { canonical: 'https://autom8ionlab.com/project-portfolio' },
  robots: 'noindex, nofollow',
};

export default function ProjectPortfolioPage() {
  return (
    <>
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl hidden sm:block animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl hidden sm:block animate-pulse-slow delay-700" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <p className="text-sm font-mono uppercase tracking-[0.2em] text-cyan-400 mb-4">~/portfolio</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Things We&apos;ve
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Built</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A selection of live websites and the software platforms behind them — designed, engineered, and shipped by Autom8ion Lab.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <PortfolioTabs />
        </div>
      </section>
    </>
  );
}
