import React from 'react';
import { Rocket, Brain, Shield, DollarSign } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Fast to Production",
      subtitle: "Most systems go live in 30 days",
      description: "We've done this enough times to know what works. Our process gets custom automation running faster than typical development timelines.",
      stats: "30 Days",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: Brain,
      title: "Built by People Who Know This",
      subtitle: "Custom systems, not plugins",
      description: "Our team has built dozens of these systems. We know how to balance new tech with what actually works in real businesses.",
      stats: "100% Custom",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: Shield,
      title: "Security Built In",
      subtitle: "Enterprise-grade protection from day one",
      description: "Bank-level encryption and SOC 2 protocols aren't optional for us. They're standard on every system we build.",
      stats: "SOC 2 Ready",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: DollarSign,
      title: "Results That Show Up",
      subtitle: "Lower costs, faster output, easier scaling",
      description: "Clients typically see 10x productivity improvements within 90 days. Not projections. Actual measured results.",
      stats: "10x ROI",
      color: "from-amber-500 to-orange-400"
    }
  ];

  return (
    <section className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/3 to-purple-900/3"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Why Teams Choose
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Autom8tion Lab</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-300 mb-6">
            Speed, Security, and Real Results
          </h3>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We build systems that deliver measurable outcomes. Our clients see faster operations, better security, and actual ROI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-6">
                    <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {benefit.title}
                        </h3>
                        <div className={`text-2xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                          {benefit.stats}
                        </div>
                      </div>
                      
                      <p className="text-cyan-400 font-medium mb-3">{benefit.subtitle}</p>
                      <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 bg-slate-800/50 backdrop-blur-sm px-8 py-6 rounded-xl border border-slate-700/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">50+</div>
              <div className="text-slate-400 text-sm">Systems Deployed</div>
            </div>
            <div className="w-px h-12 bg-slate-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">99.9%</div>
              <div className="text-slate-400 text-sm">Uptime Guaranteed</div>
            </div>
            <div className="w-px h-12 bg-slate-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">24/7</div>
              <div className="text-slate-400 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;