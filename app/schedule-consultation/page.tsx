import type { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import { BreadcrumbSchema } from '@/app/_components/Schema';

export const metadata: Metadata = {
  title: 'Schedule a Consultation',
  description:
    "Book a free 30-minute strategy call. We'll scope your custom AI, automation, or compliance project and tell you whether we're the right fit.",
  keywords:
    'schedule capability briefing, federal vendor briefing, automation consultation, AI strategy session, free consultation',
  alternates: { canonical: 'https://autom8ionlab.com/schedule-consultation' },
  openGraph: {
    title: 'Schedule a Consultation | Autom8ion Lab',
    description:
      "Book a free 30-minute strategy call. We'll scope your custom AI, automation, or compliance project and tell you whether we're the right fit.",
    url: 'https://autom8ionlab.com/schedule-consultation',
    images: [{
      url: 'https://autom8ionlab.com/api/og?title=Schedule+a+Consultation&section=Contact',
      width: 1200,
      height: 630,
      alt: 'Schedule a Consultation with Autom8ion Lab',
    }],
  },
  twitter: {
    title: 'Schedule a Consultation | Autom8ion Lab',
    description:
      "Book a free 30-minute strategy call. We'll scope your custom AI, automation, or compliance project and tell you whether we're the right fit.",
    images: ['https://autom8ionlab.com/api/og?title=Schedule+a+Consultation&section=Contact'],
  },
};

export default function BookingPage() {
  return (
    <>
      <BreadcrumbSchema
        trail={[
          { name: 'Home', href: '/' },
          { name: 'Schedule a Briefing', href: '/schedule-consultation' },
        ]}
      />

      <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl hidden sm:block animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl hidden sm:block animate-pulse-slow delay-700"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <Image src="/logo/logo-160.webp" alt="Autom8ion Lab Logo" width={160} height={160} sizes="80px" className="w-20 h-20 object-contain mx-auto mb-8" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Schedule a
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Capability Briefing</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            No-pressure 30-minute briefing. We&apos;ll walk through your compliance environment, your top automation, software, or AI priority, and tell you whether we&apos;re a fit — even if the answer is &quot;you need a different vendor.&quot;
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* overflow-x-auto is a safety net: if the third-party booking widget
              enforces a min-width, the user gets horizontal scroll inside the
              card rather than a broken page layout. The previous nested
              bg-slate-700/50 p-8 wrapper has been collapsed — at 375px it was
              eating ~64px of horizontal room the calendar grid needed. */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-x-auto">
            <div className="p-4 sm:p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white mb-4 text-center">Book a Time</h2>
              <p className="text-slate-300 text-center mb-6 md:mb-8">
                Select a time that works best for you to discuss your environment, your compliance posture, and the work you&apos;d like to scope.
              </p>
              {/* Booking widget hosted on os.autom8ionlab.com — replaces the
                  legacy GoHighLevel iframe. The widget script reads its
                  data-* attributes to mount the inline calendar into the
                  target div. */}
              <div id="a8l-booking" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              What to expect on your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> capability briefing</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
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

      {/* a8l booking widget loader. Reads its own data-* attributes to mount
          the inline calendar into #a8l-booking above. afterInteractive so the
          calendar paints as soon as hydration finishes — this page exists
          specifically to book a call, so we don't want lazyOnload here. */}
      <Script
        src="https://os.autom8ionlab.com/booking-widget.js"
        strategy="afterInteractive"
        data-base-url="https://os.autom8ionlab.com"
        data-calendar-slug="capability-briefing"
        data-mode="inline"
        data-target="#a8l-booking"
      />
    </>
  );
}
