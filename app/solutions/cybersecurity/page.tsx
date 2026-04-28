import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, AlertTriangle, FileCheck, CheckCircle, ArrowRight, Network } from 'lucide-react';
import CTA from '@/app/_components/CTA';
import RelatedSolutions from '@/app/_components/RelatedSolutions';

export const metadata: Metadata = {
  title: 'Cybersecurity & Compliance — FedRAMP, NIST 800-53, CMMC 2.0, HIPAA, SOC 2',
  description: 'Engineering-led cybersecurity and compliance for US Federal, DIB, healthcare, and financial services. FedRAMP, FISMA, NIST 800-53, CMMC 2.0 readiness, HIPAA safeguards, and SOC 2 prep — controls built and documented for audit. SDVOSB Pending.',
  keywords: 'FedRAMP compliance, NIST 800-53 implementation, CMMC 2.0 readiness, FISMA compliance, HIPAA safeguards, SOC 2 prep, SSP POA&M, C3PAO assessment prep, defense industrial base cybersecurity, SDVOSB cybersecurity',
  alternates: { canonical: 'https://autom8ionlab.com/solutions/cybersecurity' },
  openGraph: {
    title: 'Cybersecurity & Compliance — FedRAMP, NIST 800-53, CMMC 2.0, HIPAA, SOC 2 | Autom8ion Lab',
    description: 'Engineering-led compliance for federal, DIB, healthcare, and financial services. We engineer compliant systems and document them for audit. SDVOSB Pending — UEI: YY2DR3KSENH7.',
    url: 'https://autom8ionlab.com/solutions/cybersecurity',
    images: [{ url: 'https://autom8ionlab.com/logo/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Cybersecurity & Compliance Consulting | NIST & CIS Aligned | Autom8ion Lab',
    description: 'Autom8ion Lab secures your business with advanced cybersecurity and compliance solutions. Risk assessments, audits, and monitoring aligned with NIST & CIS.',
  },
};

const ldSchema1 = {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Cybersecurity & Compliance Consulting",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Autom8ion Lab"
            },
            "description": "Comprehensive cybersecurity compliance consulting with data protection audits, penetration testing, risk assessments, and IT governance frameworks aligned with NIST, CIS, HIPAA, and ISO 27001 standards.",
            "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "url": "https://autom8ionlab.com/solutions/cybersecurity",
            "industryStandards": ["NIST Cybersecurity Framework", "CIS Controls", "HIPAA", "ISO 27001", "GDPR", "SOC 2"],
            "serviceOutput": ["Security Risk Assessment", "Compliance Audit Reports", "Penetration Testing Reports", "Incident Response Plans", "Security Monitoring"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Cybersecurity & Compliance Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cybersecurity Compliance Consulting"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Data Protection and Compliance Audits"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Penetration Testing and Monitoring"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Network Security and Risk Assessment"
                  }
                }
              ]
            }
          };

const ldSchema2 = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://autom8ionlab.com/" },
              { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://autom8ionlab.com/#solutions" },
              { "@type": "ListItem", "position": 3, "name": "Cybersecurity", "item": "https://autom8ionlab.com/solutions/cybersecurity" }
            ]
          };

