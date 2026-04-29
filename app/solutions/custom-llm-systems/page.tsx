import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Brain,
  Cpu,
  Lock,
  Zap,
  Network,
  Database,
  Shield,
  CheckCircle2,
} from 'lucide-react';
import { BreadcrumbSchema, ServiceSchema } from '@/app/_components/Schema';
import {
  Reveal,
  Stagger,
  StaggerItem,
  PremiumCard,
  MagneticButton,
  ComparisonTable,
  type ComparisonRow,
} from '@/app/_components/ui';
import CTA from '@/app/_components/CTA';
import RelatedSolutions from '@/app/_components/RelatedSolutions';

export const metadata: Metadata = {
  title: 'Custom LLM Systems for Enterprise Business Data | Private AI for Tech, Healthcare & Finance',
  description:
    'Custom LLM systems for enterprise business data. Private deployment, SOC 2 protocols, encryption in transit and at rest, no public AI dependency. 30-day launch. SDVOSB Pending. UEI: YY2DR3KSENH7.',
  keywords:
    'custom LLM systems, private LLM deployment, enterprise LLM, SOC 2 LLM, secure document workflows, private AI deployment, on-prem LLM, secure AI document processing, private enterprise AI',
  alternates: { canonical: 'https://autom8ionlab.com/solutions/custom-llm-systems' },
  openGraph: {
    title: 'Custom LLM Systems for Enterprise Business Data | Autom8ion Lab',
    description:
      'Private LLM deployment with SOC 2 protocols, encryption in transit and at rest. Built around your documents, workflows, and access controls. 30-day launch. SDVOSB Pending — UEI: YY2DR3KSENH7.',
    url: 'https://autom8ionlab.com/solutions/custom-llm-systems',
    images: [{ url: 'https://autom8ionlab.com/logo/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Custom LLM Systems for Enterprise Business Data | Autom8ion Lab',
    description:
      'Private LLM deployment, SOC 2 protocols, encryption in transit and at rest. Built around your documents, workflows, and access controls.',
  },
};

const buyers = [
  {
    name: 'Teams using public AI on sensitive business data',
    body:
      'If employees are feeding contracts, customer records, internal documentation, financial data, support history, or operational knowledge into ChatGPT or Claude, your information is leaving your control boundary. That is a privacy problem, a governance problem, and a security problem.',
  },
  {
    name: 'Companies that need AI grounded in their own corpus',
    body:
      'A business AI system is only useful if it understands your documents, your terminology, and your internal rules. Off-the-shelf AI is not built for enterprise data. You need a custom LLM system that runs inside your environment and is built around your documents, workflows, and access controls from day one.',
  },
  {
    name: 'Regulated operations that demand SOC 2 alignment',
    body:
      'You need private LLM deployment, secure retrieval architecture, and full control over model access, storage, logging, and integrations. We design environments with strong encryption in transit and at rest, and we align implementation with SOC 2 protocols.',
  },
  {
    name: 'Defense and government teams with federal-aware needs',
    body:
      'For defense contractors, federal agencies, and regulated teams with government-specific requirements, we also support deployments that account for federal security and procurement realities — FedRAMP-aware deployment paths and NIST-focused control alignment when the environment requires them.',
  },
];

const whatWeBuild = [
  {
    icon: Brain,
    title: 'Private LLM Deployment for Data Privacy and SOC 2 Protocols',
    body:
      'The standard for enterprise AI is simple: keep sensitive business data inside your control boundary. That means the model, retrieval layer, document pipeline, and user interface run inside a private environment, not through a public endpoint. When we deploy a private LLM system or private-cloud architecture, your sensitive data stays inside your perimeter. Documents do not get forwarded to public APIs. Prompts do not get routed through third-party AI vendors. Outputs remain governed by your internal controls. We build private inference environments that prioritize data privacy, secure access, auditability, and SOC 2 protocols. You get AI capability without giving up control.',
  },
  {
    icon: Cpu,
    title: 'Custom LLM Systems Built Around Your Enterprise Data',
    body:
      'A business AI system is only useful if it understands your documents, your terminology, and your internal rules. We focus on secure document workflows backed by your operational data and business logic. We use your internal documentation, contracts, knowledge bases, compliance records, SOPs, support history, policies, and structured systems to build an LLM workflow that reflects how your business actually runs. Document extraction with context. Classification and routing. Grounded responses anchored to approved internal sources. Business-specific model behavior tuned to your processes instead of forcing your team into a generic chatbot.',
  },
  {
    icon: Lock,
    title: 'Security Architecture for Private Enterprise AI',
    body:
      'A model alone does not solve the real problem. You need security architecture that protects sensitive data and supports enterprise deployment requirements at every layer. Private deployment boundaries — on-premise or private cloud with strict network controls and no public AI dependency. Private LLM hosting inside your controlled environment. SOC 2 protocol alignment across access control, logging, change management, and secure data handling. Role-based access control. Encryption in transit and at rest. Audit logging and traceability for every interaction. Custom API integrations into your source systems without bypassing your controls.',
  },
];

const applications = [
  {
    icon: Zap,
    title: 'Document Extraction With Context',
    body:
      'Pull key fields, clauses, requirements, and exceptions from complex files without relying on manual review. Built around your internal documentation, contracts, and operational records so the system understands your terminology, exceptions, and approved formats — not generic templates.',
  },
  {
    icon: Database,
    title: 'Classification and Routing',
    body:
      'Identify document types, tag sensitive records, and move data into the right downstream workflow automatically. Tied to your access model and approval logic so routing decisions follow your operating rules, with full audit logging on every action.',
  },
  {
    icon: Network,
    title: 'Grounded Responses',
    body:
      'Anchor outputs to approved internal sources so the system answers based on your environment, not internet guesswork. Critical when handling customer records, contracts, internal documentation, financial data, regulated information, and proprietary workflows.',
  },
  {
    icon: Shield,
    title: 'Business-Specific Model Behavior',
    body:
      'Tune prompts, retrieval logic, and workflows around your actual processes instead of forcing your team into a generic chatbot. This is the difference between a chatbot and a production system — built for private enterprise operations, controlled environments, and practical execution.',
  },
];

const industries = [
  {
    name: 'Tech',
    body:
      'Custom LLM systems for tech companies handling sensitive customer records, internal documentation, contracts, and proprietary operating knowledge. Private deployment inside your perimeter, SOC 2 protocol alignment, RBAC, and full audit logging — so engineering, support, and operations teams get AI capability without leaking data through public endpoints.',
  },
  {
    name: 'Construction',
    body:
      'Document extraction, classification, and routing for construction operations — contracts, specs, submittals, and operational records. Grounded responses anchored to your project documentation, internal SOPs, and approved sources so the system answers based on your environment, not internet guesswork. Built for real workflows, not demos.',
  },
  {
    name: 'Healthcare',
    body:
      'Secure document workflows for healthcare teams handling sensitive records, internal documentation, and compliance artifacts. Private inference environments with encryption in transit and at rest, role-based access, and audit logging for every retrieval event and workflow action — so AI processing stays inside your security boundary.',
  },
  {
    name: 'Finance',
    body:
      'Custom LLM systems for finance operations handling contracts, financial files, support data, and proprietary operating knowledge. Private LLM hosting inside your controlled environment, SOC 2 protocol alignment, and integrations with your source systems through secure APIs — designed deliberately to keep sensitive business information inside your control boundary.',
  },
];

const comparisonRows: ComparisonRow[] = [
  {
    label: 'Data residency',
    values: ['Your environment, your perimeter', 'Sent to public provider', 'Vendor-controlled cloud'],
  },
  {
    label: 'Training set isolation',
    values: [
      'Your data never trains public models',
      'May be retained for training',
      'Vendor-defined, opaque',
    ],
  },
  {
    label: 'Fine-tuning on your corpus',
    values: [
      'Yes — SOPs, policies, prior outputs',
      'Limited or none',
      "Vendor's marketplace, generic",
    ],
  },
  {
    label: 'Encryption + access control',
    values: [
      'SOC 2-aligned, in transit + at rest',
      'Provider-controlled',
      'Vendor-controlled',
    ],
  },
  {
    label: 'Audit logging',
    values: [
      'Per-prompt, per-output traceability',
      'Provider logs only',
      'Vendor logs only',
    ],
  },
  {
    label: 'Deployment options',
    values: [
      'Private cloud, on-prem, GCC High',
      'Public cloud only',
      'Vendor SaaS only',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        trail={[
          { name: 'Home', href: '/' },
          { name: 'Solutions', href: '/#services' },
          { name: 'Custom LLM Systems', href: '/solutions/custom-llm-systems' },
        ]}
      />
      <ServiceSchema
        name="Custom LLM Systems for Enterprise Business Data"
        serviceType="Private LLM deployment, secure document workflows, SOC 2-aligned retrieval architecture, secure API integrations"
        url="https://autom8ionlab.com/solutions/custom-llm-systems"
        industry="All"
      />

      <section className="relative min-h-[55vh] bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-950 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16">
          <nav className="text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-cyan-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-300">Solutions</span>
            <span className="mx-2">/</span>
            <span className="text-slate-300">Custom LLM Systems</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Custom LLM Systems for Enterprise Business Data
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl leading-relaxed">
            Private LLM systems built around your documents, workflows, and access controls. Your
            data stays under your control — your documents, prompts, and outputs stay in your
            environment. Strong encryption in transit and at rest, aligned with SOC 2 protocols.
            30-day launch.
          </p>
        </div>
      </section>

      {/* DEFINITION BLOCK */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Public AI creates risk when your team is working with sensitive business data. If
            employees are feeding contracts, customer records, internal documentation, financial
            data, support history, or operational knowledge into ChatGPT or Claude, your information
            is leaving your control boundary. That is a privacy problem, a governance problem, and a
            security problem. Off-the-shelf AI is not built for enterprise data. You need a custom
            LLM system that runs inside your environment and is built around your documents,
            workflows, and access controls from day one.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            At Autom8ion Lab, we build custom LLM systems for enterprise business data with one
            clear rule: your data stays under your control. Your documents stay in your environment.
            Your prompts stay in your environment. Your outputs stay in your environment. We don&apos;t
            bolt generic AI onto critical workflows. We build private AI systems around your
            business logic, your internal data, and your operating requirements. Our systems are
            built for teams that need private LLM deployment, secure retrieval architecture, and
            full control over model access, storage, logging, and integrations. We design
            environments with strong encryption in transit and at rest, and we align implementation
            with SOC 2 protocols.
          </p>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Who this is for</h2>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-4" staggerDelay={0.06}>
            {buyers.map((b) => (
              <StaggerItem key={b.name}>
                <PremiumCard variant="hover" className="p-6 h-full">
                  <h3 className="text-white font-semibold mb-3">{b.name}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{b.body}</p>
                </PremiumCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* WHAT WE ACTUALLY BUILD */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              What we actually build
            </h2>
          </Reveal>
          <Stagger className="space-y-6" staggerDelay={0.08}>
            {whatWeBuild.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <PremiumCard variant="hover" className="p-6 group">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-glow-cyan transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-slate-300 leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  </PremiumCard>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Private LLM vs. public API wrapper vs. generic AI vendor
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8 max-w-3xl">
              Three deployment patterns most teams evaluate when AI moves into sensitive workflows.
              Each is the right answer for a different scope.
            </p>
          </Reveal>

          <ComparisonTable
            headers={[
              'Dimension',
              'Autom8ion Lab (private LLM)',
              'Public LLM API wrapper',
              'Generic AI vendor',
            ]}
            rows={comparisonRows}
            primaryColumnClass="text-emerald-400"
          />
        </div>
      </section>

      {/* SECURE DOCUMENT WORKFLOWS */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Secure document workflows backed by your data
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              This is not a generic chatbot. It is a custom LLM system built for private enterprise
              operations, controlled environments, and practical execution.
            </p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-4" staggerDelay={0.06}>
            {applications.map((a) => {
              const Icon = a.icon;
              return (
                <StaggerItem key={a.title}>
                  <PremiumCard variant="hover" className="p-6 h-full group">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-glow-cyan transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-white font-semibold ml-3">{a.title}</h3>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{a.body}</p>
                  </PremiumCard>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* INDUSTRY USE CASES */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Custom LLM systems for commercial industries
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              Built for Tech, Construction, Healthcare, and Finance teams that need AI capability
              without giving up control of their data.
            </p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-4" staggerDelay={0.06}>
            {industries.map((i) => (
              <StaggerItem key={i.name}>
                <PremiumCard variant="hover" className="p-6 h-full">
                  <h3 className="text-white font-semibold mb-2">{i.name}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{i.body}</p>
                </PremiumCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* INTEGRATIONS PROSE */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Integrations with your existing systems
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-slate-300 leading-relaxed">
              We build custom{' '}
              <Link href="/solutions/api-integrations" className="text-cyan-400 link-underline">
                API integrations
              </Link>{' '}
              so the LLM connects to your source systems without bypassing your controls. Pair with
              our{' '}
              <Link href="/solutions/ai-agent-development" className="text-cyan-400 link-underline">
                AI agent development
              </Link>{' '}
              work when you need agents that execute decisions on top of LLM outputs, our{' '}
              <Link href="/solutions/workflow-automation" className="text-cyan-400 link-underline">
                workflow automation
              </Link>{' '}
              when LLM outputs need to drive downstream tasks, our{' '}
              <Link href="/solutions/cybersecurity" className="text-cyan-400 link-underline">
                cybersecurity and compliance
              </Link>{' '}
              work for governance support, and our{' '}
              <Link href="/solutions/cloud-systems" className="text-cyan-400 link-underline">
                scalable cloud infrastructure
              </Link>{' '}
              when private deployment needs the right foundation underneath it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHY COMPANIES CHOOSE US + FEDERAL CREDENTIALS */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why companies choose Autom8ion Lab
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-6">
              Your AI system should not send sensitive business data outside your environment. You
              need a partner who understands software development, security architecture, private AI
              deployment, and the operational reality inside growing companies. Instead of forcing
              public AI into workflows it was never designed to handle, build a custom system that
              runs securely inside your stack. We deliver custom LLM systems for enterprise business
              data with private deployment options, encryption in transit and at rest, and practical
              automation built around your operations.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-slate-300 leading-relaxed mb-8">
              We do not measure success by demo quality. We measure it by security, speed, and
              operational impact. Teams that replace public AI with Autom8ion Lab&apos;s custom LLM
              systems gain real control and real results — private data handling for sensitive
              prompts, documents, and outputs with no external data transfer; 30-day launch
              timelines for clearly scoped use cases; faster document processing through
              extraction, classification, retrieval, and summarization workflows; SOC 2 protocol
              alignment across access control, logging, change management, and secure data
              handling; and founder-led delivery with senior engineering involvement from scoping
              through go-live. For defense contractors, federal agencies, and regulated teams with
              government-specific requirements, we also support deployments that account for
              federal security and procurement realities. If you need a commercial-first AI system
              with a path into defense or government requirements, we can build for that from the
              start.
            </p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-3 text-sm" staggerDelay={0.04}>
            {[
              'UEI: YY2DR3KSENH7',
              'CAGE: 9YCS7',
              'SDVOSB Pending — veteran-owned',
              'FedRAMP-aware deployment support',
              'NIST-focused control alignment',
              'SOC 2-aligned security practices by default',
            ].map((f) => (
              <StaggerItem key={f}>
                <PremiumCard
                  variant="hover"
                  className="px-4 py-3 text-slate-200 flex items-center space-x-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{f}</span>
                </PremiumCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative border-t border-slate-900/50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-white mb-4">
              Stop exposing sensitive data. Start processing it securely.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              If your team is still using public AI to process sensitive business data, you have a
              security gap. You also have an execution problem. If you need a custom enterprise LLM
              system, secure private deployment, or a 30-day launch plan for a high-value AI use
              case, get in touch and let&apos;s see if this works for you.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <MagneticButton href="/schedule-consultation" variant="primary">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </MagneticButton>
            <p className="mt-6 text-sm text-slate-400">
              Federal contractor identifiers:{' '}
              <Link href="/capability-statement" className="text-cyan-400 link-underline">
                UEI YY2DR3KSENH7 · CAGE 9YCS7 · SDVOSB Pending
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <CTA />
      <RelatedSolutions currentSlug="custom-llm-systems" />
    </>
  );
}
