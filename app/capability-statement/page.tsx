import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, Mail, Phone, MapPin, ArrowRight, Award, Shield, Building2, Workflow, Cloud } from 'lucide-react';
import { BreadcrumbSchema } from '@/app/_components/Schema';

export const metadata: Metadata = {
  title: 'Capability Statement',
  description:
    'Autom8ion Lab capability statement. Veteran-owned engineering for federal, DIB, healthcare, and financial services. UEI YY2DR3KSENH7 · CAGE 9YCS7.',
  alternates: { canonical: 'https://autom8ionlab.com/capability-statement' },
  openGraph: {
    title: 'Capability Statement | Autom8ion Lab',
    description:
      'Autom8ion Lab capability statement. Veteran-owned engineering for federal, DIB, healthcare, and financial services. UEI YY2DR3KSENH7 · CAGE 9YCS7.',
    url: 'https://autom8ionlab.com/capability-statement',
    images: [{
      url: 'https://autom8ionlab.com/api/og?title=Capability+Statement&section=Company',
      width: 1200,
      height: 630,
      alt: 'Autom8ion Lab Capability Statement',
    }],
  },
  twitter: {
    title: 'Capability Statement | Autom8ion Lab',
    description:
      'Autom8ion Lab capability statement. Veteran-owned engineering for federal, DIB, healthcare, and financial services. UEI YY2DR3KSENH7 · CAGE 9YCS7.',
    images: ['https://autom8ionlab.com/api/og?title=Capability+Statement&section=Company'],
  },
};

