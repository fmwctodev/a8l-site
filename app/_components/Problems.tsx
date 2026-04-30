import React from 'react';
import { AlertTriangle, X, Wrench } from 'lucide-react';

const Problems = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Pre-built bots break your workflow",
      description: "Generic solutions create more problems than they solve. They force you to change how you work instead of adapting to your process."
    },
    {
      icon: X,
      title: "Template AI doesn't know your business",
      description: "Off-the-shelf AI can't understand your industry nuances or specific operational needs. It's like hiring someone who's never worked in your field."
    },
    {
      icon: Wrench,
      title: "You're duct-taping tools that don't talk",
      description: "Connecting multiple platforms usually means you're still doing manual work. You're paying for automation that barely automates."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 to-orange-900/5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">The Problem</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Why Generic Automation Fails, and How We Fix It
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6">
            Custom Workflow Automation That Actually Works
          </h3>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Most automation tools fail because they weren't built for how your business actually operates. Here's what goes wrong:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-red-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-red-900/30 rounded-xl mb-6 group-hover:bg-red-900/50 transition-colors">
                  <IconComponent className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{problem.title}</h3>
                <p className="text-slate-400 leading-relaxed">{problem.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-slate-800/50 backdrop-blur-sm px-8 py-4 rounded-xl border border-slate-700/50">
            <div className="w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
            <span className="text-slate-300 font-medium">If this sounds familiar, let's talk about fixing it.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;