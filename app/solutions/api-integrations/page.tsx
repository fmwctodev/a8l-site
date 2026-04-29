import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Shield,
  Cloud,
  Zap,
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
  title: 'Custom API Integration Services',
  description:
    "Custom API integrations for systems Zapier and Make can't reach. RESTful, GraphQL, webhooks, and enterprise middleware — built secure, built to last.",
  keywords:
    'API integrations for commercial tech stacks, custom API integrations, secure API bridges, legacy system integration, custom middleware development, real-time data syncing, encrypted data flows, commercial API integration, 30-day API launch',
  alternates: { canonical: 'https://autom8ionlab.com/solutions/api-integrations' },
  openGraph: {
    title: 'Custom API Integration Services | Autom8ion Lab',
    description:
      "Custom API integrations for systems Zapier and Make can't reach. RESTful, GraphQL, webhooks, and enterprise middleware — built secure, built to last.",
    url: 'https://autom8ionlab.com/solutions/api-integrations',
    images: [{
      url: 'https://autom8ionlab.com/api/og?title=Custom+API+Integration+Services&section=Solutions',
      width: 1200,
      height: 630,
      alt: 'Custom API Integration Services',
    }],
  },
  twitter: {
    title: 'Custom API Integration Services | Autom8ion Lab',
    description:
      "Custom API integrations for systems Zapier and Make can't reach. RESTful, GraphQL, webhooks, and enterprise middleware — built secure, built to last.",
    images: ['https://autom8ionlab.com/api/og?title=Custom+API+Integration+Services&section=Solutions'],
  },
};

const buyers = [
  {
    name: 'Companies running on a dozen disconnected platforms',
    body:
      "Your commercial systems are likely running on a dozen platforms that don't talk to each other. CRMs, ERPs, project management tools, accounting platforms, customer support systems, internal databases, and cloud apps all run critical operations. Half were never designed to connect. Every day, your team wastes hours moving data by hand just to keep operations moving.",
  },
  {
    name: 'Teams burned by low-code tools and prebuilt connectors',
    body:
      'Most teams try to solve integration problems with low-code tools and prebuilt connectors. That fails in real commercial operations. The connector you need usually does not exist. If it does, it lacks the business logic, access controls, logging, and reliability your environment demands.',
  },
  {
    name: 'Stacks held together by exports, scripts, and human workarounds',
    body:
      'You end up duct-taping exports, scripts, shared inboxes, and human workarounds together just to complete one workflow. We build custom architecture that actually works — especially when your systems were never designed to talk to each other.',
  },
  {
    name: 'Regulated operations that need traceable system activity',
    body:
      'For organizations that need formal compliance alignment, we support secure integration design with documented controls, audit logging, and traceable system activity — including work aligned to NIST-based requirements and regulated environments where security and evidence collection matter.',
  },
];

const whatWeBuild = [
  {
    icon: Shield,
    title: 'Secure API Bridges for Legacy Business Systems',
    body:
      'One of the biggest obstacles in commercial modernization is the system nobody can shut off. You may have mission-critical logic locked inside legacy platforms, on-prem software, file-based processes, accounting tools, or vendor applications with no usable SaaS connector. We build secure API bridges and custom integration layers that wrap controlled interfaces around your existing software so it can participate in modern workflows. Encrypted data flows with bank-level encryption, protocol translation for SOAP, SFTP, flat files, database procedures, and proprietary formats, plus access controls, audit logging, rate limiting, and queue management.',
  },
  {
    icon: Cloud,
    title: 'Real-Time Sync for Commercial Workflows',
    body:
      "Nightly batch jobs are not enough for commercial operations. If a record changes in one system, that update needs to reach the next system fast and accurately. We use event-driven architecture, secure polling, webhooks, and custom middleware to trigger data movement the moment a defined action occurs. We don't just sync data — we orchestrate it across your workflow automation stack. An update in one platform triggers the next task automatically. A document change routes to the correct repository. A status change in a legacy system syncs downstream without anyone exporting files by hand.",
  },
  {
    icon: Zap,
    title: 'Custom Middleware That Matches Your Business Logic',
    body:
      "Sometimes connecting System A to System B is not enough. You need business logic in the middle — data cleaned, transformed, validated, approved, and routed based on how your business actually works. We build the control layer between your systems: data validation, conditional workflow logic, error handling and retry queues, and full auditability that captures transaction history, system events, and exception handling. We don't force your process to fit the tool. We build the integration layer to fit your systems, your security model, and your operational requirements.",
  },
];

