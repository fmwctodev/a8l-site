import type { Metadata } from 'next';
import IndustryPageLayout, { type IndustryPageData } from '@/app/_components/IndustryPageLayout';

export const metadata: Metadata = {
  title: 'AI, Automation & Software for US Federal, State & Local Government',
  description:
    'Custom software, AI, and automation for civilian agencies, state government, municipal IT. FedRAMP, FISMA, NIST 800-53, StateRAMP. Registered US federal contractor.',
  keywords:
    'FedRAMP application development, government custom software development, NIST 800-53 implementation, GSA Schedule technology vendor, Section 508 compliant custom development, SDVOSB IT services, veteran-owned software development federal, StateRAMP implementation',
  alternates: { canonical: 'https://autom8ionlab.com/industries/government' },
  openGraph: {
    title: 'AI, Automation & Software for US Federal, State & Local Government',
    description:
      'Custom software, AI, and automation for civilian agencies, state government, and municipal IT. FedRAMP, FISMA, NIST 800-53, StateRAMP-aligned.',
    url: 'https://autom8ionlab.com/industries/government',
    images: [{ url: 'https://autom8ionlab.com/logo/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'AI, Automation & Software for US Federal, State & Local Government',
    description:
      'Custom software, AI, and automation for civilian agencies, state government, and municipal IT.',
  },
};

const data: IndustryPageData = {
  slug: 'government',
  breadcrumbName: 'US Government',
  h1: 'AI, Automation & Custom Software for US Federal, State & Local Government',
  heroSubhead:
    'Custom software, AI, and automation for civilian agencies, state government, and municipal IT teams. FedRAMP, FISMA, NIST 800-53, StateRAMP-aligned. Registered US federal contractor with SDVOSB pending status.',
  definitionParagraph:
    'We build custom software for case management, citizen services, and internal operations; AI for backlog processing, document review, and intake automation; FedRAMP-aligned cloud services; Section 508 compliant applications; records management aligned with NARA / state retention schedules; and modernization of legacy systems (mainframe interfaces, legacy database integration, citizen-facing portals with accessibility built in).',
  buyerProfile:
    'US federal civilian agencies, state government IT, county and municipal IT, special districts, public utilities, large school districts, state universities, state DOTs.',
  whatWeBuild: [
    'Custom software for case management, citizen services, internal operations',
    'AI for backlog processing, document review, intake automation',
    'FedRAMP-aligned cloud services',
    'Section 508 compliant applications',
    'Records management aligned with NARA / state retention schedules',
    'Modernization of legacy systems (mainframe interfaces, legacy database integration)',
    'Citizen-facing portals with accessibility built in',
  ],
  complianceConsiderations: [
    { name: 'FedRAMP Moderate / High', desc: 'Cloud services for federal use' },
    { name: 'FISMA / NIST 800-53', desc: 'Federal information system security' },
    { name: 'NIST 800-171', desc: 'Contractor handling of CUI' },
    { name: 'StateRAMP', desc: 'State government cloud authorization' },
    { name: 'Section 508', desc: 'Federal-facing application accessibility' },
    { name: 'NARA records management', desc: 'Federal records retention and disposition' },
    { name: 'State cybersecurity requirements', desc: 'Varies by state' },
  ],
  faqs: [
    {
      question: "Are you registered in SAM.gov / what's your UEI?",
      answer:
        'Yes. UEI: YY2DR3KSENH7. CAGE: 9YCS7. DUNS: 05-289-2750. Active SAM.gov registration.',
    },
    {
      question: 'Are you SDVOSB-certified?',
      answer:
        'Pending. Once approved, we will be eligible for SDVOSB set-aside competitions and SDVOSB sole-source awards under federal procurement preferences. We can currently compete openly and serve as an SDVOSB-track subcontractor under primes\' subcontracting plans.',
    },
    {
      question: 'Do you have prior performance with [civilian agency / state government]?',
      answer:
        'We can discuss applicable past performance after a qualifying call. Many engagements are NDA-protected; we provide details and references on a need-to-know basis after vendor onboarding begins.',
    },
    {
      question: 'Can you operate in FedRAMP-authorized environments?',
      answer:
        "Yes. We build for AWS GovCloud, Azure Government, and other FedRAMP Moderate/High authorized environments. We are not ourselves a FedRAMP-authorized SaaS provider — we build custom systems that operate inside our clients' FedRAMP-authorized environments.",
    },
    {
      question: 'Do you support GSA Schedule procurement?',
      answer:
        'Quote-driven engagement under MSA + SOW today. We are evaluating GSA Schedule paths as part of our federal procurement strategy.',
    },
    {
      question: 'Can you respond to RFPs/RFIs?',
      answer:
        'Yes. Send the SOW or RFI documentation to sean@autom8ionlab.com or use the contact form. We respond within one business day with a fit assessment and proposed approach.',
    },
    {
      question: "What's your approach to Section 508 accessibility?",
      answer:
        'Section 508 compliance is engineered into the build, not retrofitted. We follow WCAG 2.1 AA as the technical baseline, conduct accessibility audits during development, and produce VPAT/ACR documentation as part of the deliverable package.',
    },
  ],
  scenarios: [
    'AI document review tool for a state agency processing licensing backlogs.',
    'Custom case management modernization for a municipal government department.',
    'FedRAMP-aligned application built for a federal civilian agency contractor.',
  ],
  scenarioCta: 'Looking to add Autom8ion Lab to your vendor list or sub team? Schedule a discovery call',
  heroAccent: 'from-slate-950 via-cyan-950/30 to-slate-950',
  iconAccent: 'text-cyan-400',
};

export default function Page() {
  return <IndustryPageLayout data={data} />;
}
