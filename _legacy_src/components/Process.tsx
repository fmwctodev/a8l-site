import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Map, Wrench, Rocket, ArrowRight } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: "Discovery and Planning",
      description: "We look at how you work now, what tools you use, and where things break down. Then we map out what needs to be built.",
      duration: "Day 1-3",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: Map,
      title: "Blueprint and Scope",
      description: "We create the technical plan showing how everything connects, what success looks like, and where we're drawing boundaries. All integration points get mapped out.",
      duration: "Day 4-7",
      color: "from-cyan-400 to-teal-400"
    },
    {
      icon: Wrench,
      title: "Build and Integration",
      description: "This is where we actually build it. Custom development, API connections, syncing with your existing tools, and testing everything to make sure it works.",
      duration: "Day 8-25",
      color: "from-amber-400 to-orange-400"
    },
    {
      icon: Rocket,
      title: "Launch and Tuning",
      description: "The system goes live. We watch how it performs, make adjustments based on real usage, and optimize based on what you're seeing.",
      duration: "Day 26-30+",
      color: "from-green-400 to-emerald-400"
    }
  ];

  return (
    <section id="process" className="py-24 bg-black relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            How We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Systems in 30 Days</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-300 mb-6">
            From First Call to Live System
          </h3>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
            Speed doesn't mean cutting corners. We use proven frameworks and modular building blocks to deliver custom <Link to="/solutions/workflow-automation" className="text-cyan-400 hover:text-cyan-300 underline transition-colors">workflow automation</Link>, <Link to="/solutions/custom-llm-systems" className="text-cyan-400 hover:text-cyan-300 underline transition-colors">LLM systems</Link>, and enterprise solutions in weeks.
          </p>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Here's what happens from first conversation to live deployment:
          </p>
        </div>

        <div className="relative">
          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative group">
                  {/* Connecting Line (hidden on mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 left-full w-8 h-0.5 bg-gradient-to-r from-cyan-400/50 to-transparent z-0"></div>
                  )}
                  
                  <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 group-hover:transform group-hover:scale-105">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="mb-4">
                      <div className="text-sm text-cyan-400 font-medium mb-2">{step.duration}</div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                        {step.description}
                      </p>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Arrow Indicators */}
          <div className="lg:hidden flex justify-center space-x-4 mt-8">
            {steps.map((_, index) => (
              <React.Fragment key={index}>
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Want to See If This Works for You?</h3>
            <p className="text-slate-300 mb-6">
              Book a free call to talk about what you need. We'll map out what a custom build would look like for your business.
            </p>
            <Link 
              to="/schedule-consultation"
              className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-5 rounded-xl text-xl font-bold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-3"
            >
              <span>Book a Strategy Call</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;