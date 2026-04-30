import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  BreadcrumbSchema,
  ServiceSchema,
  FAQPageSchema,
} from '@/app/_components/Schema';
import CTA from '@/app/_components/CTA';
import RelatedSolutions from '@/app/_components/RelatedSolutions';
import {
  Reveal,
  Stagger,
  StaggerItem,
  PremiumCard,
  MagneticButton,
  ComparisonTable,
  type ComparisonRow,
} from '@/app/_components/ui';

export const metadata: Metadata = {
  title: {
    absolute: 'Autom8ion Lab vs Generic AI Consultancy — A Practical Comparison',
  },
  description:
    'Both Autom8ion Lab and a generic AI consultancy can help you deploy AI. The difference is whether you get an engineering team that owns the build end-to-end or an advisory team that hands implementation back to you.',
  keywords:
    'autom8ion lab vs ai consultancy, ai engineering vs consulting, ai implementation partner, sdvosb ai engineering, veteran-owned ai shop, big 4 ai consultancy alternative, custom ai engineering firm',
  alternates: {
    canonical:
      'https://autom8ionlab.com/compare/autom8ion-lab-vs-generic-ai-consultancy',
  },
  openGraph: {
    title: 'Autom8ion Lab vs Generic AI Consultancy — A Practical Comparison',
    description:
      'The difference between an engineering team that owns the build and an advisory team that hands implementation back to you. We are SDVOSB-pending engineers, not body-shop consultants.',
    url: 'https://autom8ionlab.com/compare/autom8ion-lab-vs-generic-ai-consultancy',
    images: [
      {
        url: 'https://autom8ionlab.com/api/og?title=Autom8ion+Lab+vs+Generic+AI+Consultancy&section=Compare',
        width: 1200,
        height: 630,
        alt: 'Autom8ion Lab vs Generic AI Consultancy',
      },
    ],
  },
  twitter: {
    title: 'Autom8ion Lab vs Generic AI Consultancy — A Practical Comparison',
    description:
      'Engineering shop vs advisory shop. We are SDVOSB-pending engineers, not body-shop consultants.',
    images: [
      'https://autom8ionlab.com/api/og?title=Autom8ion+Lab+vs+Generic+AI+Consultancy&section=Compare',
    ],
  },
};

/* -------------------------------------------------- */
/* Page data                                          */
/* -------------------------------------------------- */

const comparisonRows: ComparisonRow[] = [
  {
    label: 'Deliverable type',
    values: [
      'A working production system. Source code, infrastructure-as-code, runbooks, and the documentation package — handed over in a working state on a defined date.',
      'A strategy deck, a roadmap, and a vendor-selection recommendation. The implementation is your team’s problem, or the consultancy will quote a separate body-shop engagement to staff it.',
      'A multi-phase digital transformation program. Process maps, change management, vendor procurement, and a board-ready narrative. Implementation is layered in via partner firms or your in-house team.',
    ],
  },
  {
    label: 'Engineering ownership',
    values: [
      'We own the build end-to-end. Senior engineers write the code, deploy the infrastructure, and stay on through go-live. You are not assembling the team — we are the team.',
      'Advisory by design. Most engagements end at the recommendation; some include a small "pilot" but production hand-off is rare. The deliverable is the deck.',
      'Project leadership and program management. The actual engineering is sub-contracted, off-shored, or handed to your IT organization to staff.',
    ],
  },
  {
    label: 'Compliance documentation',
    values: [
      'SOC 2 evidence packages, HIPAA SSPs, CMMC POA&Ms, and audit-ready control narratives shipped with the build. Mapped to the system as it actually runs.',
      'Compliance recommendations and gap reports. Documentation is generic; control implementation is your team’s problem.',
      'Compliance program leadership. Frameworks, governance, and policy templates. Control engineering is sub-contracted.',
    ],
  },
  {
    label: 'Time to deploy',
    values: [
      '30 to 90 days from kickoff to a working production system for a typical first engagement. Faster on narrow scopes; longer when full SOC 2 / HIPAA / CMMC scope is in play.',
      '6 to 12 weeks to a recommendation deck. Implementation timeline is determined by whoever does the implementation work — often 6+ months after the deck lands.',
      '12 to 24+ months on enterprise digital transformation programs. Multi-phase, multi-vendor, board-reported.',
    ],
  },
  {
    label: 'Total cost shape',
    values: [
      'Fixed-fee or milestone-based engagements. Most first projects land between $50k and $300k. Predictable; the price covers the working system, not the strategy doc.',
      'Time-and-materials or fixed-fee strategy engagements. Often $40k-$150k for the deck; production implementation is a separate line item.',
      'Multi-million-dollar programs typical at this tier. Right answer when the scope justifies the spend; over-engineered for a 30-day pilot.',
    ],
  },
  {
    label: 'Federal contracting credentials',
    values: [
      'SDVOSB Pending, veteran-owned. UEI YY2DR3KSENH7. CAGE 9YCS7. Eligible for SDVOSB set-asides and the federal small-business socioeconomic categories that come with them.',
      'Varies. Most generic AI consultancies are large-business or unspecified socioeconomic status; not eligible for small-business set-asides.',
      'Large business. Excellent on past-performance and bonding capacity; not eligible for small-business set-asides.',
    ],
  },
  {
    label: 'Best fit',
    values: [
      'You need a working AI or automation system in 30-90 days, with the SDVOSB / SOC 2 / HIPAA / CMMC documentation that proves it. You want one team that builds and documents at the same time.',
      'You have a strong in-house engineering team and need outside strategy or vendor-selection help. You will own the implementation.',
      'Board-level digital transformation programs with multi-year scope, multiple vendors, and program-management complexity that justifies the overhead.',
    ],
  },
];

