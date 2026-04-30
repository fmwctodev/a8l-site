import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Mail, Clock, Users, FileText } from 'lucide-react';
import { Reveal, CelebrationBurst } from '@/app/_components/ui';

export const metadata: Metadata = {
  title: 'Application Received Careers',
  description: 'Thank you for your job application. We\'re reviewing your resume and a team member will contact you shortly about next steps.',
  alternates: { canonical: 'https://autom8ionlab.com/application-received' },
  robots: 'noindex, nofollow',
};

export default function Page() {
  return (
    <>

      {/* Hero Section */}
            <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl hidden sm:block animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl hidden sm:block animate-pulse-slow delay-700"></div>
              </div>
      
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
                <div className="relative flex justify-center mb-8">
                  <CelebrationBurst />
                  <div className="relative w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center shadow-glow-cyan-lg z-10">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                </div>

                <Reveal delay={0.3}>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Application
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"> Received!</span>
                  </h1>
                </Reveal>

                <Reveal delay={0.45}>
                  <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                    Thank you for your interest in joining our team. We're reviewing your resume and a team member will contact you shortly about next steps.
                  </p>
                </Reveal>
              </div>
            </section>
      
            {/* What Happens Next Section */}
            <section className="py-16 md:py-24 bg-black">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                    What Happens
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"> Next?</span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    Here's what you can expect during our hiring process.
                  </p>
                </div>
      
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 text-center group hover:border-purple-500/30 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">Resume Review</h3>
                    <p className="text-slate-400 leading-relaxed">Our hiring team is carefully reviewing your application and resume to assess your qualifications and fit for the role.</p>
                  </div>
      
                  <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 text-center group hover:border-cyan-500/30 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">Initial Contact</h3>
                    <p className="text-slate-400 leading-relaxed">If your background aligns with our needs, we'll reach out within 3-5 business days to discuss the opportunity further.</p>
                  </div>
      
                  <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 text-center group hover:border-green-500/30 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">Interview Process</h3>
                    <p className="text-slate-400 leading-relaxed">We'll schedule interviews with team members to learn more about your experience and discuss how you'd contribute to our mission.</p>
                  </div>
      
                  <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 text-center group hover:border-amber-500/30 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">Final Decision</h3>
                    <p className="text-slate-400 leading-relaxed">We'll make our decision and reach out with next steps, whether that's an offer or feedback on your application.</p>
                  </div>
                </div>
              </div>
            </section>
      
            {/* Timeline Section */}
            <section className="py-16 md:py-24 bg-black">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                  <div className="bg-slate-800/50 backdrop-blur-sm p-12 rounded-2xl border border-slate-700/50 text-center">
                    <h3 className="text-3xl font-bold text-white mb-6">
                      Our Hiring
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"> Timeline</span>
                    </h3>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                      We believe in a respectful, efficient hiring process. Here's what you can expect:
                    </p>
      
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                      <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">3-5</div>
                        <div className="text-slate-300 font-medium mb-2">Business Days</div>
                        <div className="text-slate-400 text-sm">Initial review and response</div>
                      </div>
      
                      <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
                        <div className="text-3xl font-bold text-purple-400 mb-2">1-2</div>
                        <div className="text-slate-300 font-medium mb-2">Weeks</div>
                        <div className="text-slate-400 text-sm">Interview process completion</div>
                      </div>
      
                      <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
                        <div className="text-3xl font-bold text-green-400 mb-2">24-48</div>
                        <div className="text-slate-300 font-medium mb-2">Hours</div>
                        <div className="text-slate-400 text-sm">Final decision communication</div>
                      </div>
                    </div>
      
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                      <Link href="/careers"
                        className="group bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center space-x-2"
                      >
                        <span>View Other Positions</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
      
                      <Link href="/"
                        className="text-slate-300 hover:text-white px-8 py-4 rounded-lg border-2 border-slate-600 hover:border-cyan-400 transition-all duration-300 flex items-center space-x-2 group text-lg font-semibold"
                      >
                        <span>Return to Homepage</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      
            {/* Why We're Excited Section */}
            <section className="py-16 md:py-24 bg-black">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                    Why We're
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"> Excited</span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    Every application represents a potential new team member who could help us build the future of AI and automation.
                  </p>
                </div>
      
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Growing Team</h4>
                    <p className="text-slate-400 text-sm">We're actively expanding our team with talented individuals who share our passion for innovation.</p>
                  </div>
      
                  <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Fair Process</h4>
                    <p className="text-slate-400 text-sm">Every application receives careful consideration and we provide feedback regardless of the outcome.</p>
                  </div>
      
                  <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Quick Response</h4>
                    <p className="text-slate-400 text-sm">We respect your time and aim to provide updates within our stated timeline.</p>
                  </div>
                </div>
              </div>
            </section>
      
            {/* Contact Information */}
            <section className="py-16 bg-black">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
                  <h3 className="text-2xl font-bold text-white mb-4">Questions About Your Application?</h3>
                  <p className="text-slate-300 mb-6">
                    If you have any questions about the hiring process or your application status, feel free to reach out to our HR team.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                      href="mailto:careers@autom8ionlab.com"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold flex items-center space-x-2"
                    >
                      <Mail className="w-5 h-5" />
                      <span>careers@autom8ionlab.com</span>
                    </a>
                    <div className="hidden sm:block w-px h-6 bg-slate-600"></div>
                    <a
                      href="tel:+18555086062"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold flex items-center space-x-2"
                    >
                      <Clock className="w-5 h-5" />
                      <span>+1 855-508-6062</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
    </>
  );
}