// Organization schema is sitewide via app/layout.tsx; this page just adds
// BreadcrumbSchema. The body of the page IS the public capability statement,
// so the data lives there visibly rather than as duplicate JSON-LD.
export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        trail={[
          { name: 'Home', href: '/' },
          { name: 'Capability Statement', href: '/capability-statement' },
        ]}
      />

      <article className="relative pt-24 pb-20 px-6">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
      
              <div className="relative z-10 max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
                  Capability Statement
                </h1>
      
                <p className="text-cyan-300 font-medium text-lg mb-2">
                  Veteran-Owned · SDVOSB Certification Pending
                </p>
      
                <p className="text-slate-400 mb-10">
                  Registered Federal Contractor · UEI:{' '}
                  <span className="font-mono text-cyan-300">YY2DR3KSENH7</span> · CAGE:{' '}
                  <span className="font-mono text-cyan-300">9YCS7</span>
                </p>
      
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <a
                    href="/downloads/Autom8ion_Lab_Capabilities_Statement.pdf"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all"
                    download
                  >
                    <Download className="w-5 h-5" />
                    Download PDF version
                  </a>
                  <Link href="/schedule-consultation"
                    className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-cyan-400 text-slate-200 hover:text-cyan-400 px-6 py-3 rounded-lg font-semibold transition-all"
                  >
                    Schedule a capability briefing
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
      
                {/* Company Information */}
                <section id="company-information" className="mb-12 scroll-mt-32">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-cyan-400" />
                    Company Information
                  </h2>
                  <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 md:p-8">
                    <dl className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-slate-300">
                      <div>
                        <dt className="text-slate-500 text-sm uppercase tracking-wider mb-1">Legal Name</dt>
                        <dd className="text-white">Sitehues Media Inc. (DBA Autom8ion Lab)</dd>
                      </div>
                      <div>
                        <dt className="text-slate-500 text-sm uppercase tracking-wider mb-1">Founder</dt>
                        <dd className="text-white">
                          <a
                            href="https://www.linkedin.com/in/a8l-sean-richard/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-cyan-400 underline-offset-2 hover:underline"
                          >
                            Sean Richard
                          </a>
                        </dd>
                      </div>
                      <div>
                        <dt className="text-slate-500 text-sm uppercase tracking-wider mb-1">Locations</dt>
                        <dd className="text-white">
                          Plant City, FL, United States
                          <br />
                          Montreal, Quebec, Canada
                        </dd>
                      </div>
                      <div>
                        <dt className="text-slate-500 text-sm uppercase tracking-wider mb-1">Type</dt>
                        <dd className="text-white">
                          Veteran-Owned Small Business
                          <br />
                          SDVOSB certification pending
                        </dd>
                      </div>
                    </dl>
                  </div>
                </section>
      
                {/* Federal Contracting Registrations */}
                <section id="federal-registrations" className="mb-12 scroll-mt-32">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-cyan-400" />
                    Federal Contracting Registrations
                  </h2>
                  <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 md:p-8">
                    <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-slate-300">
                      <div>
                        <dt className="text-slate-500 text-sm uppercase tracking-wider mb-1">UEI</dt>
                        <dd className="text-cyan-300 font-mono text-lg">YY2DR3KSENH7</dd>
                      </div>
                      <div>
                        <dt className="text-slate-500 text-sm uppercase tracking-wider mb-1">CAGE / NCAGE</dt>
                        <dd className="text-cyan-300 font-mono text-lg">9YCS7</dd>
                      </div>
                      <div>
                        <dt className="text-slate-500 text-sm uppercase tracking-wider mb-1">DUNS</dt>
                        <dd className="text-cyan-300 font-mono text-lg">05-289-2750</dd>
                      </div>
                      <div>
                        <dt className="text-slate-500 text-sm uppercase tracking-wider mb-1">NAICS Codes</dt>
                        <dd className="text-white text-sm">
                          <span className="text-slate-400 italic">
                            Confirmation pending — recommended primaries: 541511, 541512, 541519, 541611, 541690.
                          </span>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </section>
      
                {/* Core Competencies — each links to its dedicated solution
                    page so the capability statement actually transfers ranking
                    authority into the conversion-driving long-tail pages. Per
                    Implementation Plan §8.3. */}
                <section id="core-competencies" className="mb-12 scroll-mt-32">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Award className="w-6 h-6 text-cyan-400" />
                    Core Competencies
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        title: 'AI-Powered Enterprise Software & Application Development',
                        body: 'Custom-built platforms, internal tools, mobile apps, and customer-facing applications with AI capabilities integrated where they create real leverage. Full-stack development with security architecture engineered from day one.',
                        href: '/solutions/software-development',
                        anchor: 'custom software development',
                      },
                      {
                        title: 'Workflow & Process Automation for Compliance Environments',
                        body: 'Custom workflow automation, AI agents, and process automation deployed where SaaS tools cannot go — on-premises, private cloud, and FedRAMP-aligned environments.',
                        href: '/solutions/workflow-automation',
                        anchor: 'enterprise workflow automation',
                      },
                      {
                        title: 'Cybersecurity Compliance & Engineering',
                        body: 'CMMC readiness, NIST 800-171 implementation, HIPAA technical safeguards, SOC 2 Type II preparation. We engineer compliant systems and document them for audit.',
                        href: '/solutions/cybersecurity',
                        anchor: 'cybersecurity compliance engineering',
                      },
                      {
                        title: 'Custom AI Agents & LLM Systems for Regulated Environments',
                        body: 'On-premises and private-cloud AI agents and fine-tuned LLM systems engineered for environments where data residency, audit, and security matter.',
                        href: '/solutions/ai-agent-development',
                        anchor: 'custom AI agent development',
                      },
                      {
                        title: 'Cloud Infrastructure for FedRAMP & GovCloud Workloads',
                        body: 'Cloud architecture across AWS GovCloud, Azure Government, and commercial cloud — designed for FedRAMP, CMMC, and HIPAA workloads with full controls documentation.',
                        href: '/solutions/cloud-systems',
                        anchor: 'FedRAMP and GovCloud cloud architecture',
                      },
                    ].map((c) => (
                      <Link
                        key={c.title}
                        href={c.href}
                        className="group bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-colors block"
                      >
                        <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-300 transition-colors">
                          {c.title}
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-3">{c.body}</p>
                        <span className="inline-flex items-center gap-1 text-cyan-400 text-sm font-medium link-underline">
                          Read more about {c.anchor}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
      
                {/* Differentiators */}
                <section id="differentiators" className="mb-12 scroll-mt-32">
                  <h2 className="text-2xl font-bold text-white mb-6">Differentiators</h2>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {[
                      'Software builders with in-house cybersecurity compliance arm',
                      'Engineered for audit from day one — not retrofitted',
                      'Veteran-owned (SDVOSB certification pending)',
                      'Dual US/Canada presence for cross-border engagements',
                      'Founder-led: senior engineering access on every engagement',
                      'No client names without permission — past performance details on request',
                    ].map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-3 bg-slate-900/40 border border-slate-800 rounded-lg p-4"
                      >
                        <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                        <span className="text-slate-300">{d}</span>
                      </li>
                    ))}
                  </ul>
                </section>
      
                {/* Compliance Frameworks */}
                <section id="compliance-frameworks" className="mb-12 scroll-mt-32">
                  <h2 className="text-2xl font-bold text-white mb-6">Compliance Frameworks We Build To</h2>
                  <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <p className="text-slate-300 leading-relaxed">
                      CMMC 2.0 (Levels 1–3) · NIST 800-171 Rev 2 · NIST 800-53 · FedRAMP Moderate / High · HIPAA / HITECH · FDA
                      21 CFR Part 11 · SOC 2 Type II · PCI-DSS
                    </p>
                  </div>
                </section>
      
                {/* Industries Served — each links to its dedicated industry
                    page so capability-statement traffic actually flows into
                    the conversion-driving long-tail pages. */}
                <section id="industries-served" className="mb-12 scroll-mt-32">
                  <h2 className="text-2xl font-bold text-white mb-6">Industries Served</h2>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {[
                      { name: 'Construction', href: '/industries/construction' },
                      {
                        name: 'Healthcare & Life Sciences',
                        href: '/industries/healthcare',
                      },
                      {
                        name: 'Finance (banks, credit unions, fintech, insurance)',
                        href: '/industries/finance',
                      },
                      {
                        name: 'Real Estate & Property Management',
                        href: '/industries/real-estate-property',
                      },
                      {
                        name: 'US Federal, State & Local Government',
                        href: '/industries/government',
                      },
                      {
                        name: 'Defense Industrial Base (DoD primes and subcontractors)',
                        href: '/industries/defense',
                      },
                    ].map((i) => (
                      <li key={i.name}>
                        <Link
                          href={i.href}
                          className="group bg-slate-900/40 border border-slate-800 rounded-lg p-4 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors flex items-center justify-between"
                        >
                          <span>{i.name}</span>
                          <ArrowRight className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
      
                {/* Past Performance */}
                <section id="past-performance" className="mb-12 scroll-mt-32">
                  <h2 className="text-2xl font-bold text-white mb-6">Past Performance</h2>
                  <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 md:p-8">
                    <p className="text-slate-300 leading-relaxed mb-4">
                      Our work spans federal, state, healthcare, and financial-services environments. Many engagements are
                      governed by non-disclosure agreements that prevent us from naming clients publicly. We provide past
                      performance details and references upon request after a qualifying conversation.
                    </p>
                    <p className="text-slate-400 italic text-sm">
                      Representative engagements include custom workflow automation for a multi-state services organization,
                      AI-powered document processing for a regulated services firm, NIST 800-171 controls implementation for a
                      defense subcontractor, and HIPAA-aligned software development for a healthcare technology firm.
                    </p>
                  </div>
                </section>
      
                {/* Contact */}
                <section id="contact" className="mb-12 scroll-mt-32">
                  <h2 className="text-2xl font-bold text-white mb-6">Contact</h2>
                  <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-cyan-500/30 rounded-xl p-6 md:p-8">
                    <p className="text-white font-semibold text-lg mb-4">Sean Richard, Founder</p>
                    <div className="space-y-3 text-slate-300">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-cyan-400" />
                        <a
                          href="mailto:info@autom8ionlab.com"
                          className="hover:text-cyan-400"
                        >
                          info@autom8ionlab.com
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-cyan-400" />
                        <a href="tel:+18555086062" className="hover:text-cyan-400">
                          +1 855-508-6062
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-cyan-400" />
                        <span>Plant City, FL · Montreal, QC</span>
                      </div>
                    </div>
                  </div>
                </section>
      
                {/* Final CTA */}
                <section className="text-center py-8 border-t border-slate-800">
                  <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                    For RFP responses, vendor onboarding documentation, or to add Autom8ion Lab to your qualified vendor pool,
                    email{' '}
                    <a href="mailto:info@autom8ionlab.com" className="text-cyan-400 hover:text-cyan-300">
                      info@autom8ionlab.com
                    </a>
                    .
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/downloads/Autom8ion_Lab_Capabilities_Statement.pdf"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all"
                      download
                    >
                      <Download className="w-5 h-5" />
                      Download PDF version
                    </a>
                    <Link href="/schedule-consultation"
                      className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-cyan-400 text-slate-200 hover:text-cyan-400 px-6 py-3 rounded-lg font-semibold transition-all"
                    >
                      Schedule a capability briefing
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </section>
              </div>
            </article>
    </>
  );
}
