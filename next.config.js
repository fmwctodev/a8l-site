/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: '*.supabase.co' },
    ],
  },
  // Every URL is preserved verbatim from the Vite SPA. No redirects expected.
  async redirects() {
    return [];
  },
};

module.exports = nextConfig;
