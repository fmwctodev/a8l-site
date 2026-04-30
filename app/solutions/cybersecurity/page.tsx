import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldAlert, ShieldCheck, FileText, Network, Lock, AlertTriangle } from 'lucide-react';
import {
  BreadcrumbSchema,
  ServiceSchema,
  FAQPageSchema,
} from '@/app/_components/Schema';
import CTA from '@/app/_components/CTA';
import RelatedSolutions from '@/app/_components/RelatedSolutions';
import { Reveal, Stagger, StaggerItem, PremiumCard, MagneticButton, ComparisonTable, type ComparisonRow } from '@/app/_components/ui';

export const metadata: Metadata = {
  title: 'CMMC, NIST 800-171, HIPAA & SOC 2 Engineering',
  description:
    'CMMC 2.0, NIST 800-171, HIPAA, and SOC 2 readiness — engineered, documented, and audit-ready. Veteran-led cybersecurity for the DIB and commercial firms.',
  keywords:
    'cybersecurity and compliance services, SOC 2 readiness, HIPAA security, audit-ready documentation, commercial cybersecurity, business security engineering, control implementation, evidence collection',
  alternates: { canonical: 'https://autom8ionlab.com/solutions/cybersecurity' },
  openGraph: {
    title: 'CMMC, NIST 800-171, HIPAA & SOC 2 Engineering | Autom8ion Lab',
    description:
      'CMMC 2.0, NIST 800-171, HIPAA, and SOC 2 readiness — engineered, documented, and audit-ready. Veteran-led cybersecurity for the DIB and commercial firms.',
    url: 'https://autom8ionlab.com/solutions/cybersecurity',
    images: [{
      url: 'https://autom8ionlab.com/api/og?title=CMMC%2C+NIST+800-171%2C+HIPAA+%26+SOC+2+Engineering&section=Solutions',
      width: 1200,
      height: 630,
      alt: 'CMMC, NIST 800-171, HIPAA & SOC 2 Engineering',
    }],
  },
  twitter: {
    title: 'CMMC, NIST 800-171, HIPAA & SOC 2 Engineering | Autom8ion Lab',
    description:
      'CMMC 2.0, NIST 800-171, HIPAA, and SOC 2 readiness — engineered, documented, and audit-ready. Veteran-led cybersecurity for the DIB and commercial firms.',
    images: ['https://autom8ionlab.com/api/og?title=CMMC%2C+NIST+800-171%2C+HIPAA+%26+SOC+2+Engineering&section=Solutions'],
  },
};

/* -------------------------------------------------- */
/* Page data                                          */
/* -------------------------------------------------- */

const whatWeBuild = [
  {
    icon: ShieldCheck,
    title: 'SOC 2 readiness and control implementation',
    body:
      'For SaaS, service businesses, and growing tech teams. We implement the controls that protect customer data and business systems in real environments — MFA across all critical systems, role-based access and least-privilege permissions, encryption for data at rest and in transit, centralized logging and audit retention, endpoint hardening and secure configurations with change control, vendor access controls and third-party risk processes, plus policies, risk registers, and evidence mapped to actual operations.',
  },
  {
    icon: Lock,
    title: 'HIPAA security and compliance support',
    body:
      'For healthcare organizations and vendors handling protected health information. We engineer the control foundation required for protecting PHI with confidence — access control enforcement across users, devices, and systems, identification and authentication controls with MFA, configuration baselines and secure system settings, audit logging and record retention aligned to compliance requirements, encryption, data handling, backup, and boundary protections, plus workforce access controls and device management documented to map implemented controls to operational and regulatory expectations.',
  },
  {
    icon: FileText,
    title: 'Audit-ready documentation support',
    body:
      'For teams preparing policies, inventories, access reviews, risk records, and evidence packages. We prepare the documentation package your reviewer, customer, or auditor will expect to see — policies and procedures tied to actual system behavior, risk assessments and remediation tracking, asset, user, and vendor inventories, access review records and control evidence, and evidence collection that reduces audit friction. We do not separate the technical build from the paperwork. We implement the system and document the control set for audit at the same time.',
  },
  {
    icon: Network,
    title: 'Engineering the controls and the audit trail',
    body:
      'A compliant environment is not just secure. It is provable. That is the part most firms miss. We build the controls inside your stack, then create the documentation trail that supports them — System Security Plans (SSPs), Plans of Action and Milestones (POA&Ms), control narratives and policy sets, asset, access, and vendor documentation, and evidence collection for audits and assessments. If an auditor asks how a control works, who owns it, and where the evidence lives, you have an answer.',
  },
  {
    icon: ShieldAlert,
    title: '30-day audit and 4-9 month remediation',
    body:
      "Strong compliance programs are built in phases. We start with a 30-day audit to establish scope, identify failed controls, and map evidence gaps. Most organizations then need 4 to 9 months to close gaps, implement controls, validate evidence, and prepare for audit or customer review. Anyone promising a full enterprise remediation overnight is selling fiction. We handle both sides — we build the controls and the audit package that proves they work.",
  },
  {
    icon: FileText,
    title: 'Government & defense compliance support',
    body:
      "If you support federal agencies or the Defense Industrial Base, we also handle government-specific compliance programs — CMMC 2.0 readiness, FedRAMP-aligned security support, NIST 800-171 implementation, and audit-ready documentation support for SSPs, POA&Ms, inventories, and evidence packages. SDVOSB Pending, veteran-owned. UEI: YY2DR3KSENH7. CAGE: 9YCS7.",
  },
];

