import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, ArrowRight, Search } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getCanonicalUrl } from '../utils/seo';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Helmet>
        <title>Page Not Found | Autom8ion Lab</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={getCanonicalUrl('/404')} />
      </Helmet>

      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <span className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              404
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h1>

          <p className="text-lg text-slate-400 mb-12 max-w-xl mx-auto">
            The page you are looking for does not exist or has been moved. Let us help you find what you need.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <Link
              to="/"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              Home
            </Link>

            <Link
              to="/#solutions"
              className="flex items-center justify-center gap-2 bg-slate-800 text-white px-6 py-4 rounded-xl font-semibold hover:bg-slate-700 border border-slate-700 transition-all duration-300"
            >
              <Search className="w-5 h-5" />
              Solutions
            </Link>

            <Link
              to="/get-in-touch"
              className="flex items-center justify-center gap-2 bg-slate-800 text-white px-6 py-4 rounded-xl font-semibold hover:bg-slate-700 border border-slate-700 transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
