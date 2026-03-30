/*
  # Create NIST Checklist Leads Table

  ## Summary
  Creates a table to capture leads who opt in to download the NIST AI RMF
  Compliance Audit & Implementation Checklist from the landing page at /nist-checklist.

  ## New Tables
  - `nist_checklist_leads`
    - `id` (uuid, primary key) — auto-generated unique identifier
    - `first_name` (text, not null) — lead's first name
    - `last_name` (text, not null) — lead's last name
    - `email` (text, not null) — lead's work email address
    - `company` (text, not null) — lead's company name
    - `job_title` (text, not null) — lead's job title
    - `created_at` (timestamptz, default now()) — timestamp of form submission

  ## Security
  - RLS enabled: table is locked down by default
  - Anonymous INSERT policy: allows unauthenticated visitors to submit the form
  - No SELECT policy: leads data is not readable by anonymous or authenticated users
    via the client (admin access only via service role)

  ## Indexes
  - Index on `email` for deduplication queries
  - Index on `created_at` for time-based admin queries
*/

CREATE TABLE IF NOT EXISTS nist_checklist_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL DEFAULT '',
  last_name text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  company text NOT NULL DEFAULT '',
  job_title text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE nist_checklist_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit their lead info to download the checklist"
  ON nist_checklist_leads
  FOR INSERT
  TO anon
  WITH CHECK (
    first_name <> '' AND
    last_name <> '' AND
    email <> '' AND
    company <> '' AND
    job_title <> ''
  );

CREATE INDEX IF NOT EXISTS nist_checklist_leads_email_idx
  ON nist_checklist_leads (email);

CREATE INDEX IF NOT EXISTS nist_checklist_leads_created_at_idx
  ON nist_checklist_leads (created_at DESC);
