import type { Metadata } from 'next';
import IndustryPageLayout, { type IndustryPageData } from '@/app/_components/IndustryPageLayout';

export const metadata: Metadata = {
  title: 'Custom AI for Financial Services',
  description:
    'Custom AI for finance: portfolio analytics, PE data normalization, SOX-aligned automation. SOC 2 and bank-level security from day one.',
  keywords:
    'SOC 2 compliant software development, AI underwriting custom development, PCI-DSS application development, fintech custom software development, insurance claims automation AI, core banking integration custom, Fiserv integration, Jack Henry integration, FIS integration, Guidewire integration, Duck Creek integration, NYDFS Part 500 compliance',
  alternates: { canonical: 'https://autom8ionlab.com/industries/finance' },
  openGraph: {
    title: 'Custom AI for Financial Services | Autom8ion Lab',
    description:
      'Custom AI for finance: portfolio analytics, PE data normalization, SOX-aligned automation. SOC 2 and bank-level security from day one.',
    url: 'https://autom8ionlab.com/industries/finance',
    images: [{
      url: 'https://autom8ionlab.com/api/og?title=Custom+AI+for+Financial+Services&section=Industries',
      width: 1200,
      height: 630,
      alt: 'AI, Automation & Custom Software for Banks, Fintech & Insurers',
    }],
  },
  twitter: {
    title: 'Custom AI for Financial Services | Autom8ion Lab',
    description:
      'Custom AI for finance: portfolio analytics, PE data normalization, SOX-aligned automation. SOC 2 and bank-level security from day one.',
    images: ['https://autom8ionlab.com/api/og?title=Custom+AI+for+Financial+Services&section=Industries'],
  },
};

