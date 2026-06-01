'use client';

import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';
import Link from 'next/link';
import MomentumBar from './forms/MomentumBar';
import FormStep, { FieldShell, TextInput, TextArea, ChipPicker } from './forms/FormStep';
import CelebrationBurst from './ui/CelebrationBurst';
import { useA8LOSFormSubmit } from './forms/useA8LOSFormSubmit';
import { conversionEvents } from '@/lib/analytics';

/**
 * GamifiedContactForm — 4-step wizard backing /get-in-touch.
 *
 * Posts to the a8l-os form-submit Edge Function under public_slug "get-in-touch".
 * The Edge Function auto-creates a Contact + an Opportunity in the
 * "Inbound Sales / New Lead" stage on submission.
 *
 * Field IDs MUST match the form definition seeded in
 * supabase/migrations/20260505120200_seed_get_in_touch_form.sql — that's the
 * mapping the Edge Function uses to wire each field to its custom_field UUID.
 */

const INDUSTRY_OPTIONS = [
  { value: 'construction', label: 'Construction' },
  { value: 'healthcare', label: 'Healthcare & Life Sciences' },
  { value: 'finance', label: 'Finance' },
  { value: 'real_estate', label: 'Real Estate & Property' },
  { value: 'government', label: 'US Government' },
  { value: 'defense', label: 'Defense Industrial Base' },
  { value: 'other', label: 'Other' },
];

const PROJECT_TYPE_OPTIONS = [
  { value: 'ai_agents', label: 'AI Agent Development' },
  { value: 'custom_llm', label: 'Custom LLM Systems' },
  { value: 'automation', label: 'Workflow Automation' },
  { value: 'integrations', label: 'API Integrations' },
  { value: 'custom_software', label: 'Custom Software' },
  { value: 'compliance', label: 'Cybersecurity Compliance' },
  { value: 'cloud', label: 'Cloud Infrastructure' },
  { value: 'other', label: 'Other / Not Sure' },
];

const URGENCY_OPTIONS = [
  { value: 'exploring', label: 'Just exploring' },
  { value: '30_60_days', label: '30-60 days' },
  { value: 'asap', label: 'Yesterday' },
];

const BUDGET_OPTIONS = [
  { value: '25_75k', label: '$25K - $75K' },
  { value: '75_250k', label: '$75K - $250K' },
  { value: '250k_plus', label: '$250K+' },
  { value: 'unknown', label: 'Not sure yet' },
];

const TOTAL_STEPS = 4;

interface FormState {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  industry: string;
  project_type: string[];
  urgency: string;
  budget_range: string;
  ideal_start: string;
  project_description: string;
  job_title: string;
  phone: string;
  compliance_acknowledgement: boolean;
  // Honeypot — must remain empty. Bots fill all fields they see.
  website: string;
}

