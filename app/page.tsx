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

export const metadata: Metadata = {
  title: 'Custom AI, Automation & Software for Compliance-Driven Industries',
  description:
    'Veteran-owned. Custom AI, automation, and software for construction, healthcare, finance, real estate, and US government. SDVOSB certification pending.',
  alternates: { canonical: 'https://autom8ionlab.com/' },
  openGraph: {
    title: 'Custom AI, Automation & Software for Compliance-Driven Industries | Autom8ion Lab',
    description:
      'Veteran-owned engineering firm building custom AI, automation, and software for construction, healthcare, finance, real estate, US federal/state/local government, and the Defense Industrial Base.',
    url: 'https://autom8ionlab.com/',
    images: [{ url: 'https://autom8ionlab.com/logo/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Custom AI, Automation & Software for Compliance-Driven Industries | Autom8ion Lab',
    description:
      'Veteran-owned. Custom AI, automation, and software for construction, healthcare, finance, real estate, government, and DIB. SDVOSB pending. UEI YY2DR3KSENH7.',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Autom8ion Lab',
  legalName: 'Sitehues Media Inc.',
  alternateName: 'Sitehues Media Inc. (DBA Autom8ion Lab)',
  url: 'https://autom8ionlab.com',
  logo: { '@type': 'ImageObject', url: 'https://autom8ionlab.com/logo/logo.png' },
  founder: {
    '@type': 'Person',
    name: 'Sean Richard',
    url: 'https://www.linkedin.com/in/a8l-sean-richard/',
  },
  address: [
    { '@type': 'PostalAddress', addressLocality: 'Plant City', addressRegion: 'FL', addressCountry: 'US' },
    { '@type': 'PostalAddress', addressLocality: 'Montreal', addressRegion: 'QC', addressCountry: 'CA' },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-855-508-6062',
    contactType: 'Sales',
    email: 'sean@autom8ionlab.com',
    areaServed: 'US',
    availableLanguage: ['English'],
  },
  identifier: [
    { '@type': 'PropertyValue', propertyID: 'UEI', value: 'YY2DR3KSENH7' },
    { '@type': 'PropertyValue', propertyID: 'CAGE', value: '9YCS7' },
    { '@type': 'PropertyValue', propertyID: 'DUNS', value: '05-289-2750' },
  ],
  knowsAbout: [
    'CMMC 2.0 compliance',
    'NIST 800-171',
    'NIST 800-53',
    'FedRAMP',
    'HIPAA compliance',
    'SOC 2 Type II',
    'FCRA',
    'HUD compliance',
    'PCI-DSS',
    'FFIEC',
    'FDA 21 CFR Part 11',
    'AI agents',
    'Workflow automation',
    'Custom enterprise software',
    'Construction technology',
    'Healthcare technology',
    'Real estate technology',
    'Federal contracting',
    'SDVOSB',
  ],
  description:
    'Veteran-owned engineering firm building custom AI, automation, and software for compliance-driven industries: construction, healthcare, finance, real estate, US federal/state/local government, and the Defense Industrial Base.',
  foundingDate: '2023',
  sameAs: [
    'https://www.facebook.com/autom8ionlab',
    'https://www.instagram.com/autom8ionlab',
    'https://www.linkedin.com/company/autom8ionlab',
    'https://www.linkedin.com/in/a8l-sean-richard/',
  ],
};

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Autom8ion Lab',
  url: 'https://autom8ionlab.com',
  telephone: '+1-855-508-6062',
  email: 'sean@autom8ionlab.com',
  areaServed: 'US',
  description:
    'Veteran-owned engineering firm building custom AI, automation, and software for compliance-driven industries: construction, healthcare, finance, real estate, US government, and the Defense Industrial Base. SDVOSB certification pending. UEI YY2DR3KSENH7. CAGE 9YCS7.',
  knowsAbout: [
    'AI Agent Development for Regulated Environments',
    'Custom LLM Systems',
    'Workflow & Process Automation',
    'Custom API Integrations',
    'Custom Enterprise Software & Application Development',
    'Cybersecurity Compliance & Engineering',
    'Cloud Infrastructure for FedRAMP, CMMC & HIPAA Workloads',
    'Construction technology',
    'Healthcare technology',
    'Real estate technology',
    'Federal contracting',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: 'https://autom8ionlab.com',
  name: 'Autom8ion Lab',
  description:
    'Veteran-owned engineering firm building custom AI, automation, and software for compliance-driven industries.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://autom8ionlab.com/blog?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

// FAQPage schema mirrors the 8 questions rendered by the FAQ component
// (LOCKED v3 §"FAQs") — kept in sync so crawlers see the same Q&A as users.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What industries do you work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Construction, healthcare, finance, real estate and property management, US federal/state/local government, and the Defense Industrial Base. We don't take work outside those areas — the focus is what makes us useful.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are you registered for federal contracting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. UEI: YY2DR3KSENH7. CAGE: 9YCS7. DUNS: 05-289-2750. SDVOSB certification pending. Veteran-owned.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you a CMMC RPO or C3PAO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. We are software and AI builders, not assessors. We engineer systems that satisfy NIST 800-171 controls and produce the documentation auditors expect, working alongside your assessor or a partner C3PAO. We can refer you to assessment partners.',
      },
    },
    {
      '@type': 'Question',
      name: "What's your typical engagement size and duration?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We scope to your contract structure — task orders, IDIQ, BPA, commercial fixed-price, or T&M. Most projects ship in 8–14 weeks. CMMC remediation runs 4–9 months. FedRAMP-aligned builds run 6+ months. Quote provided after the discovery call.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have past performance with [specific industry / agency]?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can discuss applicable past performance after a qualifying call. Many engagements are NDA-protected; we provide details and references on a need-to-know basis after vendor onboarding begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you work on classified contracts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not at this time. We work on unclassified contracts including CUI handling (NIST 800-171, CMMC L1–L2), FedRAMP Moderate, and HIPAA-aligned environments. For classified work, we partner with cleared firms.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where are you based?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'United States — primary location is Plant City, Florida. We also maintain a development and operations office in Montreal, Quebec. Sales and project delivery is US-only.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you respond to RFPs/RFIs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Send the SOW or RFI documentation to sean@autom8ionlab.com or use the contact form. We respond within one business day with a fit assessment and proposed approach.',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/*
        LOCKED v3 §"Final Homepage Copy" — 11 sections in this exact order.
        Industries are PROMOTED to position 2 (above services) per the IA change
        called out in LOCKED v3 §"What's Locked vs. What Changed Since v2".
      */}
      <Hero />
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
