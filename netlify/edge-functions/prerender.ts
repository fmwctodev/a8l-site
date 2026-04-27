// Netlify Edge Function: dynamic rendering for bots via Prerender.io
//
// Real users (Chrome, Safari, mobile, etc.) hit through to the SPA exactly
// as before. Search engines and AI crawlers are detected by user-agent and
// proxied to Prerender.io, which returns a fully-rendered HTML snapshot of
// the requested URL — including <title>, meta, canonical, JSON-LD, OG tags,
// and the article body for blog posts.
//
// Reads PRERENDER_TOKEN from Netlify environment variables.
// See: https://docs.prerender.io/docs/netlify

import type { Context } from "https://edge.netlify.com";

const BOT_AGENTS = [
  "googlebot",
  "bingbot",
  "yandex",
  "baiduspider",
  "duckduckbot",
  "gptbot",
  "perplexitybot",
  "claudebot",
  "google-extended",
  "anthropic-ai",
  "applebot",
  "applebot-extended",
  "ccbot",
  "chatgpt-user",
  "facebookexternalhit",
  "twitterbot",
  "linkedinbot",
  "slackbot",
  "discordbot",
  "whatsapp",
  "telegrambot",
  "pinterest",
  "redditbot",
  "embedly",
  "quora link preview",
  "showyoubot",
  "outbrain",
  "vkshare",
  "w3c_validator",
];

// Static asset extensions we never want to send through the prerender proxy —
// they ship as-is from the SPA build.
const SKIPPED_EXTENSIONS = [
  ".js",
  ".css",
  ".xml",
  ".less",
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".pdf",
  ".doc",
  ".txt",
  ".ico",
  ".rss",
  ".zip",
  ".mp3",
  ".rar",
  ".exe",
  ".wmv",
  ".doc",
  ".avi",
  ".ppt",
  ".mpg",
  ".mpeg",
  ".tif",
  ".wav",
  ".mov",
  ".psd",
  ".ai",
  ".xls",
  ".mp4",
  ".m4a",
  ".swf",
  ".dat",
  ".dmg",
  ".iso",
  ".flv",
  ".m4v",
  ".torrent",
  ".woff",
  ".woff2",
  ".ttf",
  ".svg",
  ".webmanifest",
  ".webp",
];

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
  const userAgent = (request.headers.get("user-agent") || "").toLowerCase();
  const path = url.pathname.toLowerCase();

  // 1. Skip static assets — let Netlify's CDN serve them directly.
  if (SKIPPED_EXTENSIONS.some((ext) => path.endsWith(ext))) {
    return context.next();
  }

  // 2. Honor the existing _escaped_fragment_ contract for older crawlers.
  const isEscapedFragment = url.searchParams.has("_escaped_fragment_");

  // 3. Bot detection by user-agent substring.
  const isBot = BOT_AGENTS.some((bot) => userAgent.includes(bot));

  if (!isBot && !isEscapedFragment) {
    return context.next();
  }

  const prerenderToken = Netlify.env.get("PRERENDER_TOKEN");

  // If no token is configured, fall through rather than break the site.
  if (!prerenderToken) {
    console.warn(
      "PRERENDER_TOKEN is not set — falling through to SPA shell for bot",
      userAgent,
    );
    return context.next();
  }

  // 4. Proxy to Prerender.io. They cache the rendered HTML; cold renders
  // take a few seconds, warm renders return immediately.
  const prerenderUrl = `https://service.prerender.io/${url.toString()}`;

  try {
    const response = await fetch(prerenderUrl, {
      headers: {
        "X-Prerender-Token": prerenderToken,
        "User-Agent": userAgent,
      },
      // Edge functions allow up to 30s of work; Prerender warm hits are <1s.
      redirect: "manual",
    });

    // Pass through 3xx redirects from Prerender so canonicals don't break.
    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get("location");
      if (location) {
        return new Response(null, {
          status: response.status,
          headers: { location },
        });
      }
    }

    const body = await response.text();

    return new Response(body, {
      status: response.status,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "x-prerendered": "true",
        "cache-control": "public, max-age=0, must-revalidate",
      },
    });
  } catch (error) {
    console.error("Prerender proxy failed:", error);
    // Never break the site — fall through to the SPA shell on error.
    return context.next();
  }
};

export const config = {
  path: "/*",
  // Bypass these — they're not pages and don't benefit from prerendering.
  excludedPath: [
    "/sitemap.xml",
    "/robots.txt",
    "/llms.txt",
    "/llms-full.txt",
    "/manifest.json",
    "/favicon.ico",
    "/_headers",
    "/_redirects",
    "/assets/*",
    "/logo/*",
    "/downloads/*",
    "/.netlify/*",
  ],
};