const faqs = [
  {
    question: 'What does "engineering shop, not body shop" actually mean?',
    answer:
      'A body shop staffs your project with whoever is on the bench, bills hourly, and walks when the contract ends. An engineering shop owns the build end-to-end on a fixed scope, ships a working system, and hands over the source and documentation. We are the second one. The senior engineer on the discovery call is the same engineer writing the code on day 30.',
  },
  {
    question: 'Are you really cheaper than a Big-4 consultancy?',
    answer:
      'For a 30-90 day production engagement, yes — by an order of magnitude. Big-4 consultancies are excellent at multi-year, multi-vendor digital transformation programs where the program-management overhead is justified. They are not the right shape for a focused build that needs to be live in a quarter. Different tool for a different job.',
  },
  {
    question: 'Do you partner with consultancies or compete with them?',
    answer:
      'Both. We have shipped engagements where a Big-4 consultancy owned the strategy and program management, and we owned the engineering build inside their program. We have also displaced consultancies whose recommendation was "you need a custom build" by being the firm that actually builds it. We are flexible on shape; we are not flexible on owning the engineering work end-to-end.',
  },
  {
    question: 'What does "SDVOSB Pending" mean for federal buyers?',
    answer:
      'SDVOSB stands for Service-Disabled Veteran-Owned Small Business. The certification process runs through the Veterans Small Business Certification (VetCert) at the SBA. "Pending" means the application is in process; certified status unlocks SDVOSB set-asides and sole-source authority on federal contracts. Our UEI is YY2DR3KSENH7 and our CAGE is 9YCS7 — already issued and ready for federal contracting work.',
  },
  {
    question: 'Can you handle the strategy work too, or only the build?',
    answer:
      'We do the strategy work that is necessary to scope the build correctly — current-state assessment, target-state architecture, vendor and stack selection, and the documentation package. We do not do strategy as a stand-alone deliverable. If you need a year-long enterprise strategy program with no implementation in scope, a generic consultancy is a better fit. If you need a working system in 30-90 days with the strategy work as part of the build, that is what we do every day.',
  },
];

