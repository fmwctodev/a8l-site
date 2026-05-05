# Phase D — LeadConnector → a8l-os Data Migration

Migrate historical contacts + SMS consent records from LeadConnector to a8l-os, preserving original consent timestamps (TCPA legal requirement).

Prerequisites: Phase A migrations applied (so `industry`, `sms_consent`, etc. custom_fields exist), Phase B workflow rail proven. Ideally before Phase C cutover so a8l-os has the full historical contact graph at the moment SMS traffic switches over.

Estimated wall-clock: 1-2 hours for export + 30 min for transform + 30 min for verification. ~10 hours including script testing on a sandbox before running on prod.

---

## Step 1 — Export contacts from LeadConnector

LeadConnector / GHL gives you two paths. **Option A is recommended** — the dashboard CSV is more reliable than their API for bulk exports.

### Option A: Dashboard CSV export
1. LeadConnector → Contacts → Filter (none, you want all)
2. Select all → Bulk Actions → Export
3. Choose "Export to CSV with custom fields"
4. Wait for the email with the download link (usually under 5 minutes for under 10k contacts)
5. Save the CSV as `~/Downloads/leadconnector-contacts-export.csv`

### Option B: REST API
```bash
# Requires LeadConnector / GoHighLevel API key with contacts.read scope
curl -H "Authorization: Bearer $LEADCONNECTOR_API_KEY" \
     -H "Version: 2021-07-28" \
     "https://services.leadconnectorhq.com/contacts/?locationId=$LOCATION_ID&limit=1000" \
     > leadconnector-contacts.json
```
Paginate `?startAfterId=` until empty. Then convert to CSV with `jq` or a small script.

---

## Step 2 — Stage the CSV into a8l-os Supabase

Connect to the a8l-os production Supabase via SQL Editor (or `psql` with the connection string from Project Settings → Database).

### Create staging table
```sql
CREATE TABLE IF NOT EXISTS _lc_import_staging (
  id text,
  first_name text,
  last_name text,
  email text,
  phone text,
  company text,
  job_title text,
  city text,
  state text,
  postal_code text,
  country text,
  source text,
  tags text,
  date_added timestamptz,
  -- LeadConnector custom field columns — names depend on YOUR account
  -- Adjust these based on the actual column headers in your CSV export.
  sms_opt_in boolean,
  sms_opt_in_date timestamptz,
  industry text,
  notes text,
  raw jsonb
);
```

### Import the CSV
Supabase Dashboard → Table Editor → `_lc_import_staging` → "Insert" → "Import data from CSV". Map the CSV columns to the staging columns. Or via psql:
```bash
\copy _lc_import_staging FROM '~/Downloads/leadconnector-contacts-export.csv' WITH (FORMAT csv, HEADER true);
```

---

## Step 3 — Transform staging → contacts + custom_field_values

```sql
DO $$
DECLARE
  v_org_id uuid;
  v_dept_id uuid;
  v_field_industry uuid;
  v_field_sms_consent uuid;
  v_inserted int := 0;
  v_skipped int := 0;
  r RECORD;
  v_contact_id uuid;
BEGIN
  SELECT id INTO v_org_id FROM organizations ORDER BY created_at LIMIT 1;
  SELECT id INTO v_dept_id FROM departments WHERE organization_id = v_org_id LIMIT 1;
  SELECT id INTO v_field_industry FROM custom_fields
    WHERE organization_id = v_org_id AND field_key = 'industry';
  SELECT id INTO v_field_sms_consent FROM custom_fields
    WHERE organization_id = v_org_id AND field_key = 'sms_consent';

  FOR r IN SELECT * FROM _lc_import_staging WHERE email IS NOT NULL LOOP
    -- Email-first dedup against existing a8l-os contacts
    SELECT id INTO v_contact_id FROM contacts
      WHERE organization_id = v_org_id AND email = r.email AND status = 'active'
      LIMIT 1;

    IF v_contact_id IS NULL THEN
      INSERT INTO contacts (
        organization_id, department_id, first_name, last_name,
        email, phone, company, job_title, city, state, postal_code, country,
        source, status, created_at
      ) VALUES (
        v_org_id, v_dept_id,
        COALESCE(NULLIF(trim(r.first_name), ''), ''),
        COALESCE(NULLIF(trim(r.last_name), ''), ''),
        r.email, r.phone, r.company, r.job_title,
        r.city, r.state, r.postal_code, r.country,
        COALESCE(r.source, 'leadconnector_import'),
        'active',
        COALESCE(r.date_added, now())
      ) RETURNING id INTO v_contact_id;
      v_inserted := v_inserted + 1;
    ELSE
      v_skipped := v_skipped + 1;
    END IF;

    -- SMS consent: TCPA requires preserving the ORIGINAL consent timestamp.
    -- We store the consent boolean in contact_custom_field_values, with the
    -- LeadConnector opt-in timestamp embedded in the value jsonb so any
    -- future audit can prove when consent was captured.
    IF r.sms_opt_in = true AND v_field_sms_consent IS NOT NULL THEN
      INSERT INTO contact_custom_field_values (contact_id, custom_field_id, value)
      VALUES (
        v_contact_id,
        v_field_sms_consent,
        jsonb_build_object(
          'consented', true,
          'original_consent_at', r.sms_opt_in_date,
          'imported_from', 'leadconnector',
          'imported_at', now()
        )
      )
      ON CONFLICT (contact_id, custom_field_id) DO UPDATE
        SET value = EXCLUDED.value;
    END IF;

    -- Industry custom field
    IF r.industry IS NOT NULL AND r.industry != '' AND v_field_industry IS NOT NULL THEN
      INSERT INTO contact_custom_field_values (contact_id, custom_field_id, value)
      VALUES (v_contact_id, v_field_industry, to_jsonb(r.industry))
      ON CONFLICT (contact_id, custom_field_id) DO NOTHING;
    END IF;

    -- Audit-trail timeline event so you can see the import on each contact's
    -- timeline (proves provenance + import date for compliance review)
    INSERT INTO contact_timeline (contact_id, event_type, event_data)
    VALUES (
      v_contact_id,
      'imported',
      jsonb_build_object(
        'source', 'leadconnector',
        'lc_id', r.id,
        'imported_at', now()
      )
    );
  END LOOP;

  RAISE NOTICE 'LeadConnector import complete: % inserted, % skipped (existing match)', v_inserted, v_skipped;
END $$;
```

---

## Step 4 — Verify

```sql
-- Total count check
SELECT COUNT(*) FROM contacts WHERE source = 'leadconnector_import';
-- Should match the LeadConnector export count minus the skipped duplicates

-- SMS consent count check
SELECT COUNT(*) FROM contact_custom_field_values cfv
JOIN custom_fields cf ON cf.id = cfv.custom_field_id
WHERE cf.field_key = 'sms_consent' AND cfv.value->>'consented' = 'true';

-- Spot-check timestamps preserved
SELECT cfv.value->>'original_consent_at' AS original_consent
FROM contact_custom_field_values cfv
JOIN custom_fields cf ON cf.id = cfv.custom_field_id
WHERE cf.field_key = 'sms_consent'
LIMIT 10;
```

If counts look right, drop staging:
```sql
DROP TABLE _lc_import_staging;
```

If anything looks off, you can rerun the transform after editing — it's idempotent on email match.

---

## Step 5 — Document the import

Append a row to your runbook noting:
- Export date / contact count
- Import SQL run timestamp
- Inserted vs skipped counts
- Any data-quality issues observed (missing phone numbers, etc.)

This artifact is required for the next TCPA audit since it's the chain of custody for the historical SMS consent records.
