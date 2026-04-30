import React from 'react';
import Link from 'next/link';
import { Bot, Workflow, Database, Zap, Brain, Phone, Code, Smartphone, Shield, Cloud, BarChart } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Bot,
      title: "AI Agent Development",
      description: "Conversational AI that understands your business, trained on your data to handle lead qualification and customer support.",
      color: "from-green-400 to-emerald-400",
      path: "/solutions/ai-agent-development"
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Automate your entire process from start to finish using n8n, Make, or Python. Complete visibility into what's happening.",
      color: "from-blue-400 to-cyan-400",
      path: "/solutions/workflow-automation"
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Turn repetitive tasks into hands-free operations with Python scripts, browser automation, and API connections.",
      color: "from-teal-400 to-cyan-400",
      path: "/solutions/process-automation"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Mobile apps that work how your users expect them to, whether native iOS/Android or cross-platform.",
      color: "from-rose-400 to-pink-400",
      path: "/solutions/mobile-app-development"
    },
    {
      icon: Shield,
      title: "Cybersecurity & Compliance",
      description: "Security that covers your endpoints, network, and cloud. Vulnerability scanning, policy alignment, and response planning.",
      color: "from-cyan-400 to-blue-400",
      path: "/solutions/cybersecurity"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Server setup, containers, and monitoring across AWS, Azure, or your own infrastructure. Automated and secure.",
      color: "from-blue-500 to-cyan-500",
      path: "/solutions/cloud-systems"
    },
    {
      icon: Database,
      title: "API Integrations",
      description: "Connect your systems with secure API bridges. Real-time syncing, webhooks, and middleware that keeps data flowing.",
      color: "from-orange-400 to-red-400",
      path: "/solutions/api-integrations"
    },
    {
      icon: Brain,
      title: "Custom LLM Systems",
      description: "Large language models designed, trained, and hosted specifically for your industry using your proprietary data.",
      color: "from-pink-400 to-rose-400",
      path: "/solutions/custom-llm-systems"
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software built with modern tech to solve your specific business challenges and make operations smoother.",
      color: "from-blue-400 to-teal-400",
      path: "/solutions/software-development"
    },
    {
      icon: BarChart,
      title: "Data Management & Analytics",
      description: "Centralized data pipelines and AI-powered dashboards. Secure storage with role-based access for clean reporting.",
      color: "from-emerald-400 to-teal-400",
      path: "/solutions/data-management"
    }
  ];

  return (
    <section id="solutions" className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl hidden sm:block"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl hidden sm:block"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            AI Automation, <Link href="/solutions/cloud-systems" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-300 hover:to-cyan-300 transition-colors">Cloud Infrastructure</Link> & <Link href="/solutions/cybersecurity" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-400 hover:from-cyan-300 hover:to-amber-300 transition-colors">Cybersecurity</Link> Built for Your Business
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-300 mb-6">
            Every System Built From Scratch Around How You Work
          </h3>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We build <Link href="/solutions/ai-agent-development" className="text-cyan-400 hover:text-cyan-300 underline transition-colors">AI agents</Link>, <Link href="/solutions/cloud-systems" className="text-cyan-400 hover:text-cyan-300 underline transition-colors">cloud systems</Link>, <Link href="/solutions/cybersecurity" className="text-cyan-400 hover:text-cyan-300 underline transition-colors">cybersecurity</Link>, and <Link href="/solutions/data-management" className="text-cyan-400 hover:text-cyan-300 underline transition-colors">data management</Link> solutions that fit your specific business needs. No generic templates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {solutions.slice(0, 3).map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <Link
                href={solution.path}
                key={index}
                className="group bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-slate-800/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {solution.description}
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {solutions.slice(3, 6).map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <Link
                href={solution.path}
                key={index}
                className="group bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-slate-800/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {solution.description}
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {solutions.slice(6, 9).map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <Link
                href={solution.path}
                key={index}
                className="group bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-slate-800/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {solution.description}
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="max-w-full">
          {solutions.slice(9, 10).map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <Link
                href={solution.path}
                key={index}
                className="group bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-slate-800/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-[1.02] flex items-center gap-8"
              >
                <div className={`flex items-center justify-center w-20 h-20 bg-gradient-to-r ${solution.color} rounded-xl group-hover:scale-110 transition-transform shadow-lg flex-shrink-0`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors text-lg">
                    {solution.description}
                  </p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/get-in-touch"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
          >
            Explore Custom Solutions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Solutions;