import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  BreadcrumbSchema,
  ServiceSchema,
  FAQPageSchema,
} from '@/app/_components/Schema';
import CTA from '@/app/_components/CTA';
import RelatedSolutions from '@/app/_components/RelatedSolutions';
import {
  Reveal,
  Stagger,
  StaggerItem,
  PremiumCard,
  MagneticButton,
  ComparisonTable,
  type ComparisonRow,
} from '@/app/_components/ui';

export const metadata: Metadata = {
  title: {
    absolute: 'Autom8ion Lab vs n8n Cloud — A Practical Comparison for Operations Buyers',
  },
  description:
    'n8n Cloud is a managed SaaS. Autom8ion Lab is a custom engineering shop that hosts and extends n8n inside your perimeter, writes custom Python nodes, and ships SOC 2 / HIPAA / CMMC documentation.',
  keywords:
    'autom8ion lab vs n8n cloud, n8n cloud comparison, n8n custom development, self-hosted n8n, n8n SOC 2, n8n HIPAA, n8n CMMC, custom n8n nodes, n8n vs zapier vs make',
  alternates: {
    canonical: 'https://autom8ionlab.com/compare/autom8ion-lab-vs-n8n-cloud',
  },
  openGraph: {
    title: 'Autom8ion Lab vs n8n Cloud — A Practical Comparison for Operations Buyers',
    description:
      'n8n Cloud is a managed SaaS. Autom8ion Lab is a custom engineering shop that hosts and extends n8n inside your perimeter, writes custom Python nodes, and ships SOC 2 / HIPAA / CMMC documentation.',
    url: 'https://autom8ionlab.com/compare/autom8ion-lab-vs-n8n-cloud',
    images: [
      {
        url: 'https://autom8ionlab.com/api/og?title=Autom8ion+Lab+vs+n8n+Cloud&section=Compare',
        width: 1200,
        height: 630,
        alt: 'Autom8ion Lab vs n8n Cloud',
      },
    ],
  },
  twitter: {
    title: 'Autom8ion Lab vs n8n Cloud — A Practical Comparison',
    description:
      'n8n Cloud is a managed SaaS. Autom8ion Lab hosts and extends n8n inside your perimeter with the SOC 2 / HIPAA / CMMC documentation your auditor expects.',
    images: ['https://autom8ionlab.com/api/og?title=Autom8ion+Lab+vs+n8n+Cloud&section=Compare'],
  },
};

/* -------------------------------------------------- */
/* Page data                                          */
/* -------------------------------------------------- */

