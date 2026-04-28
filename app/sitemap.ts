import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';

const BASE = 'https://autom8ionlab.com';

// Six industries elevated to primary navigation per LOCKED v3.
const INDUSTRIES = [
  'construction',
  'healthcare',
  'finance',
  'real-estate-property',
  'government',
  'defense',
];

// Three priority service pages + four supporting capabilities. The retired
// solutions (/process-automation, /mobile-app-development, /data-management)
// 301 redirect to /capabilities per public/_redirects.
const SOLUTIONS = [
  'software-development',
  'workflow-automation',
  'cybersecurity',
  'ai-agent-development',
  'custom-llm-systems',
  'api-integrations',
  'cloud-systems',
];

// Resource pages introduced under the LOCKED v3 IA expansion.
const RESOURCE_PAGES = [
  '/capabilities',
  '/about',
  '/faq',
  '/case-studies',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const today = new Date();
  const posts = await getAllPosts();

  return [
    { url: `${BASE}/`, lastModified: today, changeFrequency: 'weekly', priority: 1.0 },

    // Industries — promoted above services per LOCKED v3 IA.
    ...INDUSTRIES.map((slug) => ({
      url: `${BASE}/industries/${slug}`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.95,
    })),

    // Capability statement is high-priority federal procurement asset.
    {
      url: `${BASE}/capability-statement`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Resource pages
    ...RESOURCE_PAGES.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

    { url: `${BASE}/get-in-touch`, lastModified: today, changeFrequency: 'monthly', priority: 0.9 },
    {
      url: `${BASE}/schedule-consultation`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    { url: `${BASE}/blog`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },

    ...SOLUTIONS.map((slug) => ({
      url: `${BASE}/solutions/${slug}`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),

    { url: `${BASE}/join-us`, lastModified: today, changeFrequency: 'monthly', priority: 0.5 },
    {
      url: `${BASE}/privacy`,
      lastModified: new Date('2025-08-17'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE}/terms`,
      lastModified: new Date('2025-08-17'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...posts.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: new Date(post.published_at),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
