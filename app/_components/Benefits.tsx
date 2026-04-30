import React from 'react';
import { ShieldCheck, Workflow, Award, Users } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Software builders with an in-house compliance arm',
      subtitle: 'Engineering and cybersecurity under one roof',
      description:
        'We engineer compliant systems and document them for audit. Same team writes the code and produces the System Security Plan, control narratives, and evidence collection your assessor will need.',
      color: 'from-cyan-500 to-blue-400',
    },
    {
      icon: Workflow,
      title: 'Engineered for audit from day one',
      subtitle: 'Compliance documentation produced in parallel with code',
      description:
        'Security architecture decisions — data classification, encryption strategy, access control model, audit logging — are made at the start of the project. Compliance documentation is produced as we build, not retrofitted at the end.',
      color: 'from-emerald-500 to-teal-400',
    },
    {
      icon: Award,
      title: 'Veteran-owned, SDVOSB pending',
      subtitle: 'Registered US federal contractor',
      description:
        'Sitehues Media Inc. (DBA Autom8ion Lab) — UEI YY2DR3KSENH7, CAGE 9YCS7. Active SAM.gov registration. SDVOSB certification pending. Once approved, eligible for federal set-aside competitions and sole-source preferences.',
      color: 'from-amber-500 to-orange-400',
    },
    {
      icon: Users,
      title: 'Founder-led delivery',
      subtitle: 'Senior engineering access on every engagement',
      description:
        'You work with senior engineers, not a coordination layer. Multi-vertical experience across construction, healthcare, finance, real estate, government, and defense — applied to your environment, your stack, your compliance posture.',
      color: 'from-violet-500 to-pink-400',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/3 to-purple-900/3"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Why Teams Choose Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            What sets us apart from
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> generic dev shops</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Most technology vendors force a choice between speed and compliance. We close that gap.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-800/30 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-start space-x-6">
                    <div
                      className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-cyan-400 font-medium mb-3">{benefit.subtitle}</p>
                      <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
