'use client';
import React, { useState } from 'react';

import Link from 'next/link';
import {
  Shield,
  Map,
  BarChart2,
  Settings,
  Lock,
  Download,
  Calendar,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  FileText,
  ChevronRight,
} from 'lucide-react';
import { getSupabase } from '@/lib/supabase';






const PERSONAL_EMAIL_DOMAINS = new Set([
  'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.co.uk', 'yahoo.co.in',
  'outlook.com', 'hotmail.com', 'hotmail.co.uk', 'live.com', 'msn.com',
  'icloud.com', 'me.com', 'mac.com', 'aol.com', 'protonmail.com',
  'proton.me', 'pm.me', 'yandex.com', 'yandex.ru', 'mail.com',
  'zoho.com', 'gmx.com', 'gmx.net', 'inbox.com', 'fastmail.com',
]);

function isPersonalEmail(email: string): boolean {
  const parts = email.toLowerCase().split('@');
  if (parts.length !== 2) return false;
  return PERSONAL_EMAIL_DOMAINS.has(parts[1]);
}

type Step = 'form' | 'download';

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
}

const initialFormData: FormData = {
  first_name: '',
  last_name: '',
  email: '',
};

const pillars = [
  {
    number: '01',
    label: 'GOVERN',
    icon: Shield,
    color: 'text-cyan-400',
    borderColor: 'border-cyan-400/30',
    bgColor: 'bg-cyan-400/10',
    description: 'Establish policies, assign accountability, define risk tolerance, and govern third-party AI vendors.',
  },
  {
    number: '02',
    label: 'MAP',
    icon: Map,
    color: 'text-blue-400',
    borderColor: 'border-blue-400/30',
    bgColor: 'bg-blue-400/10',
    description: 'Inventory every AI system, classify risks in context, map stakeholders, and surface data-layer exposure.',
  },
  {
    number: '03',
    label: 'MEASURE',
    icon: BarChart2,
    color: 'text-teal-400',
    borderColor: 'border-teal-400/30',
    bgColor: 'bg-teal-400/10',
    description: 'Quantify risk severity, test for bias and adversarial vulnerabilities, and document explainability posture.',
  },
  {
    number: '04',
    label: 'MANAGE',
    icon: Settings,
    color: 'text-sky-400',
    borderColor: 'border-sky-400/30',
    bgColor: 'bg-sky-400/10',
    description: 'Implement controls, monitor for drift, build incident response capability, and define end-of-life procedures.',
  },
];

const checklistHighlights = [
  '96 auditable checklist items across all four functions',
  'Evidence requirements for every item — know exactly what to document',
  '0 / 1 / 2 scoring system to calculate your compliance percentage',
  'Owner assignments: Leadership, Operations, Technical Lead, Legal',
  'Priority Remediation Tracker for top 10 high-risk gaps',
  'Phased 90-day Implementation Roadmap from audit to active compliance',
  'Vendor and third-party AI risk checklist (G5 subsection)',
  'AI-specific security testing: prompt injection, data exfiltration, model inversion',
  'Audit Summary Scorecard with RAG status per function',
  'Sign-off template for AI Risk Owner and Leadership authorization',
];

