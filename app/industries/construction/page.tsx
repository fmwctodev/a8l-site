import type { Metadata } from 'next';
import IndustryPageLayout, { type IndustryPageData } from '@/app/_components/IndustryPageLayout';

export const metadata: Metadata = {
  title: 'AI Automation for Construction Firms',
  description:
    'Site-to-office AI workflows for construction. Automate RFIs, submittals, OSHA reporting, and safety compliance. Built by engineers who get the field.',
  keywords:
    'construction project management automation, AI for construction takeoff, construction software development services, Procore integration custom, Sage 300 construction integration, construction RFI automation, HUD compliance software construction, certified payroll automation, lien waiver workflow, Davis-Bacon documentation',
  alternates: { canonical: 'https://autom8ionlab.com/industries/construction' },
  openGraph: {
    title: 'AI Automation for Construction Firms | Autom8ion Lab',
    description:
      'Site-to-office AI workflows for construction. Automate RFIs, submittals, OSHA reporting, and safety compliance. Built by engineers who get the field.',
    url: 'https://autom8ionlab.com/industries/construction',
    images: [{
      url: 'https://autom8ionlab.com/api/og?title=AI+Automation+for+Construction+Firms&section=Industries',
      width: 1200,
      height: 630,
      alt: 'AI, Automation & Custom Software for Construction Firms',
    }],
  },
  twitter: {
    title: 'AI Automation for Construction Firms | Autom8ion Lab',
    description:
      'Site-to-office AI workflows for construction. Automate RFIs, submittals, OSHA reporting, and safety compliance. Built by engineers who get the field.',
    images: ['https://autom8ionlab.com/api/og?title=AI+Automation+for+Construction+Firms&section=Industries'],
  },
};