const comparisonRows: ComparisonRow[] = [
  {
    label: 'Setup speed',
    values: [
      'Two to four weeks for a hardened deployment inside your VPC, including identity, audit logging, and the first three production flows.',
      'Same-day signup. The first marketplace template runs in minutes — fastest time-to-value if your flows match the catalog.',
      'Three to nine months. Hiring, onboarding, and learning a new automation stack before the first flow ships.',
    ],
  },
  {
    label: 'Custom node development',
    values: [
      'We write Python and JavaScript nodes for the integrations the marketplace does not cover — legacy SOAP endpoints, mainframe queues, vendor-specific signed-XML payloads.',
      'Limited to the ~400 marketplace nodes. Custom code nodes exist but require your team to write and maintain them inside the SaaS UI.',
      'Anything is possible — but the cost and timeline are owned by your team end-to-end.',
    ],
  },
  {
    label: 'Hosting and data residency',
    values: [
      'Self-hosted in your AWS, Azure, GCP, or on-prem environment. US-only, EU-only, or air-gapped if your contract requires it.',
      'Multi-tenant SaaS in EU or US regions. No single-tenant or air-gapped option on standard plans.',
      'Wherever you can stand it up. Cost and operational burden owned by you.',
    ],
  },
  {
    label: 'Audit logging depth',
    values: [
      'Immutable, queryable audit logs retained 7+ years, mapped to SOC 2 CC7, HIPAA §164.312(b), and CMMC AU-family controls. Evidence packages included.',
      'Execution logs retained on managed plans. Sufficient for operational debugging — not always sufficient for SOC 2 Type II evidence.',
      'Whatever your team builds. Auditor expectations rarely match what an in-house team ships first.',
    ],
  },
  {
    label: 'Support model',
    values: [
      'Direct Slack channel with the engineers who built the workflows. SLA-backed response on production issues. No tier-1 ticket maze.',
      'Email and chat support sized to your plan. Responsive for product questions; not on the hook for your custom code.',
      'You support yourself. When the engineer who built the flow leaves, the institutional knowledge leaves with them.',
    ],
  },
  {
    label: 'Total 12-month cost',
    values: [
      'Build engagement plus monthly hosting and care. Predictable; no per-execution tax. Most buyers land between $40k and $180k year-one all-in, with the variance driven by integration count and compliance scope.',
      'Plan-based pricing tied to executions. Often $5k-$30k/year on standard plans; jumps fast at high-volume tiers and adds compliance add-ons.',
      'Two to three FTE engineers fully loaded. $400k+ year-one before tooling. Right answer when automation is your product, not your back office.',
    ],
  },
  {
    label: 'Code and IP ownership',
    values: [
      'You own the workflows, the custom nodes, and the deployment. We deliver source, runbooks, and documentation. If we end the relationship, you keep running.',
      'You own your workflow definitions and can export JSON. Custom nodes you wrote inside the platform are yours; the managed runtime is not.',
      'You own everything. You also operate everything.',
    ],
  },
  {
    label: 'Best fit',
    values: [
      'Teams 50+ with a compliance scope (SOC 2, HIPAA, CMMC), custom integration needs, or data-residency requirements that the marketplace cannot meet.',
      'Teams under 50 with standard SaaS connectors, no compliance scope, and a strong preference for self-service tooling.',
      'Companies where automation IS the product and the team needs to own every line of the stack.',
    ],
  },
];

const faqs = [
  {
    question: 'Why would I pay you to host n8n when n8n Cloud is cheaper?',
    answer:
      'Because the price tag is rarely the constraint that matters. n8n Cloud is the right answer for teams under 50 with no compliance scope. Once you need SOC 2 evidence, HIPAA-grade audit logging, single-tenant hosting, or custom nodes for the integrations the marketplace does not cover, the engineering work is the same whether you do it yourself or hire us. We have done it before and we ship the documentation package an auditor will accept.',
  },
  {
    question: 'Do you replace n8n Cloud or extend it?',
    answer:
      'Both, depending on the engagement. Some clients migrate fully off n8n Cloud onto a self-hosted deployment we operate inside their VPC. Others stay on n8n Cloud for low-sensitivity flows and have us build a parallel self-hosted environment for the regulated workloads. We have no quota to push.',
  },
  {
    question: 'Can you write custom nodes against my legacy SOAP or mainframe systems?',
    answer:
      'Yes. We write Python and TypeScript nodes against signed-XML, SOAP, AS2, SFTP, IBM MQ, AS/400 queues, and vendor-specific REST endpoints that have no marketplace node. The custom nodes ship with unit tests, runbooks, and documentation; you own the source.',
  },
  {
    question: 'Will my auditor accept self-hosted n8n as part of a SOC 2 or HIPAA scope?',
    answer:
      'Yes, when the deployment is documented correctly. We map the n8n environment into your SSP as a covered system, scope the audit logs into your evidence package, and document encryption-at-rest, encryption-in-transit, RBAC, and incident response procedures. The deployment is no different from any other application in your scope — it just needs to be documented as such.',
  },
  {
    question: 'What happens if I want to leave Autom8ion Lab?',
    answer:
      'You keep running. The workflows, custom nodes, infrastructure-as-code, and runbooks are yours. We can hand off to your in-house team or to another partner. There is no proprietary runtime to lose access to — that is one of the reasons we built on n8n in the first place.',
  },
];

