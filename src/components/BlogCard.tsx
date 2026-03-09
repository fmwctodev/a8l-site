import React from 'react';
import { Link } from 'react-router-dom';
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
    <article className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group">
      <Link to={`/blog/${slug}`} className="block">
        <div className="relative h-56 overflow-hidden">
          <img
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
        </div>
      </Link>

      <div className="p-6">
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

        <Link to={`/blog/${slug}`}>
          <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
            {title}
          </h2>
        </Link>

        <p className="text-slate-300 mb-4 line-clamp-3 leading-relaxed">{excerpt}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs bg-slate-800 text-cyan-400 rounded-full border border-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          to={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
        >
          Read Article
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
