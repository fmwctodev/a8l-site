import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  Smartphone,
  Layers,
  Lock,
  Workflow as WorkflowIcon,
} from 'lucide-react';
import {
  BreadcrumbSchema,
  ServiceSchema,
  FAQPageSchema,
} from '@/app/_components/Schema';
import CTA from '@/app/_components/CTA';
import RelatedSolutions from '@/app/_components/RelatedSolutions';
import { Reveal, Stagger, StaggerItem, PremiumCard, MagneticButton, ComparisonTable, type ComparisonRow } from '@/app/_components/ui';

export const metadata: Metadata = {
  title: 'Custom Software Development for Regulated Industries',
  description:
    'Full-stack custom software for SaaS, enterprise, and regulated environments. Security architecture and compliance documentation built in from day one.',
  keywords:
    'custom software development for scaling companies, internal operations platforms, customer portals, role-based access control, custom business logic, integration-ready builds, secure cloud-native builds, 30-day software launch',
  alternates: { canonical: 'https://autom8ionlab.com/solutions/software-development' },
  openGraph: {
    title: 'Custom Software Development for Regulated Industries | Autom8ion Lab',
    description:
      'Full-stack custom software for SaaS, enterprise, and regulated environments. Security architecture and compliance documentation built in from day one.',
    url: 'https://autom8ionlab.com/solutions/software-development',
    images: [{
      url: 'https://autom8ionlab.com/api/og?title=Custom+Software+Development+for+Regulated+Industries&section=Solutions',
      width: 1200,
      height: 630,
      alt: 'Custom Software Development for Regulated Industries',
    }],
  },
  twitter: {
    title: 'Custom Software Development for Regulated Industries | Autom8ion Lab',
    description:
      'Full-stack custom software for SaaS, enterprise, and regulated environments. Security architecture and compliance documentation built in from day one.',
    images: ['https://autom8ionlab.com/api/og?title=Custom+Software+Development+for+Regulated+Industries&section=Solutions'],
  },
};

const whatWeBuild = [
  {
    icon: Layers,
    title: 'Internal operations platforms',
    body:
      'Custom systems for intake, approvals, routing, workflow visibility, and operational reporting. Built around how your team actually operates so adoption, speed, and cleaner execution come together — not forced into a commercial template.',
  },
  {
    icon: Database,
    title: 'Customer and team portals',
    body:
      'Centralized environments for requests, updates, documents, statuses, and communication. One source of truth across teams instead of email chains, spreadsheets, and disconnected tools.',
  },
  {
    icon: Lock,
    title: 'Role-based access control',
    body:
      'Granular permissions mapped to actual teams, responsibilities, and least-privilege access. Security defined on day one — architecture, permissions, encryption, logging, and integration requirements set before code is written.',
  },
  {
    icon: WorkflowIcon,
    title: 'Workflow automation inside the app',
    body:
      'Approval rules, escalations, notifications, and exception handling built directly into the platform. Workflow rules, SLAs, and escalation logic coded into the system instead of bolted on after launch.',
  },
  {
    icon: Code2,
    title: 'Custom business logic',
    body:
      'Rules, calculations, routing paths, and actions designed around your real process instead of a template. We do not force your business into a commercial template — we build the system around how your team operates.',
  },
  {
    icon: Smartphone,
    title: 'Integration-ready builds',
    body:
      "Secure connections to your existing systems, APIs, and data sources without creating another silo. Through our API integrations work, your software moves data across operational tools, CRMs, ERPs, and internal systems instead of becoming another isolated app.",
  },
  {
    icon: Layers,
    title: 'Secure cloud-native builds for modern growth',
    body:
      'We architect systems for AWS, Azure, or GCP using the right mix of containers, APIs, managed services, and modular components. Scalable architecture that supports growth without rebuilding the entire stack, faster deployment cycles, lower operational overhead, security by design, and long-term flexibility for future integrations and product expansion.',
  },
];

