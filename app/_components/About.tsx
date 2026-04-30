import React from 'react';
import { Target, Users, Lightbulb, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-cyan-900/5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-6">
              <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">About Autom8ion Lab</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
                From Marketing to Machine Learning,
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> We Evolved With What Businesses Need</span>
              </h2>
            </div>

            <h3 className="text-2xl font-bold text-white mb-6">We Build Systems, Not Templates</h3>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Autom8ion Lab started as Sitehues Media, a creative agency building marketing systems that got results. When AI, cloud tech, and cybersecurity became critical for business survival, we shifted with it. Today we're an engineering team that builds custom automation, secure cloud systems, and enterprise security for founders and ops teams who need things done right.
            </p>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              We don't do templates. Every system we build is designed around your business logic and tech stack. Whether you're in tech, construction, healthcare, or any other industry, we create solutions that fit how you actually work. Security, speed, and scalability aren't buzzwords here. They're requirements.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <div className="text-3xl font-bold text-cyan-400">50+</div>
                <div className="text-slate-400 text-sm">Custom Systems Built</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <div className="text-3xl font-bold text-blue-400">30</div>
                <div className="text-slate-400 text-sm">Days Average Launch</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-slate-300 text-sm">Trusted by Enterprise</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-slate-300 text-sm">Security First</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-900/50 to-slate-800/50 p-6 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group">
                <Target className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold mb-2">Engineering-First</h3>
                <p className="text-slate-400 text-sm">Custom systems built on real business logic, not one-size-fits-all templates.</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/50 to-slate-800/50 p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
                <Shield className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold mb-2">Cyber-Secure by Design</h3>
                <p className="text-slate-400 text-sm">Every solution follows best practices for security and compliance to ensure resilience.</p>
              </div>
            </div>

            <div className="space-y-6 mt-8">
              <div className="bg-gradient-to-br from-amber-900/50 to-slate-800/50 p-6 rounded-xl border border-amber-500/20 hover:border-amber-400/40 transition-all duration-300 group">
                <Lightbulb className="w-8 h-8 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold mb-2">Rapid Deployment</h3>
                <p className="text-slate-400 text-sm">Modular architecture allows quick setup, iteration, and scaling without delays.</p>
              </div>

              <div className="bg-gradient-to-br from-emerald-900/50 to-slate-800/50 p-6 rounded-xl border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 group">
                <Users className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold mb-2">Founder-Led Projects</h3>
                <p className="text-slate-400 text-sm">Direct access to senior engineers and strategists, no middlemen.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;