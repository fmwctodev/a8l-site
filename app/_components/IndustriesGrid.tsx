// LOCKED v3 §"Final Homepage Copy" §2 — Industries (PROMOTED above services).
// This is the single biggest IA change from prior versions: industries lead the
// page, services come second. Buyers in our six verticals search by industry +
// problem ("HUD compliance software construction", "Yardi custom integration",
// "CMMC remediation DoD subcontractor"), not by service.

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal, Stagger, StaggerItem, PremiumCard } from './ui';

type IndustryCard = {
  slug: string;
  name: string;
  description: string;
  accent: string;
};

const industries: IndustryCard[] = [
  {
    slug: 'construction',
    name: 'Construction',
    description:
      'Project management automation, AI for takeoff and plan review, custom field apps, accounting and PM integrations. For mid-market and specialty contractors automating their project workflows.',
    accent: 'from-orange-500/20 to-amber-500/10',
  },
  {
    slug: 'healthcare',
    name: 'Healthcare & Life Sciences',
    description:
      'HIPAA-compliant software, AI for clinical and operational workflows, EHR integrations, FDA 21 CFR Part 11 systems. For health systems, payers, life sciences, and medical devices.',
    accent: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    slug: 'finance',
    name: 'Finance',
    description:
      'Custom platforms with SOC 2 and PCI-DSS controls, AI for underwriting and fraud, core banking integrations. For banks, credit unions, fintech, and insurance carriers.',
    accent: 'from-blue-500/20 to-cyan-500/10',
  },
  {
    slug: 'real-estate-property',
    name: 'Real Estate & Property',
    description:
      'Property management automation, FCRA-compliant tenant systems, lease lifecycle, HUD compliance. For property managers, REITs, brokerages, and proptech companies.',
    accent: 'from-violet-500/20 to-purple-500/10',
  },
  {
    slug: 'government',
    name: 'US Government (Federal, State & Local)',
    description:
      'Custom software, AI, and automation for civilian agencies, state government, and municipal IT. FedRAMP, FISMA, NIST 800-53, StateRAMP-aligned. Registered US federal contractor.',
    accent: 'from-cyan-500/20 to-sky-500/10',
  },
  {
    slug: 'defense',
    name: 'Defense Industrial Base',
    description:
      'CMMC 2.0 readiness and custom development for DoD primes and subs. November 2026 Phase 2 deadline approaching — we help DIB suppliers stay eligible.',
    accent: 'from-red-500/20 to-rose-500/10',
  },
];

export default function IndustriesGrid() {
  return (
    <section id="industries" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Built for industries where outcomes matter as much as compliance.
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              We work with six industries that share a common need: custom-built technology that drives
              ROI without creating new compliance, security, or operational risks. Each industry gets an
              audience-specific service approach — not a templated one.
            </p>
          </div>
        </Reveal>

        <Stagger
          staggerDelay={0.06}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((industry) => (
            <StaggerItem key={industry.slug}>
              <Link href={`/industries/${industry.slug}`} className="group block h-full">
                <PremiumCard variant="hover" className="h-full p-6 transition-transform duration-300 group-hover:scale-[1.015]">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${industry.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  />
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {industry.description}
                    </p>
                    <span className="inline-flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </PremiumCard>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
