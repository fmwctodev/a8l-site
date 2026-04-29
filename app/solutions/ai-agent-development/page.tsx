import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Brain,
  MessageSquare,
  Users,
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
  title: 'Custom AI Agent Development',
  description:
    'Custom AI agents that execute multi-step tasks, not just chat. Trained on your data, deployed in your environment, audit-ready from day one.',
  keywords:
    'custom AI agents, commercial AI agents, SOC 2 AI agents, AI agent development, business AI automation, private AI deployment, AI agents for tech, construction AI, healthcare AI agents, finance AI agents, 30-day AI launch',
  alternates: { canonical: 'https://autom8ionlab.com/solutions/ai-agent-development' },
  openGraph: {
    title: 'Custom AI Agent Development | Autom8ion Lab',
    description:
      'Custom AI agents that execute multi-step tasks, not just chat. Trained on your data, deployed in your environment, audit-ready from day one.',
    url: 'https://autom8ionlab.com/solutions/ai-agent-development',
    images: [{
      url: 'https://autom8ionlab.com/api/og?title=Custom+AI+Agent+Development&section=Solutions',
      width: 1200,
      height: 630,
      alt: 'AI Agent Development for Commercial Operations',
    }],
  },
  twitter: {
    title: 'Custom AI Agent Development | Autom8ion Lab',
    description:
      'Custom AI agents that execute multi-step tasks, not just chat. Trained on your data, deployed in your environment, audit-ready from day one.',
    images: ['https://autom8ionlab.com/api/og?title=Custom+AI+Agent+Development&section=Solutions'],
  },
};

const buyers = [
  {
    name: 'Teams stuck on inboxes, spreadsheets, and manual review chains',
    body:
      'Operational bottlenecks kill momentum. Your teams lose time in repetitive intake, manual review, status checks, and disconnected systems. Generic AI makes that worse — shallow answers, weak controls, and no operational accountability.',
  },
  {
    name: 'Companies done with AI vendors selling wrappers',
    body:
      'Most AI vendors sell wrappers around public models. That does not work in real operating environments. If the system is not grounded in your actual workflows, scoped to your users, and deployed with the right controls, it becomes a liability fast.',
  },
  {
    name: 'Operations leaders who need measurable productivity gains',
    body:
      'If your team is still pushing the same requests, forms, approvals, and updates by hand, you are spending high-value labor on low-value tasks. Our AI agents remove that drag and deliver measurable productivity gains by executing repeatable work with speed, consistency, and full traceability.',
  },
  {
    name: 'Regulated industries that need SOC 2-aligned execution',
    body:
      'Companies need systems that improve speed without creating security gaps. Our AI agent development is designed for environments where security, documentation, and execution discipline are non-negotiable — SOC 2-aligned practices with logging, access control, encryption, segmentation, and traceability from the start.',
  },
];

const whatWeBuild = [
  {
    icon: Brain,
    title: 'Custom AI Agents for Real Business Work',
    body:
      'We build AI agents that do more than answer questions. They handle intake, classify requests, retrieve approved information, trigger actions, and move work through the right systems. Business-grounded outputs use your policies, SOPs, forms, and internal documentation. Role-based actions follow your access model, approval logic, and operating rules. Real execution: agents route cases, generate drafts, summarize records, update systems, and support decision workflows. Custom system design, built around your process. No templates. No generic behavior.',
  },
  {
    icon: MessageSquare,
    title: 'Built for Security and Operational Control',
    body:
      'Companies need systems that improve speed without creating security gaps. Our AI agent development is designed for environments where security, documentation, and execution discipline are non-negotiable. SOC 2-aligned security practices with logging, access control, encryption, segmentation, and traceability from the start. Workflow discipline that is repeatable, auditable, and operationally useful. System integration through our API integrations so work moves without manual re-entry. Fast deployment in 30 days so you solve the bottleneck now, not next quarter.',
  },
  {
    icon: Users,
    title: 'Company-Specific AI Agent Training',
    body:
      "We do not believe in one-size-fits-all AI. In commercial environments, that approach breaks fast. A deployable AI agent must reflect your workflow, your approved documentation, and your operating rules. Every system we build is trained on your company-specific data and bounded by your business logic. We use your policies, SOPs, system documentation, knowledge bases, forms, and operational records to ground the agent's behavior. That keeps outputs aligned to approved procedures and gives you stronger control over what the AI can access, generate, and execute inside your environment.",
  },
];

