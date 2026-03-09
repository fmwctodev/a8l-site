import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Link2, Cloud, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { getCanonicalUrl, buildJsonLd } from '../utils/seo';
import RelatedSolutions from '../components/RelatedSolutions';

const APIIntegrations = () => {
  const features = [
    {
      icon: Shield,
      title: "OAuth 2.0 & Token-Based Security",
      description: "Enterprise-grade security architecture implementing OAuth 2.0 authentication, JWT token management, and end-to-end encrypted data transmission. Our secure API management services include API key rotation, IP whitelisting, rate limiting, and comprehensive audit logging that tracks every API call. We ensure compliance with SOC 2, GDPR, HIPAA, and industry-specific regulations while protecting sensitive business data across all integration endpoints."
    },
    {
      icon: Cloud,
      title: "Real-Time Monitoring & Analytics",
      description: "Comprehensive API monitoring systems that provide real-time visibility into integration health, performance metrics, and error rates. Our monitoring dashboards track API response times, throughput, success rates, and system dependencies. Advanced alerting systems notify your team of anomalies, performance degradation, or security incidents, enabling proactive issue resolution before they impact business operations."
    },
    {
      icon: Zap,
      title: "Intelligent Rate Limiting & Throttling",
      description: "Sophisticated rate limiting and throttling mechanisms that protect your APIs from overload while ensuring fair resource allocation. Our API management platform implements adaptive rate limits based on user tiers, automatically scales to handle traffic spikes, and provides detailed analytics on API usage patterns. Built-in retry logic and circuit breakers ensure resilient integrations even under high-load conditions."
    }
  ];

  const benefits = [
    "Connect Salesforce, HubSpot, Shopify, AWS, Google Cloud, and payment gateways with robust API integration solutions for business that unify your entire tech stack and eliminate data silos",
    "Real-time data synchronization ensures information consistency across CRM, ERP, e-commerce, and financial systems—reducing manual entry by 90% and eliminating costly data inconsistencies",
    "RESTful API development services include comprehensive documentation, automated testing, versioning strategies, and developer portals that empower your technical teams",
    "Secure API management services with OAuth 2.0 authentication, API key management, rate limiting, and comprehensive audit logging that meets SOC 2, GDPR, and HIPAA compliance requirements",
    "Third-party API connection services for hundreds of SaaS platforms including Slack, Microsoft Teams, Zendesk, Stripe, QuickBooks, and industry-specific applications",
    "API integration for enterprise systems handles complex data transformations, business rule enforcement, and intelligent routing across multiple departments and legacy applications",
    "Advanced webhook systems trigger automated workflows based on business events—from new customer sign-ups to inventory updates and payment confirmations",
    "Comprehensive monitoring dashboards provide real-time visibility into API performance, error rates, usage patterns, and system health with proactive alerting",
    "Scalable cloud-hosted integration services that grow with your business, handling increasing data volumes and complexity without performance degradation or infrastructure limitations"
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Helmet>
        <title>API Integration Solutions | Secure Business Connectivity</title>
        <meta name="description" content="Connect your systems seamlessly with API integration services from Autom8ion Lab. Secure, scalable, and built to unify your business operations." />
        <meta name="keywords" content="API integration solutions for business, secure API management services, API integration for enterprise systems, RESTful API development, third-party API connection services" />
        <link rel="canonical" href={getCanonicalUrl('/solutions/api-integrations')} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="API Integration Solutions | Secure Business Connectivity" />
        <meta property="og:description" content="Connect your systems seamlessly with API integration services from Autom8ion Lab. Secure, scalable, and built to unify your business operations." />
        <meta property="og:url" content="https://autom8ionlab.com/solutions/api-integrations" />
        <meta property="og:image" content="https://autom8ionlab.com/logo/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="API Integration Solutions | Secure Business Connectivity" />
        <meta name="twitter:description" content="Connect your systems seamlessly with API integration services from Autom8ion Lab. Secure, scalable, and built to unify your business operations." />
        <meta name="twitter:image" content="https://autom8ionlab.com/logo/logo.png" />
        
        <script type="application/ld+json">
          {buildJsonLd({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "API Integration Services",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Autom8tion Lab"
            },
            "description": "Secure, scalable API integration solutions for business. Connect systems seamlessly with RESTful API development, third-party integrations, and enterprise API management services.",
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
                    "name": "RESTful API Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Third-Party API Connection Services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Secure API Management Services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Enterprise System Integration"
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
              { "@type": "ListItem", "position": 3, "name": "API Integrations", "item": "https://autom8ionlab.com/solutions/api-integrations" }
            ]
          })}
        </script>
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-green-950 to-slate-950 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow delay-700"></div>
        </div>

        <Header />

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
              Secure, Scalable API Integration Solutions
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"> for Modern Businesses</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Connect your tools, so your team can focus on growth. Our API integration solutions for business unify CRMs, ERPs, and third-party platforms with secure, real-time connectivity.
            </p>


            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/get-in-touch" className="group bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-700 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 flex items-center space-x-2">
                <span>Get Expert API Integration Help Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Simplify Operations Section */}
      <section className="py-16 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Simplify Operations With <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Unified System Integrations</span>
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              At Autom8ion Lab, we specialize in API integration solutions for business that connect your CRMs, ERPs, and third-party tools into a unified ecosystem. Whether you're connecting Salesforce to your inventory system, syncing HubSpot with your payment gateway, or building custom integrations for proprietary software, we create seamless data flow that eliminates manual entry and reduces errors.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Our secure API management services ensure real-time data synchronization across all your business platforms. We connect your tools, so your team can focus on growth—not on copying data between systems or chasing down inconsistencies. With expertise in RESTful API development, GraphQL implementations, and webhook architectures, we build third-party API connection services that scale with your business needs.
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
              See How We Solve Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Integration Challenges</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Watch our explainer video to understand how custom API integrations unify your tech stack and eliminate data silos.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
              <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE?rel=0&modestbranding=1"
                  title="API Integrations - Problem/Solution Explainer Video"
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

      {/* Custom API Development Section */}
      <section className="py-20 bg-slate-900/50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Custom API Development and <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Implementation</span>
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Our RESTful API development services cover the complete lifecycle—from design and testing to deployment and documentation. We build custom APIs that enable your applications to communicate efficiently, whether you need internal microservices, partner integrations, or public API platforms. Every API we develop follows industry best practices for versioning, authentication, rate limiting, and error handling.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Beyond REST, we implement GraphQL APIs for flexible data querying, webhook systems for real-time event notifications, and SOAP integrations for legacy system compatibility. Our API integration for enterprise systems includes comprehensive testing suites, performance optimization, and detailed documentation that empowers your development teams. We also provide <Link to="/solutions/software-development" className="text-green-400 hover:text-green-300 underline">custom software development</Link> to build applications around your APIs.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise API Management and <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Security Services</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Secure API management services that ensure authentication, rate limiting, monitoring, and compliance across all your integrations.
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

      {/* Third-Party Integration Section */}
      <section className="py-20 bg-slate-900/50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Third-Party API Integration for <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">SaaS and Cloud Platforms</span>
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              We build third-party API connection services that integrate seamlessly with Salesforce, HubSpot, Google Workspace, AWS services, Azure platforms, Stripe payment processing, Shopify e-commerce, Slack communications, and hundreds of other business applications. Our integration specialists understand the nuances of each platform's API, from authentication flows to webhook configurations.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Whether you need CRM synchronization, payment gateway integration, marketing automation connections, or cloud storage APIs, we handle the complexity. Our <Link to="/solutions/workflow-automation" className="text-green-400 hover:text-green-300 underline">workflow automation</Link> expertise ensures these integrations trigger intelligent business processes automatically. We also leverage <Link to="/solutions/cloud-systems" className="text-green-400 hover:text-green-300 underline">secure cloud infrastructure</Link> to host your integration services with high availability and scalability.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              End-to-End API Maintenance and <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Monitoring</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Continuous optimization, version control, uptime monitoring, and proactive maintenance ensure your API integrations remain stable and performant as your business scales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Uptime Monitoring</h3>
              <p className="text-slate-400 text-sm">24/7 monitoring tracks API availability, response times, and error rates across all integration endpoints. Automated alerts notify your team of performance degradation or outages before they impact operations.</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Version Control</h3>
              <p className="text-slate-400 text-sm">Structured versioning strategies ensure backward compatibility when APIs evolve. We manage deprecation schedules, maintain multiple API versions, and provide migration support for smooth upgrades.</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-400 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Performance Optimization</h3>
              <p className="text-slate-400 text-sm">Continuous analysis of API performance metrics identifies optimization opportunities. We implement caching strategies, query optimization, and payload compression to maximize speed and efficiency.</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Proactive Maintenance</h3>
              <p className="text-slate-400 text-sm">Regular security updates, dependency patches, and infrastructure maintenance keep your integrations secure and stable. We handle breaking changes from third-party providers proactively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">API Integration Applications</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how businesses leverage our secure API management services and third-party API connection services to streamline operations and accelerate growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">E-commerce: Shopify + AWS + Stripe Integration</h3>
              <p className="text-slate-300 leading-relaxed">
                Connect Shopify stores with AWS services for image processing, Stripe for payment handling, and QuickBooks for accounting. Our API integration for enterprise systems synchronizes inventory across multiple sales channels in real-time, automates order fulfillment workflows, and provides unified customer data views. Secure API management ensures PCI compliance while handling thousands of transactions daily.
              </p>
            </div>

            <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">SaaS: Salesforce + HubSpot + Google Workspace</h3>
              <p className="text-slate-300 leading-relaxed">
                Unify sales, marketing, and communication platforms with RESTful API development that syncs lead data, automates email campaigns, and tracks customer interactions. Third-party API connection services enable automated lead scoring, intelligent routing to sales teams, and comprehensive analytics dashboards. OAuth 2.0 authentication ensures secure data access across all platforms while maintaining user privacy.
              </p>
            </div>

            <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Healthcare: EHR Systems + Lab Portals + Billing</h3>
              <p className="text-slate-300 leading-relaxed">
                Connect Electronic Health Records with laboratory systems, insurance verification APIs, and billing platforms while maintaining HIPAA compliance. Our secure API management services implement end-to-end encryption, comprehensive audit logging, and role-based access controls. Real-time data synchronization improves patient care coordination while automated billing integrations reduce administrative overhead by 60%.
              </p>
            </div>

            <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Financial Services: Banking APIs + Payment Gateways</h3>
              <p className="text-slate-300 leading-relaxed">
                Build secure connections between core banking systems, payment processors like Stripe and PayPal, fraud detection services, and customer-facing applications. API integration solutions for business in finance require bank-level security with token-based authentication, rate limiting, and real-time monitoring. We ensure SOC 2 compliance while enabling instant payment processing and automated reconciliation workflows.
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
              Unify Your Tech Stack with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"> API Integration Solutions</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              We connect your tools, so your team can focus on growth. Our API integration solutions for business eliminate manual data entry, reduce errors, and improve operational efficiency across your entire organization.
            </p>
            <Link to="/get-in-touch" className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-700 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105">
              Get Expert API Integration Help Today
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
              Why Choose Autom8tion Lab for <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">API Integration Solutions</span>
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Unlike generic integration platforms that offer template-based connections, we deliver custom API integration solutions for business that address your specific operational challenges. Our RESTful API development services, secure API management expertise, and deep knowledge of third-party API connection services ensure reliable integrations that scale with your growth. We've successfully connected hundreds of enterprise systems—from Salesforce and AWS to custom legacy applications.
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              We focus on reliability and ROI. Our clients achieve 350% improvement in data accuracy, 90% reduction in manual data entry, and measurable cost savings within 30 days. With comprehensive monitoring, proactive maintenance, and expert support, we ensure your API integration for enterprise systems remains stable and performant as your business evolves. We connect your tools, so your team can focus on growth—not on chasing data inconsistencies.
            </p>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
              <p className="text-emerald-400 font-semibold mb-4 text-xl">Get Expert API Integration Help Today</p>
              <p className="text-slate-300 mb-6">
                Join CTOs, business owners, and software teams who trust Autom8ion Lab for secure, scalable API integration solutions. Schedule a consultation to discuss your integration challenges, explore our RESTful API development capabilities, and discover how our secure API management services can unify your technology stack.
              </p>
              <Link to="/get-in-touch" className="inline-block bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-700 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105">
                Schedule Your API Integration Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <RelatedSolutions currentSlug="api-integrations" />
      <Footer />
    </div>
  );
};

export default APIIntegrations;