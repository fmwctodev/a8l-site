import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Main CTA Content */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 bg-cyan-900/30 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-500/20 mb-8">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Ready to Build Something Better?</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Let's Talk About Your Build
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-8">
            Free Strategy Call, No Pressure
          </h3>

          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Stop doing manual work that could be automated. Let's build something custom that actually fits how your business works. AI automation, workflows, LLM systems, whatever you need.
          </p>
          <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            We'll build a system that's secure and scales as you grow. From AI agents to cloud infrastructure, everything adapts as your business expands.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link 
            href="/get-in-touch"
            className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-5 rounded-xl text-xl font-bold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center space-x-3"
          >
            <span>Get Started</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            href="/schedule-consultation"
            className="text-slate-300 hover:text-white px-10 py-5 rounded-xl border-2 border-slate-600 hover:border-cyan-400 transition-all duration-300 flex items-center space-x-3 group text-xl font-semibold"
          >
            <span>Book a Free Call</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
            <div className="text-3xl font-bold text-cyan-400 mb-2">30 Days</div>
            <div className="text-slate-300">Average Launch Time</div>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
            <div className="text-3xl font-bold text-blue-400 mb-2">10x ROI</div>
            <div className="text-slate-300">Typical Efficiency Gains</div>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
            <div className="text-3xl font-bold text-amber-400 mb-2">24/7</div>
            <div className="text-slate-300">Automated Operations</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;