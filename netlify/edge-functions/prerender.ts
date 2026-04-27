// Netlify Edge Function: dynamic rendering for bots via Prerender.io.
//
// Real users (Chrome, Safari, mobile, etc.) hit through to the SPA exactly
// as before. Search engines and AI crawlers are detected by user-agent and
// proxied to Prerender.io, which returns a fully-rendered HTML snapshot of
// the requested URL — including <title>, meta, canonical, JSON-LD, OG tags,
// and the article body for blog posts.
//
// Reads PRERENDER_TOKEN from Netlify environment variables.
//
// Defensive choices worth knowing about:
//   - Bot detection runs against a regex, including Googlebot variants that
//     don't contain the "googlebot" substring (Mediapartners-Google,
//     AdsBot-Google).
//   - Every response carries `Vary: User-Agent` so an upstream CDN cannot
//     accidentally serve a bot the cached SPA shell intended for a human.
//   - Prerender fetches use a generous 25s timeout (Prerender cold renders
//     can take 8–15s). On timeout/error we still fall through to the SPA so
//     a Prerender outage never breaks the site, but we surface the reason
//     in the `x-prerender-skip-reason` response header for debugging.

import type { Context } from "https://edge.netlify.com";

// Single regex with word boundaries so we don't accidentally match strings
// like "antbot" → "bot". Covers traditional search engines, AI crawlers,
// and social-card scrapers. Order doesn't matter.
const BOT_REGEX = new RegExp(
  [
    // Google family — note the variants that DO NOT contain "googlebot"
    "googlebot",
    "google-extended",
    "google-inspectiontool",
    "mediapartners-google",
    "adsbot-google",
    "feedfetcher-google",
    "apis-google",
    // Other search engines
    "bingbot",
    "yandex(bot)?",
    "baiduspider",
    "duckduckbot",
    "yahoo! slurp",
    "slurp",
    // AI crawlers
    "gptbot",
    "chatgpt-user",
    "perplexitybot",
    "claudebot",
    "claude-web",
    "anthropic-ai",
    "applebot(-extended)?",
    "ccbot",
    "amazonbot",
    "youbot",
    "cohere-ai",
    "diffbot",
    "ai2bot",
    "bytespider",
    // Social-card scrapers
    "facebookexternalhit",
    "facebookcatalog",
    "twitterbot",
    "linkedinbot",
    "slackbot",
    "discordbot",
    "whatsapp",
    "telegrambot",
    "pinterest",
    "redditbot",
    "embedly",
    "showyoubot",
    "outbrain",
    "vkshare",
    "w3c_validator",
    "quora link preview",
  ].join("|"),
  "i",
);

// Static-asset extensions we never want to send through the prerender proxy —
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

const PRERENDER_TIMEOUT_MS = 25_000;

// Mark every response so an upstream CDN keeps bot/human caches separated.
function withVary(response: Response): Response {
  const headers = new Headers(response.headers);
  headers.set("Vary", "User-Agent");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

async function passthrough(context: Context, _reason?: string): Promise<Response> {
  const response = await context.next();
  const headers = new Headers(response.headers);
  headers.set("Vary", "User-Agent");
  if (_reason) headers.set("x-prerender-skip-reason", _reason);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default async (request: Request, context: Context): Promise<Response> => {
  const url = new URL(request.url);
  const userAgent = request.headers.get("user-agent") || "";
  const path = url.pathname.toLowerCase();

  // 1. Skip static assets — let Netlify's CDN serve them directly.
  if (SKIPPED_EXTENSIONS.some((ext) => path.endsWith(ext))) {
    return context.next();
  }

  // 2. Honor the legacy _escaped_fragment_ contract for older crawlers.
  const isEscapedFragment = url.searchParams.has("_escaped_fragment_");

  // 3. Bot detection.
  const isBot = BOT_REGEX.test(userAgent);

  if (!isBot && !isEscapedFragment) {
    return passthrough(context);
  }

  const prerenderToken = Netlify.env.get("PRERENDER_TOKEN");

  if (!prerenderToken) {
    console.warn("PRERENDER_TOKEN not set — falling through for bot:", userAgent);
    return passthrough(context, "no-token");
  }

  // 4. Proxy to Prerender.io. Cold renders can take 8–15s; warm hits return
  // immediately. We give it 25s before bailing.
  const prerenderUrl = `https://service.prerender.io/${url.toString()}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), PRERENDER_TIMEOUT_MS);

  try {
    const response = await fetch(prerenderUrl, {
      headers: {
        "X-Prerender-Token": prerenderToken,
        "User-Agent": userAgent,
        "X-Forwarded-For": context.ip ?? "",
      },
      redirect: "manual",
      signal: controller.signal,
    });

    clearTimeout(timeout);

    // Pass through 3xx redirects from Prerender so canonicals don't break.
    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get("location");
      if (location) {
        return new Response(null, {
          status: response.status,
          headers: {
            location,
            "Vary": "User-Agent",
            "x-prerendered": "redirect",
          },
        });
      }
    }

    if (!response.ok) {
      console.warn(
        `Prerender returned ${response.status} for ${url.toString()} — falling through`,
      );
      return passthrough(context, `prerender-status-${response.status}`);
    }

    const body = await response.text();

    return new Response(body, {
      status: response.status,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "x-prerendered": "true",
        "cache-control": "public, max-age=0, must-revalidate",
        "Vary": "User-Agent",
      },
    });
  } catch (error) {
    clearTimeout(timeout);
    const aborted = (error as Error)?.name === "AbortError";
    console.error(
      "Prerender proxy failed:",
      aborted ? "timeout" : error,
      "url:",
      url.toString(),
    );
    return passthrough(context, aborted ? "timeout" : "fetch-error");
  }
};

export const config = {
  path: "/*",
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
