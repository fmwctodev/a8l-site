import type { Metadata } from 'next';
import NISTChecklistClient from './NISTChecklistClient';

export const metadata: Metadata = {
  title: 'Free NIST AI RMF Compliance Checklist | Autom8ion Lab',
  description:
    'Download the NIST AI Risk Management Framework compliance checklist. 96 auditable items, evidence requirements, and a scoring system across GOVERN, MAP, MEASURE, and MANAGE.',
  robots: 'noindex, nofollow',
  alternates: { canonical: 'https://autom8ionlab.com/nist-checklist' },
  openGraph: {
    title: 'Free NIST AI RMF Compliance Checklist | Autom8ion Lab',
    description:
      '96 auditable items, evidence requirements, and a scoring system to assess your AI governance posture — free from Autom8ion Lab.',
    url: 'https://autom8ionlab.com/nist-checklist',
    images: [{ url: 'https://autom8ionlab.com/logo/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Free NIST AI RMF Compliance Checklist | Autom8ion Lab',
    description:
      '96 auditable items, evidence requirements, and a scoring system to assess your AI governance posture — free from Autom8ion Lab.',
  },
};

export default function Page() {
  return <NISTChecklistClient />;
}
