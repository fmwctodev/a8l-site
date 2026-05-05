# Phase C — 10DLC Campaign Re-Registration with Plivo

The brand `Sitehues Media Inc.` is already approved by The Campaign Registry (TCR) under EIN `87-4307995` — this Phase only re-registers the **campaign** (not the brand) under Plivo as the new SMS sending provider.

Wall-clock: 2-4 weeks for carrier review. During the wait window, proactive SMS does not fire (1:1 inbound handling continues to work normally on the LeadConnector rail until cutover).

## Status as of 2026-05-05

✅ **Plivo account connected** to a8l-os
✅ **Two phone numbers active** in Plivo: `+1 813-320-9652` (Plant City local — default SMS) and `+1 888-984-3641` (toll-free)
✅ **Form-submit captures sms_consent** with timestamp on every submission
✅ **Privacy policy + terms** already reflect Plivo as SMS provider

⏳ **Workflows in a8l-os** must be built in the UI (see [phase-b-plivo-sms-rail.md](./phase-b-plivo-sms-rail.md)) BEFORE submitting Phase C, because TCR reviewers may attempt a test message during validation.

⏳ **THIS phase is YOUR action** — TCR campaign submission requires logging into Plivo Console and clicking through the campaign creation flow. There is no API endpoint that can submit on your behalf. Application copy below is paste-ready.

---

---

## When to start Phase C

After Phase B is verified working (a8l-os emits `form_submitted` / `opportunity_created` events to event_outbox AND at least one workflow consumes them and calls `plivo-sms-send` end-to-end with a real test contact). Phase D was skipped — no data migration to wait on. Once Phase B is proven, submit Phase C immediately.

---

## Step 1 — Resubmit the brand to Plivo's brand registry

Most carriers require the brand to be linked under your new SMS provider's TCR account before you can register a campaign. Plivo's portal:

1. Plivo Console → Messaging → A2P 10DLC → Brands → "Add Brand"
2. Choose "Use existing TCR Brand" (since `Sitehues Media Inc.` is already approved)
3. Provide the existing TCR Brand ID — find it in your TCR portal under "Brands"
4. Plivo will link the brand to your Plivo account; usually instant, occasionally manual review

If Plivo requires re-providing brand details (some providers do):
- **Legal company name:** Sitehues Media Inc.
- **DBA / brand name:** Autom8ion Lab
- **EIN:** 87-4307995
- **Entity type:** Private for-profit corporation (Florida)
- **Vertical:** Professional Services (Technology / Engineering)
- **Website:** https://autom8ionlab.com
- **Support email:** info@autom8ionlab.com
- **Support phone:** +1 855-508-6062

---

## Step 2 — Submit a new campaign under Plivo

Plivo Console → Messaging → A2P 10DLC → Campaigns → "Create Campaign"

### Campaign use case
```
Mixed (Customer Care + Account Notification)
```

### Campaign description (paste verbatim)
```
Sitehues Media Inc., operating as Autom8ion Lab, is a veteran-owned B2B
engineering firm that builds custom AI, automation, and software for
mid-market companies in regulated industries (construction, healthcare,
finance, real estate, US federal/state/local government, and the Defense
Industrial Base).

This campaign sends low-volume, conversational SMS to prospects and active
clients who have explicitly opted in via a TCPA-compliant checkbox on our
website contact form (https://autom8ionlab.com/get-in-touch). All messages
fall into one of four categories:

1. APPOINTMENT CONFIRMATIONS & REMINDERS — Confirming and reminding clients
   of scheduled discovery calls, technical briefings, and project working
   sessions booked through our consultation page.

2. PROJECT STATUS UPDATES — Sending milestone notifications, deliverable-
   ready alerts, and time-sensitive coordination messages to active clients
   during ongoing engagements.

3. CAPABILITY STATEMENT & PROPOSAL DELIVERY — Notifying federal/state
   government and prime contractor contacts when a requested capability
   statement, proposal, or RFI/RFP response has been emailed to them.

4. CUSTOMER SUPPORT REPLIES — Responding 1:1 to inbound questions from
   existing clients about active projects, billing, or technical issues.

We do not send promotional broadcasts, marketing blasts, or unsolicited
messages. Estimated volume: under 500 messages per month across our
entire pipeline. All recipients are US-based business contacts who have
provided their mobile number AND checked an SMS consent box on our
contact form, which writes a timestamped consent record to our internal
CRM (a8l-os).

Opt-in URL:        https://autom8ionlab.com/get-in-touch
Privacy Policy:    https://autom8ionlab.com/privacy
Terms of Service:  https://autom8ionlab.com/terms
EIN:               87-4307995
SMS Provider:      Plivo
```

