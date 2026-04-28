import type { Metadata } from 'next';
import IndustryPageLayout, { type IndustryPageData } from '@/app/_components/IndustryPageLayout';

export const metadata: Metadata = {
  title: 'AI, Automation & Software Engineering for the Defense Industrial Base',
  description:
    'CMMC 2.0 readiness, NIST 800-171 implementation, custom development for DoD primes and subs. Veteran-owned. November 2026 Phase 2 deadline approaching.',
  keywords:
    'CMMC compliance services, CMMC 2.0 remediation, NIST 800-171 implementation, DoD subcontractor compliance, CMMC Level 2 readiness, SDVOSB CMMC services, GCC High migration services, DFARS 252.204-7012 compliance',
  alternates: { canonical: 'https://autom8ionlab.com/industries/defense' },
  openGraph: {
    title: 'AI, Automation & Software Engineering for the Defense Industrial Base',
    description:
      'CMMC 2.0 readiness, NIST 800-171 implementation, custom development for DoD primes and subcontractors. November 2026 Phase 2 deadline approaching.',
    url: 'https://autom8ionlab.com/industries/defense',
    images: [{ url: 'https://autom8ionlab.com/logo/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'AI, Automation & Software Engineering for the Defense Industrial Base',
    description:
      'CMMC 2.0 readiness, NIST 800-171 implementation, custom development for DoD primes and subcontractors.',
  },
};

const data: IndustryPageData = {
  slug: 'defense',
  breadcrumbName: 'Defense Industrial Base',
  h1: 'AI, Automation & Software Engineering for the Defense Industrial Base',
  heroSubhead:
    'CMMC 2.0 readiness, NIST 800-171 implementation, and custom software development for DoD primes and subcontractors. Veteran-owned. SDVOSB pending. Built for the contractors facing the November 2026 Phase 2 deadline.',

  // DEFINITION BLOCK (~200 words — opens the page so AI tools and crawlers extract this first)
  definitionParagraph:
    'Autom8ion Lab builds custom software, AI capabilities, and CMMC-aligned compliance documentation for DoD prime contractors and subcontractors handling Federal Contract Information (FCI) or Controlled Unclassified Information (CUI). The work spans CMMC 2.0 (Levels 1–2, occasionally 3) readiness and remediation, NIST 800-171 controls implementation, custom software development that maintains CMMC posture rather than breaks it, and AI capabilities deployable in CUI environments — RAG systems, document processing, classification tools. We are software builders with an in-house cybersecurity compliance arm; we engineer the controls and produce the documentation your assessor will need.',

  buyerProfile:
    'DoD prime contractors and subcontractors of all sizes — from small specialty manufacturers to mid-tier system integrators. Especially small to mid-market subcontractors facing the November 2026 CMMC Phase 2 deadline.',

  // PROBLEM FRAMING (~200 words)
  problemFraming: {
    heading: 'The November 2026 deadline is closer than it looks.',
    paragraphs: [
      'CMMC 2.0 Phase 2 lands November 2026. After that date, prime contractors are required to flow CMMC requirements to their subcontractors handling CUI. If your CMMC posture isn\'t verifiable when a prime asks, you lose eligibility on contracts that previously stayed open. Most DoD subcontractors discover this during a flow-down conversation — usually 6–9 months after they should have started.',
      'Two traps make remediation harder than it needs to be. Consultant-only firms produce policies and procedure templates but don\'t implement the controls — you end up with a binder full of paper that doesn\'t match what your environment actually does. Generic IT shops implement controls but don\'t understand DFARS 252.204-7012 or how a C3PAO assesses, so the controls they install don\'t produce the evidence your assessor will look for.',
      'The gap is engineering-led firms with cybersecurity compliance expertise — teams that can configure GCC High, write custom software that maintains CMMC posture, generate the SSP and POA&M as the build progresses, and stay through the assessment. That\'s the work.',
    ],
  },

  // WHAT WE BUILD — expanded into prose subsections (LOCKED v3 §2.1 step 3)
  whatWeBuildDetailed: [
    {
      name: 'CMMC 2.0 readiness assessment and gap analysis',
      body:
        'A practical, evidence-based assessment of your current state against the 110 NIST 800-171 Rev 2 requirements. Output is a gap report mapped to specific controls (AC-2, AU-2, CM-3, IA-2, IR-4, SI-3, etc.), a prioritized remediation roadmap, and a scoping document that defines your CUI boundary clearly. Not a compliance vendor\'s template gap report — a working document your team can hand to engineering.',
    },
    {
      name: 'NIST 800-171 controls implementation',
      body:
        'Implementation across all 14 control families: access control, audit logging, configuration management, identification and authentication, incident response, system integrity, and the rest. We write the technical controls in code, configure the platform settings in your tenant, and document each one with a control narrative an assessor can verify against your environment. Where controls require recurring evidence (log retention, vulnerability scans, access reviews), we automate the evidence collection.',
    },
    {
      name: 'SSP (System Security Plan) and POA&M development',
      body:
        'A System Security Plan that reflects your real environment, not a templated document. Each control has an implementation statement that names specific systems, configurations, and responsible roles. The POA&M tracks every gap with realistic remediation milestones. Both documents are the artifacts your C3PAO will read first; we produce them as the build progresses, not at the end.',
    },
    {
      name: 'GCC High environment configuration and migration',
      body:
        'Microsoft 365 GCC High migration is the most common path for DoD subs handling CUI. We handle tenant setup, conditional access policies, DLP rules, audit log configuration with sufficient retention, identity hardening (MFA, PAM patterns), and the boundary configuration that aligns with NIST 800-171 access control and audit families. Migration from commercial M365 includes data classification and the cutover plan.',
    },
    {
      name: 'Custom software development that maintains CMMC posture',
      body:
        "Custom internal tools, case management, document workflows, and reporting platforms — built so they don't break the CMMC posture you just paid to establish. That means deployed inside your CUI boundary (not in commercial cloud), integrated with your IdP for SSO and access logging, with data classification baked in and audit trails that line up with the AU control family. Software that auditors won't find a gap in.",
    },
    {
      name: 'AI capabilities deployable in CUI environments',
      body:
        'RAG systems, document classification, AI-assisted SSP authoring, and automated DoD reporting — all deployable inside CUI environments. Local LLMs (Llama, Mistral, custom fine-tunes), private-cloud-hosted commercial models (Anthropic via AWS Bedrock GovCloud, OpenAI via Azure OpenAI Service in GCC High), or air-gapped deployments. No external data transfer; all activity logged to NIST 800-171 audit families.',
    },
    {
      name: 'Document automation for DoD reporting and submissions',
      body:
        'Automated generation of recurring DoD-facing documentation: contract deliverables, SPRS submissions, monthly status reports, security incident reports. We build the workflow that pulls structured data from authoritative sources, formats it to the required template, and routes for human approval before submission.',
    },
  ],

  // Keep the simple list as a secondary fallback (not rendered when whatWeBuildDetailed is set)
  whatWeBuild: [
    'CMMC 2.0 readiness (Levels 1–2, occasionally 3)',
    'NIST 800-171 controls implementation',
    'Custom software development that maintains compliance posture',
    'SSP (System Security Plan) and POA&M development',
    'GCC High environment configuration and migration',
    'AI capabilities deployable in CUI environments',
    'Document automation for DoD reporting and submissions',
  ],

  complianceConsiderations: [
    {
      name: 'CMMC 2.0 (Levels 1–3)',
      desc: 'Self-assessment (L1) or third-party assessment (L2/L3) of NIST 800-171 controls',
    },
    {
      name: 'NIST 800-171 Rev 2',
      desc: '110 security requirements across 14 control families',
    },
    {
      name: 'DFARS 252.204-7012 / 7021',
      desc: 'CUI safeguarding and CMMC clauses in DoD contracts',
    },
    {
      name: 'ITAR / EAR',
      desc: 'Export-controlled technical data handling (where applicable)',
    },
    {
      name: 'DCMA DIBCAC standards',
      desc: 'Defense Contract Management Agency cybersecurity criteria',
    },
    {
      name: 'SPRS scoring',
      desc: 'Supplier Performance Risk System self-attestation under DFARS 252.204-7019',
    },
  ],

  namedIntegrations: [
    {
      category: 'Microsoft GCC High platform',
      items: ['Entra ID (Azure AD GCC High)', 'Microsoft Purview', 'Defender for Cloud Apps', 'Microsoft Sentinel (GCC High)'],
    },
    {
      category: 'CUI-bounded cloud',
      items: ['AWS GovCloud (US)', 'Azure Government', 'Anthropic Claude via AWS Bedrock GovCloud', 'OpenAI via Azure OpenAI in GCC High'],
    },
    {
      category: 'Compliance & evidence tooling',
      items: ['Drata', 'Vanta (commercial side)', 'Rapid7 InsightVM', 'Tenable Nessus / Tenable.sc', 'CrowdStrike Falcon'],
    },
    {
      category: 'DoD-facing systems',
      items: ['SPRS (Supplier Performance Risk System)', 'eMASS (Enterprise Mission Assurance Support Service)', 'WAWF (Wide Area Workflow)', 'PIEE (Procurement Integrated Enterprise Environment)'],
    },
  ],

  faqs: [
    {
      question: 'Are you a CMMC RPO?',
      answer:
        'No. We are software and AI builders, not assessors. We engineer systems that satisfy NIST 800-171 controls and produce the documentation auditors expect, working alongside your assessor or a partner C3PAO. We can refer you to assessment partners.',
    },
    {
      question: 'Do you partner with C3PAOs for assessment?',
      answer:
        'Yes. We work with established C3PAO firms when our clients need formal certification assessment. The arrangement is collaborative — we engineer the controls; the C3PAO assesses them.',
    },
    {
      question: "What's your typical CMMC remediation timeline?",
      answer:
        'Most CMMC Level 2 remediation projects run 4–9 months depending on environment complexity, the maturity of existing controls, and the scope of CUI handling. We provide a detailed timeline after a scoping call.',
    },
    {
      question: 'Can you implement NIST 800-171 controls in a Microsoft 365 GCC High environment?',
      answer:
        'Yes. GCC High migration and configuration is a common engagement type. We handle tenant setup, conditional access policies, DLP rules, audit log configuration, and identity hardening to align with NIST 800-171 access control and audit families.',
    },
    {
      question: 'Do you handle ITAR data?',
      answer:
        'We can build systems that operate within ITAR-compliant environments (US-person access, controlled boundaries, encryption at rest and in transit). For ITAR registration support and export licensing decisions, we partner with specialized counsel.',
    },
    {
      question: "What's the cost range for CMMC Level 2 readiness?",
      answer:
        'Cost varies significantly with environment complexity and existing maturity. We scope each engagement after a discovery call and provide a fixed-price proposal.',
    },
    {
      question: 'Are you SDVOSB-certified?',
      answer:
        "Pending. Once certified, we'll be available for SDVOSB-targeted DoD subcontracting opportunities. Many DoD primes have SDVOSB subcontracting goals; we're positioned to support those goals.",
    },
  ],

  disclosure: {
    heading: 'Important: We are not a CMMC RPO or C3PAO',
    body:
      'We are not currently a CMMC Registered Practitioner Organization (RPO) or a C3PAO. We engineer systems to NIST 800-171 controls and produce the documentation your assessor will need. We work alongside RPO/C3PAO partners when independent assessment is required, and we can refer you to assessment partners.',
  },

  scenarios: [
    'NIST 800-171 controls implementation for a DoD subcontractor pursuing CMMC Level 2 readiness — engagement covered access control, audit logging, configuration management, identification, incident response, and system integrity families. Deliverables included SSP draft, POA&M, and the evidence package for the C3PAO assessment that followed.',
    'Custom software platform built and maintained inside a GCC High environment for a defense services firm — case management workflow integrated with Entra ID for SSO, audit logging that mapped directly to NIST 800-171 AU controls, data classification baked into the data model.',
    'AI document processing tool deployed in a CUI environment for a small DoD subcontractor — RAG system using a local LLM (Llama 3.1) running entirely inside the CUI boundary. No external data transfer; all activity logged to the customer\'s SIEM.',
  ],

  scenarioCta: "Facing the November 2026 deadline? Let's scope a CMMC remediation timeline",
  heroAccent: 'from-slate-950 via-red-950/30 to-slate-950',
  iconAccent: 'text-red-400',
};

export default function Page() {
  return <IndustryPageLayout data={data} />;
}
