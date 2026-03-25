import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { BookOpen, TrendingUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import { getCanonicalUrl, buildJsonLd } from '../utils/seo';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  hero_image: string;
  published_at: string;
  reading_time_minutes: number;
  tags: string[];
}

const BlogList = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('id, title, slug, excerpt, hero_image, published_at, reading_time_minutes, tags')
          .order('published_at', { ascending: false });

        if (error) throw error;
        setPosts(data || []);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Helmet>
        <title>Blog | AI Automation & Cloud Infrastructure Insights | Autom8tion Lab</title>
        <meta name="description" content="Expert insights on AI automation, workflow optimization, cloud infrastructure, and cybersecurity. Learn how to transform your business with intelligent automation solutions." />
        <meta name="keywords" content="AI automation blog, workflow automation insights, cloud infrastructure tips, cybersecurity best practices, business process automation, AI agents" />
        <link rel="canonical" href={getCanonicalUrl('/blog')} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog | AI Automation & Cloud Infrastructure Insights | Autom8tion Lab" />
        <meta property="og:description" content="Expert insights on AI automation, workflow optimization, cloud infrastructure, and cybersecurity. Learn how to transform your business with intelligent automation solutions." />
        <meta property="og:url" content="https://autom8ionlab.com/blog" />
        <meta property="og:image" content="https://autom8ionlab.com/logo/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@autom8ionlab" />
        <meta name="twitter:title" content="Blog | AI Automation & Cloud Infrastructure Insights | Autom8tion Lab" />
        <meta name="twitter:description" content="Expert insights on AI automation, workflow optimization, cloud infrastructure, and cybersecurity." />
        <meta name="twitter:image" content="https://autom8ionlab.com/logo/logo.png" />

        <script type="application/ld+json">
          {buildJsonLd({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Autom8tion Lab Blog",
            "url": "https://autom8ionlab.com/blog",
            "description": "Expert insights on AI automation, workflow optimization, cloud infrastructure, and cybersecurity.",
            "inLanguage": "en-US",
            "publisher": {
              "@type": "Organization",
              "name": "Autom8tion Lab",
              "url": "https://autom8ionlab.com",
              "logo": { "@type": "ImageObject", "url": "https://autom8ionlab.com/logo/logo.png" }
            },
            ...(posts.length > 0 ? {
              "blogPost": posts.map(p => ({
                "@type": "BlogPosting",
                "headline": p.title,
                "url": `https://autom8ionlab.com/blog/${p.slug}`,
                "datePublished": p.published_at,
                "description": p.excerpt,
                "image": p.hero_image,
                "keywords": p.tags.join(', ')
              }))
            } : {})
          })}
        </script>
        <script type="application/ld+json">
          {buildJsonLd({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://autom8ionlab.com/" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://autom8ionlab.com/blog" }
            ]
          })}
        </script>
      </Helmet>

      <Header />

      <div className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <BookOpen className="w-8 h-8 text-cyan-400" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Automation <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Insights</span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Expert insights on AI automation, workflow optimization, and building scalable systems that deliver measurable results.
            </p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-slate-400">Loading articles...</p>
              </div>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <TrendingUp className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <p className="text-xl text-slate-400">No articles yet. Check back soon!</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <BlogCard
                    key={post.id}
                    slug={post.slug}
                    title={post.title}
                    excerpt={post.excerpt}
                    heroImage={post.hero_image}
                    publishedAt={post.published_at}
                    readingTimeMinutes={post.reading_time_minutes}
                    tags={post.tags}
                  />
                ))}
              </div>

              <div className="mt-16 text-center">
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 max-w-2xl mx-auto">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Want to Build Your Own Automation Strategy?
                  </h2>
                  <p className="text-slate-300 mb-6">
                    Our team helps businesses implement custom AI and automation solutions that deliver measurable ROI. Let's discuss your specific needs.
                  </p>
                  <Link
                    to="/schedule-consultation"
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

      <Footer />
    </div>
  );
};

export default BlogList;
