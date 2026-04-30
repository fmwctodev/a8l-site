import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Download,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Award,
  Shield,
  Building2,
  Brain,
  Database,
  Code2,
  Cloud,
  Lock,
  Users,
  CheckCircle2,
  XCircle,
  Globe,
} from 'lucide-react';
import { BreadcrumbSchema } from '@/app/_components/Schema';

export const metadata: Metadata = {
  title: 'Capability Statement',
  description:
    'Engineering bespoke AI and automation systems for federal, state, and enterprise mission environments. SDVOSB Certified. SBA Certified. UEI YY2DR3KSENH7 · CAGE 9YCS7.',
  alternates: { canonical: 'https://autom8ionlab.com/capability-statement' },
  openGraph: {
    title: 'Capability Statement | Autom8ion Lab',
    description:
      'SDVOSB Certified · SBA Certified. Custom software, AI/LLM agents, managed services, and cybersecurity for federal, state, and enterprise mission environments. UEI YY2DR3KSENH7 · CAGE 9YCS7.',
    url: 'https://autom8ionlab.com/capability-statement',
    images: [
      {
        url: 'https://autom8ionlab.com/api/og?title=Capability+Statement&section=Procurement+Passport',
        width: 1200,
        height: 630,
        alt: 'Autom8ion Lab Capability Statement',
      },
    ],
  },
  twitter: {
    title: 'Capability Statement | Autom8ion Lab',
    description:
      'SDVOSB Certified. Engineering bespoke AI and automation systems. UEI YY2DR3KSENH7 · CAGE 9YCS7 · DUNS 05-289-2750.',
    images: [
      'https://autom8ionlab.com/api/og?title=Capability+Statement&section=Procurement+Passport',
    ],
  },
};

