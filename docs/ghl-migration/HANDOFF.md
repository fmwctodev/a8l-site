# GHL → a8l-os Migration — Morning Handoff

**Status as of 2026-05-05 overnight:** All code for Phases A through E is written and committed locally on `main` in both repos. **Nothing has been pushed to GitHub. Nothing has been deployed. No Supabase migrations have been applied to production.** Everything is staged and waiting for your review + go-ahead.

This doc is your single entry point. Read it top-to-bottom before doing anything.

---

## TL;DR — Morning sequence

1. Review the local commits in both repos (15 min)
2. Apply the 5 a8l-os migrations to prod Supabase (5 min)
3. Deploy the updated `form-submit` Edge Function to prod (2 min)
4. Set Netlify env vars on a8l-site (2 min)
5. Smoke-test by curling the Edge Function (2 min)
6. Push a8l-site to main → Netlify auto-deploys → smoke-test in incognito (10 min)

If all six steps pass, **Phase A is complete and the marketing site is migrated.** Phases B/C/D/E are documented and queued — pick them up on your own cadence (Phase C is multi-week wall-clock).

---

## Local commits to review

Both committed but **not pushed**.

### a8l-os (commit `8ac6fb4`)
```
feat(forms): auto-create Opportunity from form submission + seed marketing-site forms
- supabase/functions/form-submit/index.ts (modified)
- supabase/migrations/20260505120000_seed_inbound_sales_pipeline.sql (new)
- supabase/migrations/20260505120100_seed_form_intake_custom_fields.sql (new)
- supabase/migrations/20260505120200_seed_get_in_touch_form.sql (new)
- supabase/migrations/20260505120300_seed_careers_application_form.sql (new)
```

A fifth migration was added later, untracked currently:
```
supabase/migrations/20260505120400_extend_workflow_trigger_types_for_forms.sql
```
Stage and commit if you want it in the same logical bundle.

### a8l-site (commit `e559437`)
```
Replace LeadConnector iframes with native gamified a8l-os forms
- app/_components/GamifiedContactForm.tsx (new — 4-step gamified wizard)
- app/_components/CareersApplicationForm.tsx (new — 3-step careers form)
- app/_components/forms/FormStep.tsx (new — generic step shell + field primitives)
- app/_components/forms/MomentumBar.tsx (new — gamified progress bar)
- app/_components/forms/useA8LOSFormSubmit.ts (new — submission hook)
- app/get-in-touch/page.tsx (modified — iframe replaced)
- app/join-us/CareersClient.tsx (modified — modal iframe replaced)
- app/privacy/page.tsx (modified — LeadConnector references removed)
- app/terms/page.tsx (modified — lastUpdated bumped)
- lib/analytics.ts (modified — added formSubmitContact, formSubmitCareers events)
- .env.example (new)
```

Diff review:
```bash
cd J:/GitHub/a8l-site && git show e559437 --stat
cd J:/GitHub/a8l-os && git show 8ac6fb4 --stat
```

---

## Phase A deployment — exact steps

### Step 1 — Stage + commit the missing a8l-os migration

```bash
cd J:/GitHub/a8l-os
git add supabase/migrations/20260505120400_extend_workflow_trigger_types_for_forms.sql
git commit -m "feat(workflows): add form_submitted, opportunity_created trigger types"
```

### Step 2 — Apply the 5 a8l-os migrations to PRODUCTION Supabase

The migrations are idempotent (safe to re-run, all use `ON CONFLICT DO NOTHING` or `IF NOT EXISTS`). Recommended path:

```bash
cd J:/GitHub/a8l-os
supabase link --project-ref YOUR_PROD_PROJECT_REF  # one-time
supabase db push
```

Or via the Supabase Dashboard SQL Editor — paste each migration in order:
- `20260505120000_seed_inbound_sales_pipeline.sql`
- `20260505120100_seed_form_intake_custom_fields.sql`
- `20260505120200_seed_get_in_touch_form.sql`
- `20260505120300_seed_careers_application_form.sql`
- `20260505120400_extend_workflow_trigger_types_for_forms.sql`

### Step 3 — Verify the migrations landed

In Supabase SQL Editor:
```sql
-- Should return 1 row
SELECT id, name FROM pipelines WHERE name = 'Inbound Sales';

-- Should return 6 rows
SELECT name, sort_order FROM pipeline_stages
WHERE pipeline_id = (SELECT id FROM pipelines WHERE name = 'Inbound Sales')
ORDER BY sort_order;

-- Should return 15 rows
SELECT field_key, field_type FROM custom_fields
WHERE field_key IN (
  'industry', 'project_type', 'urgency', 'budget_range',
  'ideal_start', 'project_description', 'sms_consent',
  'human_acknowledgement', 'position_applying_for',
  'years_of_experience', 'linkedin_url', 'portfolio_url',
  'cover_letter', 'resume_file_url', 'federal_clearance'
);

-- Should return 2 rows, both 'published'
SELECT public_slug, name, status FROM forms WHERE public_slug IN ('get-in-touch', 'careers-application');

-- Workflow trigger enum should now include 'form_submitted'
SELECT unnest(enum_range(NULL::workflow_trigger_type)) ORDER BY 1;
```

