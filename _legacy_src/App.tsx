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

// Lead capture pages
const NISTChecklist = React.lazy(() => import('./pages/NISTChecklist'));

// Federal contracting page
const CapabilityStatement = React.lazy(() => import('./pages/CapabilityStatement'));

// 404 page
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Home Page Component
const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Helmet>
        <title>Custom AI, Automation & Software for Compliance Environments | Autom8ion Lab</title>
        <meta name="description" content="Veteran-owned. Custom AI, automation, and software engineered for CMMC, NIST 800-171, HIPAA, SOC 2. Built for federal, defense, healthcare, FinServ." />
        <meta name="keywords" content="SDVOSB software development, veteran-owned AI services, CMMC compliance software, NIST 800-171 implementation, HIPAA software development, SOC 2 SaaS, FedRAMP application development, federal contractor AI, DIB custom software" />
        <link rel="canonical" href={getCanonicalUrl('/')} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Custom AI, Automation & Software for Compliance Environments | Autom8ion Lab" />
        <meta property="og:description" content="Veteran-owned. Custom AI, automation, and software engineered for CMMC, NIST 800-171, HIPAA, SOC 2. Built for federal agencies, defense contractors, healthcare systems, and financial institutions." />
        <meta property="og:url" content="https://autom8ionlab.com/" />
        <meta property="og:image" content="https://autom8ionlab.com/logo/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@autom8ionlab" />
        <meta name="twitter:title" content="Custom AI, Automation & Software for Compliance Environments | Autom8ion Lab" />
        <meta name="twitter:description" content="Veteran-owned. Custom AI, automation, and software engineered for CMMC, NIST 800-171, HIPAA, SOC 2. SDVOSB certification pending. UEI YY2DR3KSENH7." />
        <meta name="twitter:image" content="https://autom8ionlab.com/logo/logo.png" />

        <script type="application/ld+json">
          {buildJsonLd({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Autom8ion Lab",
            "legalName": "Sitehues Media Inc.",
            "alternateName": "Sitehues Media Inc. (DBA Autom8ion Lab)",
            "url": "https://autom8ionlab.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://autom8ionlab.com/logo/logo.png"
            },
            "founder": {
              "@type": "Person",
              "name": "Sean Richard",
              "url": "https://www.linkedin.com/in/a8l-sean-richard/"
            },
            "address": [
              {
                "@type": "PostalAddress",
                "addressLocality": "Plant City",
                "addressRegion": "FL",
                "addressCountry": "US"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Montreal",
                "addressRegion": "QC",
                "addressCountry": "CA"
              }
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-855-508-6062",
              "contactType": "Sales",
              "email": "sean@autom8ionlab.com",
              "areaServed": ["US", "CA"],
              "availableLanguage": ["English", "French"]
            },
            "identifier": [
              { "@type": "PropertyValue", "propertyID": "UEI", "value": "YY2DR3KSENH7" },
              { "@type": "PropertyValue", "propertyID": "CAGE", "value": "9YCS7" },
              { "@type": "PropertyValue", "propertyID": "DUNS", "value": "05-289-2750" }
            ],
            "knowsAbout": [
              "CMMC 2.0 compliance",
              "NIST 800-171",
              "NIST 800-53",
              "FedRAMP",
              "HIPAA compliance",
              "SOC 2 Type II",
              "FDA 21 CFR Part 11",
              "AI agents",
              "Workflow automation",
              "Custom enterprise software",
              "SDVOSB",
              "Federal contracting"
            ],
            "description": "Veteran-owned, security-first AI, automation, and software engineering firm serving federal, defense, healthcare, and financial services. SDVOSB certification pending.",
            "foundingDate": "2023",
            "sameAs": [
              "https://www.facebook.com/autom8ionlab",
              "https://www.instagram.com/autom8ionlab",
              "https://www.linkedin.com/company/autom8ionlab",
              "https://www.linkedin.com/in/a8l-sean-richard/",
              "https://twitter.com/autom8ionlab",
              "https://tiktok.com/@autom8ionlab"
            ]
          })}
        </script>
        <script type="application/ld+json">
          {buildJsonLd({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Autom8ion Lab",
            "url": "https://autom8ionlab.com",
            "telephone": "+1-855-508-6062",
            "email": "sean@autom8ionlab.com",
            "areaServed": ["US", "CA"],
            "description": "Veteran-owned, security-first AI, automation, and software engineering firm serving federal, defense, healthcare, and financial services. SDVOSB certification pending. UEI YY2DR3KSENH7. CAGE 9YCS7.",
            "knowsAbout": [
              "AI Agent Development",
              "Custom LLM Fine-Tuning",
              "Workflow Automation",
              "Robotic Process Automation",
              "API Integration",
              "Custom Software Development",
              "Mobile App Development",
              "Cybersecurity and Compliance",
              "Cloud Infrastructure Management",
              "Data Management and Analytics"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Automation and Technology Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom AI Agent Development",
                    "url": "https://autom8ionlab.com/solutions/ai-agent-development",
                    "description": "Custom conversational AI agents built on GPT-4 and Claude, fine-tuned on proprietary business data for lead qualification, customer support, and workflow automation."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom LLM Fine-Tuning and Deployment",
                    "url": "https://autom8ionlab.com/solutions/custom-llm-systems",
                    "description": "Domain-specific LLM fine-tuning, RAG system implementation, and private deployment with complete data sovereignty."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Enterprise Workflow Automation",
                    "url": "https://autom8ionlab.com/solutions/workflow-automation",
                    "description": "End-to-end business process automation using n8n, Make, and custom pipelines with complete audit trails."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Robotic Process Automation (RPA)",
                    "url": "https://autom8ionlab.com/solutions/process-automation",
                    "description": "AI-enhanced RPA for repetitive task automation across legacy systems, web interfaces, and document workflows."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "API Integration Services",
                    "url": "https://autom8ionlab.com/solutions/api-integrations",
                    "description": "RESTful API development, GraphQL, and enterprise system integrations unifying Salesforce, Shopify, and custom databases."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Software Development",
                    "url": "https://autom8ionlab.com/solutions/software-development",
                    "description": "Full-stack SaaS applications and enterprise platforms built with React, Node.js, Python, and cloud-native architectures."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mobile App Development",
                    "url": "https://autom8ionlab.com/solutions/mobile-app-development",
                    "description": "Cross-platform iOS and Android applications using React Native and native development."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cybersecurity and Compliance Consulting",
                    "url": "https://autom8ionlab.com/solutions/cybersecurity",
                    "description": "Penetration testing, risk assessments, and compliance audits aligned with NIST, CIS, HIPAA, ISO 27001, and SOC 2."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cloud Infrastructure Management",
                    "url": "https://autom8ionlab.com/solutions/cloud-systems",
                    "description": "Cloud architecture, Kubernetes orchestration, CI/CD pipelines, and 24/7 monitoring across AWS and Azure."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Data Management and Business Intelligence",
                    "url": "https://autom8ionlab.com/solutions/data-management",
                    "description": "Data pipelines, AI-powered dashboards, and predictive analytics for strategic decision-making."
                  }
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
            "name": "Autom8ion Lab",
            "description": "Custom AI automation, cloud infrastructure, and cybersecurity systems for businesses",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://autom8ionlab.com/blog?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
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
                "name": "What is the typical engagement size and duration?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We scope work to your contract structure \u2014 task orders, IDIQ, BPA, fixed-price, or T&M. Most engagements run 8\u201314 weeks. CMMC remediation runs 4\u20139 months. FedRAMP-aligned builds run 6+ months. Quotes are scope-driven and provided after a discovery call. We work transparently on price."
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
          <Route path="/nist-checklist" element={<NISTChecklist />} />
          <Route path="/capability-statement" element={<CapabilityStatement />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </>
  );
}

export default App;