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
      title: "End-to-End Process Mapping",
      description: "Business process analysis and visualization that maps every step of your workflows from initial trigger to final completion. Our intelligent mapping system identifies bottlenecks, redundancies, and optimization opportunities while creating process documentation. Conditional logic and decision trees ensure workflows adapt to different scenarios, handle exceptions gracefully, and maintain process integrity across multi-departmental operations with complete visibility and control."
    },
    {
      icon: Zap,
      title: "Integrate Everything: CRMs, Apps, and Data Sources",
      description: "Connect your entire tech stack through API integrations with platforms like Salesforce, HubSpot, Google Workspace, Slack, Microsoft Teams, and hundreds of other business applications. Our automation platforms ensure seamless data synchronization across CRM systems, project management tools, communication channels, and databases. Whether using n8n for visual workflow design, Make for integrations, or custom Python scripts for specialized requirements, we create automated task management systems that eliminate manual data entry and ensure real-time information flow across your organization."
    },
    {
      icon: Clock,
      title: "Complete Audit Trails",
      description: "Monitoring and logging system that tracks every workflow execution, decision point, and data transformation with audit trails and performance analytics. Monitoring capabilities provide real-time visibility into workflow status, execution times, error rates, and system performance. Reporting and analytics enable continuous optimization while ensuring compliance requirements are met. Alerting systems notify stakeholders of exceptions, delays, or performance issues, enabling proactive management and rapid resolution of workflow disruptions."
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
        <title>Workflow Automation Solutions | End-to-End AI Systems | Autom8ion Lab</title>
        <meta name="description" content="Streamline operations with enterprise-grade AI workflow automation. Connect systems, eliminate repetitive tasks, and improve productivity company-wide." />
        <meta name="keywords" content="enterprise workflow automation tools, end-to-end automation platforms, ai workflow automation solutions, automated task management systems, business process automation software" />
        <link rel="canonical" href={getCanonicalUrl('/solutions/workflow-automation')} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Workflow Automation Solutions | End-to-End AI Systems" />
        <meta property="og:description" content="Streamline operations with enterprise-grade AI workflow automation. Connect systems, eliminate repetitive tasks, and improve productivity company-wide." />
        <meta property="og:url" content="https://autom8ionlab.com/solutions/workflow-automation" />
        <meta property="og:image" content="https://autom8ionlab.com/logo/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@autom8ionlab" />
        <meta name="twitter:title" content="Workflow Automation Solutions | End-to-End AI Systems | Autom8ion Lab" />
        <meta name="twitter:description" content="Streamline operations with enterprise-grade AI workflow automation. Connect systems, eliminate repetitive tasks, and improve productivity company-wide." />
        <meta name="twitter:image" content="https://autom8ionlab.com/logo/logo.png" />
        
        <script type="application/ld+json">
          {buildJsonLd({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Workflow Automation",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Autom8tion Lab"
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
              AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Workflow Automation</span>
              <br />
              for Smarter, Faster Operations
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Enterprise workflow automation tools that connect your systems, eliminate repetitive tasks, and boost productivity company-wide. End-to-end automation platforms designed for growing SMBs and enterprise teams.
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
              Streamline Every Step of Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Business Workflow</span>
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Autom8ion Lab designs intelligent automation platforms that eliminate repetitive manual tasks across your organization. Our workflow automation tools transform disconnected systems into unified solutions that handle everything from lead intake and approvals to reporting and notifications. By connecting every application in your tech stack (CRMs, project management tools, communication platforms, and databases), we create automated task management systems that reduce complexity, minimize human error, and free your team to focus on high-value strategic work.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Unlike generic business process automation software that requires extensive technical knowledge, our platform delivers custom-built workflows tailored to your operational needs. Using tools like n8n for visual workflow design, Make for integrations, and custom Python scripts for specialized requirements, we create scalable automation solutions that grow with your business. Whether you're a growing SMB looking to eliminate manual overhead or an enterprise department seeking to optimize cross-functional processes, our workflow automation solutions provide complete visibility, control, and continuous optimization.
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
              Unlike generic business process automation software that offers template-based solutions with limited customization, Autom8tion Lab delivers enterprise workflow automation tools tailored to your specific operational needs. Our end-to-end automation platforms connect every system in your tech stack—from disconnected applications to unified AI workflow automation solutions that work seamlessly together. We combine consultative clarity (showing teams exactly how to save time) with enterprise-level authority (proven scalability and reliability). Whether you're a growing SMB eliminating manual overhead or an enterprise department optimizing cross-functional processes, our platform adapts to your unique requirements.
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              We don't just provide access to automation platforms—we build comprehensive automated task management systems that integrate seamlessly with Salesforce, HubSpot, Google Workspace, Slack, and hundreds of other business applications. Our clients typically see a 300% improvement in process efficiency and 80% reduction in manual task overhead within the first 60 days. With advanced monitoring, complete audit trails, and continuous optimization, our AI workflow automation solutions deliver unprecedented visibility into workflow performance while ensuring compliance and reliability at every step.
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