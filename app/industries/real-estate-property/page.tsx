import type { Metadata } from 'next';
import IndustryPageLayout, { type IndustryPageData } from '@/app/_components/IndustryPageLayout';

export const metadata: Metadata = {
  title: 'AI Agents for Real Estate',
  description:
    'AI agents for real estate: lead capture, lead-to-lease automation, property data extraction, lease management. From first inquiry to renewed contract.',
  keywords:
    'Yardi integration custom, property management automation, tenant screening FCRA compliant, HUD compliance software, LIHTC compliance automation, real estate AI document review, affordable housing compliance software, RealPage integration, AppFolio integration, Entrata integration, MOR REAC documentation',
  alternates: { canonical: 'https://autom8ionlab.com/industries/real-estate-property' },
  openGraph: {
    title: 'AI Agents for Real Estate | Autom8ion Lab',
    description:
      'AI agents for real estate: lead capture, lead-to-lease automation, property data extraction, lease management. From first inquiry to renewed contract.',
    url: 'https://autom8ionlab.com/industries/real-estate-property',
    images: [{
      url: 'https://autom8ionlab.com/api/og?title=AI+Agents+for+Real+Estate&section=Industries',
      width: 1200,
      height: 630,
      alt: 'AI, Automation & Custom Software for Real Estate & Property Management',
    }],
  },
  twitter: {
    title: 'AI Agents for Real Estate | Autom8ion Lab',
    description:
      'AI agents for real estate: lead capture, lead-to-lease automation, property data extraction, lease management. From first inquiry to renewed contract.',
    images: ['https://autom8ionlab.com/api/og?title=AI+Agents+for+Real+Estate&section=Industries'],
  },
};

