import React from 'react';
import Link from 'next/link';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  heroImage: string;
  publishedAt: string;
  readingTimeMinutes: number;
  tags: string[];
}

/**
 * BlogCard — premium card visual for the blog index. Glass-morphic gradient,
 * cyan border + glow on hover, image scale + glow on hover. Server component;
 * the parent route wraps the card grid in <Stagger> for entrance motion.
 */
const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  title,
  excerpt,
  heroImage,
  publishedAt,
  readingTimeMinutes,
  tags,
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article className="group relative bg-gradient-to-br from-slate-900/60 to-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/40 hover:shadow-glow-cyan transition-all duration-300 h-full flex flex-col">
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative h-56 overflow-hidden">
          <img
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          {/* Gradient overlay — darkens the bottom for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          {/* Cyan tint reveal on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:via-cyan-500/10 group-hover:to-cyan-500/20 transition-all duration-500" />
        </div>
      </Link>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{readingTimeMinutes} min read</span>
          </div>
        </div>

        <Link href={`/blog/${slug}`}>
          <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
            {title}
          </h2>
        </Link>

        <p className="text-slate-300 mb-4 line-clamp-3 leading-relaxed flex-1">{excerpt}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs bg-slate-800/80 text-cyan-400 rounded-full border border-slate-700/80 transition-colors group-hover:border-cyan-500/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold link-underline w-fit"
        >
          Read Article
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
