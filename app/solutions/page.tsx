import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  Brain,
  Workflow as WorkflowIcon,
  Network,
  ShieldCheck,
  Cloud,
  Code2,
  type LucideIcon,
} from 'lucide-react';
import { BreadcrumbSchema } from '@/app/_components/Schema';
import {
  Reveal,
  Stagger,
  StaggerItem,
  PremiumCard,
  MagneticButton,
} from '@/app/_components/ui';
import CTA from '@/app/_components/CTA';

// /solutions hub — Implementation Plan §8.1 hub-and-spoke architecture.
// Single landing page that lists every active solution and lets visitors
// + crawlers + AI engines navigate the full taxonomy from one URL.
//
// Schema: BreadcrumbList. The CollectionPage schema is implicit via the
// Organization+WebSite that app/layout.tsx already declares sitewide; we
// don't redeclare here.

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Custom AI agents, workflow automation, LLM systems, API integrations, cybersecurity engineering, and software development for regulated industries.',
  alternates: { canonical: 'https://autom8ionlab.com/solutions' },
  openGraph: {
    title: 'Solutions | Autom8ion Lab',
    description:
      'Custom AI agents, workflow automation, LLM systems, API integrations, cybersecurity engineering, and software development for regulated industries.',
    url: 'https://autom8ionlab.com/solutions',
    images: [
      {
        url: 'https://autom8ionlab.com/api/og?title=Solutions&section=Autom8ion+Lab',
        width: 1200,
        height: 630,
        alt: 'Autom8ion Lab Solutions',
      },
    ],
  },
  twitter: {
    title: 'Solutions | Autom8ion Lab',
    description:
      'Custom AI agents, workflow automation, LLM systems, API integrations, cybersecurity engineering, and software development.',
    images: ['https://autom8ionlab.com/api/og?title=Solutions&section=Autom8ion+Lab'],
  },
};

type Solution = {
  slug: string;
  title: string;
  blurb: string;
  icon: LucideIcon;
  accentClass: string;
};

const solutions: Solution[] = [
  {
    slug: 'ai-agent-development',
    title: 'AI Agent Development',
    blurb:
      'Custom AI agents that execute multi-step tasks — not just chat. Trained on your data, deployed in your environment, audit-ready from day one.',
    icon: Bot,
    accentClass: 'text-cyan-400',
  },
  {
    slug: 'custom-llm-systems',
    title: 'Custom LLM Systems',
    blurb:
      'Local LLM systems for HIPAA, CMMC, FedRAMP, and FISMA environments. No external data transfer. Built by veteran-led engineers.',
    icon: Brain,
    accentClass: 'text-blue-400',
  },
  {
    slug: 'workflow-automation',
    title: 'Enterprise Workflow Automation',
    blurb:
      'Workflow automation with n8n, Python, and custom integrations — for teams that have outgrown Zapier and need real business logic.',
    icon: WorkflowIcon,
    accentClass: 'text-emerald-400',
  },
  {
    slug: 'api-integrations',
    title: 'Custom API Integrations',
    blurb:
      'Custom API integrations for systems Zapier and Make can’t reach. RESTful, GraphQL, webhooks, and enterprise middleware — built secure, built to last.',
    icon: Network,
    accentClass: 'text-purple-400',
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity Compliance Engineering',
    blurb:
      'CMMC 2.0, NIST 800-171, HIPAA, and SOC 2 readiness — engineered, documented, and audit-ready. We engineer the controls; we partner with assessors when independent assessment is required.',
    icon: ShieldCheck,
    accentClass: 'text-rose-400',
  },
  {
    slug: 'cloud-systems',
    title: 'FedRAMP & GovCloud Architecture',
    blurb:
      'FedRAMP, GovCloud, and commercial cloud architecture for AI workloads. Designed for compliance from day one — AWS, Azure, hybrid.',
    icon: Cloud,
    accentClass: 'text-amber-400',
  },
  {
    slug: 'software-development',
    title: 'Custom Software Development',
    blurb:
      'Full-stack custom software for SaaS, enterprise, and regulated environments. Security architecture and compliance documentation built in from day one.',
    icon: Code2,
    accentClass: 'text-teal-400',
  },
];

export default function SolutionsHubPage() {
  return (
    <>
      <BreadcrumbSchema
        trail={[
          { name: 'Home', href: '/' },
          { name: 'Solutions', href: '/solutions' },
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[55vh] bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-950 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16">
          <Reveal>
            <nav className="text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-cyan-400">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-slate-300">Solutions</span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Custom AI, Automation &amp; Software Solutions
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xl text-slate-300 max-w-4xl leading-relaxed">
              Seven solution lines, each engineered around your workflow, your access model, and the
              compliance frameworks your environment runs on. Most engagements launch in 30 days.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Definition + intro */}
      <section className="py-12 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <section className="definition-block">
              <p className="lead">
                <strong>Autom8ion Lab Solutions</strong> are seven custom-engineered service lines —
                AI agents, LLM systems, workflow automation, API integrations, cybersecurity
                engineering, cloud architecture, and software development — that we deliver around
                the compliance frameworks (HIPAA, CMMC 2.0, NIST 800-171, FedRAMP, SOC 2) your
                environment requires. We do not ship templates. We engineer to spec.
              </p>
            </section>
          </Reveal>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">What we build</h2>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.06}>
            {solutions.map((s) => {
              const Icon = s.icon;
              return (
                <StaggerItem key={s.slug}>
                  <PremiumCard variant="hover" className="p-6 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className={`w-7 h-7 ${s.accentClass}`} />
                      <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                    </div>
                    <p className="text-slate-300 leading-relaxed mb-6 flex-grow">{s.blurb}</p>
                    <Link
                      href={`/solutions/${s.slug}`}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium link-underline w-fit"
                    >
                      Explore {s.title}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </PremiumCard>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Not sure which fits your environment?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Most engagements involve two or three of these working together. Bring us your hardest
              workflow problem and we&apos;ll scope what makes sense — for your stack, your audit
              posture, and your timeline.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <MagneticButton href="/schedule-consultation" variant="primary">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </MagneticButton>
            <p className="mt-6 text-sm text-slate-400">
              Federal contractor identifiers:{' '}
              <Link href="/capability-statement" className="text-cyan-400 link-underline">
                UEI YY2DR3KSENH7 · CAGE 9YCS7 · SDVOSB Pending
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
