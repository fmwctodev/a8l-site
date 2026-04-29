'use client';

// LOCKED v3 §"Final Homepage Copy" §6 — Compliance frameworks table.
// Rows verbatim from LOCKED v3.

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Reveal, Stagger, StaggerItem } from './ui';

const frameworks: { name: string; applies: string; deliver: string }[] = [
  {
    name: 'HIPAA / HITECH',
    applies: 'Healthcare entities and business associates',
    deliver: 'Technical safeguards, encryption, access controls, audit logging',
  },
  {
    name: 'SOC 2 Type II',
    applies: 'SaaS and service organizations',
    deliver: 'Control design, evidence collection, audit prep',
  },
  {
    name: 'FCRA',
    applies: 'Tenant screening, background check use cases',
    deliver: 'Adverse action workflow, consumer disclosure, dispute handling',
  },
  {
    name: 'HUD',
    applies: 'Affordable housing, federal construction',
    deliver: 'HUD-50059, MOR, EIV, REAC compliance documentation',
  },
  {
    name: 'PCI-DSS',
    applies: 'Anyone handling cardholder data',
    deliver: 'Scoping, segmentation, control implementation',
  },
  {
    name: 'FFIEC',
    applies: 'Banks, credit unions, fintech',
    deliver: 'IT examination handbook alignment',
  },
  {
    name: 'CMMC 2.0 (Levels 1–3)',
    applies: 'DoD contractors handling FCI or CUI',
    deliver: 'NIST 800-171 controls, SSP/POA&M, audit-ready documentation',
  },
  {
    name: 'NIST 800-171 Rev 2',
    applies: 'Federal contractors, DIB',
    deliver: 'Full controls implementation, scoping, evidence collection',
  },
  {
    name: 'NIST 800-53',
    applies: 'Federal agencies, FedRAMP environments',
    deliver: 'Control selection, implementation, continuous monitoring',
  },
  {
    name: 'FedRAMP Moderate / High',
    applies: 'Cloud services for federal use',
    deliver: 'System Security Plan, control implementation, 3PAO prep',
  },
  {
    name: 'FDA 21 CFR Part 11',
    applies: 'Life sciences with electronic records',
    deliver: 'Validated systems, e-signature controls, audit trails',
  },
  {
    name: 'Section 508',
    applies: 'Federal-facing applications',
    deliver: 'Accessibility design, audit, remediation',
  },
];

export default function ComplianceFrameworks() {
  const reduceMotion = useReducedMotion();

  const rowContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.04 },
    },
  };
  const rowItemVariants: Variants = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Frameworks our work is engineered to satisfy.
            </h2>
          </div>
        </Reveal>

        {/* Desktop table — row-by-row reveal with hover accent bar */}
        <Reveal>
          <div className="hidden md:block overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900/60 to-slate-900/30 backdrop-blur-sm">
            <table className="w-full text-left">
              <thead className="bg-slate-900/60 border-b border-slate-800">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                    Framework
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                    Where it applies
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                    What we deliver
                  </th>
                </tr>
              </thead>
              <motion.tbody
                className="divide-y divide-slate-800"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={rowContainerVariants}
              >
                {frameworks.map((f) => (
                  <motion.tr
                    key={f.name}
                    variants={rowItemVariants}
                    className="group relative hover:bg-slate-900/60 transition-colors"
                  >
                    {/* Hover accent bar (left edge) */}
                    <td className="relative px-6 py-4 text-white font-semibold">
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
                      />
                      {f.name}
                    </td>
                    <td className="px-6 py-4 text-slate-300 text-sm">{f.applies}</td>
                    <td className="px-6 py-4 text-slate-300 text-sm">{f.deliver}</td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </div>
        </Reveal>

        {/* Mobile stacked cards — same stagger via Stagger primitive */}
        <Stagger staggerDelay={0.05} className="md:hidden grid gap-4">
          {frameworks.map((f) => (
            <StaggerItem key={f.name}>
              <div className="bg-gradient-to-br from-slate-900/60 to-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-lg p-5">
                <div className="text-white font-semibold mb-2">{f.name}</div>
                <div className="text-cyan-400 text-xs uppercase tracking-wider mb-1">Where it applies</div>
                <div className="text-slate-300 text-sm mb-3">{f.applies}</div>
                <div className="text-cyan-400 text-xs uppercase tracking-wider mb-1">What we deliver</div>
                <div className="text-slate-300 text-sm">{f.deliver}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
