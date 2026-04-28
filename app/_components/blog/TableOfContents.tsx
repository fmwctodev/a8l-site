'use client';

import { useEffect, useState } from 'react';
import { Award, CheckCircle2 } from 'lucide-react';

interface TocItem {
  id: string;
  text: string;
}

export default function TableOfContents() {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const container = document.querySelector<HTMLElement>('[data-blog-content]');
    if (!container) return;

    const headings = container.querySelectorAll<HTMLHeadingElement>('h2');
    const items: TocItem[] = [];
    headings.forEach((heading, index) => {
      const id = heading.id || `section-${index}`;
      heading.id = id;
      items.push({ id, text: heading.textContent || '' });
    });
    setTocItems(items);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const pct = (scrolled / documentHeight) * 100;
      setProgress(Math.min(Math.max(pct, 0), 100));

      const container = document.querySelector<HTMLElement>('[data-blog-content]');
      if (!container) return;
      const sections = container.querySelectorAll<HTMLHeadingElement>('h2');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id || '');
        }
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-32">
        <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800 shadow-xl">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-cyan-400" />
            Reading Progress
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-400">Article Progress</span>
                <span className="text-cyan-400 font-semibold">{Math.round(progress)}%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {tocItems.length > 0 && (
              <div className="pt-4 border-t border-slate-800">
                <p className="text-slate-400 text-xs uppercase tracking-wider mb-3 font-medium">Sections</p>
                <nav aria-label="Table of contents">
                  <div className="space-y-2">
                    {tocItems.map((item, index) => {
                      const threshold = ((index + 1) / tocItems.length) * 100;
                      const isRead = progress >= threshold - 100 / tocItems.length;
                      return (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className={`flex items-start gap-2 text-sm transition-colors hover:text-cyan-400 ${
                            activeSection === item.id
                              ? 'text-cyan-400'
                              : isRead
                                ? 'text-slate-300'
                                : 'text-slate-500'
                          }`}
                        >
                          <CheckCircle2
                            className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                              isRead ? 'text-green-400' : 'text-slate-600'
                            }`}
                          />
                          <span className="line-clamp-2">{item.text}</span>
                        </a>
                      );
                    })}
                  </div>
                </nav>
              </div>
            )}

            {progress >= 99 && (
              <div className="mt-4 p-4 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg border border-green-700/30">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-green-400" />
                  <span className="text-green-300 font-semibold">Article Complete!</span>
                </div>
                <p className="text-slate-300 text-sm">You&apos;ve finished reading</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
