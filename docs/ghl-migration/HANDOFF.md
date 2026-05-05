# GHL → a8l-os Migration — Master Handoff

**Status as of 2026-05-05 — Phase A SHIPPED, B prepped, C ready to submit, D scripts ready, E mostly clean.**

Phase A (forms + CRM migration) is live in production:
- ✅ All 7 a8l-os migrations applied to prod Supabase (`uscpncgnkmjirbrpidgu`)
- ✅ form-submit Edge Function deployed at v76 with createOpportunityFromForm + writeOpportunityCustomFieldValues helpers
- ✅ Smoke test passed end-to-end (contact + opportunity + custom fields all populated correctly, then cleaned up)
- ✅ Netlify env vars set across all contexts
- ✅ `https://autom8ionlab.com/get-in-touch` + `/join-us` rendering native gamified forms (no LeadConnector iframes)

Phase B prerequisites set up:
- ✅ Plivo connected, 2 numbers active, `+1 813-320-9652` set as default SMS (matches registered FL address)
- ✅ Workflow trigger types extended (`form_submitted`, `opportunity_created`, etc.)
- ⏳ **YOUR action:** Build the 6 SMS workflows in `os.autom8ionlab.com → Automation` per [phase-b-plivo-sms-rail.md](./phase-b-plivo-sms-rail.md). Keep DRAFT until Phase C clears.

Phase C (TCR re-registration with Plivo) ready to submit:
- ✅ Application copy paste-ready in [phase-c-tcr-plivo-reregistration.md](./phase-c-tcr-plivo-reregistration.md)
- ⏳ **YOUR action:** Log into Plivo Console → A2P 10DLC → Campaigns → Create. Cannot be done via API.

Phase D (LeadConnector → a8l-os data migration) scripts ready:
- ✅ Export script: [scripts/export-leadconnector-contacts.mjs](../../../a8l-os/scripts/export-leadconnector-contacts.mjs)
- ✅ Import SQL: [phase-d-leadconnector-data-migration.md](./phase-d-leadconnector-data-migration.md)
- ⏳ **YOUR action:** Provide LeadConnector API key + custom field UUIDs, run the export script, run the import SQL.

Phase E (decommission): code is already clean — only residue is 2 historical code comments (recommended to keep). External cancellations require your account access.

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

All committed but **not pushed**.

### a8l-os (3 commits ahead of origin)
- `8ac6fb4` — feat(forms): auto-create Opportunity from form submission + seed marketing-site forms
  - 4 migrations (Inbound Sales pipeline, contact custom fields, get-in-touch form, careers form)
  - form-submit Edge Function (createOpportunityFromForm helper)
- `f94ae1b` — feat(workflows): add form_submitted, opportunity_created trigger types
  - 1 migration extending the workflow_trigger_type enum
- **`<v2 commit pending>`** — feat(opportunity-fields, file-upload): mirror form data to opportunity custom fields + careers resume upload
  - Migration `20260505130000_add_opportunity_custom_fields_inbound_sales.sql` — pipeline_custom_fields for Inbound Sales + form re-UPSERT with opportunity field mappings
  - Migration `20260505130100_create_careers_resumes_storage_bucket.sql` — public bucket + RLS policies
  - form-submit Edge Function — writeOpportunityCustomFieldValues helper + opportunityCustomFieldId mapping support

### a8l-site (3 commits ahead of origin)
- `e559437` — Replace LeadConnector iframes with native gamified a8l-os forms
- `65186bd` — docs(ghl-migration): handoff + Phase B/C/D/E playbooks
- **`<v2 commit pending>`** — feat(careers): file upload + Supabase storage client
  - `lib/supabaseClient.ts` (new) — lazy singleton anon-key client
  - `app/_components/CareersApplicationForm.tsx` (modified) — replaces "paste a URL" text field with native file upload that writes directly to the careers-resumes bucket and stores the public URL on the contact

Diff review:
```bash
cd J:/GitHub/a8l-site && git log --oneline origin/main..main
cd J:/GitHub/a8l-os && git log --oneline origin/main..main
```

---

## Phase A deployment — exact steps

### Step 1 — Stage + commit the missing a8l-os migration

```bash
cd J:/GitHub/a8l-os
git add supabase/migrations/20260505120400_extend_workflow_trigger_types_for_forms.sql
git commit -m "feat(workflows): add form_submitted, opportunity_created trigger types"
```

### Step 2 — Apply the 7 a8l-os migrations to PRODUCTION Supabase

The migrations are idempotent (safe to re-run, all use `ON CONFLICT DO NOTHING/UPDATE` or `IF NOT EXISTS`). Recommended path:

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
- `20260505130000_add_opportunity_custom_fields_inbound_sales.sql` ← v2
- `20260505130100_create_careers_resumes_storage_bucket.sql` ← v2

The 130000 migration re-UPSERTs the `get-in-touch` form definition to include `opportunityCustomFieldId` mappings. Apply it AFTER 120200, even though both touch the same form record, because 130000 supersedes 120200's definition.

The 130100 migration creates a PUBLIC Supabase Storage bucket. If your security review requires private (signed-URL-only) resume access, see "Decisions ratified" #4 below — the bucket is reversible.

