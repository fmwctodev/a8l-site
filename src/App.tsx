import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ScrollToSection from './components/ScrollToSection';
import { getCanonicalUrl, buildJsonLd } from './utils/seo';

// Critical homepage components - loaded immediately
import Hero from './components/Hero';
import About from './components/About';
import Problems from './components/Problems';
import Solutions from './components/Solutions';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Process from './components/Process';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

// Lazy load all pages for code splitting
const Contact = React.lazy(() => import('./pages/Contact'));
const Careers = React.lazy(() => import('./pages/Careers'));
const ThankYou = React.lazy(() => import('./pages/ThankYou'));
const JobApplicationThankYou = React.lazy(() => import('./pages/JobApplicationThankYou'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));
const Booking = React.lazy(() => import('./pages/Booking'));
const VSLLandingPage = React.lazy(() => import('./pages/VSLLandingPage'));

// Lazy load service pages
const AIAgentDevelopment = React.lazy(() => import('./pages/AIAgentDevelopment'));
const WorkflowAutomation = React.lazy(() => import('./pages/WorkflowAutomation'));
const ProcessAutomation = React.lazy(() => import('./pages/ProcessAutomation'));
const APIIntegrations = React.lazy(() => import('./pages/APIIntegrations'));
const CustomLLMSystems = React.lazy(() => import('./pages/CustomLLMSystems'));
const SoftwareDevelopment = React.lazy(() => import('./pages/SoftwareDevelopment'));
const MobileAppDevelopment = React.lazy(() => import('./pages/MobileAppDevelopment'));
const Cybersecurity = React.lazy(() => import('./pages/Cybersecurity'));
const CloudSystems = React.lazy(() => import('./pages/CloudSystems'));
const DataManagement = React.lazy(() => import('./pages/DataManagement'));

// Lazy load blog pages
const BlogList = React.lazy(() => import('./pages/BlogList'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));

