import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Award, MapPin, Linkedin, ExternalLink } from 'lucide-react';
import { BreadcrumbSchema, PersonSchema } from '@/app/_components/Schema';
import CTA from '@/app/_components/CTA';
import { Reveal, Stagger, StaggerItem, PremiumCard } from '@/app/_components/ui';

export const metadata: Metadata = {
  title: { absolute: 'About Autom8ion Lab' },
  description:
    'Veteran-owned engineering firm building custom AI, automation, and software for compliance-heavy industries. Founded by Sean Richard with Founding Partner Gabe Wilkinson. SDVOSB Certified · SBA Certified.',
  keywords:
    'Autom8ion Lab, Sitehues Media Inc., Sean Richard, Gabe Wilkinson, AI systems architect, veteran-owned software, SDVOSB, compliance engineering firm, federal contractor',
  alternates: { canonical: 'https://autom8ionlab.com/about' },
  openGraph: {
    title: 'About Autom8ion Lab',
    description:
      'Veteran-owned engineering firm building custom AI, automation, and software for compliance-heavy industries. Founded by Sean Richard with Founding Partner Gabe Wilkinson. SDVOSB Certified · SBA Certified.',
    url: 'https://autom8ionlab.com/about',
    images: [{
      url: 'https://autom8ionlab.com/api/og?title=About+Autom8ion+Lab&section=Company',
      width: 1200,
      height: 630,
      alt: 'About Autom8ion Lab',
    }],
  },
  twitter: {
    title: 'About Autom8ion Lab',
    description:
      'Veteran-owned engineering firm building custom AI, automation, and software for compliance-heavy industries. Founded by Sean Richard with Founding Partner Gabe Wilkinson. SDVOSB Certified · SBA Certified.',
    images: ['https://autom8ionlab.com/api/og?title=About+Autom8ion+Lab&section=Company'],
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
      <PersonSchema
        description="Sean Richard founded Autom8ion Lab to build the kind of compliance-first engineering team he could not find when he needed one. Veteran. Engineer. Builds custom AI, automation, and software for environments where security architecture and compliance documentation must be engineered from day one. Founding Partner Gabe Wilkinson is an AI systems architect with hands-on experience on critical and complex software systems for the U.S. government and private enterprise."
      />

      <section className="relative min-h-[50vh] bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-950">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-16">
          <Reveal>
            <nav className="text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-cyan-400">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-300">About</span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              About Autom8ion Lab
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xl text-slate-300 max-w-4xl leading-relaxed">
              A veteran-owned engineering firm building custom AI, automation, and software for industries
              where compliance, security, and ROI all matter — operated by Sitehues Media Inc.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
          <Reveal>
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
          </Reveal>

          <Reveal>
            <h2 className="text-3xl font-bold text-white mb-4">Founders</h2>
            <PremiumCard variant="hover" className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
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
                <div className="mb-2">
                  <a
                    href="https://seanrichard.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>More About Sean</span>
                  </a>
                </div>
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
            </PremiumCard>
            <PremiumCard variant="hover" className="mt-4 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">GW</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Gabe Wilkinson</h3>
                <p className="text-cyan-400 text-sm font-medium mb-3">Founding Partner</p>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Gabe is a founder, AI systems architect, and visionary at Autom8ion Lab. His
                  practical AI knowledge stems from hands-on experience working with critical and
                  complex software systems for the U.S. government and private enterprise. This
                  experience gives him the unique ability to understand and solve problems for his
                  clients. He wants to help owners and operators get back to the work they love.
                </p>
                <a
                  href="https://www.linkedin.com/in/gabe-at-autom8ionlab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Gabe on LinkedIn</span>
                </a>
              </div>
            </PremiumCard>
          </Reveal>

          <Reveal>
            <h2 className="text-3xl font-bold text-white mb-4">Federal contracting registrations</h2>
            <PremiumCard variant="glow" className="p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-slate-400 uppercase tracking-wider text-xs mb-1">Legal name</div>
                  <div className="text-white font-medium">Sitehues Media Inc. (DBA Autom8ion Lab)</div>
                </div>
                <div>
                  <div className="text-slate-400 uppercase tracking-wider text-xs mb-1">Type</div>
                  <div className="text-white font-medium">
                    Veteran-Owned Small Business · SDVOSB Certified · SBA Certified · VA Vets First
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
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium link-underline"
                >
                  View the full capability statement
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </PremiumCard>
          </Reveal>

          <Reveal>
            <h2 className="text-3xl font-bold text-white mb-4">Locations</h2>
            <Stagger className="grid sm:grid-cols-2 gap-4" staggerDelay={0.08}>
              <StaggerItem>
              <PremiumCard variant="hover" className="p-6 h-full">
                <div className="flex items-center space-x-2 text-cyan-400 mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold">US Headquarters</span>
                </div>
                <div className="text-white text-lg">Plant City, Florida</div>
                <div className="text-slate-400 text-sm mt-1">Sales and project delivery</div>
              </PremiumCard>
              </StaggerItem>
              <StaggerItem>
              <PremiumCard variant="hover" className="p-6 h-full">
                <div className="flex items-center space-x-2 text-cyan-400 mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold">Operations</span>
                </div>
                <div className="text-white text-lg">Montreal, Quebec</div>
                <div className="text-slate-400 text-sm mt-1">
                  Development and operations only — sales geography is United States
                </div>
              </PremiumCard>
              </StaggerItem>
            </Stagger>
          </Reveal>

          <Reveal>
            <h2 className="text-3xl font-bold text-white mb-4">What we won&apos;t do</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              The focus is what makes us useful, so we say no to a lot:
            </p>
            <Stagger className="space-y-3 text-slate-300" staggerDelay={0.06}>
              {[
                "We don't take work outside our six industries (construction, healthcare, finance, real estate, US government, defense).",
                "We don't perform CMMC RPO or C3PAO assessment work. We engineer the controls; we partner with assessors when independent assessment is required.",
                "We don't work on classified contracts at this time. We work with cleared firms when classified work is in scope.",
                "We don't publish pricing tiers. Quotes are scope-driven and provided after a discovery call.",
              ].map((statement) => (
                <StaggerItem key={statement}>
                  <PremiumCard variant="hover" className="p-4 flex items-start space-x-3">
                    <Award className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <span>{statement}</span>
                  </PremiumCard>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
