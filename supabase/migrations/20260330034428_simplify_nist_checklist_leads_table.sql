/*
  # Simplify NIST Checklist Leads Table

  ## Summary
  Removes the `company` and `job_title` columns from the `nist_checklist_leads` table
  and updates the RLS INSERT policy to only require first_name, last_name, and email.

  ## Modified Tables
  - `nist_checklist_leads`
    - Removed: `company` (text) — no longer collected in the opt-in form
    - Removed: `job_title` (text) — no longer collected in the opt-in form
    - Retained: `id`, `first_name`, `last_name`, `email`, `created_at`

  ## Security
  - RLS remains enabled
  - Old INSERT policy dropped first, then columns dropped, then new policy created
    that only validates first_name, last_name, and email
*/

DROP POLICY IF EXISTS "Anyone can submit their lead info to download the checklist"
  ON nist_checklist_leads;

ALTER TABLE nist_checklist_leads
  DROP COLUMN IF EXISTS company,
  DROP COLUMN IF EXISTS job_title;

CREATE POLICY "Anyone can submit their lead info to download the checklist"
  ON nist_checklist_leads
  FOR INSERT
  TO anon
  WITH CHECK (
    first_name <> '' AND
    last_name <> '' AND
    email <> ''
  );