const NISTChecklistClient = () => {
  const [step, setStep] = useState<Step>('form');
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError(null);
    if (e.target.name === 'email' && emailError) setEmailError(null);
  };

  const handleEmailBlur = () => {
    if (formData.email && isPersonalEmail(formData.email)) {
      setEmailError('Please use your work email address.');
    } else {
      setEmailError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (isPersonalEmail(formData.email)) {
      setEmailError('Please use your work email address.');
      return;
    }

    setLoading(true);

    const supabase = getSupabase();
    if (!supabase) {
      setLoading(false);
      setError('Submission is temporarily unavailable. Please email us at sean@autom8ionlab.com.');
      return;
    }
    const { error: insertError } = await supabase
      .from('nist_checklist_leads')
      .insert([formData]);

    setLoading(false);

    if (insertError) {
      setError('Something went wrong. Please try again or email us at sean@autom8ionlab.com.');
      return;
    }

    setStep('download');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950">
      

      

      {step === 'form' ? (
        <>
          {/* Hero */}
          <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(6,182,212,0.08)_0%,_transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.06)_0%,_transparent_60%)]" />

            <div className="relative max-w-5xl mx-auto px-6 text-center">
              <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full px-4 py-2 mb-8">
                <AlertTriangle className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-semibold tracking-wide uppercase">
                  Free Resource — NIST AI RMF 1.0
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Your AI Is Running.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Your Governance Isn't.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                Most organizations deploying AI have no documented governance structure, no evidence of risk
                controls, and no response plan when something goes wrong. That's a liability — and regulators
                are paying attention. The NIST AI RMF gives you the framework. This checklist makes it
                actionable.
              </p>

              {/* Stat strip */}
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12">
                {[
                  '96 Auditable Items',
                  '4 Core Functions',
                  'Evidence Requirements',
                  'Scoring System',
                ].map(stat => (
                  <div key={stat} className="flex items-center gap-2 text-slate-300">
                    <ChevronRight className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="font-semibold">{stat}</span>
                  </div>
                ))}
              </div>

              <a
                href="#get-checklist"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:-translate-y-0.5"
              >
                Get the Free Checklist
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </section>

          {/* Framework pillars */}
          <section className="py-16 bg-black">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  The Four Functions of the NIST AI RMF
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  The checklist covers every subcategory across all four core functions, broken into auditable
                  checklist items with defined owners and evidence requirements.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {pillars.map(pillar => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.label}
                      className={`relative bg-slate-900/60 border ${pillar.borderColor} rounded-2xl p-6 hover:bg-slate-900/80 transition-colors duration-200`}
                    >
                      <div className={`inline-flex p-3 rounded-xl ${pillar.bgColor} mb-4`}>
                        <Icon className={`w-6 h-6 ${pillar.color}`} />
                      </div>
                      <div className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-1">
                        {pillar.number}
                      </div>
                      <h3 className={`text-lg font-bold mb-3 ${pillar.color}`}>{pillar.label}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* What's inside */}
          <section className="py-16 bg-slate-950">
            <div className="max-w-4xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  What's Inside the Checklist
                </h2>
                <p className="text-slate-400">
                  A full-lifecycle audit guide built for AI implementation firms and enterprise AI teams.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {checklistHighlights.map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Opt-in form */}
          <section id="get-checklist" className="py-20 bg-black">
            <div className="max-w-xl mx-auto px-6">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-400 text-sm font-semibold">Free Download</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Get Instant Access
                </h2>
                <p className="text-slate-400 text-sm">
                  Enter your details below and download the full 21-page checklist immediately.
                </p>
              </div>

              <div className="bg-slate-900/80 border border-slate-700/60 rounded-2xl p-8 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first_name" className="block text-sm font-medium text-slate-300 mb-1.5">
                        First Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="first_name"
                        name="first_name"
                        type="text"
                        required
                        value={formData.first_name}
                        onChange={handleChange}
                        placeholder="Jane"
                        className="w-full bg-slate-800/60 border border-slate-600/60 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="last_name" className="block text-sm font-medium text-slate-300 mb-1.5">
                        Last Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="last_name"
                        name="last_name"
                        type="text"
                        required
                        value={formData.last_name}
                        onChange={handleChange}
                        placeholder="Smith"
                        className="w-full bg-slate-800/60 border border-slate-600/60 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                      Work Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleEmailBlur}
                      placeholder="jane@company.com"
                      className={`w-full bg-slate-800/60 border rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors text-sm ${
                        emailError
                          ? 'border-red-500/60 focus:border-red-500/60 focus:ring-red-500/30'
                          : 'border-slate-600/60 focus:border-cyan-500/60 focus:ring-cyan-500/30'
                      }`}
                    />
                    {emailError && (
                      <div className="flex items-center gap-2 mt-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                        <p className="text-red-400 text-xs">{emailError}</p>
                      </div>
                    )}
                  </div>

                  {error && (
                    <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
                      <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-red-400 text-sm">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold px-6 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:-translate-y-0.5 disabled:hover:translate-y-0 text-base"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Get the Free Checklist
                        <Download className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>

                <div className="flex items-center justify-center gap-2 mt-5 text-slate-500 text-xs">
                  <Lock className="w-3.5 h-3.5" />
                  <span>No spam. No sales calls. Just the checklist.</span>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* Step 2 — Download delivery */
        <section className="relative min-h-[80vh] flex items-center py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.07)_0%,_transparent_65%)]" />

          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-cyan-400/10 border border-cyan-400/30 rounded-full mb-8">
              <CheckCircle className="w-10 h-10 text-cyan-400" />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              You're all set,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {formData.first_name}
              </span>
              .
            </h1>

            <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Your NIST AI RMF Compliance Checklist is ready. Click below to download the full 21-page PDF
              immediately — no email required.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
              <a
                href="/downloads/NIST-AI-RMF-Checklist-Autom8ionLab.pdf"
                download="NIST-AI-RMF-Checklist-Autom8ionLab.pdf"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5" />
                Get Checklist
              </a>

              <Link
                href="/schedule-consultation"
                className="inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/60 hover:border-slate-500/60 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5 text-cyan-400" />
                Get a Free AI Audit
              </Link>
            </div>

            {/* Checklist preview */}
            <div className="bg-slate-900/60 border border-slate-700/50 rounded-2xl p-8 text-left">
              <h2 className="text-lg font-bold text-white mb-5 text-center">
                What's inside your checklist
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {checklistHighlights.map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700/50 text-center">
                <p className="text-slate-400 text-sm mb-4">
                  Want expert help implementing this framework in your organization?
                </p>
                <Link
                  href="/schedule-consultation"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors duration-200"
                >
                  Book a free AI governance audit with our team
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      
    </div>
  );
};

export default NISTChecklistClient;
