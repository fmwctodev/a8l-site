import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import CTA from '@/app/_components/CTA';

export type IndustryFaq = { question: string; answer: string };

export type IndustryPageData = {
  slug: string;
  breadcrumbName: string;
  h1: string;
  heroSubhead: string;
  definitionParagraph: string;
  buyerProfile: string;
  whatWeBuild: string[];
  complianceConsiderations: { name: string; desc: string }[];
  faqs: IndustryFaq[];
  scenarios: string[];
  scenarioCta?: string;
  /** Optional disclosure block (used on /industries/defense for the RPO/C3PAO note). */
  disclosure?: { heading: string; body: string };
  /** Tailwind gradient color tokens for the hero. */
  heroAccent: string;
  iconAccent: string;

  /* ---------- Optional deep-content sections (LOCKED v3 §"Industry Page Specifications") ---------- */

  /** Problem framing — 150–250 words explaining the gap this industry's buyers face. */
  problemFraming?: { heading: string; paragraphs: string[] };
  /** Expanded What-We-Build sections with prose under each line item. Used in addition to (or instead of) the simple bullet list. */
  whatWeBuildDetailed?: { name: string; body: string }[];
  /** Named integrations specific to this vertical (Procore, Epic, Yardi, Fiserv, etc.). */
  namedIntegrations?: { category: string; items: string[] }[];
};

export default function IndustryPageLayout({ data }: { data: IndustryPageData }) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://autom8ionlab.com/' },
      { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://autom8ionlab.com/#industries' },
      {
        '@type': 'ListItem',
        position: 3,
        name: data.breadcrumbName,
        item: `https://autom8ionlab.com/industries/${data.slug}`,
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.h1,
    serviceType: 'Custom software development, AI, and workflow automation',
    provider: { '@type': 'Organization', name: 'Autom8ion Lab', url: 'https://autom8ionlab.com' },
    areaServed: { '@type': 'Country', name: 'United States' },
    audience: { '@type': 'BusinessAudience', audienceType: data.buyerProfile.replace(/^Buyer profile: /i, '') },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className={`relative min-h-[60vh] bg-gradient-to-br ${data.heroAccent} overflow-hidden`}>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16">
          <nav className="text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-cyan-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/#industries" className="hover:text-cyan-400">Industries</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-300">{data.breadcrumbName}</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{data.h1}</h1>
          <p className="text-xl text-slate-300 max-w-4xl leading-relaxed">{data.heroSubhead}</p>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-slate-300 leading-relaxed text-lg">{data.definitionParagraph}</p>
          <p className="text-slate-400 leading-relaxed mt-6">
            <strong className="text-white">Buyer profile:</strong> {data.buyerProfile}
          </p>
        </div>
      </section>

      {data.problemFraming && (
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              {data.problemFraming.heading}
            </h2>
            <div className="space-y-5 text-slate-300 leading-relaxed text-lg">
              {data.problemFraming.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            What we build for {data.breadcrumbName.toLowerCase()}
          </h2>

          {data.whatWeBuildDetailed ? (
            <div className="space-y-6">
              {data.whatWeBuildDetailed.map((section) => (
                <div
                  key={section.name}
                  className="bg-slate-900/40 border border-slate-800 rounded-lg p-6"
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircle2
                      className={`w-6 h-6 ${data.iconAccent} flex-shrink-0 mt-1`}
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{section.name}</h3>
                      <p className="text-slate-300 leading-relaxed">{section.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <ul className="space-y-4 text-slate-300">
              {data.whatWeBuild.map((item) => (
                <li key={item} className="flex items-start space-x-3">
                  <CheckCircle2 className={`w-6 h-6 ${data.iconAccent} flex-shrink-0 mt-0.5`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {data.namedIntegrations && (
        <section className="py-20 bg-slate-950">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Named systems we integrate with
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {data.namedIntegrations.map((cat) => (
                <div
                  key={cat.category}
                  className="bg-slate-900/40 border border-slate-800 rounded-lg p-6"
                >
                  <h3 className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-3">
                    {cat.category}
                  </h3>
                  <ul className="space-y-1.5 text-slate-300">
                    {cat.items.map((item) => (
                      <li key={item} className="text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Compliance considerations</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.complianceConsiderations.map((c) => (
              <div key={c.name} className="bg-slate-900/40 border border-slate-800 rounded-lg p-5">
                <div className="font-semibold text-white">{c.name}</div>
                <div className="text-slate-400 text-sm mt-1">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {data.disclosure && (
        <section className="py-12 bg-amber-950/20 border-y border-amber-900/30">
          <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-xl font-semibold text-amber-300 mb-3">{data.disclosure.heading}</h3>
            <p className="text-slate-300 leading-relaxed">{data.disclosure.body}</p>
          </div>
        </section>
      )}

      <section className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">{data.breadcrumbName} FAQ</h2>
          <div className="space-y-6">
            {data.faqs.map((q) => (
              <div key={q.question} className="bg-slate-900/40 border border-slate-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{q.question}</h3>
                <p className="text-slate-300 leading-relaxed">{q.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Representative engagements</h2>
          <ul className="space-y-4 text-slate-300">
            {data.scenarios.map((s) => (
              <li key={s} className="flex items-start space-x-3">
                <ArrowRight className={`w-5 h-5 ${data.iconAccent} flex-shrink-0 mt-1`} />
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-400 mt-8 leading-relaxed">
            We provide additional past performance details and references on a need-to-know basis after a
            qualifying conversation. See our{' '}
            <Link href="/capability-statement" className="text-cyan-400 hover:underline">
              capability statement for full federal registrations
            </Link>
            .
          </p>
          {data.scenarioCta && (
            <div className="mt-10">
              <Link
                href="/schedule-consultation"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-600 transition-colors"
              >
                <span>{data.scenarioCta}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
