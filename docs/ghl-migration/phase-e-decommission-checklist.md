# Phase E — LeadConnector Decommission

Final phase. Cancel LeadConnector subscription and clean up all references. Run only AFTER Phase C's Plivo cutover has been stable for 7+ days AND Phase D data migration is verified.

Estimated effort: ~2 hours of human work over a few days.

---

## Pre-decommission sanity checks (do not skip)

- [ ] Phase C clean: 7+ consecutive days of Plivo SMS deliveries with no fallback to LeadConnector
- [ ] Phase D clean: All LeadConnector contacts present in a8l-os contacts table; spot-checked 10 random consent records show preserved `original_consent_at` timestamps
- [ ] No active LeadConnector workflows still firing — check the LeadConnector dashboard's automation history for any sends in the last 7 days
- [ ] No remaining iframe embeds on the marketing site referencing `leadconnectorhq.com` or `msgsndr.com` — `grep -ri "leadconnectorhq\|msgsndr" J:\GitHub\a8l-site/app` should return zero matches outside of `_legacy_src/`
- [ ] No customer-facing communications in the last 30 days reference a LeadConnector portal URL

---

## Step 1 — Final code cleanup

After Phase A shipped, the marketing site no longer references LeadConnector in active code, but a few legacy text references remain. After Phase E, even those go away.

### Privacy policy: remove all remaining provider names
File: [app/privacy/page.tsx](app/privacy/page.tsx)

Replace any remaining mentions of "LeadConnector" / "Twilio" with a generic phrase. Final desired wording:

```
§5 Mobile Information & SMS Privacy — middle paragraph:

  "Specifically, mobile phone numbers collected for SMS communications,
   SMS opt-in records, and related consent data are used solely by Sitehues
   Media Inc. (DBA Autom8ion Lab) and our contracted SMS-delivery provider
   strictly for the purpose of delivering the messages you have opted in
   to receive..."

§6 Information Sharing — service provider line:

  "Authorized service providers (e.g., our SMS delivery provider, our
   internal CRM, and email service providers)"
```

Bump `lastUpdated` to the cutover date.

### Schema.tsx — knowsAbout
No LeadConnector references in `Schema.tsx` today. Skip.

### llms.txt / llms-full.txt
Search [public/llms.txt](public/llms.txt) and [public/llms-full.txt](public/llms-full.txt) for any LeadConnector mentions. Remove if found.

### Netlify env vars to remove
- `LEADCONNECTOR_API_KEY` (if exists)
- `LEADCONNECTOR_LOCATION_ID` (if exists)
- Any `GHL_*` vars

---

## Step 2 — Cancel external accounts

In this order:

1. **TCR portal** — Deactivate the LeadConnector campaign. Brand stays — it's still in use under Plivo.
2. **LeadConnector / GoHighLevel dashboard** — Subscription → Cancel. Read the cancellation policy carefully — some plans have proration; some have a final-month no-refund policy. Take a screenshot of the cancellation confirmation for your records.
3. **Domain / DNS** — If LeadConnector was sending email under your domain, remove the DKIM / SPF / verification records pointing at LeadConnector mail servers.
4. **Twilio (if separate from LeadConnector)** — If your phone numbers are owned in Twilio under a LeadConnector subaccount, port them to Plivo (separate ~2 week process) OR release them. **Coordinate with Phase C** so SMS doesn't break.

---

## Step 3 — Final verification

```bash
# From a8l-site repo root
grep -ri "leadconnectorhq\|msgsndr\|leadconnector\|gohighlevel\|GHL" \
  --include="*.ts" --include="*.tsx" --include="*.js" --include="*.json" \
  --include="*.md" --include="*.txt" \
  --exclude-dir="_legacy_src" --exclude-dir="node_modules" --exclude-dir=".next" \
  app docs public lib
```
Should return zero matches except in this `docs/ghl-migration/` directory itself (kept as historical record of the migration).

```bash
# From a8l-os repo root  
grep -ri "leadconnectorhq\|msgsndr\|leadconnector\|gohighlevel\|GHL" \
  --include="*.ts" --include="*.tsx" --include="*.sql" \
  --exclude-dir="node_modules" \
  src supabase scripts
```
Should also return zero matches.

---

## Step 4 — Post-mortem entry

Create a one-page summary doc at `docs/ghl-migration/POST-MORTEM.md` covering:
- Total wall-clock time start to finish
- Contact count migrated
- Any consent records lost or unverifiable (should be zero — flag if not)
- Cost difference: monthly LeadConnector subscription vs. Plivo + Supabase compute
- What broke during cutover and how it was resolved
- What you'd do differently next time

---

## Step 5 — Archive these docs

Move `docs/ghl-migration/` → `docs/archive/ghl-migration-2026/` so the directory layout reflects "completed migration" rather than "in-progress migration."

The migration is done.
