'use client';
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How is custom automation different from using tools like Zapier or Make?",
      answer: "Zapier and Make work great for simple stuff. But they break when your business logic gets complicated. We build systems that understand exactly how you work, handle the weird edge cases, and scale when you grow. Instead of tying together multiple tools that barely talk to each other, you get something built specifically for how your business actually operates."
    },
    {
      question: "How long does it typically take to build a custom AI or automation system?",
      answer: "Most systems go live in 30 days. Depends on how complex it is, but here's the typical timeline: Discovery and Planning (Days 1-3), Blueprint and Scope (Days 4-7), Build and Integration (Days 8-25), Launch and Tuning (Days 26-30+). We move fast but we don't cut corners."
    },
    {
      question: "What makes your AI agents different from generic chatbots?",
      answer: "We train them on your actual business data, products, and customer conversations. They learn your industry terms, remember context throughout discussions, and handle complex back-and-forth. Generic chatbots follow scripts. Ours adapt based on real interactions and give responses that feel like talking to someone who knows your business."
    },
    {
      question: "Do you work with existing systems or do we need to start from scratch?",
      answer: "We specialize in connecting to what you already have. Salesforce, Shopify, custom databases, old legacy systems, whatever. We build the bridges that make everything talk to each other. You don't replace what works. We just add automation that fits with what you're already using."
    },
    {
      question: "What kind of ROI can we expect from custom automation?",
      answer: "Most clients see 10x productivity improvements within 90 days. Results vary depending on what you're automating, but typical outcomes include 60-90% less manual work, 300% faster processing, and real cost savings from not needing as many people doing repetitive tasks."
    },
    {
      question: "Is our data secure with AI and automation systems?",
      answer: "Yes. We use bank-level encryption, SOC 2 protocols, and keep your data completely under your control. Your proprietary info stays in your environment. We can deploy on your own servers or in private clouds. You maintain full control over everything while still getting the automation benefits."
    },
    {
      question: "What ongoing support do you provide after launch?",
      answer: "We monitor the system, optimize performance, and add features as needed. As your business grows and changes, we make sure the automation keeps working well. We'll also train your team and provide documentation so you can maintain things long-term."
    },
    {
      question: "Can you handle industry-specific compliance requirements?",
      answer: "Yes. We've worked with HIPAA for healthcare, SOX for financial services, GDPR for data privacy, and other frameworks. Compliance is built in from the start. That means audit trails, access controls, and reporting capabilities that meet regulatory requirements."
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-purple-900/5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Frequently Asked Questions</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Common Questions About
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Custom Automation</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Here are the questions we hear most often:
          </p>
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
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
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

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-slate-800/50 backdrop-blur-sm px-8 py-4 rounded-xl border border-slate-700/50">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-slate-300 font-medium">Have more questions? Let's talk.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;