import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Users, Zap, Globe, Heart, ArrowRight, MapPin, Clock, DollarSign } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import { getCanonicalUrl, buildJsonLd } from '../utils/seo';

const Careers = () => {
  const [isCareersModalOpen, setIsCareersModalOpen] = useState(false);

  const openCareersModal = () => setIsCareersModalOpen(true);
  const closeCareersModal = () => setIsCareersModalOpen(false);

  const values = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "We're at the forefront of AI and automation technology, constantly pushing boundaries and exploring new possibilities."
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "We believe the best solutions come from diverse perspectives working together toward common goals."
    },
    {
      icon: Globe,
      title: "Remote-First",
      description: "Work from anywhere while being part of a global team building the future of business automation."
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "We prioritize sustainable growth and ensure our team has the flexibility to thrive both professionally and personally."
    }
  ];

  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$120k - $180k",
      description: "Lead the development of custom AI solutions and machine learning models for enterprise clients.",
      requirements: [
        "5+ years experience in AI/ML development",
        "Proficiency in Python, TensorFlow, PyTorch",
        "Experience with LLMs and fine-tuning",
        "Strong problem-solving skills"
      ]
    },
    {
      title: "Automation Architect",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$100k - $150k",
      description: "Design and implement complex workflow automation systems using modern tools and frameworks.",
      requirements: [
        "3+ years in automation/RPA development",
        "Experience with n8n, Make, or similar platforms",
        "Strong API integration skills",
        "Knowledge of cloud platforms (AWS, Azure, GCP)"
      ]
    },
    {
      title: "Full-Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$90k - $130k",
      description: "Build responsive web applications and mobile apps that integrate with our AI and automation systems.",
      requirements: [
        "4+ years full-stack development experience",
        "Proficiency in React, Node.js, TypeScript",
        "Experience with databases and API design",
        "Mobile development experience (React Native/Flutter)"
      ]
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      salary: "$70k - $100k",
      description: "Ensure client success by managing relationships, driving adoption, and identifying growth opportunities.",
      requirements: [
        "3+ years in customer success or account management",
        "Technical background preferred",
        "Excellent communication skills",
        "Experience with B2B SaaS products"
      ]
    }
  ];

  const benefits = [
    "Competitive salary and equity package",
    "Comprehensive health, dental, and vision insurance",
    "Unlimited PTO and flexible working hours",
    "Professional development budget ($2,000/year)",
    "Latest equipment and technology stipend",
    "Remote work stipend for home office setup",
    "Annual team retreats and company events",
    "Stock options in a fast-growing company"
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Helmet>
        <title>Careers at Autom8tion Lab | Build the Future of AI & Automation</title>
        <meta name="description" content="Join our team of innovators, engineers, and visionaries who are transforming how businesses operate through intelligent automation and custom AI solutions." />
        <meta name="keywords" content="AI careers, automation jobs, tech jobs remote, AI engineering careers, join AI team, innovation jobs, remote AI positions, automation engineer jobs, AI developer careers" />
        <link rel="canonical" href={getCanonicalUrl('/join-us')} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Careers at Autom8tion Lab | Build the Future of AI & Automation" />
        <meta property="og:description" content="Join our team of innovators, engineers, and visionaries who are transforming how businesses operate through intelligent automation and custom AI solutions." />
        <meta property="og:url" content="https://autom8ionlab.com/join-us" />
        <meta property="og:image" content="https://autom8ionlab.com/logo/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@autom8ionlab" />
        <meta name="twitter:title" content="Careers at Autom8tion Lab | Build the Future of AI & Automation" />
        <meta name="twitter:description" content="Join our team of innovators, engineers, and visionaries who are transforming how businesses operate through intelligent automation and custom AI solutions." />
        <meta name="twitter:image" content="https://autom8ionlab.com/logo/logo.png" />

        {openPositions.map((position) => (
          <script key={position.title} type="application/ld+json">
            {buildJsonLd({
              "@context": "https://schema.org",
              "@type": "JobPosting",
              "title": position.title,
              "description": position.description,
              "employmentType": "FULL_TIME",
              "datePosted": "2025-01-15",
              "jobLocationType": "TELECOMMUTE",
              "hiringOrganization": {
                "@type": "Organization",
                "name": "Autom8tion Lab",
                "sameAs": "https://autom8ionlab.com"
              },
              "jobLocation": {
                "@type": "Place",
                "address": { "@type": "PostalAddress", "addressLocality": "Remote", "addressCountry": "US" }
              },
              "baseSalary": {
                "@type": "MonetaryAmount",
                "currency": "USD",
                "value": { "@type": "QuantitativeValue", "unitText": "YEAR", "minValue": parseInt(position.salary.match(/\d+/)?.[0] || '0') * 1000, "maxValue": parseInt(position.salary.match(/\d+/g)?.[1] || '0') * 1000 }
              }
            })}
          </script>
        ))}
        <script type="application/ld+json">
          {buildJsonLd({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://autom8ionlab.com/" },
              { "@type": "ListItem", "position": 2, "name": "Careers", "item": "https://autom8ionlab.com/join-us" }
            ]
          })}
        </script>
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow delay-700"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <img
            src="/logo/logo.png"
            alt="Autom8tion Lab Logo"
            className="w-20 h-20 object-contain mx-auto mb-8"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Build the Future of 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"> AI & Automation</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join our team of innovators, engineers, and visionaries who are transforming how businesses operate through intelligent automation and custom AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="#open-positions" className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <span>View Open Positions</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"> Values</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We're building more than just technology—we're creating a culture where innovation thrives and people grow.
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

      {/* Open Positions */}
      <section id="open-positions" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Open 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"> Positions</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Join our growing team and help shape the future of business automation.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
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

      {/* Benefits */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Benefits & 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"> Perks</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We invest in our team's success with comprehensive benefits and a supportive work environment.
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

      {/* CTA */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
            <h3 className="text-3xl font-bold text-white mb-4">Don't See the Perfect Role?</h3>
            <p className="text-slate-300 mb-6">
              We're always looking for talented individuals who share our passion for innovation. Send us your resume and tell us how you'd like to contribute to the future of AI and automation.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
              <span onClick={openCareersModal} className="cursor-pointer">Send Us Your Resume</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Careers Modal */}
      <Modal isOpen={isCareersModalOpen} onClose={closeCareersModal}>
        <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Apply for Position</h2>
            <p className="text-slate-300">Submit your application and we'll get back to you within 24 hours.</p>
          </div>
          
          <div className="min-h-[1012px]">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/G5ZjKTl88o57Ix8eZRYI"
              style={{width: '100%', height: '1012px', border: 'none', borderRadius: '3px'}}
              id="inline-G5ZjKTl88o57Ix8eZRYI" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Autom8ion Lab Careers Form"
              data-height="1012"
              data-layout-iframe-id="inline-G5ZjKTl88o57Ix8eZRYI"
              data-form-id="G5ZjKTl88o57Ix8eZRYI"
              title="Autom8ion Lab Careers Form"
            />
            <script src="https://link.msgsndr.com/js/form_embed.js"></script>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Careers;