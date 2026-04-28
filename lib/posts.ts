import { getSupabase } from './supabase';

export interface BlogPost {
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
  meta_title: string | null;
  meta_description: string | null;
  date_modified: string | null;
  author_title: string | null;
  author_linkedin: string | null;
  og_image: string | null;
  article_section: string | null;
}

export interface BlogPostListItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  hero_image: string;
  published_at: string;
  reading_time_minutes: number;
  tags: string[];
}

export async function getAllPosts(): Promise<BlogPostListItem[]> {
  const supabase = getSupabase();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('blog_posts')
    .select('id, title, slug, excerpt, hero_image, published_at, reading_time_minutes, tags')
    .order('published_at', { ascending: false });

  if (error) {
    // eslint-disable-next-line no-console
    console.error('[posts] getAllPosts failed:', error.message);
    return [];
  }
  return data ?? [];
}

export async function getAllPostSlugs(): Promise<string[]> {
  const supabase = getSupabase();
  if (!supabase) return [];
  const { data, error } = await supabase.from('blog_posts').select('slug');
  if (error) {
    // eslint-disable-next-line no-console
    console.error('[posts] getAllPostSlugs failed:', error.message);
    return [];
  }
  return (data ?? []).map((row) => row.slug);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const supabase = getSupabase();
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  if (error) {
    // eslint-disable-next-line no-console
    console.error(`[posts] getPostBySlug(${slug}) failed:`, error.message);
    return null;
  }
  return data;
}