// Page mirrors the April 2026 v3 capability-statement PDF 1:1 — same heading
// hierarchy, same stat tiles, same NAICS coverage list, same set-aside
// posture. The PDF is the canonical record; this page is the web mirror so
// procurement officers, AI crawlers, and casual visitors all see the same
// claims with the same numbers. Schema lives in app/layout.tsx (Organization)
// + BreadcrumbSchema below.
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
          {/* Hero */}
          <div className="mb-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            SDVOSB Certified · SBA Certified · VA Vets First
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Engineering{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Bespoke AI
            </span>
            <br />
            and Automation Systems
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-3">
            Custom software, AI/LLM agents, managed services, and cybersecurity — engineered for
            federal, state, and enterprise mission environments. Compliance is built in from day
            one, not bolted on.
          </p>

          <p className="text-slate-400 mb-10">
            Sitehues Media Inc. DBA Autom8ion Lab · UEI{' '}
            <span className="font-mono text-cyan-300">YY2DR3KSENH7</span> · CAGE{' '}
            <span className="font-mono text-cyan-300">9YCS7</span> · DUNS{' '}
            <span className="font-mono text-cyan-300">05-289-2750</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="/downloads/Autom8ion_Lab_Capabilities_Statement.pdf"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all min-h-[48px]"
              download
            >
              <Download className="w-5 h-5" />
              Download PDF version
            </a>
            <Link
              href="/schedule-consultation"
              className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-cyan-400 text-slate-200 hover:text-cyan-400 px-6 py-3 rounded-lg font-semibold transition-all min-h-[48px]"
            >
              Schedule a capability briefing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick-stat tiles — mirrors the four headline metrics on PDF page 1. */}
          <section className="mb-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                value: '30 Days',
                label: 'Discovery to live launch on most custom builds',
              },
              {
                value: '90%',
                label: 'Manual matching eliminated via AI normalization',
              },
              {
                value: '<1 sec',
                label: 'RAG query response across 500K+ documents',
              },
              {
                value: '95%',
                label: 'Staff retention · 48-hr avg. placement',
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-slate-900/60 border border-cyan-500/20 rounded-xl p-5"
              >
                <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-br from-cyan-300 to-blue-400 bg-clip-text text-transparent leading-none mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm leading-snug">{stat.label}</div>
              </div>
            ))}
          </section>

          {/* Core Capabilities Ecosystem — 6 domains, 1 unified architecture.
              Each card cross-links to its dedicated /solutions/* page where
              one exists; staff augmentation links to /join-us. */}
          <section id="core-competencies" className="mb-12 scroll-mt-32">
            <div className="flex items-baseline justify-between flex-wrap gap-2 mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-cyan-400" />
                Core Capabilities Ecosystem
              </h2>
              <span className="text-cyan-300 text-xs font-semibold tracking-widest uppercase">
                6 Domains · 1 Unified Architecture
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  icon: Brain,
                  title: 'Custom AI & LLMs',
                  bullets: [
                    'RAG engines, NLP pipelines',
                    'Agentic architectures',
                    'LLM fine-tuning',
                  ],
                  href: '/solutions/custom-llm-systems',
                  anchor: 'custom LLM systems',
                },
                {
                  icon: Database,
                  title: 'Data Engineering',
                  bullets: [
                    'ETL pipelines, BigQuery',
                    'OpenSearch, PostHog',
                    '150K+ record processing',
                  ],
                  href: '/solutions/api-integrations',
                  anchor: 'API integrations and data pipelines',
                },
                {
                  icon: Code2,
                  title: 'Custom Software',
                  bullets: ['Python, Node.js, React', 'Matlab, FastAPI', 'iOS / Android'],
                  href: '/solutions/software-development',
                  anchor: 'custom software development',
                },
                {
                  icon: Cloud,
                  title: 'Cloud & Infrastructure',
                  bullets: [
                    'AWS, Azure, Kubernetes',
                    'CI/CD, container orch.',
                    'FedRAMP-aligned hosting',
                  ],
                  href: '/solutions/cloud-systems',
                  anchor: 'FedRAMP and GovCloud cloud architecture',
                },
                {
                  icon: Lock,
                  title: 'Cybersecurity',
                  bullets: [
                    'Pen testing, vuln. remediation',
                    'NIST/CIS, CMMC Level 2',
                    'Zero Trust architecture',
                  ],
                  href: '/solutions/cybersecurity',
                  anchor: 'cybersecurity compliance engineering',
                },
                {
                  icon: Users,
                  title: 'Staff Augmentation',
                  bullets: [
                    'Devs, QA, DevOps, Data Eng.',
                    '48-hr avg. placement',
                    '20+ specialists placed',
                  ],
                  href: '/join-us',
                  anchor: 'engineering staff augmentation',
                },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <Link
                    key={c.title}
                    href={c.href}
                    className="group bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/50 transition-colors flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="w-5 h-5 text-cyan-400" />
                      <h3 className="text-white font-semibold group-hover:text-cyan-300 transition-colors">
                        {c.title}
                      </h3>
                    </div>
                    <ul className="space-y-1.5 text-slate-400 text-sm flex-grow">
                      {c.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <span className="mt-4 inline-flex items-center gap-1 text-cyan-400 text-xs font-medium">
                      Read more about {c.anchor}
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Compliance by Default — 5 framework pills */}
          <section id="compliance-frameworks" className="mb-12 scroll-mt-32">
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
              <div className="md:w-48 flex-shrink-0">
                <div className="text-cyan-300 text-xs font-semibold tracking-widest uppercase mb-1">
                  Compliance By
                </div>
                <div className="text-2xl font-bold text-white">Default</div>
              </div>
              <div className="flex-1 flex flex-wrap gap-2">
                {[
                  'NIST 800-171',
                  'CIS Aligned',
                  'SOC 2 Aligned',
                  'CMMC Level 2 Ready',
                  'FedRAMP Aligned',
                ].map((framework) => (
                  <span
                    key={framework}
                    className="px-4 py-2 rounded-lg bg-slate-950 border border-cyan-500/30 text-cyan-200 text-sm font-medium"
                  >
                    {framework}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* The Autom8ion Blueprint — beyond generic software. Side-by-side
              comparison of the traditional approach vs. our build pattern. */}
          <section id="blueprint" className="mb-16 scroll-mt-32">
            <div className="mb-6">
              <div className="text-cyan-300 text-xs font-semibold tracking-widest uppercase mb-2">
                The Autom8ion Blueprint · Beyond Generic Software
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Why a custom-engineered system beats a generic stack
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Traditional approach */}
              <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
                <h3 className="text-slate-400 font-semibold uppercase tracking-wider text-sm mb-4">
                  The Traditional Approach
                </h3>
                <ul className="space-y-3">
                  {[
                    'Generic bolted-on software',
                    'Basic chatbot plugins',
                    'Standard protocols, optional security',
                    'Unvetted freelancers',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-400 line-through decoration-slate-600">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* The Autom8ion Blueprint */}
              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-xl p-6">
                <h3 className="text-cyan-300 font-semibold uppercase tracking-wider text-sm mb-4">
                  The Autom8ion Blueprint
                </h3>
                <ul className="space-y-3">
                  {[
                    'Purpose-built automation around your workflows, data, and scale',
                    'AI-native from day one — production LLM pipelines & agentic systems',
                    'SOC 2-aligned, NIST/CIS, CMMC L2 ready, private cloud',
                    'Vetted senior staff · 48-hr placement · 95% retention',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* PAGE 2 — PROCUREMENT PASSPORT                                  */}
          {/* ============================================================== */}

          <div className="border-t border-cyan-500/20 pt-12 mb-12">
            <div className="text-cyan-300 text-xs font-semibold tracking-widest uppercase mb-2">
              Procurement Passport
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Federal contracting credentials, NAICS coverage,
              <br className="hidden md:block" /> contract vehicles, and proof-of-work telemetry
            </h2>
            <p className="text-slate-400 max-w-3xl leading-relaxed">
              All CUI handled on US-based systems only. SDVOSB · VA Vets First eligibility
              translates a standard 15+ open bidder pool into a 3–6 set-aside competition.
            </p>
          </div>

          {/* Entity Profile + NAICS side by side */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Entity Profile */}
            <section id="entity-profile" className="scroll-mt-32">
              <h3 className="text-cyan-300 text-xs font-semibold tracking-widest uppercase mb-4">
                Entity Profile
              </h3>
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
                <dl className="space-y-4 text-sm">
                  <div className="grid grid-cols-3 gap-3">
                    <dt className="text-slate-500 uppercase tracking-wider text-xs">Legal</dt>
                    <dd className="col-span-2 text-white">
                      Sitehues Media Inc.
                      <br />
                      <span className="text-slate-400">DBA Autom8ion Lab</span>
                    </dd>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <dt className="text-slate-500 uppercase tracking-wider text-xs">Type</dt>
                    <dd className="col-span-2 text-white">SDVOSB · SBA Certified</dd>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <dt className="text-slate-500 uppercase tracking-wider text-xs">CAGE</dt>
                    <dd className="col-span-2 font-mono text-cyan-300">9YCS7</dd>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <dt className="text-slate-500 uppercase tracking-wider text-xs">UEI</dt>
                    <dd className="col-span-2 font-mono text-cyan-300">YY2DR3KSENH7</dd>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <dt className="text-slate-500 uppercase tracking-wider text-xs">DUNS</dt>
                    <dd className="col-span-2 font-mono text-cyan-300">05-289-2750</dd>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <dt className="text-slate-500 uppercase tracking-wider text-xs">HQ</dt>
                    <dd className="col-span-2 text-white">Florida & New Mexico, US</dd>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <dt className="text-slate-500 uppercase tracking-wider text-xs">Delivery</dt>
                    <dd className="col-span-2 text-white">
                      US + Canada · Follow-the-sun
                      <br />
                      <span className="text-slate-400">Montreal, QC dual-shore</span>
                    </dd>
                  </div>
                </dl>
              </div>
            </section>

            {/* NAICS Coverage */}
            <section id="naics-coverage" className="scroll-mt-32">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-cyan-300 text-xs font-semibold tracking-widest uppercase">
                  NAICS Coverage
                </h3>
                <span className="text-slate-500 text-xs">10 Codes</span>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                <ul className="space-y-3 text-sm">
                  {[
                    {
                      code: '541511',
                      name: 'Custom Computer Programming',
                      detail: 'bespoke software, mobile apps, AI agents',
                    },
                    {
                      code: '541512',
                      name: 'Computer Systems Design',
                      detail: 'cloud architecture, BI/analytics',
                    },
                    {
                      code: '541519',
                      name: 'Other Computer Services',
                      detail: 'AI/ML consulting, RAG engines',
                    },
                    {
                      code: '541715',
                      name: 'R&D — Engineering Sciences',
                    },
                    {
                      code: '541515',
                      name: 'Computer Security Services',
                    },
                    {
                      code: '518210',
                      name: 'Data Processing & Hosting',
                      detail: 'ETL, cloud hosting',
                    },
                    {
                      code: '511210',
                      name: 'Software Publishers',
                      detail: 'SaaS platforms',
                    },
                    {
                      code: '561320',
                      name: 'Temporary Help Services',
                      detail: 'staff augmentation',
                    },
                    {
                      code: '541990',
                      name: 'Compliance / NIST Services',
                    },
                    {
                      code: '541690',
                      name: 'Scientific & Technical Consulting',
                    },
                  ].map((n) => (
                    <li key={n.code} className="flex items-start gap-3">
                      <span className="font-mono text-cyan-300 text-xs bg-cyan-500/10 border border-cyan-500/30 rounded px-2 py-0.5 flex-shrink-0">
                        {n.code}
                      </span>
                      <div>
                        <span className="text-white font-medium">{n.name}</span>
                        {n.detail && (
                          <span className="text-slate-400">
                            {' '}
                            — {n.detail}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Past Performance — Real-world telemetry. 4 stat tiles with dataset
              attribution per Implementation Plan §6.5 (every stat anchored to
              a specific engagement, not floating). */}
          <section id="past-performance" className="mb-12 scroll-mt-32">
            <div className="flex items-baseline justify-between flex-wrap gap-2 mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Past Performance</h2>
              <span className="text-cyan-300 text-xs font-semibold tracking-widest uppercase">
                Real-World Telemetry
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                {
                  number: '90%',
                  label: 'Manual work eliminated',
                  source:
                    'AI hospital inventory normalization (Intermed) · 150K+ record ETL',
                },
                {
                  number: '300%',
                  label: 'Data processing speed gain',
                  source: 'Multi-tenant OpenSearch on construction/BIM datasets',
                },
                {
                  number: '<1 sec',
                  label: 'RAG query response time',
                  source: 'Conduit RAG Engine across 500K+ document corpus',
                },
                {
                  number: '20+',
                  label: 'Specialists placed',
                  source:
                    'Devs, QA, DevOps · 48-hr turnaround · 95% retention',
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-slate-900/60 border border-slate-800 rounded-xl p-5"
                >
                  <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-br from-cyan-300 to-blue-400 bg-clip-text text-transparent leading-none mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white text-sm font-semibold mb-2">{stat.label}</div>
                  <div className="text-slate-400 text-xs leading-snug italic">{stat.source}</div>
                </div>
              ))}
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Many engagements are governed by non-disclosure agreements that prevent us from
              naming clients publicly. We provide additional past performance details and
              references upon request after a qualifying conversation.
            </p>
          </section>

          {/* Target Contract Vehicles + Registrations side by side */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Target Contract Vehicles */}
            <section id="contract-vehicles" className="scroll-mt-32">
              <h3 className="text-cyan-300 text-xs font-semibold tracking-widest uppercase mb-4">
                Target Contract Vehicles
              </h3>
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
                <ul className="space-y-3">
                  {[
                    'GSA MAS 54151S / HACS 54151HACS',
                    'CIO-SP4 SDVOSB Pool (NITAAC)',
                    'OASIS+ SB / SDVOSB Pool',
                    'AFWERX Open Topic SBIR',
                    'VA Vets First · FL & NM Veteran Preference',
                  ].map((vehicle) => (
                    <li key={vehicle} className="flex items-start gap-3">
                      <ArrowRight className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                      <span className="text-slate-200">{vehicle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Registrations & Certifications */}
            <section id="registrations" className="scroll-mt-32">
              <h3 className="text-cyan-300 text-xs font-semibold tracking-widest uppercase mb-4">
                Registrations & Certifications
              </h3>
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { name: 'SAM.gov Active', status: 'active' },
                    { name: 'SDVOSB SBA Certified', status: 'active' },
                    { name: 'FL MFMP Registered', status: 'active' },
                    { name: 'NM SPD Registered', status: 'active' },
                    { name: 'GSA MAS 54151S — applied', status: 'pending' },
                    { name: 'GSA HACS — applied', status: 'pending' },
                  ].map((cert) => (
                    <li key={cert.name} className="flex items-center gap-2 text-sm">
                      <span
                        className={`w-2 h-2 rounded-full flex-shrink-0 ${
                          cert.status === 'active' ? 'bg-cyan-400' : 'bg-amber-400'
                        }`}
                      />
                      <span className="text-slate-200">{cert.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Set-Aside Advantage callout */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/40 rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
              <Shield className="w-12 h-12 text-cyan-400 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-cyan-300 text-xs font-semibold tracking-widest uppercase mb-1">
                  Set-Aside Advantage
                </div>
                <div className="text-2xl font-bold text-white mb-1">3–6 bidders vs. 15+ open</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  SDVOSB and VA Vets First eligibility shifts your acquisition from an
                  open-competition shootout to a 3–6 vendor set-aside pool — substantially
                  improving win probability for qualifying scopes.
                </p>
              </div>
            </div>
          </section>

          {/* Industries Served — preserves Phase 8 internal-link structure
              even though the new PDF doesn't list industries explicitly.
              Procurement officers reaching this page still benefit from the
              vertical-specific landing pages. */}
          <section id="industries-served" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Industries Served</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                { name: 'Construction', href: '/industries/construction' },
                { name: 'Healthcare & Life Sciences', href: '/industries/healthcare' },
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

          {/* Contact */}
          <section id="contact" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Contact</h2>
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-cyan-500/30 rounded-xl p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-6 text-slate-300">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <a
                      href="https://autom8ionlab.com"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      autom8ionlab.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <a
                      href="mailto:info@autom8ionlab.com"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      info@autom8ionlab.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <a
                      href="tel:+18555086062"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      +1 855-508-6062
                    </a>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white font-semibold mb-1">Locations</div>
                      <div className="text-sm leading-relaxed">
                        Florida & New Mexico, US
                        <br />
                        Montreal, QC, Canada
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white font-semibold mb-1">Founder</div>
                      <a
                        href="https://www.linkedin.com/in/a8l-sean-richard/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-cyan-400 transition-colors"
                      >
                        Sean Richard →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center py-8 border-t border-slate-800">
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              For RFP responses, vendor onboarding documentation, or to add Autom8ion Lab to your
              qualified vendor pool, email{' '}
              <a
                href="mailto:info@autom8ionlab.com"
                className="text-cyan-400 hover:text-cyan-300"
              >
                info@autom8ionlab.com
              </a>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/downloads/Autom8ion_Lab_Capabilities_Statement.pdf"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all min-h-[48px]"
                download
              >
                <Download className="w-5 h-5" />
                Download PDF version
              </a>
              <Link
                href="/schedule-consultation"
                className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-cyan-400 text-slate-200 hover:text-cyan-400 px-6 py-3 rounded-lg font-semibold transition-all min-h-[48px]"
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
