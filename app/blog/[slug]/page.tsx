import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Clock, Calendar, ArrowLeft, CheckCircle2, TrendingUp, Award } from 'lucide-react';
import { getAllPostSlugs, getPostBySlug } from '@/lib/posts';
import ReadingProgress from '@/app/_components/blog/ReadingProgress';
import TableOfContents from '@/app/_components/blog/TableOfContents';
import ShareButtons from '@/app/_components/blog/ShareButtons';
import { ArticleSchema, BreadcrumbSchema } from '@/app/_components/Schema';

interface Props {
  params: Promise<{ slug: string }>;
}

// Pre-render every post that exists in Supabase at build time, then revalidate
// every 60 seconds so updates flow through without a redeploy.
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const revalidate = 60;
// Allow new posts added to Supabase after build to be statically rendered on first request.
export const dynamicParams = true;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return { title: 'Post not found' };
  }

  const url = `https://autom8ionlab.com/blog/${post.slug}`;
  const title = post.meta_title ?? post.title;
  const description = post.meta_description ?? post.excerpt;

  return {
    title,
    description,
    keywords: post.tags.join(', '),
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title,
      description,
      url,
      images: [{ url: post.og_image ?? post.hero_image, width: 1200, height: 630 }],
      publishedTime: post.published_at,
      modifiedTime: post.date_modified ?? post.published_at,
      authors: [post.author],
      ...(post.article_section ? { section: post.article_section } : {}),
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [post.og_image ?? post.hero_image],
    },
  };
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  // Reasonable wordCount estimate from the rendered HTML body (rough — strips
  // tags, splits on whitespace). Article schema rewards specificity here.
  const wordCount = post.content
    .replace(/<[^>]+>/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;

  const postUrl = `https://autom8ionlab.com/blog/${post.slug}`;

  return (
    <div className="min-h-screen bg-slate-950">
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        datePublished={post.published_at}
        dateModified={post.date_modified ?? post.published_at}
        url={postUrl}
        imageUrl={post.og_image ?? post.hero_image}
        articleSection={post.article_section ?? undefined}
        keywords={post.tags}
        wordCount={wordCount}
      />
      <BreadcrumbSchema
        trail={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <ReadingProgress />

      <div className="relative pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-slate-950 to-slate-950" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(rgba(6,182,212,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.08) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse at top, black 30%, transparent 75%)',
          }}
        />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all articles
          </Link>

          {post.article_section && (
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-300 text-xs font-semibold tracking-wider uppercase">
                {post.article_section}
              </span>
            </div>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
            {post.title}
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl">{post.excerpt}</p>

          <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="text-white font-semibold text-sm">{post.author}</div>
                {post.author_title && <div className="text-slate-400 text-xs">{post.author_title}</div>}
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.published_at}>{formatDate(post.published_at)}</time>
            </div>

            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Clock className="w-4 h-4" />
              <span>{post.reading_time_minutes} min read</span>
            </div>

            <ShareButtons title={post.title} />
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-slate-800/60 text-cyan-300 rounded-full border border-slate-700"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <article className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_250px] gap-12">
            <div className="max-w-4xl">
              <div className="relative mb-12 rounded-2xl overflow-hidden border border-slate-800 group">
                <div className="absolute -inset-px bg-gradient-to-br from-blue-500/40 via-transparent to-cyan-500/40 rounded-2xl pointer-events-none" />
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-cyan-500/30 blur-3xl pointer-events-none" />
                <div className="relative rounded-2xl overflow-hidden bg-slate-950">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent z-10 pointer-events-none" />
                  <Image
                    src={post.hero_image}
                    alt={post.title}
                    width={1600}
                    height={900}
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    priority
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-12">
                <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-xl p-6 border border-blue-700/30">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="w-6 h-6 text-blue-400" />
                    <span className="text-blue-300 font-semibold">Expert Insights</span>
                  </div>
                  <p className="text-slate-300 text-sm">Industry-leading automation strategies</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-xl p-6 border border-cyan-700/30">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="w-6 h-6 text-cyan-400" />
                    <span className="text-cyan-300 font-semibold">Data-Driven</span>
                  </div>
                  <p className="text-slate-300 text-sm">Real performance metrics & ROI</p>
                </div>
                <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-xl p-6 border border-green-700/30">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-6 h-6 text-green-400" />
                    <span className="text-green-300 font-semibold">Actionable</span>
                  </div>
                  <p className="text-slate-300 text-sm">Practical implementation guidance</p>
                </div>
              </div>

              <div
                data-blog-content
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-16 pt-12 border-t border-slate-800">
                <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 rounded-2xl p-8 border border-slate-700 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10" />
                  <div className="relative z-10">
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Ready to Transform Your Business with AI Automation?
                    </h2>
                    <p className="text-slate-300 mb-6">
                      Let&apos;s discuss how custom automation solutions can deliver measurable results for your specific business needs.
                    </p>
                    <Link
                      href="/schedule-consultation"
                      className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Schedule a Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <TableOfContents />
          </div>
        </div>
      </article>
    </div>
  );
}