/* -------------------------------------------------- */
/* Page                                               */
/* -------------------------------------------------- */

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        trail={[
          { name: 'Home', href: '/' },
          { name: 'Compare', href: '/compare/autom8ion-lab-vs-generic-ai-consultancy' },
          {
            name: 'Autom8ion Lab vs Generic AI Consultancy',
            href: '/compare/autom8ion-lab-vs-generic-ai-consultancy',
          },
        ]}
      />
      <ServiceSchema
        name="Autom8ion Lab vs Generic AI Consultancy — Engineering Shop Comparison"
        serviceType="Custom AI engineering, AI agent development, SDVOSB engineering services, end-to-end AI implementation, SOC 2 / HIPAA / CMMC documentation"
        url="https://autom8ionlab.com/compare/autom8ion-lab-vs-generic-ai-consultancy"
        industry="All"
      />
      <FAQPageSchema faqs={faqs} />

      {/* HERO */}
      <section className="relative min-h-[55vh] bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-950 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-16">
          <Reveal>
            <nav className="text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-cyan-400">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-300">Compare</span>
              <span className="mx-2">/</span>
              <span className="text-slate-300">Autom8ion Lab vs Generic AI Consultancy</span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Autom8ion Lab vs Generic AI Consultancy — A Practical Comparison
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xl text-slate-300 max-w-4xl leading-relaxed">
              The decision is whether you want a deck and a roadmap or a working system in 30 to
              90 days. We are SDVOSB-pending engineers, not body-shop consultants — here is the
              honest comparison against the generic AI consultancy and the Big-4 program shop.
            </p>
          </Reveal>
        </div>
      </section>

      {/* AEO DEFINITION BLOCK */}
      <section className="py-12 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal>
            <section className="definition-block">
              <p className="lead">
                <strong>Both Autom8ion Lab and a generic AI consultancy can help you deploy AI.</strong>{' '}
                The difference is whether you get an engineering team that owns the build end-to-end
                or an advisory team that hands implementation back to you. We are SDVOSB-pending
                engineers, not body-shop consultants.
              </p>
            </section>
          </Reveal>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Side-by-side comparison
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8 max-w-3xl">
              Three vendor categories show up when companies start looking for AI implementation
              help. Each is the right answer for someone — but they solve different problems.
            </p>
          </Reveal>
          <ComparisonTable
            headers={[
              'Dimension',
              'Autom8ion Lab (engineering shop)',
              'Generic AI consultancy (advisory)',
              'Big-4 consultancy (process)',
            ]}
            rows={comparisonRows}
          />
        </div>
      </section>

      {/* WHEN GENERIC CONSULTANCY WINS */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              When a generic AI consultancy is the right choice
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              Strategy-only engagements are the right answer for a specific kind of buyer. We
              will tell you so on the call.
            </p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-4" staggerDelay={0.06}>
            {[
              {
                name: 'You have a strong in-house engineering team',
                body:
                  'Your team can ship the build once they know what to build. You need outside perspective on architecture, vendor selection, or AI/ML strategy — not implementation hands.',
              },
              {
                name: 'You need vendor-selection coverage',
                body:
                  'You are evaluating 12 model providers, three RAG frameworks, and four vector databases. A neutral advisory shop with a stable of vendor relationships can shortcut the bake-off.',
              },
              {
                name: 'You want strategy without commitment',
                body:
                  'You are still in the "should we do this at all?" phase. A 6-week strategy engagement at a fixed fee gives you a board-ready answer without scoping a build.',
              },
              {
                name: 'The deliverable IS the deck',
                body:
                  'Some buyers genuinely need the deck — for board approval, for vendor RFPs, for regulatory pre-engagement. That is a legitimate scope, and it is not what we do.',
              },
            ].map((item) => (
              <StaggerItem key={item.name}>
                <PremiumCard variant="hover" className="p-5 h-full">
                  <h3 className="text-white font-semibold mb-2">{item.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                </PremiumCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* WHEN BIG-4 WINS */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              When a Big-4 consultancy is the right choice
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              Big-4 firms are excellent at the workload they are built for. The question is
              whether your project actually fits that shape.
            </p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-4" staggerDelay={0.06}>
            {[
              {
                name: 'Board-level digital transformation programs',
                body:
                  'Multi-year, multi-vendor, multi-business-unit scope. The program-management overhead and the boardroom relationship are genuinely valuable at that scale.',
              },
              {
                name: 'Multi-vendor coordination',
                body:
                  'You have a SAP migration, a Workday rollout, an Oracle EBS retirement, and an AI program all running in parallel. Big-4 firms are built to run that complexity.',
              },
              {
                name: 'Process and change management at scale',
                body:
                  'You are reorganizing a 5,000-person workforce around new AI-enabled processes. The change-management muscle is the deliverable, not the engineering.',
              },
              {
                name: 'Bonding and past-performance requirements',
                body:
                  'Some Fortune 100 procurement processes effectively require Big-4 incumbents on past-performance grounds. That is a procurement reality we work with rather than fight.',
              },
            ].map((item) => (
              <StaggerItem key={item.name}>
                <PremiumCard variant="hover" className="p-5 h-full">
                  <h3 className="text-white font-semibold mb-2">{item.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                </PremiumCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* WHEN AUTOM8ION WINS */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              When Autom8ion Lab is the right choice
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              These are the signals that show up on calls right before a buyer signs an
              engagement letter with us instead of a consultancy.
            </p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-4" staggerDelay={0.06}>
            {[
              {
                name: 'You need a working system in 30-90 days',
                body:
                  'A deck does not solve the operational problem. A working AI agent, automation, or LLM system in production does. We ship one inside a quarter.',
              },
              {
                name: 'You need the SDVOSB / SOC 2 / HIPAA / CMMC documentation',
                body:
                  'Federal procurement, regulated industries, and customer security questionnaires require the documentation package. We ship it as part of the build, not as a separate engagement.',
              },
              {
                name: 'You want one team that builds and documents at the same time',
                body:
                  'Most consultancies separate the technical build from the paperwork. We do both at the same time. The documentation matches the system because the same engineers wrote both.',
              },
              {
                name: 'You want senior engineer access, not account management',
                body:
                  'You speak directly with the engineers writing the code. No layered account team, no offshore delivery, no tier-1 ticket maze.',
              },
            ].map((item) => (
              <StaggerItem key={item.name}>
                <PremiumCard variant="hover" className="p-5 h-full">
                  <h3 className="text-white font-semibold mb-2">{item.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                </PremiumCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* HOW TO EVALUATE */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              How to evaluate which fits your use case
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              Five questions that separate a $100k strategy engagement, a $500k engineering
              build, and a $5M digital transformation program. Answer them honestly first.
            </p>
          </Reveal>
          <ol className="numbered-process">
            <li>
              <h4>What is the deliverable on the last day of the engagement?</h4>
              <p>
                A working production system? A strategy deck? A multi-year program plan? The
                answer determines which vendor category you are actually buying from.
              </p>
            </li>
            <li>
              <h4>Who owns the implementation?</h4>
              <p>
                If it is your team, you need strategy. If it is the vendor’s team, you need an
                engineering shop. If it is a coalition of three vendors, you need program
                management.
              </p>
            </li>
            <li>
              <h4>What is the timeline?</h4>
              <p>
                30-90 days favors an engineering shop. 6-12 months favors strategy plus
                implementation handoff. 12-24+ months favors program-management at the Big-4
                tier.
              </p>
            </li>
            <li>
              <h4>What does the compliance scope look like?</h4>
              <p>
                If you need SDVOSB set-aside eligibility, SOC 2 evidence, HIPAA SSPs, or CMMC
                POA&amp;Ms shipped with the system, that is engineering work. Strategy decks do
                not satisfy auditors.
              </p>
            </li>
            <li>
              <h4>Who do you actually want in the room?</h4>
              <p>
                Senior engineers building the system, principal consultants advising the
                strategy, or partner-level program managers running a multi-vendor program. They
                are not interchangeable.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Frequently asked questions
            </h2>
          </Reveal>
          <Stagger className="space-y-5" staggerDelay={0.06}>
            {faqs.map((q) => (
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

      {/* INTERNAL LINKS */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Related reading
            </h2>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-3" staggerDelay={0.05}>
            {[
              {
                href: '/solutions/ai-agent-development',
                name: 'AI Agent Development',
                desc: 'Custom AI agents engineered for compliance-aware environments.',
              },
              {
                href: '/solutions/cybersecurity',
                name: 'Cybersecurity & Compliance',
                desc: 'SOC 2, HIPAA, and CMMC engineering shipped with the build.',
              },
              {
                href: '/capability-statement',
                name: 'Capability Statement',
                desc: 'SDVOSB Pending. UEI YY2DR3KSENH7. CAGE 9YCS7.',
              },
              {
                href: '/solutions/custom-llm-systems',
                name: 'Custom LLM Systems',
                desc: 'Private, zero-retention LLM infrastructure for sensitive data.',
              },
            ].map((it) => (
              <StaggerItem key={it.href}>
                <Link href={it.href} className="group block h-full">
                  <PremiumCard variant="hover" className="p-4 flex items-center justify-between">
                    <div>
                      <div className="text-white font-semibold group-hover:text-cyan-400">{it.name}</div>
                      <div className="text-slate-400 text-sm">{it.desc}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </PremiumCard>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-20 relative border-t border-slate-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-white mb-4">
              Get a working system, not a deck.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              Bring the operational problem you want solved. We will tell you on the call
              whether it belongs with us, a generic consultancy, a Big-4 program team, or your
              in-house engineers — and we will be specific about why.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <MagneticButton href="/schedule-consultation" variant="primary">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </MagneticButton>
            <p className="mt-6 text-sm text-slate-400">
              Federal contractor identifiers:{' '}
              <Link href="/capability-statement" className="text-cyan-400 link-underline">
                UEI YY2DR3KSENH7 · CAGE 9YCS7 · SDVOSB Pending
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <CTA />
      <RelatedSolutions currentSlug="ai-agent-development" />
    </>
  );
}
