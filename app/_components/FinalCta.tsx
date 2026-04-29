// LOCKED v3 §"Final Homepage Copy" §11 — Final CTA.

import { Calendar, Mail, ArrowRight } from 'lucide-react';
import { Reveal, MagneticButton } from './ui';

export default function FinalCta() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated gradient mesh */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-mesh-gradient bg-[length:200%_200%] animate-gradient-shift opacity-80"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/60"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to talk about a project?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            30-minute discovery call. Tell us your environment and your priority. We&apos;ll tell you if
            we&apos;re a fit.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MagneticButton href="/schedule-consultation" variant="primary">
              <Calendar className="w-5 h-5" />
              Schedule a discovery call
              <ArrowRight className="w-5 h-5" />
            </MagneticButton>

            <MagneticButton href="mailto:info@autom8ionlab.com" variant="secondary">
              <Mail className="w-5 h-5" />
              Email info@autom8ionlab.com
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
