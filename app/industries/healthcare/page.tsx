import type { Metadata } from 'next';
import IndustryPageLayout, { type IndustryPageData } from '@/app/_components/IndustryPageLayout';

export const metadata: Metadata = {
  title: 'AI, Automation & Software for Healthcare & Life Sciences',
  description:
    'HIPAA-compliant applications, AI for clinical and operational workflows, EHR integrations (Epic, Cerner, Athena), FDA 21 CFR Part 11 systems.',
  keywords:
    'HIPAA compliant software development, Epic integration custom development, AI clinical documentation, FDA 21 CFR Part 11 software development, healthcare prior authorization automation, HITRUST custom software',
  alternates: { canonical: 'https://autom8ionlab.com/industries/healthcare' },
  openGraph: {
    title: 'AI, Automation & Software for Healthcare & Life Sciences',
    description:
      'HIPAA-compliant software, AI for clinical workflows, EHR integrations, FDA 21 CFR Part 11 systems for health systems, payers, life sciences, and medical devices.',
    url: 'https://autom8ionlab.com/industries/healthcare',
    images: [{ url: 'https://autom8ionlab.com/logo/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'AI, Automation & Software for Healthcare & Life Sciences',
    description:
      'HIPAA-compliant software, AI for clinical workflows, EHR integrations, FDA 21 CFR Part 11 systems.',
  },
};

const data: IndustryPageData = {
  slug: 'healthcare',
  breadcrumbName: 'Healthcare & Life Sciences',
  h1: 'AI, Automation & Custom Software for Healthcare & Life Sciences',
  heroSubhead:
    'HIPAA-compliant applications, AI for clinical and operational workflows, EHR integrations, FDA 21 CFR Part 11 validated systems for health systems, payers, providers, pharma, and medical device companies.',
  definitionParagraph:
    'We build HIPAA-compliant custom software, AI for clinical documentation and operational workflows, EHR integrations (Epic, Cerner/Oracle Health, Athenahealth, eClinicalWorks, NextGen), and FDA 21 CFR Part 11 validated systems. Our work respects PHI handling, BAA requirements, and the clinical workflows that frontline staff depend on.',
  buyerProfile:
    'mid-market health systems, ambulatory networks, specialty practices, behavioral health groups, payers, life sciences companies, medical device firms.',
  whatWeBuild: [
    'HIPAA-compliant custom software and applications',
    'AI for clinical documentation, prior authorization, claims processing',
    'EHR integrations (Epic FHIR APIs/Bridges/Caboodle, Cerner Open Engine/FHIR, Athenahealth athenaNet, eClinicalWorks, NextGen)',
    'FDA 21 CFR Part 11 validated systems with e-signature workflows and audit trails',
    'Patient-facing applications that pass IT security review',
    'Operations automation that does not violate PHI handling',
    'Provider directory and credentialing automation',
  ],
  complianceConsiderations: [
    { name: 'HIPAA / HITECH', desc: 'Privacy Rule, Security Rule, Breach Notification' },
    { name: 'HITRUST CSF', desc: 'Common framework for HIPAA + control evidence' },
    { name: 'FDA 21 CFR Part 11', desc: 'Electronic records and e-signatures' },
    { name: 'GxP frameworks', desc: 'GLP, GCP, GMP for life sciences' },
    { name: 'State patient privacy laws', desc: 'CA CMIA, TX, NY, etc.' },
    { name: 'DEA EPCS', desc: 'Electronic prescribing of controlled substances' },
  ],
  faqs: [
    {
      question: 'Will you sign a Business Associate Agreement (BAA)?',
      answer:
        'Yes. A signed BAA is part of every healthcare engagement that involves PHI access. We use the OCR-recommended BAA structure or your standard agreement, whichever your compliance team prefers.',
    },
    {
      question: 'Do you build systems that integrate with Epic, Cerner, or Athena?',
      answer:
        'Yes. We have experience with Epic (FHIR APIs, Bridges, Caboodle), Cerner/Oracle Health (Open Engine, FHIR), and Athenahealth (athenaNet APIs). Integration approach depends on the specific use case and your IT team\'s preferred patterns.',
    },
    {
      question: "What's your experience with FDA 21 CFR Part 11 validated systems?",
      answer:
        'We build systems with the technical controls Part 11 requires: e-signature workflows, audit trails of all electronic record changes, role-based access, validated software development lifecycle. The validation documentation package is part of the deliverable.',
    },
    {
      question: "Can you build clinical decision support tools that don't trigger FDA SaMD requirements?",
      answer:
        "Yes. We design clinical decision support carefully to stay within the FDA's non-device CDS framework — recommendations the clinician can independently review, not autonomous diagnostic outputs. For tools that do qualify as SaMD, we partner with regulatory consultants on the 510(k) pathway.",
    },
    {
      question: 'How do you handle PHI in development and testing environments?',
      answer:
        'Synthetic data sets and de-identified production data with safe harbor or expert determination. PHI never enters non-production environments. We document the de-identification methodology as part of the SDLC artifact set.',
    },
    {
      question: 'Do you support HITRUST-aligned environments?',
      answer:
        'Yes. HITRUST CSF is a common framework for our healthcare clients pursuing HIPAA + HITRUST certification. We implement the technical controls and produce the evidence collection documentation HITRUST assessors expect.',
    },
  ],
  scenarios: [
    'HIPAA-aligned patient communication platform for a multi-specialty healthcare group, including SOC 2 prep documentation.',
    'Custom EHR integration layer for an ambulatory network consolidating data across multiple Epic instances.',
    "AI prior authorization tool for a regional health plan, deployed inside the plan's existing tech stack.",
  ],
  scenarioCta: 'Building something HIPAA-compliant? Schedule a discovery call',
  heroAccent: 'from-slate-950 via-emerald-950/30 to-slate-950',
  iconAccent: 'text-emerald-400',
};

export default function Page() {
  return <IndustryPageLayout data={data} />;
}
