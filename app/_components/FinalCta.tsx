// LOCKED v3 §"Final Homepage Copy" §11 — Final CTA.

import Link from 'next/link';
import { Calendar, Mail, ArrowRight } from 'lucide-react';

export default function FinalCta() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to talk about a project?
        </h2>

        <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
          30-minute discovery call. Tell us your environment and your priority. We'll tell you if we're a
          fit.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/schedule-consultation"
            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-blue-600 transition-all transform hover:scale-105"
          >
            <Calendar className="w-5 h-5" />
            <span>Schedule a discovery call</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="mailto:info@autom8ionlab.com"
            className="group inline-flex items-center space-x-2 border border-slate-600 hover:border-cyan-400 text-slate-200 hover:text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>Email info@autom8ionlab.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
