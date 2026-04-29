import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Server,
  Activity,
  Cloud,
  CheckCircle2,
} from 'lucide-react';
import { BreadcrumbSchema, ServiceSchema } from '@/app/_components/Schema';
import {
  Reveal,
  Stagger,
  StaggerItem,
  PremiumCard,
  MagneticButton,
  ComparisonTable,
  type ComparisonRow,
} from '@/app/_components/ui';
import CTA from '@/app/_components/CTA';
import RelatedSolutions from '@/app/_components/RelatedSolutions';

export const metadata: Metadata = {
  title: 'FedRAMP & GovCloud Architecture',
  description:
    'FedRAMP, GovCloud, and commercial cloud architecture for AI workloads. Designed for compliance from day one — AWS, Azure, hybrid.',
  keywords:
    'scalable cloud infrastructure, secure cloud architecture, cloud infrastructure tech companies, cloud infrastructure healthcare, secure DevSecOps, cloud landing zone, infrastructure as code, controlled data architecture, continuous monitoring, 30-day cloud launch',
  alternates: { canonical: 'https://autom8ionlab.com/solutions/cloud-systems' },
  openGraph: {
    title: 'FedRAMP & GovCloud Architecture | Autom8ion Lab',
    description:
      'FedRAMP, GovCloud, and commercial cloud architecture for AI workloads. Designed for compliance from day one — AWS, Azure, hybrid.',
    url: 'https://autom8ionlab.com/solutions/cloud-systems',
    images: [{
      url: 'https://autom8ionlab.com/api/og?title=FedRAMP+%26+GovCloud+Architecture&section=Solutions',
      width: 1200,
      height: 630,
      alt: 'FedRAMP & GovCloud Architecture',
    }],
  },
  twitter: {
    title: 'FedRAMP & GovCloud Architecture | Autom8ion Lab',
    description:
      'FedRAMP, GovCloud, and commercial cloud architecture for AI workloads. Designed for compliance from day one — AWS, Azure, hybrid.',
    images: ['https://autom8ionlab.com/api/og?title=FedRAMP+%26+GovCloud+Architecture&section=Solutions'],
  },
};

const buyers = [
  {
    name: 'Tech teams scaling fast on duct-taped cloud',
    body:
      'Your team provisions cloud resources fast, but the environment starts to crack under growth. Identity is too broad. Network boundaries are unclear. Logs are scattered. Encryption is inconsistent. Deployments slow down. That is what happens when cloud infrastructure is treated like generic hosting instead of a secure operating system for the business.',
  },
  {
    name: 'Healthcare teams scaling sensitive data platforms',
    body:
      'For healthcare teams, the infrastructure decision comes first — protecting sensitive data and reducing operational risk while modernizing internal systems or scaling patient-facing platforms. We build secure cloud environments in AWS, Azure, and hybrid configurations for companies that need speed without losing control.',
  },
  {
    name: 'Companies tired of generic prebuilt cloud packages',
    body:
      "Generic providers sell prebuilt packages and call it done. We don't do templates. We build custom cloud infrastructure around your applications, your data flows, and your operational requirements from the start. If your current setup depends on tribal knowledge, manual fixes, and disconnected tools, it is already creating risk.",
  },
  {
    name: 'Teams with federal-aware workloads on the horizon',
    body:
      'For teams with federal requirements, we also support cloud environments that align with FedRAMP, NIST 800-53, and FISMA expectations. That work sits on the same core principle: build the architecture right from day one.',
  },
];

