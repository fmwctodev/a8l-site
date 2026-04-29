/**
 * Root loading UI — shown by Next.js while a server component on a route is
 * generating, or during ISR fallback for the blog posts. Keeps the page
 * structurally similar to the rendered state so there's no layout shift when
 * content arrives, just a faint shimmer to acknowledge that something is
 * loading.
 *
 * Static markup, server component — adds zero JS to the route.
 */
export default function Loading() {
  return (
    <div className="relative min-h-[70vh] pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* H1 placeholder */}
        <div className="h-12 md:h-16 w-3/4 rounded-lg bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/80 bg-[length:200%_100%] animate-gradient-shift" />
        {/* Subhead placeholder */}
        <div className="h-6 w-1/2 rounded-lg bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/80 bg-[length:200%_100%] animate-gradient-shift" />
        {/* Body placeholder lines */}
        <div className="space-y-3 pt-6">
          <div className="h-4 w-full rounded bg-gradient-to-r from-slate-900/80 via-slate-800/40 to-slate-900/80 bg-[length:200%_100%] animate-gradient-shift" />
          <div className="h-4 w-[95%] rounded bg-gradient-to-r from-slate-900/80 via-slate-800/40 to-slate-900/80 bg-[length:200%_100%] animate-gradient-shift" />
          <div className="h-4 w-[88%] rounded bg-gradient-to-r from-slate-900/80 via-slate-800/40 to-slate-900/80 bg-[length:200%_100%] animate-gradient-shift" />
          <div className="h-4 w-[92%] rounded bg-gradient-to-r from-slate-900/80 via-slate-800/40 to-slate-900/80 bg-[length:200%_100%] animate-gradient-shift" />
          <div className="h-4 w-[80%] rounded bg-gradient-to-r from-slate-900/80 via-slate-800/40 to-slate-900/80 bg-[length:200%_100%] animate-gradient-shift" />
        </div>
        {/* Card grid placeholder */}
        <div className="grid sm:grid-cols-2 gap-4 pt-12">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-32 rounded-xl bg-gradient-to-br from-slate-900/60 to-slate-900/30 backdrop-blur-sm border border-slate-800/60 animate-pulse-slow"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
