'use client';

import { useEffect, useState } from 'react';

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const pct = (scrolled / documentHeight) * 100;
      setProgress(Math.min(Math.max(pct, 0), 100));
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 shadow-[0_0_12px_rgba(6,182,212,0.7)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
