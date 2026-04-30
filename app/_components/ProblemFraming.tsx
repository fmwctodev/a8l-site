// LOCKED v3 §"Final Homepage Copy" §3 — Problem framing.

import { Reveal } from './ui';

export default function ProblemFraming() {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        {/* Pulsing gradient accent bar — visual anchor for the prose */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-8 bottom-8 w-1 rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 animate-pulse-glow shadow-glow-cyan"
        />

        <div className="pl-8">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              When the software your team needs has to ship fast{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                AND pass review
              </span>
              .
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Most technology vendors force a choice. Off-the-shelf SaaS tools move fast but rarely fit
              your compliance, integration, or workflow requirements. Traditional integrators understand
              compliance but ship slowly and treat AI as an afterthought.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="text-lg text-slate-300 leading-relaxed">
              We close that gap. Software and AI builders who design for HIPAA, SOC 2, CMMC, NIST 800-171,
              and FCRA from the first whiteboard sketch — backed by an in-house cybersecurity compliance
              arm and the federal contractor credentials to deliver in your environment.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
