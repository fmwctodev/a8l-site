// LOCKED v3 §"Final Homepage Copy" §4 — Three core services.

import Link from 'next/link';
import { ArrowRight, Code2, Workflow, ShieldCheck } from 'lucide-react';
import { Reveal, Stagger, StaggerItem, PremiumCard } from './ui';

const services = [
  {
    slug: 'software-development',
    icon: Code2,
    name: 'AI-Powered Enterprise Software & Applications',
    description:
      'Custom-built platforms, internal tools, mobile apps, and customer-facing applications — with AI capabilities integrated where they create real leverage. Full-stack development with security architecture engineered from day one.',
    examples:
      'Internal operations platforms with role-based access and full audit logging; AI-powered document processing; custom CRMs and case management systems; iOS and Android applications built to pass corporate IT security review.',
    accent: 'from-cyan-500 to-blue-500',
  },
  {
    slug: 'workflow-automation',
    icon: Workflow,
    name: 'Workflow & Process Automation',
    description:
      "Custom workflow automation, AI agents, and process automation — deployed where SaaS tools can't go. We build for on-premises, private cloud, and FedRAMP-certified environments.",
    examples:
      'Multi-step approval workflows with full audit trails; AI agents operating inside private networks with no external data transfer; custom integrations between systems where no SaaS connector exists.',
    accent: 'from-purple-500 to-pink-500',
  },
  {
    slug: 'cybersecurity',
    icon: ShieldCheck,
    name: 'Cybersecurity Compliance & Engineering',
    description:
      "CMMC readiness assessments and remediation. NIST 800-171 implementation. HIPAA technical safeguards. SOC 2 Type II preparation. We don't just write policies — we engineer compliant systems and document them for audit.",
    examples:
      'CMMC Level 2 readiness for DoD subcontractors; HIPAA-compliant infrastructure for healthcare clients; SOC 2 audit prep for SaaS companies pursuing enterprise contracts.',
    accent: 'from-emerald-500 to-teal-500',
  },
];

export default function ThreeServices() {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Three core services. One delivery model.
            </h2>
          </div>
        </Reveal>

        <Stagger staggerDelay={0.1} className="grid lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.slug}>
                <Link href={`/solutions/${service.slug}`} className="group block h-full">
                  <PremiumCard
                    variant="hover"
                    className="h-full p-8 flex flex-col shimmer-sheen"
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.accent} flex items-center justify-center mb-5 shadow-glow-cyan transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-slate-300 leading-relaxed mb-4">{service.description}</p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                      <span className="text-cyan-400 font-semibold">Examples: </span>
                      {service.examples}
                    </p>
                    <span className="inline-flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </PremiumCard>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <p className="text-slate-300 text-lg">
              Most engagements blend two or all three. Not sure where you fit?{' '}
              <Link
                href="/schedule-consultation"
                className="text-cyan-400 hover:text-cyan-300 link-underline font-medium"
              >
                Schedule a discovery call →
              </Link>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
