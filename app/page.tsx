import type { Metadata } from 'next';
import Hero from './_components/Hero';
import IndustriesGrid from './_components/IndustriesGrid';
import ProblemFraming from './_components/ProblemFraming';
import ThreeServices from './_components/ThreeServices';
import HowWeWork from './_components/HowWeWork';
import ComplianceFrameworks from './_components/ComplianceFrameworks';
import EngagementModels from './_components/EngagementModels';
import CapabilityStatementCTA from './_components/CapabilityStatementCTA';
import PastPerformance from './_components/PastPerformance';
import FAQ from './_components/FAQ';
import FinalCta from './_components/FinalCta';
import { ProfessionalServiceSchema, FAQPageSchema } from './_components/Schema';

// Title.absolute overrides the layout's `%s | Autom8ion Lab` template. Per
// Implementation Plan §4.2 — homepage gets a single, brand-led title at 60
// chars; description at 156 chars front-loads the value prop.
export const metadata: Metadata = {
  title: { absolute: 'Autom8ion Lab — Custom AI, Automation & Compliance Engineering' },
  description:
    'Custom AI agents, workflow automation, and LLM systems for regulated industries. Veteran-owned, SDVOSB Certified · SBA Certified. 30-day launches. Audit-ready from day one.',
  alternates: { canonical: 'https://autom8ionlab.com/' },
  openGraph: {
    title: 'Autom8ion Lab — Custom AI, Automation & Compliance Engineering',
    description:
      'Custom AI agents, workflow automation, and LLM systems for regulated industries. Veteran-owned, SDVOSB Certified · SBA Certified. 30-day launches. Audit-ready from day one.',
    url: 'https://autom8ionlab.com/',
    images: [{ url: 'https://autom8ionlab.com/logo/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Autom8ion Lab — Custom AI, Automation & Compliance Engineering',
    description:
      'Custom AI agents, workflow automation, and LLM systems for regulated industries. SDVOSB Certified · SBA Certified. UEI YY2DR3KSENH7.',
  },
};

// Homepage FAQs — must match the visible <FAQ /> component 1:1 or Google
// penalizes the FAQPage schema. If you change one, change the other.
const homepageFaqs = [
  {
    question: 'What industries do you work with?',
    answer:
      "Construction, healthcare, finance, real estate and property management, US federal/state/local government, and the Defense Industrial Base. We don't take work outside those areas — the focus is what makes us useful.",
  },
  {
    question: 'Are you registered for federal contracting?',
    answer:
      'Yes. UEI: YY2DR3KSENH7. CAGE: 9YCS7. DUNS: 05-289-2750. SDVOSB Certified · SBA Certified · VA Vets First. Veteran-owned.',
  },
  {
    question: 'Are you a CMMC RPO or C3PAO?',
    answer:
      'No. We are software and AI builders, not assessors. We engineer systems that satisfy NIST 800-171 controls and produce the documentation auditors expect, working alongside your assessor or a partner C3PAO. We can refer you to assessment partners.',
  },
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
    question: 'Can you work on classified contracts?',
    answer:
      'Not at this time. We work on unclassified contracts including CUI handling (NIST 800-171, CMMC L1–L2), FedRAMP Moderate, and HIPAA-aligned environments. For classified work, we partner with cleared firms.',
  },
  {
    question: 'Where are you based?',
    answer:
      'United States — primary location is Plant City, Florida. We also maintain a development and operations office in Montreal, Quebec. Sales and project delivery is US-only.',
  },
  {
    question: 'Do you respond to RFPs/RFIs?',
    answer:
      'Yes. Send the SOW or RFI documentation to info@autom8ionlab.com or use the contact form. We respond within one business day with a fit assessment and proposed approach.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Organization + WebSite schemas live in app/layout.tsx (sitewide).
          Homepage adds ProfessionalService + FAQPage on top. */}
      <ProfessionalServiceSchema />
      <FAQPageSchema faqs={homepageFaqs} />

      {/*
        LOCKED v3 §"Final Homepage Copy" — 11 sections in this exact order.
        Industries are PROMOTED to position 2 (above services) per the IA change
        called out in LOCKED v3 §"What's Locked vs. What Changed Since v2".
      */}
      <Hero />

      {/* Homepage definition block — first 200 words of body. AI engines lift
          this verbatim as a self-contained answer to "what does Autom8ion Lab
          do" without needing to parse the rest of the page. Per Implementation
          Plan §6.1. */}
      <section className="py-12 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <section className="definition-block">
            <p className="lead">
              <strong>Autom8ion Lab</strong> is a veteran-owned engineering firm that builds custom
              AI agents, workflow automation, and LLM systems for mid-market companies in regulated
              industries — construction, healthcare, finance, real estate, US government, and the
              Defense Industrial Base. Most engagements launch in 30 days. Every system ships with
              the security architecture and compliance documentation an audit actually expects.
            </p>
          </section>
        </div>
      </section>

      <IndustriesGrid />
      <ProblemFraming />
      <ThreeServices />
      <HowWeWork />
      <ComplianceFrameworks />
      <EngagementModels />
      <CapabilityStatementCTA />
      <PastPerformance />
      <FAQ />
      <FinalCta />
    </>
  );
}
