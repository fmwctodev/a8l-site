import type { Metadata } from 'next';
import IndustryPageLayout, { type IndustryPageData } from '@/app/_components/IndustryPageLayout';

export const metadata: Metadata = {
  title: 'AI & Compliance Engineering for US Government',
  description:
    'Custom AI, automation, and software for federal civilian, state, and municipal IT. FedRAMP, FISMA, NIST 800-53 aligned. SDVOSB pending.',
  keywords:
    'FedRAMP application development, government custom software development, NIST 800-53 implementation, GSA Schedule technology vendor, Section 508 compliant custom development, SDVOSB IT services, veteran-owned software development federal, StateRAMP implementation',
  alternates: { canonical: 'https://autom8ionlab.com/industries/government' },
  openGraph: {
    title: 'AI & Compliance Engineering for US Government | Autom8ion Lab',
    description:
      'Custom AI, automation, and software for federal civilian, state, and municipal IT. FedRAMP, FISMA, NIST 800-53 aligned. SDVOSB pending.',
    url: 'https://autom8ionlab.com/industries/government',
    images: [{
      url: 'https://autom8ionlab.com/api/og?title=AI+%26+Compliance+Engineering+for+US+Government&section=Industries',
      width: 1200,
      height: 630,
      alt: 'AI, Automation & Custom Software for US Federal, State & Local Government',
    }],
  },
  twitter: {
    title: 'AI & Compliance Engineering for US Government | Autom8ion Lab',
    description:
      'Custom AI, automation, and software for federal civilian, state, and municipal IT. FedRAMP, FISMA, NIST 800-53 aligned. SDVOSB pending.',
    images: ['https://autom8ionlab.com/api/og?title=AI+%26+Compliance+Engineering+for+US+Government&section=Industries'],
  },
};