const useCases = [
  {
    name: 'Tech: CRM, ERP & Cloud App Integration',
    bodyJsx: (
      <>
        Connect CRMs, ERPs, project management tools, support systems, internal databases, and
        cloud apps with custom integration layers built around your business logic. Real-time data
        movement, encrypted data flows, and middleware that handles validation, conditional logic,
        and retries — so your team stops moving data by hand and your stack actually behaves like
        one system.
      </>
    ),
  },
  {
    name: 'Construction: Project, Accounting & Field Systems',
    bodyJsx: (
      <>
        Bridge construction project platforms, accounting tools, document repositories, and on-prem
        systems that were never built to connect. Encrypted data flows, protocol translation for
        SFTP and flat files, and custom middleware that routes records, approvals, and actions
        based on your internal rules. Pair with our{' '}
        <Link href="/solutions/workflow-automation" className="text-cyan-400 link-underline">
          workflow automation
        </Link>{' '}
        to remove manual handoffs end to end.
      </>
    ),
  },
  {
    name: 'Healthcare: Internal Systems & Vendor Records',
    bodyJsx: (
      <>
        Custom integration layers for healthcare operations where data sensitivity, access
        controls, and audit logging matter from day one. Bank-level encryption protects
        on-prem-to-cloud traffic, least-privilege access enforces who can move what data, and
        traceable logging captures every transaction. Built to support your{' '}
        <Link href="/solutions/cybersecurity" className="text-cyan-400 link-underline">
          cybersecurity and compliance
        </Link>{' '}
        posture without adding new exposure.
      </>
    ),
  },
  {
    name: 'Finance & Federal: Regulated Data Flows',
    bodyJsx: (
      <>
        Secure integration layers for financial operations and federal-aware deployments. Encrypted
        data flows, audit logging, and traceable system activity that map to NIST-based
        requirements and regulated environments where security and evidence collection matter. We
        can also structure integrations to support broader compliance initiatives, including
        requirements that map to NIST and FedRAMP-related environments.
      </>
    ),
  },
];

