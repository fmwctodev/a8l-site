import type { Metadata } from 'next';
import Script from 'next/script';
import { BreadcrumbSchema } from '@/app/_components/Schema';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Reveal, Stagger, StaggerItem, PremiumCard } from '@/app/_components/ui';

export const metadata: Metadata = {
  title: { absolute: 'Contact Autom8ion Lab' },
  description:
    'Talk to Autom8ion Lab about your custom AI, automation, or LLM project. Free strategy call. Most projects launch in 30 days.',
  keywords:
    'contact AI company, custom project quote, AI solutions contact, automation consultation, business inquiry, AI development quote, custom automation contact, project discussion',
  alternates: { canonical: 'https://autom8ionlab.com/get-in-touch' },
  openGraph: {
    title: 'Contact Autom8ion Lab',
    description:
      'Talk to Autom8ion Lab about your custom AI, automation, or LLM project. Free strategy call. Most projects launch in 30 days.',
    url: 'https://autom8ionlab.com/get-in-touch',
    images: [{
      url: 'https://autom8ionlab.com/api/og?title=Contact+Autom8ion+Lab&section=Contact',
      width: 1200,
      height: 630,
      alt: 'Contact Autom8ion Lab',
    }],
  },
  twitter: {
    title: 'Contact Autom8ion Lab',
    description:
      'Talk to Autom8ion Lab about your custom AI, automation, or LLM project. Free strategy call. Most projects launch in 30 days.',
    images: ['https://autom8ionlab.com/api/og?title=Contact+Autom8ion+Lab&section=Contact'],
  },
};

// ContactPage schema points back to the sitewide Organization @id rather
// than re-declaring contact info — keeps the entity graph consistent with
// what's already in app/layout.tsx via OrganizationSchema.
const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  url: 'https://autom8ionlab.com/get-in-touch',
  mainEntity: { '@id': 'https://autom8ionlab.com/#organization' },
};

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: 'mailto:info@autom8ionlab.com',
    description: 'Response within one business day',
  },
  { icon: Phone, title: 'Call Us', details: 'tel:+18555086062', description: 'Mon-Fri, 9AM-6PM EST' },
  {
    icon: MapPin,
    title: 'Locations',
    details: 'Plant City, FL · Montreal, QC',
    description: 'Cross-border engagements supported',
  },
  { icon: Clock, title: 'Response Time', details: '< 24 hours', description: 'Federal procurement-ready' },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <BreadcrumbSchema
        trail={[
          { name: 'Home', href: '/' },
          { name: 'Contact', href: '/get-in-touch' },
        ]}
      />

      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow delay-700"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <img src="/logo/logo.png" alt="Autom8ion Lab Logo" className="w-20 h-20 object-contain mx-auto mb-8" />
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Talk to Us About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Your Project</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Tell us about your environment, your compliance requirements, and your top automation, software, or AI priority. We&apos;ll respond within one business day with a capability assessment and proposed next steps.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.07}>
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              const isLink = info.details.startsWith('mailto:') || info.details.startsWith('tel:');
              return (
                <StaggerItem key={index}>
                  <PremiumCard variant="hover" className="p-6 text-center group h-full">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-glow-cyan transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                    {isLink ? (
                      <a href={info.details} className="text-cyan-400 font-medium mb-1 hover:text-cyan-300 transition-colors block link-underline w-fit mx-auto">
                        {info.details.replace('mailto:', '').replace('tel:', '').replace('+18555086062', '+1 855-508-6062')}
                      </a>
                    ) : (
                      <p className="text-cyan-400 font-medium mb-1">{info.details}</p>
                    )}
                    <p className="text-slate-400 text-sm">{info.description}</p>
                  </PremiumCard>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Custom Project</span>
            </h2>
            <p className="text-xl text-slate-300">
              Tell us about your automation needs and we&apos;ll create a custom solution for your business.
            </p>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
            <div className="min-h-[864px]">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/SNkHAghEAJ6mS7wUtBep"
                style={{ width: '100%', height: '864px', border: 'none', borderRadius: '3px' }}
                id="inline-SNkHAghEAJ6mS7wUtBep"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-form-name="Autom8ion Lab Site Contact Form"
                data-height="864"
                data-layout-iframe-id="inline-SNkHAghEAJ6mS7wUtBep"
                data-form-id="SNkHAghEAJ6mS7wUtBep"
                title="Autom8ion Lab Site Contact Form"
              />
            </div>
          </div>
        </div>
      </section>

      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  );
}