### Step 3 — Verify the migrations landed

In Supabase SQL Editor:
```sql
-- Should return 1 row
SELECT id, name FROM pipelines WHERE name = 'Inbound Sales';

-- Should return 6 rows
SELECT name, sort_order FROM pipeline_stages
WHERE pipeline_id = (SELECT id FROM pipelines WHERE name = 'Inbound Sales')
ORDER BY sort_order;

-- Should return 15 rows (contact custom fields)
SELECT field_key, field_type FROM custom_fields
WHERE field_key IN (
  'industry', 'project_type', 'urgency', 'budget_range',
  'ideal_start', 'project_description', 'sms_consent',
  'human_acknowledgement', 'position_applying_for',
  'years_of_experience', 'linkedin_url', 'portfolio_url',
  'cover_letter', 'resume_file_url', 'federal_clearance'
);

-- Should return 6 rows (Inbound Sales pipeline custom fields, v2)
SELECT field_key, field_type FROM pipeline_custom_fields
WHERE pipeline_id = (SELECT id FROM pipelines WHERE name = 'Inbound Sales');

-- Should return 2 rows, both 'published'
SELECT public_slug, name, status FROM forms WHERE public_slug IN ('get-in-touch', 'careers-application');

-- Spot-check: get-in-touch form's industry field should have opportunityCustomFieldId mapping (v2)
SELECT jsonb_path_query(definition, '$.fields[*] ? (@.id == "industry").mapping')
FROM forms WHERE public_slug = 'get-in-touch';
-- Expected: an object with both customFieldId AND opportunityCustomFieldId

-- Workflow trigger enum should now include 'form_submitted'
SELECT unnest(enum_range(NULL::workflow_trigger_type)) ORDER BY 1;

-- Storage bucket exists and is public (v2)
SELECT id, public, file_size_limit, allowed_mime_types FROM storage.buckets WHERE id = 'careers-resumes';
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

## Decisions ratified (responding to your morning answers)

1. **Owner assignment happens in the a8l-os UI** — confirmed. No code change. `assigned_user_id` is null on form-created opportunities; you assign via the opportunity detail card or contact detail card. `created_by` resolves to `form.created_by` (your SuperAdmin) so the FK is satisfied without a synthetic system user. Audit trail preserved via `source = 'web_form_<slug>'` on the opportunity, `created_from_form` event in opportunity_timeline_events, and `opportunity_created` event in event_outbox.

2. **Form fields now mirror to opportunity custom fields** — done in v2 migration `20260505130000`. Pipeline-scoped custom fields added: `industry`, `project_type`, `urgency`, `budget_range`, `ideal_start`, `project_description`. Form-submit Edge Function writes these to `opportunity_custom_field_values` whenever it creates an opportunity (via the new `opportunityCustomFieldId` mapping on form fields). The opportunity detail card in a8l-os should now render these inline. **If the existing a8l-os UI doesn't render pipeline_custom_fields automatically, that's a separate UI ticket** — the data is in the right table either way.

3. **Plivo references stay in privacy policy** — confirmed. No code change.

4. **Native resume file upload added in v2** — done. Migration `20260505130100` creates the `careers-resumes` Supabase Storage bucket (PUBLIC, 5MB cap, PDF/DOC/DOCX only). `CareersApplicationForm.tsx` now has a real file picker that uploads via the Supabase JS client and stores the public URL in the form state. The URL is then written via the existing `customFieldId` mapping to the contact's `resume_file_url` custom field, so the contact detail card in a8l-os renders it as a clickable link.
   - **Privacy trade-off:** Bucket is public for simplicity. URLs contain a random UUID (`/{uuid}.pdf`) so they're effectively unguessable, but anyone who has the URL can open the file. If your legal review requires private (signed-URL-only) access, flip `public = false` in the bucket migration and update `CareersApplicationForm.tsx` + the contact detail card to fetch signed URLs on demand. Documented but not implemented in v1 to keep the surface area smaller.
   - **Abuse mitigation:** RLS allows anonymous INSERT only (no UPDATE/DELETE). MIME types restricted at the bucket level. 5MB file size cap. No per-IP rate limit on Storage today — if you see abuse (random PDFs landing in the bucket without form submissions), add a rate-limited Edge Function as the upload broker.

5. **Custom field schema is opinionated.** Made up budget tiers (`$25K-$75K`, `$75K-$250K`, `$250K+`, "Not sure"), urgency levels, project types, federal clearance levels. Easy to edit before applying — modify [20260505120100_seed_form_intake_custom_fields.sql](../../../a8l-os/supabase/migrations/20260505120100_seed_form_intake_custom_fields.sql) AND [20260505130000_add_opportunity_custom_fields_inbound_sales.sql](../../../a8l-os/supabase/migrations/20260505130000_add_opportunity_custom_fields_inbound_sales.sql) (the same options live in two places — contact-level + pipeline-level). The seed migrations are idempotent UPSERTs so re-running them after edits is safe.

6. **Honeypot is named `website` in the form state.** Standard convention but worth noting because if you ever add a real website field to either form, rename the honeypot first.

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
