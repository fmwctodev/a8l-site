import type { Metadata } from 'next';
import Link from 'next/link';
import { Link2, Cloud, Shield, Zap, CheckCircle, ArrowRight, Brain } from 'lucide-react';
import CTA from '@/app/_components/CTA';
import RelatedSolutions from '@/app/_components/RelatedSolutions';

export const metadata: Metadata = {
  title: 'API Integrations for Commercial Tech Stacks | Tech, Construction, Healthcare & Finance',
  description: 'Custom API integrations for commercial tech stacks. Secure bridges for legacy systems, real-time sync, and custom middleware. 30-day launch with bank-level encryption. SDVOSB Pending. UEI: YY2DR3KSENH7.',
  keywords: 'API integrations for commercial tech stacks, custom API integrations, secure API bridges, legacy system integration, custom middleware development, real-time data syncing, encrypted data flows, commercial API integration, 30-day API launch',
  alternates: { canonical: 'https://autom8ionlab.com/solutions/api-integrations' },
  openGraph: {
    title: 'API Integrations for Commercial Tech Stacks | Autom8ion Lab',
    description: 'Custom API integrations for commercial tech stacks. Secure bridges for legacy systems, real-time sync, custom middleware. 30-day launch. SDVOSB Pending — UEI: YY2DR3KSENH7.',
    url: 'https://autom8ionlab.com/solutions/api-integrations',
    images: [{ url: 'https://autom8ionlab.com/logo/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'API Integrations for Commercial Tech Stacks | Autom8ion Lab',
    description: 'Custom API integration layers for commercial tech stacks. Secure bridges, real-time sync, custom middleware. 30-day launch.',
  },
};

const ldSchema1 = {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "API Integration Services",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Autom8ion Lab"
            },
            "description": "Custom API integrations for commercial tech stacks. Secure API bridges for legacy business systems, real-time syncing, and custom middleware aligned to your business logic, security requirements, and tech stack.",
            "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "url": "https://autom8ionlab.com/solutions/api-integrations",
            "additionalType": ["REST", "GraphQL", "Webhooks", "SOAP"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "API Integration Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Secure API Bridges for Legacy Business Systems"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Real-Time Sync for Commercial Workflows"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Middleware Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Enterprise-Grade Integration for Commercial Operations"
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
              { "@type": "ListItem", "position": 3, "name": "API Integrations", "item": "https://autom8ionlab.com/solutions/api-integrations" }
            ]
          };

export default function Page() {
const features = [
    {
      icon: Shield,
      title: "Secure API Bridges for Legacy Business Systems",
      description: "One of the biggest obstacles in commercial modernization is the system nobody can shut off. You may have mission-critical logic locked inside legacy platforms, on-prem software, file-based processes, accounting tools, or vendor applications with no usable SaaS connector. We build secure API bridges and custom integration layers that wrap controlled interfaces around your existing software so it can participate in modern workflows. Encrypted data flows with bank-level encryption, protocol translation for SOAP, SFTP, flat files, database procedures, and proprietary formats, plus access controls, audit logging, rate limiting, and queue management."
    },
    {
      icon: Cloud,
      title: "Real-Time Sync for Commercial Workflows",
      description: "Nightly batch jobs are not enough for commercial operations. If a record changes in one system, that update needs to reach the next system fast and accurately. We use event-driven architecture, secure polling, webhooks, and custom middleware to trigger data movement the moment a defined action occurs. We don't just sync data — we orchestrate it across your workflow automation stack. An update in one platform triggers the next task automatically. A document change routes to the correct repository. A status change in a legacy system syncs downstream without anyone exporting files by hand."
    },
    {
      icon: Zap,
      title: "Custom Middleware That Matches Your Business Logic",
      description: "Sometimes connecting System A to System B is not enough. You need business logic in the middle — data cleaned, transformed, validated, approved, and routed based on how your business actually works. We build the control layer between your systems: data validation, conditional workflow logic, error handling and retry queues, and full auditability that captures transaction history, system events, and exception handling. We don't force your process to fit the tool. We build the integration layer to fit your systems, your security model, and your operational requirements."
    }
  ];

  const benefits = [
    "Eliminate hours spent exporting files, rekeying data, and chasing approvals — redirect that effort to higher-value work",
    "Reduce errors and rework by removing the manual steps that create mismatched records and broken process chains",
    "Improve visibility with better logging, stronger controls, and consistent system behavior across your stack",
    "Extend the life of legacy tools by connecting the systems you already depend on instead of funding rip-and-replace",
    "Scale without more tool sprawl by automating complex workflows across your current stack",
    "Encrypted data flows with bank-level encryption protect data moving between on-prem and cloud",
    "Conditional workflow logic routes records, approvals, and actions based on your internal business rules",
    "Error handling and retry queues keep data safe when destination systems are down — nothing disappears silently",
    "Audit trails capture transaction history, system events, and exception handling so your team can trace issues fast"
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldSchema1) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldSchema2) }} />

      {/* Hero Section */}
            <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-green-950 to-slate-950 overflow-hidden">
              {/* Background Effects */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow delay-700"></div>
              </div>



              {/* Hero Content */}
              <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
                <div className="max-w-6xl mx-auto text-center">
                  <div className="mb-8 flex justify-center">
                    <div className="flex items-center space-x-2 bg-green-900/30 backdrop-blur-sm px-6 py-3 rounded-full border border-green-500/20">
                      <Link2 className="w-5 h-5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">API Integrations</span>
                    </div>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    API Integrations for
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"> Commercial Tech Stacks</span>
                  </h1>

                  <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                    We build custom integration layers around your existing business logic, security requirements, and tech stack. No templates. Bank-level encryption. Generic connectors break when your workflows get complex — we build the architecture that actually works. Live in 30 days.
                  </p>


                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link href="/get-in-touch" className="group bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-700 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 flex items-center space-x-2">
                      <span>Connect Your Systems</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Cost of Broken Integrations Section */}
            <section className="py-16 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    The Cost of <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Broken Commercial Integrations</span>
                  </h2>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Your commercial systems are likely running on a dozen platforms that don&apos;t talk to each other. That breaks workflows fast. You have CRMs, ERPs, project management tools, accounting platforms, customer support systems, internal databases, and cloud apps that all run critical operations. Half were never designed to connect. The rest rely on weak export-import workflows that create delays, duplicate data, and operational risk. Every day, your team wastes hours moving data by hand just to keep operations moving.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Most teams try to solve integration problems with low-code tools and prebuilt connectors. That fails in real commercial operations. The connector you need usually does not exist. If it does exist, it lacks the business logic, access controls, logging, and reliability your environment demands. You end up duct-taping exports, scripts, shared inboxes, and human workarounds together just to complete one workflow. At Autom8ion Lab, we build API integrations for commercial tech stacks that connect the tools you already use without forcing a rip-and-replace project.
                  </p>
                </div>
              </div>
            </section>

            {/* Three Direct Problems Section */}
            <section className="py-20 bg-slate-900/50 relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    Three Direct Problems When <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Systems Are Not Integrated</span>
                  </h2>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    <strong>Data Fragmentation:</strong> You have multiple versions of the same record across CRMs, ERPs, internal databases, and cloud apps. <strong>Workflow Delays:</strong> Your team gets stuck on approvals, handoffs, customer updates, order processing, and repetitive administrative work because systems do not exchange data in real time. <strong>Operational Drag:</strong> Manual transfers and weak third-party connectors create errors, missed updates, and bottlenecks across your entire stack.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Instead of generic solutions, we build custom systems that solve these problems permanently. We provide API integrations for commercial tech stacks that focus on security, workflow reliability, legacy tool connectivity, and operational efficiency. By connecting the tools you already rely on, you eliminate manual handoffs, reduce errors, and create a better foundation for <Link href="/solutions/workflow-automation" className="text-green-400 hover:text-green-300 underline">workflow automation</Link>, <Link href="/solutions/custom-llm-systems" className="text-green-400 hover:text-green-300 underline">custom LLM systems</Link>, and better reporting.
                  </p>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Custom Integration Architecture for <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Real Commercial Operations</span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    We build secure bridges for legacy systems, real-time sync for commercial workflows, and custom middleware that matches your business logic — engineered around your stack, not forced to fit a connector library.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div
                        key={index}
                        className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-green-500/30 transition-all duration-300 hover:transform hover:scale-105"
                      >
                        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-emerald-400 transition-colors">
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

            {/* How It Works / 30-Day Launch Plan Section */}
            <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Our 30-Day <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Launch Plan</span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    We don&apos;t believe in six-month discovery cycles. We move fast because disconnected systems create immediate operational drag. Our process is designed to get you from manual workarounds to secure, automated integrations in 30 days.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">Week 1: Audit &amp; Workflow Mapping</h3>
                    <p className="text-slate-400 text-sm">We identify the systems, apps, and manual touchpoints slowing your team down. Then we map the exact workflow you need to automate.</p>
                  </div>

                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">Week 2: Architecture &amp; Security Design</h3>
                    <p className="text-slate-400 text-sm">We design the secure bridges, middleware, access controls, and logging model. We align the solution to your cybersecurity and compliance requirements with a focus on secure commercial operations.</p>
                  </div>

                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-400 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">Week 3: Development &amp; Testing</h3>
                    <p className="text-slate-400 text-sm">We build the custom connectors, transformation logic, and workflow triggers. We test for reliability, security, and failure handling under real operating conditions.</p>
                  </div>

                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">4</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">Week 4: Deployment &amp; Optimization</h3>
                    <p className="text-slate-400 text-sm">We launch the integration, replace the manual workarounds, and fine-tune performance so your workflows run cleanly from day one.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Custom Integrations for <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Commercial Industries</span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    We connect the systems Tech, Construction, Healthcare, and Finance teams already use — with federal-aware delivery available when your environment requires it.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">Tech: CRM, ERP &amp; Cloud App Integration</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Connect CRMs, ERPs, project management tools, support systems, internal databases, and cloud apps with custom integration layers built around your business logic. Real-time data movement, encrypted data flows, and middleware that handles validation, conditional logic, and retries — so your team stops moving data by hand and your stack actually behaves like one system.
                    </p>
                  </div>

                  <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">Construction: Project, Accounting &amp; Field Systems</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Bridge construction project platforms, accounting tools, document repositories, and on-prem systems that were never built to connect. Encrypted data flows, protocol translation for SFTP and flat files, and custom middleware that routes records, approvals, and actions based on your internal rules. Pair with our <Link href="/solutions/workflow-automation" className="text-green-400 hover:text-green-300 underline">workflow automation</Link> to remove manual handoffs end to end.
                    </p>
                  </div>

                  <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">Healthcare: Internal Systems &amp; Vendor Records</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Custom integration layers for healthcare operations where data sensitivity, access controls, and audit logging matter from day one. Bank-level encryption protects on-prem-to-cloud traffic, least-privilege access enforces who can move what data, and traceable logging captures every transaction. Built to support your <Link href="/solutions/cybersecurity" className="text-green-400 hover:text-green-300 underline">cybersecurity and compliance</Link> posture without adding new exposure.
                    </p>
                  </div>

                  <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">Finance &amp; Federal: Regulated Data Flows</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Secure integration layers for financial operations and federal-aware deployments. Encrypted data flows, audit logging, and traceable system activity that map to NIST-based requirements and regulated environments where security and evidence collection matter. We can also structure integrations to support broader compliance initiatives, including requirements that map to NIST and FedRAMP-related environments.
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
                    Better Data Flow.
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"> Less Operational Drag.</span>
                  </h2>
                  <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                    When you invest in enterprise-grade integrations, you are not just buying software. You are removing friction from the workflows that keep your business running. We don&apos;t build nice-to-have features. If an integration does not strengthen your workflow, improve your controls, or reduce operational drag, we do not build it.
                  </p>
                  <Link href="/get-in-touch" className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-700 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105">
                    Let&apos;s Fix Your Stack
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {benefits.slice(0, 8).map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4 bg-slate-800/30 p-4 rounded-lg border border-slate-700/50">
                      <CheckCircle className="w-6 h-6 text-emerald-400 mt-0.5 flex-shrink-0" />
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
                    Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Autom8ion Lab?</span>
                  </h2>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    We don&apos;t do template integrations. We don&apos;t force commercial teams into generic connectors and low-code shortcuts. Most vendors hope a prebuilt plug-in exists. We build the custom architecture that actually works, especially when your systems were never designed to talk to each other. We understand the stakes: in commercial operations, fragile connectors and manual workarounds create real risk. We build the bridges, secure the data paths with bank-level encryption, and align the design to real operational requirements with a focus on API integrations for commercial tech stacks.
                  </p>
                  <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                    Stop duct-taping your tools together. Stop relying on exports, scripts, and connector marketplaces to run critical workflows. It&apos;s time to connect your systems properly and build automation on infrastructure you can trust.
                  </p>
                  <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 mb-8 text-left">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Compliance</span> &amp; Government Readiness
                    </h3>
                    <p className="text-slate-300 mb-6">
                      For organizations that need formal compliance alignment, we support secure integration design with documented controls, audit logging, and traceable system activity. That includes work aligned to NIST-based requirements and regulated environments where security and evidence collection matter.
                    </p>
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex items-start space-x-3"><CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" /><span><strong>UEI:</strong> YY2DR3KSENH7</span></li>
                      <li className="flex items-start space-x-3"><CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" /><span><strong>CAGE:</strong> 9YCS7</span></li>
                      <li className="flex items-start space-x-3"><CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" /><span><strong>DUNS:</strong> 05-289-2750</span></li>
                      <li className="flex items-start space-x-3"><CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" /><span><strong>SDVOSB:</strong> Pending</span></li>
                      <li className="flex items-start space-x-3"><CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" /><span><strong>FedRAMP-aware deployment support</strong> and <strong>NIST-focused control alignment</strong> when your environment requires it.</span></li>
                    </ul>
                  </div>
                  <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
                    <p className="text-emerald-400 font-semibold mb-4 text-xl">Ready to Connect Your Systems?</p>
                    <p className="text-slate-300 mb-6">
                      If you&apos;re tired of tools that don&apos;t talk, workflows that break between systems, and teams stuck doing manual work to keep operations moving, we&apos;re ready to fix it. We can have your first major integration live and delivering value in 30 days, even when no SaaS connector exists. That means faster operations, cleaner handoffs, and a more efficient stack.
                    </p>
                    <Link href="/schedule-consultation" className="inline-block bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-700 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105">
                      Schedule a Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <CTA />
            <RelatedSolutions currentSlug="api-integrations" />
    </>
  );
}
