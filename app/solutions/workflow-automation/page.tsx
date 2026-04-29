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

export const metadata: Metadata = {
  title: 'Workflow & Process Automation for Compliance Environments',
  description:
    'Custom workflow automation and AI agents deployed in HIPAA, SOC 2, CMMC, NIST 800-171, and FedRAMP environments. Auditable and audit-ready.',
  keywords:
    'workflow automation compliance, custom workflow automation, AI agents private network, RPA federal, FedRAMP workflow automation, NIST 800-171 workflow, HIPAA automation, document processing pipeline, BSA AML compliance reporting automation',
  alternates: { canonical: 'https://autom8ionlab.com/solutions/workflow-automation' },
  openGraph: {
    title: 'Workflow & Process Automation for Compliance Environments | Autom8ion Lab',
    description:
      "Custom workflow automation and AI agents deployed where SaaS tools can't go — on-premises, private cloud, FedRAMP-aligned environments. Auditable and audit-ready.",
    url: 'https://autom8ionlab.com/solutions/workflow-automation',
    images: [{ url: 'https://autom8ionlab.com/logo/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Workflow & Process Automation for Compliance Environments | Autom8ion Lab',
    description:
      'Custom workflow automation deployed where SaaS tools cannot go. On-premises, private cloud, FedRAMP-aligned.',
  },
};

const whatWeBuild = [
  {
    icon: GitBranch,
    title: 'Multi-step approval workflows with full audit trails',
    body:
      "Approval workflows that survive audit — every transition logged, every approver and timestamp recorded, every comment retained per your retention schedule. Common scopes: financial approvals against authority matrices, clinical sign-off chains, federal contract change order workflows, RFI/submittal review for construction, claims adjudication chains. Built so an auditor can reconstruct any decision after the fact.",
  },
  {
    icon: Lock,
    title: 'AI agents operating inside private networks',
    body:
      'AI agents using local LLMs (Llama, Mistral, custom fine-tunes) or private-cloud-hosted commercial models (Anthropic via AWS Bedrock GovCloud, OpenAI via Azure OpenAI Service) — operating entirely within your bounded environment. No external data transfer. All activity logged to NIST 800-171 audit families or HIPAA Security Rule audit controls. The agents handle document classification, intake triage, drafted responses, and routing decisions; humans review every output that affects an external party.',
  },
  {
    icon: Network,
    title: "Custom integrations between systems where no SaaS connector exists",
    body:
      'The integration work that breaks Zapier, Workato, and generic iPaaS — legacy mainframe systems (DB2, VSAM, IMS), proprietary on-prem applications without REST APIs, file-based exchange (SFTP, NDM/Connect:Direct), and the kind of custom data transformations that vendors haven\'t templated. Built with controlled boundaries, encrypted tunnels, and the audit trail that satisfies FedRAMP, NIST 800-53, FISMA, or NYDFS Part 500 requirements.',
  },
  {
    icon: FileText,
    title: 'Document processing pipelines',
    body:
      "Intake → classification → extraction → validation → routing pipelines for high-volume document workflows. Loan files, claims documentation, HUD-50059 forms, FCRA disclosures, healthcare prior auth packets, federal procurement responses. Confidence scoring per extraction, human review gates on adverse outcomes, and full audit trail from intake to final disposition.",
  },
  {
    icon: ShieldCheck,
    title: 'Compliance reporting automation',
    body:
      'Automated generation, routing, and submission of recurring compliance reports — BSA/AML CTR/SAR for financial services, OFAC sanctions screening, EIV income verification for HUD-funded properties, certified payroll under Davis-Bacon, DBE/MBE/WBE participation reporting. Tied to authoritative source data so the reports reflect what actually happened, not a separate parallel record-keeping process.',
  },
  {
    icon: WorkflowIcon,
    title: "Internal RPA where commercial RPA tools can't go",
    body:
      "Custom RPA in environments where UiPath, Automation Anywhere, and Blue Prism either aren't approved or don't fit. Common drivers: CMMC L2 boundaries, FedRAMP-bounded operations, or compliance posture that rules out unattended bots running outside the approved environment. We build the orchestration in your bounded environment with the audit logging your assessor expects.",
  },
  {
    icon: GitBranch,
    title: 'Webhook + scheduled job orchestration',
    body:
      "Event-driven automation built on durable execution patterns (Temporal, AWS Step Functions, custom state machines) so workflow state survives process restarts and can be inspected at any step. The scheduling and orchestration layer is yours — runs in your environment, integrates with your IdP, and produces audit logs that flow to your SIEM.",
  },
];

const comparisonRows = [
  {
    label: 'Deployment environment',
    custom: 'On-premises, private cloud, GCC High, FedRAMP-authorized, HIPAA-aligned. Wherever your compliance posture requires.',
    saas: 'Vendor-managed cloud only. Your data leaves your environment.',
    iPaaS: 'Vendor-managed cloud, with private connectivity options at higher tiers.',
  },
  {
    label: 'Audit trail depth',
    custom: 'Full audit trail mapped to your compliance framework (NIST 800-171 AU, HIPAA Security Rule audit controls, SOC 2 CC, etc.). Logs flow to your SIEM.',
    saas: 'Vendor-defined audit logs. Useful but not always sufficient for assessor review.',
    iPaaS: 'Strong audit logs at enterprise tier. Vendor-managed retention.',
  },
  {
    label: 'Integration with non-SaaS systems',
    custom: 'Native. We build integrations to mainframes, legacy on-prem databases, file-based systems, proprietary APIs.',
    saas: 'Limited to the connectors the vendor maintains. Custom connectors are extra work.',
    iPaaS: 'Better than SaaS. Still limited at the edges where on-prem legacy systems live.',
  },
  {
    label: 'AI / LLM use in workflow',
    custom: 'Local LLMs or private-cloud-hosted commercial models inside your bounded environment. No external data transfer.',
    saas: 'Vendor LLM with vendor data terms. Often not BAA-eligible or FedRAMP-authorized.',
    iPaaS: 'Vendor LLM or BYO API key to a commercial LLM. Same data-residency caveats.',
  },
  {
    label: 'Total cost over 3 years',
    custom: 'Higher up-front; flat ongoing. You own the workflow logic.',
    saas: 'Predictable per-step or per-execution. Compounds with volume.',
    iPaaS: 'Predictable enterprise contracts. Significantly cheaper than custom for high-volume simple workflows.',
  },
  {
    label: 'Best fit',
    custom: "Companies whose compliance posture rules out commercial automation SaaS, or whose workflow has too many edge cases for SaaS to handle.",
    saas: 'Simple, well-defined integrations between SaaS apps. Marketing ops, internal notifications.',
    iPaaS: 'Mid-complexity enterprise integration where SaaS-cloud is acceptable.',
  },
];

const faqs = [
  {
    question: 'Can you replace what we built in Zapier?',
    answer:
      'Often, yes. Custom workflow automation gives you full control over the audit trail, data flow, and environment. The tradeoff is higher up-front cost. We help you decide which workflows are worth migrating off commercial SaaS — typically the ones touching CUI, PHI, or regulator-sensitive data, or workflows with edge cases Zapier consistently breaks on.',
  },
  {
    question: 'Do you build n8n / Make.com workflows?',
    answer:
      'We build with whatever orchestration framework fits the compliance environment. n8n self-hosted, Make on a private deployment, custom Python / Node orchestration, AWS Step Functions, or Temporal — choice depends on what your environment supports and what audit posture you need.',
  },
  {
    question: 'Can your AI agents operate without external API calls?',
    answer:
      'Yes. AI agents using local LLMs (Llama, Mistral, custom fine-tunes) or private-cloud-hosted commercial models (Anthropic via AWS Bedrock, OpenAI via Azure OpenAI Service) operate entirely within your bounded environment. No external data transfer.',
  },
  {
    question: 'How do you handle long-running workflows?',
    answer:
      'Durable execution patterns — Temporal, AWS Step Functions, or custom state machines depending on environment. Workflow state survives process restarts and can be inspected at any step. Failure modes have explicit retry, escalation, and dead-letter handling.',
  },
  {
    question: 'Can you integrate with [legacy system X]?',
    answer:
      'Most likely. Legacy system integration via DB-level access, file-based exchange, or wrapper API patterns is a common engagement type. Discovery call confirms approach.',
  },
];

const buyers = [
  {
    name: 'Federal contractors and DoD subs',
    body:
      "Compliance posture rules out Zapier, Workato, and most commercial RPA. You need orchestration in your bounded environment with the audit trail your CMMC or FedRAMP assessor expects.",
  },
  {
    name: 'Healthcare entities with strict PHI boundaries',
    body:
      "Workflow has to operate inside the BAA boundary. Commercial automation tools either don't sign BAAs or don't pass IT security review. You need PHI-aware workflow inside your environment.",
  },
  {
    name: 'Financial firms with regulator scrutiny',
    body:
      "Examiners read every artifact in your audit trail. Workflow logs need to demonstrate the controls actually ran — not just that the policy says they should have. SaaS automation often falls short of this bar.",
  },
  {
    name: 'Companies with high-edge-case workflow',
    body:
      "Your workflow has enough exceptions and edge cases that SaaS automation breaks on the corner cases. The result is a Zapier flow that runs 80% of the time and a parallel manual process for the other 20%.",
  },
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        trail={[
          { name: 'Home', href: '/' },
          { name: 'Solutions', href: '/#services' },
          { name: 'Workflow & Process Automation', href: '/solutions/workflow-automation' },
        ]}
      />
      <ServiceSchema
        name="Workflow & Process Automation for Compliance Environments"
        serviceType="Custom workflow automation, AI agents, integration layers, RPA"
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
            Workflow &amp; Process Automation for Compliance Environments
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl leading-relaxed">
            Custom workflow automation and AI agents deployed in HIPAA, SOC 2, CMMC, NIST 800-171, and
            FedRAMP environments. Auditable and audit-ready.
          </p>
        </div>
      </section>

      {/* DEFINITION BLOCK */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Autom8ion Lab builds custom workflow automation, AI agents, and process automation deployed
            where SaaS automation tools (Zapier, Make, Workato) cannot go: on-premises, private cloud,
            and FedRAMP-aligned environments where outbound API calls to commercial SaaS are not
            permitted. Workflows with full audit trails. AI agents inside private networks with no
            external data transfer.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            The work covers multi-step approval chains with audit-trail depth assessors actually
            recognize, document processing pipelines for high-volume regulated workflows, custom
            integrations between systems where no SaaS connector exists, internal RPA in environments
            where commercial RPA tools aren\'t approved, and compliance reporting automation (BSA/AML,
            OFAC, CTR/SAR, EIV verification, certified payroll). Engagement scopes range from
            single-system task orders to multi-month builds with embedded compliance documentation.
          </p>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Who this is for</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {buyers.map((b) => (
              <div key={b.name} className="bg-slate-900/40 border border-slate-800 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-3">{b.name}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">What we build</h2>
          <div className="space-y-6">
            {whatWeBuild.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-slate-900/40 border border-slate-800 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPLIANCE CONSIDERATIONS */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Compliance considerations</h2>
          <p className="text-slate-300 leading-relaxed mb-8">
            Audit-trail requirements per framework. Data residency considerations. Identity propagation
            through workflow steps so every action is attributable. Encryption of in-flight data between
            workflow steps. Retention policies aligned to the records schedule that governs the data.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Audit trail depth per framework (NIST 800-171 AU, HIPAA Security Rule, SOC 2 CC, FCRA)',
              'Identity propagation through workflow steps (every step attributable to a user or service principal)',
              'Encryption of in-flight workflow data',
              'Data residency and data sovereignty per jurisdiction',
              'Retention policies aligned to records schedule (NARA, state archives, HIPAA retention, FCRA)',
              'Failure-mode handling (retry, escalation, dead-letter) without losing the audit record',
              'Idempotency on every external write',
              'Observability: workflow metrics flowing to your monitoring stack',
            ].map((item) => (
              <div
                key={item}
                className="bg-slate-900/40 border border-slate-800 rounded-lg p-4 flex items-start space-x-2"
              >
                <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Custom workflow vs. Zapier/Make vs. enterprise iPaaS
          </h2>
          <p className="text-slate-300 leading-relaxed mb-8 max-w-3xl">
            The three patterns workflow automation usually falls into. Each is the right answer for a
            different scope.
          </p>

          <div className="hidden md:block overflow-hidden rounded-xl border border-slate-800">
            <table className="w-full text-left">
              <thead className="bg-slate-900/60">
                <tr>
                  <th className="px-5 py-4 text-sm font-semibold text-cyan-400 uppercase tracking-wider w-1/4">
                    Dimension
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold text-emerald-400 uppercase tracking-wider w-1/4">
                    Autom8ion Lab (custom)
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold text-slate-400 uppercase tracking-wider w-1/4">
                    Zapier / Make
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold text-slate-400 uppercase tracking-wider w-1/4">
                    Enterprise iPaaS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="align-top">
                    <td className="px-5 py-4 text-white font-semibold text-sm">{row.label}</td>
                    <td className="px-5 py-4 text-slate-200 text-sm leading-relaxed">{row.custom}</td>
                    <td className="px-5 py-4 text-slate-400 text-sm leading-relaxed">{row.saas}</td>
                    <td className="px-5 py-4 text-slate-400 text-sm leading-relaxed">{row.iPaaS}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden grid gap-4">
            {comparisonRows.map((row) => (
              <div key={row.label} className="bg-slate-900/40 border border-slate-800 rounded-lg p-5">
                <div className="font-semibold text-white mb-3">{row.label}</div>
                <div className="text-emerald-400 text-xs uppercase tracking-wider mb-1">
                  Autom8ion Lab (custom)
                </div>
                <p className="text-slate-200 text-sm mb-3">{row.custom}</p>
                <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Zapier / Make</div>
                <p className="text-slate-400 text-sm mb-3">{row.saas}</p>
                <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">
                  Enterprise iPaaS
                </div>
                <p className="text-slate-400 text-sm">{row.iPaaS}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE-SPECIFIC FAQ */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Workflow automation FAQ</h2>
          <div className="space-y-5">
            {faqs.map((q) => (
              <div key={q.question} className="bg-slate-900/40 border border-slate-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{q.question}</h3>
                <p className="text-slate-300 leading-relaxed">{q.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKING — to industries + AI agents + API integrations */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Industry-specific workflow work
          </h2>
          <p className="text-slate-300 leading-relaxed mb-8">
            The compliance framework you operate under shapes the workflow architecture. Each industry
            hub covers the named systems we integrate with and the assessor posture that drives the
            audit trail design.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { slug: 'defense', name: 'Defense Industrial Base', desc: 'CMMC 2.0, NIST 800-171, GCC High workflow' },
              { slug: 'healthcare', name: 'Healthcare & Life Sciences', desc: 'HIPAA-aware workflow, EHR integration' },
              { slug: 'finance', name: 'Finance', desc: 'BSA/AML reporting, FFIEC-aligned workflow' },
              { slug: 'government', name: 'US Government', desc: 'FedRAMP-bounded workflow, NARA records' },
              { slug: 'real-estate-property', name: 'Real Estate & Property', desc: 'FCRA workflow, HUD compliance reporting' },
              { slug: 'construction', name: 'Construction', desc: 'RFI/submittal workflow, certified payroll' },
            ].map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group bg-slate-900/40 border border-slate-800 rounded-lg p-4 hover:border-cyan-500/40 transition-all flex items-center justify-between"
              >
                <div>
                  <div className="text-white font-semibold group-hover:text-cyan-400">{ind.name}</div>
                  <div className="text-slate-400 text-sm">{ind.desc}</div>
                </div>
                <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-3">
            <Link
              href="/solutions/ai-agent-development"
              className="group bg-slate-900/40 border border-slate-800 rounded-lg p-4 hover:border-cyan-500/40 transition-all flex items-center justify-between"
            >
              <div>
                <div className="text-white font-semibold group-hover:text-cyan-400">AI Agent Development</div>
                <div className="text-slate-400 text-sm">Agents inside private networks</div>
              </div>
              <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/solutions/api-integrations"
              className="group bg-slate-900/40 border border-slate-800 rounded-lg p-4 hover:border-cyan-500/40 transition-all flex items-center justify-between"
            >
              <div>
                <div className="text-white font-semibold group-hover:text-cyan-400">API Integrations</div>
                <div className="text-slate-400 text-sm">Custom integration layers</div>
              </div>
              <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Workflow automation that has to survive an audit?
          </h2>
          <p className="text-slate-300 leading-relaxed mb-8">
            30-minute discovery call. Tell us your environment, your compliance framework, and the
            workflow you\'re looking to automate. We'll map the engagement and tell you whether we're a
            fit.
          </p>
          <Link
            href="/schedule-consultation"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-600 transition-colors"
          >
            <span>Schedule a discovery call</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
