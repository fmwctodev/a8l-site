import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import CTA from '@/app/_components/CTA';
import {
  Reveal,
  Stagger,
  StaggerItem,
  PremiumCard,
  MagneticButton,
  ComparisonTable,
  type ComparisonRow,
} from './ui';

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

  /**
   * Optional AEO definition block — one or two sentences in the
   * "AI automation for [industry] is [concise definition]. For [buyer
   * persona], [specific pain it solves]." pattern. Rendered as a
   * styled callout in the first 200 words of the page so AI engines
   * can lift it as a self-contained answer. Per Implementation Plan
   * §6.1.
   */
  definition?: string;

  /* ---------- Optional deep-content sections (LOCKED v3 §"Industry Page Specifications") ---------- */

  /** Problem framing — 150–250 words explaining the gap this industry's buyers face. */
  problemFraming?: { heading: string; paragraphs: string[] };
  /** Expanded What-We-Build sections with prose under each line item. Used in addition to (or instead of) the simple bullet list. */
  whatWeBuildDetailed?: { name: string; body: string }[];
  /** Named integrations specific to this vertical (Procore, Epic, Yardi, Fiserv, etc.). */
  namedIntegrations?: { category: string; items: string[] }[];

  /**
   * Optional ComparisonTable. Per Implementation Plan §6.3 — every key page
   * should expose a "X vs Y vs Z" structure for AI engines to lift
   * verbatim. Headers tuple: [dimensionLabel, primaryColumn, alt1, alt2].
   * Use the existing ComparisonRow type from `app/_components/ui/ComparisonTable.tsx`.
   */
  comparison?: {
    heading?: string;
    headers: [string, string, string, string];
    rows: ComparisonRow[];
  };
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

      {/* Hero */}
      <section className={`relative min-h-[60vh] bg-gradient-to-br ${data.heroAccent} overflow-hidden`}>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16">
          <Reveal>
            <nav className="text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-cyan-400">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/#industries" className="hover:text-cyan-400">Industries</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-300">{data.breadcrumbName}</span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{data.h1}</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xl text-slate-300 max-w-4xl leading-relaxed">{data.heroSubhead}</p>
          </Reveal>
        </div>
      </section>

      {/* Definition + buyer profile */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-6">
          {data.definition && (
            <Reveal>
              <section className="definition-block">
                <p className="lead">{data.definition}</p>
              </section>
            </Reveal>
          )}
          <Reveal delay={data.definition ? 0.05 : 0}>
            <p className="text-slate-300 leading-relaxed text-lg">{data.definitionParagraph}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-400 leading-relaxed mt-6">
              <strong className="text-white">Buyer profile:</strong> {data.buyerProfile}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Problem framing (optional) */}
      {data.problemFraming && (
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-6 relative">
            <div
              aria-hidden="true"
              className="absolute left-0 top-8 bottom-8 w-1 rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 animate-pulse-glow shadow-glow-cyan"
            />
            <div className="pl-8">
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                  {data.problemFraming.heading}
                </h2>
              </Reveal>
              <Stagger className="space-y-5 text-slate-300 leading-relaxed text-lg" staggerDelay={0.08}>
                {data.problemFraming.paragraphs.map((p, i) => (
                  <StaggerItem key={i} as="div">
                    <p>{p}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>
      )}

      {/* What we build */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              What we build for {data.breadcrumbName.toLowerCase()}
            </h2>
          </Reveal>

          {data.whatWeBuildDetailed ? (
            <Stagger className="space-y-6" staggerDelay={0.08}>
              {data.whatWeBuildDetailed.map((section) => (
                <StaggerItem key={section.name}>
                  <PremiumCard variant="hover" className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2
                        className={`w-6 h-6 ${data.iconAccent} flex-shrink-0 mt-1`}
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{section.name}</h3>
                        <p className="text-slate-300 leading-relaxed">{section.body}</p>
                      </div>
                    </div>
                  </PremiumCard>
                </StaggerItem>
              ))}
            </Stagger>
          ) : (
            <Stagger className="space-y-4 text-slate-300" staggerDelay={0.05}>
              {data.whatWeBuild.map((item) => (
                <StaggerItem key={item} as="li">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className={`w-6 h-6 ${data.iconAccent} flex-shrink-0 mt-0.5`} />
                    <span>{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          )}
        </div>
      </section>

      {/* Named integrations (optional) */}
      {data.namedIntegrations && (
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-6">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Named systems we integrate with
              </h2>
            </Reveal>
            <Stagger className="grid sm:grid-cols-2 gap-6" staggerDelay={0.07}>
              {data.namedIntegrations.map((cat) => (
                <StaggerItem key={cat.category}>
                  <PremiumCard variant="hover" className="p-6 h-full">
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
                  </PremiumCard>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* Compliance considerations */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Compliance considerations</h2>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-4" staggerDelay={0.04}>
            {data.complianceConsiderations.map((c) => (
              <StaggerItem key={c.name}>
                <PremiumCard variant="hover" className="p-5 h-full">
                  <div className="font-semibold text-white">{c.name}</div>
                  <div className="text-slate-400 text-sm mt-1">{c.desc}</div>
                </PremiumCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Required disclosure (Defense-only) — wrap in pulse-glow shell */}
      {data.disclosure && (
        <section className="py-12 relative">
          <div className="max-w-4xl mx-auto px-6">
            <Reveal>
              <div className="relative bg-amber-950/20 border-y border-amber-900/40 rounded-lg p-8 overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 border-y border-amber-500/30 animate-pulse-glow rounded-lg pointer-events-none"
                />
                <h3 className="relative text-xl font-semibold text-amber-300 mb-3">
                  {data.disclosure.heading}
                </h3>
                <p className="relative text-slate-300 leading-relaxed">{data.disclosure.body}</p>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Comparison table — "Autom8ion Lab vs alternative-A vs alternative-B"
          per Implementation Plan §6.3. Each industry defines its own
          dimensions; the existing ComparisonTable primitive renders row-by-row
          with prefers-reduced-motion respect. */}
      {data.comparison && (
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                {data.comparison.heading ?? `How we compare for ${data.breadcrumbName}`}
              </h2>
              <p className="text-slate-400 max-w-3xl mb-10 leading-relaxed">
                Specific to how {data.breadcrumbName.toLowerCase()} buyers actually evaluate. We
                don&apos;t hide the trade-offs — we tell you when one of the alternatives is the
                right call.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <ComparisonTable
                headers={data.comparison.headers}
                rows={data.comparison.rows}
                primaryColumnClass="text-emerald-400"
              />
            </Reveal>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              {data.breadcrumbName} FAQ
            </h2>
          </Reveal>
          <Stagger className="space-y-5" staggerDelay={0.06}>
            {data.faqs.map((q) => (
              <StaggerItem key={q.question}>
                <PremiumCard variant="hover" className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{q.question}</h3>
                  <p className="text-slate-300 leading-relaxed">{q.answer}</p>
                </PremiumCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Representative engagements */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Representative engagements
            </h2>
          </Reveal>
          <Stagger className="space-y-4" staggerDelay={0.07}>
            {data.scenarios.map((s) => (
              <StaggerItem key={s}>
                <PremiumCard variant="hover" className="p-5">
                  <div className="flex items-start space-x-3">
                    <ArrowRight className={`w-5 h-5 ${data.iconAccent} flex-shrink-0 mt-1`} />
                    <span className="text-slate-300 leading-relaxed">{s}</span>
                  </div>
                </PremiumCard>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <p className="text-slate-400 mt-8 leading-relaxed">
              We provide additional past performance details and references on a need-to-know basis after
              a qualifying conversation. See our{' '}
              <Link href="/capability-statement" className="text-cyan-400 link-underline">
                capability statement for full federal registrations
              </Link>
              .
            </p>
          </Reveal>

          {data.scenarioCta && (
            <Reveal delay={0.15}>
              <div className="mt-10">
                <MagneticButton href="/schedule-consultation" variant="primary">
                  {data.scenarioCta}
                  <ArrowRight className="w-5 h-5" />
                </MagneticButton>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
