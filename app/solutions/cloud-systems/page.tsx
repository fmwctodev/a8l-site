import type { Metadata } from 'next';
import Link from 'next/link';
import { Cloud, Server, Database, Activity, CheckCircle, ArrowRight, Network, Code } from 'lucide-react';
import CTA from '@/app/_components/CTA';
import RelatedSolutions from '@/app/_components/RelatedSolutions';

export const metadata: Metadata = {
  title: 'Cloud Infrastructure for FedRAMP & GovCloud Workloads',
  description: 'Secure cloud architecture for FedRAMP, NIST 800-53, and FISMA-aligned workloads in AWS GovCloud, Azure Government, and commercial cloud. Governed landing zones, secure DevSecOps, continuous monitoring. SDVOSB Pending. Live in 30 days.',
  keywords: 'FedRAMP cloud architecture, GovCloud infrastructure, NIST 800-53 cloud, FISMA cloud architecture, AWS GovCloud, Azure Government, secure DevSecOps, federal cloud landing zone, SDVOSB cloud services, continuous monitoring federal',
  alternates: { canonical: 'https://autom8ionlab.com/solutions/cloud-systems' },
  openGraph: {
    title: 'Cloud Infrastructure for FedRAMP & GovCloud Workloads | Autom8ion Lab',
    description: 'Secure cloud architecture for FedRAMP, NIST 800-53, and FISMA-aligned workloads. Governed landing zones, secure DevSecOps, continuous monitoring. SDVOSB Pending — UEI: YY2DR3KSENH7.',
    url: 'https://autom8ionlab.com/solutions/cloud-systems',
    images: [{ url: 'https://autom8ionlab.com/logo/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Cloud Infrastructure for FedRAMP & GovCloud Workloads | Autom8ion Lab',
    description: 'Secure cloud architecture for FedRAMP, NIST 800-53, and FISMA-aligned workloads. SDVOSB Pending.',
  },
};

const ldSchema1 = {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Cloud Infrastructure Management Services",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Autom8ion Lab"
            },
            "description": "Comprehensive cloud infrastructure management services including cloud migration and deployment, DevOps automation, CI/CD pipelines, and hybrid multi-cloud architecture across AWS, Azure, and Google Cloud Platform.",
            "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "url": "https://autom8ionlab.com/solutions/cloud-systems",
            "operatingSystem": ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform", "Hybrid Cloud", "Multi-Cloud"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Cloud Infrastructure Management Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cloud Migration and Deployment Services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "DevOps Automation and CI/CD Solutions"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Hybrid and Multi-Cloud Architecture"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Scalable Cloud-Based Application Hosting"
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
              { "@type": "ListItem", "position": 3, "name": "Cloud Systems", "item": "https://autom8ionlab.com/solutions/cloud-systems" }
            ]
          };

