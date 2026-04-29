import type { MetadataRoute } from 'next';

// Sitewide crawler policy. Per the LOCKED v3 SEO+AEO Implementation Plan §1.1,
// this file explicitly allows the modern AI-search ecosystem (otherwise major
// LLM providers can't cite us at all) while throttling known scrapers and
// blocking tracking-parameter URL variants from being crawled as duplicate
// content.
//
// Verified-allow list ordered by AI-citation impact:
//   - Standard search engines first
//   - Major LLM providers (OpenAI, Anthropic, Google, Apple, Meta, Perplexity)
//   - Long-tail AI / search agents (Cohere, Bytedance, Amazon, DuckDuckGo, You,
//     Diffbot, Common Crawl)
//
// Block list at bottom is conservative — only known-abusive scrapers. Add to
// it only if server logs show real harm.

export default function robots(): MetadataRoute.Robots {
  const allow = '/';
  const blockTrackingParams = ['/*?utm_*', '/*?fbclid=', '/*?gclid=', '/*?ref=', '/*?source='];

  return {
    rules: [
      // Search engines
      { userAgent: 'Googlebot', allow },
      { userAgent: 'Bingbot', allow },
      { userAgent: 'DuckDuckBot', allow },

      // OpenAI
      { userAgent: 'GPTBot', allow },
      { userAgent: 'ChatGPT-User', allow },
      { userAgent: 'OAI-SearchBot', allow },

      // Perplexity
      { userAgent: 'PerplexityBot', allow },
      { userAgent: 'Perplexity-User', allow },

      // Anthropic
      { userAgent: 'ClaudeBot', allow },
      { userAgent: 'Claude-Web', allow },
      { userAgent: 'anthropic-ai', allow },

      // Google AI
      { userAgent: 'Google-Extended', allow },

      // Apple
      { userAgent: 'Applebot', allow },
      { userAgent: 'Applebot-Extended', allow },

      // Cohere
      { userAgent: 'cohere-ai', allow },

      // Bytedance / TikTok
      { userAgent: 'Bytespider', allow },

      // Amazon
      { userAgent: 'Amazonbot', allow },

      // Meta
      { userAgent: 'Meta-ExternalAgent', allow },
      { userAgent: 'Meta-ExternalFetcher', allow },

      // DuckDuckGo AI
      { userAgent: 'DuckAssistBot', allow },

      // You.com
      { userAgent: 'YouBot', allow },

      // Diffbot
      { userAgent: 'Diffbot', allow },

      // Common Crawl
      { userAgent: 'CCBot', allow },

      // Throttle Ahrefs (we want their data but not unbounded crawl load)
      { userAgent: 'AhrefsBot', allow, crawlDelay: 10 },

      // Block known abusive scrapers
      { userAgent: 'SemrushBot-SA', disallow: '/' },
      { userAgent: 'MJ12bot', disallow: '/' },
      { userAgent: 'PetalBot', disallow: '/' },
      { userAgent: 'DotBot', disallow: '/' },

      // Default rule for any user-agent not explicitly listed above.
      // Disallows private routes + tracking-parameter URL variants so search
      // engines don't index duplicate copies of the same page.
      {
        userAgent: '*',
        allow,
        disallow: [
          '/thank-you',
          '/application-received',
          '/aiads-vsl',
          '/nist-checklist',
          ...blockTrackingParams,
        ],
      },
    ],
    sitemap: 'https://autom8ionlab.com/sitemap.xml',
  };
}
