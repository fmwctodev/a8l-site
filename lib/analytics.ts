// Thin wrapper around the GA4 / GTM dataLayer + gtag bridge so calling code
// never has to type-guard `window.gtag` itself. SSR-safe (no-op on the server).
// Per the LOCKED v3 SEO+AEO Implementation Plan §11.3 conversion event list.

type GtagEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: 'event' | 'config' | 'set', action: string, params?: GtagEventParams) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Fire a GA4 event. No-ops in SSR or if gtag hasn't loaded yet (e.g., adblock,
 * connection drop). Always returns void; never throws.
 */
export function trackEvent(action: string, params: GtagEventParams = {}): void {
  if (typeof window === 'undefined') return;
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', action, {
        page_path: window.location.pathname,
        ...params,
      });
    } else if (Array.isArray(window.dataLayer)) {
      // Fallback if gtag function isn't bound but the layer is — still gets
      // picked up by GTM and forwarded to GA4.
      window.dataLayer.push({
        event: action,
        page_path: window.location.pathname,
        ...params,
      });
    }
  } catch {
    // Analytics must never break user flows.
  }
}

/* Concrete conversion events — keep names stable across the codebase so
   GA4 funnels don't drift. Per Implementation Plan §11.3. */

export const conversionEvents = {
  formSubmitConsultation: () => trackEvent('form_submit_consultation'),
  formSubmitBriefing: () => trackEvent('form_submit_briefing'),
  formSubmitCapability: (params?: GtagEventParams) =>
    trackEvent('form_submit_capability', params),
  formSubmitContact: (params?: GtagEventParams) =>
    trackEvent('form_submit_contact', params),
  formSubmitCareers: (params?: GtagEventParams) =>
    trackEvent('form_submit_careers', params),
  downloadCapabilityPdf: () => trackEvent('download_capability_pdf'),
  phoneClick: () => trackEvent('phone_click'),
  emailClick: () => trackEvent('email_click'),
} as const;
