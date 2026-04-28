import type { Metadata } from 'next';
import Hero from './_components/Hero';
import About from './_components/About';
import Problems from './_components/Problems';
import Solutions from './_components/Solutions';
import Benefits from './_components/Benefits';
import FAQ from './_components/FAQ';
import Process from './_components/Process';
import Pricing from './_components/Pricing';
import CTA from './_components/CTA';

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
    areaServed: ['US', 'CA'],
    availableLanguage: ['English', 'French'],
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
    'https://twitter.com/autom8ionlab',
    'https://tiktok.com/@autom8ionlab',
  ],
};

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Autom8ion Lab',
  url: 'https://autom8ionlab.com',
  telephone: '+1-855-508-6062',
  email: 'sean@autom8ionlab.com',
  areaServed: ['US', 'CA'],
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
  description: 'Custom AI automation, cloud infrastructure, and cybersecurity systems for businesses',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://autom8ionlab.com/blog?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What industries do you work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Construction, healthcare, finance, real estate and property management, US federal/state/local government, and the Defense Industrial Base. We do not take work outside those areas — the focus is what makes us useful.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it typically take to build a custom AI or automation system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most engagements ship in 8–14 weeks. CMMC remediation runs 4–9 months. FedRAMP-aligned builds run 6+ months. Quotes are scope-driven and provided after a discovery call.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes your AI agents different from generic chatbots?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our AI agents are fine-tuned on your specific business data and approved documentation, scoped to specific actions, and connected only to the systems they need. Unlike generic chatbots that follow scripts, our agents respond using your procedures and follow role-based access, approval logic, and documented business rules.',
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
      name: 'What is the typical engagement size and duration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We scope work to your contract structure — task orders, IDIQ, BPA, fixed-price, or T&M. Most engagements run 8–14 weeks. CMMC remediation runs 4–9 months. FedRAMP-aligned builds run 6+ months. Quotes are scope-driven and provided after a discovery call. We work transparently on price.',
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

      <Hero />
      <About />
      <Problems />
      <Solutions />
      <Benefits />
      <FAQ />
      <Process />
      <Pricing />
      <CTA />
    </>
  );
}