const comparisonRows: ComparisonRow[] = [
  {
    label: 'Time to deploy',
    values: [
      '30-day average launch — production-ready system engineered around your workflow.',
      'Days to deploy. Limited to what the vendor templated and the workflow rules they expose.',
      '12-24+ months. Big-bang rollout against a multi-year roadmap.',
    ],
  },
  {
    label: 'Customization ceiling',
    values: [
      'No ceiling. We build from scratch around your business logic — workflows, approvals, integrations, reporting.',
      'Hits the ceiling at config + light customization. Custom code requires premium contracts.',
      'High ceiling, but customization runs through change requests measured in weeks.',
    ],
  },
  {
    label: 'Security posture',
    values: [
      'Security defined on day one — architecture, permissions, encryption, logging, and integration requirements baked into the foundation.',
      "Inherits the vendor's certifications. Useful, but not custom to your environment.",
      'Vendor security questionnaires and attestations. Workable for established platforms.',
    ],
  },
  {
    label: 'Code & IP ownership',
    values: [
      'Full IP ownership. You own the code, the workflows, and the system.',
      "Vendor owns the platform. Exporting your data and re-implementing workflow elsewhere is real work.",
      "Vendor-specific tech and proprietary formats. Significant lock-in.",
    ],
  },
  {
    label: 'Engagement shape',
    values: [
      'Direct access to senior engineers. No account managers between you and the people building the system.',
      'Account-managed support tiers. Implementation work via SI or system partners.',
      'Sales engineer + implementation partner + ongoing services contract.',
    ],
  },
  {
    label: 'Best fit',
    values: [
      'Scaling companies whose workflows do not fit a commercial template — approvals, ops, service delivery, customer requests, records, reporting deadlines.',
      'Standard workflows, low customization needs, fast time-to-value.',
      'Mid-large enterprises with capacity to run multi-year platform programs.',
    ],
  },
];

const faqs = [
  {
    question: "How fast can you actually launch?",
    answer:
      "Our average launch timeline is 30 days. That is not a stripped-down prototype — it is a production-ready system engineered around your workflow, built without templates, and launched on a timeline your team can actually use. Speed matters because long timelines destroy momentum, increase cost, and delay impact.",
  },
  {
    question: 'Do we own the code?',
    answer:
      'Yes. Full IP ownership — you own the code, the workflows, and the system. Standard MSA includes work-for-hire language. Open-source dependencies are declared up front with their licenses.',
  },
  {
    question: 'How is this different from a typical dev shop?',
    answer:
      'Most dev shops sell generic builds with custom branding. We do not. No templates — every system is built from scratch around your business logic. No middlemen — you work directly with senior engineers. No vague timelines — we launch in an average of 30 days. No bloated builds — we focus on software your team will actually use.',
  },
  {
    question: 'Can you connect to our existing tools?',
    answer:
      'Yes. Our integration-ready builds connect to your existing systems, APIs, and data sources without creating another silo. Through our API integrations work, your software moves data across operational tools, CRMs, ERPs, and internal systems. We build systems that become the operational hub, not isolated apps.',
  },
  {
    question: 'What about AI, automation, and integrations?',
    answer:
      'Modern software cannot operate in isolation. We connect custom software with custom LLM systems, workflow automation, and secure integrations so your platform can support users, trigger actions, and eliminate repetitive steps from the start.',
  },
];