const data: IndustryPageData = {
  slug: 'construction',
  breadcrumbName: 'Construction',
  h1: 'AI, Automation & Custom Software for Construction Firms',
  heroSubhead:
    'Project management automation, AI-powered takeoff and plan review, custom field apps, and accounting/PM integrations for mid-market and specialty contractors.',

  definition:
    "AI automation for construction is the deployment of custom-engineered systems that bridge field data — RFIs, submittals, daily logs, payroll — to office-side ERPs and accounting. For mid-market and specialty contractors, it kills the 4–6 hours per project per day that office staff currently spend re-keying field data into systems that don't talk to each other.",

  definitionParagraph:
    "Autom8ion Lab builds project management automation, AI for plan review and RFI/submittal processing, and custom field-service mobile apps for foremen and superintendents working in low-connectivity environments. Most engagements involve integrating accounting (Sage 300, Viewpoint, Foundation, ComputerEase) and project management (Procore, PlanGrid, Buildertrend, e-Builder) with custom workflow that fills the gap between them. We work in HUD-funded construction documentation, OSHA reporting, lien waiver state-by-state variance, certified payroll under Davis-Bacon, and the operational pieces commercial software vendors haven't templated. The tone is practical, outcome-focused, light on jargon — you have a project to deliver and a documentation burden to clear, not a digital transformation initiative.",

  buyerProfile:
    'mid-market to enterprise general contractors, specialty contractors, infrastructure firms in the $20M–$500M revenue range. Owners and operators automating project workflows. Not the Bechtels and Kiewits — the regional and specialty firms.',

  problemFraming: {
    heading: "The integration gap that costs your office staff 4–6 hours per project per day.",
    paragraphs: [
      "Construction technology splits into vendors who solve one slice well and don't talk to anything else. Procore is good at project management but doesn't run your accounting. Sage 300 runs your accounting but isn't a field tool. Foundation handles certified payroll but doesn't automatically pull data from your Procore-managed project. Buildertrend is great for residential but limited for commercial. Your office staff spends hours each day moving data between systems by hand — and your superintendents work around the gap with spreadsheets and text messages.",
      "The commercial integration tools (Zapier, Workato, generic iPaaS) get you 60% of the way there but break on the edge cases that matter — multi-state lien waiver requirements, HUD-funded job documentation, certified payroll generation tied to project actuals, RFI workflow that needs to integrate with submittal review. Generic IT shops that build custom integrations don't understand the construction-specific workflow well enough to scope the edge cases up front.",
      "We close that gap. Custom integrations and custom field apps engineered for the construction-specific workflow — not templated against a general-purpose platform — and AI applied where the volume justifies it (plan review, RFI generation, submittal triage). Most engagements pay back in 6–9 months on office-staff time alone, with field productivity as the secondary benefit.",
    ],
  },

  whatWeBuildDetailed: [
    {
      name: 'Project management automation that replaces manual reporting',
      body:
        "Daily report automation that pulls from field activity (Procore, PlanGrid, custom field app), accounting actuals (Sage 300, Foundation, Viewpoint), and weather/schedule data — then generates the consolidated daily report your owners and lenders expect. Replaces the 4–6 hours per project per day that office staff currently spend assembling reports manually. Same pattern for monthly draws, schedule updates, and progress photo curation.",
    },
    {
      name: 'AI for plan review, takeoff estimation, RFI/submittal processing',
      body:
        'AI for plan markup (drawing comparison between revisions, callout extraction, RFI suggestion grounded in spec deltas), takeoff support (line-item generation from PDF plans), and RFI/submittal triage (classification, routing, draft response generation grounded in prior approved responses and project specs). Accuracy depends on plan format and quality; we set expectations during scoping and deliver tools your estimators and PMs actually use.',
    },
    {
      name: 'Custom field-service mobile apps (offline-first)',
      body:
        "Offline-first iOS and Android apps for foremen and superintendents working in low-connectivity environments — concrete pours that lose cell service, infrastructure jobs in remote areas, large-floor-plate buildings where coverage drops. Sync-on-reconnect with conflict resolution. Built for field use: large tap targets, minimal typing, photo-heavy capture, voice-to-text where appropriate. Common scopes: daily reports, time tracking with project actuals, punch list management, deficiency capture with photos and GPS.",
    },
    {
      name: 'Accounting + project management + field tool integrations',
      body:
        'Integration approach varies by stack. Procore: REST API + webhooks. Sage 300 Construction: ODBC + custom integration. Foundation: custom integration via DB. Viewpoint: DB-level + API. PlanGrid, Buildertrend, e-Builder: vendor APIs. We scope after a discovery call — read-only sync, bidirectional, or full data warehouse pattern. The output is a system where data flows automatically between the systems your team already uses, so no one rekeys anything.',
    },
    {
      name: 'HUD compliance, OSHA documentation, lien waivers, certified payroll',
      body:
        "HUD Davis-Bacon prevailing wage documentation, certified payroll generation per WH-347 standards, Section 3 reporting, OSHA 300/300A logs, multi-state lien waiver templates configured per state code, and the document retention requirements that HUD audits cover. Tied directly to your project management and accounting systems so the documentation reflects what actually happened on the project — not a separate parallel record-keeping process that drifts out of sync.",
    },
    {
      name: 'Bid generation automation and AI-assisted proposal writing',
      body:
        "AI-assisted bid documentation: cover letters, technical narrative sections, qualification documentation, scope of work clarifications. Grounded on your prior winning proposals, certifications, past performance, and key personnel. The AI drafts; your estimators edit and approve before submission. Reduces the bid-writing time per opportunity from days to hours, with consistent voice and zero copy-paste errors between proposals.",
    },
    {
      name: 'DBE/MBE/WBE reporting, E-Verify, state licensing tracking',
      body:
        'Automated DBE/MBE/WBE participation tracking and reporting against contract goals. E-Verify integration for federal contracts. State-level licensing and bonding documentation tracking, with renewal alerts. The compliance burden of multi-state operations consolidated into a single dashboard rather than spread across spreadsheets and email reminders.',
    },
  ],

  whatWeBuild: [
    'Project management automation (replacing manual reporting workflows across active projects)',
    'AI for plan review, takeoff estimation, RFI/submittal processing',
    'Custom field-service mobile apps for foremen and superintendents (offline-first)',
    'Integrations between accounting (Sage 300, Viewpoint, Foundation, ComputerEase), project management (Procore, PlanGrid, Buildertrend, e-Builder), and field tools',
    'Document management for HUD-funded projects, OSHA documentation, lien waivers, certified payroll',
    'Bid generation automation and AI-assisted proposal writing',
    'DBE/MBE/WBE participation tracking, E-Verify, state licensing renewal automation',
  ],

  complianceConsiderations: [
    { name: 'HUD compliance', desc: 'Federally-funded construction — Davis-Bacon, certified payroll, Section 3' },
    { name: 'OSHA documentation', desc: 'Safety reporting, OSHA 300/300A, retention' },
    { name: 'DBE/MBE/WBE reporting', desc: 'Disadvantaged business enterprise participation tracking' },
    { name: 'E-Verify', desc: 'Federal contracts and applicable state mandates' },
    { name: 'Davis-Bacon Act', desc: 'Prevailing wage documentation for federally-funded work' },
    { name: 'State licensing & bonding', desc: 'Multi-state operations renewal tracking' },
    { name: 'Lien waiver requirements', desc: 'State-by-state notice and waiver workflows' },
    { name: 'Surety bond reporting', desc: 'Status and capacity reporting to bonding agents' },
  ],

  namedIntegrations: [
    {
      category: 'Construction accounting',
      items: ['Sage 300 Construction', 'Sage Intacct Construction', 'Viewpoint (Trimble)', 'Foundation Software', 'ComputerEase', 'Acumatica Construction'],
    },
    {
      category: 'Project management',
      items: ['Procore', 'PlanGrid (Autodesk)', 'Buildertrend', 'CoConstruct', 'e-Builder', 'Autodesk Construction Cloud', 'Bluebeam Revu / Studio'],
    },
    {
      category: 'Field & estimating',
      items: ['Raken', 'Fieldwire', 'PlanSwift', 'Bluebeam Revu', 'STACK Estimating', 'On-Screen Takeoff'],
    },
    {
      category: 'Compliance & payroll',
      items: ['LCPtracker (certified payroll)', 'eMars (certified payroll)', 'Points North (DBE)', 'B2GNow (DBE compliance)', 'WH-347 / DOL forms automation'],
    },
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
    {
      question: 'Do you work with specialty contractors or just GCs?',
      answer:
        "Both. Specialty contractor work tends to lean toward field-app and accounting-integration scopes; GC work tends toward project-management-automation and document-burden scopes. We scope to the contractor type during the discovery call.",
    },
  ],

  scenarios: [
    'Project management automation for a multi-state specialty construction firm, replacing manual reporting workflows across 40+ active projects. Daily report assembly that previously consumed 4–6 hours of office staff time per project shifted to automated dashboards updated on event from field activity.',
    'Custom field app for a regional general contractor, integrated with their Sage 300 accounting and Procore project management. Offline-first design covered concrete pour shifts where cell service was unreliable; sync-on-reconnect resolved conflicts cleanly.',
    'HUD compliance documentation automation for an affordable housing builder — Davis-Bacon prevailing wage, certified payroll generation, Section 3 reporting, all tied to project actuals and the document retention requirements HUD audits cover.',
  ],

  scenarioCta: 'Building inside Procore, Sage, or Foundation? Schedule a discovery call',
  heroAccent: 'from-slate-950 via-orange-950/30 to-slate-950',
  iconAccent: 'text-orange-400',
};

export default function Page() {
  return <IndustryPageLayout data={data} />;
}