const data: IndustryPageData = {
  slug: 'real-estate-property',
  breadcrumbName: 'Real Estate & Property',
  h1: 'AI, Automation & Custom Software for Real Estate & Property Management',
  heroSubhead:
    'Property management workflow automation, FCRA-compliant tenant screening, lease lifecycle automation, HUD compliance, and AI for document review — for property managers, REITs, brokerages, and proptech.',

  definition:
    'AI agents for real estate are autonomous systems that handle lead capture, qualification, tour scheduling, and lease execution end-to-end across your existing PMS. For multifamily operators and brokerages, they convert the 9pm inbound lead that used to bounce to voicemail into a pre-qualified tour booked for Wednesday.',

  definitionParagraph:
    'Autom8ion Lab builds property management workflow automation, tenant screening systems with FCRA compliance (adverse action, consumer disclosure, dispute handling), lease lifecycle automation, transaction management for brokerages, AI for document review (leases, contracts, HUD-50059, MOR/REAC), and platforms integrating with Yardi, RealPage, AppFolio, Buildium, MRI, Entrata, and ResMan. Affordable housing compliance covered (HUD, LIHTC, Section 8). The work is operational, integration-heavy, and compliance-conscious — buyers in this vertical have a property platform they\'ve standardized on, a multi-state legal patchwork they\'re trying not to violate, and operational margins thin enough that automation has to actually work.',

  buyerProfile:
    'residential and commercial property management companies, REITs, real estate brokerages with technology operations, multifamily operators, commercial real estate investment firms, proptech companies, and affordable housing operators.',

  problemFraming: {
    heading: 'The platform you standardized on doesn\'t do everything you need. The workarounds break under audit.',
    paragraphs: [
      "Property management technology buyers operate inside a property platform — Yardi, RealPage, AppFolio, Buildium, MRI, Entrata, ResMan — that handles 80% of the workflow well. The other 20% is the work that drove your team to spreadsheets and email. FCRA adverse action workflow that the platform doesn't quite handle. LIHTC tenant income certification that requires data your platform doesn't track natively. HUD-50059 generation that's manual every month. State-by-state lease template variance that nobody's centralized. Multi-state landlord-tenant law variance that creates risk every time a new property comes online.",
      "The commercial integration tools (Zapier, generic iPaaS) get you partway. They break on the FCRA edge cases that matter — adverse action timing, consumer disclosure on request, dispute handling within statutory windows. Generic IT shops don't understand multifamily-specific compliance well enough to scope LIHTC documentation up front. Proptech vendors solve one slice (smart-home access control, AI listing description generation) and don't talk to your property platform.",
      "We close that gap. Custom integrations engineered for the property-management-specific workflow — FCRA workflow that survives a regulator review, LIHTC compliance that produces the documentation your auditor reads first, lease lifecycle automation that respects state-by-state variance, and AI applied where the document volume justifies it (lease abstraction, HUD form processing, MOR documentation review).",
    ],
  },

  whatWeBuildDetailed: [
    {
      name: 'Property management workflow automation',
      body:
        'Custom workflow that fills the gap between your property platform and the operational work it doesn\'t handle natively. Move-in/move-out automation that pulls inspection data, photos, and security deposit accounting from your platform and routes through approval. Maintenance work order escalation tied to vendor SLAs. Renewal workflow that generates rate proposals from market data, presents to operations for approval, and writes back to your platform once executed.',
    },
    {
      name: 'Tenant screening systems with FCRA compliance',
      body:
        'FCRA-compliant tenant screening engineered into the architecture, not bolted on. Adverse action notices generated automatically per FCRA requirements (pre-adverse, then final). Consumer disclosure on request handled per the statutory window. Dispute handling workflow with audit trail demonstrating the process was followed correctly. Permissible-purpose access to consumer reports logged. The screening logic is configurable per property type (residential, student housing, senior living, LIHTC) so the same system serves diverse portfolios without rewriting workflow per asset class.',
    },
    {
      name: 'Lease lifecycle automation',
      body:
        'Lease renewal automation (rate calculation from market data, renewal letter generation, executed lease write-back to platform). Escalation tracking with notice timing per state requirements. Compliance check workflow that verifies LIHTC, HUD, or local rent control requirements before lease execution. State-specific lease templates configurable by jurisdiction. Pre-lien and adverse-action notice timing built into the workflow per state requirements.',
    },
    {
      name: 'AI for document review',
      body:
        "Lease abstraction (extracting term, rate, escalation clauses, options, special provisions from PDF leases). Contract review for vendor agreements, brokerage agreements, and management contracts. HUD-50059 document classification, data extraction (resident demographics, income, asset information), and validation against HUD standards. MOR / REAC documentation review and audit trail. AI does the first pass; your staff reviews and signs every output.",
    },
    {
      name: 'Custom platforms integrating with Yardi, RealPage, AppFolio, Buildium, MRI, Entrata, ResMan',
      body:
        'Integration approach varies by platform. Yardi: Voyager APIs, Genesis2, and custom interfaces for older deployments. RealPage: OneSite, Real Estate Mgmt, RP Connect APIs. AppFolio: REST API. Entrata: REST API. MRI: REST API. Buildium: REST API. ResMan: REST API. We scope after a discovery call — read-only sync, bidirectional, or full data warehouse pattern with appropriate audit trail.',
    },
    {
      name: 'Affordable housing compliance automation (HUD, LIHTC, Section 8)',
      body:
        'LIHTC tenant income certification (TIC) generation and tracking, HUD-50059 generation and storage, MOR documentation, EIV income verification workflow, REAC inspection prep, and the document retention requirements that LIHTC compliance auditors expect. We tie compliance directly into your operational workflow — no separate parallel record-keeping that drifts out of sync with your property platform.',
    },
    {
      name: 'Resident portals and applicant journey applications',
      body:
        'Resident portals built to WCAG 2.1 AA accessibility (keyboard navigation, screen-reader compatibility, color-contrast compliance) with VPAT/ACR documentation as part of the deliverable. Common scopes: applicant journey from showing to lease execution, resident self-service for maintenance and payments, document upload and verification flow with FCRA audit trail.',
    },
  ],

  whatWeBuild: [
    'Property management workflow automation',
    'Tenant screening systems with FCRA compliance (adverse action, consumer disclosure, dispute handling)',
    'Lease lifecycle automation (renewal, escalation, compliance check, state-specific notice timing)',
    'Transaction management systems for brokerages',
    'AI for document review (leases, contracts, HUD-50059, MOR/REAC documentation)',
    'Custom platforms integrating with Yardi, RealPage, AppFolio, Buildium, MRI, Entrata, ResMan',
    'Affordable housing compliance automation (HUD, LIHTC, Section 8)',
    'Resident portals and applicant journey applications',
  ],

  complianceConsiderations: [
    { name: 'FCRA', desc: 'Tenant screening, adverse action workflow, dispute handling' },
    { name: 'Fair Housing Act', desc: 'FHA compliance across screening, marketing, and operations' },
    { name: 'HUD multifamily', desc: 'HUD-50059, MOR, EIV, REAC compliance documentation' },
    { name: 'LIHTC', desc: 'Tenant income certification, qualified basis tracking' },
    { name: 'State landlord-tenant laws', desc: 'Per-state notice timing, lease, and security deposit requirements' },
    { name: 'ADA accessibility', desc: 'WCAG 2.1 AA for tenant-facing applications' },
    { name: 'State real estate licensing', desc: 'State-by-state license tracking for brokerages' },
    { name: 'Local rent control / stabilization', desc: 'NYC, San Francisco, LA, Oregon, etc.' },
  ],

  namedIntegrations: [
    {
      category: 'Property management platforms',
      items: ['Yardi (Voyager, Genesis2, custom interfaces)', 'RealPage (OneSite, Real Estate Mgmt, RP Connect)', 'AppFolio (REST API)', 'Buildium (REST API)', 'MRI Software', 'Entrata', 'ResMan'],
    },
    {
      category: 'Tenant screening & FCRA',
      items: ['TransUnion SmartMove', 'Experian RentBureau', 'CoreLogic SafeRent', 'AppFolio screening (built-in)', 'RealPage LeasingDesk Screening'],
    },
    {
      category: 'Affordable housing & HUD compliance',
      items: ['HUD HUD-50059 standards', 'EIV (Enterprise Income Verification)', 'TRACS (Tenant Rental Assistance Certification System)', 'iMAX', 'WASS (Web Access Secure Systems)'],
    },
    {
      category: 'Brokerage & transactions',
      items: ['MLS APIs (Bridge Interactive, RESO Web API)', 'DocuSign Real Estate', 'dotloop', 'Skyslope', 'Lone Wolf'],
    },
  ],

  faqs: [
    {
      question: 'Do you integrate with Yardi, RealPage, AppFolio, or Entrata?',
      answer:
        'Yes. Yardi (Voyager, Genesis2, custom interfaces), RealPage (OneSite, Real Estate Mgmt, RP Connect), AppFolio (REST API), Entrata (REST API), MRI (REST API), Buildium (REST API), ResMan (REST API). Integration approach depends on what you are trying to accomplish.',
    },
    {
      question: 'Can you handle FCRA adverse action workflow correctly?',
      answer:
        'Yes. FCRA adverse action notices, pre-adverse and final notification, consumer disclosure on request, dispute handling workflow, and the audit trail that demonstrates the process was followed correctly. Built into tenant screening systems from the architecture stage.',
    },
    {
      question: 'We have LIHTC properties — can you handle the compliance documentation?',
      answer:
        'Yes. LIHTC tenant income certification (TIC), HUD-50059 generation and storage, MOR documentation, EIV income verification workflow, and the document retention requirements that LIHTC compliance auditors expect.',
    },
    {
      question: 'Can your AI process HUD-50059 and MOR documents?',
      answer:
        'Yes. Document classification, data extraction (resident demographics, income, asset information), and validation against HUD standards. Output flows into your existing compliance workflow.',
    },
    {
      question: 'Do you build resident portals that pass ADA accessibility audit?',
      answer:
        'Yes. Resident portals built to WCAG 2.1 AA, including screen-reader compatibility, keyboard navigation, and color-contrast compliance. VPAT/ACR documentation produced as part of the deliverable.',
    },
    {
      question: 'How do you handle multi-state landlord-tenant law variance?',
      answer:
        'State-specific lease templates and notice workflows, configurable by jurisdiction. Pre-lien and adverse-action notice timing built into the workflow per state requirements.',
    },
  ],

  scenarios: [
    'Tenant screening and FCRA workflow automation for a multifamily property management company. Adverse action notices, pre-adverse and final notification, consumer disclosure on request, dispute handling — built into the system from the architecture stage. Multi-state lease templates configurable by jurisdiction.',
    'Custom AI document processing for a portfolio of LIHTC properties. Document classification across HUD-50059, EIV documentation, and tenant files; data extraction validated against HUD standards; audit trail for the LIHTC compliance auditor.',
    'Yardi-integrated lease lifecycle automation for a regional REIT. Renewal rate calculation from market data, automated renewal letter generation, executed lease write-back to Voyager, with escalation timing per state.',
  ],

  scenarioCta: 'Need FCRA-compliant tenant screening or HUD automation? Schedule a discovery call',
  heroAccent: 'from-slate-950 via-violet-950/30 to-slate-950',
  iconAccent: 'text-violet-400',

  comparison: {
    heading: 'AI agents for real estate vs Yardi/AppFolio bolt-ons vs hiring more leasing agents',
    headers: [
      'Dimension',
      'Autom8ion Lab (custom)',
      'Yardi / AppFolio / RealPage marketplace bolt-ons',
      'Hire more leasing staff',
    ],
    rows: [
      {
        label: '24/7 lead response',
        values: [
          'AI agent answers in <60 seconds at any hour. Pre-qualifies on income, credit, move-in date. Books tour direct to PMS calendar.',
          'Auto-responder email confirming receipt. Lead waits until business hours.',
          "9pm leads sit in a voicemail until 9am. By then they've booked three tours with competitors.",
        ],
      },
      {
        label: 'PMS integration depth',
        values: [
          'Bidirectional sync with Yardi, AppFolio, RealPage, Buildium, MRI, Entrata, ResMan — units flip available/unavailable across every marketing channel in real time',
          'Pre-built sync for the cases the vendor templated — usually one-way (PMS → marketing) or batch overnight',
          'Manual updates. Vacant units stay listed for days after lease signing.',
        ],
      },
      {
        label: 'Compliance workflow',
        values: [
          'FCRA adverse-action workflow, LIHTC tenant-income certification, HUD-50059 generation, state-by-state lease template variance — all built around your portfolio',
          'Template-grade. Compliance edge cases require professional services hours.',
          'Whatever your compliance officer remembers. Audit risk compounds.',
        ],
      },
      {
        label: 'Cost shape',
        values: [
          'Project + monthly retainer. Replaces ~1.5 FTE of leasing/admin work per 200 units.',
          'Per-unit per-month SaaS line item, plus marketplace add-on fees.',
          '$45–60K/year per leasing agent + benefits + turnover cost.',
        ],
      },
      {
        label: 'Time to launch',
        values: [
          '30 days for the first workflow (lead capture + qualification); 60–90 days for full lead-to-lease lifecycle',
          'Hours to enable a connector. Quarters to bend the workflow into your specific compliance posture.',
          'Two-week onboarding × every new hire × every turnover.',
        ],
      },
      {
        label: 'Best fit',
        values: [
          'Multi-site multifamily operators (200+ units), regional brokerages, REITs, affordable-housing operators with HUD/LIHTC volume',
          'Single-site operators whose workflow already fits the PMS template',
          'Boutique operators where the leasing manager IS the brand',
        ],
      },
    ],
  },
};

export default function Page() {
  return <IndustryPageLayout data={data} />;
}
