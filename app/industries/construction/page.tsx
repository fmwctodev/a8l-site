import type { Metadata } from 'next';
import IndustryPageLayout, { type IndustryPageData } from '@/app/_components/IndustryPageLayout';

export const metadata: Metadata = {
  title: 'AI, Automation & Software for Construction Firms',
  description:
    'Project management automation, AI for takeoff and plan review, custom field apps. For mid-market and specialty contractors automating their workflows.',
  keywords:
    'construction project management automation, AI for construction takeoff, construction software development services, Procore integration custom, Sage 300 construction integration, construction RFI automation, HUD compliance software construction',
  alternates: { canonical: 'https://autom8ionlab.com/industries/construction' },
  openGraph: {
    title: 'AI, Automation & Software for Construction Firms',
    description:
      'Project management automation, AI for takeoff and plan review, custom field apps for mid-market and specialty contractors.',
    url: 'https://autom8ionlab.com/industries/construction',
    images: [{ url: 'https://autom8ionlab.com/logo/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'AI, Automation & Software for Construction Firms',
    description:
      'Project management automation, AI for takeoff and plan review, custom field apps for mid-market and specialty contractors.',
  },
};

const data: IndustryPageData = {
  slug: 'construction',
  breadcrumbName: 'Construction',
  h1: 'AI, Automation & Custom Software for Construction Firms',
  heroSubhead:
    'Project management automation, AI-powered takeoff and plan review, custom field apps, and accounting/PM integrations for mid-market and specialty contractors.',
  definitionParagraph:
    'We build for construction firms automating project workflows — project management automation that replaces manual reporting, AI for plan review and RFI/submittal processing, custom field-service mobile apps for foremen and superintendents, and integrations between accounting (Sage 300, Viewpoint, Foundation, ComputerEase) and project management (Procore, PlanGrid, Buildertrend, e-Builder) and field tools.',
  buyerProfile:
    'mid-market to enterprise general contractors, specialty contractors, infrastructure firms in the $20M–$500M revenue range. Owners and operators automating project workflows. Not the Bechtels and Kiewits — the regional and specialty firms.',
  whatWeBuild: [
    'Project management automation (replacing manual reporting workflows across active projects)',
    'AI for plan review, takeoff estimation, RFI/submittal processing',
    'Custom field-service mobile apps for foremen and superintendents (offline-first)',
    'Integrations between accounting (Sage 300, Viewpoint, Foundation, ComputerEase), project management (Procore, PlanGrid, Buildertrend, e-Builder), and field tools',
    'Document management for HUD-funded projects, OSHA documentation, lien waivers, certified payroll',
    'Bid generation automation and AI-assisted proposal writing',
  ],
  complianceConsiderations: [
    { name: 'HUD compliance', desc: 'Federally-funded construction projects' },
    { name: 'OSHA documentation', desc: 'Safety reporting and retention' },
    { name: 'DBE/MBE/WBE reporting', desc: 'Disadvantaged business enterprise tracking' },
    { name: 'E-Verify', desc: 'Federal contracts' },
    { name: 'Davis-Bacon Act', desc: 'Prevailing wage documentation' },
    { name: 'State licensing & bonding', desc: 'Multi-state operations' },
    { name: 'Lien waiver requirements', desc: 'State-by-state notice and waiver workflows' },
  ],
  faqs: [
    {
      question: 'Do you integrate with Procore? Sage 300? Foundation?',
      answer:
        'Yes. Procore (REST API + webhooks), Sage 300 Construction (ODBC + custom integration), Foundation (custom integration), and Viewpoint (DB-level + API). Integration approach varies by what you are trying to accomplish — read-only sync, bidirectional, or full data warehouse pattern.',
    },
    {
      question: 'Can you build custom field apps that work offline on a job site?',
      answer:
        'Yes. Offline-first mobile apps for iOS and Android with sync-on-reconnect are a common engagement type. Built for crews that work in low-connectivity environments and cannot depend on consistent cellular service.',
    },
    {
      question: 'We have HUD-funded projects — can you handle the documentation?',
      answer:
        'Yes. HUD Davis-Bacon prevailing wage documentation, certified payroll generation, Section 3 reporting, and the workflow that ties them to your project management system. We also handle the document retention requirements that HUD audits cover.',
    },
    {
      question: 'How do you handle the variance between state lien waiver requirements?',
      answer:
        'State-specific lien waiver templates, automated based on the project location and the relevant state code. Pre-lien notice requirements built into the workflow where they apply.',
    },
    {
      question: 'Can your AI handle plan markup and RFI generation?',
      answer:
        'Yes. AI for plan markup (drawing comparison, callout extraction, RFI suggestion) is a current capability area. Accuracy depends on plan format and quality; we set expectations during scoping.',
    },
  ],
  scenarios: [
    'Project management automation for a multi-state specialty construction firm, replacing manual reporting workflows across 40+ active projects.',
    'Custom field app for a regional general contractor, integrated with their Sage 300 accounting and Procore project management.',
    'HUD compliance documentation automation for an affordable housing builder.',
  ],
  scenarioCta: 'Building inside Procore, Sage, or Foundation? Schedule a discovery call',
  heroAccent: 'from-slate-950 via-orange-950/30 to-slate-950',
  iconAccent: 'text-orange-400',
};

export default function Page() {
  return <IndustryPageLayout data={data} />;
}