const useCases = [
  {
    name: 'Tech: Internal Operations & Support Automation',
    bodyJsx: (
      <>
        Replace inboxes, spreadsheets, and manual review chains with AI agents that handle intake,
        classify requests, retrieve approved information, and trigger actions across your stack.
        Agents are grounded in your SOPs, internal documentation, and operational records — not
        internet guesswork — and connect into your existing tools through our{' '}
        <Link href="/solutions/api-integrations" className="text-cyan-400 link-underline">
          API integrations
        </Link>{' '}
        so work moves without manual re-entry.
      </>
    ),
  },
  {
    name: 'Construction: RFI, Submittal & Field Coordination',
    bodyJsx: (
      <>
        Deploy AI agents that triage RFIs and submittals, route them to the right reviewer, and
        draft suggested responses grounded in project plans, specs, and prior responses. Custom-built
        around your access model so every action follows your approval logic, with audit-ready
        logging tied directly into your existing{' '}
        <Link href="/solutions/workflow-automation" className="text-cyan-400 link-underline">
          workflow automation
        </Link>
        .
      </>
    ),
  },
  {
    name: 'Healthcare: Intake, Documentation & Operational Workflows',
    bodyJsx: (
      <>
        AI agents that handle intake, classify documents, summarize records, and update systems
        with role-based access, approval logic, and traceable execution. Deployed inside private
        cloud or on-premises environments aligned to SOC 2 practices, integrated with our{' '}
        <Link href="/solutions/cybersecurity" className="text-cyan-400 link-underline">
          cybersecurity and compliance
        </Link>{' '}
        work to keep sensitive data inside your control boundary.
      </>
    ),
  },
  {
    name: 'Finance & Federal: Controlled Operations',
    bodyJsx: (
      <>
        AI agents engineered for finance operations and federal-aware deployments where logging,
        encryption, segmentation, and traceability matter from day one. Where your environment
        requires it, we support FedRAMP-aware deployment paths and NIST-focused control alignment
        alongside the SOC 2-aligned practices we apply by default. Pair with our{' '}
        <Link href="/solutions/custom-llm-systems" className="text-cyan-400 link-underline">
          custom LLM systems
        </Link>{' '}
        when sensitive business data must stay inside your perimeter.
      </>
    ),
  },
];

