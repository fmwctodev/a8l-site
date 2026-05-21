'use client';

import { useState } from 'react';
import { Globe, AppWindow, ShieldCheck, ArrowUpRight, Maximize2 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import Modal from './Modal';
import { Stagger, StaggerItem, PremiumCard } from './ui';

type Project = { name: string; url: string; image?: string };

// .sites carry real screenshots from /public/portfolio. .systems have no
// images yet, so those cards fall back to the icon + domain placeholder.
const SITES: Project[] = [
  { name: 'BuilderLync', url: 'https://builderlync.com/', image: '/portfolio/builderlync-site.png' },
  { name: 'SW Pest & Weeds', url: 'https://swpestweeds.com/', image: '/portfolio/swpests-site.png' },
  { name: 'That Roof Dude', url: 'https://thatroofdude.com/', image: '/portfolio/thatroofdude-site.png' },
  { name: 'Peerless Services', url: 'https://peerless-services.com/', image: '/portfolio/peerless-site.png' },
  { name: 'Clockwork Concrete', url: 'https://clockworkconcrete.com/', image: '/portfolio/clockwork-site.png' },
  { name: 'HelpYHWH', url: 'https://helpyhwh.org/', image: '/portfolio/yhwh-site.png' },
  { name: 'ShingleRx NTX', url: 'https://shinglerx-ntx.com/', image: '/portfolio/shinglerx-site.png' },
  { name: 'Purple Cow Roofing', url: 'https://purplecowroofing.com/', image: '/portfolio/purplecow-site.png' },
  { name: 'Autom8ion Lab', url: 'https://autom8ionlab.com/', image: '/portfolio/autom8ionlab-site.png' },
];

const SYSTEMS: Project[] = [
  { name: 'BuilderLync App', url: 'https://app.builderlync.com', image: '/portfolio/builderlync-app.png' },
  { name: 'Tarrytown Roofing', url: 'https://contact.tarrytownroofing.com', image: '/portfolio/tarrytown-app.png' },
  { name: 'Revive GC', url: 'https://success.revive-gc.com', image: '/portfolio/success-app.png' },
  { name: 'Autom8ion Lab OS', url: 'https://os.autom8ionlab.com', image: '/portfolio/autom8ionlab-app.png' },
];

const TABS = [
  { id: 'sites', label: '.sites' },
  { id: 'systems', label: '.systems' },
] as const;
type TabId = (typeof TABS)[number]['id'];

const prettyDomain = (url: string) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

function ProjectCard({ project, kind }: { project: Project; kind: TabId }) {
  const Icon = kind === 'sites' ? Globe : AppWindow;
  return (
    <PremiumCard variant="hover" className="h-full">
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-slate-800/70 to-slate-950 flex items-center justify-center">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={`${project.name} preview`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <Icon className="w-8 h-8" />
            <span className="text-xs font-mono">{prettyDomain(project.url)}</span>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between gap-3 p-5">
        <div className="min-w-0">
          <h3 className="text-white font-semibold truncate">{project.name}</h3>
          <p className="text-slate-400 text-sm font-mono truncate">{prettyDomain(project.url)}</p>
        </div>
        {kind === 'sites' ? (
          <ArrowUpRight className="w-5 h-5 text-cyan-400 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        ) : project.image ? (
          <Maximize2 className="w-5 h-5 text-cyan-400 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
        ) : null}
      </div>
    </PremiumCard>
  );
}

export default function PortfolioTabs() {
  const [active, setActive] = useState<TabId>('sites');
  const [lightbox, setLightbox] = useState<Project | null>(null);
  const reduceMotion = useReducedMotion();
  const projects = active === 'sites' ? SITES : SYSTEMS;

  return (
    <div>
      <div role="tablist" aria-label="Portfolio categories" className="flex justify-center gap-3 mb-12">
        {TABS.map(t => {
          const selected = active === t.id;
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(t.id)}
              className={`font-mono text-sm sm:text-base px-5 py-2.5 rounded-lg border transition-all duration-300 ${
                selected
                  ? 'border-cyan-500/50 bg-cyan-500/10 text-cyan-300 shadow-glow-cyan'
                  : 'border-slate-700 text-slate-400 hover:text-slate-200 hover:border-slate-600'
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <Stagger key={active} staggerDelay={0.07} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((p, i) =>
          active === 'sites' ? (
            <StaggerItem key={p.url}>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="group block h-full">
                <ProjectCard project={p} kind="sites" />
              </a>
            </StaggerItem>
          ) : (
            // .systems has 4 cards; the 4th sits alone on row 2 at lg —
            // start it in column 2 so it's centered instead of left-aligned.
            <StaggerItem
              key={p.url}
              className={i === projects.length - 1 ? 'lg:col-start-2' : undefined}
            >
              {p.image ? (
                <button
                  type="button"
                  onClick={() => setLightbox(p)}
                  aria-label={`Enlarge ${p.name} screenshot`}
                  className="group block h-full w-full text-left cursor-zoom-in"
                >
                  <ProjectCard project={p} kind="systems" />
                </button>
              ) : (
                <ProjectCard project={p} kind="systems" />
              )}
            </StaggerItem>
          )
        )}
      </Stagger>

      {active === 'systems' && (
        <div className="mt-10 max-w-3xl mx-auto">
          <div className="flex items-start gap-4 rounded-xl border border-cyan-500/30 bg-gradient-to-br from-slate-900/70 to-slate-900/30 p-6">
            <ShieldCheck className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm leading-relaxed text-slate-300">
              <strong className="text-white">This is a representative sample.</strong> A number of our
              production systems — internal operations tooling, client SaaS, and security-sensitive
              enterprise and government builds — are covered by NDAs and can&apos;t be shown publicly.
              We&apos;re glad to walk through architecture, live demos, and measurable outcomes under a
              mutual NDA.{' '}
              <Link href="/get-in-touch" className="text-cyan-400 hover:text-cyan-300 underline">
                Request a private walkthrough
              </Link>
              .
            </div>
          </div>
        </div>
      )}

      <Modal
        isOpen={!!lightbox}
        onClose={() => setLightbox(null)}
        contentClassName="p-2 sm:p-4 max-w-6xl mx-auto w-full max-h-[92vh] overflow-y-auto"
      >
        {lightbox && (
          <motion.figure
            initial={reduceMotion ? false : { scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox.image}
              alt={`${lightbox.name} — full screenshot`}
              className="w-full h-auto rounded-lg border border-slate-700"
            />
            <figcaption className="mt-3 text-center text-sm text-slate-300">
              <span className="text-white font-semibold">{lightbox.name}</span>
              <span className="font-mono text-slate-400"> · {prettyDomain(lightbox.url)}</span>
            </figcaption>
          </motion.figure>
        )}
      </Modal>
    </div>
  );
}
