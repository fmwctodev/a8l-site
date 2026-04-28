import type { Metadata } from 'next';
import Link from 'next/link';
import { Smartphone, Monitor, Users, Zap, CheckCircle, ArrowRight, Cloud } from 'lucide-react';
import CTA from '@/app/_components/CTA';
import RelatedSolutions from '@/app/_components/RelatedSolutions';

export const metadata: Metadata = {
  title: 'Mobile App Development for Federal, DIB, Healthcare & Financial Services',
  description: 'Custom iOS and Android apps built for federal-first security. FedRAMP-aware architecture, NIST 800-53 control alignment, FISMA-ready foundations. Role-based access, audit logging, offline capability. SDVOSB Pending. Live in 30 days.',
  keywords: 'federal mobile app development, FedRAMP mobile, NIST 800-53 mobile, FISMA mobile, DIB mobile app, secure iOS Android development, React Native federal, SDVOSB mobile app, audit logging mobile, healthcare mobile app',
  alternates: { canonical: 'https://autom8ionlab.com/solutions/mobile-app-development' },
  openGraph: {
    title: 'Mobile App Development for Federal, DIB, Healthcare & Financial Services | Autom8ion Lab',
    description: 'Custom iOS and Android apps built for federal-first security. FedRAMP-aware, NIST 800-53 aligned, FISMA-ready. SDVOSB Pending — UEI: YY2DR3KSENH7.',
    url: 'https://autom8ionlab.com/solutions/mobile-app-development',
    images: [{ url: 'https://autom8ionlab.com/logo/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Mobile App Development Agency | iOS & Android Experts | Autom8ion Lab',
    description: 'Autom8ion Lab builds stunning, high-performance mobile apps for iOS and Android. Cross-platform solutions designed to scale with your business.',
  },
};

const ldSchema1 = {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Mobile Application Development",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Autom8ion Lab"
            },
            "description": "Leading mobile app development agency delivering native iOS and Android applications plus cross-platform solutions using React Native and Flutter. Complete app design, development, and deployment services.",
            "operatingSystem": ["iOS", "Android"],
            "availableChannel": ["Apple App Store", "Google Play Store"],
            "softwareRequirements": "React Native, Flutter, Swift, Kotlin, Xcode, Android Studio",
            "serviceOutput": {
              "@type": "MobileApplication",
              "operatingSystem": "iOS, Android",
              "applicationCategory": ["Business Application", "Entertainment Application", "Lifestyle Application"]
            },
            "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "url": "https://autom8ionlab.com/solutions/mobile-app-development",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Mobile App Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Native iOS App Development",
                    "description": "Native iOS applications built with Swift and Xcode"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Native Android App Development",
                    "description": "Native Android applications built with Kotlin"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cross-Platform App Development",
                    "description": "Cross-platform mobile apps using React Native and Flutter"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mobile App UI/UX Design",
                    "description": "User-centered mobile app design and prototyping"
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
              { "@type": "ListItem", "position": 3, "name": "Mobile App Development", "item": "https://autom8ionlab.com/solutions/mobile-app-development" }
            ]
          };

