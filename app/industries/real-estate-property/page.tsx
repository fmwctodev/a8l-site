import type { Metadata } from 'next';
import IndustryPageLayout, { type IndustryPageData } from '@/app/_components/IndustryPageLayout';

export const metadata: Metadata = {
  title: 'AI, Automation & Software for Real Estate & Property Management',
  description:
    'Property management automation, FCRA-compliant tenant screening, lease lifecycle, HUD compliance, AI document review for property managers, REITs, brokerages, proptech.',
  keywords:
    'Yardi integration custom, property management automation, tenant screening FCRA compliant, HUD compliance software, LIHTC compliance automation, real estate AI document review, affordable housing compliance software, RealPage integration',
  alternates: { canonical: 'https://autom8ionlab.com/industries/real-estate-property' },
  openGraph: {
    title: 'AI, Automation & Software for Real Estate & Property Management',
    description:
      'Property management automation, FCRA-compliant tenant screening, lease lifecycle, HUD compliance, AI document review.',
    url: 'https://autom8ionlab.com/industries/real-estate-property',
    images: [{ url: 'https://autom8ionlab.com/logo/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'AI, Automation & Software for Real Estate & Property Management',
    description:
      'Property management automation, FCRA-compliant tenant screening, lease lifecycle, HUD compliance, AI document review.',
  },
};

const data: IndustryPageData = {
  slug: 'real-estate-property',
  breadcrumbName: 'Real Estate & Property',
  h1: 'AI, Automation & Custom Software for Real Estate & Property Management',
  heroSubhead:
    'Property management workflow automation, FCRA-compliant tenant screening, lease lifecycle automation, HUD compliance, and AI for document review — for property managers, REITs, brokerages, and proptech.',
  definitionParagraph:
    'We build property management workflow automation, tenant screening systems with FCRA compliance (adverse action, consumer disclosure, dispute handling), lease lifecycle automation, transaction management for brokerages, AI document review (leases, contracts, HUD-50059, MOR/REAC), and platforms integrating with Yardi, RealPage, AppFolio, Buildium, MRI, Entrata, and ResMan. Affordable housing compliance covered (HUD, LIHTC, Section 8).',
  buyerProfile:
    'residential and commercial property management companies, REITs, real estate brokerages with technology operations, multifamily operators, commercial real estate investment firms, proptech companies, affordable housing operators.',
  whatWeBuild: [
    'Property management workflow automation',
    'Tenant screening systems with FCRA compliance (adverse action, consumer disclosure, dispute handling)',
    'Lease lifecycle automation (renewal, escalation, compliance check)',
    'Transaction management systems for brokerages',
    'AI for document review (leases, contracts, HUD-50059, MOR/REAC documentation)',
    'Custom platforms integrating with Yardi, RealPage, AppFolio, Buildium, MRI, Entrata, ResMan',
    'Affordable housing compliance automation (HUD, LIHTC, Section 8)',
    'Resident portals and applicant journey applications',
  ],
  complianceConsiderations: [
    { name: 'FCRA', desc: 'Tenant screening and adverse action workflow' },
    { name: 'Fair Housing Act', desc: 'FHA compliance across screening and marketing' },
    { name: 'HUD multifamily', desc: 'HUD-50059, MOR, EIV, REAC' },
    { name: 'LIHTC', desc: 'Tenant income certification and reporting' },
    { name: 'State landlord-tenant laws', desc: 'Per-state notice and lease requirements' },
    { name: 'ADA accessibility', desc: 'Tenant-facing systems' },
    { name: 'Real estate licensing', desc: 'State-by-state requirements' },
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
    'Tenant screening and FCRA workflow automation for a multifamily property management company.',
    'Custom AI document processing for a portfolio of LIHTC properties.',
    'Yardi-integrated lease lifecycle automation for a regional REIT.',
  ],
  scenarioCta: 'Need FCRA-compliant tenant screening or HUD automation? Schedule a discovery call',
  heroAccent: 'from-slate-950 via-violet-950/30 to-slate-950',
  iconAccent: 'text-violet-400',
};

export default function Page() {
  return <IndustryPageLayout data={data} />;
}