const comparisonRows: ComparisonRow[] = [
  {
    label: 'Control implementation',
    values: [
      'Engineered into your stack — identity, endpoints, logging, encryption, configurations, backups, and workflow-level exposure all hardened by senior engineers.',
      'Policies, risk registers, and gap reports. Implementation handed back to your IT team to execute.',
      'Operational monitoring after the controls are in place — not implementation.',
    ],
  },
  {
    label: 'Documentation produced',
    values: [
      'SSPs, POA&Ms, control narratives, asset and vendor inventories, access reviews, and evidence packages mapped to your actual environment.',
      'Templated policies and assessment decks. May not match what your environment actually does.',
      'Monitoring reports and incident logs — not the documentation an auditor or customer reviewer asks for.',
    ],
  },
  {
    label: 'Engagement shape',
    values: [
      '30-day audit to scope and identify gaps; 4-9 month remediation to engineer controls, document evidence, and validate. Senior engineers stay on through audit prep.',
      'Assessment and recommendations. Implementation work is on you or a separate vendor.',
      'Ongoing managed service after the controls already exist.',
    ],
  },
  {
    label: 'Industry focus',
    values: [
      'Healthcare, finance, and tech where trust, uptime, and data protection directly affect growth — plus government & defense when required.',
      'Varies. Often broad coverage with shallow depth.',
      'Operational coverage across customer base — generally framework-agnostic.',
    ],
  },
  {
    label: 'Best fit',
    values: [
      'Companies that need controls implemented and the evidence package built — typically pre-vendor-questionnaire, pre-customer-review, or pre-audit.',
      'Companies that already have an internal IT/security team to implement what the consultant recommends.',
      'Companies that already have controls in place and need ongoing monitoring.',
    ],
  },
];

