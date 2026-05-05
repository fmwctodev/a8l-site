# Phase B — Plivo SMS Rail Activation

Configure a8l-os to send proactive SMS via Plivo (replacing LeadConnector). Most of the infrastructure already exists from earlier Plivo work — this Phase wires up the workflows that consume the events the form-submit Edge Function already emits.

---

## What's already in place (audited 2026-05-05)

✅ **Plivo account connected** — `plivo_connection.status = 'connected'`, auth_id `MAYWQWOTBMNJETZJJJMY`
✅ **Two phone numbers provisioned and active:**
  - `+1 813-320-9652` (Plant City, FL local — **default SMS**, set during Phase B execution)
  - `+1 888-984-3641` (toll-free)
✅ **Plivo Edge Functions deployed** — `plivo-sms-send`, `plivo-sms-status`, `plivo-sms-inbound`, `plivo-voice-*`
✅ **Workflow engine in place** — `workflow-processor` Edge Function polls `event_outbox`, dispatches by `event_type → workflow_triggers.trigger_type`
✅ **`form_submitted` / `opportunity_created` trigger types** added to `workflow_trigger_type` enum (Phase A migration `20260505120400`)
✅ **Form-submit Edge Function emits both events** — `form_submitted` for every submission, `opportunity_created` whenever a form auto-creates an opportunity

---

## What's left

The single missing piece: **published workflow records** with node graphs that consume those events and call `plivo-sms-send`. Workflow definitions are non-trivial node graphs (react-flow JSON) that the visual builder produces. Seeding them directly via SQL is brittle and skips the validation the UI does — the right path is to build them in the a8l-os Workflow Builder UI.

### Workflows to build in `os.autom8ionlab.com → Automation → Workflows`

#### Workflow 1: "Inbound — New Lead Welcome SMS"
- **Trigger:** `form_submitted`
- **Trigger filter:** `payload.form_id` equals the get-in-touch form's UUID
- **Filter:** Contact custom field `sms_consent` is `true` (TCPA gate)
- **Filter:** Contact `phone` is not null
- **Action:** `send_sms` via Plivo
- **Body (160 char single segment):**
  > Autom8ion Lab: Hey {{contact.first_name}}, got your inquiry — Sean will reply within 1 business day. Reply STOP to opt out, HELP for help. Msg & data rates may apply.
- **Status:** Keep as DRAFT until Phase C clears (TCR Plivo campaign approved)

#### Workflow 2: "Inbound — Appointment Confirmation"
- **Trigger:** `appointment_booked`
- **Filter:** Contact has `sms_consent = true`
- **Action:** `send_sms`
- **Body:**
  > Autom8ion Lab: Confirming your call with Sean on {{appointment.date}} at {{appointment.time}} ET. Reply C to confirm, R to reschedule, STOP to opt out.

#### Workflow 3: "Inbound — Appointment Reminder (24h before)"
- **Trigger:** `appointment_booked` with delay-until = appointment.start_at - 24h
- **Action:** `send_sms`
- **Body:**
  > Autom8ion Lab: Reminder — your call with Sean is tomorrow at {{appointment.time}} ET. {{calendar_link}} Reply STOP to opt out, HELP for help.

#### Workflow 4: "Project Status Update (manual trigger)"
- **Trigger:** Manual (rep clicks "Send SMS update" from opportunity detail card) OR `opportunity_stage_changed`
- **Action:** `send_sms`
- **Body:** Configurable per-send. Template:
  > Autom8ion Lab: {{contact.first_name}}, your {{opportunity.name}} milestone is ready in the client portal: os.autom8ionlab.com/client-portal. Reply STOP, HELP.

#### Workflow 5 (REQUIRED): "SMS Opt-In Confirmation"
- **Trigger:** Contact custom field `sms_consent` set to `true` (use `contact_updated` trigger with field filter)
- **Action:** `send_sms`
- **Body (carrier-required initial opt-in confirmation):**
  > Autom8ion Lab: Thanks for subscribing! You'll get appointment reminders, project updates & support msgs. Msg freq varies. Msg & data rates may apply. Reply HELP for help, STOP to opt out.

#### Workflow 6 (REQUIRED): "STOP / HELP / START Auto-Reply"
- **Trigger:** Inbound SMS received with body matching `^(STOP|UNSUBSCRIBE|CANCEL|END|QUIT|STOPALL|HELP|INFO|START|UNSTOP)$`
- **Action:** Branch on body, send appropriate reply (verbatim wording from the TCR application — see `phase-c-tcr-plivo-reregistration.md`)
- **Action:** If STOP variant → also flip contact's `sms_consent` to `false`
- **Action:** If START variant → flip back to `true`

These auto-replies are TCPA-mandated. Without workflow 6 the campaign will fail compliance auditing.

---

## Once workflows are built

1. Keep all workflows in **DRAFT** status until Phase C is approved by TCR.
2. Day Phase C clears: in a coordinated change window, set all 6 workflows to `published` AND disable the corresponding LeadConnector workflows in the LeadConnector dashboard.
3. Smoke-test by submitting `/get-in-touch` with a real phone number + SMS consent and verifying the welcome SMS arrives via Plivo.
4. Watch the `messages` table in a8l-os for the first 24h to confirm `delivery_status = 'delivered'` on real outbound traffic.

---

## TCPA gate — the audit trail

Every SMS workflow MUST gate on `sms_consent = true` before sending. The form-submit Edge Function writes the consent value to the `sms_consent` contact custom field with a timestamp, but the workflow filter is what protects you legally. Triple-check this filter exists in workflows 1–4.

For the existing imported contacts that came in via LeadConnector pre-migration, the `sms_consent` value will be backfilled by Phase D's data import (it preserves the original LeadConnector opt-in timestamp). Workflows reference the same field key — no per-source branching needed.

---

## Deferred — to revisit if/when needed

- **AI-personalized SMS bodies.** The workflow engine has AI action nodes. Tempting to plug an LLM in to personalize the welcome SMS based on `industry`/`urgency`. Out of scope for v1 — start with static templates, measure conversion, add personalization later.
- **MMS (image attachments).** `plivo-sms-send` supports MMS via `mediaUrls`. Not used in any current workflow but available if the team wants to send capability statements as MMS attachments later.
- **Outbound campaigns / broadcasts.** Out of scope for the approved Mixed campaign. Adding mass-send broadcast workflows would require a separate TCR campaign registration (Marketing use case) which is a much higher bar.
