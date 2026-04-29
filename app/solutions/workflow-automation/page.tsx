import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Workflow as WorkflowIcon,
  GitBranch,
  ShieldCheck,
  FileText,
  Lock,
  Network,
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
  title: 'Enterprise Workflow Automation',
  description:
    'Enterprise workflow automation with n8n, Python, and custom integrations. For teams that have outgrown Zapier and need real business logic.',
  keywords:
    'workflow automation for founders and ops teams, custom n8n and python workflow automation, custom workflow automation, n8n automation, python automation, secure integrations, audit logging, real-time syncing, 30-day workflow launch',
  alternates: { canonical: 'https://autom8ionlab.com/solutions/workflow-automation' },
  openGraph: {
    title: 'Enterprise Workflow Automation | Autom8ion Lab',
    description:
      'Enterprise workflow automation with n8n, Python, and custom integrations. For teams that have outgrown Zapier and need real business logic.',
    url: 'https://autom8ionlab.com/solutions/workflow-automation',
    images: [{
      url: 'https://autom8ionlab.com/api/og?title=Enterprise+Workflow+Automation&section=Solutions',
      width: 1200,
      height: 630,
      alt: 'Enterprise Workflow Automation',
    }],
  },
  twitter: {
    title: 'Enterprise Workflow Automation | Autom8ion Lab',
    description:
      'Enterprise workflow automation with n8n, Python, and custom integrations. For teams that have outgrown Zapier and need real business logic.',
    images: ['https://autom8ionlab.com/api/og?title=Enterprise+Workflow+Automation&section=Solutions'],
  },
};

const whatWeBuild = [
  {
    icon: GitBranch,
    title: 'Workflow Automation with n8n and Python',
    body:
      "We use n8n for flexible orchestration and Python for custom logic, API handling, data processing, and integrations that off-the-shelf tools cannot support. That gives you a system built around your actual workflow instead of forcing your workflow into a generic connector library. We do not patch together a fragile stack. We build automation that handles approvals, exceptions, retries, notifications, and data movement in one controlled system.",
  },
  {
    icon: WorkflowIcon,
    title: 'Custom Logic That Matches Your Business',
    body:
      "Your workflows are not generic, so your automation should not be generic either. We build around your approval rules, routing conditions, edge cases, naming conventions, handoff points, and reporting requirements. Instead of asking your team to change how they work to fit a tool, we make the system fit how your business already runs.",
  },
  {
    icon: Network,
    title: 'Secure Integrations for Legacy and Modern Environments',
    body:
      "Ops teams rarely work in one clean stack. You deal with CRMs, spreadsheets, forms, inboxes, internal tools, file repositories, and systems with limited API access. We automate across those environments without breaking what already works. Instead of replacing everything, we connect the systems you already use and remove the manual work between them.",
  },
  {
    icon: FileText,
    title: 'Audit Trails and Approval Logic Built In',
    body:
      "Route requests automatically to the right reviewer based on role, threshold, location, document type, or custom business logic. Eliminate manual data entry between forms, CRMs, spreadsheets, email, and internal systems. Enforce approval logic — require the right sequence of reviewers, validate required fields, and block incomplete submissions. Create clear audit trails that log actions, timestamps, decisions, status changes, and exceptions.",
  },
  {
    icon: Lock,
    title: 'Security and Scalability Built In',
    body:
      'Workflow automation fails when security is treated like a bolt-on. We build it in from the start. Role-based access and permissions. Audit logging and event traceability. Encryption in transit and at rest. Custom validation and approval controls. Documented workflow logic. We also build for scale — a workflow that handles 50 requests a week should still perform when it handles 5,000.',
  },
  {
    icon: ShieldCheck,
    title: 'Improve Team Productivity at Scale',
    body:
      "Remove repetitive admin work so your people spend more time on execution and less time pushing data around. Automate lead routing and sales handoffs between forms, CRM records, and account owners. Move intake data from web forms into internal systems without manual re-entry. Trigger reminders and escalations when approvals sit too long. Rebuild weekly status reporting without someone chasing updates in email.",
  },
];

