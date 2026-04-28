// LOCKED v3 §"Final Homepage Copy" §9 — Past performance.
// Representative scenarios verbatim. No named clients. No fabricated stats.

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const scenarios = [
  'Project management automation for a multi-state specialty construction firm, replacing manual reporting workflows across 40+ active projects.',
  'HIPAA-aligned patient communication platform for a multi-specialty healthcare group, including SOC 2 prep documentation.',
  'AI-powered document processing for a financial services firm, replacing a manual review process while satisfying internal compliance review.',
  'Tenant screening and FCRA workflow automation for a multifamily property management company.',
  'NIST 800-171 controls implementation for a DoD subcontractor pursuing CMMC Level 2 readiness.',
];

export default function PastPerformance() {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Past performance.
        </h2>

        <p className="text-lg text-slate-300 leading-relaxed mb-8">
          Our work spans construction, healthcare, financial services, real estate, and government
          environments. Many engagements are governed by non-disclosure agreements that prevent us from
          naming clients publicly. We provide past performance details and references upon request after
          a qualifying conversation.
        </p>

        <p className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4">
          Representative engagements
        </p>

        <ul className="space-y-4 mb-10">
          {scenarios.map((s) => (
            <li
              key={s}
              className="flex items-start space-x-3 bg-slate-900/40 border border-slate-800 rounded-lg p-5"
            >
              <ArrowRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span className="text-slate-300 leading-relaxed">{s}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/schedule-consultation"
          className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-4"
        >
          <span>Schedule a discovery call to discuss past performance applicable to your specific opportunity</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
