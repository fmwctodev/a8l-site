import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { createClient } from '@supabase/supabase-js';
import { Clock, Calendar, ArrowLeft, Share2, Linkedin, Facebook, CheckCircle2, TrendingUp, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getCanonicalUrl, buildJsonLd } from '../utils/seo';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface BlogPostData {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  hero_image: string;
  author: string;
  published_at: string;
  reading_time_minutes: number;
  tags: string[];
  meta_title: string;
  meta_description: string;
  date_modified: string | null;
  author_title: string | null;
  author_linkedin: string | null;
  og_image: string | null;
  article_section: string | null;
}

interface TocItem {
  id: string;
  text: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .maybeSingle();

        if (error) throw error;

        if (!data) {
          navigate('/blog');
          return;
        }

        setPost(data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
        navigate('/blog');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, navigate]);

  useEffect(() => {
    if (!post || !contentRef.current) return;

    const headings = contentRef.current.querySelectorAll('h2');
    const items: TocItem[] = [];
    headings.forEach((heading, index) => {
      const id = `section-${index}`;
      heading.id = id;
      items.push({ id, text: heading.textContent || '' });
    });
    setTocItems(items);
  }, [post]);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setReadingProgress(Math.min(progress, 100));

      const sections = contentRef.current.querySelectorAll('h2');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id || '');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  const shareOnTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(post?.title || '');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Helmet>
        <title>{post.meta_title || post.title}</title>
        <meta name="description" content={post.meta_description || post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <link rel="canonical" href={getCanonicalUrl(`/blog/${post.slug}`)} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.meta_title || post.title} />
        <meta property="og:description" content={post.meta_description || post.excerpt} />
        <meta property="og:image" content={post.og_image || post.hero_image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={`https://autom8ionlab.com/blog/${post.slug}`} />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@autom8ionlab" />
        <meta name="twitter:title" content={post.meta_title || post.title} />
        <meta name="twitter:description" content={post.meta_description || post.excerpt} />
        <meta name="twitter:image" content={post.og_image || post.hero_image} />
        <meta property="article:published_time" content={post.published_at} />
        {post.date_modified && <meta property="article:modified_time" content={post.date_modified} />}
        <meta property="article:author" content={post.author} />
        {post.article_section && <meta property="article:section" content={post.article_section} />}
        {post.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        <script type="application/ld+json">
          {buildJsonLd({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "image": post.og_image || post.hero_image,
            "datePublished": post.published_at,
            "dateModified": post.date_modified || post.published_at,
            "inLanguage": "en-US",
            "keywords": post.tags.join(', '),
            ...(post.article_section ? { "articleSection": post.article_section } : {}),
            "author": {
              "@type": "Person",
              "name": post.author,
              ...(post.author_title ? { "jobTitle": post.author_title } : {}),
              ...(post.author_linkedin ? { "sameAs": post.author_linkedin } : {}),
              "worksFor": { "@type": "Organization", "name": "Autom8ion Lab" }
            },
            "publisher": {
              "@type": "Organization",
              "name": "Autom8ion Lab",
              "logo": { "@type": "ImageObject", "url": "https://autom8ionlab.com/logo/logo.png" }
            },
            "description": post.excerpt,
            "mainEntityOfPage": { "@type": "WebPage", "@id": `https://autom8ionlab.com/blog/${post.slug}` }
          })}
        </script>
        <script type="application/ld+json">
          {buildJsonLd({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://autom8ionlab.com/" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://autom8ionlab.com/blog" },
              { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://autom8ionlab.com/blog/${post.slug}` }
            ]
          })}
        </script>
      </Helmet>

      <Header />

      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 shadow-[0_0_12px_rgba(6,182,212,0.7)]"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

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
            to="/blog"
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

          <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="text-white font-semibold text-sm">{post.author}</div>
                {post.author_title && (
                  <div className="text-slate-400 text-xs">{post.author_title}</div>
                )}
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

            <div className="flex items-center gap-3 ml-auto">
              <span className="text-slate-500 text-xs uppercase tracking-wider">Share</span>
              <button
                onClick={shareOnLinkedIn}
                className="w-9 h-9 rounded-lg bg-slate-800/60 border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all flex items-center justify-center"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </button>
              <button
                onClick={shareOnFacebook}
                className="w-9 h-9 rounded-lg bg-slate-800/60 border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all flex items-center justify-center"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </button>
              <button
                onClick={shareOnTwitter}
                className="w-9 h-9 rounded-lg bg-slate-800/60 border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all flex items-center justify-center"
                aria-label="Share on Twitter"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
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
              <img
                src={post.hero_image}
                alt={post.title}
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
            ref={contentRef}
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
                  Let's discuss how custom automation solutions can deliver measurable results for your specific business needs.
                </p>
                <Link
                  to="/schedule-consultation"
                  className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-32">
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800 shadow-xl">
                  <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-cyan-400" />
                    Reading Progress
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-400">Article Progress</span>
                        <span className="text-cyan-400 font-semibold">{Math.round(readingProgress)}%</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300"
                          style={{ width: `${readingProgress}%` }}
                        />
                      </div>
                    </div>

                    {tocItems.length > 0 && (
                      <div className="pt-4 border-t border-slate-800">
                        <p className="text-slate-400 text-xs uppercase tracking-wider mb-3 font-medium">Sections</p>
                        <nav aria-label="Table of contents">
                          <div className="space-y-2">
                            {tocItems.map((item, index) => {
                              const threshold = ((index + 1) / tocItems.length) * 100;
                              const isRead = readingProgress >= threshold - (100 / tocItems.length);
                              return (
                                <a
                                  key={item.id}
                                  href={`#${item.id}`}
                                  className={`flex items-start gap-2 text-sm transition-colors hover:text-cyan-400 ${activeSection === item.id ? 'text-cyan-400' : isRead ? 'text-slate-300' : 'text-slate-500'}`}
                                >
                                  <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isRead ? 'text-green-400' : 'text-slate-600'}`} />
                                  <span className="line-clamp-2">{item.text}</span>
                                </a>
                              );
                            })}
                          </div>
                        </nav>
                      </div>
                    )}

                    {readingProgress === 100 && (
                      <div className="mt-4 p-4 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg border border-green-700/30">
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-5 h-5 text-green-400" />
                          <span className="text-green-300 font-semibold">Article Complete!</span>
                        </div>
                        <p className="text-slate-300 text-sm">You've finished reading</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