export default function Page() {
const features = [
    {
      icon: Server,
      title: "FedRAMP-Aligned Cloud Architecture",
      description: "Whether you build in AWS GovCloud, Azure Government, or a commercial environment that still has to satisfy federal-grade security requirements, we implement architecture around your authorization boundary, not a generic landing zone. We enforce least privilege, separation of duties, hardened network segmentation, and strong encryption boundaries — mapped to NIST 800-53 control families AC, AU, CM, IA, SC, and SI. We don't just hand you a login; we deliver a governed environment that stands up to FedRAMP scrutiny."
    },
    {
      icon: Activity,
      title: "Secure DevSecOps & Controlled Releases",
      description: "Manual code promotion, shared deployment access, and changes without approval gates create audit findings every release. We build CI/CD pipelines with automated security scans, approval gates, segregation of duties, immutable infrastructure releases, rollback capabilities, and audit-ready logging. Every deployment action is recorded for traceability and evidence collection — turning your release process into a controlled system that supports NIST 800-53 change management and configuration management requirements."
    },
    {
      icon: Cloud,
      title: "Continuous Monitoring & Control Enforcement",
      description: "In regulated cloud environments, set-it-and-forget-it is a control failure. We monitor control drift, privileged activity, security events, log health, vulnerability posture, and resilience signals. When signals cross a threshold, our systems trigger alerts, tickets, and automated response paths fast. This is the difference between reactive firefighting and an operating model aligned to NIST 800-53, FedRAMP, and FISMA continuous monitoring expectations."
    }
  ];

  const benefits = [
    "Cloud infrastructure management services across AWS, Azure, and Google Cloud Platform with certified cloud architects who design scalable, secure, and cost-optimized solutions",
    "Cloud migration and deployment experts who seamlessly transition legacy systems to the cloud with minimal downtime, comprehensive testing, and risk mitigation strategies",
    "DevOps automation and CI/CD solutions using Jenkins, GitLab CI, GitHub Actions, and Azure DevOps for automated testing, building, and deployment across all environments",
    "Hybrid and multi-cloud architecture that balances on-premises infrastructure with multiple cloud providers for flexibility, redundancy, and cost optimization across geographic regions",
    "Scalable cloud-based application hosting with auto-scaling, load balancing, and multi-region deployment ensuring 99.9% uptime and handling traffic spikes without performance degradation",
    "Infrastructure-as-code implementation using Terraform and CloudFormation for version-controlled, repeatable infrastructure deployments that eliminate configuration drift and manual errors",
    "Container orchestration with Kubernetes on EKS, AKS, and GKE for microservices architecture, automated scaling, and high-availability application deployment across cloud providers",
    "Comprehensive monitoring and observability with Prometheus, Grafana, Datadog, and CloudWatch providing real-time visibility into infrastructure health and application performance",
    "Cloud cost optimization reducing infrastructure spending by 30-50% through reserved instances, spot instances, resource rightsizing, and automated shutdown of non-production environments"
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldSchema1) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldSchema2) }} />

      <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow delay-700"></div>
              </div>
      
      
      
              <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
                <div className="max-w-6xl mx-auto text-center">
                  <div className="mb-8 flex justify-center">
                    <div className="flex items-center space-x-2 bg-cyan-900/30 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-500/20">
                      <Cloud className="w-5 h-5 text-cyan-400" />
                      <span className="text-cyan-400 font-medium">Cloud Infrastructure</span>
                    </div>
                  </div>
      
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    Cloud Infrastructure for FedRAMP, CMMC & HIPAA Workloads
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> for Scalable, Secure Growth</span>
                  </h1>
      
                  <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                    Secure cloud architecture for FedRAMP, NIST 800-53, and FISMA-aligned workloads supporting US Federal, DIB, healthcare, and financial services teams. Governed landing zones in AWS GovCloud, Azure Government, or commercial cloud. SDVOSB Pending — UEI: YY2DR3KSENH7, CAGE: 9YCS7.
                  </p>
      
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link href="/get-in-touch" className="group bg-gradient-to-r from-cyan-600 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center space-x-2">
                      <span>Get Your Infrastructure Assessment</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
      
            {/* Expert Cloud Management Section */}
            <section className="py-16 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    Build a Strong Foundation With <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Expert Cloud Management</span>
                  </h2>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Most teams supporting US Federal agencies, the Defense Industrial Base, healthcare organizations, or financial services firms start with a commercial cloud setup that was never designed for FedRAMP scrutiny, NIST 800-53 control mapping, or FISMA accountability. You provision a few resources, apply basic security groups, and assume you can harden it later. That breaks fast when your workload has to survive architecture review, control validation, and continuous monitoring. If you are dealing with inherited cloud sprawl, unclear boundary definitions, or an environment that cannot map cleanly to NIST 800-53 controls, your infrastructure is no longer an asset — it's an audit risk.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    At Autom8ion Lab, we don't just "manage" your cloud — we design secure cloud architecture for FedRAMP, NIST 800-53, and FISMA-aligned workloads supporting US Federal, DIB, healthcare, and financial services teams. We lock down the control plane, automate the evidence trail, and give you a foundation built for security, compliance, and operational resilience from day one. Veteran-owned, SDVOSB Pending, with UEI: YY2DR3KSENH7 and CAGE: 9YCS7.
                  </p>
                </div>
              </div>
            </section>
      
            {/* Cloud Migration Section */}
            <section className="py-20 bg-slate-900/50 relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    Cloud Migration and <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Deployment Services</span>
                  </h2>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Our cloud migration and deployment experts guide you through a seamless migration process from legacy systems to AWS, Azure, or Google Cloud Platform with minimal downtime and zero data loss. We begin with comprehensive assessment of your current infrastructure, applications, and data dependencies to develop a detailed migration roadmap. Our phased approach ensures business continuity throughout the transition, with thorough testing at each stage and rollback procedures to mitigate risk.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    From lift-and-shift migrations to complete application modernization, our cloud infrastructure management services handle everything—infrastructure provisioning, data migration, application reconfiguration, and post-migration optimization. We implement infrastructure-as-code using Terraform and CloudFormation for repeatable deployments, configure auto-scaling and load balancing for reliability, and establish monitoring systems for visibility. Our deployment automation ensures consistent environments across development, staging, and production while reducing manual errors and accelerating delivery. We also integrate with your <Link href="/solutions/data-management" className="text-cyan-400 hover:text-cyan-300 underline">data management systems</Link> for seamless cloud-based data flow.
                  </p>
                </div>
              </div>
            </section>
      
            {/* DevOps Automation Section */}
            <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    DevOps Automation and <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Continuous Integration Pipelines</span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    Advanced DevOps automation and CI/CD solutions that streamline code deployment, automate testing, and provide comprehensive monitoring for rapid, reliable software delivery.
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
                        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
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
      
            {/* Hybrid and Multi-Cloud Section */}
            <section className="py-20 bg-slate-900/50 relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    Hybrid and <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Multi-Cloud Architecture Solutions</span>
                  </h2>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Our hybrid and multi-cloud architecture solutions provide the flexibility and redundancy that modern businesses require. We design infrastructure that seamlessly integrates on-premises systems with AWS, Azure, and Google Cloud Platform—enabling you to leverage the strengths of each platform while avoiding vendor lock-in. Hybrid architectures support gradual cloud migration, data sovereignty requirements, and latency-sensitive workloads that benefit from edge computing or on-premises processing.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Multi-cloud strategies improve performance through geographic distribution, enhance resilience with cross-provider redundancy, and optimize costs by selecting the most cost-effective services from each provider. Our cloud infrastructure management services handle the complexity of multi-cloud networking, unified identity management, cross-cloud data synchronization, and centralized monitoring. We integrate with your <Link href="/solutions/cybersecurity" className="text-cyan-400 hover:text-cyan-300 underline">cybersecurity and compliance</Link> requirements and ensure your <Link href="/solutions/api-integrations" className="text-cyan-400 hover:text-cyan-300 underline">API integrations</Link> work seamlessly across cloud providers for optimal connectivity.
                  </p>
                </div>
              </div>
            </section>
      
            {/* Cloud Security Section */}
            <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Cloud Security and Compliance <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">You Can Trust</span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    Enterprise-grade security protection through encryption, identity and access management, network security, and compliance alignment across all cloud infrastructure.
                  </p>
                </div>
      
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">Encryption & Data Protection</h3>
                    <p className="text-slate-400 text-sm">End-to-end encryption for data at rest and in transit using AWS KMS, Azure Key Vault, and Google Cloud KMS. Encrypted storage volumes, databases, and backups ensure data confidentiality.</p>
                  </div>
      
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">Identity & Access Management</h3>
                    <p className="text-slate-400 text-sm">Comprehensive IAM policies with least-privilege access, multi-factor authentication, role-based permissions, and centralized identity federation across cloud providers.</p>
                  </div>
      
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">Network Security Architecture</h3>
                    <p className="text-slate-400 text-sm">Virtual private clouds, security groups, network ACLs, Web Application Firewalls, and DDoS protection that create secure network boundaries and prevent unauthorized access.</p>
                  </div>
      
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">4</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">Compliance Alignment</h3>
                    <p className="text-slate-400 text-sm">Cloud infrastructure configured to meet HIPAA, PCI-DSS, SOC 2, and GDPR requirements with audit logging, compliance monitoring, and automated reporting capabilities.</p>
                  </div>
                </div>
              </div>
            </section>
      
            <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Cloud Infrastructure Success Stories</span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    Discover how CTOs, IT directors, and growing businesses leverage our cloud infrastructure management services to scale operations, reduce costs, and accelerate innovation.
                  </p>
                </div>
      
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">DoD Subcontractor: GCC High Migration for CMMC Posture</h3>
                    <p className="text-slate-300 leading-relaxed">
                      We migrated a DoD subcontractor from commercial Microsoft 365 to GCC High to align with CMMC 2.0 Level 2 requirements for handling Controlled Unclassified Information. Tenant configuration, conditional access policies, DLP rules, audit log centralization, and identity hardening were implemented to map directly to NIST 800-171 access control and audit families. The deliverable included a System Security Plan draft and the evidence package required for the C3PAO assessment.
                    </p>
                  </div>

                  <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">Healthcare: HIPAA-Aligned AWS Landing Zone</h3>
                    <p className="text-slate-300 leading-relaxed">
                      We designed a HIPAA-aligned AWS landing zone for a multi-specialty healthcare group, with PHI segmentation across VPCs, audit logging through CloudTrail and CloudWatch with long-term retention, encryption at rest (KMS) and in transit (TLS 1.3) on every PHI path, and access controls integrated with the customer's existing IdP. Infrastructure as Code (Terraform) made the environment reproducible and auditable. The output included BAA-aligned documentation and the technical safeguards inventory the customer's compliance team needed for their annual HIPAA review.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">Healthcare Startup Google Cloud Deployment</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Our cloud infrastructure management services built HIPAA-compliant cloud infrastructure on Google Cloud Platform for a healthcare technology startup. We implemented encryption at rest and in transit, configured Identity and Access Management with least-privilege principles, established audit logging for all data access, and deployed container orchestration with GKE for scalable cloud-based application hosting. Infrastructure-as-code with Terraform enabled consistent environment replication across development, staging, and production. The cloud deployment supported rapid growth from 1,000 to 100,000 users within 12 months.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">Financial Services Hybrid Cloud Solution</h3>
                    <p className="text-slate-300 leading-relaxed">
                      We designed hybrid and multi-cloud architecture for a financial services firm requiring on-premises data residency with cloud scalability. Our cloud migration and deployment experts integrated Azure cloud services with existing data centers using ExpressRoute, implemented DevOps automation with Azure DevOps for secure CI/CD pipelines, and configured hybrid networking with private connectivity. The solution maintained regulatory compliance while providing elastic compute capacity for batch processing workloads, reducing processing time from 12 hours to 2 hours and cutting infrastructure costs by 35%.
                    </p>
                  </div>
                </div>
              </div>
            </section>
      
            <section className="py-24 bg-black relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Partner With Autom8ion Lab for
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Expert Cloud Management</span>
                  </h2>
                  <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                    Our cloud infrastructure management services empower your business to scale securely with DevOps automation, hybrid multi-cloud architecture, and expert cloud migration across AWS, Azure, and Google Cloud Platform.
                  </p>
                  <Link href="/get-in-touch" className="bg-gradient-to-r from-cyan-600 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                    Request Infrastructure Assessment
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
                    Why Choose Autom8ion Lab for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Cloud Infrastructure Management</span>
                  </h2>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Generic managed service providers will tell you to bolt compliance on later. We don't do that. We architect your environment around NIST 800-53 from the start so your security controls, deployment patterns, and operational procedures line up with FedRAMP and FISMA expectations. Effective cloud infrastructure for US Federal, DIB, healthcare, and financial services organizations is about more than just hosting — it's about building a defensible system boundary, enforcing least privilege, centralizing audit logs, and making every major control family visible in the architecture.
                  </p>
                  <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                    Engagements move from commercial cloud to a FedRAMP-ready foundation in four phases: boundary review and control mapping, secure architecture design and landing zone build, workload migration with controlled delivery pipelines, then monitoring and operational handover. Most builds run 8&ndash;14 weeks; FedRAMP-aligned builds run 6+ months. We use Infrastructure as Code (Terraform, Pulumi) so your environment is reproducible, version-controlled, and auditable. The output: centralized dashboards, alerting, log retention, and evidence-producing workflows aligned to NIST 800-53, FedRAMP, and FISMA continuous monitoring expectations.
                  </p>
                  <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
                    <p className="text-cyan-400 font-semibold mb-4 text-xl">Schedule Your Cloud Infrastructure Assessment</p>
                    <p className="text-slate-300 mb-6">
                      Join CTOs, IT directors, and growing businesses who trust Autom8ion Lab for cloud infrastructure management services. Get your free infrastructure assessment to explore cloud migration strategies, DevOps automation opportunities, and hybrid multi-cloud architecture options for your business.
                    </p>
                    <Link href="/get-in-touch" className="inline-block bg-gradient-to-r from-cyan-600 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                      Get Your Free Cloud Assessment
                    </Link>
                  </div>
                </div>
              </div>
            </section>
      
            <CTA />
            <RelatedSolutions currentSlug="cloud-systems" />
    </>
  );
}
