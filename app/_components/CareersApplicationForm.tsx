'use client';

import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import MomentumBar from './forms/MomentumBar';
import FormStep, { FieldShell, TextInput, TextArea, ChipPicker } from './forms/FormStep';
import { useA8LOSFormSubmit } from './forms/useA8LOSFormSubmit';
import { conversionEvents } from '@/lib/analytics';

/**
 * CareersApplicationForm — 3-step application backing /join-us.
 *
 * Posts to a8l-os form-submit Edge Function under public_slug
 * "careers-application". The form's settings deliberately omit
 * defaultPipelineId/defaultStageId, so the Edge Function creates a Contact
 * but does NOT create an Opportunity — career applications shouldn't
 * pollute the Inbound Sales pipeline.
 *
 * Lighter touch on gamification than the marketing contact form: a job
 * application isn't the place for confetti. Multi-step wizard + momentum
 * bar only.
 */

const YEARS_OF_EXPERIENCE_OPTIONS = [
  { value: '0_2', label: '0-2 years' },
  { value: '3_5', label: '3-5 years' },
  { value: '6_10', label: '6-10 years' },
  { value: '10_plus', label: '10+ years' },
];

const FEDERAL_CLEARANCE_OPTIONS = [
  { value: 'none', label: 'None' },
  { value: 'public_trust', label: 'Public Trust' },
  { value: 'secret', label: 'Secret' },
  { value: 'top_secret', label: 'Top Secret' },
  { value: 'ts_sci', label: 'TS/SCI' },
];

const TOTAL_STEPS = 3;

interface FormState {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  position_applying_for: string;
  years_of_experience: string;
  federal_clearance: string;
  linkedin_url: string;
  portfolio_url: string;
  cover_letter: string;
  resume_file_url: string;
  website: string; // honeypot
}

const INITIAL_STATE: FormState = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  position_applying_for: '',
  years_of_experience: '',
  federal_clearance: '',
  linkedin_url: '',
  portfolio_url: '',
  cover_letter: '',
  resume_file_url: '',
  website: '',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function digitsOnly(s: string): string {
  return s.replace(/\D+/g, '');
}

function urlValid(s: string): boolean {
  if (s.length === 0) return true;
  try {
    const u = new URL(s.includes('://') ? s : `https://${s}`);
    return u.hostname.includes('.');
  } catch {
    return false;
  }
}

interface CareersApplicationFormProps {
  /** Pre-fill the position field when triggered from a specific role's "Apply" button. */
  positionTitle?: string;
  /** Called after successful submission so the parent can close a modal, etc. */
  onSuccess?: () => void;
}

