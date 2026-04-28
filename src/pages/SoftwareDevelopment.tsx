import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Code, Layers, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { getCanonicalUrl, buildJsonLd } from '../utils/seo';
import RelatedSolutions from '../components/RelatedSolutions';

const SoftwareDevelopment = () => {
  const features = [
    {
      icon: Layers,
      title: "Custom Platforms for Regulated Workflows",
      description: "Federal teams run on forms, approvals, records, and deadlines — generic software slows you down. We build custom internal tools, CRM and case management platforms, role-based access controls, and FedRAMP-, FISMA-, and NIST 800-53-aligned workflows. Security architecture is defined on day one — identity, encryption, logging, segmentation, and system design planned before features are built. We don't force federal workflows into a generic CRM. We build the platform around your mission and compliance requirements."
    },
    {
      icon: Shield,
      title: "Enterprise Software Engineering for Federal Operations",
      description: "Federal operations teams don't need another dashboard — you need systems that control work, enforce policy, support mission execution, and remove bottlenecks. We build internal platforms that become the operating layer for agency workflows: workflow portals, team-specific tools, CRM systems, and case management environments that centralize records, automate handoffs, and create clean audit trails. Unified operational data, custom workflow engines, structured case and record management, and legacy modernization with modern API wrappers."
    },
    {
      icon: Zap,
      title: "Scalable Cloud-Native Builds + AI Integration",
      description: "We build scalable cloud-native software designed for the modern era — directly for AWS, Azure, or GCP. Serverless architectures, microservices, containerization, 99.9% uptime through built-in redundancy. Security by design with FedRAMP, FISMA, and NIST 800-53 controls integrated from day one. We integrate custom LLM systems directly into your codebase so your software can think, categorize data, and interact in natural language — and our API integrations sync with CRM, ERP, and existing platforms so your build becomes the hub of your digital ecosystem, not another silo."
    }
  ];

  const benefits = [
    "Custom software solutions tailored to your unique business logic, operational requirements, and industry-specific challenges with flexible architecture that adapts to changing business needs and growth objectives",
    "Modern technology stack utilizing the latest frameworks, programming languages, and development tools including React, Node.js, Python, and cloud-native technologies for optimal performance and maintainability",
    "Scalable architecture designed for future growth with microservices design patterns, cloud deployment capabilities, and modular components that enable seamless expansion and feature enhancement as business requirements evolve",
    "Enterprise-grade security protocols and compliance frameworks including data encryption, access controls, audit logging, and regulatory compliance measures that protect sensitive business information and ensure industry standard adherence",
    "Agile development methodology with rapid iteration cycles, continuous integration and deployment practices, and regular stakeholder feedback incorporation that ensures timely delivery and alignment with business objectives",
    "Comprehensive documentation, user training, and ongoing technical support with maintenance services, performance monitoring, and feature enhancement capabilities that ensure long-term software reliability and effectiveness",
    "Advanced integration capabilities that seamlessly connect with existing business systems, third-party APIs, and legacy applications without disrupting current operations or requiring major infrastructure changes",
    "Performance optimization and monitoring systems that ensure optimal software performance, identify bottlenecks, and provide real-time insights into system health and user experience metrics",
    "Cross-platform compatibility and responsive design that ensures consistent functionality across desktop, mobile, and tablet devices while maintaining optimal user experience and accessibility standards"
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Helmet>
        <title>Custom Software Development for Federal, DIB, Healthcare & Financial Services | Autom8tion Lab</title>
        <meta name="description" content="AI-powered enterprise software, internal tools, and CRM/case management platforms for US Federal, DIB, healthcare, and financial services teams. Security architecture aligned to FedRAMP, FISMA, and NIST 800-53 from day one. SDVOSB Pending. Live in 30 days." />
        <meta name="keywords" content="federal software development, DIB software, FedRAMP software development, FISMA software, NIST 800-53 platforms, custom CRM federal, case management federal, SDVOSB software development, mission support platform, regulated industry software" />
        <link rel="canonical" href={getCanonicalUrl('/solutions/software-development')} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Custom Software Development for Federal, DIB, Healthcare & Financial Services | Autom8tion Lab" />
        <meta property="og:description" content="AI-powered enterprise platforms, internal tools, and case management built for compliance-driven workflows. FedRAMP, FISMA, NIST 800-53 from day one. SDVOSB Pending — UEI: YY2DR3KSENH7." />
        <meta property="og:url" content="https://autom8ionlab.com/solutions/software-development" />
        <meta property="og:image" content="https://autom8ionlab.com/logo/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@autom8ionlab" />
        <meta name="twitter:title" content="Custom Software Development Company | Scalable Engineering | Autom8ion Lab" />
        <meta name="twitter:description" content="Autom8ion Lab builds scalable, secure, and high-performance software. From SaaS apps to enterprise platforms — full-stack development built around your goals." />
        <meta name="twitter:image" content="https://autom8ionlab.com/logo/logo.png" />

        <script type="application/ld+json">
          {buildJsonLd({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Software Development",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Autom8tion Lab",
              "areaServed": {
                "@type": "Place",
                "name": "United States"
              }
            },
            "description": "Leading software development company USA delivering custom engineering services for SaaS applications, enterprise platforms, and full-stack solutions. We build scalable, secure software tailored to your business goals.",
            "softwareRequirements": "React, Node.js, Python, TypeScript, PostgreSQL, MongoDB",
            "programmingLanguage": ["JavaScript", "TypeScript", "Python", "Java", "Go"],
            "serviceOutput": {
              "@type": "SoftwareApplication",
              "applicationCategory": ["SaaS Platform", "Enterprise Software", "Web Application", "Mobile Application"]
            },
            "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "url": "https://autom8ionlab.com/solutions/software-development",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Software Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Full-Stack Development",
                    "description": "End-to-end software engineering using React, Node.js, Python, and cloud-native technologies"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SaaS Application Development",
                    "description": "Scalable SaaS platforms from MVP to production with ongoing maintenance"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Enterprise Software Solutions",
                    "description": "Secure, scalable architecture for enterprise-grade applications"
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
              { "@type": "ListItem", "position": 3, "name": "Software Development", "item": "https://autom8ionlab.com/solutions/software-development" }
            ]
          })}
        </script>
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse-slow delay-700"></div>
        </div>

        <Header />

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="flex items-center space-x-2 bg-blue-900/30 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/20">
                <Code className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-medium">Software Development Company USA</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Custom Software for Federal Operations
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">Solutions Built for Scale</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              AI-powered enterprise software, internal tools, and CRM/case management platforms built for US Federal, DIB, healthcare, and financial services teams. Security architecture aligned to FedRAMP, FISMA, and NIST 800-53 from day one. SDVOSB Pending — UEI: YY2DR3KSENH7, CAGE: 9YCS7.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/get-in-touch" className="group bg-gradient-to-r from-blue-600 to-sky-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-sky-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center space-x-2">
                <span>Start Your Software Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise-Grade Software Section */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Enterprise-Grade Software Tailored to Your Business
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Federal teams are stuck with software that almost works. You rely on off-the-shelf platforms that solve part of the problem while creating new security, integration, and compliance gaps. You duct-tape tools that don't talk, then wonder why mission workflows, approvals, and records management keep breaking. The traditional agency model is equally broken — months of discovery with account managers who never touch the code, then a bloated product that still doesn't fit your process.
            </p>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              At Autom8tion Lab, we build AI-powered enterprise software and applications for US Federal, Defense Industrial Base, Healthcare, and Financial Services teams — including custom platforms, internal tools, and CRM or case management systems built for compliance-driven workflows. Our founder-led model gives you direct access to the engineers designing your system. Security architecture is defined on day one with FedRAMP, FISMA, and NIST 800-53 controls in mind, not patched in later. Veteran-owned, SDVOSB Pending. UEI: YY2DR3KSENH7. CAGE: 9YCS7.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Federal operations are unique. Regulated operations are too. Whether you're modernizing a federal workflow, supporting a DIB environment, or replacing brittle internal systems in healthcare or financial services, we have the engineering talent and direct approach needed to get you to the finish line. Full IP ownership — you own the code. Our 30-day launch framework moves you from architecture to deployment with senior engineers, not account managers, in every stage.
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
              See How We Solve Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">Software Challenges</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Watch our explainer video to understand how custom software development creates solutions that perfectly fit your business needs.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
              <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE?rel=0&modestbranding=1"
                  title="Software Development - Problem/Solution Explainer Video"
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

      {/* Full-Stack Engineering Services Section */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Full-Stack Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">Engineering Services</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive full-stack software development expertise covering frontend, backend, databases, and modern frameworks. Our engineering team brings decades of combined experience building production-grade systems.
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
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-sky-400 rounded-xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-sky-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">Modern Technology Stack</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Our full-stack software development services leverage industry-leading frameworks and languages including React, Angular, Vue.js for frontend; Node.js, Python, Java, Go for backend; PostgreSQL, MongoDB, Redis for databases; and AWS, Azure, Google Cloud for infrastructure. We follow development best practices including clean architecture, SOLID principles, comprehensive testing, and continuous integration/deployment.
            </p>
            <div className="flex flex-wrap gap-3">
              {['React', 'Node.js', 'Python', 'TypeScript', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes'].map((tech, i) => (
                <span key={i} className="px-4 py-2 bg-blue-900/30 text-blue-300 rounded-lg text-sm font-medium border border-blue-700/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SaaS Application Development Section */}
      <section className="py-20 bg-slate-900/50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              SaaS Application Development and Deployment
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Our SaaS application development expertise spans the entire product lifecycle — from initial MVP creation to production-ready deployment and ongoing maintenance. We architect multi-tenant systems that scale efficiently, optimize infrastructure costs, and deliver exceptional user experiences across thousands of concurrent users.
            </p>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Whether you're launching a new SaaS product or modernizing an existing platform, we handle subscription management, payment processing, user authentication, data isolation, and automated scaling. Our SaaS solutions include robust admin panels, comprehensive analytics dashboards, and API-first architecture that enables seamless third-party integrations.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              We maintain your SaaS platform with proactive monitoring, security updates, performance optimization, and feature enhancements based on user feedback and market demands. Our clients achieve 99.99% uptime SLAs and handle millions of transactions monthly with confidence. Looking to build or enhance a SaaS platform? Partner with <Link to="/solutions/mobile-app-development" className="text-blue-400 hover:text-blue-300 underline">experts who understand mobile-first</Link> and cloud-native architectures.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Software Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">Process</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From requirements analysis to deployment and maintenance, our systematic approach ensures every software solution delivers exceptional performance and business value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-400 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Requirements & Architecture Design</h3>
              <p className="text-slate-400 text-sm">We analyze your business requirements, technical constraints, and scalability needs to develop comprehensive software architecture designs and development strategies tailored to your specific objectives.</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
              <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-400 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Agile Development & Testing</h3>
              <p className="text-slate-400 text-sm">Our development team uses agile methodologies and continuous integration practices to build robust software solutions with comprehensive testing, code reviews, and quality assurance protocols.</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-400 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Integration & Security</h3>
              <p className="text-slate-400 text-sm">Seamless integration with existing systems and implementation of enterprise-grade security measures, including data encryption, access controls, and compliance protocols.</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
              <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-400 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Deployment & Maintenance</h3>
              <p className="text-slate-400 text-sm">Production deployment with continuous monitoring, performance optimization, and ongoing maintenance to ensure optimal software performance and reliability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration-Ready Systems Section */}
      <section className="py-20 bg-slate-900/50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Integration-Ready Systems for Maximum Efficiency
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Modern businesses operate on interconnected systems. Our custom software engineering services include seamless integration capabilities that connect your new software with CRMs, ERPs, payment processors, marketing automation platforms, and legacy systems. We build <Link to="/solutions/api-integrations" className="text-blue-400 hover:text-blue-300 underline">robust API bridges</Link> that enable real-time data synchronization and automated workflows across your entire technology ecosystem.
            </p>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Whether you need to integrate Salesforce, SAP, Oracle, Microsoft Dynamics, or custom-built internal tools, we architect integration layers that maintain data integrity, handle error recovery gracefully, and provide comprehensive audit trails. Our integration solutions reduce manual data entry by 90% and eliminate costly data silos that slow decision-making.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              We also ensure your software deploys reliably on <Link to="/solutions/cloud-systems" className="text-blue-400 hover:text-blue-300 underline">modern cloud infrastructure</Link> with automated scaling, monitoring, and disaster recovery. Whether AWS, Azure, Google Cloud, or hybrid environments, we optimize for performance and cost efficiency while maintaining enterprise-grade security and compliance standards.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">Applications</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover how businesses across industries leverage our custom software development platform to solve complex challenges and drive digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Enterprise Resource Planning</h3>
              <p className="text-slate-300 leading-relaxed">
                Develop comprehensive ERP systems that integrate financial management, inventory control, human resources, and operational workflows into unified platforms. Custom ERP solutions provide real-time visibility into business operations, automated reporting capabilities, and scalable architecture that grows with organizational needs while maintaining data integrity and security compliance.
              </p>
            </div>

            <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Customer Relationship Management</h3>
              <p className="text-slate-300 leading-relaxed">
                Create sophisticated CRM platforms that manage customer interactions, sales pipelines, and marketing campaigns with advanced analytics and automation capabilities. Custom CRM solutions include intelligent lead scoring, automated workflow triggers, and comprehensive reporting that provides actionable insights for sales optimization and customer retention strategies.
              </p>
            </div>

            <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Data Analytics & Business Intelligence</h3>
              <p className="text-slate-300 leading-relaxed">
                Build powerful analytics platforms that transform raw business data into actionable insights through advanced visualization, predictive modeling, and real-time reporting capabilities. Custom analytics solutions integrate multiple data sources, provide interactive dashboards, and enable data-driven decision making across all organizational levels and business functions.
              </p>
            </div>

            <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Industry-Specific Solutions</h3>
              <p className="text-slate-300 leading-relaxed">
                Develop specialized software solutions for healthcare, finance, manufacturing, and other industries with unique regulatory requirements and operational challenges. Industry-specific solutions include compliance monitoring, specialized workflows, and integration capabilities that address sector-specific needs while maintaining security and performance standards.
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
              Transform Your Business with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400"> Custom Software</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Our custom software solutions are designed to solve your unique business challenges while providing the flexibility and scalability needed for future growth.
            </p>
            <Link to="/get-in-touch" className="bg-gradient-to-r from-blue-600 to-sky-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-sky-600 transition-all duration-300 transform hover:scale-105">
              Discuss Your Project
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.slice(0, 8).map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 bg-slate-800/30 p-4 rounded-lg border border-slate-700/50">
                <CheckCircle className="w-6 h-6 text-sky-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-900/50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Why Businesses Choose Autom8tion Lab as Their Development Partner
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              As a trusted software development company USA, we differentiate ourselves through transparent project management, collaborative processes, and unwavering reliability. Unlike agencies that treat you as a ticket number, we assign dedicated engineering teams who learn your business deeply and become true partners in your success.
            </p>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Our collaborative approach means you're involved at every milestone — from architecture design to sprint reviews to deployment planning. We communicate proactively, deliver on commitments, and solve problems before they become blockers. Clients consistently rate our communication and project management as industry-leading, with 95% stating they'd recommend us to peers.
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              We measure success by your business outcomes, not just code delivered. Our clients typically achieve 300% ROI within the first year through increased efficiency, reduced operational costs, and new revenue opportunities enabled by custom software. When you need a reliable software development company USA that delivers measurable results, choose Autom8tion Lab.
            </p>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's Build Your Software — From Idea to Launch
              </h3>
              <p className="text-slate-300 mb-6">
                Ready to transform your business with custom software that scales? Schedule a free consultation with our engineering team. We'll discuss your requirements, provide architectural recommendations, and outline a clear path from concept to production deployment.
              </p>
              <Link to="/get-in-touch" className="inline-block bg-gradient-to-r from-blue-600 to-sky-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-sky-600 transition-all duration-300 transform hover:scale-105">
                Start Your Project Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <RelatedSolutions currentSlug="software-development" />
      <Footer />
    </div>
  );
};

export default SoftwareDevelopment;