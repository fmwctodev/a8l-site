import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Scale, Shield, AlertTriangle, Workflow, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'These terms govern your use of Autom8ion Lab services and establish the legal framework for our business relationship. Clear, reasonable terms that protect both parties.',
  keywords: 'terms of service, legal terms, service agreement, Autom8ion Lab terms, user agreement, service conditions, legal framework, business terms',
  alternates: { canonical: 'https://autom8ionlab.com/terms' },
  openGraph: {
    title: 'Terms of Service | Autom8ion Lab',
    description: 'These terms govern your use of Autom8ion Lab services and establish the legal framework for our business relationship. Clear, reasonable terms that protect both parties.',
    url: 'https://autom8ionlab.com/terms',
    images: [{ url: 'https://autom8ionlab.com/logo/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Terms of Service | Autom8ion Lab',
    description: 'These terms govern your use of Autom8ion Lab services and establish the legal framework for our business relationship. Clear, reasonable terms that protect both parties.',
  },
};

export default function Page() {
const lastUpdated = "May 5, 2026";

  return (
    <>

      {/* Hero Section */}
            <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl hidden sm:block animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl hidden sm:block animate-pulse-slow delay-700"></div>
              </div>
      
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
                <img
                  src="/logo/logo.png"
                  alt="Autom8ion Lab Logo"
                  className="w-20 h-20 object-contain mx-auto mb-8"
                />
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Terms of
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"> Service</span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                  These Terms of Service govern your access to and use of our website, services, and products. Please read them carefully.
                </p>
                <div className="text-cyan-400 font-medium space-y-1">
                  <p>Effective Date: July 1, 2025</p>
                  <p>Last updated: {lastUpdated}</p>
                </div>
              </div>
            </section>
      
            {/* Key Points */}
            <section className="py-16 bg-black">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 text-center">
                    <Scale className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Fair Terms</h3>
                    <p className="text-slate-400 text-sm">Clear, reasonable terms that protect both parties.</p>
                  </div>
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 text-center">
                    <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Your Rights</h3>
                    <p className="text-slate-400 text-sm">We respect your rights and outline them clearly.</p>
                  </div>
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 text-center">
                    <AlertTriangle className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Responsibilities</h3>
                    <p className="text-slate-400 text-sm">Clear expectations for both parties.</p>
                  </div>
                </div>
              </div>
            </section>
      
            {/* Terms Content */}
            <section className="py-16 bg-black">
              <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="prose prose-invert prose-lg max-w-none mb-8">
                  <p className="text-slate-300 leading-relaxed">
                    Welcome to Autom8ion Lab, the trade name under which Sitehues Media Inc. ("we," "us," or "our") provides its services. These Terms of Service ("Terms") govern your access to and use of our website, services, and products. Please read them carefully.
                  </p>
                </div>
      
                <div className="prose prose-invert prose-lg max-w-none">
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                    <p className="text-slate-300 mb-4">
                      By accessing or using Autom8ion Lab's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                    </p>
                    <p className="text-slate-300">
                      These terms apply to all visitors, users, and others who access or use our services, including our website, custom AI solutions, automation systems, and related services.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">2. Definitions</h2>
                    <ul className="text-slate-300 space-y-2">
                      <li>• <strong>"Services"</strong> refers to all products, platforms, software, solutions, and consulting offered by Autom8ion Lab.</li>
                      <li>• <strong>"Client" or "User"</strong> refers to any individual or entity using our services.</li>
                      <li>• <strong>"We," "us," or "our"</strong> refers to Sitehues Media Inc., a Florida corporation operating under the trade name "Autom8ion Lab" (DBA).</li>
                    </ul>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">3. Eligibility</h2>
                    <p className="text-slate-300">
                      You must be at least 18 years old (or the age of legal majority in your jurisdiction) to use our services. By using our services, you confirm that you meet this requirement.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">4. Description of Services</h2>
                    <p className="text-slate-300 mb-4">
                      Autom8ion Lab provides custom AI and automation solutions, including but not limited to:
                    </p>
                    <ul className="text-slate-300 space-y-2">
                      <li>• Custom AI agent development and deployment</li>
                      <li>• Workflow automation and process optimization</li>
                      <li>• API integrations and system connectivity</li>
                      <li>• Custom software and mobile application development</li>
                      <li>• AI-powered content creation and management</li>
                      <li>• Voice AI and conversational interfaces</li>
                      <li>• Automation consulting and strategic planning</li>
                    </ul>
                    <p className="text-slate-300 mt-4">
                      Services may evolve over time and are subject to modification.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">5. User Accounts and Registration</h2>
                    <p className="text-slate-300 mb-4">
                      To access certain features, you may be required to register an account. You agree to:
                    </p>
                    <ul className="text-slate-300 space-y-2 mb-4">
                      <li>• Provide accurate, complete, and current information</li>
                      <li>• Maintain and update your account info as needed</li>
                      <li>• Keep your login credentials confidential</li>
                      <li>• Notify us immediately of unauthorized account use</li>
                    </ul>
                    <p className="text-slate-300">
                      We may suspend or terminate accounts for violations of these Terms.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">6. Payment Terms</h2>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Pricing and Billing</h3>
                    <ul className="text-slate-300 space-y-2 mb-4">
                      <li>• All prices are in USD unless otherwise stated</li>
                      <li>• Custom project pricing is provided via written proposal</li>
                      <li>• Typical payment structure: 50% upfront, 50% upon delivery</li>
                      <li>• Monthly retainers are billed in advance</li>
                      <li>• Late payments may incur fees</li>
                    </ul>
      
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Refunds and Cancellations</h3>
                    <ul className="text-slate-300 space-y-2">
                      <li>• Refunds are considered on a case-by-case basis</li>
                      <li>• Work already completed is non-refundable</li>
                      <li>• Cancellations must be submitted in writing</li>
                      <li>• Monthly services require 30 days' written notice for cancellation</li>
                    </ul>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Our IP</h3>
                    <p className="text-slate-300 mb-4">
                      All content, tools, software, designs, trademarks, and methodologies on our platform are owned or licensed by Autom8ion Lab and protected by intellectual property laws.
                    </p>
      
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Client IP</h3>
                    <p className="text-slate-300 mb-4">
                      Custom solutions developed for clients become their property upon full payment unless otherwise specified. We reserve the right to reuse non-proprietary methodologies in other projects.
                    </p>
      
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">License to Use</h3>
                    <p className="text-slate-300">
                      We grant you a limited, non-exclusive, non-transferable license to use our services. You may not resell, sublicense, or create derivative works from our services without our permission.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">8. User Responsibilities and Prohibited Uses</h2>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Acceptable Use</h3>
                    <p className="text-slate-300 mb-4">You agree not to:</p>
                    <ul className="text-slate-300 space-y-2 mb-4">
                      <li>• Violate any applicable laws or regulations</li>
                      <li>• Infringe on intellectual property rights</li>
                      <li>• Upload or transmit malicious code</li>
                      <li>• Attempt unauthorized access to systems</li>
                      <li>• Interfere with the functionality of our services</li>
                    </ul>
      
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">User Content</h3>
                    <p className="text-slate-300">
                      You are responsible for all data and content you provide. You affirm that you have the legal right to share such data, and it does not violate third-party rights.
                    </p>
                    <p className="text-slate-300 mt-4">
                      By submitting content, you grant us a non-exclusive, royalty-free license to use it for purposes of service delivery and enhancement.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">9. Service Availability and Modifications</h2>
                    <p className="text-slate-300 mb-4">
                      While we strive for reliability, we cannot guarantee uninterrupted service. We reserve the right to:
                    </p>
                    <ul className="text-slate-300 space-y-2">
                      <li>• Modify or discontinue services with reasonable notice</li>
                      <li>• Conduct maintenance that may affect availability</li>
                      <li>• Update systems to improve performance or security</li>
                      <li>• Suspend access for legal or technical reasons</li>
                    </ul>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">10. Third-Party Services</h2>
                    <p className="text-slate-300 mb-4">
                      We may use or integrate third-party tools and platforms (e.g., hosting providers, analytics tools). We are not responsible for their performance, availability, or security practices.
                    </p>
                    <p className="text-slate-300">
                      Your use of third-party services is subject to their respective terms and policies.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">11. Privacy and Data Protection</h2>
                    <p className="text-slate-300 mb-4">
                      We respect your privacy. Our <a href="https://autom8ionlab.com/privacy" className="text-cyan-400 hover:text-cyan-300 transition-colors">Privacy Policy</a> outlines how we collect, use, and protect your data.
                    </p>
                    <p className="text-slate-300">
                      Under the General Data Protection Regulation (GDPR), EU/EEA users have rights including access, rectification, deletion, and portability of their data. Please refer to our Privacy Policy for full details.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">12. Data Retention</h2>
                    <p className="text-slate-300">
                      We retain client data only for as long as necessary for business and legal purposes. Unless required by law, we do not retain user data indefinitely. Backup services are not guaranteed unless specified.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">13. Security</h2>
                    <p className="text-slate-300 mb-4">
                      We implement appropriate security measures to protect your data. However, no system is completely secure, and you acknowledge that internet-based communications carry inherent risks.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">14. Disclaimers and Limitation of Liability</h2>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Disclaimer</h3>
                    <p className="text-slate-300 mb-4">
                      Our services are provided "as is" and "as available" without warranties of any kind, including fitness for a particular purpose and non-infringement.
                    </p>
      
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Limitation of Liability</h3>
                    <p className="text-slate-300">
                      To the fullest extent permitted by law, Autom8ion Lab is not liable for any indirect, incidental, special, or consequential damages, including loss of profits or data.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">15. Indemnification</h2>
                    <p className="text-slate-300">
                      You agree to indemnify and hold harmless Autom8ion Lab, its directors, employees, and affiliates against any claims, losses, or liabilities arising from your use of our services, violation of these Terms, or infringement of third-party rights.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">16. Termination</h2>
                    <p className="text-slate-300 mb-4">
                      Either party may terminate this agreement with notice.
                    </p>
                    <p className="text-slate-300 mb-4">
                      Upon termination:
                    </p>
                    <ul className="text-slate-300 space-y-2">
                      <li>• All outstanding payments become due</li>
                      <li>• Access to services will be revoked</li>
                      <li>• Data may be deleted after a reasonable period</li>
                      <li>• Confidentiality obligations survive termination</li>
                    </ul>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">17. Force Majeure</h2>
                    <p className="text-slate-300 mb-4">
                      We are not liable for failure to perform due to events beyond our control, including natural disasters, cyberattacks, labor disputes, or government restrictions.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">18. Dispute Resolution</h2>
                    <p className="text-slate-300 mb-4">
                      Any disputes will be resolved by:
                    </p>
                    <ul className="text-slate-300 space-y-2 mb-4">
                      <li>• Good faith negotiations</li>
                      <li>• Mediation if needed</li>
                      <li>• Binding arbitration as a final resort</li>
                    </ul>
                    <p className="text-slate-300">
                      These Terms are governed by the laws of the State of Florida, USA.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">19. Modifications to These Terms</h2>
                    <p className="text-slate-300">
                      We may revise these Terms at any time. Material changes will be communicated via email or notice on our website. Continued use of our services after changes constitutes acceptance of the updated Terms.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50">
                    <h2 className="text-2xl font-bold text-white mb-4">20. Severability</h2>
                    <p className="text-slate-300 mb-4">
                      If any provision of these Terms is found unenforceable, the remaining provisions will continue in full force and effect.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">21. No Waiver</h2>
                    <p className="text-slate-300">
                      Our failure to enforce any right or provision of these Terms does not waive our right to enforce that or any other provision in the future.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-6 sm:p-8 rounded-xl border border-slate-700/50">
                    <h2 className="text-2xl font-bold text-white mb-4">22. Contact Us</h2>
                    <p className="text-slate-300 mb-4">
                      If you have any questions about these Terms, please contact:
                    </p>
                    <div className="text-slate-300 space-y-2">
                      <p><strong>Autom8ion Lab Legal Department</strong></p>
                      <p>📧 Email: <a href="mailto:info@autom8ionlab.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">info@autom8ionlab.com</a></p>
                      <p>📞 Phone: <a href="tel:+18555086062" className="text-cyan-400 hover:text-cyan-300 transition-colors">+1 855-508-6062</a></p>
                      <p>🏢 Address: Sitehues Media Inc. (DBA Autom8ion Lab), 486 Lake Cir, Plant City, FL 33565</p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-slate-700">
                      <p className="text-slate-300 text-center">
                        Thank you for trusting Autom8ion Lab. We look forward to powering your automation journey!
                      </p>
                    </div>
                  </div>
      
                </div>
              </div>
            </section>
    </>
  );
}
