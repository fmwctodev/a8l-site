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
    absolute: 'Custom Build vs Zapier vs Make vs n8n — When You\'ve Outgrown No-Code',
  },
  description:
    'Zapier, Make, and n8n are no-code automation platforms. A custom build is what you commission when those platforms hit their ceiling. Here is the honest comparison of when each is the right answer.',
  keywords:
    'zapier vs make vs n8n, custom automation vs zapier, outgrew zapier, no-code automation limits, custom workflow automation, zapier alternatives for enterprise, n8n vs make vs zapier, automation platform comparison',
  alternates: {
    canonical: 'https://autom8ionlab.com/compare/custom-build-vs-zapier-make-n8n',
  },
  openGraph: {
    title: 'Custom Build vs Zapier vs Make vs n8n — When You\'ve Outgrown No-Code',
    description:
      'Zapier, Make, and n8n are no-code automation platforms. A custom build is what you commission when those platforms hit their ceiling.',
    url: 'https://autom8ionlab.com/compare/custom-build-vs-zapier-make-n8n',
    images: [
      {
        url: 'https://autom8ionlab.com/api/og?title=Custom+Build+vs+Zapier+vs+Make+vs+n8n&section=Compare',
        width: 1200,
        height: 630,
        alt: 'Custom Build vs Zapier vs Make vs n8n',
      },
    ],
  },
  twitter: {
    title: 'Custom Build vs Zapier vs Make vs n8n — When You\'ve Outgrown No-Code',
    description:
      'A custom build is what you commission when no-code platforms hit their ceiling. Honest comparison of when each is the right answer.',
    images: [
      'https://autom8ionlab.com/api/og?title=Custom+Build+vs+Zapier+vs+Make+vs+n8n&section=Compare',
    ],
  },
};

/* -------------------------------------------------- */
/* Page data                                          */
/* -------------------------------------------------- */

const comparisonRows: ComparisonRow[] = [
  {
    label: 'Pricing model',
    values: [
      'Build engagement plus monthly hosting and care. Predictable, flat infrastructure cost — no per-task tax once the system is live.',
      'Per-task or per-operation metering. Cheap at low volume; punitive at scale. A workflow that ran 5,000 times a month for $50 can hit $5,000+ at 500,000 executions.',
      'n8n Cloud is execution-tiered, similar to Zapier; self-hosted n8n is flat infrastructure cost only.',
    ],
  },
  {
    label: 'Logic depth',
    values: [
      'Anything Python or TypeScript can express — state machines, recursion, conditional retries, fan-out / fan-in, transactional rollback, custom data transforms.',
      'Linear trigger → action chains with conditional branches and basic loops. Multi-step business logic gets brittle fast and burns task quota.',
      'Visual workflow editor plus inline JavaScript and Python code nodes. Strong middle ground; still bound to n8n’s execution model.',
    ],
  },
  {
    label: 'Security baseline',
    values: [
      'Engineered to your compliance scope — SOC 2 controls, HIPAA-grade audit logging, CMMC AU-family controls, signed webhooks, RBAC, encryption-at-rest and in-transit. Documentation included.',
      'Multi-tenant SaaS hosted in vendor cloud. SOC 2 Type II at the platform level — not a substitute for your own SOC 2 evidence on the workflows that handle your data.',
      'Self-hosted n8n is as secure as the team running it. n8n Cloud is multi-tenant SaaS with a similar profile to Zapier and Make.',
    ],
  },
  {
    label: 'Error handling',
    values: [
      'Custom error logic — exponential backoff, dead-letter queues, idempotency keys, automatic recovery, observability hooks into Datadog, Grafana, or your SIEM.',
      'Built-in retries and basic error notifications. Failed executions accumulate in a console; recovery is manual unless you build it yourself in workflow steps.',
      'Configurable error workflows and retry-on-fail nodes. Better than Zapier; not as deep as a custom-coded service.',
    ],
  },
  {
    label: 'Scale ceiling',
    values: [
      'Horizontally scalable. We have shipped systems doing 10M+ executions per month on Kubernetes-backed infrastructure. The ceiling is the underlying cloud, not the platform.',
      'Practical ceiling around 100k-500k tasks/month before the cost or the rate limits become the constraint.',
      'Self-hosted n8n with worker queues handles millions of executions. Cloud tiers cap lower based on plan.',
    ],
  },
  {
    label: 'Customization',
    values: [
      'Unlimited. Custom integrations, custom data models, custom UI for your operators, custom nodes against legacy systems. The system fits your business — not the reverse.',
      'Limited to the platform’s connectors and code-step capacity. Anything outside the model becomes a workaround, often expensive in execution count.',
      'Custom node SDK lets you write JavaScript or Python nodes. More room than Zapier or Make, less room than a fully custom service.',
    ],
  },
  {
    label: 'Total cost over 12 months',
    values: [
      'Typical engagement: $50k-$250k year-one all-in (build + hosting + care). Predictable. The cost stops growing when the volume grows.',
      'Standard plans: $1k-$30k/year for low-mid volume. Enterprise plans with compliance: $50k-$200k/year. Per-execution metering means cost grows with usage.',
      'n8n Cloud Pro/Business: $5k-$50k/year. Self-hosted n8n: ~$5k-$25k/year in infrastructure plus the engineering hours to operate it.',
    ],
  },
  {
    label: 'Best fit',
    values: [
      'Task volumes >100k/month, SOC 2 / HIPAA / CMMC scope, multi-step business logic that breaks the no-code template, on-prem or private-cloud requirements.',
      'Teams under 50, well-templated SaaS workflows, no compliance scope, fast time-to-value on standard connectors.',
      'Self-hosted n8n with operator buy-in is the sweet spot for teams that want flexibility without committing to a fully custom service.',
    ],
  },
];