const INITIAL_STATE: FormState = {
  first_name: '',
  last_name: '',
  email: '',
  company: '',
  industry: '',
  project_type: [],
  urgency: '',
  budget_range: '',
  ideal_start: '',
  project_description: '',
  job_title: '',
  phone: '',
  compliance_acknowledgement: false,
  website: '',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function digitsOnly(s: string): string {
  return s.replace(/\D+/g, '');
}

export default function GamifiedContactForm() {
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>(INITIAL_STATE);
  const [showBurst, setShowBurst] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { submit, loading, error: submitError } = useA8LOSFormSubmit('get-in-touch');

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setData(prev => ({ ...prev, [key]: value }));
  };

  // Phone is optional, but if any digits are entered, validate to prevent
  // typo'd numbers from polluting the SMS rail.
  const phoneDigits = digitsOnly(data.phone);
  const phoneValid = phoneDigits.length === 0 || (phoneDigits.length >= 7 && phoneDigits.length <= 15);
  const phoneFilled = phoneDigits.length > 0;

  const stepValid = useMemo(() => {
    switch (step) {
      case 0:
        return (
          data.first_name.trim().length > 0 &&
          data.last_name.trim().length > 0 &&
          EMAIL_REGEX.test(data.email.trim())
        );
      case 1:
      case 2:
        // Steps 2 and 3 are entirely optional — momentum forward shouldn't gate on data
        return true;
      case 3:
        return data.compliance_acknowledgement && phoneValid;
      default:
        return false;
    }
  }, [step, data, phoneValid]);

  const advance = () => {
    if (!stepValid) return;
    setShowBurst(true);
    // Particle ring renders for 1.4s then unmounts
    setTimeout(() => setShowBurst(false), 1500);
    setStep(s => Math.min(s + 1, TOTAL_STEPS - 1));
  };

  const goBack = () => setStep(s => Math.max(0, s - 1));

  const handleSubmit = async () => {
    if (!stepValid) return;

    // Honeypot trip — pretend to succeed without actually submitting. Bots get a
    // 200 from the Edge Function via its own honeypot logic too, but failing
    // closed here saves a network round-trip.
    if (data.website.trim().length > 0) {
      setSubmitted(true);
      return;
    }

    const payload = {
      first_name: data.first_name.trim(),
      last_name: data.last_name.trim(),
      email: data.email.trim(),
      company: data.company.trim() || undefined,
      job_title: data.job_title.trim() || undefined,
      industry: data.industry || undefined,
      project_type: data.project_type.length > 0 ? data.project_type : undefined,
      urgency: data.urgency || undefined,
      budget_range: data.budget_range || undefined,
      ideal_start: data.ideal_start.trim() || undefined,
      project_description: data.project_description.trim() || undefined,
      phone: phoneFilled ? data.phone.trim() : undefined,
      sms_consent: phoneFilled ? data.compliance_acknowledgement : false,
      human_acknowledgement: data.compliance_acknowledgement,
      _honeypot: data.website || undefined,
    };

    const result = await submit(payload);
    if (result.success) {
      conversionEvents.formSubmitContact({
        industry: data.industry || 'unknown',
        urgency: data.urgency || 'unknown',
        budget_range: data.budget_range || 'unknown',
      });
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-cyan-500/30 rounded-2xl p-8 sm:p-12 text-center overflow-hidden"
      >
        <CelebrationBurst />
        <div className="relative z-10">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-6 shadow-glow-cyan">
            <CheckCircle2 className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-3">Got it.</h3>
          <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
            Sean will personally reply within 1 business day with a capability assessment and proposed next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/schedule-consultation"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-glow-cyan hover:scale-[1.02] transition-all"
            >
              Skip the queue — book a 30-min slot
            </Link>
            <Link
              href="/capability-statement"
              className="border border-slate-700 text-slate-200 px-6 py-3 rounded-lg font-semibold hover:border-cyan-500/40 hover:text-cyan-300 transition-all"
            >
              View capability statement
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
      {showBurst && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <CelebrationBurst />
        </div>
      )}

      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-4 h-4 text-cyan-400" />
        <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">
          Quick brief — under 2 minutes
        </span>
      </div>

      <MomentumBar currentStep={step} totalSteps={TOTAL_STEPS} className="mb-8" />

      {/* Honeypot — visually hidden, off-screen for bots that ignore CSS */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
        <label>
          Leave this field empty
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={data.website}
            onChange={e => update('website', e.target.value)}
          />
        </label>
      </div>

      {step === 0 && (
        <FormStep
          stepKey="step-1"
          title="Let's get to know you."
          subhead="We tailor every reply to the person — not a templated CRM blast."
          isFirst
          canAdvance={stepValid}
          onNext={advance}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FieldShell label="First name" htmlFor="first_name">
              <TextInput
                id="first_name"
                name="first_name"
                value={data.first_name}
                onChange={e => update('first_name', e.target.value)}
                placeholder="Sean"
                required
                autoComplete="given-name"
              />
            </FieldShell>
            <FieldShell label="Last name" htmlFor="last_name">
              <TextInput
                id="last_name"
                name="last_name"
                value={data.last_name}
                onChange={e => update('last_name', e.target.value)}
                placeholder="Richard"
                required
                autoComplete="family-name"
              />
            </FieldShell>
          </div>
          <FieldShell
            label="Work email"
            htmlFor="email"
            error={
              data.email.length > 0 && !EMAIL_REGEX.test(data.email)
                ? 'Please enter a valid email'
                : null
            }
          >
            <TextInput
              id="email"
              name="email"
              type="email"
              value={data.email}
              onChange={e => update('email', e.target.value)}
              placeholder="you@company.com"
              required
              autoComplete="email"
              invalid={data.email.length > 0 && !EMAIL_REGEX.test(data.email)}
            />
          </FieldShell>
          <FieldShell label="Company" htmlFor="company" optional>
            <TextInput
              id="company"
              name="company"
              value={data.company}
              onChange={e => update('company', e.target.value)}
              placeholder="Acme Corp"
              autoComplete="organization"
            />
          </FieldShell>
        </FormStep>
      )}

      {step === 1 && (
        <FormStep
          stepKey="step-2"
          title="Your world."
          subhead="So we know whose compliance frameworks to map your project against."
          canAdvance
          onBack={goBack}
          onNext={advance}
        >
          <FieldShell label="Industry" optional>
            <ChipPicker
              options={INDUSTRY_OPTIONS}
              value={data.industry}
              onChange={v => update('industry', v as string)}
            />
          </FieldShell>
          <FieldShell label="What are you building?" optional hint="Pick all that apply.">
            <ChipPicker
              options={PROJECT_TYPE_OPTIONS}
              value={data.project_type}
              multi
              onChange={v => update('project_type', v as string[])}
            />
          </FieldShell>
          <FieldShell label="When does this need to be live?" optional>
            <ChipPicker
              options={URGENCY_OPTIONS}
              value={data.urgency}
              onChange={v => update('urgency', v as string)}
            />
          </FieldShell>
        </FormStep>
      )}

      {step === 2 && (
        <FormStep
          stepKey="step-3"
          title="Scope it out."
          subhead="Rough numbers help us match the right engineering pod. Nothing here is binding."
          canAdvance
          onBack={goBack}
          onNext={advance}
        >
          <FieldShell label="Budget range" optional>
            <ChipPicker
              options={BUDGET_OPTIONS}
              value={data.budget_range}
              onChange={v => update('budget_range', v as string)}
            />
          </FieldShell>
          <FieldShell label="Ideal start" htmlFor="ideal_start" optional hint='e.g. "ASAP", "Q3", "September"'>
            <TextInput
              id="ideal_start"
              name="ideal_start"
              value={data.ideal_start}
              onChange={e => update('ideal_start', e.target.value)}
              placeholder="ASAP"
            />
          </FieldShell>
          <FieldShell
            label="Tell us about the project"
            htmlFor="project_description"
            optional
            hint="2–3 sentences is plenty — what's the outcome you need?"
          >
            <TextArea
              id="project_description"
              name="project_description"
              value={data.project_description}
              onChange={e => update('project_description', e.target.value)}
              placeholder="We're trying to..."
              rows={4}
            />
          </FieldShell>
        </FormStep>
      )}

      {step === 3 && (
        <FormStep
          stepKey="step-4"
          title="Last step — how to reach you."
          subhead="One more click and Sean's on it."
          isLast
          canAdvance={stepValid}
          isSubmitting={loading}
          onBack={goBack}
          onSubmit={handleSubmit}
          submitLabel="Send it"
          errorMessage={submitError}
        >
          <FieldShell label="Job title" htmlFor="job_title" optional>
            <TextInput
              id="job_title"
              name="job_title"
              value={data.job_title}
              onChange={e => update('job_title', e.target.value)}
              placeholder="VP of Engineering"
              autoComplete="organization-title"
            />
          </FieldShell>
          <FieldShell
            label="Phone"
            htmlFor="phone"
            optional
            hint="Only if you'd like SMS updates on your inquiry."
            error={phoneFilled && !phoneValid ? 'Please enter a valid phone number' : null}
          >
            <TextInput
              id="phone"
              name="phone"
              type="tel"
              value={data.phone}
              onChange={e => update('phone', e.target.value)}
              placeholder="+1 555 555 5555"
              autoComplete="tel"
              invalid={phoneFilled && !phoneValid}
            />
          </FieldShell>

          <label className="flex items-start gap-3 cursor-pointer p-4 rounded-lg border border-slate-700/60 bg-slate-900/50 hover:border-cyan-500/40 transition-colors">
            <input
              type="checkbox"
              checked={data.compliance_acknowledgement}
              onChange={e => update('compliance_acknowledgement', e.target.checked)}
              className="mt-1 w-4 h-4 accent-cyan-500 flex-shrink-0"
              required
            />
            <span className="text-base text-slate-300 leading-relaxed block">
              By checking this box and providing my phone number, I agree to receive SMS messages
              from Autom8ion Lab (Sitehues Media Inc.) about appointments, bookings, lead responses,
              and service updates. Message frequency varies. Message and data rates may apply.
              Reply STOP to opt out, HELP for help. Consent is not a condition of purchase. See our{' '}
              <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/terms" className="text-cyan-400 hover:text-cyan-300 underline">
                Terms of Service
              </Link>
              .
            </span>
          </label>
        </FormStep>
      )}

      <div className="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-500 text-center">
        Prefer the old way? Email{' '}
        <a
          href="mailto:info@autom8ionlab.com"
          className="text-cyan-400 hover:text-cyan-300"
          onClick={() => conversionEvents.emailClick()}
        >
          info@autom8ionlab.com
        </a>{' '}
        or call{' '}
        <a
          href="tel:+18554390072"
          className="text-cyan-400 hover:text-cyan-300"
          onClick={() => conversionEvents.phoneClick()}
        >
          +1 855-439-0072
        </a>
        .
      </div>
    </div>
  );
}