// 404 page
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Home Page Component
const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Helmet>
        <title>AI Automation, Cloud & Cybersecurity Solutions | Autom8ion Lab</title>
        <meta name="description" content="Autom8ion Lab builds custom AI automation, cloud infrastructure, and cybersecurity systems engineered for scale, speed, and measurable ROI." />
        <meta name="keywords" content="AI automation and cloud infrastructure solutions, AI automation for business, workflow automation platform, enterprise cybersecurity services, cloud infrastructure management, custom LLM and data analytics solutions, AI agent development, process automation, custom software development, data management" />
        <link rel="canonical" href={getCanonicalUrl('/')} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI Automation, Cloud & Cybersecurity Solutions | Autom8ion Lab" />
        <meta property="og:description" content="Autom8ion Lab builds custom AI automation, cloud infrastructure, and cybersecurity systems engineered for scale, speed, and measurable ROI." />
        <meta property="og:url" content="https://autom8ionlab.com/" />
        <meta property="og:image" content="https://autom8ionlab.com/logo/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Automation, Cloud & Cybersecurity Solutions | Autom8ion Lab" />
        <meta name="twitter:description" content="Autom8ion Lab builds custom AI automation, cloud infrastructure, and cybersecurity systems engineered for scale, speed, and measurable ROI." />
        <meta name="twitter:image" content="https://autom8ionlab.com/logo/logo.png" />

        <script type="application/ld+json">
          {buildJsonLd({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Autom8tion Lab",
            "url": "https://autom8ionlab.com",
            "logo": "https://autom8ionlab.com/logo/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-855-508-6062",
              "contactType": "customer service",
              "email": "info@autom8ionlab.com",
              "areaServed": "Worldwide",
              "availableLanguage": ["en"]
            },
            "description": "Autom8ion Lab builds custom AI automation, cloud infrastructure, and cybersecurity systems engineered for scale, speed, and measurable ROI.",
            "sameAs": [
              "https://www.facebook.com/autom8ionlab",
              "https://www.instagram.com/autom8ionlab",
              "https://www.linkedin.com/company/autom8ionlab",
              "https://twitter.com/autom8ionlab",
              "https://tiktok.com/@autom8ionlab"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Automation and Cloud Infrastructure Services",
              "itemListElement": [
                {
                  "@type": "Service",
                  "serviceType": "AI Agent Development",
                  "description": "Custom conversational AI agents built on LLMs and fine-tuned to business data for lead qualification, customer support, and intelligent automation.",
                  "provider": { "@type": "Organization", "name": "Autom8tion Lab" }
                },
                {
                  "@type": "Service",
                  "serviceType": "Workflow Automation Platform",
                  "description": "End-to-end business process automation with complete audit trails, API orchestration, and seamless integration with existing systems.",
                  "provider": { "@type": "Organization", "name": "Autom8tion Lab" }
                },
                {
                  "@type": "Service",
                  "serviceType": "Enterprise Cybersecurity Services",
                  "description": "Comprehensive cybersecurity solutions including vulnerability scanning, NIST/CIS-aligned policies, incident response planning, and compliance management.",
                  "provider": { "@type": "Organization", "name": "Autom8tion Lab" }
                },
                {
                  "@type": "Service",
                  "serviceType": "Cloud Infrastructure Management",
                  "description": "Secure cloud infrastructure setup, container deployment, system monitoring, and automation across AWS, Azure, or on-premises environments.",
                  "provider": { "@type": "Organization", "name": "Autom8tion Lab" }
                },
                {
                  "@type": "Service",
                  "serviceType": "Custom LLM Systems",
                  "description": "Design, training, and hosting of bespoke large language models tailored to specific domains with proprietary data integration.",
                  "provider": { "@type": "Organization", "name": "Autom8tion Lab" }
                },
                {
                  "@type": "Service",
                  "serviceType": "Data Management and Analytics",
                  "description": "Centralized data pipelines, AI-powered dashboards, secure storage solutions, and role-based access for structured reporting and insights.",
                  "provider": { "@type": "Organization", "name": "Autom8tion Lab" }
                }
              ]
            }
          })}
        </script>
        <script type="application/ld+json">
          {buildJsonLd({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://autom8ionlab.com",
            "name": "Autom8tion Lab",
            "description": "Custom AI and automation solutions for businesses"
          })}
        </script>
        <script type="application/ld+json">
          {buildJsonLd({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How is custom automation different from using tools like Zapier or Make?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "While tools like Zapier and Make are great for simple connections, they often break when your business logic gets complex. We build custom systems that understand your unique workflows, handle edge cases, and scale with your business. Instead of duct-taping tools together, you get a purpose-built solution that actually works the way your business operates."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it typically take to build a custom AI or automation system?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most of our custom builds launch within 30 days. The timeline depends on complexity, but our streamlined process includes: Technical Discovery (Days 1-3), Architecture & Scope Definition (Days 4-7), System Build & Integration (Days 8-25), and Live Launch & Performance Tuning (Days 26-30+). We prioritize speed without compromising quality."
                }
              },
              {
                "@type": "Question",
                "name": "What makes your AI agents different from generic chatbots?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI agents are fine-tuned on your specific business data, product catalogs, and customer interaction history. They understand your industry terminology, maintain context across conversations, and can handle complex multi-turn discussions. Unlike generic chatbots that follow scripts, our agents think, learn, and adapt to provide genuinely helpful responses that feel human-like."
                }
              },
              {
                "@type": "Question",
                "name": "Do you work with existing systems or do we need to start from scratch?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We specialize in integrating with your existing tech stack. Whether you're using Salesforce, Shopify, custom databases, or legacy systems, we build bridges that connect everything seamlessly. You don't need to replace what's working\u2014we enhance it with intelligent automation that fits your current operations."
                }
              },
              {
                "@type": "Question",
                "name": "What kind of ROI can we expect from custom automation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our clients typically see 10x productivity gains and measurable ROI within the first 90 days. Specific results vary by industry and implementation, but common outcomes include 60-90% reduction in manual tasks, 300% improvement in processing speed, and significant cost savings from reduced staffing needs and operational overhead."
                }
              },
              {
                "@type": "Question",
                "name": "Is our data secure with AI and automation systems?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. We implement enterprise-grade security with bank-level encryption, SOC 2-aligned protocols, and complete data sovereignty. Your proprietary information stays within your controlled environment. We can deploy on-premises or in private clouds, ensuring you maintain full control over your data while benefiting from intelligent automation."
                }
              },
              {
                "@type": "Question",
                "name": "What industries benefit most from AI automation and cloud infrastructure solutions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI automation and cloud infrastructure solutions transform operations across technology companies, construction firms, healthcare organizations, financial services, manufacturing, and professional services. Any industry with repetitive workflows, complex data management needs, or scaling challenges can achieve significant ROI through custom automation platforms tailored to their specific business processes."
                }
              },
              {
                "@type": "Question",
                "name": "How does custom AI automation compare to off-the-shelf solutions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Custom AI automation is built specifically for your business logic, workflows, and data structures, ensuring seamless integration with existing systems. Off-the-shelf solutions often require workarounds and break when workflows become complex. Our custom builds deliver higher accuracy, better scalability, and measurable ROI because they're engineered to fit your exact requirements rather than forcing your business to adapt to generic software."
                }
              },
              {
                "@type": "Question",
                "name": "What is the typical cost of implementing enterprise AI automation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Enterprise AI automation investment varies based on complexity, integration requirements, and scale. Most projects range from $15,000 to $150,000, with typical deployments launching in 30 days. The ROI is substantial\u2014clients routinely see 10x productivity gains, 60-90% reduction in manual tasks, and cost savings that exceed the initial investment within 90 days through improved efficiency and reduced operational overhead."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      
      <Hero />
      <About />
      <Problems />
      <Solutions />
      <Benefits />
      <FAQ />
      <Process />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <>
      <ScrollToSection />
      <React.Suspense fallback={
        <div className="min-h-screen bg-slate-950 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <div className="text-white text-lg">Loading...</div>
          </div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/get-in-touch" element={<Contact />} />
          <Route path="/schedule-consultation" element={<Booking />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/application-received" element={<JobApplicationThankYou />} />
          <Route path="/join-us" element={<Careers />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/solutions/ai-agent-development" element={<AIAgentDevelopment />} />
          <Route path="/solutions/workflow-automation" element={<WorkflowAutomation />} />
          <Route path="/solutions/process-automation" element={<ProcessAutomation />} />
          <Route path="/solutions/api-integrations" element={<APIIntegrations />} />
          <Route path="/solutions/custom-llm-systems" element={<CustomLLMSystems />} />
          <Route path="/solutions/software-development" element={<SoftwareDevelopment />} />
          <Route path="/solutions/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/solutions/cybersecurity" element={<Cybersecurity />} />
          <Route path="/solutions/cloud-systems" element={<CloudSystems />} />
          <Route path="/solutions/data-management" element={<DataManagement />} />
          <Route path="/aiads-vsl" element={<VSLLandingPage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </>
  );
}

export default App;