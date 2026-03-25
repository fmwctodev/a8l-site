import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getCanonicalUrl, buildJsonLd } from '../utils/seo';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "mailto:info@autom8ionlab.com",
      description: "Get a response within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "tel:+18555086062",
      description: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Remote-First Company",
      description: "Serving clients worldwide"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "< 24 Hours",
      description: "We prioritize quick responses"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Helmet>
        <title>Contact Autom8tion Lab | Get a Custom Project Quote</title>
        <meta name="description" content="Ready to transform your business with custom AI and automation? Get in touch with Autom8tion Lab to discuss your project and receive a free consultation." />
        <meta name="keywords" content="contact AI company, custom project quote, AI solutions contact, automation consultation, business inquiry, AI development quote, custom automation contact, project discussion" />
        <link rel="canonical" href={getCanonicalUrl('/get-in-touch')} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Autom8tion Lab | Get a Custom Project Quote" />
        <meta property="og:description" content="Ready to transform your business with custom AI and automation? Get in touch with Autom8tion Lab to discuss your project and receive a free consultation." />
        <meta property="og:url" content="https://autom8ionlab.com/get-in-touch" />
        <meta property="og:image" content="https://autom8ionlab.com/logo/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@autom8ionlab" />
        <meta name="twitter:title" content="Contact Autom8tion Lab | Get a Custom Project Quote" />
        <meta name="twitter:description" content="Ready to transform your business with custom AI and automation? Get in touch with Autom8tion Lab to discuss your project and receive a free consultation." />
        <meta name="twitter:image" content="https://autom8ionlab.com/logo/logo.png" />

        <script type="application/ld+json">
          {buildJsonLd({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Autom8tion Lab",
            "url": "https://autom8ionlab.com/get-in-touch",
            "description": "Contact Autom8tion Lab for custom AI and automation solutions.",
            "mainEntity": {
              "@type": "Organization",
              "name": "Autom8tion Lab",
              "url": "https://autom8ionlab.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-855-508-6062",
                "contactType": "customer service",
                "email": "info@autom8ionlab.com",
                "areaServed": "Worldwide",
                "availableLanguage": ["en"]
              }
            }
          })}
        </script>
        <script type="application/ld+json">
          {buildJsonLd({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://autom8ionlab.com/" },
              { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://autom8ionlab.com/get-in-touch" }
            ]
          })}
        </script>
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow delay-700"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <img
            src="/imgs/logo.png"
            alt="Autom8tion Lab Logo"
            className="w-20 h-20 object-contain mx-auto mb-8"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Get Your 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Custom Project Quote</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business with custom AI and automation? Get in touch with our team to discuss your project and receive a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                  {info.details.startsWith('mailto:') || info.details.startsWith('tel:') ? (
                    <a href={info.details} className="text-cyan-400 font-medium mb-1 hover:text-cyan-300 transition-colors block">
                      {info.details.replace('mailto:', '').replace('tel:', '').replace('+18555086062', '+1 855-508-6062')}
                    </a>
                  ) : (
                    <p className="text-cyan-400 font-medium mb-1">{info.details}</p>
                  )}
                  <p className="text-slate-400 text-sm">{info.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Custom Project</span>
            </h2>
            <p className="text-xl text-slate-300">
              Tell us about your automation needs and we'll create a custom solution for your business.
            </p>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
            <div className="min-h-[864px]">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/SNkHAghEAJ6mS7wUtBep"
                style={{width: '100%', height: '864px', border: 'none', borderRadius: '3px'}}
                id="inline-SNkHAghEAJ6mS7wUtBep" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Autom8ion Lab Site Contact Form"
                data-height="864"
                data-layout-iframe-id="inline-SNkHAghEAJ6mS7wUtBep"
                data-form-id="SNkHAghEAJ6mS7wUtBep"
                title="Autom8ion Lab Site Contact Form"
              />
              <script src="https://link.msgsndr.com/js/form_embed.js"></script>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;