import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, CheckCircle, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const customPlanIdeas = [
    "Customer service automation with chatbots trained on your data and workflow integration",
    "Marketing automation that handles content generation and campaign management",
    "Workflow systems that connect all your business tools and processes",
    "Custom software with AI features and mobile apps",
    "Analytics platforms with predictive modeling and business intelligence",
    "E-commerce automation for inventory, orders, and customer engagement",
    "Financial automation with compliance monitoring and reporting",
    "Healthcare systems for patient management and telemedicine"
  ];

  return (
    <section id="pricing" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Custom Pricing</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Every System Is
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Built for You</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            No packages. No tiers. We build exactly what your business needs.
          </p>
        </div>

        {/* Custom Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900/50 backdrop-blur-sm p-12 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl mb-6 shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">Custom Solutions</h3>
                <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                  Every project starts with understanding your specific challenges. Here are examples of systems we build:
                </p>
              </div>

              {/* Plan Ideas Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {customPlanIdeas.map((idea, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-slate-800/30 p-4 rounded-lg border border-slate-700/30">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300 text-sm leading-relaxed">{idea}</span>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="text-center">
                <p className="text-slate-400 mb-8 text-lg">
                  Want to talk about what you need? Let's figure out what makes sense for your business.
                </p>
                
                <Link 
                  to="/get-in-touch"
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-5 rounded-xl text-xl font-bold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  <span>Get My Customized Plan</span>
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </div>

            {/* Hover Effect Line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-slate-800/50 backdrop-blur-sm px-8 py-4 rounded-xl border border-slate-700/50">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-slate-300 font-medium">Free consultation and project scoping on every build</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;