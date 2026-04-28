import type { DetailedHTMLProps, HTMLAttributes } from 'react';

declare global {
  interface Window {
    __lighthouse?: unknown;
  }

  namespace JSX {
    interface IntrinsicElements {
      'vapi-widget': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        'public-key'?: string;
        'assistant-id'?: string;
        mode?: string;
        theme?: string;
        'base-bg-color'?: string;
        'accent-color'?: string;
        'cta-button-color'?: string;
        'cta-button-text-color'?: string;
        'border-radius'?: string;
        size?: string;
        position?: string;
        title?: string;
        'start-button-text'?: string;
        'end-button-text'?: string;
        'cta-title'?: string;
        'chat-first-message'?: string;
        'chat-placeholder'?: string;
        'voice-show-transcript'?: string;
        'consent-required'?: string;
        'consent-title'?: string;
        'consent-content'?: string;
        'consent-storage-key'?: string;
      };
      'spline-viewer': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        url?: string;
        loading?: string;
      };
    }
  }
}

export {};