const data: IndustryPageData = {
  slug: 'finance',
  breadcrumbName: 'Finance',
  h1: 'AI, Automation & Custom Software for Banks, Fintech & Insurers',
  heroSubhead:
    'SOC 2 and PCI-DSS-aligned platforms, AI for underwriting and fraud detection, core banking and core insurance integrations for community banks, credit unions, fintech, and insurance carriers.',

  definition:
    'Custom AI for financial services is the deployment of secure, auditable AI agents and LLM systems that handle portfolio analytics, PE data normalization, KYC review, and SOX-aligned reporting inside your own perimeter. For community banks, fintechs, and PE shops, it replaces brittle Excel pipelines and outsourced data shops with infrastructure that survives an audit.',

  definitionParagraph:
    "Autom8ion Lab builds custom platforms with SOC 2 / PCI-DSS controls, AI for underwriting, fraud detection, claims processing, and document review, and core banking and core insurance integrations (Fiserv, Jack Henry, FIS, Guidewire, Duck Creek) for community banks, credit unions, fintech, and insurance carriers. Compliance reporting automation (BSA, OFAC, CTR, SAR) and customer-facing applications passing FFIEC scrutiny. AI tools designed deliberately to stay on the right side of SR 11-7 model risk requirements where applicable. The work is precise, control-focused, and examiner-aware — engineering that treats the regulator as the third reader of every artifact we produce.",

  buyerProfile:
    'community and regional banks, credit unions, fintech companies, insurance carriers and MGAs, wealth management firms, payment processors, accounting firms with technology divisions.',

  problemFraming: {
    heading: 'Vendors who understand examiners can\'t ship modern software. Vendors who ship modern software can\'t pass an exam.',
    paragraphs: [
      "Financial services technology buyers operate under a stack of overlapping regulators — SEC, FINRA, OCC, NYDFS, FFIEC, state insurance departments — each with its own examination criteria. The legacy financial software vendors understand the examiner audience and produce documentation that survives an FFIEC IT examination, but they ship slowly and treat AI as compliance theater. The commercial AI vendors ship fast and sell underwriting and fraud capabilities, but they can't articulate how their model risk documentation lines up with SR 11-7, can't explain their data residency story for cross-border regulated firms, and won't sign the carve-outs your CISO needs in the master agreement.",
      "We're not regulators or auditors. We're engineers who design for SOC 2 Type II, PCI-DSS, NYDFS 23 NYCRR Part 500, GLBA Safeguards Rule, FFIEC IT Examination Handbook, and SR 11-7 from the first whiteboard sketch. We produce the documentation that supports your annual CISO certification and survives an FFIEC IT exam — control narratives, evidence collection, and audit trails that demonstrate the controls actually run in production.",
      "Most engagements blend two patterns: a custom platform with SOC 2 controls (typically replacing a legacy system or building net-new capability) and AI tooling scoped narrowly to underwriting, fraud, claims, document review, or compliance reporting where the volume justifies the build but the regulator-readability of the model matters more than peak accuracy.",
    ],
  },

  whatWeBuildDetailed: [
    {
      name: 'Custom platforms with SOC 2 / PCI-DSS controls',
      body:
        'Web applications, internal tools, and customer-facing platforms built with SOC 2 Type II Trust Service Criteria and PCI-DSS controls implemented in code, infrastructure, and platform configuration. CDE segmentation for cardholder data, encryption strategy mapped to data classifications, RBAC tied to your IdP, and audit logging structured to satisfy the controls your auditor will sample.',
    },
    {
      name: 'AI for underwriting, fraud detection, claims processing, document review',
      body:
        "AI capabilities scoped narrowly to processes where the regulator-readability of the model matters. Underwriting decision support that stays on the safe side of SR 11-7 model risk requirements where possible. Fraud detection classifiers with full lineage and evaluation evidence. Claims processing triage with human review on every adverse decision. Document review (loan files, KYC documents, claims documentation) with classification confidence scores and audit trail.",
    },
    {
      name: 'Core banking and core insurance system integrations',
      body:
        'Integration approach varies by core. Banking: Fiserv DNA, Premier, Cleartouch; Jack Henry SilverLake, Jack Henry Core Director; FIS IBS, Horizon, Profile. Insurance: Guidewire (PolicyCenter, BillingCenter, ClaimCenter), Duck Creek (Policy, Billing, Claims). Each has its own API patterns, data models, and integration pacing — we scope after a discovery call with your core operations team.',
    },
    {
      name: 'Compliance reporting automation (BSA/AML, OFAC, CTR/SAR)',
      body:
        "Automated generation and routing of BSA/AML compliance reports — Currency Transaction Reports (CTR) over $10K, Suspicious Activity Reports (SAR) on flagged behavior, OFAC sanctions screening on every customer touch, and the recordkeeping that supports an FFIEC BSA exam. We integrate with your core banking system for transaction data, with FinCEN's BSA E-Filing for submission, and with your existing case management for SAR investigation workflow.",
    },
    {
      name: 'Customer-facing applications passing FFIEC scrutiny',
      body:
        "Online banking portals, mobile banking apps, customer onboarding flows, and digital servicing tools built for the FFIEC IT Examination Handbook expectations. Multi-factor authentication, encryption of nonpublic information at rest and in transit, audit trails for customer actions, third-party service provider management documented, and the technical controls Part 500 requires for NY-licensed entities.",
    },
    {
      name: 'AI tools designed not to trigger SR 11-7 model risk requirements',
      body:
        'The dividing line in SR 11-7 is whether AI output materially influences a risk decision (model) versus supports a human decision (not model). We design AI tools to stay on the right side of that line where possible — recommendation engines that surface options for human review rather than autonomous classifiers that drive risk decisions. When the use case requires a model that does fall under SR 11-7, we produce the model documentation: development rationale, data lineage, validation approach, ongoing monitoring plan.',
    },
    {
      name: 'Loan origination and servicing automation',
      body:
        'Common LOS integrations: nCino, Encompass, Calyx Point, and proprietary core LOS modules. We build both the data integration layers and the AI-enhanced underwriting tools that operate within them — automated income verification, document classification, condition tracking, and post-close servicing workflow. Adverse action notice automation under ECOA / Regulation B with full audit trail.',
    },
  ],

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
    { name: 'SOC 2 Type II', desc: 'Service organization controls — Security plus relevant TSCs' },
    { name: 'PCI-DSS', desc: 'Cardholder data environment scoping, segmentation, controls' },
    { name: 'NYDFS 23 NYCRR Part 500', desc: 'NY-licensed financial entities cybersecurity requirements' },
    { name: 'GLBA Safeguards Rule', desc: 'Customer information security program' },
    { name: 'FFIEC IT Examination Handbook', desc: 'Bank IT examination criteria' },
    { name: 'SR 11-7', desc: 'Federal Reserve model risk management for AI/ML' },
    { name: 'BSA/AML, OFAC', desc: 'Sanctions screening, suspicious activity reporting' },
    { name: 'State insurance department requirements', desc: 'Carrier-by-carrier; MAR, NAIC Model #668' },
    { name: 'CCPA / GLBA / state privacy laws', desc: 'Consumer financial data privacy' },
  ],

  namedIntegrations: [
    {
      category: 'Core banking systems',
      items: ['Fiserv (DNA, Premier, Cleartouch)', 'Jack Henry (SilverLake, Core Director)', 'FIS (IBS, Horizon, Profile)', 'CSI NuPoint', 'Finastra Phoenix'],
    },
    {
      category: 'Core insurance systems',
      items: ['Guidewire (PolicyCenter, BillingCenter, ClaimCenter)', 'Duck Creek (Policy, Billing, Claims)', 'Insurity Policy Decisions', 'Sapiens IDIT', 'Majesco P&C Suite'],
    },
    {
      category: 'Loan origination & servicing',
      items: ['nCino', 'Encompass (ICE Mortgage Technology)', 'Calyx Point', 'Black Knight Empower', 'Mortgage Cadence'],
    },
    {
      category: 'Identity, fraud, KYC, compliance',
      items: ['Plaid', 'Socure', 'Alloy', 'Persona', 'Verafin', 'NICE Actimize', 'Quantexa'],
    },
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
    'AI document processing for a financial services firm, replacing manual review while satisfying internal compliance review and an external SOC 2 audit cycle. Model documentation structured to demonstrate the AI tool supported human decisions rather than driving model risk under SR 11-7.',
    'Custom underwriting platform built for a regional lender, integrated with core banking and credit bureau APIs. Adverse action notices automated per ECOA / Regulation B with full audit trail.',
    'SOC 2 prep and audit support for a fintech pursuing enterprise contracts — control implementation, evidence collection automation, and the documentation package the CPA firm requested.',
  ],

  scenarioCta: 'Building inside a regulated financial environment? Schedule a discovery call',
  heroAccent: 'from-slate-950 via-blue-950/30 to-slate-950',
  iconAccent: 'text-blue-400',

  relatedSolutions: [
    {
      slug: 'custom-llm-systems',
      title: 'Custom LLM Systems',
      anchor: 'custom LLM systems for finance',
      blurb:
        'Private LLM systems for portfolio analytics, PE data normalization, KYC review, and SOX-aligned reporting — hosted inside your perimeter with the SOC 2 controls examiners expect.',
    },
    {
      slug: 'workflow-automation',
      title: 'Enterprise Workflow Automation',
      anchor: 'workflow automation for finance ops',
      blurb:
        'Custom n8n + Python automation for fund-of-funds rollup, FedLine + ACH file workflow, FCRA-aligned underwriting flows, and the reconciliation loops Excel pipelines keep breaking on.',
    },
    {
      slug: 'cybersecurity',
      title: 'Cybersecurity Compliance Engineering',
      anchor: 'SOC 2 + bank-level security engineering',
      blurb:
        'SOC 2 Type II readiness, NIST 800-171 implementation, and the audit-trail engineering that survives a federal regulator review. Built into the system architecture, not retrofitted at audit time.',
    },
  ],

  comparison: {
    heading: 'Custom AI for finance vs core-banking vendor add-ons vs Excel pipelines',
    headers: [
      'Dimension',
      'Autom8ion Lab (custom)',
      'Fiserv / Jack Henry / FIS add-ons',
      'In-house Excel + analyst team',
    ],
    rows: [
      {
        label: 'Data residency',
        values: [
          'Inside your perimeter — your VPC, your encryption, your KMS. SOC 2 controls applied to every system that touches the data.',
          'Vendor-managed cloud. Their controls, their key management, their audit log format.',
          "Excel files passed by email. SOC 2 auditor's worst nightmare.",
        ],
      },
      {
        label: 'Integration depth',
        values: [
          'Direct API + secure middleware into Fiserv DNA, Jack Henry SilverLake, FIS Profile, NetSuite, QuickBooks, banking-cores via FedLine + ACH file specs',
          "Limited to what the core vendor's marketplace partner exposes — usually 1–2 generations behind",
          'Manual export → manual import. Reconciliation breaks every quarter.',
        ],
      },
      {
        label: 'Auditability',
        values: [
          'Per-row, per-decision, per-user audit trail. SOX-aligned. Survives a federal regulator review.',
          "Vendor-controlled log. You can export it; you can't extend it.",
          'Excel change history if you remembered to enable it.',
        ],
      },
      {
        label: 'Workflow specificity',
        values: [
          'Built for your portfolio shape, your KYC profile, your reporting cadence — PE data normalization, fund-of-funds rollup, FCRA-aligned underwriting flows',
          'Templated to the average mid-market bank — your edge cases break it',
          'Whatever the analyst remembers to do this week',
        ],
      },
      {
        label: 'Time to deploy',
        values: [
          '30–90 days for the first workflow; 6 months for an integrated portfolio-analytics + reporting + reconciliation suite',
          'Hours to install. Quarters to make it match your real reconciliation logic.',
          "Indefinite. There's always a new edge case.",
        ],
      },
      {
        label: 'Best fit',
        values: [
          'Community and regional banks, credit unions, fintechs, PE shops, insurance carriers with SOC 2 in scope and analyst headcount that should be doing higher-value work',
          'Standardized retail-banking workflows that the core vendor has already templated',
          "Firms early enough that the analyst team's edge cases haven't compounded into a real liability",
        ],
      },
    ],
  },
};

export default function Page() {
  return <IndustryPageLayout data={data} />;
}
