import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Schedule a Capability Briefing',
  description:
    'No-pressure briefing. We will walk through your compliance environment, your top automation, software, or AI priority, and tell you whether we are a fit.',
  keywords:
    'schedule capability briefing, federal vendor briefing, automation consultation, AI strategy session, free consultation',
  alternates: { canonical: 'https://autom8ionlab.com/schedule-consultation' },
  openGraph: {
    title: 'Schedule a Capability Briefing | Autom8ion Lab',
    description:
      'No-pressure briefing on your compliance environment and your top automation, software, or AI priority.',
    url: 'https://autom8ionlab.com/schedule-consultation',
    images: [{ url: 'https://autom8ionlab.com/logo/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Schedule a Capability Briefing | Autom8ion Lab',
    description:
      'No-pressure briefing on your compliance environment and your top automation, software, or AI priority.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://autom8ionlab.com/' },
    { '@type': 'ListItem', position: 2, name: 'Schedule a Briefing', item: 'https://autom8ionlab.com/schedule-consultation' },
  ],
};

export default function BookingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow delay-700"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <img src="/logo/logo.png" alt="Autom8ion Lab Logo" className="w-20 h-20 object-contain mx-auto mb-8" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Schedule a
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Capability Briefing</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            No-pressure 30-minute briefing. We&apos;ll walk through your compliance environment, your top automation, software, or AI priority, and tell you whether we&apos;re a fit — even if the answer is &quot;you need a different vendor.&quot;
          </p>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4 text-center">Book a Time</h2>
              <p className="text-slate-300 text-center mb-8">
                Select a time that works best for you to discuss your environment, your compliance posture, and the work you&apos;d like to scope.
              </p>
              <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600/50">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/booking/UJkdnKQqWn85wjSSrKoI"
                  style={{ width: '100%', border: 'none', overflow: 'hidden', height: '1200px' }}
                  scrolling="no"
                  id="UJkdnKQqWn85wjSSrKoI_inline"
                  title="Schedule a capability briefing"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-6">
              What to expect on your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> capability briefing</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: '1', title: 'Environment & Compliance Scoping', body: "We'll walk through your tech stack, your compliance frameworks (CMMC, NIST 800-171, HIPAA, SOC 2, FedRAMP), and the controls your environment has to satisfy." },
              { n: '2', title: 'Priority Identification', body: 'We pin down the single highest-leverage software, automation, or AI initiative we could ship for you, and what it would take.' },
              { n: '3', title: 'Honest Fit Assessment', body: "We tell you whether we're the right fit — even if the answer is to hand you a referral to a partner C3PAO, RPO, or specialist firm." },
            ].map((step, i) => (
              <div key={i} className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.n}</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">{step.title}</h4>
                <p className="text-slate-400 text-sm">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  );
}