const whatWeBuild = [
  {
    icon: Server,
    title: 'Secure Cloud Architecture Starts With the Right Foundation',
    body:
      'Bad architecture creates rework, security gaps, and delays that kill momentum. Strong architecture gives your team a clean path to deploy, secure, and operate without constant rebuilds. We build secure cloud environments in AWS, Azure, and hybrid configurations for companies that need speed without losing control. We enforce least privilege, separate duties, harden the management plane, segment workloads, and standardize encryption from the start. Instead of forcing your systems into a generic environment, we engineer the cloud around your application architecture, data sensitivity requirements, user access model, integration points, logging and retention obligations, change management process, and recovery and resilience targets.',
  },
  {
    icon: Activity,
    title: 'Secure DevSecOps for Fast Commercial Delivery',
    body:
      'You cannot scale modern software with loose deployment practices. Manual releases, shared admin access, and undocumented changes create security exposure. We build secure DevSecOps and CI/CD pipelines for commercial application delivery that enforce control discipline without killing speed. Automated security checks scan every build for dependency issues, misconfigurations, secrets exposure, and policy violations. Approval gates move releases through documented review steps with separation of duties. Infrastructure as Code deploys cloud environments from version-controlled code. Immutable releases eliminate drift. Rollback controls keep incidents from becoming outages. Audit logging records every deployment event for evidence, traceability, and oversight.',
  },
  {
    icon: Cloud,
    title: 'Security Protocols Built Into the Cloud, Not Added After',
    body:
      'Cloud security fails when teams rely on policies to compensate for weak architecture. Policies do not fix flat networks, broad permissions, or missing telemetry. The environment itself has to enforce the rules. We embed security at every layer: network segmentation across public, private, management, and restricted zones; boundary protection (WAF, firewall, ingress, egress, private connectivity); privileged access isolation through hardened paths with strong authentication and short-lived credentials; centralized logging into protected audit pipelines; encryption at rest and in transit with governed key management; secrets management; and resilience controls covering backup integrity, failover design, and recovery paths.',
  },
];

const useCases = [
  {
    name: 'Tech: Secure Landing Zones for Fast Product Delivery',
    bodyJsx: (
      <>
        Custom cloud environments in AWS or Azure for fast-moving tech companies that need to ship
        without collapsing under scale. Hardened management plane, segmented networks, encrypted
        storage, and CI/CD pipelines that move developers fast while keeping releases auditable.
        Pair with our{' '}
        <Link href="/solutions/software-development" className="text-cyan-400 link-underline">
          software development
        </Link>{' '}
        work when the application code and the infrastructure need to be engineered together.
      </>
    ),
  },
  {
    name: 'Healthcare: Controlled Cloud for Sensitive Data',
    bodyJsx: (
      <>
        Secure cloud environments built for healthcare teams scaling patient-facing platforms or
        modernizing internal systems. Separate compute from storage, classified data segmentation,
        encryption with governed key management, audit logging, and continuous monitoring tied to
        real operations. Backed by our{' '}
        <Link href="/solutions/cybersecurity" className="text-cyan-400 link-underline">
          cybersecurity and compliance
        </Link>{' '}
        work for governance support.
      </>
    ),
  },
  {
    name: 'Construction & Finance: Operational Backbone',
    bodyJsx: (
      <>
        Cloud foundations built for commercial operations that need controlled boundaries,
        repeatable Infrastructure as Code, and centralized logging. We engineer around your data
        flows, integration points, and recovery targets so the environment supports your operating
        model, not the other way around. Connects cleanly with our{' '}
        <Link href="/solutions/api-integrations" className="text-cyan-400 link-underline">
          API integrations
        </Link>{' '}
        work for legacy and modern stacks.
      </>
    ),
  },
  {
    name: 'Federal-Aware Cloud When You Need It',
    bodyJsx: (
      <>
        For teams with federal requirements, we also support cloud environments that align with
        FedRAMP, NIST 800-53, and FISMA expectations. That work sits on the same core principle:
        build the architecture right from day one. We design environments with federal hosting and
        authorization paths in mind when required, with NIST-focused control alignment for
        logging, access control, encryption, segmentation, and traceability.
      </>
    ),
  },
];

