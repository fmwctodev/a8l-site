# Phase E — LeadConnector Decommission

Final phase. Cancel LeadConnector subscription and clean up all references. Run only AFTER Phase C's Plivo cutover has been stable for 7+ days. (Phase D data migration was skipped per decision 2026-05-05 — historical contacts stay in LeadConnector and are not imported into a8l-os.)

Estimated effort: ~2 hours of human work over a few days.

---

## Pre-decommission sanity checks (do not skip)

- [ ] Phase C clean: 7+ consecutive days of Plivo SMS deliveries with no fallback to LeadConnector
- [ ] **TCPA archival completed (CRITICAL — read below)**
- [ ] No active LeadConnector workflows still firing — check the LeadConnector dashboard's automation history for any sends in the last 7 days
- [ ] No remaining iframe embeds on the marketing site referencing `leadconnectorhq.com` or `msgsndr.com` — `grep -ri "leadconnectorhq\|msgsndr" J:\GitHub\a8l-site/app` should return zero matches outside of `_legacy_src/`
- [ ] No customer-facing communications in the last 30 days reference a LeadConnector portal URL

---

## TCPA archival (required before cancellation)

Even though we're not importing historical contacts into a8l-os, **TCPA requires you to retain SMS consent records for any phone number you've ever sent commercial SMS to**, regardless of which provider sent it. The retention period varies by jurisdiction but the FCC default is 4 years from the last consented message; some state-level rules go longer. Plaintiffs' attorneys routinely request these records in TCPA suits.

If LeadConnector is cancelled and contacts are deleted, that audit trail vanishes — and "the data was on a vendor we cancelled" is not a valid defense.

### Minimum acceptable archival
1. **Dashboard CSV export** — LeadConnector → Contacts → Export to CSV including all custom fields. Save the file somewhere with backups (Google Drive, Dropbox, S3 — pick one with version history).
2. **Conversation history** — LeadConnector → Conversations → export the full SMS thread history per contact. This is harder; their dashboard may only let you export per-contact. If volume is small (<100 contacts), worth doing manually.
3. **File the archive** — Drop both into a single zip named `leadconnector-archive-YYYY-MM-DD.zip`, hash it, store the hash + location somewhere durable (e.g., a private Notion page, password manager note). Treat it like a tax record — you might need it 4+ years from now.

### If you ever need to look something up post-cancellation
The archive is read-only reference. If a recipient files a TCPA complaint claiming they never consented, you'll need to:
- Find their phone number in the archived CSV
- Pull the timestamped consent value (`sms_opt_in_date`)
- Pull the conversation thread showing the opt-in confirmation reply
- Provide the archive hash + access trail to your lawyer

This is a 30-minute task ONCE NOW, vs. an existential business risk LATER.

---

## Step 1 — Final code cleanup (largely already done)

Audited 2026-05-05 after Phase A:
- ✅ Privacy policy already names "Plivo" + "a8l-os" instead of "LeadConnector / Twilio" (Phase A commit)
- ✅ Terms of Service has no provider names to scrub
- ✅ `Schema.tsx` has no LeadConnector references
- ✅ `public/llms.txt` and `public/llms-full.txt` are clean
- ✅ Netlify env vars audited — no `LEADCONNECTOR_*` or `GHL_*` keys present

**Remaining residue (optional):** Two code comments at [app/get-in-touch/page.tsx:140](app/get-in-touch/page.tsx) and [app/join-us/CareersClient.tsx:252](app/join-us/CareersClient.tsx) reference LeadConnector for historical context ("Replaced LeadConnector iframe with..."). These are useful migration documentation; recommend keeping them. If you want them gone for absolute cleanliness, a one-line edit on each removes the comment.

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
