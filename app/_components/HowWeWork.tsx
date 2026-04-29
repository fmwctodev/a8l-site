'use client';

// LOCKED v3 §"Final Homepage Copy" §5 — How we work (four-phase delivery process).
// 'use client' because Timeline takes phases with Lucide icon function refs as
// props — those can't cross the RSC server→client boundary as plain objects.

import { Search, Layers, Hammer, Rocket } from 'lucide-react';
import { Reveal, Timeline, type TimelinePhase } from './ui';

const phases: TimelinePhase[] = [
  {
    icon: Search,
    name: 'Phase 1 — Discovery & Scoping',
    duration: '1–2 weeks',
    body:
      'We map your current state, identify the data classifications and compliance frameworks that govern the engagement, and define a clear scope. Output: a scoping document and architecture proposal that an internal security review can approve.',
  },
  {
    icon: Layers,
    name: 'Phase 2 — Architecture & Design',
    duration: '2–3 weeks',
    body:
      'We design the system with controls baked into the architecture — not added after the build. Includes data flow diagrams, control mapping, and System Security Plan drafts when relevant.',
  },
  {
    icon: Hammer,
    name: 'Phase 3 — Build, Validate & Document',
    duration: 'scope-dependent',
    body:
      "We build the system, document every control implementation, and validate against the relevant framework's requirements. Code review, security testing, and audit-ready documentation produced as we go — not at the end.",
  },
  {
    icon: Rocket,
    name: 'Phase 4 — Deployment & Ongoing Support',
    duration: '2 weeks + as-needed',
    body:
      'We deploy to production in your environment, hand off complete documentation packages, and provide post-launch support during the first compliance review or audit cycle.',
  },
];

export default function HowWeWork() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              A delivery process designed for outcomes and audit.
            </h2>
          </div>
        </Reveal>

        <Timeline phases={phases} />

        <Reveal delay={0.15}>
          <p className="text-center text-slate-400 mt-16 text-lg">
            Most projects ship in <span className="text-white font-semibold">8–14 weeks</span>. CMMC
            remediation runs <span className="text-white font-semibold">4–9 months</span>. FedRAMP-aligned
            builds run <span className="text-white font-semibold">6+ months</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
