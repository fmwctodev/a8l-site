import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BreadcrumbSchema, FAQPageSchema } from '@/app/_components/Schema';
import CTA from '@/app/_components/CTA';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Common questions about Autom8ion Lab — engagements, compliance frameworks, security, process, and federal contracting.',
  alternates: { canonical: 'https://autom8ionlab.com/faq' },
  openGraph: {
    title: 'Frequently Asked Questions | Autom8ion Lab',
    description:
      'Common questions about Autom8ion Lab — engagements, compliance, security, process, and federal contracting.',
    url: 'https://autom8ionlab.com/faq',
    images: [{ url: 'https://autom8ionlab.com/logo/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Frequently Asked Questions | Autom8ion Lab',
    description: 'Common questions about Autom8ion Lab — engagements, compliance, security, and process.',
  },
};

type FaqGroup = { heading: string; faqs: { question: string; answer: string }[] };

const groups: FaqGroup[] = [
  {
    heading: 'About Autom8ion Lab',
    faqs: [
      {
        question: 'What industries do you work with?',
        answer:
          "Construction, healthcare, finance, real estate and property management, US federal/state/local government, and the Defense Industrial Base. We don't take work outside those areas — the focus is what makes us useful.",
      },
      {
        question: 'Where are you based?',
        answer:
          'United States — primary location is Plant City, Florida. We also maintain a development and operations office in Montreal, Quebec. Sales and project delivery is US-only.',
      },
      {
        question: 'Are you registered for federal contracting?',
        answer:
          'Yes. UEI: YY2DR3KSENH7. CAGE: 9YCS7. DUNS: 05-289-2750. SDVOSB certification pending. Veteran-owned. Active SAM.gov registration.',
      },
      {
        question: 'Are you SDVOSB-certified?',
        answer:
          "Pending. Once approved, we will be eligible for SDVOSB set-aside competitions and SDVOSB sole-source awards under federal procurement preferences. We can currently compete openly and serve as an SDVOSB-track subcontractor under primes' subcontracting plans.",
      },
    ],
  },
  {
    heading: 'Compliance',
    faqs: [
      {
        question: 'Are you a CMMC RPO or C3PAO?',
        answer:
          'No. We are software and AI builders, not assessors. We engineer systems that satisfy NIST 800-171 controls and produce the documentation auditors expect, working alongside your assessor or a partner C3PAO. We can refer you to assessment partners.',
      },
      {
        question: 'Do you partner with C3PAOs for assessment?',
        answer:
          'Yes. We work with established C3PAO firms when our clients need formal certification assessment. The arrangement is collaborative — we engineer the controls; the C3PAO assesses them.',
      },
      {
        question: 'Will you sign a Business Associate Agreement (BAA)?',
        answer:
          "Yes. A signed BAA is part of every healthcare engagement that involves PHI access. We use the OCR-recommended BAA structure or your standard agreement, whichever your compliance team prefers.",
      },
      {
        question: 'Can you work on classified contracts?',
        answer:
          'Not at this time. We work on unclassified contracts including CUI handling (NIST 800-171, CMMC L1–L2), FedRAMP Moderate, and HIPAA-aligned environments. For classified work, we partner with cleared firms.',
      },
      {
        question: 'Can you operate in FedRAMP-authorized environments?',
        answer:
          "Yes. We build for AWS GovCloud, Azure Government, and other FedRAMP Moderate/High authorized environments. We are not ourselves a FedRAMP-authorized SaaS provider — we build custom systems that operate inside our clients' FedRAMP-authorized environments.",
      },
    ],
  },
  {
    heading: 'Engagements',
    faqs: [
      {
        question: "What's your typical engagement size and duration?",
        answer:
          'We scope to your contract structure — task orders, IDIQ, BPA, commercial fixed-price, or T&M. Most projects ship in 8–14 weeks. CMMC remediation runs 4–9 months. FedRAMP-aligned builds run 6+ months. Quote provided after the discovery call.',
      },
      {
        question: 'Do you have past performance with [specific industry / agency]?',
        answer:
          'We can discuss applicable past performance after a qualifying call. Many engagements are NDA-protected; we provide details and references on a need-to-know basis after vendor onboarding begins.',
      },
      {
        question: 'Do you respond to RFPs/RFIs?',
        answer:
          'Yes. Send the SOW or RFI documentation to sean@autom8ionlab.com or use the contact form. We respond within one business day with a fit assessment and proposed approach.',
      },
      {
        question: 'Do you support GSA Schedule procurement?',
        answer:
          'Quote-driven engagement under MSA + SOW today. We are evaluating GSA Schedule paths as part of our federal procurement strategy.',
      },
      {
        question: 'How do you handle code ownership and IP?',
        answer:
          'Client owns all custom code, repositories, and documentation produced. Our standard MSA includes work-for-hire language. Open-source dependencies are declared up front.',
      },
    ],
  },
  {
    heading: 'Security & process',
    faqs: [
      {
        question: 'How do you handle PHI in development and testing environments?',
        answer:
          'Synthetic data sets and de-identified production data with safe harbor or expert determination. PHI never enters non-production environments. We document the de-identification methodology as part of the SDLC artifact set.',
      },
      {
        question: 'Can you operate inside our existing SDLC?',
        answer:
          'Yes. We integrate with your Jira/GitHub/Azure DevOps, your code review process, your release cadence, and your security scanning tools.',
      },
      {
        question: "What's your approach to Section 508 accessibility?",
        answer:
          'Section 508 compliance is engineered into the build, not retrofitted. We follow WCAG 2.1 AA as the technical baseline, conduct accessibility audits during development, and produce VPAT/ACR documentation as part of the deliverable package.',
      },
      {
        question: 'How do you handle code review and testing?',
        answer:
          'Mandatory code review, unit and integration test coverage targets per engagement, security testing (SAST/DAST) where required by the compliance framework, and manual penetration testing via partners on production-bound builds.',
      },
    ],
  },
];

const allFaqs = groups.flatMap((g) => g.faqs);

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        trail={[
          { name: 'Home', href: '/' },
          { name: 'FAQ', href: '/faq' },
        ]}
      />
      <FAQPageSchema faqs={allFaqs} />

      <section className="relative min-h-[40vh] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-12">
          <nav className="text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-cyan-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-300">FAQ</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl leading-relaxed">
            Answers to the questions buyers, procurement teams, and prime contractors most often ask
            us. Don't see your question?{' '}
            <Link href="/get-in-touch" className="text-cyan-400 hover:text-cyan-300 underline">
              Send it to us
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          {groups.map((group) => (
            <div key={group.heading}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{group.heading}</h2>
              <div className="space-y-4">
                {group.faqs.map((f) => (
                  <div
                    key={f.question}
                    className="bg-slate-900/40 border border-slate-800 rounded-lg p-6"
                  >
                    <h3 className="text-lg font-semibold text-white mb-3">{f.question}</h3>
                    <p className="text-slate-300 leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center pt-8 border-t border-slate-800">
            <p className="text-slate-300 mb-6">Still have questions?</p>
            <Link
              href="/schedule-consultation"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-600 transition-colors"
            >
              <span>Schedule a 30-minute discovery call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
