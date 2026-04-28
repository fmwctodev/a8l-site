import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Workflow, Zap, GitBranch, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { getCanonicalUrl, buildJsonLd } from '../utils/seo';
import RelatedSolutions from '../components/RelatedSolutions';

const WorkflowAutomation = () => {
  const features = [
    {
      icon: GitBranch,
      title: "Multi-Step Approval Workflows With Audit Trails",
      description: "We build approval systems that route requests through the right reviewers, enforce separation of duties, record timestamps, and preserve full decision history. That matters when you need to prove process integrity under NIST 800-53, support FISMA requirements, and maintain controls aligned with FedRAMP cloud expectations. You get structured approvals, exception handling, and logs that stand up to internal review and external assessment in US Federal, DIB, healthcare, and financial services environments."
    },
    {
      icon: Zap,
      title: "AI Agents Inside Private Networks",
      description: "If your workflows involve sensitive operational data, public AI endpoints are the wrong fit. We deploy AI agents inside private networks so your data stays inside your environment. These agents classify requests, validate submissions, summarize supporting documents, and help move work forward without exposing controlled information to third-party consumer tools. Speed without sacrificing control — exactly what regulated operations need."
    },
    {
      icon: Clock,
      title: "RPA for Controlled and Legacy Environments",
      description: "Some environments depend on legacy systems, internal portals, air-gapped processes, or controlled workflows where modern SaaS connectors are not an option. We build robotic process automation that interacts with desktop applications, internal systems, and brittle platforms standard automation tools cannot touch. We automate the work inside your environment while preserving the control, traceability, and security boundaries expected in federal, DIB, healthcare, and financial services operations."
    }
  ];

  const benefits = [
    "Automate complex lead intake, approval processes, and notification systems with intelligent routing that adapts to business rules, handles exceptions, and maintains detailed activity logs for complete process transparency",
    "Connect every SaaS tool in your tech stack through robust API integrations and custom middleware solutions that ensure seamless data flow, eliminate manual data entry, and maintain data consistency across all business applications",
    "Trigger sophisticated multi-step workflows automatically based on business events, time schedules, or data conditions, with advanced conditional logic that handles complex decision trees and process variations",
    "Maintain comprehensive audit trails and real-time monitoring with detailed logging, performance analytics, and compliance reporting that provides complete visibility into workflow execution and business process performance",
    "Scale operations exponentially without adding complexity or overhead, enabling businesses to handle increased volume and process sophistication while maintaining operational efficiency and quality standards",
    "Built with industry-leading automation platforms including n8n for visual workflow design, Make for complex integrations, and custom Python solutions for specialized business requirements and advanced functionality",
    "Advanced error handling and recovery systems that automatically detect issues, implement fallback procedures, and notify appropriate stakeholders to ensure business continuity and minimize process disruptions",
    "Intelligent workflow optimization that continuously analyzes performance data and suggests improvements, enabling ongoing refinement of business processes and operational efficiency gains",
    "Comprehensive integration capabilities that work with existing business systems, databases, and communication tools without requiring major infrastructure changes or system replacements"
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Helmet>
        <title>Workflow Automation for Federal, DIB, Healthcare & Financial Services | Autom8ion Lab</title>
        <meta name="description" content="Secure workflow and process automation for US Federal, DIB, healthcare, and financial services teams. Multi-step approval workflows, private-network AI agents, and RPA aligned to FedRAMP, NIST 800-53, and FISMA. Live in 30 days." />
        <meta name="keywords" content="workflow automation, FedRAMP automation, NIST 800-53 workflow, FISMA automation, DIB workflow automation, private network AI agents, RPA controlled environments, multi-step approval workflows, audit trail automation, SDVOSB" />
        <link rel="canonical" href={getCanonicalUrl('/solutions/workflow-automation')} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Workflow Automation for Federal, DIB, Healthcare & Financial Services | Autom8ion Lab" />
        <meta property="og:description" content="Secure, professional-grade workflow and process automation for regulated environments. Multi-step approval workflows, private-network AI agents, RPA — aligned to FedRAMP, NIST 800-53, and FISMA. SDVOSB Pending." />
        <meta property="og:url" content="https://autom8ionlab.com/solutions/workflow-automation" />
        <meta property="og:image" content="https://autom8ionlab.com/logo/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@autom8ionlab" />
        <meta name="twitter:title" content="Workflow Automation for Federal, DIB, Healthcare & Financial Services | Autom8ion Lab" />
        <meta name="twitter:description" content="Secure workflow and process automation for regulated environments. Multi-step approvals, private-network AI agents, RPA — aligned to FedRAMP, NIST 800-53, and FISMA." />
        <meta name="twitter:image" content="https://autom8ionlab.com/logo/logo.png" />
        
        <script type="application/ld+json">
          {buildJsonLd({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Workflow Automation",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Autom8ion Lab"
            },
            "description": "Enterprise workflow automation tools that connect systems, eliminate repetitive tasks, and improve productivity. End-to-end automation platforms using n8n, Make, or Python.",
            "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "url": "https://autom8ionlab.com/solutions/workflow-automation",
            "sameAs": [
              "https://www.linkedin.com/company/autom8ionlab",
              "https://autom8ionlab.com"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Workflow Automation Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "End-to-End Process Mapping"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Multi-Platform Integration"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Complete Audit Trails"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "CRM Integration (Salesforce, HubSpot)"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Google Workspace & Slack Integration"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Automated Task Management"
                  }
                }
              ]
            }
          })}
        </script>
        <script type="application/ld+json">
          {buildJsonLd({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://autom8ionlab.com/" },
              { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://autom8ionlab.com/#solutions" },
              { "@type": "ListItem", "position": 3, "name": "Workflow Automation", "item": "https://autom8ionlab.com/solutions/workflow-automation" }
            ]
          })}
        </script>
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow delay-700"></div>
        </div>

        <Header />

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="flex items-center space-x-2 bg-purple-900/30 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-500/20">
                <Workflow className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">Workflow Automation</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Workflow & Process Automation</span>
              <br />
              for Compliance Environments
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Secure, professional-grade workflow and process automation for US Federal, DIB, healthcare, and financial services teams. Multi-step approval workflows, private-network AI agents, and RPA for controlled environments — aligned to FedRAMP, NIST 800-53, and FISMA.
            </p>


            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/get-in-touch" className="group bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center space-x-2">
                <span>Automate Your Workflows</span>
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
              Stop Babysitting <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Bottlenecks</span>
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Most operations teams are running on borrowed time. Your stack is a fragile web of duct-taped tools, half-baked automations, and manual spreadsheets that require a human to chase approvals, update records, and document decisions by hand. When one field changes or one reviewer misses a step, the whole process stalls. You aren't running an automated business; you're babysitting a chain of operational bottlenecks. Generic automation tools fail fast when your process includes approvals, exceptions, access controls, documentation requirements, and compliance evidence.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              At Autom8ion Lab, we don't just "link apps." We engineer end-to-end systems around your exact business logic, your compliance requirements, and your internal controls. We build secure, professional-grade workflow and process automation for US Federal agencies, Defense Industrial Base contractors, healthcare organizations, and financial services teams that need multi-step approval workflows, complete audit trails, private-network AI agents, and RPA for controlled environments. Veteran-owned, SDVOSB Pending. UEI: YY2DR3KSENH7. CAGE: 9YCS7.
            </p>
          </div>
        </div>
      </section>

      {/* Problem/Solution Video Section - Commented out until videos are ready */}
      {/* 
      <section className="py-16 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              See How We Solve Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Workflow Challenges</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Watch our explainer video to understand how intelligent workflow automation eliminates bottlenecks and streamlines operations.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
              <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE?rel=0&modestbranding=1"
                  title="Workflow Automation - Problem/Solution Explainer Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Features Section */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise Workflow Automation Tools <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">That Scale</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Modular, scalable automation that grows with your team—from marketing and sales to operations and finance—handling complex business processes with precision and intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
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

      {/* How It Works Section */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Workflow Automation <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Process</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From process mapping to deployment and monitoring, our systematic approach ensures every workflow is optimized for efficiency and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Process Discovery & Mapping</h3>
              <p className="text-slate-400 text-sm">We analyze your current business processes, identify bottlenecks and inefficiencies, and create comprehensive workflow maps that serve as the foundation for automation design and implementation.</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-400 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Automation Design & Development</h3>
              <p className="text-slate-400 text-sm">Our automation specialists design custom workflows using n8n, Make, or Python scripts, incorporating conditional logic, error handling, and integration points with your existing systems and tools.</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Testing & Integration</h3>
              <p className="text-slate-400 text-sm">Comprehensive testing ensures workflows operate correctly under various scenarios, with seamless integration into your existing systems and thorough validation of all automation triggers and actions.</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-400 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Monitoring & Optimization</h3>
              <p className="text-slate-400 text-sm">Continuous monitoring and performance analytics provide insights into workflow efficiency, with ongoing optimization and refinement based on real-world usage patterns and business requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Workflow Automation Solutions <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">for Any Department</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From HR onboarding and sales automation to support ticket routing and invoicing—our automated task management systems handle department-specific workflows with intelligent routing and optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Sales & Marketing: Lead Qualification & Nurturing</h3>
              <p className="text-slate-300 leading-relaxed">
                Automate lead qualification, nurturing sequences, and sales handoffs with intelligent workflows that route prospects based on criteria, trigger personalized follow-ups, and maintain detailed activity logs. Integration with CRM systems like Salesforce and HubSpot ensures seamless data flow and eliminates manual data entry. Combine with our <Link to="/solutions/ai-agent-development" className="text-cyan-400 hover:text-cyan-300 underline">AI agent development</Link> services for intelligent lead conversations that qualify and convert automatically.
              </p>
            </div>

            <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Human Resources: Onboarding & Employee Management</h3>
              <p className="text-slate-300 leading-relaxed">
                Streamline employee onboarding, time-off requests, and performance review processes with automated workflows that handle document collection, approval routing, and notification systems. Our business process automation software integrates with HRIS platforms to automate compliance tracking and reporting while reducing administrative overhead. Leverage <Link to="/solutions/process-automation" className="text-cyan-400 hover:text-cyan-300 underline">RPA solutions</Link> for repetitive HR data entry tasks.
              </p>
            </div>

            <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Financial Operations: Invoicing & Expense Management</h3>
              <p className="text-slate-300 leading-relaxed">
                Automate invoice processing, expense approvals, and financial reporting with workflows that handle document routing, approval hierarchies, and integration with accounting systems like QuickBooks and Xero. Our enterprise workflow automation tools reduce manual effort while improving accuracy and audit trail completeness. Built on secure <Link to="/solutions/cloud-infrastructure" className="text-cyan-400 hover:text-cyan-300 underline">cloud infrastructure</Link> for reliable financial data processing.
              </p>
            </div>

            <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Customer Support: Ticket Routing & Escalation</h3>
              <p className="text-slate-300 leading-relaxed">
                Create intelligent ticket routing and escalation workflows that automatically categorize support requests, assign them to appropriate team members, and trigger follow-up actions based on resolution status. Our automated task management systems integrate with platforms like Zendesk, Freshdesk, and Intercom to ensure consistent service quality and response times. Pair with <Link to="/solutions/ai-agent-development" className="text-cyan-400 hover:text-cyan-300 underline">AI chatbots</Link> for instant first-line support.
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
              Eliminate Bottlenecks with 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"> Intelligent Workflows</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Stop losing time on repetitive tasks. Our custom workflow automation solutions integrate seamlessly with your existing systems to create efficient, error-free processes.
            </p>
            <Link to="/get-in-touch" className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
              Get Workflow Analysis
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
              Why Choose Autom8ion Lab's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Workflow Platform</span>
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Most agencies sell access to a platform they did not build and cannot secure for your environment. We take a different approach. We build workflow and process automation on infrastructure you control because regulated operations demand control, traceability, and isolation. Our 30-day launch framework moves you from approval chaos to secure, auditable automation: process audit and control mapping in week one, build and engineering in weeks two and three, validation and deployment in week four. We don't just build the happy path — we build access controls, logging, retry logic, and exception handling so the system performs under real operational pressure.
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              We are veteran-owned and SDVOSB Pending, with federal identifiers ready (UEI: YY2DR3KSENH7, CAGE: 9YCS7). Our clients target a 10x ROI: hundreds of hours a month saved, reduced approval friction, and stronger compliance evidence. Our systems scale from 100 tasks a day to 100,000 without sacrificing traceability or control. If we're not delivering measurable outcomes against NIST 800-53, FISMA, and FedRAMP-aligned cloud expectations, we haven't done our job.
            </p>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">
                Book a Consultation to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Map Your Workflow Automation Plan</span>
              </h3>
              <p className="text-cyan-400 font-semibold mb-2">Ready to eliminate manual tasks and streamline operations?</p>
              <p className="text-slate-300 mb-6">
                Join forward-thinking businesses that have already revolutionized their operations with our enterprise workflow automation tools. Our end-to-end automation platforms integrate with your existing systems to create unified, intelligent workflows. Schedule a consultation to see how we can design custom AI workflow automation solutions tailored to your specific industry requirements and operational objectives.
              </p>
              <Link to="/get-in-touch" className="inline-block bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                Book Your Workflow Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <RelatedSolutions currentSlug="workflow-automation" />
      <Footer />
    </div>
  );
};

export default WorkflowAutomation;