export default function Page() {
const features = [
    {
      icon: AlertTriangle,
      title: "FedRAMP, FISMA & NIST 800-53 Engineering",
      description: "We help federal contractors and cloud teams build the control foundation required for federal security reviews. Access control, MFA, and least-privilege enforcement. Centralized logging, alerting, and audit retention. Secure cloud configurations and boundary protections. Vulnerability management and configuration baselines. Documentation that maps implemented controls to assessment expectations — not policies that say one thing while systems do another."
    },
    {
      icon: Shield,
      title: "CMMC 2.0 Readiness for the DIB",
      description: "We implement the controls that protect CUI in real environments — not consulting decks. MFA across critical systems, role-based access, encryption at rest and in transit, centralized logging, secure enclaves, endpoint hardening, and change control. SSP and POA&M documentation aligned to the implemented controls. Remediation planning tied to the November 2026 Phase 2 deadline for CMMC 2.0. Engineered to survive a C3PAO assessment."
    },
    {
      icon: FileCheck,
      title: "HIPAA, SOC 2 & Audit-Ready Evidence",
      description: "A compliant environment is not just secure — it is provable. We build the controls inside your stack, then create the documentation trail that supports them: System Security Plans (SSPs), Plans of Action and Milestones (POA&Ms), control narratives and policy sets, asset/access/vendor documentation, and evidence collection for audits and assessments. HIPAA safeguards for healthcare workflows. SOC 2 prep for SaaS and financial services environments. If an auditor asks how a control works, who owns it, and where the evidence lives — you have an answer."
    }
  ];

  const benefits = [
    "NIST Cybersecurity Framework alignment ensures comprehensive security controls across Identify, Protect, Detect, Respond, and Recover functions with measurable maturity assessments",
    "CIS Controls implementation prioritizes the most effective security actions, from basic cyber hygiene to advanced threat defense, based on community-validated best practices",
    "HIPAA compliance for healthcare organizations includes encryption, access controls, audit logging, breach notification procedures, and Business Associate Agreements (BAAs)",
    "ISO 27001 certification support with information security management systems (ISMS), risk assessment frameworks, and comprehensive documentation required for certification audits",
    "Penetration testing and monitoring services simulate real-world attacks quarterly or annually, providing detailed vulnerability reports and remediation guidance from certified ethical hackers",
    "Network security and risk assessment services evaluate firewalls, intrusion detection systems, network segmentation, and access controls while quantifying business risks and security ROI",
    "Data protection and compliance audits examine encryption implementations, access controls, data classification, privacy safeguards, and regulatory adherence with detailed compliance reports",
    "IT governance and compliance frameworks establish security policies, define roles and responsibilities, implement change management, and ensure accountability throughout your organization",
    "Security monitoring with SIEM platforms, threat intelligence feeds, and automated alerting provides 24/7 visibility into security events and enables rapid incident response"
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldSchema1) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldSchema2) }} />

      <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow delay-700"></div>
              </div>
      
      
      
              <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
                <div className="max-w-6xl mx-auto text-center">
                  <div className="mb-8 flex justify-center">
                    <div className="flex items-center space-x-2 bg-blue-900/30 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/20">
                      <Shield className="w-5 h-5 text-cyan-400" />
                      <span className="text-cyan-400 font-medium">Cybersecurity & Compliance</span>
                    </div>
                  </div>
      
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    Cybersecurity Compliance &
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Engineering</span>
                  </h1>
      
                  <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                    Engineering-led cybersecurity and compliance for US Federal, DIB, healthcare, and financial services. FedRAMP, FISMA, NIST 800-53, CMMC 2.0, HIPAA, and SOC 2 — controls built and documented for audit. SDVOSB Pending — UEI: YY2DR3KSENH7, CAGE: 9YCS7.
                  </p>
      
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link href="/get-in-touch" className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center space-x-2">
                      <span>Schedule Security Assessment</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
      
            {/* Protect Your Data Section */}
            <section className="py-16 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    Protect Your Data and Systems From <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Evolving Threats</span>
                  </h2>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Security is not a checkbox. In 2026, it is the foundation of your entire operation. If you handle CUI, federal data, PHI, or sensitive customer data, your "good enough" security stack is already a liability. FedRAMP, FISMA, NIST 800-53, CMMC 2.0 readiness, HIPAA safeguards, and SOC 2 prep are now operational requirements, not optional projects. Most firms approach compliance by duct-taping generic tools together and scrambling before an audit. That fails because auditors do not certify intentions — they verify controls, evidence, and documentation.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    At Autom8ion Lab, we don't hand you a checklist and disappear. We engineer compliant systems and document them for audit so your environment matches what your policies say. Veteran-owned, SDVOSB Pending, with UEI: YY2DR3KSENH7 and CAGE: 9YCS7. We support teams operating in US Federal, the Defense Industrial Base, Healthcare, and Financial Services — where security requirements directly impact contracts, approvals, and revenue. Most remediation projects take 4 to 9 months because the real work is fixing identity, access, logging, endpoint controls, encryption, vendor risk, and documentation at the same time. We handle both sides.
                  </p>
                </div>
              </div>
            </section>
      
            {/* Compliance Consulting Section */}
            <section className="py-20 bg-slate-900/50 relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Cybersecurity Compliance Consulting</span>
                  </h2>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Our cybersecurity compliance consulting services help organizations meet and maintain compliance with NIST Cybersecurity Framework, CIS Controls, HIPAA, ISO 27001, GDPR, and SOC 2 standards. We translate complex regulatory requirements into actionable security controls that protect your business while demonstrating compliance to auditors, customers, and stakeholders. Our compliance experts conduct gap analyses, develop remediation roadmaps, and implement security controls that align with your industry's specific regulatory landscape.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Beyond checkbox compliance, we build IT governance and compliance frameworks that create sustainable security programs. Our approach includes policy development, security awareness training, access control implementation, and continuous compliance monitoring. We help you establish security baselines, document procedures, and maintain audit trails that satisfy regulatory requirements. With expertise spanning healthcare, financial services, government contractors, and technology companies, we understand the nuances of industry-specific compliance mandates. We also ensure your <Link href="/solutions/process-automation" className="text-cyan-400 hover:text-cyan-300 underline">automated processes</Link> follow secure governance principles to prevent security gaps in workflow automation.
                  </p>
                </div>
              </div>
            </section>
      
            {/* Vulnerability Scanning & Penetration Testing Section */}
            <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Vulnerability Scanning, Penetration Testing, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Risk Management</span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    Proactive threat analysis through continuous vulnerability scanning, simulated attacks, and comprehensive risk assessments that identify and remediate security weaknesses before they're exploited.
                  </p>
                </div>
      
                <div className="grid md:grid-cols-3 gap-8">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div
                        key={index}
                        className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105"
                      >
                        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                          {feature.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
      
            {/* Data Protection Audits Section */}
            <section className="py-20 bg-slate-900/50 relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    Data Protection and <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Compliance Audits</span>
                  </h2>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Regular data protection and compliance audits ensure your security controls remain effective and aligned with regulatory requirements. Our audit process examines access control implementations, data classification systems, encryption standards, and privacy safeguards across your entire technology stack. We verify that sensitive data—whether customer information, financial records, or intellectual property—receives appropriate protection through technical controls, policy enforcement, and employee training.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Our compliance reporting provides stakeholders with clear evidence of security maturity and regulatory adherence. We document security control effectiveness, track remediation progress, and maintain compliance artifacts required for audits. Whether you need SOC 2 attestation, HIPAA compliance validation, or ISO 27001 certification support, our auditors deliver thorough assessments that satisfy regulatory requirements. We integrate with your <Link href="/solutions/data-management" className="text-cyan-400 hover:text-cyan-300 underline">data management systems</Link> to ensure data integrity and with <Link href="/solutions/cloud-systems" className="text-cyan-400 hover:text-cyan-300 underline">cloud infrastructure</Link> for secure hosting of audit artifacts and compliance documentation.
                  </p>
                </div>
              </div>
            </section>
      
            {/* Incident Response Section */}
            <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Incident Response Planning and <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Monitoring</span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    Real-time security monitoring, threat detection, and structured incident response frameworks that minimize damage and ensure rapid recovery from security incidents.
                  </p>
                </div>
      
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">24/7 Security Monitoring</h3>
                    <p className="text-slate-400 text-sm">Real-time monitoring systems track network traffic, endpoint behavior, and system logs to detect anomalies and potential security incidents. SIEM platforms aggregate security events for analysis and correlation.</p>
                  </div>
      
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">Incident Response Playbooks</h3>
                    <p className="text-slate-400 text-sm">Documented response procedures for common attack scenarios including ransomware, data breaches, and insider threats. Clear escalation paths, containment strategies, and communication protocols ensure coordinated response.</p>
                  </div>
      
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-400 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">Threat Intelligence Integration</h3>
                    <p className="text-slate-400 text-sm">Integration with threat intelligence feeds provides early warning of emerging threats, known attack patterns, and indicators of compromise specific to your industry and technology stack.</p>
                  </div>
      
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">4</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">Recovery Frameworks</h3>
                    <p className="text-slate-400 text-sm">Business continuity and disaster recovery plans ensure rapid restoration of critical systems. Backup verification, recovery time objectives, and failover procedures minimize downtime and data loss.</p>
                  </div>
                </div>
              </div>
            </section>
      
            <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Industry-Specific <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Compliance Solutions</span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    Our cybersecurity compliance consulting adapts to your industry's unique regulatory requirements with specialized expertise in healthcare, finance, government, and technology sectors.
                  </p>
                </div>
      
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">Healthcare: HIPAA Compliance & Patient Data Protection</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Our cybersecurity compliance consulting for healthcare organizations ensures HIPAA compliance through comprehensive data protection and compliance audits. We implement encryption for protected health information (PHI), role-based access controls, audit logging that tracks every data access, and breach notification procedures. Our penetration testing identifies vulnerabilities in EHR systems, patient portals, and medical device networks. Network security and risk assessment services evaluate threats to clinical systems while maintaining operational availability critical for patient care.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">Financial Services: PCI-DSS, SOX & Banking Security</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Financial institutions require rigorous cybersecurity compliance consulting to meet PCI-DSS, SOX, and banking regulations. Our data protection and compliance audits verify cardholder data encryption, secure payment processing, and fraud detection systems. We conduct penetration testing on banking applications, ATM networks, and payment gateways to identify vulnerabilities before they're exploited. IT governance and compliance frameworks establish segregation of duties, change control processes, and audit trails that satisfy regulatory examinations while protecting customer financial data from sophisticated threats.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">Government Contractors: NIST 800-171 & CMMC Compliance</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Organizations handling Controlled Unclassified Information (CUI) need specialized cybersecurity compliance consulting for NIST 800-171 and CMMC certification. Our network security and risk assessment services evaluate 110+ security requirements across access control, incident response, and system integrity. We implement IT governance and compliance frameworks that document security policies, procedures, and controls. Regular penetration testing and monitoring ensures continuous compliance while protecting sensitive government information from foreign adversaries and cyber threats.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">SaaS & Technology: SOC 2, ISO 27001 & GDPR</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Technology companies need cybersecurity compliance consulting to earn customer trust and close enterprise deals. Our data protection and compliance audits prepare you for SOC 2 Type II audits, ISO 27001 certification, and GDPR compliance. We implement IT governance frameworks that define security policies, risk management processes, and vendor management procedures. Penetration testing validates application security while network security and risk assessment services protect cloud infrastructure. Continuous monitoring and compliance reporting demonstrate ongoing security maturity to customers and auditors.
                    </p>
                  </div>
                </div>
              </div>
            </section>
      
            <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Stay Secure and Compliant With
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Autom8ion Lab</span>
                  </h2>
                  <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                    Our cybersecurity compliance consulting provides comprehensive protection aligned with NIST, CIS, HIPAA, and ISO 27001 standards. Protect, comply, and scale securely.
                  </p>
                  <Link href="/get-in-touch" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                    Book Your Security Consultation
                  </Link>
                </div>
      
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {benefits.slice(0, 8).map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4 bg-slate-800/30 p-4 rounded-lg border border-slate-700/50">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
      
            <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                    Why Choose Autom8ion Lab for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Cybersecurity Compliance Consulting</span>
                  </h2>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Unlike generic security consultants who implement template-based solutions, Autom8ion Lab delivers cybersecurity compliance consulting tailored to your specific threat landscape, regulatory requirements, and business objectives. Our security engineers combine technical expertise with deep knowledge of NIST, CIS, HIPAA, ISO 27001, and industry-specific compliance mandates. We work closely with IT managers, compliance officers, and business owners to ensure every security control provides robust protection while maintaining operational efficiency.
                  </p>
                  <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                    We don't just check compliance boxes—we build sustainable security programs that protect critical assets and demonstrate compliance to auditors, customers, and stakeholders. Our clients benefit from data protection and compliance audits, penetration testing and monitoring, network security and risk assessment, and IT governance frameworks that reduce risk while enabling business growth. With proactive protection, real-time monitoring, and expert incident response, we help you protect, comply, and scale securely.
                  </p>
                  <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
                    <p className="text-cyan-400 font-semibold mb-4 text-xl">Book Your Security Assessment Today</p>
                    <p className="text-slate-300 mb-6">
                      Join IT managers, compliance officers, and business owners who trust Autom8ion Lab for cybersecurity compliance consulting. Schedule a consultation to discuss your security challenges, explore our penetration testing services, and discover how our data protection audits can strengthen your compliance posture.
                    </p>
                    <Link href="/get-in-touch" className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                      Schedule Your Cybersecurity Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </section>
      
            <CTA />
            <RelatedSolutions currentSlug="cybersecurity" />
    </>
  );
}