### Sample messages (paste 4)
```
Sample 1 — Appointment confirmation
"Autom8ion Lab: Hi {{first_name}}, confirming your discovery call with
Sean on {{date}} at {{time}} ET. Reply C to confirm, R to reschedule,
or STOP to opt out. Msg & data rates may apply."

Sample 2 — Project status update
"Autom8ion Lab: {{first_name}}, your {{project_name}} milestone is ready
for review in the client portal: os.autom8ionlab.com/client-portal.
Reply HELP for help, STOP to unsubscribe."

Sample 3 — Capability statement delivery
"Autom8ion Lab: Hi {{first_name}}, the capability statement you requested
has been emailed to {{email}}. UEI YY2DR3KSENH7, CAGE 9YCS7. Reply STOP
to opt out."

Sample 4 — Support reply
"Autom8ion Lab: Got your question about {{topic}} — Sean will follow up
with details by EOD. Reply STOP to unsubscribe, HELP for help."
```

### Opt-in / opt-out / help / start keywords + replies
```
Opt-in keyword(s):    START, UNSTOP
Opt-in flow:          Double opt-in via TCPA checkbox at
                      https://autom8ionlab.com/get-in-touch
                      followed by an automated confirmation SMS.

Initial opt-in confirmation (sent immediately after web-form checkbox):
"Autom8ion Lab: Thanks for subscribing! You'll get appointment
 reminders, project updates & support msgs. Msg freq varies.
 Msg & data rates may apply. Reply HELP for help, STOP to opt out."

Opt-out keyword(s):   STOP, STOPALL, UNSUBSCRIBE, CANCEL, END, QUIT
Opt-out message:      "Autom8ion Lab: You're unsubscribed and will not
                       receive further messages. Reply HELP for help or
                       email info@autom8ionlab.com."

Help keyword(s):      HELP, INFO
Help message:         "Autom8ion Lab support: info@autom8ionlab.com or
                       +1 855-508-6062. Msg & data rates may apply.
                       Reply STOP to opt out."

Re-subscribe keyword: START, UNSTOP
START reply:          "Autom8ion Lab: You're re-subscribed and will
                       receive messages again. Msg frequency varies.
                       Msg & data rates may apply. Reply HELP for help,
                       STOP to opt out."
```

### Opt-in disclosure language (verbatim TCPA disclosure shown next to the form checkbox)
```
By checking this box, I authorize Autom8ion Lab (Sitehues Media Inc.) to
send me SMS text messages about my inquiry, scheduled appointments, and
project updates at the mobile number provided. Message frequency varies.
Message and data rates may apply. Reply STOP to opt out at any time, or
HELP for help. Consent is not a condition of purchase. See our Privacy
Policy and Terms of Service.
```

This language is already implemented in the `GamifiedContactForm` component on `/get-in-touch` (conditional checkbox shown when phone is provided).

---

## Step 3 — Wait

Carriers (T-Mobile, AT&T, Verizon) review the campaign within 2-4 business days each. Plivo aggregates the verdicts. You typically see status updates in the Plivo Console.

While waiting:
- Inbound SMS via LeadConnector still works (numbers are still active there)
- Outbound SMS via LeadConnector still works (campaign is still approved on that provider)
- Outbound SMS via Plivo will be queued / blocked until campaign approval
- DO NOT enable the a8l-os SMS workflows yet — keep them in "draft" status until Phase C clears

---

## Step 4 — Cutover (the day Plivo campaign is approved)

A coordinated change window — ideally during a low-traffic period (early morning weekday for B2B):

1. **In a8l-os UI:** Set all SMS-sending workflows to `published` status (`workflows.status = 'published'`).
2. **In LeadConnector dashboard:** Disable the corresponding LeadConnector workflows (don't delete — keep as fallback for 7 days).
3. **Smoke test:** Manually trigger a `form_submitted` event for a test contact and confirm SMS arrives via Plivo.
4. **Monitor `messages` table** for 24 hours to confirm `delivery_status = 'delivered'` on real outbound messages.
5. **If problems:** Re-enable LeadConnector workflows, disable a8l-os workflows, debug Phase B before retrying.

---

## Step 5 — Decommission LeadConnector SMS

After 7 days of clean Plivo operation:
- Cancel LeadConnector subscription (Phase E)
- Update privacy policy to remove all LeadConnector references (Phase E)
- Update TCR Brand → Provider mapping to Plivo only (deactivate the LeadConnector campaign in TCR if not auto-handled)
