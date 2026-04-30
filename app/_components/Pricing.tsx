import React from 'react';
import Link from 'next/link';
import { FileText, ArrowRight, CheckCircle } from 'lucide-react';

// Renamed conceptually from "Pricing" → Engagement Models per locked positioning.
// No dollar tiers. No package pricing. Federal procurement language only.
const Pricing = () => {
  const procurementVehicles = [
    "Single-system task orders",
    "Multi-year IDIQ and BPA arrangements",
    "Fixed-price commercial engagements",
    "Time-and-materials advisory work",
    "SDVOSB-track subcontracting under prime contractors' subcontracting plans",
    "Direct federal, state, and local government procurement vehicles",
  ];

  return (
    <section id="pricing" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Engagement Models</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Engagement models for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">any procurement vehicle</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We scope work to your contract structure — not the other way around.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-900/50 backdrop-blur-sm p-10 md:p-12 rounded-2xl border border-slate-700/50 relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl mb-6 shadow-lg">
                  <FileText className="w-7 h-7 text-white" />
                </div>

                <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  Most projects ship in <strong className="text-white">8–14 weeks</strong>. CMMC remediation engagements run
                  4–9 months. FedRAMP-aligned builds run 6+ months. Quotes are scope-driven and provided after a discovery call.
                  We work transparently on price.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {procurementVehicles.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-slate-800/40 p-4 rounded-lg border border-slate-700/40">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-slate-700/60 bg-slate-800/30 p-6 text-sm md:text-base text-slate-300 mb-10">
                <p className="leading-relaxed">
                  <strong className="text-white">Registered with SAM.gov</strong> — UEI:{' '}
                  <span className="text-cyan-300 font-mono">YY2DR3KSENH7</span> · CAGE:{' '}
                  <span className="text-cyan-300 font-mono">9YCS7</span> · DUNS:{' '}
                  <span className="text-cyan-300 font-mono">05-289-2750</span>. Veteran-owned, SDVOSB Certified · SBA Certified.
                </p>
              </div>

              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/capability-statement"
                    className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Request our capability statement</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/schedule-consultation"
                    className="inline-flex items-center justify-center border border-slate-600 hover:border-cyan-400 text-slate-200 hover:text-cyan-400 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
                  >
                    Schedule a capability briefing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="text-slate-400 text-sm leading-relaxed">
            For RFP responses or vendor onboarding documentation:{' '}
            <a href="mailto:info@autom8ionlab.com" className="text-cyan-400 hover:text-cyan-300">
              info@autom8ionlab.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
