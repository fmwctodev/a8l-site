import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getCanonicalUrl, buildJsonLd } from '../utils/seo';

const Booking = () => {
  useEffect(() => {
    const scriptId = 'ghl-form-embed';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Helmet>
        <title>Book a Strategy Call | Autom8tion Lab</title>
        <meta name="description" content="Book a free strategy call to discuss your automation needs and get a custom roadmap for your business. 30-minute consultation with our AI and automation experts." />
        <meta name="keywords" content="book strategy call, free consultation, automation roadmap, AI experts, business automation consultation, custom automation planning, AI strategy session, automation assessment" />
        <link rel="canonical" href={getCanonicalUrl('/schedule-consultation')} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Book a Strategy Call | Autom8tion Lab" />
        <meta property="og:description" content="Book a free strategy call to discuss your automation needs and get a custom roadmap for your business. 30-minute consultation with our AI and automation experts." />
        <meta property="og:url" content="https://autom8ionlab.com/schedule-consultation" />
        <meta property="og:image" content="https://autom8ionlab.com/logo/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Book a Strategy Call | Autom8tion Lab" />
        <meta name="twitter:description" content="Book a free strategy call to discuss your automation needs and get a custom roadmap for your business. 30-minute consultation with our AI and automation experts." />
        <meta name="twitter:image" content="https://autom8ionlab.com/logo/logo.png" />

        <script type="application/ld+json">
          {buildJsonLd({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Book a Strategy Call",
            "url": "https://autom8ionlab.com/schedule-consultation",
            "description": "Book a free 30-minute strategy call with Autom8tion Lab AI and automation experts.",
            "publisher": { "@type": "Organization", "name": "Autom8tion Lab", "url": "https://autom8ionlab.com" }
          })}
        </script>
        <script type="application/ld+json">
          {buildJsonLd({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://autom8ionlab.com/" },
              { "@type": "ListItem", "position": 2, "name": "Book a Strategy Call", "item": "https://autom8ionlab.com/schedule-consultation" }
            ]
          })}
        </script>
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
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
            Ready to Start Your 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Custom Build?</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Book a free strategy call to discuss your automation needs and get a custom roadmap for your business.
          </p>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4 text-center">
                Schedule Your Strategy Call
              </h2>
              <p className="text-slate-300 text-center mb-8">
                Select a time that works best for you to discuss your automation needs.
              </p>
              
              {/* Calendar Placeholder */}
              <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600/50">
                {/* GHL Calendar Embed */}
                <iframe 
                  src="https://api.leadconnectorhq.com/widget/booking/UJkdnKQqWn85wjSSrKoI" 
                  style={{ width: '100%', border: 'none', overflow: 'hidden', height: '1200px' }} 
                  scrolling="no" 
                  id="UJkdnKQqWn85wjSSrKoI_1755236874586"
                  title="Schedule Your Strategy Call"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-6">
              What to Expect on Your 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Strategy Call</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Discovery & Analysis</h4>
              <p className="text-slate-400 text-sm">We'll discuss your current processes, pain points, and automation goals to understand your unique requirements.</p>
            </div>

            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Custom Strategy</h4>
              <p className="text-slate-400 text-sm">Receive a tailored automation roadmap with specific recommendations for your business and industry.</p>
            </div>

            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Next Steps</h4>
              <p className="text-slate-400 text-sm">Get a clear implementation plan with timelines, investment details, and immediate action items.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;