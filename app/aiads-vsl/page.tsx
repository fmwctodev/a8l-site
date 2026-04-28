import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI-Powered Advertising Solutions',
  description: 'Transform your advertising with AI-powered solutions from Autom8ion Lab.',
  alternates: { canonical: 'https://autom8ionlab.com/aiads-vsl' },
  robots: 'noindex, nofollow',
};

export default function Page() {
  return (
    <>

      <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                    AI-Powered Advertising Solutions
                  </h1>
                  <p className="text-xl text-slate-300 mb-8">
                    Transform your advertising with cutting-edge AI technology.
                  </p>
                  <Link href="/get-in-touch"
                    className="inline-block bg-gradient-to-r from-blue-600 to-sky-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-sky-600 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </section>
    </>
  );
}