const buyers = [
  {
    name: 'Scaling companies forcing teams into someone else\'s workflow',
    body:
      "Off-the-shelf software stops fitting the way the business actually runs. You stack extra tools on top and clean up the gaps with manual work. We build secure applications, internal platforms, customer portals, operational systems, and workflow-driven software from scratch around your processes, users, and business logic.",
  },
  {
    name: 'Teams stuck paying for licenses, workarounds, and disconnected add-ons',
    body:
      "Template software breaks fast once your company starts growing. It was not built for your approvals, handoffs, customer workflows, reporting needs, or internal operating rules. You end up paying for licenses, workarounds, disconnected add-ons, and manual fixes just to make generic software behave.",
  },
  {
    name: 'Companies tired of expensive rework from typical dev firms',
    body:
      "The typical development firm creates a different problem. You spend months in discovery, work through account managers, and get a bloated application that still misses the core workflow. That is not custom software development. That is expensive rework.",
  },
  {
    name: 'Teams that need software that fits their business',
    body:
      "If your team runs on approvals, operations, service delivery, customer requests, records, and reporting deadlines, generic software slows everything down. You need custom software for scaling companies that need secure systems aligned to the way the business actually works.",
  },
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        trail={[
          { name: 'Home', href: '/' },
          { name: 'Solutions', href: '/#services' },
          { name: 'Software Development', href: '/solutions/software-development' },
        ]}
      />
      <ServiceSchema
        name="Custom Software Development for Scaling Companies"
        serviceType="Custom software, internal operations platforms, customer portals, integrations, secure cloud-native builds"
        url="https://autom8ionlab.com/solutions/software-development"
        industry="All"
      />
      <FAQPageSchema faqs={faqs} />

      <section className="relative min-h-[55vh] bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-950 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-16">
          <nav className="text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-cyan-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-300">Solutions</span>
            <span className="mx-2">/</span>
            <span className="text-slate-300">Software Development</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Custom Software Development for Scaling Companies
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl leading-relaxed">
            We build secure applications, internal platforms, customer portals, operational systems, and
            workflow-driven software from scratch around your processes, users, and business logic. No
            templates. 30-day average launch. Founder-led delivery — direct access to senior engineers.
          </p>
        </div>
      </section>

      {/* AEO DEFINITION BLOCK */}
      <section className="py-12 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal>
            <section className="definition-block">
              <p className="lead">
                <strong>Custom software development for regulated industries</strong> is the design
                and engineering of full-stack applications — internal platforms, customer portals,
                operational systems, workflow-driven software — built around your business logic
                with security architecture, audit logging, and compliance documentation engineered
                from day one rather than retrofitted before launch. For scaling companies, it is the
                only path off the SaaS treadmill that doesn&apos;t trade speed for security.
              </p>
            </section>
          </Reveal>
        </div>
      </section>

      {/* DEFINITION BLOCK */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Scaling companies hit a wall when off-the-shelf software stops fitting the way the business
            actually runs. You end up forcing your team into someone else&apos;s workflow, stacking
            extra tools on top, and cleaning up the gaps with manual work. At Autom8ion Lab, we deliver
            custom software development for scaling companies built around your actual operating
            environment. We do not use templates. We build secure applications, internal platforms,
            customer portals, operational systems, and workflow-driven software from scratch around your
            processes, users, and business logic.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            We build fast. Our average launch timeline is 30 days. You get software that fits your team,
            supports growth, and removes operational drag without adding more complexity. Security is
            part of the foundation — we define architecture, permissions, encryption, logging, and
            integration requirements on day one so your platform is stable, secure, and ready to scale.
            No templates. No middlemen. No vague timelines. No bloated builds. If your current tools are
            slowing execution, this is where you fix it.
          </p>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
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

      {/* WHAT WE BUILD */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">What we actually build</h2>
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

      {/* 30-DAY LAUNCH FRAMEWORK */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our 30-day launch framework</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              Speed matters. Long timelines destroy momentum, increase cost, and delay impact. We built
              a delivery model that gets your first production-ready system live in an average of 30
              days.
            </p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-4" staggerDelay={0.06}>
            {[
              {
                step: 'Architecture and Scope (Days 1-3)',
                body:
                  'You work directly with senior engineers to define your workflows, user roles, integrations, and business requirements.',
              },
              {
                step: 'Security and Foundation (Days 4-10)',
                body:
                  'We stand up the environment, data model, permission structure, and core security controls.',
              },
              {
                step: 'Core Build Sprint (Days 11-24)',
                body:
                  'We build the highest-value features first so your team sees working software fast.',
              },
              {
                step: 'Testing and Validation (Days 25-28)',
                body:
                  'We run functional testing, integration testing, and security checks to validate readiness.',
              },
              {
                step: 'Launch and Handoff (Days 29-30)',
                body:
                  'We deploy, document, and walk your team through the system so adoption starts immediately.',
              },
            ].map((s) => (
              <StaggerItem key={s.step}>
                <PremiumCard variant="hover" className="p-6 h-full">
                  <h3 className="text-white font-semibold mb-2">{s.step}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{s.body}</p>
                </PremiumCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* BEYOND TRADITIONAL DEVELOPMENT */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Beyond traditional development: AI, automation, and integration
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              Modern software cannot operate in isolation. Your systems need to exchange data, reduce
              manual work, and support smarter decisions across teams. We build that into the
              application from the start.
            </p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-3" staggerDelay={0.04}>
            {[
              { name: 'Custom LLM Systems', href: '/solutions/custom-llm-systems', desc: 'Connect private AI to your software so sensitive data stays under your control.' },
              { name: 'Workflow Automation', href: '/solutions/workflow-automation', desc: 'Trigger actions and eliminate repetitive steps directly inside your application.' },
              { name: 'API Integrations', href: '/solutions/api-integrations', desc: 'Move data across operational tools, CRMs, ERPs, and internal systems through secure integrations.' },
              { name: 'AI Agent Development', href: '/solutions/ai-agent-development', desc: 'Build agents that operate inside your environment, against your rules, with your documentation as the source of truth.' },
              { name: 'Cloud Systems', href: '/solutions/cloud-systems', desc: 'Secure cloud-native foundations for AWS, Azure, or GCP with security by design.' },
              { name: 'Cybersecurity & Compliance', href: '/solutions/cybersecurity', desc: 'Implementation-grade SOC 2 readiness, HIPAA security, and audit-ready documentation.' },
            ].map((it) => (
              <StaggerItem key={it.href}>
                <Link href={it.href} className="group block h-full">
                  <PremiumCard variant="hover" className="p-4 flex items-center justify-between">
                    <div>
                      <div className="text-white font-semibold group-hover:text-cyan-400">{it.name}</div>
                      <div className="text-slate-400 text-sm">{it.desc}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </PremiumCard>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Custom build vs. SaaS template vs. enterprise platform
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8 max-w-3xl">
              The three paths most teams evaluate. Each is the right answer for someone — but they
              solve different problems.
            </p>
          </Reveal>

          <ComparisonTable
            headers={['Dimension', 'Autom8ion Lab (custom)', 'SaaS template', 'Enterprise platform']}
            rows={comparisonRows}
          />
        </div>
      </section>

      {/* COMPLIANCE & GOVERNMENT READINESS */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Compliance &amp; government readiness
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              We also support organizations that need stronger compliance alignment or government-ready
              delivery. If your environment requires federal-aware architecture, we keep that capability
              in scope without making it the headline.
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
                <PremiumCard variant="hover" className="px-4 py-3 text-slate-200 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{f}</span>
                </PremiumCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Software development FAQ
            </h2>
          </Reveal>
          <Stagger className="space-y-5" staggerDelay={0.06}>
            {faqs.map((q) => (
              <StaggerItem key={q.question}>
                <PremiumCard variant="hover" className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{q.question}</h3>
                  <p className="text-slate-300 leading-relaxed">{q.answer}</p>
                </PremiumCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative border-t border-slate-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-white mb-4">
              Stop settling for off-the-shelf software
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              Scaling companies do not need another compromise. You need software that matches your
              workflows, supports your operations, and gets your team moving faster. Autom8ion Lab
              delivers custom software development for scaling companies with a 30-day average launch,
              security-first architecture, and direct access to the senior engineers building your
              system. If you are done duct-taping tools that do not talk, let&apos;s build the system
              your team actually needs.
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
      <RelatedSolutions currentSlug="software-development" />
    </>
  );
}
