import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Lock } from 'lucide-react';
import { BreadcrumbSchema } from '@/app/_components/Schema';
import CTA from '@/app/_components/CTA';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Detailed write-ups of project work across construction, healthcare, finance, real estate, and government environments. Many engagements are NDA-protected.',
  alternates: { canonical: 'https://autom8ionlab.com/case-studies' },
  openGraph: {
    title: 'Case Studies | Autom8ion Lab',
    description:
      'Detailed write-ups of project work across construction, healthcare, finance, real estate, and government environments. Most engagements are NDA-protected; representative scenarios shown.',
    url: 'https://autom8ionlab.com/case-studies',
    images: [{ url: 'https://autom8ionlab.com/logo/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Case Studies | Autom8ion Lab',
    description: 'Project work across construction, healthcare, finance, real estate, and government.',
  },
};

const scenarios = [
  {
    industry: 'Construction',
    industryHref: '/industries/construction',
    title: 'Multi-state specialty contractor — project management automation',
    body:
      "We replaced manual reporting workflows for a multi-state specialty construction firm operating across 40+ active projects. The integration layer connected Sage 300 accounting, Procore project management, and a custom field-service mobile app for foremen. Daily reporting that previously consumed 4–6 hours of office staff time per project shifted to automated dashboards updated on event from field activity.",
    frameworks: ['HUD compliance', 'OSHA documentation', 'Davis-Bacon', 'state lien waivers'],
  },
  {
    industry: 'Healthcare',
    industryHref: '/industries/healthcare',
    title: 'Multi-specialty healthcare group — HIPAA-aligned patient communication platform',
    body:
      "We built a patient communication platform for a multi-specialty healthcare group, including SOC 2 prep documentation. The system integrated with the group's Epic instance via FHIR APIs, segmented PHI handling across the application, and produced the technical safeguards inventory their compliance team needed for the annual HIPAA review. A signed BAA covered every PHI-touching surface.",
    frameworks: ['HIPAA', 'HITECH', 'SOC 2 Type II'],
  },
  {
    industry: 'Finance',
    industryHref: '/industries/finance',
    title: 'Financial services firm — AI-powered document processing',
    body:
      'We replaced a manual document review process with AI-powered classification and extraction for a financial services firm. The work survived internal compliance review and an external SOC 2 audit cycle. Model documentation was structured to demonstrate the AI tool supported human decisions rather than driving model risk under SR 11-7.',
    frameworks: ['SOC 2 Type II', 'GLBA', 'FFIEC', 'SR 11-7'],
  },
  {
    industry: 'Real Estate & Property',
    industryHref: '/industries/real-estate-property',
    title: 'Multifamily property management company — FCRA tenant screening',
    body:
      "We built a tenant screening and FCRA workflow automation system for a multifamily property management company. Adverse action notices, pre-adverse and final notification, consumer disclosure on request, dispute handling workflow, and the audit trail demonstrating the process was followed correctly were built in from the architecture stage. Multi-state lease templates and notice timing configurable by jurisdiction.",
    frameworks: ['FCRA', 'Fair Housing Act', 'state landlord-tenant laws'],
  },
  {
    industry: 'Defense Industrial Base',
    industryHref: '/industries/defense',
    title: 'DoD subcontractor — NIST 800-171 controls implementation',
    body:
      "We implemented NIST 800-171 controls for a DoD subcontractor pursuing CMMC Level 2 readiness. The engagement covered access control, audit logging, configuration management, identification, incident response, and system integrity families. Deliverables included a System Security Plan draft, POA&M, and evidence package structured for the C3PAO assessment that followed.",
    frameworks: ['CMMC 2.0 Level 2', 'NIST 800-171 Rev 2', 'DFARS 252.204-7012'],
  },
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        trail={[
          { name: 'Home', href: '/' },
          { name: 'Case Studies', href: '/case-studies' },
        ]}
      />

      <section className="relative min-h-[40vh] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-12">
          <nav className="text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-cyan-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-300">Case Studies</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Case Studies
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl leading-relaxed">
            Project work across construction, healthcare, finance, real estate, and government
            environments.
          </p>
        </div>
      </section>

      <section className="py-12 bg-amber-950/20 border-y border-amber-900/30">
        <div className="max-w-4xl mx-auto px-6 flex items-start space-x-4">
          <Lock className="w-6 h-6 text-amber-300 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-amber-200 mb-2">
              Many engagements are NDA-protected
            </h2>
            <p className="text-slate-300 leading-relaxed">
              We provide past performance details and references on a need-to-know basis after a
              qualifying conversation and vendor onboarding. The scenarios below are representative —
              real work, generalized to remove identifying details. Specific named past performance is
              available under NDA.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          {scenarios.map((s) => (
            <article
              key={s.title}
              className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 md:p-8"
            >
              <Link
                href={s.industryHref}
                className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-3 hover:text-cyan-300"
              >
                {s.industry}
              </Link>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">{s.title}</h2>
              <p className="text-slate-300 leading-relaxed mb-5">{s.body}</p>
              <div className="flex flex-wrap gap-2">
                {s.frameworks.map((f) => (
                  <span
                    key={f}
                    className="text-xs px-3 py-1 bg-slate-800/60 border border-slate-700 rounded-full text-slate-300"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 bg-slate-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need past performance for a specific opportunity?
          </h2>
          <p className="text-slate-300 leading-relaxed mb-8">
            Tell us the agency, industry, or contract vehicle on a 30-minute discovery call. We'll
            share applicable past performance details under NDA where required.
          </p>
          <Link
            href="/schedule-consultation"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-600 transition-colors"
          >
            <span>Schedule a discovery call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