export default function CareersApplicationForm({
  positionTitle,
  onSuccess,
}: CareersApplicationFormProps) {
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>({
    ...INITIAL_STATE,
    position_applying_for: positionTitle ?? '',
  });
  const [submitted, setSubmitted] = useState(false);
  const { submit, loading, error: submitError } = useA8LOSFormSubmit('careers-application');

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setData(prev => ({ ...prev, [key]: value }));
  };

  const phoneDigits = digitsOnly(data.phone);
  const phoneValid = phoneDigits.length >= 7 && phoneDigits.length <= 15;
  const linkedinValid = urlValid(data.linkedin_url);
  const portfolioValid = urlValid(data.portfolio_url);

  const stepValid = useMemo(() => {
    switch (step) {
      case 0:
        return (
          data.first_name.trim().length > 0 &&
          data.last_name.trim().length > 0 &&
          EMAIL_REGEX.test(data.email.trim()) &&
          phoneValid
        );
      case 1:
        return (
          data.position_applying_for.trim().length > 0 &&
          data.years_of_experience.length > 0 &&
          linkedinValid &&
          portfolioValid
        );
      case 2:
        return true;
      default:
        return false;
    }
  }, [step, data, phoneValid, linkedinValid, portfolioValid]);

  const advance = () => {
    if (!stepValid) return;
    setStep(s => Math.min(s + 1, TOTAL_STEPS - 1));
  };

  const goBack = () => setStep(s => Math.max(0, s - 1));

  const handleSubmit = async () => {
    if (!stepValid) return;

    if (data.website.trim().length > 0) {
      setSubmitted(true);
      onSuccess?.();
      return;
    }

    const payload = {
      first_name: data.first_name.trim(),
      last_name: data.last_name.trim(),
      email: data.email.trim(),
      phone: data.phone.trim(),
      position_applying_for: data.position_applying_for.trim(),
      years_of_experience: data.years_of_experience,
      federal_clearance: data.federal_clearance || undefined,
      linkedin_url: data.linkedin_url.trim() || undefined,
      portfolio_url: data.portfolio_url.trim() || undefined,
      cover_letter: data.cover_letter.trim() || undefined,
      resume_file_url: data.resume_file_url.trim() || undefined,
      _honeypot: data.website || undefined,
    };

    const result = await submit(payload);
    if (result.success) {
      conversionEvents.formSubmitCareers({
        position: data.position_applying_for,
        years_of_experience: data.years_of_experience,
      });
      setSubmitted(true);
      onSuccess?.();
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-cyan-500/30 rounded-2xl p-8 text-center"
      >
        <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-5 shadow-glow-cyan">
          <CheckCircle2 className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Application received.</h3>
        <p className="text-slate-300 max-w-md mx-auto">
          We review every submission within 5 business days. If your background looks like a fit,
          you&apos;ll hear from us with next steps.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8">
      <MomentumBar currentStep={step} totalSteps={TOTAL_STEPS} className="mb-8" />

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
          stepKey="careers-step-1"
          title="Tell us who you are."
          isFirst
          canAdvance={stepValid}
          onNext={advance}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FieldShell label="First name" htmlFor="careers_first_name">
              <TextInput
                id="careers_first_name"
                value={data.first_name}
                onChange={e => update('first_name', e.target.value)}
                required
                autoComplete="given-name"
              />
            </FieldShell>
            <FieldShell label="Last name" htmlFor="careers_last_name">
              <TextInput
                id="careers_last_name"
                value={data.last_name}
                onChange={e => update('last_name', e.target.value)}
                required
                autoComplete="family-name"
              />
            </FieldShell>
          </div>
          <FieldShell
            label="Email"
            htmlFor="careers_email"
            error={
              data.email.length > 0 && !EMAIL_REGEX.test(data.email)
                ? 'Please enter a valid email'
                : null
            }
          >
            <TextInput
              id="careers_email"
              type="email"
              value={data.email}
              onChange={e => update('email', e.target.value)}
              required
              autoComplete="email"
              invalid={data.email.length > 0 && !EMAIL_REGEX.test(data.email)}
            />
          </FieldShell>
          <FieldShell
            label="Phone"
            htmlFor="careers_phone"
            error={data.phone.length > 0 && !phoneValid ? 'Please enter a valid phone number' : null}
          >
            <TextInput
              id="careers_phone"
              type="tel"
              value={data.phone}
              onChange={e => update('phone', e.target.value)}
              required
              autoComplete="tel"
              invalid={data.phone.length > 0 && !phoneValid}
            />
          </FieldShell>
        </FormStep>
      )}

      {step === 1 && (
        <FormStep
          stepKey="careers-step-2"
          title="Your experience."
          canAdvance={stepValid}
          onBack={goBack}
          onNext={advance}
        >
          <FieldShell label="Position you're applying for" htmlFor="careers_position">
            <TextInput
              id="careers_position"
              value={data.position_applying_for}
              onChange={e => update('position_applying_for', e.target.value)}
              required
              placeholder="Senior AI Engineer"
            />
          </FieldShell>
          <FieldShell label="Years of experience">
            <ChipPicker
              options={YEARS_OF_EXPERIENCE_OPTIONS}
              value={data.years_of_experience}
              onChange={v => update('years_of_experience', v as string)}
            />
          </FieldShell>
          <FieldShell
            label="Federal clearance"
            optional
            hint="Relevant for roles supporting US Government / Defense engagements."
          >
            <ChipPicker
              options={FEDERAL_CLEARANCE_OPTIONS}
              value={data.federal_clearance}
              onChange={v => update('federal_clearance', v as string)}
            />
          </FieldShell>
          <FieldShell
            label="LinkedIn"
            htmlFor="careers_linkedin"
            optional
            error={data.linkedin_url.length > 0 && !linkedinValid ? 'Please enter a valid URL' : null}
          >
            <TextInput
              id="careers_linkedin"
              type="url"
              value={data.linkedin_url}
              onChange={e => update('linkedin_url', e.target.value)}
              placeholder="https://linkedin.com/in/..."
              invalid={data.linkedin_url.length > 0 && !linkedinValid}
            />
          </FieldShell>
          <FieldShell
            label="Portfolio / GitHub"
            htmlFor="careers_portfolio"
            optional
            error={data.portfolio_url.length > 0 && !portfolioValid ? 'Please enter a valid URL' : null}
          >
            <TextInput
              id="careers_portfolio"
              type="url"
              value={data.portfolio_url}
              onChange={e => update('portfolio_url', e.target.value)}
              placeholder="https://github.com/..."
              invalid={data.portfolio_url.length > 0 && !portfolioValid}
            />
          </FieldShell>
        </FormStep>
      )}

      {step === 2 && (
        <FormStep
          stepKey="careers-step-3"
          title="Anything else?"
          subhead="Nothing here is required, but it helps us write you a more useful reply."
          isLast
          canAdvance={stepValid}
          isSubmitting={loading}
          onBack={goBack}
          onSubmit={handleSubmit}
          submitLabel="Submit application"
          errorMessage={submitError}
        >
          <FieldShell
            label="Why Autom8ion Lab?"
            htmlFor="careers_cover_letter"
            optional
            hint="A few sentences on what excites you about working with us."
          >
            <TextArea
              id="careers_cover_letter"
              value={data.cover_letter}
              onChange={e => update('cover_letter', e.target.value)}
              rows={5}
              placeholder="I'm drawn to..."
            />
          </FieldShell>
          <FieldShell
            label="Resume URL"
            htmlFor="careers_resume"
            optional
            hint="Paste a Google Drive / Dropbox / personal-site link to your resume PDF."
          >
            <TextInput
              id="careers_resume"
              type="url"
              value={data.resume_file_url}
              onChange={e => update('resume_file_url', e.target.value)}
              placeholder="https://drive.google.com/..."
            />
          </FieldShell>
        </FormStep>
      )}
    </div>
  );
}
