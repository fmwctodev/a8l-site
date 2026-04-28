import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Mail, Clock, Calendar, Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getCanonicalUrl } from '../utils/seo';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Helmet>
        <title>Thank You | Autom8ion Lab</title>
        <meta name="description" content="Thank you for your request. We're sending your capabilities statement to your email address right now." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={getCanonicalUrl('/thank-you')} />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow delay-700"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Thank 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> You!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Your request has been received successfully. We're sending your capabilities statement to your email address right now.
          </p>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Happens 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Next?</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Here's what you can expect in the coming hours and days.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 text-center group hover:border-blue-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Check Your Email</h3>
              <p className="text-slate-400 leading-relaxed">Your capabilities statement is being sent to your email address right now. Check your inbox (and spam folder just in case).</p>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 text-center group hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Review Our Services</h3>
              <p className="text-slate-400 leading-relaxed">Take a look at our comprehensive service offerings and see how we can transform your business operations.</p>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 text-center group hover:border-green-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Expect Our Follow-Up</h3>
              <p className="text-slate-400 leading-relaxed">We'll reach out within 24 hours via call or text to discuss your automation needs and answer any questions.</p>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 text-center group hover:border-purple-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Schedule Consultation</h3>
              <p className="text-slate-400 leading-relaxed">Ready to discuss your project? We'll help you schedule a consultation to explore custom solutions for your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm p-12 rounded-2xl border border-slate-700/50 text-center">
              <h3 className="text-3xl font-bold text-white mb-6">
                Ready to Get 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Started?</span>
              </h3>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Don't wait for our follow-up. If you're ready to discuss your automation project, you can reach out to us directly or schedule a strategy call right now.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link 
                  to="/schedule-consultation"
                  className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center space-x-2"
                >
                  <span>Schedule Strategy Call</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  to="/get-in-touch"
                  className="text-slate-300 hover:text-white px-8 py-4 rounded-lg border-2 border-slate-600 hover:border-cyan-400 transition-all duration-300 flex items-center space-x-2 group text-lg font-semibold"
                >
                  <span>Contact Us Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 text-center">
              <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Quick Response</h4>
              <p className="text-slate-400 text-sm">We typically respond to all inquiries within 24 hours during business days.</p>
            </div>
            
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 text-center">
              <CheckCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Free Consultation</h4>
              <p className="text-slate-400 text-sm">Your initial consultation and project scoping session is completely free.</p>
            </div>
            
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 text-center">
              <ArrowRight className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Custom Solutions</h4>
              <p className="text-slate-400 text-sm">Every solution is built specifically for your business requirements and goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Return to Homepage */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-4 bg-slate-800/50 backdrop-blur-sm px-8 py-4 rounded-xl border border-slate-700/50">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-slate-300 font-medium">Want to explore more about our services?</span>
            <Link 
              to="/" 
              className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold flex items-center space-x-1"
            >
              <span>Return to Homepage</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ThankYou;