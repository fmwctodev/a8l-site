/*
  # Create Blog Posts Table

  ## Overview
  Creates the blog_posts table with all base and SEO enhancement columns included.

  ## New Tables
  - `blog_posts`
    - `id` (uuid, primary key)
    - `title` (text, required) - Blog post title
    - `slug` (text, unique, required) - URL-friendly identifier
    - `excerpt` (text, required) - Short summary for listings and SEO
    - `content` (text, required) - Full HTML content
    - `hero_image` (text, required) - Featured image URL
    - `author` (text, required) - Author display name
    - `published_at` (timestamptz) - Publication date
    - `tags` (text array) - Tags for categorization
    - `reading_time_minutes` (integer) - Estimated reading time
    - `meta_title` (text) - SEO meta title override
    - `meta_description` (text) - SEO meta description override
    - `date_modified` (timestamptz) - Last meaningful update date for schema markup
    - `author_title` (text) - Author job title for Person schema E-E-A-T
    - `author_linkedin` (text) - Author LinkedIn URL for Person schema sameAs
    - `og_image` (text) - Custom 1200x630 OG image separate from hero_image
    - `article_section` (text) - Content category for articleSection schema
    - `created_at` (timestamptz) - Record creation timestamp
    - `updated_at` (timestamptz) - Auto-updated timestamp

  ## Security
  - RLS enabled
  - Public read access for published posts only
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  hero_image text NOT NULL,
  author text NOT NULL DEFAULT 'Autom8tion Lab',
  published_at timestamptz DEFAULT now(),
  tags text[] DEFAULT '{}',
  reading_time_minutes integer DEFAULT 5,
  meta_title text,
  meta_description text,
  date_modified timestamptz,
  author_title text,
  author_linkedin text,
  og_image text,
  article_section text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_tags ON blog_posts USING GIN(tags);
CREATE INDEX IF NOT EXISTS idx_blog_posts_article_section ON blog_posts(article_section);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public users can view published blog posts"
  ON blog_posts
  FOR SELECT
  TO anon, authenticated
  USING (published_at IS NOT NULL AND published_at <= now());

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON blog_posts;
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
