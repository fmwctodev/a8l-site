import type { Metadata } from 'next';
import Link from 'next/link';
import { Cloud, Server, Database, Activity, CheckCircle, ArrowRight, Network, Code } from 'lucide-react';
import CTA from '@/app/_components/CTA';
import RelatedSolutions from '@/app/_components/RelatedSolutions';

export const metadata: Metadata = {
  title: 'Scalable Cloud Infrastructure for Tech & Healthcare Teams | 30-Day Secure Launch',
  description: 'Custom cloud infrastructure for fast-moving tech companies and healthcare teams. Secure landing zones, hardened networks, governed identity, deployment pipelines. 30-day average launch. Founder-led delivery. SDVOSB Pending. UEI: YY2DR3KSENH7.',
  keywords: 'scalable cloud infrastructure, secure cloud architecture, cloud infrastructure tech companies, cloud infrastructure healthcare, secure DevSecOps, cloud landing zone, infrastructure as code, controlled data architecture, continuous monitoring, 30-day cloud launch',
  alternates: { canonical: 'https://autom8ionlab.com/solutions/cloud-systems' },
  openGraph: {
    title: 'Scalable Cloud Infrastructure for Tech & Healthcare Teams | Autom8ion Lab',
    description: 'Secure cloud architecture for fast-moving tech companies and healthcare teams. 30-day average launch, founder-led delivery. SDVOSB Pending — UEI: YY2DR3KSENH7.',
    url: 'https://autom8ionlab.com/solutions/cloud-systems',
    images: [{ url: 'https://autom8ionlab.com/logo/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Scalable Cloud Infrastructure for Tech & Healthcare Teams | Autom8ion Lab',
    description: 'Custom cloud infrastructure built for security, speed, and operational resilience. 30-day average launch.',
  },
};

const ldSchema1 = {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Scalable Cloud Infrastructure",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Autom8ion Lab"
            },
            "description": "Scalable cloud infrastructure for fast-moving tech companies and healthcare teams that need strong security without long rollout cycles. Secure landing zones, hardened networks, governed identity, encrypted data paths, and deployment pipelines built for rapid delivery.",
            "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "url": "https://autom8ionlab.com/solutions/cloud-systems",
            "operatingSystem": ["Amazon Web Services (AWS)", "Microsoft Azure", "Hybrid Cloud", "Multi-Cloud"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Scalable Cloud Infrastructure Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Secure Cloud Architecture"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Secure DevSecOps for Fast Commercial Delivery"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Continuous Monitoring for Cloud Operations"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Controlled Data Architecture for Tech and Healthcare Systems"
                  }
                }
              ]
            }
          };

const ldSchema2 = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://autom8ionlab.com/" },
              { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://autom8ionlab.com/#solutions" },
              { "@type": "ListItem", "position": 3, "name": "Cloud Systems", "item": "https://autom8ionlab.com/solutions/cloud-systems" }
            ]
          };

