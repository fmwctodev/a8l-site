import type { Metadata } from 'next';
import Link from 'next/link';
import { Bot, Brain, MessageSquare, Users, CheckCircle, ArrowRight, Workflow } from 'lucide-react';
import CTA from '@/app/_components/CTA';
import RelatedSolutions from '@/app/_components/RelatedSolutions';

export const metadata: Metadata = {
  title: 'AI Agent Development for Federal, DIB, Healthcare & Financial Services',
  description: 'Custom AI agents and workflow automation for US Federal, DIB, healthcare, and financial services teams. Mission-grounded, permission-aware, and aligned to FedRAMP, FISMA, and NIST 800-53. SDVOSB Pending. Live in 30 days.',
  keywords: 'federal AI agents, DIB AI development, FedRAMP AI agents, NIST 800-53 AI, FISMA AI workflow, custom AI agents, mission-grounded AI, SDVOSB AI development, regulated industry AI, healthcare AI agents',
  alternates: { canonical: 'https://autom8ionlab.com/solutions/ai-agent-development' },
  openGraph: {
    title: 'AI Agent Development for Federal, DIB, Healthcare & Financial Services | Autom8ion Lab',
    description: 'Custom AI agents engineered for controlled environments. Mission-grounded, permission-aware, and aligned to FedRAMP, FISMA, and NIST 800-53. SDVOSB Pending. UEI: YY2DR3KSENH7.',
    url: 'https://autom8ionlab.com/solutions/ai-agent-development',
    images: [{ url: 'https://autom8ionlab.com/logo/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'AI Agent Development for Federal, DIB, Healthcare & Financial Services | Autom8ion Lab',
    description: 'Custom AI agents engineered for controlled environments. Mission-grounded, permission-aware, aligned to FedRAMP, FISMA, NIST 800-53. SDVOSB Pending.',
  },
};

const ldSchema1 = {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI Agent Development",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Autom8ion Lab"
            },
            "description": "Custom conversational agents—chatbots, voice assistants, support bots—built on LLMs and fine-tuned to your business data with human-like accuracy and context awareness.",
            "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "url": "https://autom8ionlab.com/solutions/ai-agent-development",
            "sameAs": [
              "https://www.linkedin.com/company/autom8ionlab",
              "https://autom8ionlab.com"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Agent Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "LLM-Powered Intelligence"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Human-Like Conversations"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Multi-Purpose Deployment"
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
              { "@type": "ListItem", "position": 3, "name": "AI Agent Development", "item": "https://autom8ionlab.com/solutions/ai-agent-development" }
            ]
          };

export default function Page() {
const features = [
    {
      icon: Brain,
      title: "Mission-Grounded, Permission-Aware Agents",
      description: "We build agents that operate inside the rules of your environment. They are trained on approved documentation, scoped to specific actions, and connected only to the systems they need. Agents respond using your procedures, internal documentation, and approved knowledge sources. Actions follow role-based access, approval logic, and documented business rules — not internet guesswork. Engineered for US Federal, DIB, healthcare, and financial services workflows where uncontrolled outputs are a non-starter."
    },
    {
      icon: MessageSquare,
      title: "Workflow Automation Aligned to FedRAMP, FISMA & NIST 800-53",
      description: "Manual work breaks under volume. We automate the repetitive steps that slow regulated teams down: package routing, documentation review, exception handling, status tracking, internal notifications, and system-to-system task movement. Every workflow runs the same way every time — exactly what audit-ready federal operations require. We connect your tools through API integrations so work moves without copy-paste, missed steps, or disconnected records."
    },
    {
      icon: Users,
      title: "Business-Specific Agent Training on Your Approved Data",
      description: "One-size-fits-all is reckless in regulated environments. A real AI system must reflect your operating model, your control framework, and your documentation standards. We use your proprietary data — policies, SOPs, system documentation, internal knowledge bases, and operational artifacts — to ground the AI's reasoning. This keeps outputs aligned to actual procedures, reduces unsupported responses, and makes the system materially more useful in FedRAMP, FISMA, and NIST 800-53 driven workflows."
    }
  ];

  const benefits = [
    "Handle sophisticated lead qualification with intelligent screening that identifies high-value prospects through natural conversation, qualifying leads based on budget, timeline, and specific needs while seamlessly transferring qualified prospects to sales teams",
    "Provide comprehensive 24/7 customer support with advanced context retention that remembers previous interactions, maintains conversation history across sessions, and provides consistent, personalized assistance that improves customer satisfaction and reduces support ticket volume",
    "Automate complex internal workflows and task management including employee onboarding, IT support requests, HR inquiries, and process guidance, freeing up internal teams to focus on strategic initiatives while ensuring consistent information delivery",
    "Dramatically reduce staffing costs and response times by handling up to 80% of routine customer inquiries automatically, providing instant responses to common questions while maintaining service quality and enabling human agents to focus on complex, high-value interactions",
    "Custom fine-tuning on your specific business data, product catalogs, support documentation, and industry terminology ensures accurate, contextually relevant responses that align with your brand voice and business processes, delivering superior performance compared to generic chatbot solutions",
    "Flexible deployment across web chat, mobile applications, voice systems, social media platforms, and email support with seamless omnichannel experiences that allow customers to switch between channels without losing conversation context or requiring information repetition",
    "Advanced analytics and conversation insights that provide detailed reporting on customer interactions, common questions, satisfaction metrics, and optimization opportunities, enabling continuous improvement of customer service strategies and agent performance",
    "Intelligent escalation protocols that recognize when human intervention is needed, seamlessly transferring complex issues to appropriate specialists while providing complete conversation context and customer history for efficient resolution",
    "Multilingual capabilities and cultural adaptation that enable global customer support with natural language processing in multiple languages, ensuring consistent service quality across diverse markets and customer demographics"
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
                      <Bot className="w-5 h-5 text-cyan-400" />
                      <span className="text-cyan-400 font-medium">AI Agent Development</span>
                    </div>
                  </div>
      
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    AI Agent Development
                    <br />
                    for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Regulated Environments</span>
                  </h1>
      
                  <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                    Mission-grounded, permission-aware AI agents and workflow automation for US Federal, DIB, healthcare, and financial services teams. Aligned to FedRAMP, FISMA, and NIST 800-53. SDVOSB Pending — UEI: YY2DR3KSENH7, CAGE: 9YCS7.
                  </p>
      
      
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link href="/get-in-touch" className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center space-x-2">
                      <span>Start Your AI Agent Project</span>
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
                    Generic AI Is a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Liability</span>
                  </h2>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Most teams try to "add AI" by duct-taping a public LLM wrapper onto an existing process. In US Federal environments, that approach fails fast. Generic tools do not understand your security boundaries, your authorization requirements, or your documentation standards. They produce uncontrolled outputs that aren't grounded in your approved procedures, introduce data-handling risk that conflicts with federal security requirements, and can't reliably execute approved workflows across your systems with the right permissions, approvals, and logs.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    We don't build generic chatbots. We build custom AI agents and workflow automation systems for US Federal, DIB, Healthcare, and Financial Services teams — engineered around your mission workflow, your security controls, and your documentation requirements. Whether you need to route packages through review, automate program-office tasks, or execute repeatable workflows without manual handoffs, we build for organizations that need audit-aware systems in controlled environments. Veteran-owned, SDVOSB Pending, with UEI: YY2DR3KSENH7 and CAGE: 9YCS7.
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
                    See How We Solve Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Customer Service Challenges</span>
                  </h2>
                  <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                    Watch our explainer video to understand how custom AI agents transform customer interactions and reduce support overhead.
                  </p>
                </div>
                <div className="max-w-5xl mx-auto">
                  <div className="relative bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
                    <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                      <iframe
                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE?rel=0&modestbranding=1"
                        title="AI Agent Development - Problem/Solution Explainer Video"
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
                    Chat, Voice, and Automation — <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Unified AI Experiences</span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    Our AI chatbot and virtual agent development services deliver multi-channel experiences that handle customer support, lead qualification, scheduling, and operational tasks with intelligent automation.
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
      
            {/* How It Works Section */}
            <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Our AI Agent Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Process</span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    From requirements analysis to deployment and optimization, our systematic approach ensures every AI agent delivers exceptional performance and user satisfaction.
                  </p>
                </div>
      
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">Requirements & Data Analysis</h3>
                    <p className="text-slate-400 text-sm">We analyze your customer service needs, existing support documentation, and interaction patterns to develop comprehensive AI agent specifications and training data requirements tailored to your business objectives.</p>
                  </div>
      
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">Custom Model Training</h3>
                    <p className="text-slate-400 text-sm">Our AI specialists fine-tune large language models using your proprietary data, industry knowledge, and customer interaction history to create intelligent agents that understand your business context and communication style.</p>
                  </div>
      
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-400 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">Integration & Testing</h3>
                    <p className="text-slate-400 text-sm">Comprehensive integration with your existing systems, platforms, and workflows, followed by extensive testing to ensure optimal performance, accuracy, and user experience across all deployment channels.</p>
                  </div>
      
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">4</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">Deployment & Optimization</h3>
                    <p className="text-slate-400 text-sm">Live deployment with continuous monitoring, performance analytics, and iterative improvements based on real-world interactions and user feedback to maximize effectiveness and customer satisfaction.</p>
                  </div>
                </div>
              </div>
            </section>
      
            {/* Use Cases Section */}
            <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">AI Agent Architecture</span> for Long-Term Growth
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    Our AI agent development services are built for enterprise scalability with robust integrations, data protection standards, and flexible deployment options that grow with your business.
                  </p>
                </div>
      
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">E-commerce & Retail: Shopping & Support Automation</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Deploy intelligent shopping assistants that help customers find products, answer detailed questions about specifications and availability, process orders, and handle returns. Our AI chatbot and virtual agent development provides personalized product recommendations based on browsing history, handles complex sizing questions, and guides customers through the entire purchase journey while reducing cart abandonment rates and increasing average order values through intelligent automation.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">SaaS & Technology: Technical Support & Onboarding</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Create sophisticated technical support agents that troubleshoot software issues, guide users through complex features, and provide detailed implementation assistance. Our custom AI automation solutions understand technical terminology, access documentation and knowledge bases, and provide step-by-step guidance for software configuration. Integration with your existing <Link href="/solutions/workflow-automation" className="text-cyan-400 hover:text-cyan-300 underline">workflow automation</Link> systems ensures seamless escalation to human specialists when needed.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">Healthcare & Professional Services: Patient Intake & Scheduling</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Implement intelligent patient intake systems and appointment scheduling assistants that handle sensitive information with appropriate privacy safeguards. AI agents collect medical history, schedule appointments, provide pre-visit instructions, and answer common questions about procedures while maintaining HIPAA compliance. Our <Link href="/solutions/cybersecurity" className="text-cyan-400 hover:text-cyan-300 underline">cybersecurity-first approach</Link> ensures all patient data remains protected throughout automated interactions.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">Operations & Internal Workflows: Task & Process Automation</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Automate internal operations with AI agents that handle employee onboarding, IT support requests, HR inquiries, and complex workflow management. Our AI-powered process optimization integrates with <Link href="/solutions/process-automation" className="text-cyan-400 hover:text-cyan-300 underline">process automation systems</Link> to streamline repetitive tasks, reduce manual overhead, and deliver predictive analytics that identify bottlenecks and optimization opportunities across your organization.
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
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Intelligent Automation</span>
                  </h2>
                  <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                    Our custom AI agents don't just follow scripts—they understand context, learn from interactions, and make intelligent decisions that drive real business results.
                  </p>
                  <Link href="/get-in-touch" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
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
                    Why Choose Autom8ion Lab for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">AI Agent Development</span>
                  </h2>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    The market is flooded with AI vendors selling demos dressed up as products. We are engineers who build production systems for US Federal, DIB, healthcare, and financial services operations. We don't do generic bots — we build controlled systems engineered around your workflows, access model, and documentation requirements. Built for federal and regulated environments: on-premises, private cloud, and FedRAMP deployment requirements instead of forcing you into a public SaaS box. Aligned to federal security expectations with traceability, repeatability, and operational discipline supporting FedRAMP, FISMA, and NIST 800-53 driven workflows.
                  </p>
                  <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                    Founder-led with senior engineer access — you work directly with experienced builders, not a layer of coordinators. We are SDVOSB Pending, actively pursuing Service-Disabled Veteran-Owned Small Business status for the federal market. Federal identifiers ready: UEI: YY2DR3KSENH7, CAGE: 9YCS7. Our 30-day launch framework moves you from a broken workflow to a deployed AI agent and automation layer: audit and architecture in week one, custom development in week two, integration and grounding in week three, testing and deployment into your approved environment (on-premises, private cloud, or FedRAMP-aligned infrastructure) in week four.
                  </p>
                  <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Get Started With a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Custom AI Agent Consultation</span>
                    </h3>
                    <p className="text-cyan-400 font-semibold mb-2">Ready to transform your operations with AI agent development services?</p>
                    <p className="text-slate-300 mb-6">
                      Join innovative businesses that have already revolutionized their customer service and operational efficiency with our custom AI automation solutions. Our AI chatbot and virtual agent development services deliver predictive analytics and AI insights that drive measurable business results. Schedule a consultation to see how we can create intelligent automation tailored to your specific industry requirements and business objectives.
                    </p>
                    <Link href="/get-in-touch" className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                      Schedule Your AI Agent Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </section>
      
            <CTA />
            <RelatedSolutions currentSlug="ai-agent-development" />
    </>
  );
}
