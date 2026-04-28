import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';

const BASE = 'https://autom8ionlab.com';

const SOLUTIONS = [
  'ai-agent-development',
  'workflow-automation',
  'process-automation',
  'api-integrations',
  'custom-llm-systems',
  'software-development',
  'mobile-app-development',
  'cybersecurity',
  'cloud-systems',
  'data-management',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const today = new Date();
  const posts = await getAllPosts();

  return [
    { url: `${BASE}/`, lastModified: today, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/get-in-touch`, lastModified: today, changeFrequency: 'monthly', priority: 0.9 },
    {
      url: `${BASE}/schedule-consultation`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    { url: `${BASE}/blog`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    {
      url: `${BASE}/capability-statement`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...SOLUTIONS.map((slug) => ({
      url: `${BASE}/solutions/${slug}`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
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
