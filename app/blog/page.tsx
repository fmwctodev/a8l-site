import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, TrendingUp } from 'lucide-react';
import BlogCard from '@/app/_components/BlogCard';
import { Reveal, Stagger, StaggerItem, MagneticButton } from '@/app/_components/ui';
import { getAllPosts } from '@/lib/posts';
import { BreadcrumbSchema } from '@/app/_components/Schema';

export const metadata: Metadata = {
  title: 'Engineering Insights',
  description:
    'Engineering insights on custom AI, workflow automation, LLM systems, and compliance — written by builders for technical decision-makers.',
  alternates: { canonical: 'https://autom8ionlab.com/blog' },
  openGraph: {
    title: 'Engineering Insights | Autom8ion Lab',
    description:
      'Engineering insights on custom AI, workflow automation, LLM systems, and compliance — written by builders for technical decision-makers.',
    url: 'https://autom8ionlab.com/blog',
    images: [{
      url: 'https://autom8ionlab.com/api/og?title=Engineering+Insights&section=Blog',
      width: 1200,
      height: 630,
      alt: 'Autom8ion Lab Engineering Insights',
    }],
  },
  twitter: {
    title: 'Engineering Insights | Autom8ion Lab',
    description:
      'Engineering insights on custom AI, workflow automation, LLM systems, and compliance — written by builders for technical decision-makers.',
    images: ['https://autom8ionlab.com/api/og?title=Engineering+Insights&section=Blog'],
  },
};

// Revalidate every 60 seconds. New posts published in Supabase show up
// at /blog within a minute without a redeploy.
export const revalidate = 60;

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  // Blog schema lists every post as BlogPosting children. Publisher uses
  // @id ref to resolve back to the sitewide Organization in app/layout.tsx.
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://autom8ionlab.com/blog#blog',
    name: 'Autom8ion Lab Blog',
    url: 'https://autom8ionlab.com/blog',
    description:
      'Engineering insights on custom AI, workflow automation, LLM systems, and compliance — written by builders for technical decision-makers.',
    inLanguage: 'en-US',
    publisher: { '@id': 'https://autom8ionlab.com/#organization' },
    ...(posts.length > 0
      ? {
          blogPost: posts.map((p) => ({
            '@type': 'BlogPosting',
            headline: p.title,
            url: `https://autom8ionlab.com/blog/${p.slug}`,
            datePublished: p.published_at,
            description: p.excerpt,
            image: p.hero_image,
            keywords: p.tags.join(', '),
          })),
        }
      : {}),
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BreadcrumbSchema
        trail={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
        ]}
      />

      <div className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-6">
                <BookOpen className="w-8 h-8 text-cyan-400" />
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                  Automation{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Insights
                  </span>
                </h1>
              </div>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Expert insights on AI automation, workflow optimization, and building scalable systems that deliver measurable results.
              </p>
            </div>
          </Reveal>

          {posts.length === 0 ? (
            <div className="text-center py-20">
              <TrendingUp className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <p className="text-xl text-slate-400">No articles yet. Check back soon!</p>
            </div>
          ) : (
            <>
              <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.08}>
                {posts.map((post) => (
                  <StaggerItem key={post.id}>
                    <BlogCard
                      slug={post.slug}
                      title={post.title}
                      excerpt={post.excerpt}
                      heroImage={post.hero_image}
                      publishedAt={post.published_at}
                      readingTimeMinutes={post.reading_time_minutes}
                      tags={post.tags}
                    />
                  </StaggerItem>
                ))}
              </Stagger>

              <div className="mt-16 text-center">
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 max-w-2xl mx-auto">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Want to Build Your Own Automation Strategy?
                  </h2>
                  <p className="text-slate-300 mb-6">
                    Our team helps businesses implement custom AI and automation solutions that deliver measurable ROI. Let&apos;s discuss your specific needs.
                  </p>
                  <Link
                    href="/schedule-consultation"
                    className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Schedule a Consultation
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
