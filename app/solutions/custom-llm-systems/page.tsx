import type { Metadata } from 'next';
import Link from 'next/link';
import { Brain, Cpu, Lock, Zap, Network, Database, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import CTA from '@/app/_components/CTA';
import RelatedSolutions from '@/app/_components/RelatedSolutions';

export const metadata: Metadata = {
  title: 'Custom LLM Systems for Enterprise Business Data | Private AI for Tech, Healthcare & Finance',
  description: 'Custom LLM systems for enterprise business data. Private deployment, SOC 2 protocols, encryption in transit and at rest, no public AI dependency. 30-day launch. SDVOSB Pending. UEI: YY2DR3KSENH7.',
  keywords: 'custom LLM systems, private LLM deployment, enterprise LLM, SOC 2 LLM, secure document workflows, private AI deployment, on-prem LLM, secure AI document processing, private enterprise AI',
  alternates: { canonical: 'https://autom8ionlab.com/solutions/custom-llm-systems' },
  openGraph: {
    title: 'Custom LLM Systems for Enterprise Business Data | Autom8ion Lab',
    description: 'Private LLM deployment with SOC 2 protocols, encryption in transit and at rest. Built around your documents, workflows, and access controls. 30-day launch. SDVOSB Pending — UEI: YY2DR3KSENH7.',
    url: 'https://autom8ionlab.com/solutions/custom-llm-systems',
    images: [{ url: 'https://autom8ionlab.com/logo/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Custom LLM Systems for Enterprise Business Data | Autom8ion Lab',
    description: 'Private LLM deployment, SOC 2 protocols, encryption in transit and at rest. Built around your documents, workflows, and access controls.',
  },
};

const ldSchema1 = {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Custom LLM Systems for Enterprise Business Data",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Autom8ion Lab"
            },
            "description": "Custom LLM systems for enterprise business data. Private LLM deployment with SOC 2 protocols, secure retrieval architecture, and full control over model access, storage, logging, and integrations. Built around your documents, workflows, and operating requirements.",
            "areaServed": {
              "@type": "Place",
              "name": "Global"
            },
            "url": "https://autom8ionlab.com/solutions/custom-llm-systems",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Custom LLM Systems Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Private LLM Deployment for Data Privacy and SOC 2 Protocols"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom LLM Systems Built Around Your Enterprise Data"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Security Architecture for Private Enterprise AI"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Secure Document Workflows"
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
              { "@type": "ListItem", "position": 3, "name": "Custom LLM Systems", "item": "https://autom8ionlab.com/solutions/custom-llm-systems" }
            ]
          };

export default function Page() {
const features = [
    {
      icon: Brain,
      title: "Private LLM Deployment for Data Privacy and SOC 2 Protocols",
      description: "The standard for enterprise AI is simple: keep sensitive business data inside your control boundary. That means the model, retrieval layer, document pipeline, and user interface run inside a private environment, not through a public endpoint. When we deploy a private LLM system or private-cloud architecture, your sensitive data stays inside your perimeter. Documents do not get forwarded to public APIs. Prompts do not get routed through third-party AI vendors. Outputs remain governed by your internal controls. We build private inference environments that prioritize data privacy, secure access, auditability, and SOC 2 protocols. You get AI capability without giving up control."
    },
    {
      icon: Cpu,
      title: "Custom LLM Systems Built Around Your Enterprise Data",
      description: "A business AI system is only useful if it understands your documents, your terminology, and your internal rules. We focus on secure document workflows backed by your operational data and business logic. We use your internal documentation, contracts, knowledge bases, compliance records, SOPs, support history, policies, and structured systems to build an LLM workflow that reflects how your business actually runs. Document extraction with context. Classification and routing. Grounded responses anchored to approved internal sources. Business-specific model behavior tuned to your processes instead of forcing your team into a generic chatbot."
    },
    {
      icon: Lock,
      title: "Security Architecture for Private Enterprise AI",
      description: "A model alone does not solve the real problem. You need security architecture that protects sensitive data and supports enterprise deployment requirements at every layer. Private deployment boundaries — on-premise or private cloud with strict network controls and no public AI dependency. Private LLM hosting inside your controlled environment. SOC 2 protocol alignment across access control, logging, change management, and secure data handling. Role-based access control. Encryption in transit and at rest. Audit logging and traceability for every interaction. Custom API integrations into your source systems without bypassing your controls."
    }
  ];

  const applications = [
    {
      icon: Zap,
      title: "Document Extraction With Context",
      description: "Pull key fields, clauses, requirements, and exceptions from complex files without relying on manual review. Built around your internal documentation, contracts, and operational records so the system understands your terminology, exceptions, and approved formats — not generic templates."
    },
    {
      icon: Database,
      title: "Classification and Routing",
      description: "Identify document types, tag sensitive records, and move data into the right downstream workflow automatically. Tied to your access model and approval logic so routing decisions follow your operating rules, with full audit logging on every action."
    },
    {
      icon: Network,
      title: "Grounded Responses",
      description: "Anchor outputs to approved internal sources so the system answers based on your environment, not internet guesswork. Critical when handling customer records, contracts, internal documentation, financial data, regulated information, and proprietary workflows."
    },
    {
      icon: Shield,
      title: "Business-Specific Model Behavior",
      description: "Tune prompts, retrieval logic, and workflows around your actual processes instead of forcing your team into a generic chatbot. This is the difference between a chatbot and a production system — built for private enterprise operations, controlled environments, and practical execution."
    }
  ];

  const benefits = [
    "Private data handling for sensitive prompts, documents, and outputs — no external data transfer",
    "30-day launch timelines for clearly scoped use cases instead of open-ended AI experiments",
    "Faster document processing through extraction, classification, retrieval, and summarization workflows",
    "Stronger control of sensitive data through private deployment, RBAC, audit logging, and encryption in transit and at rest",
    "Better governance through architecture designed for privacy, accountability, and secure internal use",
    "SOC 2 protocol alignment across access control, logging, change management, and secure data handling",
    "Encryption in transit and at rest inside your environment, with audit logging and traceability for every interaction",
    "Custom API integrations into your source systems so the LLM connects without bypassing your controls",
    "Founder-led delivery and senior engineering involvement from scoping through go-live"
  ];

  const industries = [
    {
      name: "Tech",
      description: "Custom LLM systems for tech companies handling sensitive customer records, internal documentation, contracts, and proprietary operating knowledge. Private deployment inside your perimeter, SOC 2 protocol alignment, RBAC, and full audit logging — so engineering, support, and operations teams get AI capability without leaking data through public endpoints."
    },
    {
      name: "Construction",
      description: "Document extraction, classification, and routing for construction operations — contracts, specs, submittals, and operational records. Grounded responses anchored to your project documentation, internal SOPs, and approved sources so the system answers based on your environment, not internet guesswork. Built for real workflows, not demos."
    },
    {
      name: "Healthcare",
      description: "Secure document workflows for healthcare teams handling sensitive records, internal documentation, and compliance artifacts. Private inference environments with encryption in transit and at rest, role-based access, and audit logging for every retrieval event and workflow action — so AI processing stays inside your security boundary."
    },
    {
      name: "Finance",
      description: "Custom LLM systems for finance operations handling contracts, financial files, support data, and proprietary operating knowledge. Private LLM hosting inside your controlled environment, SOC 2 protocol alignment, and integrations with your source systems through secure APIs — designed deliberately to keep sensitive business information inside your control boundary."
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldSchema1) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldSchema2) }} />

      {/* Hero Section */}
            <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
              {/* Background Effects */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow delay-700"></div>
              </div>



              {/* Hero Content */}
              <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
                <div className="max-w-6xl mx-auto text-center">
                  <div className="mb-8 flex justify-center">
                    <div className="flex items-center space-x-2 bg-blue-900/30 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/20">
                      <Brain className="w-5 h-5 text-cyan-400" />
                      <span className="text-cyan-400 font-medium">Custom LLM Systems</span>
                    </div>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    Custom LLM Systems for
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Enterprise Business Data</span>
                  </h1>

                  <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                    Private LLM systems built around your documents, workflows, and access controls. Your data stays under your control — your documents, prompts, and outputs stay in your environment. Strong encryption in transit and at rest, aligned with SOC 2 protocols. 30-day launch.
                  </p>


                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link href="/get-in-touch" className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center space-x-2">
                      <span>Start Building Your Custom LLM</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Introduction/Overview Section */}
            <section className="py-16 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    Public AI Breaks <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Business Workflows</span>
                  </h2>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Public AI creates risk when your team is working with sensitive business data. If employees are feeding contracts, customer records, internal documentation, financial data, support history, or operational knowledge into ChatGPT or Claude, your information is leaving your control boundary. That is a privacy problem, a governance problem, and a security problem. Off-the-shelf AI is not built for enterprise data. You need a custom LLM system that runs inside your environment and is built around your documents, workflows, and access controls from day one.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    At Autom8ion Lab, we build custom LLM systems for enterprise business data with one clear rule: your data stays under your control. Your documents stay in your environment. Your prompts stay in your environment. Your outputs stay in your environment. We don&apos;t bolt generic AI onto critical workflows. We build private AI systems around your business logic, your internal data, and your operating requirements. Our systems are built for teams that need private LLM deployment, secure retrieval architecture, and full control over model access, storage, logging, and integrations. We design environments with strong encryption in transit and at rest, and we align implementation with SOC 2 protocols.
                  </p>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Private Deployment, Custom Training, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Full-Stack Security</span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    We don&apos;t route sensitive work through generic AI services. We build secure systems that align with cybersecurity, privacy requirements, SOC 2 protocols, and real-world enterprise data handling standards.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div
                        key={index}
                        className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-105"
                      >
                        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
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

            {/* How It Works Section / 30-Day Launch Framework */}
            <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    The Autom8ion Lab <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">30-Day Launch Framework</span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    Most AI projects stall because the architecture is wrong from the start. We move faster by building around your real security boundary, your real business workflows, and your real data requirements from day one. Our average launch timeline is 30 days for scoped enterprise LLM implementations.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">Phase 1: Use Case &amp; Security Scoping (Days 1-5)</h3>
                    <p className="text-slate-400 text-sm">We identify the workflows, documents, systems, and user groups that matter most. We define the security boundary, access model, and operational outcomes you need.</p>
                  </div>

                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">Phase 2: Environment Setup &amp; Model Deployment (Days 6-12)</h3>
                    <p className="text-slate-400 text-sm">We provision your private environment, define storage and retrieval architecture, and deploy the model stack into your approved infrastructure.</p>
                  </div>

                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">Phase 3: Workflow Build &amp; Integration (Days 13-24)</h3>
                    <p className="text-slate-400 text-sm">We build ingestion, classification, retrieval, and response workflows. Then we connect the LLM system to your workflow automation, internal tools, and source systems.</p>
                  </div>

                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">4</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">Phase 4: Validation, Hardening &amp; Go-Live (Days 25-30)</h3>
                    <p className="text-slate-400 text-sm">We validate access controls, test output quality, harden the environment, and move the system into production with your team trained and operational.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Applications Section */}
            <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Secure Document Workflows <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Backed by Your Data</span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    This is not a generic chatbot. It is a custom LLM system built for private enterprise operations, controlled environments, and practical execution.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {applications.map((application, index) => {
                    const IconComponent = application.icon;
                    return (
                      <div key={index} className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mr-4">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-xl font-semibold text-white">{application.title}</h3>
                        </div>
                        <p className="text-slate-300 leading-relaxed">
                          {application.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Industry Applications Section */}
            <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Custom LLM Systems for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Commercial Industries</span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    Built for Tech, Construction, Healthcare, and Finance teams that need AI capability without giving up control of their data.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {industries.map((industry, index) => (
                    <div key={index} className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
                      <h3 className="text-xl font-semibold text-white mb-4">{industry.name}</h3>
                      <p className="text-slate-300 leading-relaxed">
                        {industry.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Integration Section */}
            <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                    Integrations With Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Existing Systems</span>
                  </h2>
                  <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                    We build custom <Link href="/solutions/api-integrations" className="text-cyan-400 hover:text-cyan-300 underline">API integrations</Link> so the LLM connects to your source systems without bypassing your controls. Pair with our <Link href="/solutions/ai-agent-development" className="text-cyan-400 hover:text-cyan-300 underline">AI agent development</Link> work when you need agents that execute decisions on top of LLM outputs, our <Link href="/solutions/workflow-automation" className="text-cyan-400 hover:text-cyan-300 underline">workflow automation</Link> when LLM outputs need to drive downstream tasks, our <Link href="/solutions/cybersecurity" className="text-cyan-400 hover:text-cyan-300 underline">cybersecurity and compliance</Link> work for governance support, and our <Link href="/solutions/cloud-systems" className="text-cyan-400 hover:text-cyan-300 underline">scalable cloud infrastructure</Link> when private deployment needs the right foundation underneath it.
                  </p>
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Measurable Outcomes:
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Why It Matters</span>
                  </h2>
                  <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                    We do not measure success by demo quality. We measure it by security, speed, and operational impact. Teams that replace public AI with Autom8ion Lab&apos;s custom LLM systems gain real control and real results.
                  </p>
                  <Link href="/schedule-consultation" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                    Schedule a Consultation
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{benefits.map((benefit, index) => (
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
                    Build Your Private <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Enterprise AI System</span>
                  </h2>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Your AI system should not send sensitive business data outside your environment. You need a partner who understands software development, security architecture, private AI deployment, and the operational reality inside growing companies. Instead of forcing public AI into workflows it was never designed to handle, build a custom system that runs securely inside your stack. We deliver custom LLM systems for enterprise business data with private deployment options, encryption in transit and at rest, and practical automation built around your operations.
                  </p>
                  <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                    If your team is still using public AI to process sensitive business data, you have a security gap. You also have an execution problem. Stop exposing sensitive data. Start processing it securely.
                  </p>
                  <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 mb-8 text-left">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Defense and <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Government</span>
                    </h3>
                    <p className="text-slate-300 mb-6">
                      For defense contractors, federal agencies, and regulated teams with government-specific requirements, we also support deployments that account for federal security and procurement realities. This includes architecture planning and implementation support for:
                    </p>
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex items-start space-x-3"><CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" /><span><strong>FedRAMP-aware deployment support</strong> for environments that need federal hosting and authorization paths.</span></li>
                      <li className="flex items-start space-x-3"><CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" /><span><strong>NIST-focused control alignment</strong> where your contract or operating environment requires it.</span></li>
                      <li className="flex items-start space-x-3"><CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" /><span><strong>Private AI deployment</strong> for sensitive government data.</span></li>
                      <li className="flex items-start space-x-3"><CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" /><span><strong>UEI:</strong> YY2DR3KSENH7</span></li>
                      <li className="flex items-start space-x-3"><CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" /><span><strong>CAGE:</strong> 9YCS7</span></li>
                      <li className="flex items-start space-x-3"><CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" /><span><strong>SDVOSB Pending</strong> — veteran-owned</span></li>
                    </ul>
                    <p className="text-slate-300 mt-6">
                      If you need a commercial-first AI system with a path into defense or government requirements, we can build for that from the start.
                    </p>
                  </div>
                  <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Ready to Secure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">AI Future?</span>
                    </h3>
                    <p className="text-cyan-400 font-semibold mb-2">Stop exposing sensitive data. Start processing it securely.</p>
                    <p className="text-slate-300 mb-6">
                      Schedule a consultation with us today. If you need a custom enterprise LLM system, secure private deployment, or a 30-day launch plan for a high-value AI use case, get in touch and let&apos;s see if this works for you.
                    </p>
                    <Link href="/schedule-consultation" className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                      Book Your Custom LLM Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <CTA />
            <RelatedSolutions currentSlug="custom-llm-systems" />
    </>
  );
}
