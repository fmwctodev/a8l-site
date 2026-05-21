import Reveal from './ui/Reveal';

// "As Seen On" press strip — infinite horizontal marquee. Each logo also runs
// the gentle opacity pulse (.animate-logo-pulse). The list renders twice; the
// second copy is aria-hidden and gives the seamless loop (translateX(-50%)).
// Pure CSS → stays a server component. prefers-reduced-motion (globals.css)
// stops the scroll, hides the duplicate set, and wraps logos into a static row.
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
  const loop = [...OUTLETS, ...OUTLETS]; // duplicate for seamless marquee

  return (
    <section className="py-12 md:py-16 bg-black border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 mb-8 md:mb-10">
            As Seen On
          </h2>
        </Reveal>
      </div>
      <div className="relative overflow-hidden mask-fade-x">
        <ul className="flex w-max items-center animate-as-seen-marquee hover:[animation-play-state:paused]">
          {loop.map((o, i) => {
            const isDup = i >= OUTLETS.length;
            return (
              <li
                key={i}
                aria-hidden={isDup}
                className={`shrink-0 px-6 md:px-9 ${isDup ? 'as-seen-marquee-dup' : ''}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={o.src}
                  alt={isDup ? '' : o.alt}
                  loading="lazy"
                  decoding="async"
                  className="animate-logo-pulse h-12 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-110"
                  style={{ animationDelay: `${(i % OUTLETS.length) * 0.35}s` }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
