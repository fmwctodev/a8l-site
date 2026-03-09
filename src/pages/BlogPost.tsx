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
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');
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
          setActiveSection(section.textContent || '');
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
        <meta property="og:image" content={post.hero_image} />
        <meta property="og:url" content={`https://autom8ionlab.com/blog/${post.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.meta_title || post.title} />
        <meta name="twitter:description" content={post.meta_description || post.excerpt} />
        <meta name="twitter:image" content={post.hero_image} />
        <meta property="article:published_time" content={post.published_at} />
        <meta property="article:author" content={post.author} />
        {post.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        <script type="application/ld+json">
          {buildJsonLd({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "image": post.hero_image,
            "datePublished": post.published_at,
            "author": { "@type": "Organization", "name": post.author },
            "publisher": {
              "@type": "Organization",
              "name": "Autom8tion Lab",
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
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <article className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_250px] gap-12">
            <div className="max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-slate-800 text-cyan-400 rounded-full border border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-slate-400 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <time dateTime={post.published_at}>{formatDate(post.published_at)}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.reading_time_minutes} min read</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-slate-400 text-sm">Share:</span>
              <button
                onClick={shareOnLinkedIn}
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button
                onClick={shareOnFacebook}
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button
                onClick={shareOnTwitter}
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="Share on Twitter"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </header>

          <div className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
            <img
              src={post.hero_image}
              alt={post.title}
              className="w-full h-auto"
            />
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
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:scroll-mt-32
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:text-cyan-300
              prose-strong:text-white prose-strong:font-semibold
              prose-ul:text-slate-300 prose-ul:my-6
              prose-ol:text-slate-300 prose-ol:my-6
              prose-li:my-2
              prose-img:rounded-2xl prose-img:my-8 prose-img:shadow-2xl
              prose-table:border-slate-700
              prose-th:bg-slate-800 prose-th:text-white prose-th:font-semibold
              prose-td:text-slate-300
              prose-code:text-cyan-400 prose-code:bg-slate-800 prose-code:px-2 prose-code:py-1 prose-code:rounded"
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

                    <div className="pt-4 border-t border-slate-800">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className={`w-4 h-4 ${readingProgress > 20 ? 'text-green-400' : 'text-slate-600'}`} />
                          <span className={readingProgress > 20 ? 'text-slate-300' : 'text-slate-500'}>Introduction</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className={`w-4 h-4 ${readingProgress > 40 ? 'text-green-400' : 'text-slate-600'}`} />
                          <span className={readingProgress > 40 ? 'text-slate-300' : 'text-slate-500'}>Traditional Automation</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className={`w-4 h-4 ${readingProgress > 60 ? 'text-green-400' : 'text-slate-600'}`} />
                          <span className={readingProgress > 60 ? 'text-slate-300' : 'text-slate-500'}>AI Agents</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className={`w-4 h-4 ${readingProgress > 80 ? 'text-green-400' : 'text-slate-600'}`} />
                          <span className={readingProgress > 80 ? 'text-slate-300' : 'text-slate-500'}>Hybrid Approach</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className={`w-4 h-4 ${readingProgress > 95 ? 'text-green-400' : 'text-slate-600'}`} />
                          <span className={readingProgress > 95 ? 'text-slate-300' : 'text-slate-500'}>Conclusion</span>
                        </div>
                      </div>
                    </div>

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
