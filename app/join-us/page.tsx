import type { Metadata } from 'next';
import CareersClient from './CareersClient';

export const metadata: Metadata = {
  title: { absolute: 'Careers at Autom8ion Lab' },
  description:
    'Engineering roles building custom AI, automation, and compliance systems. Remote-friendly. US and Canada.',
  keywords:
    'AI careers, automation jobs, tech jobs remote, AI engineering careers, join AI team, innovation jobs, remote AI positions, automation engineer jobs, AI developer careers',
  alternates: { canonical: 'https://autom8ionlab.com/join-us' },
  openGraph: {
    title: 'Careers at Autom8ion Lab',
    description:
      'Engineering roles building custom AI, automation, and compliance systems. Remote-friendly. US and Canada.',
    url: 'https://autom8ionlab.com/join-us',
    images: [{
      url: 'https://autom8ionlab.com/api/og?title=Careers+at+Autom8ion+Lab&section=Company',
      width: 1200,
      height: 630,
      alt: 'Careers at Autom8ion Lab',
    }],
  },
  twitter: {
    title: 'Careers at Autom8ion Lab',
    description:
      'Engineering roles building custom AI, automation, and compliance systems. Remote-friendly. US and Canada.',
    images: ['https://autom8ionlab.com/api/og?title=Careers+at+Autom8ion+Lab&section=Company'],
  },
};

export default function Page() {
  return <CareersClient />;
}