const comparisonRows: ComparisonRow[] = [
  {
    label: 'Code ownership',
    values: [
      'You own the source',
      'Locked in vendor account',
      'Locked in vendor platform',
    ],
  },
  {
    label: 'Security model',
    values: [
      'Built around your IAM, secrets, audit logs',
      'Vendor-controlled, shared infra',
      'Vendor-controlled, license-gated',
    ],
  },
  {
    label: 'Error handling + retries',
    values: [
      'Designed per integration',
      'Generic, opaque',
      'Configurable but heavy',
    ],
  },
  {
    label: 'Scale ceiling',
    values: [
      'Whatever your infra supports',
      'Tiered task quotas',
      'License + connector limits',
    ],
  },
  {
    label: 'Customization',
    values: [
      'Anything you can express in code',
      'Limited to vendor templates',
      'Limited to vendor connectors',
    ],
  },
  {
    label: 'Launch timeline',
    values: [
      '30 days',
      'Hours for trivial; brittle at scale',
      'Months of vendor onboarding',
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
          { name: 'API Integrations', href: '/solutions/api-integrations' },
        ]}
      />
      <ServiceSchema
        name="API Integrations for Commercial Tech Stacks"
        serviceType="Custom API integrations, secure legacy bridges, real-time sync, custom middleware, encrypted data flows"
        url="https://autom8ionlab.com/solutions/api-integrations"
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
            <span className="text-slate-300">API Integrations</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            API Integrations for Commercial Tech Stacks
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl leading-relaxed">
            We build custom integration layers around your existing business logic, security
            requirements, and tech stack. No templates. Bank-level encryption. Generic connectors
            break when your workflows get complex — we build the architecture that actually works.
            Live in 30 days.
          </p>
        </div>
      </section>

      {/* AEO DEFINITION BLOCK */}
      <section className="py-12 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <section className="definition-block">
              <p className="lead">
                <strong>A custom API integration</strong> is purpose-built code — REST, GraphQL, or
                message-bus — that connects two or more enterprise systems with security, retry,
                validation, and audit logging that off-the-shelf connectors don&apos;t provide. It
                is what we build when Zapier and Make can&apos;t reach a system, can&apos;t satisfy
                a compliance review, or can&apos;t survive the volume.
              </p>
            </section>
          </Reveal>
        </div>
      </section>

      {/* DEFINITION BLOCK */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Your commercial systems are likely running on a dozen platforms that don&apos;t talk to
            each other. That breaks workflows fast. You have CRMs, ERPs, project management tools,
            accounting platforms, customer support systems, internal databases, and cloud apps that
            all run critical operations. Half were never designed to connect. The rest rely on weak
            export-import workflows that create delays, duplicate data, and operational risk. Every
            day, your team wastes hours moving data by hand just to keep operations moving.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            Most teams try to solve integration problems with low-code tools and prebuilt
            connectors. That fails in real commercial operations. The connector you need usually
            does not exist. If it does exist, it lacks the business logic, access controls,
            logging, and reliability your environment demands. You end up duct-taping exports,
            scripts, shared inboxes, and human workarounds together just to complete one workflow.
            At Autom8ion Lab, we build API integrations for commercial tech stacks that connect the
            tools you already use without forcing a rip-and-replace project.
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

      {/* THREE DIRECT PROBLEMS */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Three direct problems when systems are not integrated
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Data Fragmentation:</strong> You have multiple
              versions of the same record across CRMs, ERPs, internal databases, and cloud apps.{' '}
              <strong className="text-white">Workflow Delays:</strong> Your team gets stuck on
              approvals, handoffs, customer updates, order processing, and repetitive
              administrative work because systems do not exchange data in real time.{' '}
              <strong className="text-white">Operational Drag:</strong> Manual transfers and weak
              third-party connectors create errors, missed updates, and bottlenecks across your
              entire stack.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-lg text-slate-300 leading-relaxed">
              Instead of generic solutions, we build custom systems that solve these problems
              permanently. We provide API integrations for commercial tech stacks that focus on
              security, workflow reliability, legacy tool connectivity, and operational efficiency.
              By connecting the tools you already rely on, you eliminate manual handoffs, reduce
              errors, and create a better foundation for{' '}
              <Link href="/solutions/workflow-automation" className="text-cyan-400 link-underline">
                workflow automation
              </Link>
              ,{' '}
              <Link href="/solutions/custom-llm-systems" className="text-cyan-400 link-underline">
                custom LLM systems
              </Link>
              , and better reporting.
            </p>
          </Reveal>
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
              Custom integrations vs. Zapier/no-code vs. enterprise iPaaS
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8 max-w-3xl">
              The three patterns integration projects fall into. Each is the right answer for a
              different scope.
            </p>
          </Reveal>

          <ComparisonTable
            headers={[
              'Dimension',
              'Autom8ion Lab (custom)',
              'Zapier / no-code',
              'Enterprise iPaaS',
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
              Custom integrations for commercial industries
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              We connect the systems Tech, Construction, Healthcare, and Finance teams already use
              — with federal-aware delivery available when your environment requires it.
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
              We don&apos;t do template integrations. We don&apos;t force commercial teams into
              generic connectors and low-code shortcuts. Most vendors hope a prebuilt plug-in
              exists. We build the custom architecture that actually works, especially when your
              systems were never designed to talk to each other. We understand the stakes: in
              commercial operations, fragile connectors and manual workarounds create real risk. We
              build the bridges, secure the data paths with bank-level encryption, and align the
              design to real operational requirements with a focus on API integrations for
              commercial tech stacks.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-slate-300 leading-relaxed mb-8">
              Stop duct-taping your tools together. Stop relying on exports, scripts, and connector
              marketplaces to run critical workflows. It&apos;s time to connect your systems
              properly and build automation on infrastructure you can trust. For organizations that
              need formal compliance alignment, we support secure integration design with
              documented controls, audit logging, and traceable system activity — including work
              aligned to NIST-based requirements and regulated environments where security and
              evidence collection matter.
            </p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-3 text-sm" staggerDelay={0.04}>
            {[
              'UEI: YY2DR3KSENH7',
              'CAGE: 9YCS7',
              'DUNS: 05-289-2750',
              'SDVOSB Pending — veteran-owned',
              'FedRAMP-aware deployment support',
              'NIST-focused control alignment',
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
            <h2 className="text-3xl font-bold text-white mb-4">Ready to connect your systems?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              If you&apos;re tired of tools that don&apos;t talk, workflows that break between
              systems, and teams stuck doing manual work to keep operations moving, we&apos;re
              ready to fix it. We can have your first major integration live and delivering value
              in 30 days, even when no SaaS connector exists. That means faster operations, cleaner
              handoffs, and a more efficient stack.
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
      <RelatedSolutions currentSlug="api-integrations" />
    </>
  );
}
