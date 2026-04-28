import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Award, MapPin, Linkedin } from 'lucide-react';
import { BreadcrumbSchema } from '@/app/_components/Schema';
import CTA from '@/app/_components/CTA';

export const metadata: Metadata = {
  title: 'About Autom8ion Lab',
  description:
    'Veteran-owned engineering firm building custom AI, automation, and software for compliance-heavy industries. Founded by Sean Richard. SDVOSB pending.',
  keywords:
    'Autom8ion Lab, Sitehues Media Inc., Sean Richard, veteran-owned software, SDVOSB, compliance engineering firm, federal contractor',
  alternates: { canonical: 'https://autom8ionlab.com/about' },
  openGraph: {
    title: 'About Autom8ion Lab | Veteran-owned engineering firm',
    description:
      'Veteran-owned engineering firm building custom AI, automation, and software for construction, healthcare, finance, real estate, US government, and the Defense Industrial Base. Founded by Sean Richard.',
    url: 'https://autom8ionlab.com/about',
    images: [{ url: 'https://autom8ionlab.com/logo/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'About Autom8ion Lab | Veteran-owned engineering firm',
    description:
      'Veteran-owned engineering firm building custom AI, automation, and software for compliance-heavy industries. Founded by Sean Richard.',
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        trail={[
          { name: 'Home', href: '/' },
          { name: 'About', href: '/about' },
        ]}
      />

      <section className="relative min-h-[50vh] bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-950">
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16">
          <nav className="text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-cyan-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-300">About</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            About Autom8ion Lab
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl leading-relaxed">
            A veteran-owned engineering firm building custom AI, automation, and software for industries
            where compliance, security, and ROI all matter — operated by Sitehues Media Inc.
          </p>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Why we exist</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              Most technology vendors force a choice. Off-the-shelf SaaS tools move fast but rarely fit
              compliance, integration, or workflow requirements that defense contractors, health
              systems, banks, property managers, and government IT teams actually have. Traditional
              integrators understand compliance but ship slowly and treat AI as an afterthought.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              We close that gap. We are software and AI builders with an in-house cybersecurity
              compliance arm. We design for HIPAA, SOC 2, CMMC, NIST 800-171, FCRA, HUD, and FedRAMP
              from the first whiteboard sketch — and we produce the documentation your assessor will
              need as we build, not at the end.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Founder</h2>
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">SR</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Sean Richard</h3>
                <p className="text-cyan-400 text-sm font-medium mb-3">Founder · Veteran</p>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Sean founded Autom8ion Lab to build the kind of compliance-first engineering team he
                  could not find when he needed one. The work spans full-stack software, AI integration,
                  cybersecurity compliance engineering, and federal procurement readiness. Every
                  engagement gets senior engineering access — Sean leads scoping personally and stays
                  in delivery through deployment.
                </p>
                <a
                  href="https://www.linkedin.com/in/a8l-sean-richard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Sean on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Federal contracting registrations</h2>
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-slate-400 uppercase tracking-wider text-xs mb-1">Legal name</div>
                  <div className="text-white font-medium">Sitehues Media Inc. (DBA Autom8ion Lab)</div>
                </div>
                <div>
                  <div className="text-slate-400 uppercase tracking-wider text-xs mb-1">Type</div>
                  <div className="text-white font-medium">
                    Veteran-Owned Small Business · SDVOSB pending
                  </div>
                </div>
                <div>
                  <div className="text-slate-400 uppercase tracking-wider text-xs mb-1">UEI</div>
                  <div className="text-white font-mono">YY2DR3KSENH7</div>
                </div>
                <div>
                  <div className="text-slate-400 uppercase tracking-wider text-xs mb-1">CAGE / NCAGE</div>
                  <div className="text-white font-mono">9YCS7</div>
                </div>
                <div>
                  <div className="text-slate-400 uppercase tracking-wider text-xs mb-1">DUNS</div>
                  <div className="text-white font-mono">05-289-2750</div>
                </div>
                <div>
                  <div className="text-slate-400 uppercase tracking-wider text-xs mb-1">
                    Recommended NAICS
                  </div>
                  <div className="text-white font-mono text-xs">
                    541511, 541512, 541519, 541611, 541690
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-800">
                <Link
                  href="/capability-statement"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  View the full capability statement
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Locations</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
                <div className="flex items-center space-x-2 text-cyan-400 mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold">US Headquarters</span>
                </div>
                <div className="text-white text-lg">Plant City, Florida</div>
                <div className="text-slate-400 text-sm mt-1">Sales and project delivery</div>
              </div>
              <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
                <div className="flex items-center space-x-2 text-cyan-400 mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold">Operations</span>
                </div>
                <div className="text-white text-lg">Montreal, Quebec</div>
                <div className="text-slate-400 text-sm mt-1">
                  Development and operations only — sales geography is United States
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">What we won't do</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              The focus is what makes us useful, so we say no to a lot:
            </p>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                <span>
                  We don't take work outside our six industries (construction, healthcare, finance, real
                  estate, US government, defense).
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                <span>
                  We don't perform CMMC RPO or C3PAO assessment work. We engineer the controls; we
                  partner with assessors when independent assessment is required.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                <span>
                  We don't work on classified contracts at this time. We work with cleared firms when
                  classified work is in scope.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                <span>
                  We don't publish pricing tiers. Quotes are scope-driven and provided after a discovery
                  call.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
