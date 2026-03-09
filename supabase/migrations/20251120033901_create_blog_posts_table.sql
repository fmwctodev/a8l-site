/*
  # Create Blog Posts Table

  ## Overview
  This migration creates the infrastructure for the blog system, enabling content management
  and public access to blog articles about AI automation, cloud systems, and cybersecurity.

  ## 1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key) - Unique identifier for each blog post
      - `title` (text, required) - Blog post title
      - `slug` (text, unique, required) - URL-friendly identifier for the post
      - `excerpt` (text, required) - Short summary for listings and SEO
      - `content` (text, required) - Full markdown/HTML content of the blog post
      - `hero_image` (text, required) - URL to the featured/hero image
      - `author` (text, required) - Author name
      - `published_at` (timestamptz) - Publication date and time
      - `tags` (text array) - Array of tags for categorization
      - `reading_time_minutes` (integer) - Estimated reading time in minutes
      - `meta_title` (text) - SEO meta title (defaults to title if not provided)
      - `meta_description` (text) - SEO meta description (defaults to excerpt if not provided)
      - `created_at` (timestamptz) - Record creation timestamp
      - `updated_at` (timestamptz) - Record last update timestamp

  ## 2. Indexes
    - Index on `slug` for fast lookups by URL
    - Index on `published_at` for chronological sorting
    - GIN index on `tags` for efficient tag-based filtering

  ## 3. Security
    - Enable RLS on `blog_posts` table
    - Add policy for public read access to published posts
    - No write access for public users (admin-only via service role)
*/

-- Create blog_posts table
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
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_tags ON blog_posts USING GIN(tags);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read access to all published blog posts
CREATE POLICY "Public users can view published blog posts"
  ON blog_posts
  FOR SELECT
  TO anon, authenticated
  USING (published_at IS NOT NULL AND published_at <= now());

-- Create updated_at trigger function if it doesn't exist
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON blog_posts;
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();