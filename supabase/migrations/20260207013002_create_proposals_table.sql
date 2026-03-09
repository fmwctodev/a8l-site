/*
  # Create proposals table

  1. New Tables
    - `proposals`
      - `id` (uuid, primary key) - Unique proposal identifier
      - `proposal_number` (text, unique) - Human-readable proposal number (e.g., PROP-2025-001)
      - `status` (text, default 'draft') - Proposal status: draft, sent, accepted, declined
      - `created_by` (uuid, nullable) - User who created the proposal
      - `date_prepared` (timestamptz) - When the proposal was created
      - `valid_until` (timestamptz) - Proposal expiration date
      - `client_name` (text) - Client contact name
      - `client_company` (text) - Client company name
      - `client_email` (text) - Client email address
      - `client_phone` (text) - Client phone number
      - `project_title` (text) - Title of the proposed project
      - `introduction` (text) - Opening statement and executive summary
      - `scope_of_work` (jsonb) - Array of scope items with titles, descriptions, and objectives
      - `deliverables` (jsonb) - Array of deliverable categories with item lists
      - `timeline_milestones` (jsonb) - Array of milestone objects with phase, duration, description, target date
      - `pricing_line_items` (jsonb) - Array of line items with name, description, amount
      - `total_investment` (numeric) - Total project cost
      - `payment_terms` (text) - Payment schedule and terms
      - `terms_conditions` (jsonb) - Array of term objects with title and body text
      - `notes` (text, nullable) - Additional notes
      - `created_at` (timestamptz) - Record creation timestamp
      - `updated_at` (timestamptz) - Record update timestamp

  2. Security
    - Enable RLS on `proposals` table
    - Public (anon) can view proposals with status 'sent', 'accepted', or 'declined' (shared links)
    - Authenticated users can view, create, update, and delete their own proposals
*/

CREATE TABLE IF NOT EXISTS proposals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  proposal_number text UNIQUE NOT NULL,
  status text NOT NULL DEFAULT 'draft',
  created_by uuid,
  date_prepared timestamptz NOT NULL DEFAULT now(),
  valid_until timestamptz,
  client_name text NOT NULL DEFAULT '',
  client_company text NOT NULL DEFAULT '',
  client_email text NOT NULL DEFAULT '',
  client_phone text NOT NULL DEFAULT '',
  project_title text NOT NULL DEFAULT '',
  introduction text NOT NULL DEFAULT '',
  scope_of_work jsonb NOT NULL DEFAULT '[]'::jsonb,
  deliverables jsonb NOT NULL DEFAULT '[]'::jsonb,
  timeline_milestones jsonb NOT NULL DEFAULT '[]'::jsonb,
  pricing_line_items jsonb NOT NULL DEFAULT '[]'::jsonb,
  total_investment numeric NOT NULL DEFAULT 0,
  payment_terms text NOT NULL DEFAULT '',
  terms_conditions jsonb NOT NULL DEFAULT '[]'::jsonb,
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE proposals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view sent proposals"
  ON proposals
  FOR SELECT
  TO anon
  USING (status IN ('sent', 'accepted', 'declined'));

CREATE POLICY "Authenticated users can view own proposals"
  ON proposals
  FOR SELECT
  TO authenticated
  USING (auth.uid() = created_by);

CREATE POLICY "Authenticated users can create proposals"
  ON proposals
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Authenticated users can update own proposals"
  ON proposals
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = created_by)
  WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Authenticated users can delete own proposals"
  ON proposals
  FOR DELETE
  TO authenticated
  USING (auth.uid() = created_by);