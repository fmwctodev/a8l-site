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
import { Reveal, Stagger, StaggerItem, PremiumCard, MagneticButton, ComparisonTable, type ComparisonRow } from '@/app/_components/ui';

export const metadata: Metadata = {
  title: 'AI-Powered Enterprise Software & Application Development',
  description:
    'Custom AI-powered software, internal tools, mobile apps for compliance environments. Built for HIPAA, SOC 2, FedRAMP, and FCRA from day one.',
  keywords:
    'custom software development for compliance, HIPAA software development, SOC 2 application development, FedRAMP application development, custom CRM development, custom case management software, AI document processing, internal tools development, mobile app development for regulated industries',
  alternates: { canonical: 'https://autom8ionlab.com/solutions/software-development' },
  openGraph: {
    title: 'AI-Powered Enterprise Software & Application Development | Autom8ion Lab',
    description:
      'Custom AI-powered software, internal tools, mobile apps for compliance environments. Built for HIPAA, SOC 2, FedRAMP, and FCRA from day one.',
    url: 'https://autom8ionlab.com/solutions/software-development',
    images: [{ url: 'https://autom8ionlab.com/logo/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'AI-Powered Enterprise Software & Application Development | Autom8ion Lab',
    description:
      'Custom AI-powered software, internal tools, mobile apps for compliance environments.',
  },
};

const whatWeBuild = [
  {
    icon: Layers,
    title: 'Internal operations platforms',
    body:
      'Custom-built platforms for compliance-heavy industries — case management, work order routing, claims processing, intake systems, supplier portals, and the kind of operational tooling SaaS vendors haven\'t templated. Role-based access tied to your IdP, full audit logging mapped to the relevant compliance framework, and the documentation your auditor will read first.',
  },
  {
    icon: Database,
    title: 'AI-powered document processing for regulated workflows',
    body:
      'Document classification, extraction, validation, and routing for high-volume regulated workflows — claims documentation, loan files, HUD-50059 forms, FCRA disclosures, healthcare prior authorization documentation. Designed to stay defensible in audit: confidence scoring, human review gates on adverse outcomes, full audit trail from intake to final disposition.',
  },
  {
    icon: Smartphone,
    title: 'Custom CRMs and case management systems',
    body:
      'Custom CRM builds for organizations whose workflow doesn\'t fit Salesforce or HubSpot — provider directory and credentialing for healthcare, member management for credit unions, case management for state agencies, and prospect/donor management for compliance-conscious nonprofits. Built on stack you can maintain (TypeScript / React / Postgres or .NET / Azure SQL), integrated with your existing systems rather than imposing ours.',
  },
  {
    icon: Smartphone,
    title: 'iOS and Android mobile applications that pass IT security review',
    body:
      "Native (Swift, Kotlin) or React Native apps built to pass corporate IT security review on the first round. Common scopes: field-service apps for construction crews (offline-first), patient-facing apps with HIPAA controls and BAA-aligned data handling, federal-facing apps with Section 508 / WCAG 2.1 AA compliance and VPAT documentation, employee-facing apps with mobile device management hooks. Code-signed, distributed via App Store / Play Store / MDM enterprise channels.",
  },
  {
    icon: Lock,
    title: 'Customer-facing portals for compliance-heavy industries',
    body:
      'Patient portals, resident portals, vendor portals, and citizen-facing application portals where the compliance posture and the user experience both have to land. Identity proofing integrated with Login.gov / ID.me for federal, with EHR-bound IdPs for healthcare. Accessibility (WCAG 2.1 AA), audit logging, and the security review documentation the customer\'s IT team will demand.',
  },
  {
    icon: Code2,
    title: 'AI agent applications operating inside private networks',
    body:
      'AI agents deployed inside your environment — on-premises, GCC High, FedRAMP-authorized, or HIPAA-aligned — with no external data transfer. Local LLMs (Llama, Mistral, custom fine-tunes), private-cloud-hosted commercial models (Anthropic via AWS Bedrock GovCloud, OpenAI via Azure OpenAI Service), or hybrid patterns where the embedding model is local and the reasoning model is private-cloud. Audit logging maps to the relevant compliance framework.',
  },
  {
    icon: WorkflowIcon,
    title: "API gateways and integration layers for systems where SaaS connectors don't exist",
    body:
      'Custom integration layers around legacy systems — mainframe interfaces (DB2, VSAM, IMS), legacy database integration, file-based exchange (SFTP, NDM), proprietary APIs, and the bridge architectures that let new applications talk to systems you can\'t replace yet. Designed with controlled boundaries, encrypted tunnels, and the audit trail that satisfies FedRAMP, NIST 800-53, FISMA, or NYDFS Part 500 requirements.',
  },
];

const comparisonRows: ComparisonRow[] = [
  {
    label: 'Time to deploy',
    values: [
      '8–14 weeks for typical scopes; 4–9 months for CMMC-bound builds; 6+ months for FedRAMP-aligned. Driven by your environment, not vendor schedule.',
      'Days to deploy. But limited to what the vendor templated and the workflow rules they expose.',
      '12–24+ months. Big-bang rollout against a multi-year roadmap.',
    ],
  },
  {
    label: 'Compliance fit',
    values: [
      'Compliance built into architecture. SSP, control narratives, evidence collection produced as we build.',
      "Compliance limited to the vendor's certifications. BAAs/DPAs available; deeper controls work limited.",
      'Compliance documentation usually thorough but not always aligned to your actual controls.',
    ],
  },
  {
    label: 'Customization ceiling',
    values: [
      'No ceiling. We write the system to match your workflow.',
      'Hits the ceiling at config + light customization. Custom code requires premium contracts.',
      'High ceiling, but customization runs through change requests measured in weeks.',
    ],
  },
  {
    label: 'Total cost over 3 years',
    values: [
      'Higher up-front; flat ongoing. You own the code and the IP.',
      'Predictable per-seat or per-transaction. Scales with volume; costs compound when you need exceptions.',
      'Highest. License, services, ongoing maintenance, and change-request fees.',
    ],
  },
  {
    label: 'Vendor lock-in',
    values: [
      'None. You own the code and the documentation.',
      'Significant. Exporting your data and re-implementing workflow elsewhere is real work.',
      'Significant. Vendor-specific tech and proprietary formats.',
    ],
  },
  {
    label: 'Security review path',
    values: [
      'We produce the SSP, control narratives, and evidence package your security review or assessor will read.',
      "You inherit the vendor's SOC 2 / HIPAA / FedRAMP attestation. Useful but not custom to your environment.",
      'Vendor security questionnaires and attestations. Workable for established platforms.',
    ],
  },
];

const faqs = [
  {
    question: 'How do you handle code ownership and IP?',
    answer:
      'Client owns all custom code, repositories, and documentation produced. Standard MSA includes work-for-hire language. Open-source dependencies are declared up front with their licenses, and we avoid GPL/AGPL components unless explicitly approved.',
  },
  {
    question: 'Do you support legacy system integration?',
    answer:
      'Yes. Legacy database integration (DB2, Oracle, mainframe), legacy file format processing, and bridge architectures are common engagement types. Approach depends on what\'s accessible from outside the legacy system — direct DB access via service account, file-based exchange, wrapper API patterns, or COBOL/CICS shim if that\'s what survives.',
  },
  {
    question: "What's your stack?",
    answer:
      'Application: TypeScript, React, Next.js, Node.js, Python (FastAPI/Django for AI workloads). Mobile: React Native or native (Swift, Kotlin) depending on requirements. Data: PostgreSQL, Redis, S3-compatible object storage. Cloud: AWS, Azure, GovCloud equivalents. We adjust to your existing stack rather than impose ours.',
  },
  {
    question: 'How do you handle code review and testing?',
    answer:
      'Mandatory code review on every PR. Unit and integration test coverage targets per engagement (typically 70%+ on application logic, 90%+ on critical paths). Security testing (SAST/DAST) where required by the compliance framework. Manual penetration testing via partners on production-bound builds.',
  },
  {
    question: 'Can you operate inside our existing SDLC?',
    answer:
      'Yes. We integrate with your Jira / GitHub / Azure DevOps, your code review process, your release cadence, and your security scanning tools. We bring our own opinions but defer to your standards on things that don\'t affect quality.',
  },
];

const buyers = [
  {
    name: 'Companies whose existing SaaS stack doesn\'t fit',
    body:
      "Your industry-specific workflow has edge cases the vendor didn't templates for. The workarounds run on spreadsheets and email. The cost is real — both in productivity and in compliance risk when the workarounds don't survive an audit.",
  },
  {
    name: 'Teams replacing legacy systems',
    body:
      "A custom system from 1998–2010 still does the job, but the original developers have left, the documentation has decayed, and the platform stack is end-of-life. You can't rip-and-replace because the workflow knowledge is in the code. We bridge first, modernize incrementally.",
  },
  {
    name: 'Companies pursuing enterprise contracts',
    body:
      "An enterprise prospect is asking for SOC 2 attestation, HIPAA BAA terms, or NYDFS Part 500-aligned controls. Your current platform doesn't pass IT security review. You need a system that does — and the documentation to demonstrate it.",
  },
  {
    name: 'Regulated firms with AI use cases',
    body:
      "You have a use case for AI — document processing, prior authorization, fraud detection, claims triage — that commercial AI products can't deploy in your environment because of data residency, BAA, or model risk constraints. We build it inside your environment with the controls and documentation in place.",
  },
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        trail={[
          { name: 'Home', href: '/' },
          { name: 'Solutions', href: '/#services' },
          { name: 'AI-Powered Enterprise Software & Application Development', href: '/solutions/software-development' },
        ]}
      />
      <ServiceSchema
        name="AI-Powered Enterprise Software & Application Development"
        serviceType="Custom software development, AI integration, mobile applications, integration layers"
        url="https://autom8ionlab.com/solutions/software-development"
        industry="All"
      />
      <FAQPageSchema faqs={faqs} />

      <section className="relative min-h-[55vh] bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-950 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16">
          <nav className="text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-cyan-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-300">Solutions</span>
            <span className="mx-2">/</span>
            <span className="text-slate-300">AI-Powered Software &amp; Apps</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI-Powered Enterprise Software &amp; Application Development
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl leading-relaxed">
            Custom AI-powered software, internal tools, mobile apps, and customer-facing applications
            for compliance environments. Built for HIPAA, SOC 2, FedRAMP, NIST 800-171, and FCRA from
            day one.
          </p>
        </div>
      </section>

      {/* DEFINITION BLOCK */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Autom8ion Lab builds custom-built platforms, internal tools, mobile apps, and customer-facing
            applications — with AI capabilities integrated where they create real leverage. Full-stack
            development with security architecture engineered from day one. Software builders who design
            for HIPAA, SOC 2, CMMC, NIST 800-171, and FCRA from the first whiteboard sketch — not a body
            shop, not a generic dev agency.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            Engagements span the six industries we work in: construction, healthcare, finance, real
            estate, US government, and the Defense Industrial Base. The technical stack varies (TypeScript
            / React / Postgres for most web work; Python / FastAPI for AI-heavy workloads; Swift / Kotlin
            or React Native for mobile); the discipline doesn\'t — security architecture decided on day
            one, audit-ready documentation produced as we build, and the deployment target chosen to
            match your compliance posture.
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

      {/* COMPLIANCE CONSIDERATIONS */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Compliance considerations</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              Security architecture decisions made at the start of the project — data classification,
              encryption strategy, access control model, audit logging requirements, environment
              segmentation. Compliance documentation produced in parallel with code: SSP drafts, control
              narratives, evidence collection. The artifacts your auditor or AO will request, written
              against your real environment rather than templated.
            </p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-3" staggerDelay={0.04}>
            {[
              'Data classification and PHI/CUI/PII boundary definition',
              'Encryption at rest (KMS-backed) and in transit (TLS 1.3)',
              'Access control model (RBAC, ABAC, least privilege)',
              'Audit logging mapped to NIST 800-53 AU / HIPAA Security Rule / SOC 2 CC controls',
              'Environment segmentation (dev / staging / production with appropriate isolation)',
              'Vulnerability management and patching cadence',
              'Backup, recovery, and continuity planning',
              'Third-party dependency review and software supply chain controls',
            ].map((item) => (
              <StaggerItem key={item}>
                <PremiumCard variant="hover" className="p-4 flex items-start space-x-2 h-full">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{item}</span>
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
              Custom build vs. SaaS vs. enterprise platform
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8 max-w-3xl">
              The three paths most teams evaluate. Each is the right answer for someone — but they
              solve different problems.
            </p>
          </Reveal>

          <ComparisonTable
            headers={['Dimension', 'Autom8ion Lab (custom)', 'SaaS platform', 'Enterprise platform']}
            rows={comparisonRows}
          />
        </div>
      </section>

      {/* SERVICE-SPECIFIC FAQ */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
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

      {/* INTERNAL LINKING — to industry hubs */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Industry-specific software work
          </h2>
          <p className="text-slate-300 leading-relaxed mb-8">
            The right architecture, integrations, and compliance posture depend on your industry. Each
            industry hub covers the named systems we work with, the frameworks we engineer to, and the
            representative engagements that shape our approach.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { slug: 'defense', name: 'Defense Industrial Base', desc: 'CMMC 2.0, NIST 800-171, GCC High' },
              { slug: 'healthcare', name: 'Healthcare & Life Sciences', desc: 'HIPAA, EHR integration, FDA Part 11' },
              { slug: 'finance', name: 'Finance', desc: 'SOC 2, PCI-DSS, core banking integration' },
              { slug: 'government', name: 'US Government', desc: 'FedRAMP, FISMA, Section 508' },
              { slug: 'real-estate-property', name: 'Real Estate & Property', desc: 'Yardi, RealPage, FCRA, HUD' },
              { slug: 'construction', name: 'Construction', desc: 'Procore, Sage, HUD, OSHA' },
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative border-t border-slate-900/50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-white mb-4">
              Building something custom that has to pass review?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              30-minute discovery call. Tell us your environment, your existing stack, and the framework
              you operate under. We&apos;ll map the engagement and tell you whether we&apos;re a fit.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <MagneticButton href="/schedule-consultation" variant="primary">
              Schedule a discovery call
              <ArrowRight className="w-5 h-5" />
            </MagneticButton>
            <p className="mt-6 text-sm text-slate-400">
              Full federal registrations:{' '}
              <Link href="/capability-statement" className="text-cyan-400 link-underline">
                capability statement for federal registrations
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
