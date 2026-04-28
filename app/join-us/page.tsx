import type { Metadata } from 'next';
import CareersClient from './CareersClient';

export const metadata: Metadata = {
  title: 'Careers at Autom8ion Lab | Build the Future of AI & Automation',
  description:
    'Join our team of innovators, engineers, and visionaries who are transforming how businesses operate through intelligent automation and custom AI solutions.',
  keywords:
    'AI careers, automation jobs, tech jobs remote, AI engineering careers, join AI team, innovation jobs, remote AI positions, automation engineer jobs, AI developer careers',
  alternates: { canonical: 'https://autom8ionlab.com/join-us' },
  openGraph: {
    title: 'Careers at Autom8ion Lab | Build the Future of AI & Automation',
    description:
      'Join our team of innovators, engineers, and visionaries who are transforming how businesses operate through intelligent automation and custom AI solutions.',
    url: 'https://autom8ionlab.com/join-us',
    images: [{ url: 'https://autom8ionlab.com/logo/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Careers at Autom8ion Lab | Build the Future of AI & Automation',
    description:
      'Join our team of innovators, engineers, and visionaries who are transforming how businesses operate through intelligent automation and custom AI solutions.',
  },
};

export default function Page() {
  return <CareersClient />;
}
