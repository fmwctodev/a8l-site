import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const allow = '/';
  return {
    rules: [
      { userAgent: 'Googlebot', allow },
      { userAgent: 'Bingbot', allow },
      { userAgent: 'GPTBot', allow },
      { userAgent: 'PerplexityBot', allow },
      { userAgent: 'ClaudeBot', allow },
      { userAgent: 'Google-Extended', allow },
      { userAgent: 'anthropic-ai', allow },
      { userAgent: 'Applebot-Extended', allow },
      { userAgent: 'CCBot', allow },
      { userAgent: 'ChatGPT-User', allow },
      {
        userAgent: '*',
        allow,
        disallow: ['/thank-you', '/application-received', '/aiads-vsl', '/nist-checklist'],
      },
    ],
    sitemap: 'https://autom8ionlab.com/sitemap.xml',
  };
}
