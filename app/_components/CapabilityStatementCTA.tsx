// LOCKED v3 §"Final Homepage Copy" §8 — Capability statement CTA.

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './ui';
import CapabilityRequestButton from './CapabilityRequestButton';

export default function CapabilityStatementCTA() {
  return (
    <section className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 rounded-2xl p-10 md:p-14 overflow-hidden bg-mesh-gradient">
            {/* Animated gradient sheen behind content */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 animate-gradient-shift bg-[length:200%_100%]"
            />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Our capability statement.
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-3xl">
                Looking to add Autom8ion Lab to your vendor list, qualified vendor pool, or prime/sub
                team? Request the latest PDF — registration data, NAICS codes, core competencies,
                and contact information — delivered to your inbox instantly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <CapabilityRequestButton variant="primary">
                  Download capability statement (PDF)
                </CapabilityRequestButton>

                <Link
                  href="/capability-statement"
                  className="group inline-flex items-center justify-center space-x-2 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-cyan-400 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <span>View online</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <p className="text-sm text-slate-400">
                For RFP responses or vendor onboarding documentation:{' '}
                <a
                  href="mailto:info@autom8ionlab.com"
                  className="text-cyan-400 hover:text-cyan-300 link-underline"
                >
                  info@autom8ionlab.com
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
