import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Eye, Lock, Users, Phone, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Your privacy is fundamental to our business. Learn how Autom8ion Lab collects, uses, and protects your information with enterprise-grade security measures.',
  keywords: 'privacy policy, data protection, data security, information privacy, Autom8ion Lab privacy, GDPR compliance, data handling, privacy rights',
  alternates: { canonical: 'https://autom8ionlab.com/privacy' },
  openGraph: {
    title: 'Privacy Policy | Autom8ion Lab',
    description: 'Your privacy is fundamental to our business. Learn how Autom8ion Lab collects, uses, and protects your information with enterprise-grade security measures.',
    url: 'https://autom8ionlab.com/privacy',
    images: [{ url: 'https://autom8ionlab.com/logo/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Privacy Policy | Autom8ion Lab',
    description: 'Your privacy is fundamental to our business. Learn how Autom8ion Lab collects, uses, and protects your information with enterprise-grade security measures.',
  },
};

export default function Page() {
const lastUpdated = "August 17, 2025";

  return (
    <>

      {/* Hero Section */}
            <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl hidden sm:block animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl hidden sm:block animate-pulse-slow delay-700"></div>
              </div>
      
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
                <img
                  src="/logo/logo.png"
                  alt="Autom8ion Lab Logo"
                  className="w-20 h-20 object-contain mx-auto mb-8"
                />
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Privacy
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Policy</span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                  We at Autom8ion Lab are committed to protecting your privacy and handling your personal information transparently and in compliance with applicable privacy laws.
                </p>
                <div className="text-cyan-400 font-medium space-y-1">
                  <p>Effective Date: July 1, 2025</p>
                  <p>Last Updated: {lastUpdated}</p>
                </div>
              </div>
            </section>
      
            {/* Privacy Principles */}
            <section className="py-16 bg-black">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 text-center">
                    <Eye className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Transparency</h3>
                    <p className="text-slate-400 text-sm">We're clear about what data we collect and how we use it.</p>
                  </div>
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 text-center">
                    <Lock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Security</h3>
                    <p className="text-slate-400 text-sm">Your data is protected with enterprise-grade security measures.</p>
                  </div>
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 text-center">
                    <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Control</h3>
                    <p className="text-slate-400 text-sm">You have full control over your personal information.</p>
                  </div>
                </div>
              </div>
            </section>
      
            {/* Privacy Policy Content */}
            <section className="py-16 bg-black">
              <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="prose prose-invert prose-lg max-w-none mb-8">
                  <p className="text-slate-300 leading-relaxed">
                    We at Autom8ion Lab are committed to protecting your privacy and handling your personal information transparently and in compliance with applicable privacy laws, including the General Data Protection Regulation (GDPR), Telephone Consumer Protection Act (TCPA), Federal Communications Commission (FCC) and Federal Trade Commission (FTC) guidelines, as well as 10DLC and A2P messaging regulations.
                  </p>
                </div>
      
                <div className="prose prose-invert prose-lg max-w-none">
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
      
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Information You Provide</h3>
                    <p className="text-slate-300 mb-4">
                      We collect personal data you directly provide through our website forms, CRM, and communication tools:
                    </p>
                    <ul className="text-slate-300 space-y-2 mb-6">
                      <li>• Full name</li>
                      <li>• Email address</li>
                      <li>• Phone number</li>
                      <li>• Company name and job title</li>
                      <li>• Project details and requirements</li>
                      <li>• Communication preferences (e.g. SMS opt-ins)</li>
                      <li>• Payment and billing information</li>
                    </ul>
      
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Automatically Collected Information</h3>
                    <p className="text-slate-300 mb-4">
                      When you visit our website, we may automatically collect certain data using cookies and analytics tools:
                    </p>
                    <ul className="text-slate-300 space-y-2">
                      <li>• IP address and geographic location</li>
                      <li>• Device and browser type</li>
                      <li>• Pages visited, time on site, and referral source</li>
                      <li>• Interaction logs with AI or chat systems</li>
                      <li>• Consent logs for marketing opt-ins</li>
                    </ul>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                    <p className="text-slate-300 mb-4">
                      We process your information to:
                    </p>
                    <ul className="text-slate-300 space-y-2">
                      <li>• Provide and improve our services and platform</li>
                      <li>• Send transactional updates (e.g., project status, billing)</li>
                      <li>• Send promotional offers or service updates (with consent)</li>
                      <li>• Provide customer support via chat, email, phone, or SMS</li>
                      <li>• Send account reminders or time-sensitive alerts</li>
                      <li>• Analyze site performance and user behavior</li>
                      <li>• Comply with legal and regulatory obligations</li>
                      <li>• Prevent fraud and ensure platform security</li>
                    </ul>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">3. AI-Generated Communications</h2>
                    <p className="text-slate-300 mb-4">
                      By using our services and opting in via our webforms, you acknowledge and agree that you may receive communications generated or assisted by AI systems. This includes:
                    </p>
                    <ul className="text-slate-300 space-y-2 mb-4">
                      <li>• AI-generated emails</li>
                      <li>• AI-generated SMS messages</li>
                      <li>• AI-generated or pre-recorded voice calls</li>
                    </ul>
                    <p className="text-slate-300 mb-4">
                      These messages may be promotional, transactional, or support-related. All AI communications comply with applicable FCC, FTC, GDPR, and 10DLC rules.
                    </p>
                    <p className="text-slate-300">
                      We do not use AI for autonomous decision-making that significantly affects user rights (e.g., eligibility decisions).
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">4. Consent and Opt-In Requirements</h2>
                    <p className="text-slate-300 mb-4">
                      We use explicit opt-in checkboxes on our forms to collect consent for:
                    </p>
                    <ul className="text-slate-300 space-y-2 mb-4">
                      <li>• SMS communications (A2P/10DLC compliant)</li>
                      <li>• Promotional emails</li>
                      <li>• AI-assisted communications</li>
                    </ul>
                    <p className="text-slate-300 mb-4">
                      We store timestamped consent records in our CRM (e.g., LeadConnector).
                    </p>
                    <p className="text-slate-300">
                      You can withdraw consent at any time by replying "STOP" to any SMS or contacting us directly (see Contact section).
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">5. Information Sharing</h2>
                    <p className="text-slate-300 mb-4">
                      We do not sell or rent your personal information. However, we may share it with:
                    </p>
                    <ul className="text-slate-300 space-y-2">
                      <li>• Authorized service providers (e.g., Twilio, LeadConnector, CRM platforms)</li>
                      <li>• Legal authorities when required by law</li>
                      <li>• Payment processors for billing purposes</li>
                      <li>• IT, security, and hosting vendors (under contract)</li>
                      <li>• In the event of a business transfer or merger</li>
                    </ul>
                    <p className="text-slate-300 mt-4">
                      All third parties are contractually bound to follow data protection standards.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">6. Data Security</h2>
                    <p className="text-slate-300 mb-4">
                      We take your data security seriously and implement measures including:
                    </p>
                    <ul className="text-slate-300 space-y-2">
                      <li>• End-to-end encryption for data in transit</li>
                      <li>• Secure server infrastructure with access controls</li>
                      <li>• Multi-factor authentication (MFA)</li>
                      <li>• Regular vulnerability assessments</li>
                      <li>• SOC 2-compliant vendors</li>
                      <li>• Role-based access to data in our CRM</li>
                    </ul>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights Under GDPR and Other Laws</h2>
                    <p className="text-slate-300 mb-4">
                      If you are in the EU or UK, or if applicable privacy laws grant you rights, you may:
                    </p>
                    <ul className="text-slate-300 space-y-2">
                      <li>• Access your personal data</li>
                      <li>• Rectify inaccurate or outdated data</li>
                      <li>• Delete your data ("right to be forgotten")</li>
                      <li>• Restrict or object to processing</li>
                      <li>• Withdraw consent at any time</li>
                      <li>• Port your data to another service</li>
                      <li>• Lodge a complaint with a data protection authority</li>
                    </ul>
                    <p className="text-slate-300 mt-4">
                      To exercise any of these rights, please contact us using the information below.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">8. Cookies and Tracking</h2>
                    <p className="text-slate-300 mb-4">
                      We use cookies and similar technologies to:
                    </p>
                    <ul className="text-slate-300 space-y-2 mb-4">
                      <li>• Personalize user experience</li>
                      <li>• Analyze website usage</li>
                      <li>• Track conversions and site performance</li>
                      <li>• Retarget ads and optimize marketing</li>
                    </ul>
                    <p className="text-slate-300">
                      You can manage your cookie preferences via your browser or cookie banner settings. Disabling cookies may affect site functionality.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">9. Data Retention</h2>
                    <p className="text-slate-300 mb-4">
                      We retain your personal data only for as long as necessary to:
                    </p>
                    <ul className="text-slate-300 space-y-2">
                      <li>• Fulfill the purposes outlined above</li>
                      <li>• Comply with legal, contractual, or regulatory obligations</li>
                      <li>• Resolve disputes or enforce agreements</li>
                    </ul>
                    <p className="text-slate-300 mt-4">
                      Data may be anonymized or securely deleted after a defined period unless a longer retention is required by law.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">10. International Transfers</h2>
                    <p className="text-slate-300">
                      Your data may be transferred and stored outside your country, including in the United States, under appropriate safeguards such as:
                    </p>
                    <ul className="text-slate-300 space-y-2 mt-4">
                      <li>• Standard Contractual Clauses (SCCs)</li>
                      <li>• Adequacy decisions by the European Commission</li>
                      <li>• Binding corporate rules with vendors</li>
                    </ul>
                    <p className="text-slate-300 mt-4">
                      We ensure any such transfers comply with GDPR and other applicable laws.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">11. Children's Privacy</h2>
                    <p className="text-slate-300">
                      We do not knowingly collect personal data from children under 13 (or under 16 in the EU). If we become aware that we have collected such data, we will delete it promptly.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">12. Changes to This Privacy Policy</h2>
                    <p className="text-slate-300">
                      We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will notify users of any material changes by:
                    </p>
                    <ul className="text-slate-300 space-y-2 mt-4">
                      <li>• Posting the new policy on our website</li>
                      <li>• Updating the "Last Updated" date</li>
                      <li>• Emailing users if required by law</li>
                    </ul>
                    <p className="text-slate-300 mt-4">
                      Your continued use of our services after updates constitutes acceptance.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50">
                    <h2 className="text-2xl font-bold text-white mb-4">13. Contact Us</h2>
                    <p className="text-slate-300 mb-4">
                      If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="text-slate-300 space-y-2">
                      <p><strong>Email:</strong> <a href="mailto:info@autom8ionlab.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">info@autom8ionlab.com</a></p>
                      <p><strong>Phone:</strong> <a href="tel:+18555086062" className="text-cyan-400 hover:text-cyan-300 transition-colors">+1 855-508-6062</a></p>
                      <p><strong>Mailing Address:</strong> Autom8ion Lab, 486 lake cir, Plant city, FL 33565</p>
                    </div>
                  </div>
      
                </div>
              </div>
            </section>
    </>
  );
}
