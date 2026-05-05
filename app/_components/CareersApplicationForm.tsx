'use client';

import { useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, Upload, Loader2, FileText, X } from 'lucide-react';
import MomentumBar from './forms/MomentumBar';
import FormStep, { FieldShell, TextInput, TextArea, ChipPicker } from './forms/FormStep';
import { useA8LOSFormSubmit } from './forms/useA8LOSFormSubmit';
import { getSupabaseClient } from '@/lib/supabaseClient';
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

const RESUME_BUCKET = 'careers-resumes';
const MAX_RESUME_BYTES = 5 * 1024 * 1024; // 5 MB — must match the bucket's file_size_limit
const ALLOWED_RESUME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

interface ResumeUploadState {
  status: 'idle' | 'uploading' | 'uploaded' | 'error';
  fileName: string | null;
  errorMessage: string | null;
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
  const [resumeUpload, setResumeUpload] = useState<ResumeUploadState>({
    status: 'idle',
    fileName: null,
    errorMessage: null,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { submit, loading, error: submitError } = useA8LOSFormSubmit('careers-application');

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setData(prev => ({ ...prev, [key]: value }));
  };

  const handleResumeSelected = async (file: File) => {
    if (!ALLOWED_RESUME_TYPES.includes(file.type)) {
      setResumeUpload({
        status: 'error',
        fileName: file.name,
        errorMessage: 'Please upload a PDF, DOC, or DOCX file.',
      });
      return;
    }
    if (file.size > MAX_RESUME_BYTES) {
      setResumeUpload({
        status: 'error',
        fileName: file.name,
        errorMessage: 'File too large. Please keep resumes under 5 MB.',
      });
      return;
    }

    const supabase = getSupabaseClient();
    if (!supabase) {
      setResumeUpload({
        status: 'error',
        fileName: file.name,
        errorMessage: 'Upload not configured. Email info@autom8ionlab.com instead.',
      });
      return;
    }

    setResumeUpload({ status: 'uploading', fileName: file.name, errorMessage: null });

    // Random UUID-prefixed path so concurrent uploads can't collide and
    // the URL is unguessable even though the bucket is public.
    const ext = file.name.split('.').pop()?.toLowerCase() || 'pdf';
    const uuid =
      typeof crypto !== 'undefined' && 'randomUUID' in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const path = `${uuid}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from(RESUME_BUCKET)
      .upload(path, file, {
        contentType: file.type,
        upsert: false,
      });

    if (uploadError) {
      setResumeUpload({
        status: 'error',
        fileName: file.name,
        errorMessage: uploadError.message || 'Upload failed. Please try again.',
      });
      return;
    }

    const { data: urlData } = supabase.storage.from(RESUME_BUCKET).getPublicUrl(path);
    update('resume_file_url', urlData.publicUrl);
    setResumeUpload({ status: 'uploaded', fileName: file.name, errorMessage: null });
  };

  const clearResume = () => {
    update('resume_file_url', '');
    setResumeUpload({ status: 'idle', fileName: null, errorMessage: null });
    if (fileInputRef.current) fileInputRef.current.value = '';
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
            label="Resume"
            optional
            hint="PDF, DOC, or DOCX. Max 5 MB."
            error={resumeUpload.status === 'error' ? resumeUpload.errorMessage : null}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              className="hidden"
              onChange={e => {
                const file = e.target.files?.[0];
                if (file) handleResumeSelected(file);
              }}
            />
            {resumeUpload.status === 'uploaded' && resumeUpload.fileName ? (
              <div className="flex items-center gap-3 p-4 rounded-lg border border-cyan-500/40 bg-cyan-500/10">
                <FileText className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-white truncate">{resumeUpload.fileName}</div>
                  <div className="text-xs text-cyan-300">Uploaded</div>
                </div>
                <button
                  type="button"
                  onClick={clearResume}
                  className="text-slate-400 hover:text-red-400 transition-colors p-1"
                  aria-label="Remove uploaded resume"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : resumeUpload.status === 'uploading' ? (
              <div className="flex items-center gap-3 p-4 rounded-lg border border-slate-700 bg-slate-900/60">
                <Loader2 className="w-5 h-5 text-cyan-400 animate-spin" />
                <div className="text-sm text-slate-300">
                  Uploading {resumeUpload.fileName}…
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full flex items-center justify-center gap-2 p-4 rounded-lg border border-dashed border-slate-700 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all text-slate-300 hover:text-cyan-300"
              >
                <Upload className="w-4 h-4" />
                {resumeUpload.status === 'error' ? 'Try a different file' : 'Click to upload your resume'}
              </button>
            )}
          </FieldShell>
        </FormStep>
      )}
    </div>
  );
}
