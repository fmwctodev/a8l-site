import type { Metadata } from 'next';
import CareersClient from './CareersClient';

export const metadata: Metadata = {
  title: 'Careers at Autom8ion Lab | Build the Future of AI & Automation',
  description:
    'Join Autom8ion Lab. Engineering and consulting roles for compliance-heavy software work — building custom AI, automation, and applications for federal, defense, healthcare, finance, real estate, and construction clients.',
  keywords:
    'AI careers, automation jobs, tech jobs remote, AI engineering careers, join AI team, innovation jobs, remote AI positions, automation engineer jobs, AI developer careers',
  alternates: { canonical: 'https://autom8ionlab.com/join-us' },
  openGraph: {
    title: 'Careers at Autom8ion Lab | Build the Future of AI & Automation',
    description:
      'Join Autom8ion Lab. Engineering and consulting roles for compliance-heavy software work — building custom AI, automation, and applications for federal, defense, healthcare, finance, real estate, and construction clients.',
    url: 'https://autom8ionlab.com/join-us',
    images: [{ url: 'https://autom8ionlab.com/logo/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Careers at Autom8ion Lab | Build the Future of AI & Automation',
    description:
      'Join Autom8ion Lab. Engineering and consulting roles for compliance-heavy software work — building custom AI, automation, and applications for federal, defense, healthcare, finance, real estate, and construction clients.',
  },
};

export default function Page() {
  return <CareersClient />;
}