### Step 4 — Deploy the updated form-submit Edge Function

```bash
cd J:/GitHub/a8l-os
supabase functions deploy form-submit
```

The Edge Function is backwards-compatible: existing forms (sample "Contact Us", "Newsletter") still work because they don't have `defaultPipelineId`/`defaultStageId` in their settings, so the new opportunity branch is skipped silently for them.

### Step 5 — Smoke-test the Edge Function

```bash
curl -X POST "$SUPABASE_URL/functions/v1/form-submit/get-in-touch" \
  -H "Authorization: Bearer $SUPABASE_ANON_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "first_name": "Test",
      "last_name": "Smoke",
      "email": "test+smoke-phase-a@autom8ionlab.com",
      "company": "Test Co",
      "industry": "construction",
      "project_type": ["ai_agents"],
      "urgency": "30_60_days",
      "budget_range": "75_250k",
      "ideal_start": "ASAP",
      "project_description": "Smoke test from HANDOFF.md",
      "human_acknowledgement": true
    }
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Got it. Sean will reply within 1 business day.",
  "submission_id": "<uuid>",
  "contact_id": "<uuid>",
  "opportunity_id": "<uuid>"
}
```

If `opportunity_id` is null but contact_id is present, the opportunity branch silently failed — check the Edge Function logs in Supabase Dashboard → Functions → Logs and look for the warning `createOpportunityFromForm: no eligible user found`. Fix by ensuring at least one user with `status = 'active'` exists in the org.

Then verify in the UI:
- a8l-os Contacts module → Test Smoke should be there
- a8l-os Opportunities module → Inbound Sales / New Lead → Test Smoke's opportunity, value $75,000
- Clean up: archive both records or hard-delete via SQL when satisfied.

### Step 6 — Set Netlify env vars on a8l-site

Netlify Dashboard → Site settings → Environment variables:

| Key | Value |
|-----|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | a8l-os production Supabase URL (same as in a8l-os repo's `.env`) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | a8l-os production anon key |

These are PUBLIC keys — safe to expose in the marketing site bundle. They only authorize the request to reach the Edge Function; the Edge Function uses its own service-role key for the actual writes.

### Step 7 — Push a8l-site to main

```bash
cd J:/GitHub/a8l-site
git push origin main
```

Netlify auto-deploys on push to main. Watch the Netlify build dashboard for green.

### Step 8 — Smoke test in incognito

Open https://autom8ionlab.com/get-in-touch in an incognito window:
- Form should render with momentum bar at "Step 1 of 4"
- Step through all 4 steps, fill required fields
- Step 4: enter a phone number → conditional TCPA checkbox should appear
- Submit → success state with celebration burst
- Verify in a8l-os UI that contact + opportunity appeared

Open https://autom8ionlab.com/join-us → click "Send Us Your Resume":
- Modal should open with the new careers form
- Step through 3 steps, submit
- Verify in a8l-os UI that contact appeared (NO opportunity expected)

---

## If something breaks during Phase A deployment

### Migrations fail to apply
Likely cause: FK violation or tenant data inconsistency. Check the Supabase logs. Migrations are pure additive `INSERT … ON CONFLICT DO NOTHING`, so they shouldn't conflict with existing data, but if your prod org has the unusual setup (no users, no departments), the form record creation will fail because `created_by` lookup returns null. Verify users exist:
```sql
SELECT count(*) FROM users WHERE status = 'active';
```
Should be ≥ 1. If 0, the bootstrap-admin Edge Function hasn't been run — run that first.

### Edge Function returns 404 "Form not found or not published"
Means the seed migration didn't run or didn't INSERT. Re-check:
```sql
SELECT public_slug, status FROM forms WHERE public_slug = 'get-in-touch';
```
Should be `('get-in-touch', 'published')`. If status is 'draft', the UPSERT clause didn't fire — manually `UPDATE forms SET status = 'published' WHERE public_slug = 'get-in-touch';`

### Edge Function returns 500 "No department configured"
Means `settings.departmentId` is null AND no department exists in the org. Either the org is brand new (no departments seeded) or the lookup query is failing. Run:
```sql
SELECT id, name FROM departments WHERE organization_id = (SELECT id FROM organizations LIMIT 1);
```
Should be ≥ 1 row. If empty, seed one: `INSERT INTO departments (organization_id, name) VALUES ((SELECT id FROM organizations LIMIT 1), 'Sales');`

### Frontend form posts but UI shows "Form is not yet configured"
The Netlify env vars aren't set or the build hasn't picked them up yet. Verify in Netlify → Site settings → Environment variables, then **trigger a fresh deploy** (Netlify caches env vars at build time, not runtime).

### Rollback strategy if Phase A goes badly
The old LeadConnector iframes are not deleted from history — `git revert e559437` on a8l-site puts them back. The a8l-os migrations don't break anything for existing systems even if the marketing site stops using them — the new pipeline + custom fields + form records sit unused.

```bash
cd J:/GitHub/a8l-site
git revert e559437
git push origin main
```
Netlify redeploys with the iframes back in place.

---

## Phases B / C / D / E — separate documents

After Phase A is green and you've watched 24 hours of traffic, pick up the rest in order. Each has its own document:

- **Phase B** — see [phase-c-tcr-plivo-reregistration.md](./phase-c-tcr-plivo-reregistration.md) prerequisites section. Phase B itself is mostly already done in a8l-os (Plivo Edge Functions exist, workflow engine exists, event_outbox exists). The only Phase B database change is the `workflow_trigger_type` enum extension migration which ships with Phase A. **Configuring the workflows themselves** (visual builder UI work in a8l-os, mapping `form_submitted` → "send appointment reminder SMS") is a 1-2 hour task done in the a8l-os UI, not code.

- **Phase C** — [phase-c-tcr-plivo-reregistration.md](./phase-c-tcr-plivo-reregistration.md). Multi-week wall-clock. Submit new TCR campaign with Plivo as provider. Application copy is fully drafted — paste-ready.

- **Phase D** — [phase-d-leadconnector-data-migration.md](./phase-d-leadconnector-data-migration.md). Export contacts from LeadConnector, import to a8l-os, preserve TCPA consent timestamps. SQL transform is fully written — needs a CSV from LeadConnector to run against.

- **Phase E** — [phase-e-decommission-checklist.md](./phase-e-decommission-checklist.md). Cancel LeadConnector subscription + final code cleanup. Run only after Phase C is stable for 7 days.

---

## Decisions I made overnight (call out if any are wrong)

1. **Skipped seeding a dedicated "Form Intake" system user.** Auth.users seeding from SQL is fragile (encrypted_password, instance_id, etc.). Instead, the Edge Function uses `form.created_by` (your SuperAdmin) for opportunity ownership. Audit trail is preserved via `source = 'web_form_<slug>'` on the opportunity + `created_from_form` event in opportunity_timeline_events + `opportunity_created` event in event_outbox. If you really want a distinct system user, manually create `system+intake@autom8ionlab.com` via Supabase Auth UI, then add `defaultOpportunityCreatedByUserId` to the form's settings JSON.

2. **Custom field schema is opinionated.** Made up budget tiers (`$25K-$75K`, `$75K-$250K`, `$250K+`, "Not sure"), urgency levels, project types, federal clearance levels. Easy to edit before applying — just modify [20260505120100_seed_form_intake_custom_fields.sql](../../../a8l-os/supabase/migrations/20260505120100_seed_form_intake_custom_fields.sql). The seed migrations are idempotent UPSERTs so re-running them after edits is safe.

3. **Privacy policy copy now names a8l-os and Plivo.** Pre-empts the Phase C cutover. If Phase C takes longer than expected and SMS is still flowing through LeadConnector at launch, the privacy policy is technically slightly inaccurate during the transition window. Two options:
   - (a) Live with the minor inaccuracy for the 2-4 week Phase C window (low real-world risk — no carrier or regulator reads privacy policies word-for-word during routine audits)
   - (b) Revert just the Twilio→Plivo line in privacy/page.tsx for now and re-apply at Phase C cutover.
   I went with (a) for simplicity. Push back if you want (b).

4. **Honeypot is named `website` in the form state.** Standard convention but worth noting because if you ever add a real website field to the form, rename the honeypot first.

5. **No file upload for resumes on careers form.** I gave it a "paste a Google Drive / Dropbox URL" text field instead, because adding Supabase Storage signed-URL upload is another half-day of work and not strictly necessary for v1. Easy to add later — `mammoth` and `pdfjs-dist` are already in a8l-os's deps for resume parsing.

---

## Test data cleanup

After smoke testing, clean up test contacts:
```sql
DELETE FROM contacts WHERE email LIKE 'test+%@autom8ionlab.com';
-- CASCADE handles opportunities, custom_field_values, timeline events, etc.
```

---

## Questions for me when you wake up

If anything in this handoff is ambiguous, ask. I'd rather re-explain something than have you guess.