const faqs = [
  {
    question: 'Are you a CMMC RPO or C3PAO?',
    answer:
      "We are not currently a CMMC Registered Practitioner Organization (RPO) or a C3PAO. We implement systems aligned to NIST 800-171 controls and produce the documentation your assessor will need. We work alongside RPO/C3PAO partners when independent assessment is required.",
  },
  {
    question: 'Are you an MSSP or do you offer 24/7 monitoring?',
    answer:
      "Most cybersecurity firms are essentially insurance brokers — they tell you what you need to buy and then walk away. We are builders, not an MSSP. We engineer the controls and create the audit package that proves they work. If you need 24/7 monitoring after deployment, we work alongside MSSP partners.",
  },
  {
    question: "What's a typical SOC 2 or HIPAA remediation timeline?",
    answer:
      'We start with a 30-day audit to identify control gaps, evidence failures, and system exposure. Most full remediation programs take 4 to 9 months because real compliance means fixing identity, access, logging, encryption, endpoint controls, vendor risk, and documentation together.',
  },
  {
    question: 'Do you handle SOC 2 attestation directly?',
    answer:
      'No — SOC 2 attestation is performed by an independent CPA firm. We handle the engineering and evidence work that gets you ready for the attestation, working alongside your auditor. Most clients use the engagement to get from zero to audit-ready before bringing in their CPA firm.',
  },
  {
    question: 'How do you protect business assets that matter most?',
    answer:
      'We focus on customer and patient data, financial systems and payment workflows, internal applications and cloud environments, vendor-connected systems and third-party access, and audit trails, policies, and evidence for customer and partner reviews. By integrating security into your API integrations and software development from day one, we save you from the "security tax" most companies pay later.',
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
          { name: 'Solutions', href: '/#services' },
          { name: 'Cybersecurity & Compliance', href: '/solutions/cybersecurity' },
        ]}
      />
      <ServiceSchema
        name="Cybersecurity & Compliance for Commercial Business Assets"
        serviceType="SOC 2 readiness, HIPAA security and compliance, audit-ready documentation, control engineering"
        url="https://autom8ionlab.com/solutions/cybersecurity"
        industry="All"
      />
      <FAQPageSchema faqs={faqs} />

      <section className="relative min-h-[55vh] bg-gradient-to-br from-slate-950 via-emerald-950/30 to-slate-950 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-16">
          <Reveal>
            <nav className="text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-cyan-400">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-300">Solutions</span>
              <span className="mx-2">/</span>
              <span className="text-slate-300">Cybersecurity &amp; Compliance</span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Cybersecurity &amp; Compliance Services That Protect Commercial Business Assets
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xl text-slate-300 max-w-4xl leading-relaxed">
              We implement the controls and document the evidence trail at the same time. SOC 2 readiness,
              HIPAA security, and audit-ready documentation for healthcare, finance, and tech teams where
              trust, uptime, and data protection directly affect growth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* AEO DEFINITION BLOCK */}
      <section className="py-12 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal>
            <section className="definition-block">
              <p className="lead">
                <strong>Cybersecurity compliance engineering</strong> is the practice of designing
                and implementing technical controls — RBAC, encryption, segmentation, audit logging,
                SSP/POA&amp;M documentation — that satisfy CMMC 2.0, NIST 800-171, HIPAA, and SOC 2
                frameworks at the architecture layer, not retrofitted at audit time. We engineer the
                controls; we partner with assessors when independent assessment is required. We are
                not a CMMC RPO or C3PAO.
              </p>
            </section>
          </Reveal>
        </div>
      </section>

      {/* DEFINITION BLOCK */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
          {/* Vertical gradient accent bar */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-cyan-400 via-emerald-500 to-blue-500 animate-pulse-glow shadow-glow-cyan"
          />
          <div className="pl-8">
            <Reveal>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Security is not a checkbox. It is revenue protection, operational continuity, customer
                trust, and brand protection. If you handle sensitive customer data, financial records,
                health information, or internal business systems, weak controls put your business at
                risk fast. Most firms fail compliance because they duct-tape tools that do not talk,
                write policies no one follows, and react only after a vendor questionnaire, audit
                request, or security incident lands. That approach breaks fast. Reviewers verify
                implemented controls, evidence, ownership, and documentation. They do not grade effort.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-slate-300 leading-relaxed">
                At Autom8ion Lab, we build cybersecurity and compliance systems that match how your
                operation actually works. We do not hand you a template. We implement the controls and
                document the evidence trail at the same time. We lead with commercial security and
                compliance for teams in healthcare, finance, and tech. We protect customer and patient
                data, financial systems and payment workflows, internal applications and cloud
                environments, vendor-connected systems and third-party access, and the audit trails,
                policies, and evidence for customer and partner reviews. Government-specific frameworks
                like CMMC, FedRAMP, and NIST 800-171 are addressed in our Government &amp; Defense
                section below.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* REQUIRED DISCLOSURE BLOCK — pulse-glow shell */}
      <section className="py-12 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="relative bg-amber-950/20 border-y border-amber-900/40 rounded-lg p-8 overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-0 border-y border-amber-500/30 animate-pulse-glow rounded-lg pointer-events-none"
              />
              <div className="relative flex items-start space-x-4">
                <AlertTriangle className="w-6 h-6 text-amber-300 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-amber-300 mb-3">
                    Important: We are not a CMMC RPO or C3PAO
                  </h2>
                  <p className="text-slate-300 leading-relaxed">
                    We are not currently a CMMC Registered Practitioner Organization (RPO) or a C3PAO.
                    We implement systems aligned to NIST 800-171 controls and produce the documentation
                    your assessor will need. We work alongside RPO/C3PAO partners when independent
                    assessment is required.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT USUALLY BREAKS COMPLIANCE PROGRAMS */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">What usually breaks compliance programs</h2>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-4 text-slate-300" staggerDelay={0.06}>
            {[
              {
                name: 'Documentation that does not match reality',
                body:
                  'Policies say one thing. Systems do another. Reviewers verify what is actually implemented, not what is written down.',
              },
              {
                name: 'Weak identity controls',
                body:
                  'Shared accounts, inconsistent MFA, and over-permissioned access. Identity is where most audit findings start.',
              },
              {
                name: 'Unmanaged devices and vendors',
                body:
                  'Endpoints and third parties with direct paths to sensitive data. Vendor access is a control surface most firms underestimate.',
              },
              {
                name: 'Missing audit evidence',
                body:
                  'No clean record of control ownership, monitoring, or remediation. When an auditor asks how a control works and who owns it, you need an answer.',
              },
              {
                name: 'No implementation layer',
                body:
                  'A consultant identifies gaps, but nobody actually fixes them. We close those gaps by building the controls and producing the evidence package reviewers expect.',
              },
              {
                name: 'Last-minute scrambles',
                body:
                  'Reactive compliance work creates audit findings, customer-questionnaire delays, and partner-trust gaps. Maintain a defensible state of readiness instead.',
              },
            ].map((role) => (
              <StaggerItem key={role.name}>
                <PremiumCard variant="hover" className="p-5 h-full">
                  <h3 className="text-white font-semibold mb-2">{role.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{role.body}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">What we build</h2>
          </Reveal>
          <Stagger className="space-y-6" staggerDelay={0.08}>
            {whatWeBuild.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <PremiumCard variant="hover" className="p-6 group">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-glow-cyan transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
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

      {/* 30-DAY AUDIT TIMELINE */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              The 30-day audit and 4-9 month remediation timeline
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8 max-w-3xl">
              Strong compliance programs are built in phases. We start with a 30-day audit to establish
              scope, identify failed controls, and map evidence gaps. Most organizations then need 4 to
              9 months to close gaps, implement controls, validate evidence, and prepare for audit or
              customer review. Anyone promising a full enterprise remediation overnight is selling
              fiction.
            </p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-4" staggerDelay={0.06}>
            {[
              {
                step: 'Step 1: 30-Day Audit and Scope Mapping',
                body:
                  'We assess your current environment against SOC 2 control expectations, HIPAA security requirements, and your actual operational risk. We identify failed controls, missing evidence, ownership issues, and system-level risks.',
              },
              {
                step: 'Step 2: Control Engineering',
                body:
                  'Our senior engineers harden the environment. We fix identity, endpoints, logging, encryption, configurations, backups, and workflow-level exposure.',
              },
              {
                step: 'Step 3: Documentation and Evidence',
                body:
                  'We produce the documentation package that matches the implemented state of the system — policies, inventories, risk records, access reviews, and audit-ready evidence.',
              },
              {
                step: 'Step 4: Validation and Audit Prep',
                body:
                  'We run internal reviews, validate the controls, close remaining gaps, and prepare your team for auditor, customer, and partner security questions.',
              },
            ].map((s) => (
              <StaggerItem key={s.step}>
                <PremiumCard variant="hover" className="p-6 h-full">
                  <h3 className="text-white font-semibold mb-2">{s.step}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.body}</p>
                </PremiumCard>
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
              Compliance engineering firm vs. consultant vs. MSSP
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8 max-w-3xl">
              The three vendor categories that show up when companies start looking for compliance help.
              Each is the right answer for someone — but they solve different problems.
            </p>
          </Reveal>

          <ComparisonTable
            headers={['Dimension', 'Autom8ion Lab', 'Compliance consultant', 'MSSP']}
            rows={comparisonRows}
          />
        </div>
      </section>

      {/* FRAMEWORKS */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Frameworks our engineering work targets
            </h2>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-3 text-sm" staggerDelay={0.04}>
            {[
              'SOC 2 Type II',
              'HIPAA / HITECH',
              'CMMC 2.0',
              'NIST 800-171',
              'NIST 800-53',
              'FedRAMP-aligned',
              'PCI-DSS',
              'HITRUST CSF',
            ].map((f) => (
              <StaggerItem key={f}>
                <PremiumCard variant="hover" className="px-4 py-3 text-slate-200 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{f}</span>
                </PremiumCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* WHY OUR APPROACH IS DIFFERENT */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why our approach is different
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              Most cybersecurity firms are essentially insurance brokers. They tell you what you need to
              buy and then walk away. At Autom8ion Lab, we are builders. We do not just help you chase a
              checklist — we help you build a system that protects your business assets and stands up to
              review. By integrating security into your <Link href="/solutions/api-integrations" className="text-cyan-400 hover:text-cyan-300 underline">API integrations</Link> and{' '}
              <Link href="/solutions/software-development" className="text-cyan-400 hover:text-cyan-300 underline">software development</Link>{' '}
              from day one, we save you from the &quot;security tax&quot; that most companies pay later.
            </p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-4" staggerDelay={0.06}>
            {[
              {
                name: 'Senior engineer access',
                body:
                  'You will never be handed off to an account manager. You speak directly with the engineers building your security.',
              },
              {
                name: 'Commercial-first protection',
                body:
                  'We prioritize the controls that protect healthcare, finance, and tech environments where sensitive data, uptime, and customer trust are on the line.',
              },
              {
                name: 'Direct communication',
                body:
                  "We don't hide behind jargon. If something is broken, we tell you it's broken and we show you how we're fixing it.",
              },
              {
                name: 'Engineering, not advisory',
                body:
                  'We do not separate the technical build from the paperwork. We implement the system and document the control set for audit at the same time.',
              },
            ].map((it) => (
              <StaggerItem key={it.name}>
                <PremiumCard variant="hover" className="p-5 h-full">
                  <h3 className="text-white font-semibold mb-2">{it.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{it.body}</p>
                </PremiumCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* GOVERNMENT & DEFENSE BLOCK */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Government &amp; Defense
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              If you support federal agencies or the Defense Industrial Base, we also handle
              government-specific compliance programs. That includes CMMC 2.0 readiness, FedRAMP-aligned
              security support, NIST 800-171 implementation, and audit-ready documentation support for
              SSPs, POA&amp;Ms, inventories, and evidence packages.
            </p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-3 text-sm" staggerDelay={0.04}>
            {[
              'UEI: YY2DR3KSENH7',
              'CAGE: 9YCS7',
              'SDVOSB Pending — veteran-owned',
              'FedRAMP-aware deployment support',
              'NIST-focused control alignment',
              'CMMC 2.0 readiness work',
            ].map((f) => (
              <StaggerItem key={f}>
                <PremiumCard variant="hover" className="px-4 py-3 text-slate-200 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Cybersecurity FAQ</h2>
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
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Quick links for your security strategy
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              You need a partner that understands the intersection of engineering and compliance.
              Whether you need SOC 2 readiness, HIPAA security support, or a stronger control
              environment for healthcare, finance, or tech, we have the roadmap and the build team
              ready.
            </p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-3" staggerDelay={0.05}>
            {[
              { href: '/solutions/ai-agent-development', name: 'AI Security & AI Agent Development', desc: 'Custom AI agents engineered for SOC 2-aligned environments' },
              { href: '/solutions/cloud-systems', name: 'Secure Cloud Systems', desc: 'Scalable cloud infrastructure for tech and healthcare teams' },
              { href: '/solutions/api-integrations', name: 'API Integrations', desc: 'Custom integration layers with audit logging and access controls' },
              { href: '/solutions/software-development', name: 'Software Development', desc: 'Custom software with security baked in from day one' },
              { href: '/solutions/workflow-automation', name: 'Workflow Automation', desc: 'Custom automation with audit trails and approval logic' },
              { href: '/solutions/custom-llm-systems', name: 'Custom LLM Systems', desc: 'Private AI for sensitive enterprise data' },
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

      {/* CTA */}
      <section className="py-20 relative border-t border-slate-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-white mb-4">
              Stop guessing. Start hardening.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              Every day you wait is another day your business data is exposed and your operations are at
              risk. Don&apos;t wait for a breach or a failed audit to take this seriously. Let&apos;s
              build a system that protects your revenue and your reputation.
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
      <RelatedSolutions currentSlug="cybersecurity" />
    </>
  );
}
