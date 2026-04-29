// Schema component library per LOCKED v3 SEO Plan + build prompts §0.4.
//
// Every component renders one JSON-LD <script> via dangerouslySetInnerHTML
// (server-rendered, crawlable in initial HTML). Use these instead of writing
// schema by hand on each page so spelling, IDs, and audience targeting stay
// consistent.
//
// CRITICAL: FAQPageSchema must only render on pages that ALSO display the
// same FAQ content visually. Don't add schema for hidden FAQs.

import React from 'react';

/* ------------------------------------------------------------------ */
/* Shared helpers                                                     */
/* ------------------------------------------------------------------ */

function ldScript(schema: object) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const BASE = 'https://autom8ionlab.com';

/* ------------------------------------------------------------------ */
/* OrganizationSchema — used in root layout / homepage                */
/* ------------------------------------------------------------------ */

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE}/#organization`,
    name: 'Autom8ion Lab',
    legalName: 'Sitehues Media Inc.',
    alternateName: 'Sitehues Media Inc. (DBA Autom8ion Lab)',
    url: BASE,
    logo: { '@type': 'ImageObject', url: `${BASE}/logo/logo.png`, width: 600, height: 200 },
    description:
      'Veteran-owned engineering firm building custom AI, automation, and software for compliance-driven industries: construction, healthcare, finance, real estate, US federal/state/local government, and the Defense Industrial Base.',
    foundingDate: '2023',
    founder: {
      '@id': `${BASE}/about#person`,
    },
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Plant City',
        addressRegion: 'FL',
        addressCountry: 'US',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Montreal',
        addressRegion: 'QC',
        addressCountry: 'CA',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-855-508-6062',
      contactType: 'Sales',
      email: 'info@autom8ionlab.com',
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
    sameAs: [
      'https://www.facebook.com/autom8ionlab',
      'https://www.instagram.com/autom8ionlab',
      'https://www.linkedin.com/company/autom8ionlab',
      'https://www.linkedin.com/in/a8l-sean-richard/',
    ],
  };
  return ldScript(schema);
}

/* ------------------------------------------------------------------ */
/* ServiceSchema — accepts industry prop                              */
/* ------------------------------------------------------------------ */

export type IndustryAudience =
  | 'Construction'
  | 'Healthcare'
  | 'Finance'
  | 'Real Estate & Property'
  | 'Government'
  | 'Defense'
  | 'All';

const audienceMap: Record<IndustryAudience, string> = {
  Construction:
    'Mid-market and specialty contractors, infrastructure firms, and construction technology teams',
  Healthcare:
    'Mid-market health systems, ambulatory networks, specialty practices, payers, life sciences companies, and medical device firms',
  Finance:
    'Community and regional banks, credit unions, fintech companies, insurance carriers, wealth management firms, and payment processors',
  'Real Estate & Property':
    'Property management companies, REITs, real estate brokerages, multifamily operators, proptech companies, and affordable housing operators',
  Government:
    'US federal civilian agencies, state government IT, county and municipal IT, special districts, public utilities, school districts, state universities, and state DOTs',
  Defense:
    'DoD prime contractors and subcontractors of all sizes — from small specialty manufacturers to mid-tier system integrators',
  All: 'Organizations operating under HIPAA, SOC 2, CMMC, NIST 800-171, FedRAMP, FCRA, HUD, PCI-DSS, FFIEC, and similar compliance frameworks',
};

export function ServiceSchema({
  name,
  serviceType,
  industry = 'All',
  url,
}: {
  name: string;
  serviceType: string;
  industry?: IndustryAudience;
  url: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    serviceType,
    url,
    provider: {
      '@type': 'Organization',
      name: 'Autom8ion Lab',
      url: BASE,
    },
    areaServed: { '@type': 'Country', name: 'United States' },
    audience: { '@type': 'BusinessAudience', audienceType: audienceMap[industry] },
  };
  return ldScript(schema);
}

/* ------------------------------------------------------------------ */
/* FAQPageSchema — accepts a list of {question, answer}              */
/* ------------------------------------------------------------------ */

export function FAQPageSchema({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  if (!faqs.length) return null;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
  return ldScript(schema);
}

/* ------------------------------------------------------------------ */
/* BreadcrumbSchema                                                   */
/* ------------------------------------------------------------------ */

export function BreadcrumbSchema({
  trail,
}: {
  trail: { name: string; href: string }[];
}) {
  if (!trail.length) return null;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((step, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: step.name,
      item: step.href.startsWith('http') ? step.href : `${BASE}${step.href}`,
    })),
  };
  return ldScript(schema);
}

/* ------------------------------------------------------------------ */
/* ArticleSchema — for blog posts                                     */
/* ------------------------------------------------------------------ */

export function ArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  url,
  imageUrl,
  articleSection,
  keywords,
  wordCount,
}: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  imageUrl?: string;
  articleSection?: string;
  keywords?: string[] | string;
  wordCount?: number;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': url,
    headline: title,
    description,
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: 'en-US',
    author: { '@id': `${BASE}/about#person` },
    publisher: { '@id': `${BASE}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    ...(imageUrl ? { image: imageUrl } : {}),
    ...(articleSection ? { articleSection } : {}),
    ...(keywords
      ? { keywords: Array.isArray(keywords) ? keywords.join(', ') : keywords }
      : {}),
    ...(wordCount ? { wordCount } : {}),
  };
  return ldScript(schema);
}

/* ------------------------------------------------------------------ */
/* PersonSchema — for the founder / author byline                     */
/* ------------------------------------------------------------------ */

/**
 * Render once on the page that is the canonical author bio (currently
 * `/about` — `/about/sean-richard` is deferred per the Phase-1 SEO plan).
 * Linked from ArticleSchema via `author.url`, so AI engines can stitch the
 * Article → Person → Organization graph.
 */
export function PersonSchema({
  name = 'Sean Richard',
  jobTitle = 'Founder & Principal Engineer',
  url = `${BASE}/about`,
  imageUrl,
  description = 'Veteran founder of Autom8ion Lab. Builds custom AI, automation, and software with audit-grade compliance documentation from day one.',
  sameAs = ['https://www.linkedin.com/in/a8l-sean-richard/'],
  knowsAbout = [
    'Custom AI Agents',
    'Large Language Models',
    'Workflow Automation',
    'n8n',
    'Cybersecurity Compliance',
    'CMMC 2.0',
    'NIST 800-171',
    'FedRAMP',
    'HIPAA',
    'Federal Contracting',
  ],
}: {
  name?: string;
  jobTitle?: string;
  url?: string;
  imageUrl?: string;
  description?: string;
  sameAs?: string[];
  knowsAbout?: string[];
} = {}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${url}#person`,
    name,
    givenName: name.split(' ')[0],
    familyName: name.split(' ').slice(1).join(' '),
    jobTitle,
    url,
    description,
    worksFor: { '@id': `${BASE}/#organization` },
    knowsAbout,
    knowsLanguage: ['en'],
    sameAs,
    ...(imageUrl ? { image: imageUrl } : {}),
  };
  return ldScript(schema);
}

/* ------------------------------------------------------------------ */
/* ProfessionalServiceSchema + WebSiteSchema for homepage             */
/* ------------------------------------------------------------------ */

export function ProfessionalServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Autom8ion Lab',
    url: BASE,
    telephone: '+1-855-508-6062',
    email: 'info@autom8ionlab.com',
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
  return ldScript(schema);
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: BASE,
    name: 'Autom8ion Lab',
    description:
      'Veteran-owned engineering firm building custom AI, automation, and software for compliance-driven industries.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
  return ldScript(schema);
}