export default function Page() {
const features = [
    {
      icon: Server,
      title: "Secure Cloud Architecture Starts With the Right Foundation",
      description: "Bad architecture creates rework, security gaps, and delays that kill momentum. Strong architecture gives your team a clean path to deploy, secure, and operate without constant rebuilds. We build secure cloud environments in AWS, Azure, and hybrid configurations for companies that need speed without losing control. We enforce least privilege, separate duties, harden the management plane, segment workloads, and standardize encryption from the start. Instead of forcing your systems into a generic environment, we engineer the cloud around your application architecture, data sensitivity requirements, user access model, integration points, logging and retention obligations, change management process, and recovery and resilience targets."
    },
    {
      icon: Activity,
      title: "Secure DevSecOps for Fast Commercial Delivery",
      description: "You cannot scale modern software with loose deployment practices. Manual releases, shared admin access, and undocumented changes create security exposure. We build secure DevSecOps and CI/CD pipelines for commercial application delivery that enforce control discipline without killing speed. Automated security checks scan every build for dependency issues, misconfigurations, secrets exposure, and policy violations. Approval gates move releases through documented review steps with separation of duties. Infrastructure as Code deploys cloud environments from version-controlled code. Immutable releases eliminate drift. Rollback controls keep incidents from becoming outages. Audit logging records every deployment event for evidence, traceability, and oversight."
    },
    {
      icon: Cloud,
      title: "Security Protocols Built Into the Cloud, Not Added After",
      description: "Cloud security fails when teams rely on policies to compensate for weak architecture. Policies do not fix flat networks, broad permissions, or missing telemetry. The environment itself has to enforce the rules. We embed security at every layer: network segmentation across public, private, management, and restricted zones; boundary protection (WAF, firewall, ingress, egress, private connectivity); privileged access isolation through hardened paths with strong authentication and short-lived credentials; centralized logging into protected audit pipelines; encryption at rest and in transit with governed key management; secrets management; and resilience controls covering backup integrity, failover design, and recovery paths."
    }
  ];

  const benefits = [
    "Custom cloud infrastructure built around your applications, data flows, and operational requirements — no templates, no generic landing zones",
    "Secure DevSecOps and CI/CD pipelines that enforce control discipline without killing release speed",
    "Network segmentation, encryption at rest and in transit, and centralized logging baked into the environment from day one",
    "Privileged access isolation with strong authentication, short-lived credentials, and hardened administrative paths",
    "Continuous monitoring of control drift, privileged activity, security events, log health, vulnerability posture, and resilience status",
    "Controlled data architecture for tech and healthcare workloads — separated compute and storage, classified data, defined retention",
    "Infrastructure as Code for repeatable, auditable deployments instead of manual console clicks",
    "30-day deployment framework — discovery and risk review, secure landing zone build, application environment setup, monitoring and handover",
    "Founder-led delivery so you work directly with senior engineers from kickoff through deployment"
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldSchema1) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldSchema2) }} />

      <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow delay-700"></div>
              </div>



              <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
                <div className="max-w-6xl mx-auto text-center">
                  <div className="mb-8 flex justify-center">
                    <div className="flex items-center space-x-2 bg-cyan-900/30 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-500/20">
                      <Cloud className="w-5 h-5 text-cyan-400" />
                      <span className="text-cyan-400 font-medium">Scalable Cloud Infrastructure</span>
                    </div>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    Scalable Cloud Infrastructure for
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Tech and Healthcare Teams</span>
                  </h1>

                  <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                    Cloud infrastructure built for fast-moving tech companies and healthcare teams that need strong security without long rollout cycles. Secure landing zones, hardened networks, governed identity, encrypted data paths, and deployment pipelines that support rapid delivery from day one. 30-day average secure launch. Founder-led delivery.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link href="/get-in-touch" className="group bg-gradient-to-r from-cyan-600 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center space-x-2">
                      <span>Get Your Cloud Assessment</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Cloud Breaks at Scale Section */}
            <section className="py-16 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    Why Commercial Cloud Infrastructure <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Breaks at Scale</span>
                  </h2>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Cloud projects break when teams duct-tape tools together, overbuild too early, or bolt security on after launch. That creates weak boundaries, slow deployments, and expensive rework. If your company is scaling in tech or healthcare, your cloud environment needs to be secure, fast to deploy, and built around how your business actually runs. You&apos;ve likely seen the pattern already. Your team provisions cloud resources fast, but the environment starts to crack under growth. Identity is too broad. Network boundaries are unclear. Logs are scattered. Encryption is inconsistent. Deployments slow down. That is what happens when cloud infrastructure is treated like generic hosting instead of a secure operating system for the business.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Generic providers sell prebuilt packages and call it done. We don&apos;t do templates. We build custom cloud infrastructure around your applications, your data flows, and your operational requirements from the start. Effective cloud infrastructure for tech companies and healthcare organizations requires clear environment boundaries, least-privilege access design, segmented network architecture, centralized logging and retention, encryption at rest and in transit, repeatable infrastructure as code, and continuous monitoring tied to real operations. If your current setup depends on tribal knowledge, manual fixes, and disconnected tools, it is already creating risk.
                  </p>
                </div>
              </div>
            </section>

            {/* Foundation Section */}
            <section className="py-20 bg-slate-900/50 relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    Built Around Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Applications and Data</span>
                  </h2>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    If you are launching a product, modernizing internal systems, or scaling patient-facing platforms, the infrastructure decision comes first. We build secure cloud environments in AWS, Azure, and hybrid configurations for companies that need speed without losing control. For healthcare teams, that means protecting sensitive data and reducing operational risk. For tech companies, that means shipping faster on infrastructure that will not collapse under scale. This is not a best-practice checklist. It is a custom cloud foundation built for real operations.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    For broader governance support, see our <Link href="/solutions/cybersecurity" className="text-cyan-400 hover:text-cyan-300 underline">cybersecurity and compliance solutions</Link>. For more on how we connect infrastructure to production systems, check out our <Link href="/solutions/software-development" className="text-cyan-400 hover:text-cyan-300 underline">software development solutions</Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Secure Architecture, Controlled Releases, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Continuous Control</span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    The cloud environment itself enforces the rules — through architecture, secure delivery pipelines, and continuous monitoring built in from day one.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div
                        key={index}
                        className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105"
                      >
                        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                          {feature.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Controlled Data Architecture Section */}
            <section className="py-20 bg-slate-900/50 relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    Controlled Data Architecture for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Tech and Healthcare Systems</span>
                  </h2>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Tech and healthcare platforms fail when data architecture is vague. If your team cannot define where data lives, how it moves, who can access it, and how it is retained, the environment becomes difficult to secure and harder to scale. We integrate data management directly into your cloud infrastructure with control-first design decisions: separate compute from storage to reduce blast radius, apply encryption, key management, and access policies consistently, classify and segment sensitive data by mission need and user role, define retention, archival, and deletion paths, and preserve auditability without slowing down application performance.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Cloud security is not a one-time setup. Controls drift. Access changes. Services expand. Visibility gaps appear fast. That is why continuous monitoring is built into every environment we deploy — control drift, privileged activity, security events, log integrity, vulnerability posture, and resilience status. When thresholds are crossed, the system triggers alerts, tickets, and response actions fast.
                  </p>
                </div>
              </div>
            </section>

            {/* 30-Day Deployment Framework Section */}
            <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Our 30-Day <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Deployment Framework</span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    We do not drag cloud projects into endless planning cycles. We build, secure, and deploy fast. Our 30-day deployment framework gives you a custom cloud environment your team can actually use, operate, and scale.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">Week 1: Discovery, Boundary Definition &amp; Risk Review</h3>
                    <p className="text-slate-400 text-sm">We assess your current environment, application requirements, user roles, data flows, and compliance obligations. We identify control gaps, boundary issues, overprivileged access, logging failures, and infrastructure sprawl.</p>
                  </div>

                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">Week 2: Custom Architecture &amp; Secure Landing Zone Build</h3>
                    <p className="text-slate-400 text-sm">We design and build your cloud landing zone — account structure, VPC and subnet design, IAM architecture, encryption standards, baseline policies, and management plane hardening. Everything deployed through Infrastructure as Code.</p>
                  </div>

                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">Week 3: Application Environment Setup</h3>
                    <p className="text-slate-400 text-sm">We configure application environments, delivery pipelines, secrets management, logging integrations, and deployment controls — a secure system built for fast delivery without breaking security requirements.</p>
                  </div>

                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">4</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">Week 4: Monitoring, Evidence &amp; Operational Handover</h3>
                    <p className="text-slate-400 text-sm">We finalize dashboards, alerts, retention, and evidence workflows so your team has immediate visibility into control health, security events, and system performance. You leave with a working environment, not a consulting slide deck.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Cloud Infrastructure for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Commercial Industries</span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    Built around how Tech and Healthcare teams actually operate, with delivery patterns extending to Construction, Finance, and federal-aware workloads when required.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">Tech: Secure Landing Zones for Fast Product Delivery</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Custom cloud environments in AWS or Azure for fast-moving tech companies that need to ship without collapsing under scale. Hardened management plane, segmented networks, encrypted storage, and CI/CD pipelines that move developers fast while keeping releases auditable. Pair with our <Link href="/solutions/software-development" className="text-cyan-400 hover:text-cyan-300 underline">software development</Link> work when the application code and the infrastructure need to be engineered together.
                    </p>
                  </div>

                  <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">Healthcare: Controlled Cloud for Sensitive Data</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Secure cloud environments built for healthcare teams scaling patient-facing platforms or modernizing internal systems. Separate compute from storage, classified data segmentation, encryption with governed key management, audit logging, and continuous monitoring tied to real operations. Backed by our <Link href="/solutions/cybersecurity" className="text-cyan-400 hover:text-cyan-300 underline">cybersecurity and compliance</Link> work for governance support.
                    </p>
                  </div>

                  <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">Construction &amp; Finance: Operational Backbone</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Cloud foundations built for commercial operations that need controlled boundaries, repeatable Infrastructure as Code, and centralized logging. We engineer around your data flows, integration points, and recovery targets so the environment supports your operating model, not the other way around. Connects cleanly with our <Link href="/solutions/api-integrations" className="text-cyan-400 hover:text-cyan-300 underline">API integrations</Link> work for legacy and modern stacks.
                    </p>
                  </div>

                  <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">Federal-Aware Cloud When You Need It</h3>
                    <p className="text-slate-300 leading-relaxed">
                      For teams with federal requirements, we also support cloud environments that align with FedRAMP, NIST 800-53, and FISMA expectations. That work sits on the same core principle: build the architecture right from day one. We design environments with federal hosting and authorization paths in mind when required, with NIST-focused control alignment for logging, access control, encryption, segmentation, and traceability.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Commercial-First Infrastructure
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> With Federal Support When You Need It</span>
                  </h2>
                  <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                    If your team is still duct-taping cloud tools together, chasing fixes manually, and trying to retrofit controls after deployment, the problem is not your people. The problem is the architecture. We build scalable cloud infrastructure that is custom, secure, and fast to deploy for tech companies and healthcare organizations. No templates. No generic MSP handoff. Just founder-led delivery and engineered systems aligned to your requirements.
                  </p>
                  <Link href="/schedule-consultation" className="bg-gradient-to-r from-cyan-600 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                    Schedule a Consultation
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {benefits.slice(0, 8).map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4 bg-slate-800/30 p-4 rounded-lg border border-slate-700/50">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                    Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Autom8ion Lab</span>
                  </h2>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Autom8ion Lab builds scalable cloud infrastructure for fast-moving tech companies and healthcare teams that need strong security without long rollout cycles. We deploy fast — our average secure launch is 30 days. Autom8ion Lab is founder-led, so you work directly with senior engineers from kickoff through deployment. We don&apos;t hand off to an MSP after the architecture diagram. We design secure landing zones, hardened networks, governed identity, encrypted data paths, and deployment pipelines that support rapid delivery from day one.
                  </p>
                  <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                    For teams with federal requirements, we also support cloud environments that align with FedRAMP, NIST 800-53, and FISMA expectations. That work sits on the same core principle: build the architecture right from day one.
                  </p>
                  <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 mb-8 text-left">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Compliance &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Government Readiness</span>
                    </h3>
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex items-start space-x-3"><CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" /><span><strong>UEI:</strong> YY2DR3KSENH7</span></li>
                      <li className="flex items-start space-x-3"><CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" /><span><strong>CAGE:</strong> 9YCS7</span></li>
                      <li className="flex items-start space-x-3"><CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" /><span><strong>SDVOSB Pending</strong> — veteran-owned</span></li>
                      <li className="flex items-start space-x-3"><CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" /><span><strong>FedRAMP-aware deployment support</strong> for environments that need federal hosting and authorization paths.</span></li>
                      <li className="flex items-start space-x-3"><CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" /><span><strong>NIST-focused control alignment:</strong> logging, access control, encryption, segmentation, and traceability that support regulated environments.</span></li>
                    </ul>
                  </div>
                  <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
                    <p className="text-cyan-400 font-semibold mb-4 text-xl">If You Need Secure Cloud Infrastructure Live in 30 Days, Let&apos;s Talk About Fixing It</p>
                    <p className="text-slate-300 mb-6">
                      Schedule a Consultation and let&apos;s build your cloud infrastructure the right way. Want to see more of what we do? Browse our other solutions to see how we engineer secure, custom systems.
                    </p>
                    <Link href="/schedule-consultation" className="inline-block bg-gradient-to-r from-cyan-600 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                      Schedule a Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <CTA />
            <RelatedSolutions currentSlug="cloud-systems" />
    </>
  );
}
