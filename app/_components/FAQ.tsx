'use client';
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Eight homepage FAQs verbatim from LOCKED v3 §"FAQs". The FAQPage schema for
  // these lives in app/page.tsx so the questions are crawlable in the initial
  // HTML without depending on this component's hydration state.
  const faqs = [
    {
      question: 'What industries do you work with?',
      answer:
        'Construction, healthcare, finance, real estate and property management, US federal/state/local government, and the Defense Industrial Base. We don\'t take work outside those areas — the focus is what makes us useful.',
    },
    {
      question: 'Are you registered for federal contracting?',
      answer:
        'Yes. UEI: YY2DR3KSENH7. CAGE: 9YCS7. DUNS: 05-289-2750. SDVOSB certification pending. Veteran-owned.',
    },
    {
      question: 'Are you a CMMC RPO or C3PAO?',
      answer:
        'No. We are software and AI builders, not assessors. We engineer systems that satisfy NIST 800-171 controls and produce the documentation auditors expect, working alongside your assessor or a partner C3PAO. We can refer you to assessment partners.',
    },
    {
      question: "What's your typical engagement size and duration?",
      answer:
        'We scope to your contract structure — task orders, IDIQ, BPA, commercial fixed-price, or T&M. Most projects ship in 8–14 weeks. CMMC remediation runs 4–9 months. FedRAMP-aligned builds run 6+ months. Quote provided after the discovery call.',
    },
    {
      question: 'Do you have past performance with [specific industry / agency]?',
      answer:
        'We can discuss applicable past performance after a qualifying call. Many engagements are NDA-protected; we provide details and references on a need-to-know basis after vendor onboarding begins.',
    },
    {
      question: 'Can you work on classified contracts?',
      answer:
        'Not at this time. We work on unclassified contracts including CUI handling (NIST 800-171, CMMC L1–L2), FedRAMP Moderate, and HIPAA-aligned environments. For classified work, we partner with cleared firms.',
    },
    {
      question: 'Where are you based?',
      answer:
        'United States — primary location is Plant City, Florida. We also maintain a development and operations office in Montreal, Quebec. Sales and project delivery is US-only.',
    },
    {
      question: 'Do you respond to RFPs/RFIs?',
      answer:
        'Yes. Send the SOW or RFI documentation to info@autom8ionlab.com or use the contact form. We respond within one business day with a fit assessment and proposed approach.',
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-purple-900/5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Frequently Asked Questions</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Common questions from{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              prospective clients
            </span>
            .
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-800/30 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                      openIndex === index ? 'rotate-180 text-cyan-400' : ''
                    }`}
                  />
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-6 pb-6">
                    <div className="pl-14">
                      <p className="text-slate-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;