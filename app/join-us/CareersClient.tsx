'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Users, Zap, Globe, Heart, ArrowRight, MapPin, Clock, Send, DollarSign } from 'lucide-react';
import Modal from '@/app/_components/Modal';

const ldSchema1 = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://autom8ionlab.com/' },
    { '@type': 'ListItem', position: 2, name: 'Careers', item: 'https://autom8ionlab.com/join-us' },
  ],
};

const values = [
  { icon: Zap, title: 'Innovation First', description: "We're at the forefront of AI and automation technology, constantly pushing boundaries and exploring new possibilities." },
  { icon: Users, title: 'Collaborative Culture', description: 'We believe the best solutions come from diverse perspectives working together toward common goals.' },
  { icon: Globe, title: 'Remote-First', description: 'Work from anywhere while being part of a global team building the future of business automation.' },
  { icon: Heart, title: 'Work-Life Balance', description: 'We prioritize sustainable growth and ensure our team has the flexibility to thrive both professionally and personally.' },
];

const openPositions = [
  {
    title: 'Senior AI Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    salary: '$120k - $180k',
    description: 'Lead the development of custom AI solutions and machine learning models for enterprise clients.',
    requirements: ['5+ years experience in AI/ML development', 'Proficiency in Python, TensorFlow, PyTorch', 'Experience with LLMs and fine-tuning', 'Strong problem-solving skills'],
  },
  {
    title: 'Automation Architect',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    salary: '$100k - $150k',
    description: 'Design and implement complex workflow automation systems using modern tools and frameworks.',
    requirements: ['3+ years in automation/RPA development', 'Experience with n8n, Make, or similar platforms', 'Strong API integration skills', 'Knowledge of cloud platforms (AWS, Azure, GCP)'],
  },
  {
    title: 'Full-Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    salary: '$90k - $130k',
    description: 'Build responsive web applications and mobile apps that integrate with our AI and automation systems.',
    requirements: ['4+ years full-stack development experience', 'Proficiency in React, Node.js, TypeScript', 'Experience with databases and API design', 'Mobile development experience (React Native/Flutter)'],
  },
  {
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Remote',
    type: 'Full-time',
    salary: '$70k - $100k',
    description: 'Ensure client success by managing relationships, driving adoption, and identifying growth opportunities.',
    requirements: ['3+ years in customer success or account management', 'Technical background preferred', 'Excellent communication skills', 'Experience with B2B SaaS products'],
  },
];

const benefits = [
  'Competitive salary and equity package',
  'Comprehensive health, dental, and vision insurance',
  'Unlimited PTO and flexible working hours',
  'Professional development budget ($2,000/year)',
  'Latest equipment and technology stipend',
  'Remote work stipend for home office setup',
  'Annual team retreats and company events',
  'Stock options in a fast-growing company',
];

export default function CareersClient() {
  const [isCareersModalOpen, setIsCareersModalOpen] = useState(false);
  const openCareersModal = () => setIsCareersModalOpen(true);
  const closeCareersModal = () => setIsCareersModalOpen(false);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldSchema1) }}
      />

      <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl hidden sm:block animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl hidden sm:block animate-pulse-slow delay-700"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <Image src="/logo/logo-160.webp" alt="Autom8ion Lab Logo" width={160} height={160} sizes="80px" className="w-20 h-20 object-contain mx-auto mb-8" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Build the Future of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"> AI & Automation</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join our team of innovators, engineers, and visionaries who are transforming how businesses operate through intelligent automation and custom AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="#open-positions"
              className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>View Open Positions</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Our<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"> Values</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We&apos;re building more than just technology — we&apos;re creating a culture where innovation thrives and people grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 text-center group hover:border-purple-500/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="open-positions" className="py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Open<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"> Positions</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Join our growing team and help shape the future of business automation.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center text-purple-400">
                        <Users className="w-4 h-4 mr-1" />
                        {position.department}
                      </span>
                      <span className="flex items-center text-cyan-400">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                      </span>
                      <span className="flex items-center text-green-400">
                        <Clock className="w-4 h-4 mr-1" />
                        {position.type}
                      </span>
                      <span className="flex items-center text-amber-400">
                        <DollarSign className="w-4 h-4 mr-1" />
                        {position.salary}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={openCareersModal}
                    className="mt-4 lg:mt-0 bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Apply Now
                  </button>
                </div>

                <p className="text-slate-300 mb-4">{position.description}</p>

                <div>
                  <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                  <ul className="text-slate-400 space-y-1">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Benefits &<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"> Perks</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We invest in our team&apos;s success with comprehensive benefits and a supportive work environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/50 flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                <span className="text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-slate-800/50 p-6 sm:p-8 rounded-2xl border border-slate-700/50">
            <h3 className="text-3xl font-bold text-white mb-4">Don&apos;t See the Perfect Role?</h3>
            <p className="text-slate-300 mb-6">
              We&apos;re always looking for talented individuals who share our passion for innovation. Send us your resume and tell us how you&apos;d like to contribute to the future of AI and automation.
            </p>
            <button
              onClick={openCareersModal}
              className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Us Your Resume
            </button>
          </div>
        </div>
      </section>

      <Modal isOpen={isCareersModalOpen} onClose={closeCareersModal}>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Apply to Autom8ion Lab</h2>
          <p className="text-slate-300 mb-6">
            Drop your resume below and tell us why you&apos;d be a great fit. We respond within one business day.
          </p>
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/QqJzjQyYKcWxqIcJjEla"
            style={{ width: '100%', height: '480px', border: 'none', borderRadius: '8px' }}
            title="Autom8ion Lab Careers Form"
            data-form-name="Autom8ion Lab Careers Form"
          />
        </div>
      </Modal>
    </>
  );
}
