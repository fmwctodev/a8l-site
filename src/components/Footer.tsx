import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Facebook, Instagram, Loader2 } from 'lucide-react';

const Footer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleCapabilitiesSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email')
    };

    try {
      // Submit to Netlify Forms
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });

      // Trigger GHL webhook via serverless function (now SendGrid/Supabase)
      try {
        const response = await fetch('/.netlify/functions/capabilities-webhook', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error('Webhook error response:', errorData);
          alert(`Email delivery failed: ${errorData.error || 'Unknown error'}. Check console for details.`);
        }
      } catch (webhookError) {
        console.error('Webhook execution failed:', webhookError);
      }

      // Trigger automatic download
      const downloadLink = document.createElement('a');
      downloadLink.href = '/downloads/Autom8ion_Lab_Capabilities_Statement.pdf';
      downloadLink.download = 'Autom8ion_Lab_Capabilities_Statement.pdf';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      // Brief delay to ensure download starts before navigation
      setTimeout(() => {
        window.location.href = '/thank-you';
      }, 1000);
    } catch (error) {
      console.error('Form submission failed:', error);
      setSubmitError(true);
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <footer className="bg-black border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="/logo/logo.png"
                alt="Autom8tion Lab Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold text-white">Autom8tion Lab</span>
            </div>
            
            <p className="text-slate-400 mb-8 leading-relaxed max-w-md">
              Elite provider of custom-built AI and automation solutions. We engineer bespoke systems that transform businesses from the ground up, no templates, just results.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-400">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href="mailto:info@autom8ionlab.com" className="hover:text-cyan-400 transition-colors">info@autom8ionlab.com</a>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a href="tel:+18555086062" className="hover:text-cyan-400 transition-colors">+1 855-508-6062</a>
              </div>
              <div className="flex items-center space-x-4 pt-2">
                <a href="https://www.facebook.com/autom8ionlab" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                  <span className="sr-only">Follow us on Facebook</span>
                </a>
                <a href="https://www.instagram.com/autom8ionlab/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Follow us on Instagram</span>
                </a>
                <a href="https://www.linkedin.com/company/autom8ionlab" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">Follow us on LinkedIn</span>
                </a>
                <a href="https://www.youtube.com/@autom8ionlab" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="sr-only">Follow us on YouTube</span>
                </a>
                <a href="https://tiktok.com/@autom8ionlab" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                  <span className="sr-only">Follow us on TikTok</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-2 grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-6">AI & Automation</h3>
              <div className="space-y-3">
                <Link to="/solutions/ai-agent-development" className="block text-slate-400 hover:text-cyan-400 transition-colors">AI Agent Development</Link>
                <Link to="/solutions/workflow-automation" className="block text-slate-400 hover:text-cyan-400 transition-colors">Workflow Automation</Link>
                <Link to="/solutions/process-automation" className="block text-slate-400 hover:text-cyan-400 transition-colors">Process Automation</Link>
                <Link to="/solutions/custom-llm-systems" className="block text-slate-400 hover:text-cyan-400 transition-colors">Custom LLM Systems</Link>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">Development Services</h3>
              <div className="space-y-3">
                <Link to="/solutions/software-development" className="block text-slate-400 hover:text-cyan-400 transition-colors">Software Development</Link>
                <Link to="/solutions/mobile-app-development" className="block text-slate-400 hover:text-cyan-400 transition-colors">Mobile App Development</Link>
                <Link to="/solutions/api-integrations" className="block text-slate-400 hover:text-cyan-400 transition-colors">API Integrations</Link>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">Infrastructure & Security</h3>
              <div className="space-y-3">
                <Link to="/solutions/cybersecurity" className="block text-slate-400 hover:text-cyan-400 transition-colors">Cybersecurity & Compliance</Link>
                <Link to="/solutions/cloud-systems" className="block text-slate-400 hover:text-cyan-400 transition-colors">Cloud Infrastructure</Link>
                <Link to="/solutions/data-management" className="block text-slate-400 hover:text-cyan-400 transition-colors">Data Management & Analytics</Link>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <div className="space-y-3">
              <Link to="/#about" className="block text-slate-400 hover:text-cyan-400 transition-colors" onClick={() => window.location.pathname !== '/' && (window.location.href = '/#about')}>About</Link>
              <Link to="/#process" className="block text-slate-400 hover:text-cyan-400 transition-colors" onClick={() => window.location.pathname !== '/' && (window.location.href = '/#process')}>Our Process</Link>
              <Link to="/#pricing" className="block text-slate-400 hover:text-cyan-400 transition-colors" onClick={() => window.location.pathname !== '/' && (window.location.href = '/#pricing')}>Pricing</Link>
              <Link to="/blog" className="block text-slate-400 hover:text-cyan-400 transition-colors">Blog</Link>
              <Link to="/join-us" className="block text-slate-400 hover:text-cyan-400 transition-colors">Careers</Link>
              <Link to="/get-in-touch" className="block text-slate-400 hover:text-cyan-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-12 mt-12 relative z-50">
          <div className="max-w-2xl">
            <h3 className="text-white font-semibold mb-4">Request Our Capabilities Statement</h3>
            <p className="text-slate-400 mb-6">Unlock our full expertise. Request our detailed capabilities statement to see how we transform businesses.</p>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 relative z-50">
              <p className="text-slate-300 mb-4">Enter your details to receive our capabilities statement:</p>
              {submitError && (
                <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm">
                  Something went wrong. Please try again.
                </div>
              )}
              <form className="space-y-4" onSubmit={handleCapabilitiesSubmit} name="capabilities-statement" data-netlify="true">
                <input type="hidden" name="form-name" value="capabilities-statement" />
                <div>
                  <label htmlFor="footer-name" className="sr-only">Name</label>
                  <input
                    type="text"
                    id="footer-name"
                    name="name"
                    placeholder="Your Name"
                    required
                    autoComplete="name"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-slate-400 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed text-base"
                  />
                </div>
                <div>
                  <label htmlFor="footer-email" className="sr-only">Email</label>
                  <input
                    type="email"
                    id="footer-email"
                    name="email"
                    placeholder="Your Email"
                    required
                    autoComplete="email"
                    inputMode="email"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-slate-400 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed text-base"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none min-h-[48px] touch-manipulation flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : (
                    'Request Statement'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2025 Autom8tion Lab. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="/privacy" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="/terms" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;