const comparisonRows: ComparisonRow[] = [
  {
    label: 'Trained on your data',
    values: [
      'Yes — your SOPs, policies, knowledge base',
      'No — generic public model',
      'No — template flows only',
    ],
  },
  {
    label: 'Role-based access + approval logic',
    values: ['Yes — designed in', 'No', "Limited — vendor's RBAC only"],
  },
  {
    label: 'System integration depth',
    values: [
      'Direct API connections to your stack',
      'None — chat surface only',
      'Marketplace connectors',
    ],
  },
  {
    label: 'Data residency',
    values: [
      'Your environment, no public training',
      'Public LLM provider',
      'Vendor SaaS cloud',
    ],
  },
  {
    label: 'Audit logging',
    values: [
      'Every action logged + traceable',
      'None',
      'Vendor-defined, often opaque',
    ],
  },
  {
    label: 'Launch timeline',
    values: [
      '30 days',
      'Days, but limited capability',
      'Weeks of config, plus ongoing licensing',
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
          { name: 'AI Agent Development', href: '/solutions/ai-agent-development' },
        ]}
      />
      <ServiceSchema
        name="AI Agent Development for Commercial Operations"
        serviceType="Custom AI agents, SOC 2-aligned automation, role-based access, secure API integrations, 30-day launch"
        url="https://autom8ionlab.com/solutions/ai-agent-development"
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
            <span className="text-slate-300">AI Agent Development</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI Agent Development for Commercial Operations
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl leading-relaxed">
            Custom AI agents for Tech, Construction, Healthcare, and Finance. We build agents that
            execute real work inside your environment, against your rules, with your documentation
            as the source of truth. Launch in 30 days. Secured with SOC 2-aligned practices.
          </p>
        </div>
      </section>

      {/* AEO DEFINITION BLOCK */}
      <section className="py-12 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <section className="definition-block">
              <p className="lead">
                <strong>A custom AI agent</strong> is a software system that combines a fine-tuned
                language model with your business logic, data sources, and approved actions to
                autonomously execute multi-step tasks — not just answer questions. For mid-market
                companies, custom AI agents replace the patchwork of human handoffs, RPA scripts,
                and rule-based bots that breaks every time a process changes.
              </p>
            </section>
          </Reveal>
        </div>
      </section>

      {/* DEFINITION BLOCK */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Operational bottlenecks kill momentum. Your teams lose time in repetitive intake,
            manual review, status checks, and disconnected systems. Generic AI makes that worse. It
            gives you shallow answers, weak controls, and no operational accountability. Most AI
            vendors sell wrappers around public models. That does not work in real operating
            environments. If the system is not grounded in your actual workflows, scoped to your
            users, and deployed with the right controls, it becomes a liability fast.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            At Autom8ion Lab, we build custom AI agents for commercial operations. We solve workflow
            friction for companies in Tech, Construction, Healthcare, and Finance by building agents
            that execute real work inside your environment, against your rules, with your
            documentation as the source of truth. We do not ship generic bots. We build custom
            systems that fit how your business actually runs, launch in 30 days, and are secured
            with SOC 2-aligned practices.
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
              Custom agent vs. generic AI wrapper vs. SaaS chatbot
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8 max-w-3xl">
              The three paths most teams evaluate when AI moves into operations. Each is the right
              answer for a different scope.
            </p>
          </Reveal>

          <ComparisonTable
            headers={[
              'Dimension',
              'Autom8ion Lab (custom agent)',
              'Generic AI wrapper',
              'SaaS chatbot platform',
            ]}
            rows={comparisonRows}
            primaryColumnClass="text-emerald-400"
          />
        </div>
      </section>

      {/* INDUSTRY USE CASES */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Custom AI agents for commercial industries
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              We build agents around how Tech, Construction, Healthcare, and Finance teams actually
              run — with federal-aware delivery available when your environment requires it.
            </p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-4" staggerDelay={0.06}>
            {useCases.map((u) => (
              <StaggerItem key={u.name}>
                <PremiumCard variant="hover" className="p-6 h-full">
                  <h3 className="text-white font-semibold mb-2">{u.name}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{u.bodyJsx}</p>
                </PremiumCard>
              </StaggerItem>
            ))}
          </Stagger>
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
              The market is full of AI vendors pushing demos, wrappers, and generic copilots. We
              build production systems for companies that need secure execution, not flashy
              prototypes. We do not do generic bots — we build custom AI agents engineered around
              your workflow, documentation, and access model. 30-day average launch gets you from
              problem definition to deployed system fast. Measurable productivity gains remove
              repetitive labor and create operational improvements you can track. SOC 2-aligned
              security designs for protected environments with isolation, encryption, and traceable
              execution. Founder-led delivery means you work directly with senior builders.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-slate-300 leading-relaxed mb-8">
              Companies that automate first execute faster, reduce administrative load, and free up
              skilled teams for higher-value work. Companies that stay stuck in manual workflows
              keep paying for delays, rework, and avoidable bottlenecks. You do not need more
              dashboards. You need AI agents that can do the work securely. We also support
              organizations that need stronger compliance alignment or government-ready delivery. If
              your environment requires federal-aware architecture, we keep that capability in scope
              without making it the headline.
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
            <h2 className="text-3xl font-bold text-white mb-4">Stop waiting. Start building.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              If your company is stuck managing work through inboxes, spreadsheets, manual review
              chains, and disconnected systems, it is time to fix the workflow. We build custom AI
              agents for companies that need secure automation, measurable productivity gains, and
              fast deployment. Let&apos;s talk about building an AI agent system that fits your
              business in 30 days.
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
      <RelatedSolutions currentSlug="ai-agent-development" />
    </>
  );
}
