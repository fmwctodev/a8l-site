import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getCanonicalUrl } from '../utils/seo';

const VSLLandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Helmet>
        <title>AI-Powered Advertising Solutions | Autom8ion Lab</title>
        <meta name="description" content="Transform your advertising with AI-powered solutions from Autom8ion Lab." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={getCanonicalUrl('/aiads-vsl')} />
      </Helmet>

      <Header />

      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI-Powered Advertising Solutions
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Transform your advertising with cutting-edge AI technology.
            </p>
            <Link
              to="/get-in-touch"
              className="inline-block bg-gradient-to-r from-blue-600 to-sky-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-sky-600 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VSLLandingPage;
