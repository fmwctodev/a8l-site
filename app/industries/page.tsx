import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  HardHat,
  Heart,
  Landmark,
  Building2,
  Building,
  ShieldAlert,
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

// /industries hub — Implementation Plan §8.1 hub-and-spoke architecture.
// Lists every active industry vertical with one-line value props that
// match the H1 + definition pattern on the underlying detail pages.

export const metadata: Metadata = {
  title: 'Industries',
  description:
    'Custom AI, automation, and software for construction, healthcare, finance, real estate, US government, and the Defense Industrial Base. Built for compliance.',
  alternates: { canonical: 'https://autom8ionlab.com/industries' },
  openGraph: {
    title: 'Industries | Autom8ion Lab',
    description:
      'Custom AI, automation, and software for construction, healthcare, finance, real estate, US government, and the Defense Industrial Base.',
    url: 'https://autom8ionlab.com/industries',
    images: [
      {
        url: 'https://autom8ionlab.com/api/og?title=Industries+We+Serve&section=Autom8ion+Lab',
        width: 1200,
        height: 630,
        alt: 'Industries We Serve',
      },
    ],
  },
  twitter: {
    title: 'Industries | Autom8ion Lab',
    description:
      'Custom AI, automation, and software for compliance-driven industries: construction, healthcare, finance, real estate, US government, and DIB.',
    images: ['https://autom8ionlab.com/api/og?title=Industries+We+Serve&section=Autom8ion+Lab'],
  },
};

type Industry = {
  slug: string;
  title: string;
  hook: string;
  blurb: string;
  icon: LucideIcon;
  accentClass: string;
};

const industries: Industry[] = [
  {
    slug: 'construction',
    title: 'Construction',
    hook: 'Site-to-Office Workflows That Actually Work',
    blurb:
      'AI for plan review, RFI/submittal triage, daily reports, lien waiver workflow, and Davis-Bacon certified payroll — bridging Procore, Sage, and the field apps your foremen actually use.',
    icon: HardHat,
    accentClass: 'text-orange-400',
  },
  {
    slug: 'healthcare',
    title: 'Healthcare & Life Sciences',
    hook: 'HIPAA-Compliant From Day One',
    blurb:
      'HIPAA-compliant AI for clinical documentation, prior authorization, EHR integration, and FDA 21 CFR Part 11 systems. Epic, Cerner, Athena. PHI never leaves your boundary.',
    icon: Heart,
    accentClass: 'text-rose-400',
  },
  {
    slug: 'finance',
    title: 'Finance',
    hook: 'From Private Equity to Banking Operations',
    blurb:
      'Custom AI for portfolio analytics, PE data normalization, SOX-aligned automation, and core banking integrations (Fiserv, Jack Henry, FIS). SOC 2 and bank-level security from day one.',
    icon: Landmark,
    accentClass: 'text-emerald-400',
  },
  {
    slug: 'real-estate-property',
    title: 'Real Estate & Property',
    hook: 'From First Inquiry to Renewed Lease',
    blurb:
      'AI agents for lead capture, lease automation, FCRA-compliant tenant screening, HUD compliance, and property data extraction — across Yardi, AppFolio, RealPage, and the workflow gaps between them.',
    icon: Building2,
    accentClass: 'text-purple-400',
  },
  {
    slug: 'government',
    title: 'US Government',
    hook: 'Civilian, State & Local IT — FedRAMP, FISMA, NIST 800-53',
    blurb:
      'Custom AI, automation, and software for federal civilian agencies, state government IT, and municipal IT. FedRAMP-aligned, FISMA-aware, StateRAMP-ready. SDVOSB pending.',
    icon: Building,
    accentClass: 'text-cyan-400',
  },
  {
    slug: 'defense',
    title: 'Defense Industrial Base',
    hook: 'CMMC 2.0, NIST 800-171 — Engineered for Audit',
    blurb:
      'CMMC 2.0 readiness, NIST 800-171 implementation, and audit-ready documentation for DoD primes and subcontractors. Veteran-owned. SDVOSB pending. UEI YY2DR3KSENH7.',
    icon: ShieldAlert,
    accentClass: 'text-amber-400',
  },
];

export default function IndustriesHubPage() {
  return (
    <>
      <BreadcrumbSchema
        trail={[
          { name: 'Home', href: '/' },
          { name: 'Industries', href: '/industries' },
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
              <span className="text-slate-300">Industries</span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Industries We Serve
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xl text-slate-300 max-w-4xl leading-relaxed">
              Six verticals, every one of them compliance-driven. We don&apos;t take work outside
              these areas — the focus is what makes us useful.
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
                <strong>Industry-specific engineering</strong> is the practice of building AI,
                automation, and software around the workflows, integrations, and compliance
                frameworks that define a vertical — Procore for construction, Epic for healthcare,
                Yardi for property management, CMMC for the DIB. We do not retrofit a generic
                template; we ship systems that fit how the work actually runs.
              </p>
            </section>
          </Reveal>
        </div>
      </section>

      {/* Industries grid */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Where we work</h2>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.06}>
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <StaggerItem key={ind.slug}>
                  <PremiumCard variant="hover" className="p-6 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className={`w-7 h-7 ${ind.accentClass}`} />
                      <h3 className="text-xl font-semibold text-white">{ind.title}</h3>
                    </div>
                    <p className="text-cyan-300 text-sm font-medium mb-4">{ind.hook}</p>
                    <p className="text-slate-300 leading-relaxed mb-6 flex-grow">{ind.blurb}</p>
                    <Link
                      href={`/industries/${ind.slug}`}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium link-underline w-fit"
                    >
                      Explore {ind.title}
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
              Don&apos;t see your vertical?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              These six are where we have the deepest pattern library and the most named
              integrations. If your problem looks like one of them — even from a different
              industry — we should still talk.
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
