import type { Metadata } from 'next';
import IndustryPageLayout, { type IndustryPageData } from '@/app/_components/IndustryPageLayout';

export const metadata: Metadata = {
  title: 'AI, Automation & Software Engineering for the Defense Industrial Base',
  description:
    'CMMC 2.0 readiness, NIST 800-171 implementation, custom development for DoD primes and subs. Veteran-owned. November 2026 Phase 2 deadline approaching.',
  keywords:
    'CMMC compliance services, CMMC 2.0 remediation, NIST 800-171 implementation, DoD subcontractor compliance, CMMC Level 2 readiness, SDVOSB CMMC services, GCC High migration services',
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
  definitionParagraph:
    'Autom8ion Lab builds custom software, AI capabilities, and CMMC-aligned compliance documentation for DoD prime contractors and subcontractors handling Federal Contract Information (FCI) or Controlled Unclassified Information (CUI). Custom software development that maintains CMMC posture, CMMC 2.0 (Levels 1–2, occasionally 3) readiness and remediation, NIST 800-171 controls implementation, and AI capabilities deployable in CUI environments.',
  buyerProfile:
    'DoD prime contractors and subcontractors of all sizes — from small specialty manufacturers to mid-tier system integrators. Especially small to mid-market subcontractors facing the November 2026 CMMC Phase 2 deadline.',
  whatWeBuild: [
    'CMMC 2.0 readiness assessment and gap analysis (Levels 1–2, occasionally 3)',
    'NIST 800-171 controls implementation across access control, audit logging, configuration management, identification, incident response, system integrity',
    'SSP (System Security Plan) and POA&M development',
    'GCC High environment configuration and migration from commercial M365',
    'Custom software development that maintains CMMC posture, not breaks it',
    'AI capabilities deployable in CUI environments — RAG systems, document processing, classification tools',
    'Document automation for DoD reporting and submissions',
  ],
  complianceConsiderations: [
    { name: 'CMMC 2.0 (Levels 1–3)', desc: 'Self-assessment (L1) or third-party assessment (L2/L3)' },
    { name: 'NIST 800-171 Rev 2', desc: '110 security requirements across 14 control families' },
    { name: 'DFARS 252.204-7012 / 7021', desc: 'CUI safeguarding and CMMC clauses in DoD contracts' },
    { name: 'ITAR / EAR', desc: 'Export-controlled technical data handling (where applicable)' },
    { name: 'DCMA DIBCAC standards', desc: 'Defense Contract Management Agency cybersecurity criteria' },
  ],
  disclosure: {
    heading: 'Important: We are not a CMMC RPO or C3PAO',
    body:
      'We are not currently a CMMC Registered Practitioner Organization (RPO) or a C3PAO. We engineer systems to NIST 800-171 controls and produce the documentation your assessor will need. We work alongside RPO/C3PAO partners when independent assessment is required. We can refer you to assessment partners.',
  },
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
        "Pending. Once certified, we will be available for SDVOSB-targeted DoD subcontracting opportunities. Many DoD primes have SDVOSB subcontracting goals; we are positioned to support those goals.",
    },
  ],
  scenarios: [
    'NIST 800-171 controls implementation for a DoD subcontractor pursuing CMMC Level 2 readiness.',
    'Custom software platform built and maintained inside a GCC High environment for a defense services firm.',
    'AI document processing tool deployed in a CUI environment for a small DoD subcontractor.',
  ],
  scenarioCta: "Facing the November 2026 deadline? Let's scope a CMMC remediation timeline",
  heroAccent: 'from-slate-950 via-red-950/30 to-slate-950',
  iconAccent: 'text-red-400',
};

export default function Page() {
  return <IndustryPageLayout data={data} />;
}