const comparisonRows: ComparisonRow[] = [
  {
    label: 'Build approach',
    values: [
      'Custom-built systems engineered around your business logic. n8n + Python with custom orchestration, audit logging, and secure integrations.',
      'Pre-built templates and connectors. Vendor controls the platform; you adapt your workflow to fit it.',
      'Configurable enterprise platform with managed connectors. Customization runs through change requests.',
    ],
  },
  {
    label: 'Logic depth',
    values: [
      'Approval chains, routing logic, validation rules, exceptions, retries, notifications, and audit trails — all coded around how your business actually operates.',
      'Shallow logic. Real workflows with approvals, exceptions, role-based access, and edge cases break the no-code template fast.',
      'Strong logic, but expressed through vendor abstractions. Edge cases hit the customization ceiling.',
    ],
  },
  {
    label: 'Integration coverage',
    values: [
      "Connects CRMs, spreadsheets, forms, inboxes, internal tools, file repositories, and systems with limited API access. We automate across what you actually use.",
      "Limited to the connectors the vendor maintains. Custom connectors are extra work.",
      "Better than no-code. Still limited at the edges where on-prem or legacy systems live.",
    ],
  },
  {
    label: 'Security baseline',
    values: [
      'Role-based access, audit logging and event traceability, encryption in transit and at rest, custom validation and approval controls, documented workflow logic.',
      'Vendor-managed cloud, vendor-defined audit logs. Useful but not always sufficient for your environment.',
      'Strong audit logs at enterprise tier with vendor-managed retention.',
    ],
  },
  {
    label: 'Time to launch',
    values: [
      '30-day average launch. Workflow audit, n8n/Python build sprint, validation and testing, launch and documentation.',
      'Days to launch a basic flow. Production-grade workflows with edge cases take much longer.',
      'Weeks to months depending on platform and integration scope.',
    ],
  },
  {
    label: 'Best fit',
    values: [
      "Founders and ops teams whose workflows have approvals, exceptions, role-based access, and edge cases that no-code tools break on.",
      'Simple, well-defined integrations between SaaS apps. Marketing ops, internal notifications, basic notifications.',
      'Mid-large enterprises with capacity to run platform programs and managed services contracts.',
    ],
  },
];

const faqs = [
  {
    question: 'How is this different from Zapier or Make?',
    answer:
      "Generic automation tools break in growing companies because real workflows are not simple. They involve approvals, exceptions, role-based access, edge cases, and systems that were never designed to work together. The minute you try to force your operations into a no-code template with shallow logic, the process fails. Your team still ends up chasing approvals, re-entering data, and fixing exceptions by hand. We build custom n8n and Python workflow automation that removes those bottlenecks at the source.",
  },
  {
    question: 'How fast can you launch?',
    answer:
      "30 days on average. We do not drag your team through endless discovery. If your workflow is broken, you need it fixed fast. Our delivery model is built for speed, clarity, and execution — workflow audit in week 1, n8n/Python build sprint in weeks 2-3, validation and testing in week 4.",
  },
  {
    question: 'Do you only build with n8n?',
    answer:
      "We use n8n for flexible orchestration and Python for custom logic, API handling, data processing, and integrations that off-the-shelf tools cannot support. The mix depends on what your environment supports and what your workflow requires. We engineer for real operations, not just the happy path.",
  },
  {
    question: 'Can you connect to systems with limited API access?',
    answer:
      'Yes. Ops teams rarely work in one clean stack — CRMs, spreadsheets, forms, inboxes, internal tools, file repositories, and systems with limited API access. We automate across those environments without breaking what already works. Instead of replacing everything, we connect the systems you already use and remove the manual work between them.',
  },
  {
    question: 'How do you handle audit and security?',
    answer:
      'Workflow automation fails when security is treated like a bolt-on. We build it in from the start — role-based access and permissions, audit logging and event traceability, encryption in transit and at rest, custom validation and approval controls, and documented workflow logic. Every action is logged, every handoff is visible, and every workflow step follows the right path the first time.',
  },
];

