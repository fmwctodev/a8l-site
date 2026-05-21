'use client';

import { useState } from 'react';
import { Globe, AppWindow, ShieldCheck, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Stagger, StaggerItem, PremiumCard } from './ui';

type Project = { name: string; url: string; image?: string };

// Real screenshots arrive later. Set `image: '/portfolio/<slug>.webp'` per
// project to replace the placeholder; until then the styled placeholder shows.
const SITES: Project[] = [
  { name: 'BuilderLync', url: 'https://builderlync.com/' },
  { name: 'SW Pest & Weeds', url: 'https://swpestweeds.com/' },
  { name: 'That Roof Dude', url: 'https://thatroofdude.com/' },
  { name: 'Peerless Services', url: 'https://peerless-services.com/' },
  { name: 'Clockwork Concrete', url: 'https://clockworkconcrete.com/' },
  { name: 'HelpYHWH', url: 'https://helpyhwh.org/' },
  { name: 'ShingleRx NTX', url: 'https://shinglerx-ntx.com/' },
  { name: 'Purple Cow Roofing', url: 'https://purplecowroofing.com/' },
  { name: 'Autom8ion Lab', url: 'https://autom8ionlab.com/' },
];

const SYSTEMS: Project[] = [
  { name: 'BuilderLync App', url: 'https://app.builderlync.com' },
  { name: 'Sitehues ARMY', url: 'https://army.sitehues.agency' },
  { name: 'Tarrytown Roofing', url: 'https://contact.tarrytownroofing.com' },
  { name: 'Revive GC', url: 'https://success.revive-gc.com' },
  { name: 'Autom8ion Lab OS', url: 'https://os.autom8ionlab.com' },
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
            className="absolute inset-0 h-full w-full object-cover"
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
        {kind === 'sites' && (
          <ArrowUpRight className="w-5 h-5 text-cyan-400 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </div>
    </PremiumCard>
  );
}

export default function PortfolioTabs() {
  const [active, setActive] = useState<TabId>('sites');
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
        {projects.map(p =>
          active === 'sites' ? (
            <StaggerItem key={p.url}>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="group block h-full">
                <ProjectCard project={p} kind="sites" />
              </a>
            </StaggerItem>
          ) : (
            <StaggerItem key={p.url}>
              <ProjectCard project={p} kind="systems" />
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
    </div>
  );
}
