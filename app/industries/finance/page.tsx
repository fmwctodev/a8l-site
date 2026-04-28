import type { Metadata } from 'next';
import IndustryPageLayout, { type IndustryPageData } from '@/app/_components/IndustryPageLayout';

export const metadata: Metadata = {
  title: 'AI, Automation & Software for Banks, Fintech & Insurers',
  description:
    'SOC 2 and PCI-DSS-aligned platforms, AI for underwriting and fraud, core banking integrations for community banks, credit unions, fintech, and insurers.',
  keywords:
    'SOC 2 compliant software development, AI underwriting custom development, PCI-DSS application development, fintech custom software development, insurance claims automation AI, core banking integration custom',
  alternates: { canonical: 'https://autom8ionlab.com/industries/finance' },
  openGraph: {
    title: 'AI, Automation & Software for Banks, Fintech & Insurers',
    description:
      'SOC 2 and PCI-DSS-aligned platforms, AI for underwriting and fraud, core banking integrations for community banks, credit unions, fintech, and insurers.',
    url: 'https://autom8ionlab.com/industries/finance',
    images: [{ url: 'https://autom8ionlab.com/logo/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'AI, Automation & Software for Banks, Fintech & Insurers',
    description:
      'SOC 2 and PCI-DSS-aligned platforms, AI for underwriting and fraud, core banking integrations.',
  },
};

const data: IndustryPageData = {
  slug: 'finance',
  breadcrumbName: 'Finance',
  h1: 'AI, Automation & Custom Software for Banks, Fintech & Insurers',
  heroSubhead:
    'SOC 2 and PCI-DSS-aligned platforms, AI for underwriting and fraud detection, core banking and core insurance integrations for community banks, credit unions, fintech, and insurance carriers.',
  definitionParagraph:
    'We build for financial services teams that operate under regulator scrutiny — custom platforms with SOC 2 / PCI-DSS controls, AI for underwriting, fraud detection, claims processing, and document review, core banking and core insurance integrations (Fiserv, Jack Henry, FIS, Guidewire, Duck Creek), compliance reporting automation (BSA, OFAC, CTR, SAR), and customer-facing applications passing FFIEC scrutiny. AI tools designed deliberately to stay on the right side of SR 11-7 model risk requirements where applicable.',
  buyerProfile:
    'community and regional banks, credit unions, fintech companies, insurance carriers and MGAs, wealth management firms, payment processors, accounting firms with technology divisions.',
  whatWeBuild: [
    'Custom platforms with SOC 2 / PCI-DSS controls',
    'AI for underwriting, fraud detection, claims processing, document review',
    'Core banking and core insurance system integrations (Fiserv, Jack Henry, FIS, Guidewire, Duck Creek)',
    'Compliance reporting automation (BSA, OFAC, CTR, SAR)',
    'Customer-facing applications passing FFIEC scrutiny',
    'AI tools designed not to trigger SR 11-7 model risk requirements',
    'Loan origination and servicing automation',
  ],
  complianceConsiderations: [
    { name: 'SOC 2 Type II', desc: 'Service organization controls' },
    { name: 'PCI-DSS', desc: 'Cardholder data environment' },
    { name: 'NYDFS 23 NYCRR Part 500', desc: 'NY-licensed financial entities' },
    { name: 'GLBA Safeguards Rule', desc: 'Customer information security' },
    { name: 'FFIEC IT Examination Handbook', desc: 'Bank IT examination criteria' },
    { name: 'SR 11-7', desc: 'Model risk management for AI/ML' },
    { name: 'BSA/AML, OFAC', desc: 'Sanctions screening and reporting' },
    { name: 'State insurance department requirements', desc: 'Carrier-by-carrier' },
  ],
  faqs: [
    {
      question: 'Have you delivered for SEC- or FINRA-regulated firms?',
      answer:
        'Yes. Our work for wealth management and broker-dealer clients is structured to satisfy SEC Rule 17a-4 record retention, FINRA 4511 supervisory requirements, and the relevant cybersecurity expectations.',
    },
    {
      question: 'Can you integrate with our core banking platform (Fiserv, Jack Henry, FIS)?',
      answer:
        'Yes. Integration approach varies by core — Fiserv DNA, Jack Henry SilverLake, FIS IBS each have their own API patterns and data models. We scope integration after a discovery call with your core operations team.',
    },
    {
      question: "What's your approach to NYDFS Part 500 controls implementation?",
      answer:
        'We implement the technical controls Part 500 requires — multi-factor authentication, encryption of nonpublic information at rest and in transit, audit trails, third-party service provider management — and produce the documentation that supports the annual CISO certification.',
    },
    {
      question: "Can you build AI tools that don't trigger SR 11-7 model risk requirements?",
      answer:
        'We can. The dividing line is whether the AI output materially influences a risk decision (model) versus supports a human decision (not model). We design AI tools to stay on the right side of that line where possible, and produce the model documentation when not.',
    },
    {
      question: 'How do you handle data residency for cross-border financial systems?',
      answer:
        'Architecture decision. We segment data flows by jurisdiction, use region-locked storage, and build the audit trail that demonstrates compliance with GDPR, PIPEDA, and US state-level requirements.',
    },
    {
      question: 'Do you have experience with loan origination system integrations?',
      answer:
        'Yes. Common integrations include nCino, Encompass, Calyx Point, and proprietary core LOS modules. We build both data integration layers and AI-enhanced underwriting tools that operate within them.',
    },
  ],
  scenarios: [
    'AI document processing for a financial services firm, replacing manual review while satisfying internal compliance review.',
    'Custom underwriting platform built for a regional lender, integrated with core banking and credit bureau APIs.',
    'SOC 2 prep and audit support for a fintech pursuing enterprise contracts.',
  ],
  scenarioCta: 'Building inside a regulated financial environment? Schedule a discovery call',
  heroAccent: 'from-slate-950 via-blue-950/30 to-slate-950',
  iconAccent: 'text-blue-400',
};

export default function Page() {
  return <IndustryPageLayout data={data} />;
}