const data: IndustryPageData = {
  slug: 'government',
  breadcrumbName: 'US Government',
  h1: 'AI, Automation & Custom Software for US Federal, State & Local Government',
  heroSubhead:
    'Custom software, AI, and automation for civilian agencies, state government, and municipal IT teams. FedRAMP, FISMA, NIST 800-53, StateRAMP-aligned. Registered US federal contractor with SDVOSB pending status.',

  definition:
    'AI and compliance engineering for US government is the deployment of custom AI, automation, and software inside FedRAMP, FISMA, and NIST 800-53 boundaries. For federal civilian agencies, state IT, and municipal IT, it accelerates mission delivery without forcing teams into vendor-lock SaaS that doesn\'t fit the procurement model.',

  definitionParagraph:
    'Autom8ion Lab builds custom software, AI, and automation for US federal civilian agencies, state government IT, and municipal IT teams operating under FedRAMP, FISMA, NIST 800-53, NIST 800-171, StateRAMP, NARA records management, and Section 508 accessibility. The work covers case management modernization, citizen-facing portals, AI for backlog processing and document review, FedRAMP-aligned cloud services, and the legacy-system bridges that keep mainframe and database-driven workflows alive while new services are built around them. We are software builders with an in-house cybersecurity compliance arm and active SAM.gov registration — engineering and the federal documentation burden under one roof.',

  buyerProfile:
    'US federal civilian agencies, state government IT, county and municipal IT, special districts, public utilities, large school districts, state universities, state DOTs.',

  problemFraming: {
    heading: 'The procurement gap commercial AI vendors and traditional integrators can\'t cover.',
    paragraphs: [
      'Most public sector technology procurements force a choice. Commercial AI vendors move fast and ship modern interfaces, but they don\'t understand FedRAMP, can\'t produce the SSP an authorizing official will sign, and don\'t deliver the Section 508 VPAT a public-facing application requires. Traditional federal integrators understand the documentation burden but ship slowly, treat AI as procurement theater rather than capability, and price small-to-mid scope work like a flagship enterprise build.',
      'The gap is engineering-led firms with cybersecurity compliance expertise, federal contractor credentials in good standing, and the discipline to scope to the actual procurement vehicle in front of you — task order, IDIQ subtask, BPA call, GSA buy, or commercial fixed-price. Veteran-owned, SDVOSB pending — once approved, eligible for SDVOSB set-aside competitions and sole-source preferences under the federal procurement preferences. Active SAM.gov registration with full UEI, CAGE, and DUNS.',
      'Most engagements blend two patterns: a custom software build that sits inside a FedRAMP-authorized boundary, and AI-assisted automation that processes backlogs (licensing applications, FOIA requests, benefits adjudication, records review) where the volume justifies the build but the agency can\'t paste public records into a commercial AI tool.',
    ],
  },

  whatWeBuildDetailed: [
    {
      name: 'Custom software for case management, citizen services, internal operations',
      body:
        "Web applications, internal portals, intake systems, and reporting platforms built for the agency's workflow rather than templated against a generic case management product. Integrated with your IdP for SSO, accessible to WCAG 2.1 AA, deployed inside FedRAMP-authorized environments where required, with audit logging that maps cleanly to NIST 800-53 AU controls. Replaces or augments legacy systems without forcing a big-bang migration.",
    },
    {
      name: 'AI for backlog processing, document review, intake automation',
      body:
        'AI capabilities scoped narrowly to processes where they can be defended in audit — document classification, data extraction from unstructured submissions, automated triage of large incoming queues, and AI-assisted drafting where a human reviewer signs every output. Deployed inside FedRAMP-authorized cloud (AWS GovCloud, Azure Government), inside StateRAMP environments for state government, or on-premises where the use case requires. Local LLMs (Llama, Mistral) for sensitive workloads; private-cloud-hosted commercial models (Anthropic via Bedrock GovCloud, OpenAI via Azure OpenAI) where capability matters more than locality.',
    },
    {
      name: 'FedRAMP-aligned cloud services',
      body:
        "We are not ourselves a FedRAMP-authorized SaaS provider — we build custom systems that operate inside our clients' FedRAMP-authorized environments. The work covers landing zone design, NIST 800-53 control selection, System Security Plan drafts, 3PAO-prep packages, and the continuous monitoring runbooks the authorization requires. FedRAMP-aligned builds run 6+ months because the documentation burden is real.",
    },
    {
      name: 'Section 508 / WCAG 2.1 AA accessible applications',
      body:
        'Section 508 compliance engineered into the build, not retrofitted. Color contrast, keyboard navigation, screen-reader compatibility, focus management, and the ARIA semantics needed for assistive technology. VPAT/ACR documentation produced as part of the deliverable package. We follow WCAG 2.1 AA as the technical baseline and conduct accessibility audits during development with both automated tooling (axe, Pa11y) and assistive-tech testing.',
    },
    {
      name: 'Records management aligned with NARA / state retention schedules',
      body:
        'Records management that respects the relevant retention schedule — NARA general records schedules and agency-specific schedules for federal, or state archives schedules for state and local government. We build the metadata model, the disposition workflow, and the audit trail that proves records were handled per schedule. Integration with electronic records management systems (RMS) where one already exists; greenfield builds where one doesn\'t.',
    },
    {
      name: 'Modernization of legacy systems',
      body:
        'Mainframe interface bridges (DB2, VSAM, IMS), legacy database integration, file-based exchange (NDM/Connect:Direct, SFTP, batch FTP), and the API gateway pattern that lets a new front-end talk to a system you can\'t replace yet. We don\'t advocate rip-and-replace projects that public-sector procurement timelines won\'t support — we build the controlled interfaces that let modernization happen incrementally.',
    },
    {
      name: 'Citizen-facing portals with accessibility built in',
      body:
        'Public-facing portals (benefits applications, licensing, permitting, FOIA, citizen service requests) built for the realities of public-sector traffic — accessibility compliance, multilingual support where required, identity proofing integrated with Login.gov or state-equivalent identity providers, and the audit logging that satisfies records management and security review.',
    },
  ],

  whatWeBuild: [
    'Custom software for case management, citizen services, internal operations',
    'AI for backlog processing, document review, intake automation',
    'FedRAMP-aligned cloud services and landing zones',
    'Section 508 / WCAG 2.1 AA compliant applications with VPAT/ACR documentation',
    'Records management aligned with NARA / state retention schedules',
    'Modernization of legacy systems (mainframe interfaces, legacy database integration)',
    'Citizen-facing portals with accessibility built in',
  ],

  complianceConsiderations: [
    { name: 'FedRAMP Moderate / High', desc: 'Cloud services for federal use — boundary, controls, 3PAO assessment' },
    { name: 'FISMA / NIST 800-53', desc: 'Federal information system security management' },
    { name: 'NIST 800-171', desc: 'Contractor handling of CUI in non-federal systems' },
    { name: 'StateRAMP', desc: 'State government cloud authorization (mirrors FedRAMP for state)' },
    { name: 'Section 508 / WCAG 2.1 AA', desc: 'Federal-facing application accessibility, VPAT/ACR' },
    { name: 'NARA records management', desc: 'Federal records retention and disposition schedules' },
    { name: 'CJIS Security Policy', desc: 'Where law enforcement records are in scope' },
    { name: 'IRS Publication 1075', desc: 'Where federal tax information (FTI) is in scope' },
  ],

  namedIntegrations: [
    {
      category: 'FedRAMP-authorized cloud',
      items: ['AWS GovCloud (US)', 'Azure Government', 'Google Cloud Assured Workloads', 'Oracle Government Cloud'],
    },
    {
      category: 'Identity & access',
      items: ['Login.gov', 'ID.me', 'Okta (FedRAMP)', 'Microsoft Entra ID (Government)', 'CAC/PIV smart-card auth'],
    },
    {
      category: 'Records & document systems',
      items: ['Microsoft Purview', 'OpenText Content Suite', 'Laserfiche', 'M-Files', 'Box Government'],
    },
    {
      category: 'Procurement & federal-facing systems',
      items: ['SAM.gov', 'GSA Advantage', 'eMASS', 'WAWF / iRAPT', 'PIEE (Procurement Integrated Enterprise Environment)'],
    },
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
        "Pending. Once approved, we will be eligible for SDVOSB set-aside competitions and SDVOSB sole-source awards under federal procurement preferences. We can currently compete openly and serve as an SDVOSB-track subcontractor under primes' subcontracting plans.",
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
        'Yes. Send the SOW or RFI documentation to info@autom8ionlab.com or use the contact form. We respond within one business day with a fit assessment and proposed approach.',
    },
    {
      question: "What's your approach to Section 508 accessibility?",
      answer:
        'Section 508 compliance is engineered into the build, not retrofitted. We follow WCAG 2.1 AA as the technical baseline, conduct accessibility audits during development, and produce VPAT/ACR documentation as part of the deliverable package.',
    },
  ],

  scenarios: [
    'AI document review tool for a state agency processing licensing backlogs — RAG system grounded on prior approved licenses, drafting reviewer-ready recommendations with full audit trail. Deployed inside StateRAMP-authorized cloud.',
    'Custom case management modernization for a municipal government department — replaced a legacy COBOL/CICS system with a modern web front-end while preserving the existing mainframe as system of record via an API gateway pattern.',
    'FedRAMP-aligned application built for a federal civilian agency contractor — included full SSP draft, control narratives across NIST 800-53 control families, and the 3PAO prep package.',
  ],

  scenarioCta: 'Looking to add Autom8ion Lab to your vendor list or sub team? Schedule a discovery call',
  heroAccent: 'from-slate-950 via-cyan-950/30 to-slate-950',
  iconAccent: 'text-cyan-400',
};

export default function Page() {
  return <IndustryPageLayout data={data} />;
}
