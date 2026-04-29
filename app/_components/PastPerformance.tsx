// LOCKED v3 §"Final Homepage Copy" §9 — Past performance.
// Representative scenarios verbatim. No named clients. No fabricated stats.

import Link from 'next/link';
import {
  ArrowRight,
  Hammer,
  Stethoscope,
  Banknote,
  Building2,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { Reveal, Stagger, StaggerItem, PremiumCard } from './ui';

type Scenario = {
  text: string;
  icon: LucideIcon;
  accent: string;
  borderAccent: string;
};

const scenarios: Scenario[] = [
  {
    text: 'Project management automation for a multi-state specialty construction firm, replacing manual reporting workflows across 40+ active projects.',
    icon: Hammer,
    accent: 'from-orange-500 to-amber-500',
    borderAccent: 'before:bg-gradient-to-b before:from-orange-400 before:to-amber-500',
  },
  {
    text: 'HIPAA-aligned patient communication platform for a multi-specialty healthcare group, including SOC 2 prep documentation.',
    icon: Stethoscope,
    accent: 'from-emerald-500 to-teal-500',
    borderAccent: 'before:bg-gradient-to-b before:from-emerald-400 before:to-teal-500',
  },
  {
    text: 'AI-powered document processing for a financial services firm, replacing a manual review process while satisfying internal compliance review.',
    icon: Banknote,
    accent: 'from-blue-500 to-cyan-500',
    borderAccent: 'before:bg-gradient-to-b before:from-blue-400 before:to-cyan-500',
  },
  {
    text: 'Tenant screening and FCRA workflow automation for a multifamily property management company.',
    icon: Building2,
    accent: 'from-violet-500 to-purple-500',
    borderAccent: 'before:bg-gradient-to-b before:from-violet-400 before:to-purple-500',
  },
  {
    text: 'NIST 800-171 controls implementation for a DoD subcontractor pursuing CMMC Level 2 readiness.',
    icon: ShieldCheck,
    accent: 'from-red-500 to-rose-500',
    borderAccent: 'before:bg-gradient-to-b before:from-red-400 before:to-rose-500',
  },
];

export default function PastPerformance() {
  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Past performance.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            Our work spans construction, healthcare, financial services, real estate, and government
            environments. Many engagements are governed by non-disclosure agreements that prevent us
            from naming clients publicly. We provide past performance details and references upon
            request after a qualifying conversation.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4">
            Representative engagements
          </p>
        </Reveal>

        <Stagger staggerDelay={0.08} className="space-y-4 mb-10">
          {scenarios.map((s, i) => {
            const Icon = s.icon;
            return (
              <StaggerItem key={i}>
                <PremiumCard
                  variant="hover"
                  className={`relative p-5 pl-7 before:absolute before:left-0 before:top-3 before:bottom-3 before:w-1 before:rounded-full ${s.borderAccent}`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${s.accent} flex items-center justify-center shadow-glow-cyan`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-slate-300 leading-relaxed pt-1.5">{s.text}</p>
                  </div>
                </PremiumCard>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal>
          <Link
            href="/schedule-consultation"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-semibold link-underline"
          >
            <span>
              Schedule a discovery call to discuss past performance applicable to your specific
              opportunity
            </span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