const comparisonRows: ComparisonRow[] = [
  {
    label: 'Infrastructure-as-code discipline',
    values: [
      'Terraform / IaC from day one',
      'Click-ops, drift-prone',
      'Varies — often partial',
    ],
  },
  {
    label: 'Security baseline',
    values: [
      'Encryption, segmentation, IAM, logging built in',
      'DIY, often skipped',
      'Bolted on after the fact',
    ],
  },
  {
    label: 'Cost control',
    values: [
      'Right-sized + monitored',
      'Easy to overspend',
      'Depends on engagement',
    ],
  },
  {
    label: 'Monitoring + alerting',
    values: [
      'Wired in at deploy',
      'Manual setup later',
      'Often handed off as docs',
    ],
  },
  {
    label: 'Hand-off + documentation',
    values: [
      'Production-ready runbooks',
      "None — you wrote it",
      'Variable quality',
    ],
  },
  {
    label: 'Launch timeline',
    values: [
      '30 days for the baseline',
      "Indefinite — you're learning",
      'Weeks to months',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        trail={[
          { name: 'Home', href: '/' },
          { name: 'Solutions', href: '/#services' },
          { name: 'Cloud Systems', href: '/solutions/cloud-systems' },
        ]}
      />
      <ServiceSchema
        name="Scalable Cloud Infrastructure for Tech and Healthcare Teams"
        serviceType="Secure cloud architecture, DevSecOps pipelines, controlled data architecture, continuous monitoring, Infrastructure as Code"
        url="https://autom8ionlab.com/solutions/cloud-systems"
        industry="All"
      />

      <section className="relative min-h-[55vh] bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-950 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16">
          <nav className="text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-cyan-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-300">Solutions</span>
            <span className="mx-2">/</span>
            <span className="text-slate-300">Cloud Systems</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Scalable Cloud Infrastructure for Tech and Healthcare Teams
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl leading-relaxed">
            Cloud infrastructure built for fast-moving tech companies and healthcare teams that
            need strong security without long rollout cycles. Secure landing zones, hardened
            networks, governed identity, encrypted data paths, and deployment pipelines that
            support rapid delivery from day one. 30-day average secure launch. Founder-led
            delivery.
          </p>
        </div>
      </section>

      {/* AEO DEFINITION BLOCK */}
      <section className="py-12 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <section className="definition-block">
              <p className="lead">
                <strong>FedRAMP and GovCloud cloud architecture</strong> is the design and operation
                of cloud infrastructure that satisfies FedRAMP Moderate / High, DoD IL2–IL5, and
                NIST 800-53 control baselines — typically AWS GovCloud, Azure Government, or
                hardened commercial deployments — wired with the IAM, encryption, logging, and
                segmentation that compliance reviewers actually check. For AI workloads on regulated
                data, it is the perimeter that lets the rest of the build exist.
              </p>
            </section>
          </Reveal>
        </div>
      </section>

      {/* DEFINITION BLOCK */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Cloud projects break when teams duct-tape tools together, overbuild too early, or bolt
            security on after launch. That creates weak boundaries, slow deployments, and expensive
            rework. If your company is scaling in tech or healthcare, your cloud environment needs
            to be secure, fast to deploy, and built around how your business actually runs.
            You&apos;ve likely seen the pattern already. Your team provisions cloud resources fast,
            but the environment starts to crack under growth. Identity is too broad. Network
            boundaries are unclear. Logs are scattered. Encryption is inconsistent. Deployments
            slow down. That is what happens when cloud infrastructure is treated like generic
            hosting instead of a secure operating system for the business.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            Generic providers sell prebuilt packages and call it done. We don&apos;t do templates.
            We build custom cloud infrastructure around your applications, your data flows, and
            your operational requirements from the start. Effective cloud infrastructure for tech
            companies and healthcare organizations requires clear environment boundaries,
            least-privilege access design, segmented network architecture, centralized logging and
            retention, encryption at rest and in transit, repeatable infrastructure as code, and
            continuous monitoring tied to real operations. If your current setup depends on tribal
            knowledge, manual fixes, and disconnected tools, it is already creating risk.
          </p>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Who this is for</h2>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-4" staggerDelay={0.06}>
            {buyers.map((b) => (
              <StaggerItem key={b.name}>
                <PremiumCard variant="hover" className="p-6 h-full">
                  <h3 className="text-white font-semibold mb-3">{b.name}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{b.body}</p>
                </PremiumCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* BUILT AROUND YOUR APPS AND DATA */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Built around your applications and data
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              If you are launching a product, modernizing internal systems, or scaling
              patient-facing platforms, the infrastructure decision comes first. We build secure
              cloud environments in AWS, Azure, and hybrid configurations for companies that need
              speed without losing control. For healthcare teams, that means protecting sensitive
              data and reducing operational risk. For tech companies, that means shipping faster on
              infrastructure that will not collapse under scale. This is not a best-practice
              checklist. It is a custom cloud foundation built for real operations.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-lg text-slate-300 leading-relaxed">
              For broader governance support, see our{' '}
              <Link href="/solutions/cybersecurity" className="text-cyan-400 link-underline">
                cybersecurity and compliance solutions
              </Link>
              . For more on how we connect infrastructure to production systems, check out our{' '}
              <Link href="/solutions/software-development" className="text-cyan-400 link-underline">
                software development solutions
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE ACTUALLY BUILD */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              What we actually build
            </h2>
          </Reveal>
          <Stagger className="space-y-6" staggerDelay={0.08}>
            {whatWeBuild.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <PremiumCard variant="hover" className="p-6 group">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-glow-cyan transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-slate-300 leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  </PremiumCard>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* CONTROLLED DATA ARCHITECTURE */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Controlled data architecture for tech and healthcare systems
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Tech and healthcare platforms fail when data architecture is vague. If your team
              cannot define where data lives, how it moves, who can access it, and how it is
              retained, the environment becomes difficult to secure and harder to scale. We
              integrate data management directly into your cloud infrastructure with control-first
              design decisions: separate compute from storage to reduce blast radius, apply
              encryption, key management, and access policies consistently, classify and segment
              sensitive data by mission need and user role, define retention, archival, and
              deletion paths, and preserve auditability without slowing down application
              performance.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-lg text-slate-300 leading-relaxed">
              Cloud security is not a one-time setup. Controls drift. Access changes. Services
              expand. Visibility gaps appear fast. That is why continuous monitoring is built into
              every environment we deploy — control drift, privileged activity, security events,
              log integrity, vulnerability posture, and resilience status. When thresholds are
              crossed, the system triggers alerts, tickets, and response actions fast.
            </p>
          </Reveal>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Custom build vs. AWS/GCP click-ops vs. generic DevOps consultant
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8 max-w-3xl">
              The three patterns most cloud projects fall into. Each is the right answer for a
              different scope.
            </p>
          </Reveal>

          <ComparisonTable
            headers={[
              'Dimension',
              'Autom8ion Lab (custom build)',
              'AWS / GCP click-ops',
              'Generic DevOps consultant',
            ]}
            rows={comparisonRows}
            primaryColumnClass="text-emerald-400"
          />
        </div>
      </section>

      {/* INDUSTRY USE CASES */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Cloud infrastructure for commercial industries
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              Built around how Tech and Healthcare teams actually operate, with delivery patterns
              extending to Construction, Finance, and federal-aware workloads when required.
            </p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-4" staggerDelay={0.06}>
            {useCases.map((u) => (
              <StaggerItem key={u.name}>
                <PremiumCard variant="hover" className="p-6 h-full">
                  <h3 className="text-white font-semibold mb-2">{u.name}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{u.bodyJsx}</p>
                </PremiumCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* WHY COMPANIES CHOOSE US + FEDERAL CREDENTIALS */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why companies choose Autom8ion Lab
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-6">
              Autom8ion Lab builds scalable cloud infrastructure for fast-moving tech companies and
              healthcare teams that need strong security without long rollout cycles. We deploy
              fast — our average secure launch is 30 days. Autom8ion Lab is founder-led, so you
              work directly with senior engineers from kickoff through deployment. We don&apos;t
              hand off to an MSP after the architecture diagram. We design secure landing zones,
              hardened networks, governed identity, encrypted data paths, and deployment pipelines
              that support rapid delivery from day one.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-slate-300 leading-relaxed mb-8">
              If your team is still duct-taping cloud tools together, chasing fixes manually, and
              trying to retrofit controls after deployment, the problem is not your people. The
              problem is the architecture. We build scalable cloud infrastructure that is custom,
              secure, and fast to deploy for tech companies and healthcare organizations. No
              templates. No generic MSP handoff. Just founder-led delivery and engineered systems
              aligned to your requirements. For teams with federal requirements, we also support
              cloud environments that align with FedRAMP, NIST 800-53, and FISMA expectations.
            </p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-3 text-sm" staggerDelay={0.04}>
            {[
              'UEI: YY2DR3KSENH7',
              'CAGE: 9YCS7',
              'SDVOSB Pending — veteran-owned',
              'FedRAMP-aware deployment support',
              'NIST-focused control alignment',
              'SOC 2-aligned security practices by default',
            ].map((f) => (
              <StaggerItem key={f}>
                <PremiumCard
                  variant="hover"
                  className="px-4 py-3 text-slate-200 flex items-center space-x-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{f}</span>
                </PremiumCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative border-t border-slate-900/50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-white mb-4">
              Need secure cloud infrastructure live in 30 days?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed mb-8">
              Schedule a consultation and let&apos;s build your cloud infrastructure the right
              way. Want to see more of what we do? Browse our other solutions to see how we
              engineer secure, custom systems.
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
      <RelatedSolutions currentSlug="cloud-systems" />
    </>
  );
}
