import Reveal from './ui/Reveal';

// "As Seen On" press strip. Logos are dark-theme, full-color, transparent
// webp in /public/press. Logos-only per design — brand names live in alt
// text. The gentle staggered opacity pulse is pure CSS (.animate-logo-pulse
// in globals.css), so this stays a server component. Base opacity is 1, so
// prefers-reduced-motion users (animation disabled in globals.css) get
// full-opacity static logos.
const OUTLETS: { src: string; alt: string }[] = [
  { src: '/press/google_news.webp', alt: 'Google News' },
  { src: '/press/yahoo.webp', alt: 'Yahoo' },
  { src: '/press/bing.webp', alt: 'Microsoft Bing' },
  { src: '/press/fox_business.webp', alt: 'FOX Business' },
  { src: '/press/cbs.webp', alt: 'CBS' },
  { src: '/press/abc_news.webp', alt: 'ABC News' },
  { src: '/press/usa_today.webp', alt: 'USA Today' },
  { src: '/press/crunchbase.webp', alt: 'Crunchbase' },
  { src: '/press/e_news.webp', alt: 'E! News' },
];

export default function AsSeenOn() {
  return (
    <section className="py-12 md:py-16 bg-black border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 mb-8 md:mb-10">
            As Seen On
          </h2>
          <ul className="grid grid-cols-3 lg:grid-cols-9 items-center gap-x-6 gap-y-8">
            {OUTLETS.map((o, i) => (
              <li key={o.src} className="flex items-center justify-center">
                <img
                  src={o.src}
                  alt={o.alt}
                  loading="lazy"
                  decoding="async"
                  className="animate-logo-pulse h-7 sm:h-8 w-auto max-w-full object-contain transition-transform duration-300 hover:scale-110 hover:[animation-play-state:paused]"
                  style={{ animationDelay: `${i * 0.35}s` }}
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
