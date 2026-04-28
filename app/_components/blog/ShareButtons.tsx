'use client';

import { Linkedin, Facebook, Share2 } from 'lucide-react';

interface Props {
  title: string;
}

export default function ShareButtons({ title }: Props) {
  const share = (network: 'linkedin' | 'facebook' | 'twitter') => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title);
    const map: Record<typeof network, string> = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
    };
    window.open(map[network], '_blank', 'noopener,noreferrer');
  };

  const baseClass =
    'w-9 h-9 rounded-lg bg-slate-800/60 border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all flex items-center justify-center';

  return (
    <div className="flex items-center gap-3 ml-auto">
      <span className="text-slate-500 text-xs uppercase tracking-wider">Share</span>
      <button onClick={() => share('linkedin')} className={baseClass} aria-label="Share on LinkedIn">
        <Linkedin className="w-4 h-4" />
      </button>
      <button onClick={() => share('facebook')} className={baseClass} aria-label="Share on Facebook">
        <Facebook className="w-4 h-4" />
      </button>
      <button onClick={() => share('twitter')} className={baseClass} aria-label="Share on Twitter / X">
        <Share2 className="w-4 h-4" />
      </button>
    </div>
  );
}
