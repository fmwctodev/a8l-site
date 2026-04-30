'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, Linkedin, Facebook, Instagram, Download } from 'lucide-react';
import { conversionEvents } from '@/lib/analytics';
import CapabilityRequestButton from './CapabilityRequestButton';

const Footer = () => {
  return (
    <>
    {/* Animated trust band — subtle gradient sweep above the footer marks the
        veteran-owned + federal contractor signal even after the trust pills
        were removed from the hero. */}
    <div className="relative overflow-hidden border-t border-slate-800/60 bg-gradient-to-r from-slate-950 via-cyan-950/30 to-slate-950">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent bg-[length:200%_100%] animate-gradient-shift"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-4 text-center text-xs md:text-sm text-cyan-200/90 font-medium tracking-wide">
        Veteran-Owned · SDVOSB Certified · SBA Certified · Registered US Federal Contractor —{' '}
        <span className="font-mono">UEI YY2DR3KSENH7</span> ·{' '}
        <span className="font-mono">CAGE 9YCS7</span>
      </div>
    </div>

    <footer className="bg-black/80 backdrop-blur-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Brand row — logo + one-line value prop sit above the link columns
            so the four columns are pure navigation per Implementation Plan §8.4. */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center space-x-2 mb-4">
            <Image
              src="/logo/logo-96.webp"
              alt="Autom8ion Lab Logo"
              width={96}
              height={96}
              loading="lazy"
              sizes="40px"
              className="w-10 h-10 object-contain"
            />
            <span className="text-2xl font-bold text-white">Autom8ion Lab</span>
          </div>
          <p className="text-slate-400 leading-relaxed">
            Veteran-owned engineering firm building custom AI, automation, and software for
            mid-market companies in regulated industries. Engineered to commercial speed,
            documented to federal standards.
          </p>
        </div>

        {/* 4-column nav grid per Implementation Plan §8.4. */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 — Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-6">Solutions</h3>
            <div className="space-y-3 text-sm">
              <Link href="/solutions/ai-agent-development" className="block text-slate-400 hover:text-cyan-400 transition-colors">AI Agent Development</Link>
              <Link href="/solutions/custom-llm-systems" className="block text-slate-400 hover:text-cyan-400 transition-colors">Custom LLM Systems</Link>
              <Link href="/solutions/workflow-automation" className="block text-slate-400 hover:text-cyan-400 transition-colors">Workflow Automation</Link>
              <Link href="/solutions/api-integrations" className="block text-slate-400 hover:text-cyan-400 transition-colors">API Integrations</Link>
              <Link href="/solutions/cybersecurity" className="block text-slate-400 hover:text-cyan-400 transition-colors">Cybersecurity Compliance</Link>
              <Link href="/solutions/cloud-systems" className="block text-slate-400 hover:text-cyan-400 transition-colors">Cloud Infrastructure</Link>
              <Link href="/solutions/software-development" className="block text-slate-400 hover:text-cyan-400 transition-colors">Software Development</Link>
              <Link href="/solutions" className="block text-cyan-400 hover:text-cyan-300 transition-colors font-medium pt-1">All Solutions →</Link>
            </div>
          </div>

          {/* Column 2 — Industries */}
          <div>
            <h3 className="text-white font-semibold mb-6">Industries</h3>
            <div className="space-y-3 text-sm">
              <Link href="/industries/construction" className="block text-slate-400 hover:text-cyan-400 transition-colors">Construction</Link>
              <Link href="/industries/healthcare" className="block text-slate-400 hover:text-cyan-400 transition-colors">Healthcare &amp; Life Sciences</Link>
              <Link href="/industries/finance" className="block text-slate-400 hover:text-cyan-400 transition-colors">Finance</Link>
              <Link href="/industries/real-estate-property" className="block text-slate-400 hover:text-cyan-400 transition-colors">Real Estate &amp; Property</Link>
              <Link href="/industries/government" className="block text-slate-400 hover:text-cyan-400 transition-colors">US Government</Link>
              <Link href="/industries/defense" className="block text-slate-400 hover:text-cyan-400 transition-colors">Defense Industrial Base</Link>
              <Link href="/industries" className="block text-cyan-400 hover:text-cyan-300 transition-colors font-medium pt-1">All Industries →</Link>
            </div>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <div className="space-y-3 text-sm">
              <Link href="/about" className="block text-slate-400 hover:text-cyan-400 transition-colors">About</Link>
              <Link href="/capability-statement" className="block text-slate-400 hover:text-cyan-400 transition-colors">Capability Statement</Link>
              <Link href="/blog" className="block text-slate-400 hover:text-cyan-400 transition-colors">Blog</Link>
              <Link href="/case-studies" className="block text-slate-400 hover:text-cyan-400 transition-colors">Case Studies</Link>
              <Link href="/faq" className="block text-slate-400 hover:text-cyan-400 transition-colors">FAQ</Link>
              <Link href="/join-us" className="block text-slate-400 hover:text-cyan-400 transition-colors">Careers</Link>
              <Link href="/get-in-touch" className="block text-slate-400 hover:text-cyan-400 transition-colors">Contact</Link>
              <Link href="/schedule-consultation" className="block text-cyan-400 hover:text-cyan-300 transition-colors font-medium pt-1">Schedule a Briefing →</Link>
            </div>
          </div>

          {/* Column 4 — Connect */}
          <div>
            <h3 className="text-white font-semibold mb-6">Connect</h3>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:info@autom8ionlab.com"
                onClick={() => conversionEvents.emailClick()}
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                info@autom8ionlab.com
              </a>
              <a
                href="tel:+18555086062"
                onClick={() => conversionEvents.phoneClick()}
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                +1 855-508-6062
              </a>
              <p className="text-slate-500 text-xs pl-6">Plant City, FL · Montreal, QC</p>
              <a
                href="https://os.autom8ionlab.com/client-portal"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-400 hover:text-cyan-400 transition-colors pt-1"
              >
                Client Portal Login →
              </a>

              {/* Social icons row */}
              <div className="flex items-center space-x-4 pt-4">
                <a href="https://www.linkedin.com/company/autom8ionlab" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">Follow us on LinkedIn</span>
                </a>
                <a href="https://www.facebook.com/autom8ionlab" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                  <span className="sr-only">Follow us on Facebook</span>
                </a>
                <a href="https://www.instagram.com/autom8ionlab/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Follow us on Instagram</span>
                </a>
                <a href="https://www.youtube.com/@autom8ionlab" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="sr-only">Follow us on YouTube</span>
                </a>
                <a href="https://tiktok.com/@autom8ionlab" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                  <span className="sr-only">Follow us on TikTok</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Capability statement request — replaced the inline form with a
            modal-trigger CTA so every "Download capability statement" entry
            point across the site funnels through the same SendGrid + instant-
            download flow. The modal lives in app/_components/CapabilityStatementModal.tsx
            and is provided sitewide by app/layout.tsx. */}
        <div className="border-t border-slate-800 pt-12 mt-12">
          <div className="max-w-3xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                <Download className="w-4 h-4 text-cyan-400" />
                Request our capability statement
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Adding Autom8ion Lab to your vendor list, qualified vendor pool, or prime/sub
                team? Get the latest PDF — registration data, NAICS codes, contract vehicles,
                and contact info — delivered instantly.
              </p>
            </div>
            <CapabilityRequestButton variant="primary">
              Request statement
            </CapabilityRequestButton>
          </div>
        </div>

        {/* Bottom bar — copyright + legal + federal credentials per
            Implementation Plan §8.4. */}
        <div className="border-t border-slate-800 pt-8 mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="text-slate-400 text-sm">
            © 2026 Sitehues Media Inc. (DBA Autom8ion Lab). All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <a href="/privacy" className="text-slate-400 hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-slate-400 hover:text-cyan-400 transition-colors">Terms of Service</a>
            <span className="text-slate-500 hidden md:inline">·</span>
            <span className="text-slate-500 text-xs">
              Veteran-Owned · SDVOSB Certified ·{' '}
              <span className="font-mono">UEI YY2DR3KSENH7</span> ·{' '}
              <span className="font-mono">CAGE 9YCS7</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