/* -------------------------------------------------- */
/* Page                                               */
/* -------------------------------------------------- */

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        trail={[
          { name: 'Home', href: '/' },
          { name: 'Compare', href: '/compare/autom8ion-lab-vs-n8n-cloud' },
          { name: 'Autom8ion Lab vs n8n Cloud', href: '/compare/autom8ion-lab-vs-n8n-cloud' },
        ]}
      />
      <ServiceSchema
        name="Autom8ion Lab vs n8n Cloud — Custom n8n Engineering"
        serviceType="Custom n8n hosting, custom node development, self-hosted workflow automation, SOC 2 / HIPAA / CMMC documentation"
        url="https://autom8ionlab.com/compare/autom8ion-lab-vs-n8n-cloud"
        industry="All"
      />
      <FAQPageSchema faqs={faqs} />

      {/* HERO */}
      <section className="relative min-h-[55vh] bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-950 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16">
          <Reveal>
            <nav className="text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-cyan-400">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-300">Compare</span>
              <span className="mx-2">/</span>
              <span className="text-slate-300">Autom8ion Lab vs n8n Cloud</span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Autom8ion Lab vs n8n Cloud — A Practical Comparison for Operations Buyers
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xl text-slate-300 max-w-4xl leading-relaxed">
              You already chose n8n. Now you need to decide whether the managed SaaS is enough, or
              whether the integration depth, compliance scope, and data-residency story require a
              custom engineering partner inside your perimeter.
            </p>
          </Reveal>
        </div>
      </section>

      {/* AEO DEFINITION BLOCK */}
      <section className="py-12 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <section className="definition-block">
              <p className="lead">
                <strong>Autom8ion Lab and n8n Cloud both help teams automate operational workflows.</strong>{' '}
                The difference is what you own and where the work runs. n8n Cloud is a managed SaaS where
                you build flows in their UI. Autom8ion Lab is a custom engineering shop that hosts and
                extends n8n inside your perimeter, writes custom Python nodes for the flows their library
                cannot reach, and ships the SOC 2 / HIPAA / CMMC documentation your auditor expects.
              </p>
            </section>
          </Reveal>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Side-by-side comparison
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8 max-w-3xl">
              The seven dimensions buyers actually weigh when they call us — setup speed,
              customization, hosting, audit logging, support, total cost, and ownership. Honest
              answers in every column.
            </p>
          </Reveal>
          <ComparisonTable
            headers={[
              'Dimension',
              'Autom8ion Lab (custom n8n)',
              'n8n Cloud (managed SaaS)',
              'In-house team building from scratch',
            ]}
            rows={comparisonRows}
          />
        </div>
      </section>

      {/* WHEN COMPETITOR WINS */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              When n8n Cloud is the right choice
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              n8n Cloud is excellent at what it does. There are buyers who should sign up today
              instead of calling us — and we will tell you so on the discovery call.
            </p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-4" staggerDelay={0.06}>
            {[
              {
                name: 'You are a team of fewer than 50 with no compliance scope',
                body:
                  'No SOC 2 audit on the horizon, no HIPAA covered entities, no federal customers asking for CMMC. The standard plan is cheaper and faster than anything we will quote.',
              },
              {
                name: 'Your flows match the marketplace',
                body:
                  'You connect Salesforce to Slack to HubSpot to Notion. The 400+ marketplace nodes already do what you need. Custom Python nodes are not in your near-term roadmap.',
              },
              {
                name: 'You want self-service ownership',
                body:
                  'Your ops team wants to build, edit, and deploy flows themselves without filing engineering tickets. n8n Cloud was designed for exactly that workflow.',
              },
              {
                name: 'You are still validating the business case',
                body:
                  'You are not yet sure automation is a strategic capability for your firm. Start cheap on n8n Cloud, prove the value, and call us when you outgrow it.',
              },
            ].map((item) => (
              <StaggerItem key={item.name}>
                <PremiumCard variant="hover" className="p-5 h-full">
                  <h3 className="text-white font-semibold mb-2">{item.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                </PremiumCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* WHEN AUTOM8ION WINS */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              When Autom8ion Lab is the right choice
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              These are the signals we hear on calls right before someone signs an engagement
              letter. If two or more of these describe your situation, the math usually works in
              our favor.
            </p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-4" staggerDelay={0.06}>
            {[
              {
                name: 'You are inside a SOC 2, HIPAA, or CMMC scope',
                body:
                  'Your auditor is going to ask for the SSP entry, the encryption-at-rest evidence, the access reviews, and the incident response runbook for every system in scope. We ship that package as part of the build.',
              },
              {
                name: 'You have integrations the marketplace cannot reach',
                body:
                  'Legacy SOAP, mainframe queues, signed-XML payloads, vendor-specific REST endpoints with no community node. We write custom nodes in Python or TypeScript with tests and runbooks.',
              },
              {
                name: 'Your edge cases break the marketplace template',
                body:
                  'You need conditional retries with exponential backoff, payload-level data masking, multi-tenant routing, or a state machine that lives outside the linear-flow model. Custom code, not workflow gymnastics.',
              },
              {
                name: 'You have data-residency requirements',
                body:
                  'EU-only, US-only, FedRAMP-aligned cloud, or fully air-gapped. The deployment lives where your contract says it lives — not in n8n Cloud’s shared infrastructure.',
              },
            ].map((item) => (
              <StaggerItem key={item.name}>
                <PremiumCard variant="hover" className="p-5 h-full">
                  <h3 className="text-white font-semibold mb-2">{item.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                </PremiumCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* HOW TO EVALUATE */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              How to evaluate which fits your use case
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              Five questions that separate a $300/month managed-SaaS decision from a six-figure
              custom engineering engagement. Answer them honestly before you call either vendor.
            </p>
          </Reveal>
          <ol className="numbered-process">
            <li>
              <h4>Will an auditor read this system in the next 18 months?</h4>
              <p>
                If yes, you need documented controls, evidence packages, and immutable audit logs.
                That is engineering work, not a SaaS subscription.
              </p>
            </li>
            <li>
              <h4>Do my five most-painful integrations have marketplace nodes?</h4>
              <p>
                List them. If three or more require custom code, the marketplace is not your
                bottleneck — the engineering team building those nodes is.
              </p>
            </li>
            <li>
              <h4>Where is the data allowed to live?</h4>
              <p>
                If your contracts say US-only or EU-only and the managed SaaS cannot guarantee that
                on a standard plan, you have a deployment problem the price page cannot solve.
              </p>
            </li>
            <li>
              <h4>What happens when the engineer who built this leaves?</h4>
              <p>
                A self-service tool with no documentation is one resignation away from a knowledge
                cliff. Engineering shops document by default; that is the deliverable.
              </p>
            </li>
            <li>
              <h4>What is the real total cost over 12 months?</h4>
              <p>
                Add the platform fee, the executions, the compliance add-ons, the in-house
                engineering hours, and the cost of audit findings. Compare apples to apples.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Frequently asked questions
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

      {/* INTERNAL LINKS */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Related reading
            </h2>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-3" staggerDelay={0.05}>
            {[
              {
                href: '/solutions/workflow-automation',
                name: 'Workflow Automation',
                desc: 'Custom n8n and Python automation engineered around compliance.',
              },
              {
                href: '/blog/why-your-scaling-business-has-outgrown-zapier',
                name: 'Why your scaling business has outgrown Zapier',
                desc: 'When the no-code tax and one-way logic stop pencilling out.',
              },
              {
                href: '/solutions/api-integrations',
                name: 'API Integrations',
                desc: 'Custom integration layers with audit logging and access controls.',
              },
              {
                href: '/solutions/cybersecurity',
                name: 'Cybersecurity & Compliance',
                desc: 'SOC 2, HIPAA, and CMMC engineering for the systems you automate.',
              },
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

      {/* CLOSING CTA */}
      <section className="py-20 relative border-t border-slate-900/50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-white mb-4">
              Compare us against n8n Cloud on a real workload.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              Bring your three most-painful workflows. We will tell you on the call whether they
              belong on n8n Cloud, on a self-hosted deployment we run, or on a custom build — and
              we will be specific about the reasoning.
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