const buyers = [
  {
    name: 'Founders losing time to manual handoffs',
    body:
      "Your team chases approvals in email, copies data between tools, updates records by hand, and rebuilds the same status reports every week. That is not operational efficiency — that is administrative drag. If your team spends more than five hours a week moving information between systems or proving who approved what and when, you have a workflow problem.",
  },
  {
    name: 'Ops teams stuck on no-code templates',
    body:
      "Generic automation tools break in growing companies. Real workflows involve approvals, exceptions, role-based access, edge cases, and systems that were never designed to talk to each other. The minute you try to force operations into a shallow template, your team still ends up chasing approvals, re-entering data, and fixing exceptions by hand.",
  },
  {
    name: 'Fast-moving teams that need control and traceability',
    body:
      "Most automation vendors sell access to a platform they do not control and cannot adapt to your environment. We do the opposite. We build custom workflow automation around your requirements because growing operations demand control, traceability, and speed from day one.",
  },
  {
    name: 'Teams scaling beyond what manual work supports',
    body:
      "A workflow that handles 50 requests a week should still perform when it handles 5,000. We engineer systems that grow with your operation without losing control, visibility, or reliability. Lead routing, intake processing, shared mailbox triage, and internal reporting workflows that no longer need manual handoffs.",
  },
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        trail={[
          { name: 'Home', href: '/' },
          { name: 'Solutions', href: '/#services' },
          { name: 'Workflow Automation', href: '/solutions/workflow-automation' },
        ]}
      />
      <ServiceSchema
        name="Workflow Automation for Founders and Ops Teams"
        serviceType="Custom n8n and Python workflow automation, secure integrations, audit logging, custom orchestration"
        url="https://autom8ionlab.com/solutions/workflow-automation"
        industry="All"
      />
      <FAQPageSchema faqs={faqs} />

      <section className="relative min-h-[55vh] bg-gradient-to-br from-slate-950 via-purple-950/40 to-slate-950 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16">
          <nav className="text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-cyan-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-300">Solutions</span>
            <span className="mx-2">/</span>
            <span className="text-slate-300">Workflow Automation</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Workflow Automation for Founders and Ops Teams
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl leading-relaxed">
            We replace manual work with custom systems engineered around your business logic, your
            stack, and your operating reality. Built with n8n, Python, secure integrations, audit
            logging, and custom orchestration. We launch in 30 days.
          </p>
        </div>
      </section>

      {/* AEO DEFINITION BLOCK */}
      <section className="py-12 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <section className="definition-block">
              <p className="lead">
                <strong>Enterprise workflow automation</strong> is the deployment of custom n8n,
                Python, and integration code that orchestrates the multi-step business processes
                that no-code SaaS tools cannot govern. For scaling teams, it replaces the per-task
                Zapier tax with infrastructure that scales without breaking, runs inside your own
                boundary, and survives a SOC 2 audit.
              </p>
            </section>
          </Reveal>
        </div>
      </section>

      {/* DEFINITION BLOCK */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Founders and ops teams lose time every day to broken handoffs, manual approvals, spreadsheet
            tracking, and disconnected systems that do not talk. You know the pattern: your team chases
            approvals in email, copies data between tools, updates records by hand, and rebuilds the
            same status reports every week. That is not operational efficiency. That is administrative
            drag.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            At Autom8ion Lab, we build workflow automation for founders and ops teams that replaces
            manual work with custom systems engineered around your business logic, your stack, and your
            operating reality. We build with n8n, Python, secure integrations, audit logging, and
            custom orchestration so your workflows run the way your business actually works. We do not
            sell generic templates. We build custom automation that removes repetitive work, keeps every
            handoff visible, and improves measurable productivity. We launch in 30 days.
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

      {/* WHAT WE BUILD */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Custom workflow automation built for fast-moving teams
            </h2>
          </Reveal>
          <Stagger className="space-y-6" staggerDelay={0.08}>
            {whatWeBuild.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <PremiumCard variant="hover" className="p-6 group">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-glow-cyan transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
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

      {/* 30-DAY LAUNCH PLAN */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The 30-day launch plan for workflow automation
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              We do not drag your team through endless discovery. If your workflow is broken, you need
              it fixed fast. Our delivery model is built for speed, clarity, and execution. We launch in
              30 days on average because speed matters. If your team is still chasing status updates and
              re-entering data by hand, the system is not finished.
            </p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-4" staggerDelay={0.06}>
            {[
              {
                step: 'Week 1: Workflow Audit',
                body:
                  'We identify manual steps, handoff failures, approval bottlenecks, duplicate entry points, and process gaps. Then we map the future-state workflow around your users, systems, routing rules, and reporting needs.',
              },
              {
                step: 'Week 2-3: n8n/Python Build Sprint',
                body:
                  'We build the workflow engine, integrations, business logic, logging, alerts, and exception handling. We engineer for real operations, not just the happy path.',
              },
              {
                step: 'Week 4: Validation & Testing',
                body:
                  'We test approvals, failed submissions, rejected branches, missing data, duplicate records, and edge cases. We verify that every rule works as designed.',
              },
              {
                step: 'Launch & Documentation',
                body:
                  'We deploy the system and deliver the operating documentation your team needs to run it with confidence.',
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

      {/* USE CASES */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Workflow automation use cases
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              What does this look like in practice? Three high-value commercial use cases — plus a
              federal-aware option when your environment requires it.
            </p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-4" staggerDelay={0.06}>
            {[
              {
                name: 'Lead Routing and Internal Approval Workflows',
                body:
                  'We automate lead intake, quote approvals, vendor requests, policy exceptions, and internal sign-offs. Every approval step is routed correctly, logged automatically, and visible in real time.',
              },
              {
                name: 'Intake Processing and Operations Handoffs',
                body:
                  'We automate form intake, document review, record creation, status updates, notifications, and escalations. Your team stops re-entering the same information across disconnected systems.',
              },
              {
                name: 'Shared Mailbox and Back-Office Automation',
                body:
                  'We automate repetitive work tied to inboxes, spreadsheets, internal tools, and older systems. That includes triage, assignment, status reconciliation, and data movement where standard SaaS automation tools fall apart.',
              },
              {
                name: 'Federal-Aware Workflow When Required',
                body:
                  'For teams that need federal-aware delivery, we keep that capability in scope without making it the headline. SDVOSB Pending. UEI: YY2DR3KSENH7. CAGE: 9YCS7. NIST-focused control alignment and FedRAMP-aware deployment paths when the environment requires them.',
              },
            ].map((u) => (
              <StaggerItem key={u.name}>
                <PremiumCard variant="hover" className="p-6 h-full">
                  <h3 className="text-white font-semibold mb-2">{u.name}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{u.body}</p>
                </PremiumCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Custom workflow automation vs. Zapier/Make vs. enterprise iPaaS
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8 max-w-3xl">
              The three patterns workflow automation usually falls into. Each is the right answer for a
              different scope.
            </p>
          </Reveal>

          <ComparisonTable
            headers={['Dimension', 'Autom8ion Lab (custom)', 'Zapier / Make', 'Enterprise iPaaS']}
            rows={comparisonRows}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Workflow automation FAQ</h2>
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

      {/* INTERNAL LINKING */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Adjacent solutions
          </h2>
          <p className="text-slate-300 leading-relaxed mb-8">
            Workflow automation often connects directly to AI agents, custom integrations, and the
            broader software stack. Here is where to go next.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link
              href="/solutions/ai-agent-development"
              className="group bg-slate-900/40 border border-slate-800 rounded-lg p-4 hover:border-cyan-500/40 transition-all flex items-center justify-between"
            >
              <div>
                <div className="text-white font-semibold group-hover:text-cyan-400">AI Agent Development</div>
                <div className="text-slate-400 text-sm">Custom AI agents that execute real work inside your environment</div>
              </div>
              <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/solutions/api-integrations"
              className="group bg-slate-900/40 border border-slate-800 rounded-lg p-4 hover:border-cyan-500/40 transition-all flex items-center justify-between"
            >
              <div>
                <div className="text-white font-semibold group-hover:text-cyan-400">API Integrations</div>
                <div className="text-slate-400 text-sm">Custom integration layers around your existing tech stack</div>
              </div>
              <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/solutions/custom-llm-systems"
              className="group bg-slate-900/40 border border-slate-800 rounded-lg p-4 hover:border-cyan-500/40 transition-all flex items-center justify-between"
            >
              <div>
                <div className="text-white font-semibold group-hover:text-cyan-400">Custom LLM Systems</div>
                <div className="text-slate-400 text-sm">Private LLM deployment with SOC 2 protocols</div>
              </div>
              <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/solutions/software-development"
              className="group bg-slate-900/40 border border-slate-800 rounded-lg p-4 hover:border-cyan-500/40 transition-all flex items-center justify-between"
            >
              <div>
                <div className="text-white font-semibold group-hover:text-cyan-400">Software Development</div>
                <div className="text-slate-400 text-sm">Custom software development for scaling companies</div>
              </div>
              <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/solutions/cloud-systems"
              className="group bg-slate-900/40 border border-slate-800 rounded-lg p-4 hover:border-cyan-500/40 transition-all flex items-center justify-between"
            >
              <div>
                <div className="text-white font-semibold group-hover:text-cyan-400">Cloud Systems</div>
                <div className="text-slate-400 text-sm">Scalable cloud infrastructure for tech and healthcare</div>
              </div>
              <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/solutions/cybersecurity"
              className="group bg-slate-900/40 border border-slate-800 rounded-lg p-4 hover:border-cyan-500/40 transition-all flex items-center justify-between"
            >
              <div>
                <div className="text-white font-semibold group-hover:text-cyan-400">Cybersecurity &amp; Compliance</div>
                <div className="text-slate-400 text-sm">SOC 2 readiness, HIPAA security, audit-ready documentation</div>
              </div>
              <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative border-t border-slate-900/50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-white mb-4">
              Stop running workflows by hand
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              Your team should not be wasting hours on status chasing, copy-paste tasks, and broken
              approval chains. We fix that with custom workflow automation for founders and ops teams
              built around n8n, Python, and your actual business logic. We launch fast. We build around
              your real process. Schedule a consultation and we&apos;ll map the bottlenecks, the
              workflow logic, and the fastest path to automation. Your business needs workflows that
              move faster and produce measurable productivity gains. We build them.
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
      <RelatedSolutions currentSlug="workflow-automation" />
    </>
  );
}
