import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldAlert, ShieldCheck, FileText, Network, Lock, AlertTriangle } from 'lucide-react';
import {
  BreadcrumbSchema,
  ServiceSchema,
  FAQPageSchema,
} from '@/app/_components/Schema';
import CTA from '@/app/_components/CTA';

export const metadata: Metadata = {
  title: 'Cybersecurity Compliance & Engineering',
  description:
    'CMMC readiness, NIST 800-171 implementation, HIPAA technical safeguards, SOC 2 prep. We engineer compliant systems and document them for audit. Not a CMMC RPO or C3PAO.',
  keywords:
    'CMMC compliance services, NIST 800-171 implementation, HIPAA technical safeguards, SOC 2 Type II preparation, cybersecurity compliance engineering, FedRAMP environment design, control implementation',
  alternates: { canonical: 'https://autom8ionlab.com/solutions/cybersecurity' },
  openGraph: {
    title: 'Cybersecurity Compliance & Engineering | Autom8ion Lab',
    description:
      'CMMC readiness, NIST 800-171 implementation, HIPAA technical safeguards, SOC 2 prep. We engineer compliant systems and document them for audit.',
    url: 'https://autom8ionlab.com/solutions/cybersecurity',
    images: [{ url: 'https://autom8ionlab.com/logo/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Cybersecurity Compliance & Engineering | Autom8ion Lab',
    description:
      'CMMC readiness, NIST 800-171, HIPAA, SOC 2. Engineering-led compliance — not policies, implemented controls.',
  },
};

/* -------------------------------------------------- */
/* Page data (LOCKED v3 §3.3)                         */
/* -------------------------------------------------- */

const whatWeBuild = [
  {
    icon: ShieldCheck,
    title: 'CMMC readiness assessment and remediation',
    body:
      'A practical assessment of your environment against the 110 NIST 800-171 Rev 2 requirements, mapped control by control. The output is a gap report, a prioritized remediation roadmap, and a scoping document that defines your CUI boundary clearly. Remediation is hands-on engineering — not template policies. Levels 1 and 2 cover most subcontractor scopes; Level 3 work occasional.',
  },
  {
    icon: FileText,
    title: 'NIST 800-171 controls implementation',
    body:
      'Implementation across all 14 control families — access control (AC), audit and accountability (AU), configuration management (CM), identification and authentication (IA), incident response (IR), system and information integrity (SI), and the rest. Each control has an implementation that runs in your environment and a control narrative that documents what was implemented, where, and how an assessor can verify it.',
  },
  {
    icon: Lock,
    title: 'HIPAA technical safeguards (engineered, not written)',
    body:
      'The HIPAA Security Rule technical safeguards — access control, audit controls, integrity controls, transmission security — implemented in code, infrastructure, and platform configuration. Encryption strategy mapped to your data flows. Access logs structured to satisfy the audit controls standard. BAA-aligned documentation produced as part of the deliverable. We write the systems your compliance team will defend, not policies they\'ll have to retrofit later.',
  },
  {
    icon: Network,
    title: 'SOC 2 Type II preparation',
    body:
      'Control design across the relevant Trust Service Criteria (typically Security plus one or two of Availability, Confidentiality, Processing Integrity), evidence collection automation, and the documentation package your auditor will request. We work alongside your CPA firm — they perform the attestation; we make sure the controls are in place and the evidence is collectable.',
  },
  {
    icon: ShieldAlert,
    title: 'FedRAMP-aligned environment design',
    body:
      "We are not ourselves a FedRAMP-authorized SaaS provider — we build custom systems that operate inside our clients' FedRAMP-authorized environments. The work covers landing zone design in AWS GovCloud or Azure Government, NIST 800-53 control selection and implementation, System Security Plan drafts, and 3PAO-prep packages. FedRAMP-aligned builds run 6+ months because the documentation burden is real.",
  },
  {
    icon: FileText,
    title: 'SSP, POA&M, and audit-ready documentation',
    body:
      "The artifacts assessors read first. System Security Plan with implementation statements that name specific systems, configurations, and responsible roles — not template language. POA&M tracking every gap with realistic milestones. Control narratives that map cleanly to your environment. Evidence collection automated where possible. Documentation produced as the build progresses, not at the end.",
  },
];

const comparisonRows = [
  {
    label: 'Control implementation',
    us: 'Engineered in code, infrastructure, and platform config — implemented and verifiable in your environment.',
    consultant: 'Policy and procedure templates. Implementation left to your IT team.',
    mssp: 'Operational monitoring after the controls are in place. Not implementation.',
  },
  {
    label: 'Documentation produced',
    us: 'SSP, POA&M, and control narratives written against your real environment.',
    consultant: 'Templated SSP, sometimes lightly customized. May not match what your environment actually does.',
    mssp: 'Monitoring reports and incident logs. Not the documentation an assessor asks for.',
  },
  {
    label: 'CMMC RPO / C3PAO',
    us: 'Not an RPO. Not a C3PAO. We engineer the controls; we partner with assessors when independent assessment is required.',
    consultant: 'Some are RPOs. Many are not.',
    mssp: 'Not an assessor.',
  },
  {
    label: 'Software development',
    us: 'In-house. We can write the custom platforms, internal tools, and integrations your compliance posture requires.',
    consultant: 'Out of scope.',
    mssp: 'Out of scope.',
  },
  {
    label: 'Best fit',
    us: 'Companies that need the controls implemented and the systems built — typically pre-assessment, pre-RFP, or pre-audit.',
    consultant: 'Companies that already have an internal IT/security team to implement what the consultant recommends.',
    mssp: 'Companies that already have controls in place and need ongoing monitoring.',
  },
];

const faqs = [
  {
    question: 'Are you a CMMC RPO or C3PAO?',
    answer:
      "No. We are software and AI builders with an in-house cybersecurity compliance arm — not assessors. We engineer systems that satisfy NIST 800-171 controls and produce the documentation auditors expect, working alongside your assessor or a partner C3PAO. We can refer you to assessment partners.",
  },
  {
    question: 'Are you an MSSP or do you offer 24/7 monitoring?',
    answer:
      "No, we don't run a SOC and we don't sell ongoing monitoring as a service. We engineer the systems and the controls; we hand off to your existing security operations or to an MSSP partner for monitoring after deployment. If you need 24/7 monitoring, we can recommend partners.",
  },
  {
    question: "What's a typical CMMC Level 2 remediation timeline?",
    answer:
      'Most CMMC Level 2 remediation projects run 4–9 months depending on environment complexity, the maturity of existing controls, and the scope of CUI handling. Smaller scopes with clean baselines can compress; multi-environment migrations and GCC High cutovers can extend.',
  },
  {
    question: 'Do you handle SOC 2 attestation?',
    answer:
      'We handle the engineering and evidence work that gets you ready for SOC 2 attestation. The attestation itself is performed by an independent CPA firm — we work alongside them, not in their place. Most clients use this engagement to get from zero to audit-ready before bringing in their auditor.',
  },
  {
    question: 'Can you operate inside our existing security tooling?',
    answer:
      'Yes. We integrate with your SIEM, IdP, EDR/XDR, and ticketing systems rather than imposing ours. Common stacks: Microsoft Sentinel + Entra ID, Splunk + Okta, Sumo Logic, CrowdStrike Falcon, Rapid7, Tenable. We make the controls visible in tools your team already uses.',
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
          { name: 'Cybersecurity Compliance & Engineering', href: '/solutions/cybersecurity' },
        ]}
      />
      <ServiceSchema
        name="Cybersecurity Compliance & Engineering"
        serviceType="CMMC readiness, NIST 800-171 implementation, HIPAA technical safeguards, SOC 2 preparation"
        url="https://autom8ionlab.com/solutions/cybersecurity"
        industry="All"
      />
      <FAQPageSchema faqs={faqs} />

      <section className="relative min-h-[55vh] bg-gradient-to-br from-slate-950 via-emerald-950/30 to-slate-950 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16">
          <nav className="text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-cyan-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-300">Solutions</span>
            <span className="mx-2">/</span>
            <span className="text-slate-300">Cybersecurity Compliance &amp; Engineering</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Cybersecurity Compliance &amp; Engineering
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl leading-relaxed">
            CMMC readiness, NIST 800-171 implementation, HIPAA technical safeguards, SOC 2 prep. We
            engineer compliant systems and document them for audit.
          </p>
        </div>
      </section>

      {/* DEFINITION BLOCK (~200 words) — LOCKED v3 §3.3 step 1 */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Autom8ion Lab provides cybersecurity compliance engineering for organizations operating
            under CMMC 2.0, NIST 800-171, NIST 800-53, HIPAA, SOC 2, FCRA, and FedRAMP. We are software
            builders with an in-house cybersecurity compliance arm — not a security consulting firm and
            not an MSSP. The output of an engagement is implemented controls in your environment, the
            documentation an assessor expects (System Security Plan, POA&amp;M, control narratives,
            evidence packages), and a system you can defend in audit.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            Engagements typically span CMMC Level 2 readiness for DoD subcontractors, HIPAA-aligned
            infrastructure for healthcare clients, SOC 2 Type II preparation for SaaS companies pursuing
            enterprise contracts, FedRAMP-aligned environment design for vendors selling into civilian
            agencies, and the technical safeguards work that sits across all of them.
          </p>
        </div>
      </section>

      {/* REQUIRED DISCLOSURE BLOCK — LOCKED v3 §3.3 CRITICAL */}
      <section className="py-12 bg-amber-950/20 border-y border-amber-900/30">
        <div className="max-w-4xl mx-auto px-6 flex items-start space-x-4">
          <AlertTriangle className="w-6 h-6 text-amber-300 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-amber-300 mb-3">
              Important: We are not a CMMC RPO or C3PAO
            </h2>
            <p className="text-slate-300 leading-relaxed">
              We are not currently a CMMC Registered Practitioner Organization (RPO) or a C3PAO. We
              engineer systems to NIST 800-171 controls and produce the documentation your assessor
              will need. We work alongside RPO/C3PAO partners when independent assessment is required,
              and we can refer you to assessment partners.
            </p>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Who this is for</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-slate-300">
            {[
              {
                name: 'DoD primes and subcontractors',
                body:
                  'Facing CMMC Phase 2 flow-down requirements. CUI handling that needs NIST 800-171 controls implemented and documented for assessment.',
              },
              {
                name: 'Healthcare entities and business associates',
                body:
                  'PHI handling that needs HIPAA Security Rule technical safeguards engineered into infrastructure and applications, not just documented in policy.',
              },
              {
                name: 'SaaS and service organizations',
                body:
                  'Pursuing enterprise contracts that require SOC 2 Type II attestation. Need control implementation and evidence collection before bringing in the CPA auditor.',
              },
              {
                name: 'Federal-facing software vendors',
                body:
                  'Building products that must operate inside FedRAMP Moderate or High authorized environments. Need the controls implemented and the SSP drafted.',
              },
              {
                name: 'Tenant screening and consumer-data businesses',
                body:
                  'FCRA adverse action workflow, audit trail, and dispute handling implemented in code and verifiable for regulator review.',
              },
              {
                name: 'Banks, fintech, and insurance carriers',
                body:
                  'NYDFS Part 500, GLBA, FFIEC IT Examination Handbook, and SR 11-7 model risk requirements where the technical implementation is more useful than another policy binder.',
              },
            ].map((role) => (
              <div
                key={role.name}
                className="bg-slate-900/40 border border-slate-800 rounded-lg p-5"
              >
                <h3 className="text-white font-semibold mb-2">{role.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{role.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD (~600 words across subsections) */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">What we build</h2>
          <div className="space-y-6">
            {whatWeBuild.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-slate-900/40 border border-slate-800 rounded-lg p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
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

      {/* COMPARISON TABLE — LOCKED v3 §3.3 step 5 */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Compliance engineering firm vs. consultant vs. MSSP
          </h2>
          <p className="text-slate-300 leading-relaxed mb-8 max-w-3xl">
            The three vendor categories that show up when companies start looking for compliance help.
            Each is the right answer for someone — but they solve different problems.
          </p>

          <div className="hidden md:block overflow-hidden rounded-xl border border-slate-800">
            <table className="w-full text-left">
              <thead className="bg-slate-900/60">
                <tr>
                  <th className="px-5 py-4 text-sm font-semibold text-cyan-400 uppercase tracking-wider w-1/4">
                    Dimension
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold text-emerald-400 uppercase tracking-wider w-1/4">
                    Autom8ion Lab
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold text-slate-400 uppercase tracking-wider w-1/4">
                    Compliance consultant
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold text-slate-400 uppercase tracking-wider w-1/4">
                    MSSP
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="align-top">
                    <td className="px-5 py-4 text-white font-semibold text-sm">{row.label}</td>
                    <td className="px-5 py-4 text-slate-200 text-sm leading-relaxed">{row.us}</td>
                    <td className="px-5 py-4 text-slate-400 text-sm leading-relaxed">{row.consultant}</td>
                    <td className="px-5 py-4 text-slate-400 text-sm leading-relaxed">{row.mssp}</td>
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
                  Autom8ion Lab
                </div>
                <p className="text-slate-200 text-sm mb-3">{row.us}</p>
                <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">
                  Compliance consultant
                </div>
                <p className="text-slate-400 text-sm mb-3">{row.consultant}</p>
                <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">MSSP</div>
                <p className="text-slate-400 text-sm">{row.mssp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE FRAMEWORKS WE BUILD TO */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Frameworks our engineering work targets
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            {[
              'CMMC 2.0 (Levels 1–3)',
              'NIST 800-171 Rev 2',
              'NIST 800-53',
              'FedRAMP Moderate / High',
              'HIPAA / HITECH',
              'HITRUST CSF',
              'SOC 2 Type II',
              'PCI-DSS',
              'FCRA',
              'FFIEC IT Examination Handbook',
              'NYDFS 23 NYCRR Part 500',
              'GLBA Safeguards Rule',
              'DFARS 252.204-7012 / 7021',
              'Section 508',
            ].map((f) => (
              <div
                key={f}
                className="bg-slate-900/40 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 flex items-center space-x-2"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE-SPECIFIC FAQ */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Cybersecurity FAQ</h2>
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

      {/* INTERNAL LINKING — to industry hubs */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Industry-specific compliance work
          </h2>
          <p className="text-slate-300 leading-relaxed mb-8">
            The framework you operate under depends on your industry. Each industry hub goes deeper on
            the specific controls, named systems, and audit posture that apply.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { slug: 'defense', name: 'Defense Industrial Base', desc: 'CMMC 2.0, NIST 800-171, DFARS' },
              { slug: 'healthcare', name: 'Healthcare & Life Sciences', desc: 'HIPAA, HITRUST, FDA Part 11' },
              { slug: 'finance', name: 'Finance', desc: 'SOC 2, PCI-DSS, NYDFS Part 500, FFIEC' },
              { slug: 'government', name: 'US Government', desc: 'FedRAMP, FISMA, NIST 800-53, Section 508' },
              { slug: 'real-estate-property', name: 'Real Estate & Property', desc: 'FCRA, HUD, Fair Housing' },
              { slug: 'construction', name: 'Construction', desc: 'HUD, OSHA, Davis-Bacon' },
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
      <section className="py-20 bg-black border-t border-slate-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need controls implemented and documented?
          </h2>
          <p className="text-slate-300 leading-relaxed mb-8">
            30-minute discovery call. Tell us your environment, your framework, and your timeline.
            We'll map the engagement and tell you whether we're a fit — or whether you need a different
            kind of vendor.
          </p>
          <Link
            href="/schedule-consultation"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-emerald-700 hover:to-cyan-600 transition-colors"
          >
            <span>Schedule a discovery call</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-6 text-sm text-slate-400">
            Full federal registrations:{' '}
            <Link href="/capability-statement" className="text-cyan-400 hover:underline">
              capability statement for federal registrations
            </Link>
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