export default function Page() {
const features = [
    {
      icon: Monitor,
      title: "Federal-First Security Architecture",
      description: "In 2026, your mobile app is part of your compliance boundary. We build custom iOS and Android applications engineered for US Federal, DIB, healthcare, and financial services environments where security, auditability, and system integrity are not optional. FedRAMP-aware architecture, NIST 800-53 control alignment across AC, AU, CM, IR, and SI families, and FISMA-ready security foundations are designed in from day one — not bolted on later."
    },
    {
      icon: Users,
      title: "Role-Based Access, Audit Logging & Offline Capability",
      description: "We enforce role-based access so users only see and do what their permissions allow. Structured audit trails record user activity, administrative actions, data access events, and system changes for review, compliance, and incident response. Offline capability handles secure data entry when the network drops, syncing automatically once connectivity returns. Biometric authentication and end-to-end encryption protect sensitive data on the device itself."
    },
    {
      icon: Zap,
      title: "30-Day Launch Built on React Native",
      description: "We don't believe in six-month timelines. We deliver a functional, high-performance app in 30 days using React Native — sharing 90% of the code between iOS and Android while maintaining native performance. Founder-led: senior engineers write and oversee the code, not junior interns. We hook the app into your custom LLM systems, internal databases, and workflow automation, then handle the App Store and Google Play submissions for you."
    }
  ];

  const benefits = [
    "Native iOS and Android app development with platform-specific optimization, advanced Swift and Kotlin implementation, and deep integration with device capabilities including camera, GPS, sensors, and biometric authentication for maximum performance and user experience",
    "Cross-platform solutions using React Native and Flutter frameworks that deliver native performance while reducing development costs by up to 60%, enabling rapid deployment across multiple platforms with consistent functionality and user interface design",
    "Modern UI/UX design methodology incorporating user research, accessibility standards, and conversion optimization principles that create intuitive, engaging mobile experiences with high user retention rates and positive app store ratings",
    "Comprehensive App Store and Google Play deployment management including app store optimization, submission process handling, review management, and ongoing compliance with platform guidelines and policy updates for maximum visibility and approval success",
    "Advanced performance optimization and testing protocols including automated testing suites, device compatibility testing, load testing, and performance monitoring that ensure optimal app performance across diverse devices and operating system versions",
    "Ongoing maintenance and feature enhancement services with regular updates, security patches, performance improvements, and new feature development that keep your mobile application competitive and aligned with evolving business requirements and user expectations",
    "Enterprise-grade security implementation including data encryption, secure API communication, biometric authentication, and compliance with industry standards such as GDPR, HIPAA, and PCI-DSS for protecting sensitive user information and business data",
    "Advanced analytics and user behavior tracking integration that provides detailed insights into app usage patterns, user engagement metrics, and conversion optimization opportunities for data-driven app improvement and business growth strategies",
    "Seamless integration capabilities with existing business systems, third-party APIs, cloud services, and enterprise databases that enable comprehensive functionality while maintaining data consistency and operational efficiency across all business platforms"
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldSchema1) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldSchema2) }} />

      {/* Hero Section */}
            <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-rose-950 to-slate-950 overflow-hidden">
              {/* Background Effects */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow delay-700"></div>
              </div>
      
      
      
              {/* Hero Content */}
              <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
                <div className="max-w-6xl mx-auto text-center">
                  <div className="mb-8 flex justify-center">
                    <div className="flex items-center space-x-2 bg-rose-900/30 backdrop-blur-sm px-6 py-3 rounded-full border border-rose-500/20">
                      <Smartphone className="w-5 h-5 text-rose-400" />
                      <span className="text-rose-400 font-medium">Mobile App Development</span>
                    </div>
                  </div>
      
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    Mobile Apps Built for Federal-First Security
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">Built for Performance and Growth</span>
                  </h1>
      
                  <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                    Custom iOS and Android apps engineered for US Federal, DIB, healthcare, and financial services environments. FedRAMP-aware architecture, NIST 800-53 control alignment, FISMA-ready foundations. SDVOSB Pending — UEI: YY2DR3KSENH7, CAGE: 9YCS7. Live in 30 days.
                  </p>
      
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link href="/get-in-touch" className="group bg-gradient-to-r from-rose-600 to-pink-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-rose-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25 flex items-center space-x-2">
                      <span>Build Your Mobile App</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
      
            {/* End-to-End Mobile App Development Services Section */}
            <section className="py-20 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    End-to-End Mobile App Development Services
                  </h2>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Most business apps are garbage. They are slow, clunky, and feel like a website shoved into a mobile container. The traditional development cycle takes six to twelve months — by which time your business needs have shifted. At Autom8ion Lab, we don't do "slow." We build high-performance, custom iOS and Android apps for business automation that launch in as little as 30 days. We're not just writing code; we're building the remote control for your entire operation.
                  </p>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Mobile is no longer just for checking email. In 2026, your mobile app is part of your compliance boundary. We build custom iOS and Android applications engineered for environments where security, auditability, and system integrity are not optional. Whether you need a secure field operations app that syncs with your workflow automation in real time or a controlled internal portal connected to your AI agents, we deliver mobile systems built for operational use, internal approval, and security-first deployment. Veteran-owned, SDVOSB Pending, with UEI: YY2DR3KSENH7 and CAGE: 9YCS7.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Faster builds. Better performance. Higher engagement. Our clients report 40% faster time-to-market, 99.9% app uptime, and user retention rates that exceed industry averages by 2-3x. When you need a mobile app development agency that delivers results, not just code, partner with Autom8ion Lab.
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
                    See How We Solve Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">Mobile App Challenges</span>
                  </h2>
                  <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                    Watch our explainer video to understand how custom mobile app development creates engaging experiences that drive user retention.
                  </p>
                </div>
                <div className="max-w-5xl mx-auto">
                  <div className="relative bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
                    <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                      <iframe
                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE?rel=0&modestbranding=1"
                        title="Mobile App Development - Problem/Solution Explainer Video"
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
      
            {/* iOS, Android, and Cross-Platform App Development Section */}
            <section className="py-20 bg-slate-900/50 relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    iOS, Android, and Cross-Platform App Development
                  </h2>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Choosing between native and cross-platform mobile app solutions depends on your performance requirements, budget, timeline, and target audience. Our iOS and Android app developers provide honest, expert guidance on the right approach for your specific use case — whether that's native Swift for iOS, native Kotlin for Android, or cross-platform frameworks like React Native and Flutter.
                  </p>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    <strong className="text-white">Native app development services</strong> deliver maximum performance, full access to device capabilities, and platform-specific UI patterns that feel perfectly at home on iOS or Android. When your app demands cutting-edge graphics, complex offline functionality, or deep OS integration, native development is the optimal choice. Our team builds native apps using Swift, Xcode, Kotlin, and Android Studio with comprehensive testing on real devices.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    <strong className="text-white">Cross-platform mobile app solutions</strong> using React Native or Flutter reduce development time by 40-60% while maintaining near-native performance for most business applications. You write one codebase that deploys to both iOS and Android, accelerating your time-to-market and simplifying ongoing maintenance. We help you evaluate trade-offs and select the technology stack that maximizes ROI while meeting your performance and user experience standards.
                  </p>
                </div>
              </div>
            </section>
      
            {/* Features Section */}
            <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Advanced Mobile <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">Development Expertise</span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    Our mobile development solutions are engineered for enterprise-scale deployment with native performance, cross-platform efficiency, and exceptional user experience at the core.
                  </p>
                </div>
      
                <div className="grid md:grid-cols-3 gap-8">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div
                        key={index}
                        className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-rose-500/30 transition-all duration-300 hover:transform hover:scale-105"
                      >
                        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-400 rounded-xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-pink-400 transition-colors">
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
      
            {/* User-Centered Design and Intuitive UX Section */}
            <section className="py-20 bg-slate-900/50 relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    User-Centered Design and Intuitive UX
                  </h2>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Great mobile apps aren't just technically sound — they're delightful to use. Our custom mobile app design process begins with deep user research, competitive analysis, and persona development to understand exactly who will use your app and what they need to accomplish. We design for engagement, retention, and conversion from the first wireframe to the final pixel-perfect interface.
                  </p>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Our iOS and Android app developers collaborate closely with UX designers throughout the entire development cycle, ensuring design vision translates perfectly into production code. We create interactive prototypes that let you experience the app flow before development begins, iterate based on usability testing feedback, and refine every interaction to feel natural and responsive. Thoughtful micro-interactions, smooth animations, and clear visual hierarchy guide users effortlessly through complex workflows.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    The result? Mobile apps that users love and recommend. Our clients consistently achieve 4.5+ star App Store ratings and user engagement metrics that outperform industry benchmarks. Whether you're designing for consumers, enterprise users, or specialized verticals, we create mobile experiences that drive measurable business outcomes while exceeding user expectations.
                  </p>
                </div>
              </div>
            </section>
      
            {/* How It Works Section */}
            <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Our Mobile App Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">Process</span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    From concept design to app store deployment, our systematic approach ensures every mobile application delivers exceptional performance and user satisfaction.
                  </p>
                </div>
      
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-400 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">UX Design & Strategy</h3>
                    <p className="text-slate-400 text-sm">We analyze your target audience, business objectives, and platform requirements to develop comprehensive mobile app strategies that optimize user experience and business functionality across iOS and Android platforms.</p>
                  </div>
      
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-400 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">Development & Testing</h3>
                    <p className="text-slate-400 text-sm">Our mobile development team uses React Native, Flutter, or native development approaches with comprehensive testing protocols, performance optimization, and quality assurance across multiple devices and operating systems.</p>
                  </div>
      
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-400 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">Integration & Security</h3>
                    <p className="text-slate-400 text-sm">Seamless integration with existing business systems, APIs, and databases, along with implementation of mobile-specific security measures including data encryption, secure authentication, and compliance protocols.</p>
                  </div>
      
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-400 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">4</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">Deployment & Optimization</h3>
                    <p className="text-slate-400 text-sm">App store submission, deployment management, and ongoing optimization based on user feedback, performance analytics, and platform updates to ensure continued success and user satisfaction.</p>
                  </div>
                </div>
              </div>
            </section>
      
            {/* Seamless Integration With APIs and Cloud Infrastructure Section */}
            <section className="py-20 bg-slate-900/50 relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    Seamless Integration With APIs and Cloud Infrastructure
                  </h2>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Modern mobile apps rarely operate in isolation. They connect to backend databases, sync with CRM systems, process payments, send notifications, and integrate with dozens of third-party services. Our mobile app development agency architects robust <Link href="/solutions/api-integrations" className="text-rose-400 hover:text-rose-300 underline">API integration layers</Link> that connect your mobile app to any system while maintaining security, performance, and reliability under heavy load.
                  </p>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    We optimize every API call for mobile networks — implementing intelligent caching, request batching, and offline-first architecture that ensures your app performs beautifully even with spotty connectivity. Advanced error handling and retry logic provide graceful fallbacks when network conditions degrade. Real-time data synchronization keeps users' devices in sync while minimizing battery drain and data usage.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Your mobile app infrastructure matters as much as the app itself. We deploy backends on <Link href="/solutions/cloud-systems" className="text-rose-400 hover:text-rose-300 underline">scalable cloud infrastructure</Link> with automated scaling, comprehensive monitoring, and disaster recovery plans. Whether you need a simple REST API or complex microservices architecture, we build systems that handle millions of requests while maintaining sub-second response times. Need custom software to complement your mobile app? Our <Link href="/solutions/software-development" className="text-rose-400 hover:text-rose-300 underline">full-stack development team</Link> builds web dashboards, admin panels, and backend systems that work seamlessly with your mobile applications.
                  </p>
                </div>
              </div>
            </section>
      
            {/* Use Cases Section */}
            <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">Applications</span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    Discover how businesses across industries leverage our mobile app development platform to create engaging, high-performance applications that drive user engagement and business growth.
                  </p>
                </div>
      
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">E-commerce & Retail</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Create sophisticated shopping applications with advanced product catalogs, personalized recommendations, secure payment processing, and inventory management integration. Mobile e-commerce apps include features like augmented reality product visualization, social shopping capabilities, and loyalty program integration that drive customer engagement and increase average order values while providing seamless shopping experiences across all devices.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">Healthcare & Telemedicine</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Develop HIPAA-compliant healthcare applications that enable patient portal access, telemedicine consultations, appointment scheduling, and medical record management. Healthcare mobile apps include secure messaging, prescription management, health monitoring integration, and emergency contact features while maintaining strict privacy compliance and ensuring seamless integration with electronic health record systems.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">Financial Services & Fintech</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Build secure financial applications with advanced encryption, biometric authentication, and real-time transaction processing capabilities. Fintech mobile apps include features like mobile banking, investment portfolio management, expense tracking, and cryptocurrency trading while maintaining strict security protocols and regulatory compliance across all financial operations and user interactions.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">Enterprise & Productivity</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Create powerful enterprise mobile applications that enable remote work, project management, and business process automation. Enterprise apps include features like document management, team collaboration, time tracking, and CRM integration that improve productivity and enable seamless business operations while providing offline capabilities and enterprise-grade security for sensitive business information.
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
                    Launch Apps That
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400"> Drive Engagement</span>
                  </h2>
                  <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                    Our mobile applications don't just function—they captivate users with intuitive design, lightning-fast performance, and intelligent features that transform how customers interact with your business.
                  </p>
                  <Link href="/get-in-touch" className="bg-gradient-to-r from-rose-600 to-pink-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-rose-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                    Start App Development
                  </Link>
                </div>
      
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {benefits.slice(0, 8).map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4 bg-slate-800/30 p-4 rounded-lg border border-slate-700/50">
                      <CheckCircle className="w-6 h-6 text-pink-400 mt-0.5 flex-shrink-0" />
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
                    Why Businesses Choose Autom8ion Lab for App Development
                  </h2>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Choosing the right mobile app development agency determines whether your app succeeds or stalls. Autom8ion Lab differentiates through transparent communication, collaborative workflows, and unwavering reliability. We assign dedicated project managers and senior iOS and Android app developers who become true partners in your success — not just contractors completing tickets.
                  </p>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Our track record speaks for itself: 40% faster launches, 99.9% uptime, 4.5+ star App Store ratings, and post-launch support that keeps apps optimized for new OS versions and evolving business needs. We don't disappear after launch — we provide ongoing maintenance, performance monitoring, and feature enhancements that keep your mobile app competitive for years.
                  </p>
                  <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                    Whether you're building consumer apps, enterprise mobility solutions, or industry-specific platforms, we bring the technical expertise and business insight that transforms good ideas into exceptional mobile experiences. When you need a mobile app development agency that delivers measurable results, choose Autom8ion Lab.
                  </p>
                </div>
              </div>
            </section>
      
            {/* Get a Free Consultation Section */}
            <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                    Get a Free Consultation for Your Mobile App Project
                  </h2>
                  <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                    Ready to build a mobile app that users love and drives real business results? Schedule a free consultation with our mobile app development agency. We'll discuss your vision, provide technology recommendations, outline project timelines, and deliver a transparent proposal with no hidden costs or surprises.
                  </p>
                  <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Start Your Mobile App Journey Today
                    </h3>
                    <p className="text-slate-300 mb-6">
                      Whether you're launching a startup MVP, modernizing an existing app, or building enterprise mobility solutions, Autom8ion Lab delivers cross-platform mobile app solutions and native app development services that exceed expectations. Our iOS and Android app developers are ready to bring your vision to life.
                    </p>
                    <Link href="/get-in-touch" className="inline-block bg-gradient-to-r from-rose-600 to-pink-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-rose-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                      Get Your Free Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </section>
      
            <CTA />
            <RelatedSolutions currentSlug="mobile-app-development" />
    </>
  );
}
