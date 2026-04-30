'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

// LOCKED v3 §"Information Architecture" — Industries promoted to primary nav
// position (left of Solutions). This is the single biggest IA change from
// prior versions. Discontinued service pages (process-automation,
// mobile-app-development, data-management) collapsed into /capabilities.
const industries = [
  { title: 'Construction', path: '/industries/construction' },
  { title: 'Healthcare & Life Sciences', path: '/industries/healthcare' },
  { title: 'Finance', path: '/industries/finance' },
  { title: 'Real Estate & Property', path: '/industries/real-estate-property' },
  { title: 'US Government', path: '/industries/government' },
  { title: 'Defense Industrial Base', path: '/industries/defense' },
  { title: 'All Industries →', path: '/industries' },
];

const solutions = [
  { title: 'AI-Powered Software & Apps', path: '/solutions/software-development' },
  { title: 'Workflow Automation', path: '/solutions/workflow-automation' },
  { title: 'Cybersecurity Compliance', path: '/solutions/cybersecurity' },
  { title: 'AI Agent Development', path: '/solutions/ai-agent-development' },
  { title: 'Custom LLM Systems', path: '/solutions/custom-llm-systems' },
  { title: 'API Integrations', path: '/solutions/api-integrations' },
  { title: 'Cloud Infrastructure', path: '/solutions/cloud-systems' },
  { title: 'All Solutions →', path: '/solutions' },
];

const resources = [
  { title: 'Blog', path: '/blog' },
  { title: 'Capability Statement', path: '/capability-statement' },
  { title: 'Case Studies', path: '/case-studies' },
  { title: 'About', path: '/about' },
  { title: 'FAQ', path: '/faq' },
];

type DropdownKey = 'industries' | 'solutions' | 'resources' | null;

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<DropdownKey>('industries');
  // Tracks whether the user has scrolled past the hero so we intensify the
  // backdrop-blur and add a subtle border for definition.
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 80);
  });

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll while the mobile menu is open so the page beneath
  // doesn't drift when users swipe inside the menu list.
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : previous || '';
    return () => {
      document.body.style.overflow = previous || '';
    };
  }, [isMobileMenuOpen]);

  const toggleDropdown = (key: DropdownKey) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const renderDropdownButton = (key: DropdownKey, label: string) => (
    <button
      onClick={() => toggleDropdown(key)}
      className="flex items-center space-x-1 hover:text-cyan-400 transition-colors"
      aria-expanded={openDropdown === key}
      aria-haspopup="true"
    >
      <span>{label}</span>
      <ChevronDown
        className={`w-4 h-4 transition-transform ${openDropdown === key ? 'rotate-180' : ''}`}
      />
    </button>
  );

  const renderDropdownPanel = (
    key: DropdownKey,
    items: { title: string; path: string }[],
  ) => (
    <AnimatePresence>
      {openDropdown === key && (
        <motion.div
          className="absolute top-full left-0 mt-2 bg-slate-900/95 backdrop-blur-md rounded-lg shadow-2xl shadow-cyan-500/10 py-2 z-[9999] min-w-[280px] border border-slate-700/80"
          initial={{ opacity: 0, scale: 0.96, y: -6 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -6 }}
          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          {items.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="block px-4 py-2 text-slate-300 hover:bg-slate-800/80 hover:text-cyan-400 transition-colors text-sm"
              onClick={() => setOpenDropdown(null)}
            >
              {item.title}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <motion.nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60 shadow-lg shadow-slate-950/30'
          : 'bg-transparent'
      }`}
      initial={false}
    >
    <div className="px-6 py-6 max-w-7xl mx-auto" ref={navRef}>
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo/logo-96.webp"
            alt="Autom8ion Lab Logo"
            width={96}
            height={96}
            priority
            sizes="48px"
            className="w-12 h-12 object-contain"
          />
          <span className="text-2xl font-bold text-white">Autom8ion Lab</span>
        </Link>

        {/* Desktop Navigation — Industries promoted left of Solutions per LOCKED v3 IA. */}
        <div className="hidden md:flex space-x-7 text-slate-300 items-center">
          <div className="relative">
            {renderDropdownButton('industries', 'Industries')}
            {renderDropdownPanel('industries', industries)}
          </div>
          <div className="relative">
            {renderDropdownButton('solutions', 'Solutions')}
            {renderDropdownPanel('solutions', solutions)}
          </div>
          <div className="relative">
            {renderDropdownButton('resources', 'Resources')}
            {renderDropdownPanel('resources', resources)}
          </div>
          <Link href="/get-in-touch" className="hover:text-cyan-400 transition-colors">
            Contact
          </Link>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://os.autom8ionlab.com/client-portal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
          >
            Login
          </a>
          <Link
            href="/schedule-consultation"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
          >
            Schedule a discovery call
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu — Industries section opens first by default per LOCKED v3 build prompts */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700 z-[9999] max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-4 space-y-2">
            {(
              [
                ['industries', 'Industries', industries],
                ['solutions', 'Solutions', solutions],
                ['resources', 'Resources', resources],
              ] as const
            ).map(([key, label, items]) => (
              <div key={key} className="border-b border-slate-800 last:border-b-0">
                <button
                  onClick={() => setOpenMobileSection(openMobileSection === key ? null : key)}
                  className="flex items-center justify-between w-full text-slate-200 hover:text-cyan-400 transition-colors py-3 font-medium min-h-[44px]"
                  aria-expanded={openMobileSection === key}
                >
                  <span>{label}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openMobileSection === key ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openMobileSection === key && (
                  <div className="pl-4 space-y-1 pb-2">
                    {items.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className="block text-slate-400 hover:text-cyan-400 transition-colors py-3 text-sm min-h-[44px]"
                        onClick={closeMobileMenu}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/get-in-touch"
              className="block text-slate-200 hover:text-cyan-400 transition-colors py-3 font-medium border-b border-slate-800 min-h-[44px]"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>

            <div className="pt-4 space-y-2">
              <a
                href="https://os.autom8ionlab.com/client-portal"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-300 hover:text-cyan-400 transition-colors py-3 font-medium min-h-[44px]"
                onClick={closeMobileMenu}
              >
                Login
              </a>
              <Link
                href="/schedule-consultation"
                className="block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 text-center"
                onClick={closeMobileMenu}
              >
                Schedule a discovery call
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
    </motion.nav>
  );
}
