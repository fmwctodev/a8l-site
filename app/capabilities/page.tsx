import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { BreadcrumbSchema, ServiceSchema } from '@/app/_components/Schema';
import CTA from '@/app/_components/CTA';
import { Reveal, Stagger, StaggerItem, PremiumCard, MagneticButton } from '@/app/_components/ui';

export const metadata: Metadata = {
  title: 'Other Capabilities & Supporting Services',
  description:
    'Process automation (RPA), mobile app development, data management, and other capabilities we deliver as part of larger engagements.',
  alternates: { canonical: 'https://autom8ionlab.com/capabilities' },
  openGraph: {
    title: 'Other Capabilities & Supporting Services | Autom8ion Lab',
    description:
      'Process automation, mobile app development, data management, and other supporting capabilities delivered inside larger compliance-driven engagements.',
    url: 'https://autom8ionlab.com/capabilities',
    images: [{ url: 'https://autom8ionlab.com/logo/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Other Capabilities & Supporting Services | Autom8ion Lab',
    description:
      'Process automation, mobile app development, data management, and other supporting capabilities delivered inside larger engagements.',
  },
};

const capabilities = [
  {
    name: 'Process Automation (RPA)',
    description:
      'Internal RPA where commercial RPA tools (UiPath, Automation Anywhere, Blue Prism) are not approved for the environment. Custom workflow orchestration with full audit trails, suitable for FedRAMP-bounded operations and CMMC L2 boundaries. Delivered as part of workflow-automation engagements.',
    parent: { label: 'Workflow Automation', href: '/solutions/workflow-automation' },
  },
  {
    name: 'Mobile App Development',
    description:
      'iOS and Android applications built to pass corporate IT security review. Native (Swift, Kotlin) or React Native depending on requirements. Common scopes: field-service apps for construction crews, patient-facing apps with HIPAA controls, federal-facing apps with Section 508 accessibility. Delivered as part of software-development engagements.',
    parent: { label: 'AI-Powered Software & Apps', href: '/solutions/software-development' },
  },
  {
    name: 'Data Management & Analytics',
    description:
      'Data integration layers, data warehouses, and BI dashboards (Tableau, Power BI, Looker, Metabase) sized to compliance posture. We segment data by classification, build evidence-producing pipelines, and align retention with the framework that governs the engagement (HIPAA, NARA, FCRA, HUD, FFIEC). Delivered as part of software-development or workflow-automation engagements.',
    parent: { label: 'AI-Powered Software & Apps', href: '/solutions/software-development' },
  },
  {
    name: 'API Integrations',
    description:
      'REST, GraphQL, SOAP, and webhook integrations for compliance-heavy stacks where Zapier/Workato/SaaS connectors cannot deploy. Encrypted tunnels, least-privilege access, and full audit logging.',
    parent: { label: 'API Integrations', href: '/solutions/api-integrations' },
  },
  {
    name: 'AI Agents',
    description:
      'AI agents for regulated environments — on-premises, GCC High, FedRAMP-authorized, or HIPAA-aligned deployments. Auditable, documented, no external data transfer.',
    parent: { label: 'AI Agent Development', href: '/solutions/ai-agent-development' },
  },
  {
    name: 'Custom LLM Systems',
    description:
      'Custom and fine-tuned LLM systems for environments where data residency, audit, and security matter. On-premises and private cloud deployments with model lineage and evaluation evidence.',
    parent: { label: 'Custom LLM Systems', href: '/solutions/custom-llm-systems' },
  },
  {
    name: 'Cloud Infrastructure (FedRAMP / GovCloud)',
    description:
      'AWS GovCloud, Azure Government, and commercial cloud — designed for FedRAMP, CMMC, and HIPAA workloads with full controls documentation.',
    parent: { label: 'Cloud Infrastructure', href: '/solutions/cloud-systems' },
  },
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        trail={[
          { name: 'Home', href: '/' },
          { name: 'Capabilities', href: '/capabilities' },
        ]}
      />
      <ServiceSchema
        name="Other Capabilities & Supporting Services"
        serviceType="Process automation, mobile development, data management, integrations"
        url="https://autom8ionlab.com/capabilities"
      />

      <section className="relative min-h-[50vh] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-16">
          <Reveal>
            <nav className="text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-cyan-400">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-300">Capabilities</span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Other Capabilities &amp; Supporting Services
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xl text-slate-300 max-w-4xl leading-relaxed">
              Three core services drive most engagements: AI-powered software, workflow automation, and
              cybersecurity compliance. Below are the supporting capabilities we deliver inside those
              engagements — they don&apos;t warrant their own dedicated pages, but they&apos;re real
              work we do every day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="relative bg-amber-950/20 border border-amber-900/30 rounded-xl p-6 mb-12 overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-0 border border-amber-500/20 animate-pulse-glow rounded-xl pointer-events-none"
              />
              <p className="relative text-slate-200 leading-relaxed">
                <strong className="text-amber-300">Where these used to live:</strong> earlier versions
                of this site listed Process Automation, Mobile App Development, and Data Management as
                standalone solution pages. Per LOCKED v3, those collapse into this page. The work
                didn&apos;t go away — the dedicated landing pages did. Buyers reach us through the
                industry hubs and the three core services.
              </p>
            </div>
          </Reveal>

          <Stagger className="space-y-6" staggerDelay={0.07}>
            {capabilities.map((cap) => (
              <StaggerItem key={cap.name}>
                <PremiumCard variant="hover" className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start group">
                  <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <CheckCircle2 className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">{cap.name}</h2>
                    <p className="text-slate-300 leading-relaxed mb-4">{cap.description}</p>
                    <Link
                      href={cap.parent.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium link-underline"
                    >
                      Parent service: {cap.parent.label}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </PremiumCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Looking for something specific?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              Most engagements blend several of these capabilities. Tell us your environment and your
              priority on a 30-minute discovery call — we&apos;ll map the right combination and tell
              you if we&apos;re a fit.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <MagneticButton href="/schedule-consultation" variant="primary">
              Schedule a discovery call
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