const faqs = [
  {
    question: 'When should I move off Zapier?',
    answer:
      'Watch for three signals. First, your monthly Zapier bill is over $1,000 and growing — the per-task model is now a tax on growth. Second, you have a workflow that breaks the linear trigger-action model and you have built three workarounds to keep it stitched together. Third, an auditor, customer, or partner has asked a question about your automation that you cannot answer with the Zapier console. Any one of those is a signal; two of three is a migration trigger.',
  },
  {
    question: 'Is Make (Integromat) meaningfully different from Zapier?',
    answer:
      'Make has more powerful branching and array-handling than Zapier and is often cheaper at higher volumes. The architectural ceiling is the same — multi-tenant SaaS, per-operation pricing, limited custom code. If you have outgrown Zapier, Make buys you another 6-12 months of runway in most cases. It does not fundamentally change the answer.',
  },
  {
    question: 'Why do you recommend n8n more than Zapier or Make?',
    answer:
      'Two reasons. First, the licensing model lets us self-host inside your perimeter, which is a non-starter for SaaS-only platforms when you have data-residency or compliance requirements. Second, the custom node SDK lets us write Python and TypeScript against legacy systems the marketplace does not cover. n8n is closer to a framework than a closed platform, which makes it the natural middle step between no-code and a fully custom build.',
  },
  {
    question: 'Can a custom build replace Zapier entirely?',
    answer:
      'Yes — but rarely all at once. Most engagements migrate the high-volume, compliance-sensitive, or business-critical flows first, leave low-stakes flows on Zapier or Make, and consolidate over 6-12 months. The goal is to put the right workload on the right platform, not to fight a religious war.',
  },
  {
    question: 'What does the migration timeline look like?',
    answer:
      'Eight weeks for a typical mid-market migration. Week 1: audit your existing Zaps, scenarios, and Make flows; tag them by criticality, volume, and compliance scope. Weeks 2-3: design the target architecture and the migration order. Weeks 3-6: build and stress-test the high-priority flows in a staging environment. Weeks 7-8: cut over in waves, monitor, and decommission the legacy flows. Larger or more regulated migrations stretch to 12-16 weeks.',
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
          { name: 'Compare', href: '/compare/custom-build-vs-zapier-make-n8n' },
          {
            name: 'Custom Build vs Zapier vs Make vs n8n',
            href: '/compare/custom-build-vs-zapier-make-n8n',
          },
        ]}
      />
      <ServiceSchema
        name="Custom Build vs Zapier vs Make vs n8n — Workflow Automation Comparison"
        serviceType="Custom workflow automation, Zapier migration, Make migration, n8n self-hosting, enterprise automation engineering"
        url="https://autom8ionlab.com/compare/custom-build-vs-zapier-make-n8n"
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
              <span className="text-slate-300">Custom Build vs Zapier vs Make vs n8n</span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Custom Build vs Zapier vs Make vs n8n — When You&apos;ve Outgrown No-Code
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xl text-slate-300 max-w-4xl leading-relaxed">
              The decision is rarely about features. It is about the level of business logic,
              security posture, and integration depth your operations actually need — and what
              your no-code bill looks like at the volume you are about to hit.
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
                <strong>Zapier, Make, and n8n are no-code automation platforms.</strong>{' '}
                A custom build is what you commission when those platforms hit their ceiling. The
                decision is rarely about features — it is about what level of business logic,
                security posture, and integration depth your operations actually need.
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
              Eight dimensions that matter once your workflows are load-bearing. We&apos;ve
              grouped Zapier and Make in one column because they share the same architectural
              ceiling; n8n gets its own column because the licensing and self-hosting story is
              meaningfully different.
            </p>
          </Reveal>
          <ComparisonTable
            headers={[
              'Dimension',
              'Custom build (Autom8ion Lab)',
              'Zapier / Make',
              'n8n (self-hosted or cloud)',
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
              When Zapier, Make, or n8n is the right choice
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              No-code is the right answer for a lot of workloads. We will tell you so on the
              discovery call rather than sell you something you do not need.
            </p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-4" staggerDelay={0.06}>
            {[
              {
                name: 'You are a team of fewer than 50',
                body:
                  'Headcount and operational complexity are still small enough that a self-service tool with a visual editor will move faster than a custom engineering engagement.',
              },
              {
                name: 'Your workflows are well-templated SaaS connectors',
                body:
                  'CRM-to-Slack, form-to-spreadsheet, calendar-to-email. The marketplace already has the nodes; the volume is below the per-task pain threshold.',
              },
              {
                name: 'You have no compliance scope',
                body:
                  'No SOC 2 audit, no HIPAA, no CMMC. The platform-level certifications are sufficient for what you handle, and your auditor is not asking for system-level evidence.',
              },
              {
                name: 'Speed-to-value matters more than long-term cost',
                body:
                  'You need the workflow live this week, you can absorb the per-task cost for now, and you will revisit the architecture in 12 months.',
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
              When a custom build is the right choice
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              These four signals show up on most calls right before the buyer realizes the
              no-code era is over for their team.
            </p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-4" staggerDelay={0.06}>
            {[
              {
                name: 'Task volumes above 100k/month',
                body:
                  'Per-task pricing and rate limits stop being theoretical. The math now favors flat infrastructure cost on a custom build over per-execution metering.',
              },
              {
                name: 'SOC 2, HIPAA, or CMMC scope',
                body:
                  'You need documented controls, evidence packages, and immutable audit logs that map into your SSP. That is engineering work — not a SaaS subscription.',
              },
              {
                name: 'Multi-step business logic that breaks the template',
                body:
                  'Conditional retries with exponential backoff, transactional rollback, dead-letter queues, state machines, custom error workflows. The no-code editor either cannot express it or burns task quota expressing it.',
              },
              {
                name: 'On-prem or private-cloud requirements',
                body:
                  'Customer contracts, data-residency rules, or regulatory scope require the system to run inside your perimeter. Multi-tenant SaaS is a non-starter.',
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
              Run these five questions before the procurement conversation. They will save you
              from buying the wrong shape of tool — and from us building you something you did
              not need.
            </p>
          </Reveal>
          <ol className="numbered-process">
            <li>
              <h4>What is the monthly task volume on the top three workflows?</h4>
              <p>
                Below 50k/month, no-code is almost always cheaper. Above 200k/month, custom is
                almost always cheaper. The middle is where the careful comparison matters.
              </p>
            </li>
            <li>
              <h4>What is the worst-case business cost of a workflow failure?</h4>
              <p>
                If a missed retry costs you a customer, an SLA penalty, or a compliance finding,
                you need engineered error handling — not vendor-default retry behavior.
              </p>
            </li>
            <li>
              <h4>Will an auditor read this system in the next 18 months?</h4>
              <p>
                If yes, you need documented controls and evidence packages. The SaaS platform&apos;s
                SOC 2 report is not a substitute for evidence on your workflows.
              </p>
            </li>
            <li>
              <h4>How many of your top five integrations require custom code today?</h4>
              <p>
                Three or more is the threshold where the engineering effort to maintain them
                inside a no-code platform exceeds the effort of a custom build.
              </p>
            </li>
            <li>
              <h4>Where is the data legally allowed to live?</h4>
              <p>
                If your contracts say US-only, EU-only, or air-gapped, multi-tenant SaaS is off
                the table regardless of price.
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
                href: '/solutions/api-integrations',
                name: 'API Integrations',
                desc: 'Custom integration layers with audit logging and access controls.',
              },
              {
                href: '/blog/why-your-scaling-business-has-outgrown-zapier',
                name: 'Why your scaling business has outgrown Zapier',
                desc: 'When the no-code tax and one-way logic stop pencilling out.',
              },
              {
                href: '/compare/autom8ion-lab-vs-n8n-cloud',
                name: 'Autom8ion Lab vs n8n Cloud',
                desc: 'Already on n8n? Here is when self-hosted plus custom nodes wins.',
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
              Get a straight answer on which platform fits.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              Bring your top three workflows, your monthly volume, and your compliance scope. We
              will tell you on the call whether they belong on Zapier, Make, n8n, or a custom
              build — and we will be specific about why.
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
