import React, { useState, useRef, useEffect, useCallback, memo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const solutions = [
  { title: "AI Agent Development", path: "/solutions/ai-agent-development" },
  { title: "Workflow Automation", path: "/solutions/workflow-automation" },
  { title: "Process Automation", path: "/solutions/process-automation" },
  { title: "Custom LLM Systems", path: "/solutions/custom-llm-systems" },
  { title: "Software Development", path: "/solutions/software-development" },
  { title: "Mobile App Development", path: "/solutions/mobile-app-development" },
  { title: "API Integrations", path: "/solutions/api-integrations" },
  { title: "Cybersecurity & Compliance", path: "/solutions/cybersecurity" },
  { title: "Cloud Infrastructure", path: "/solutions/cloud-systems" },
  { title: "Data Management & Analytics", path: "/solutions/data-management" }
];

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setIsMobileSolutionsOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="relative z-50 px-6 py-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/logo/logo.png"
            alt="Autom8tion Lab Logo"
            className="w-12 h-12 object-contain"
          />
          <span className="text-2xl font-bold text-white">Autom8ion Lab</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-slate-300">
          <Link to="/#about" className="hover:text-cyan-400 transition-colors" onClick={() => window.location.pathname !== '/' && (window.location.href = '/#about')}>About</Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-1 hover:text-cyan-400 transition-colors"
              aria-label={isDropdownOpen ? "Close solutions menu" : "Open solutions menu"}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              <span>Solutions</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-slate-800 rounded-lg shadow-xl py-2 z-[9999] min-w-[240px] border border-slate-700">
                {solutions.map((solution, index) => (
                  <Link
                    key={index}
                    to={solution.path}
                    className="block px-4 py-2 text-slate-300 hover:bg-slate-700 hover:text-cyan-400 transition-colors text-sm"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {solution.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/#process" className="hover:text-cyan-400 transition-colors" onClick={() => window.location.pathname !== '/' && (window.location.href = '/#process')}>Process</Link>
          <Link to="/#pricing" className="hover:text-cyan-400 transition-colors" onClick={() => window.location.pathname !== '/' && (window.location.href = '/#pricing')}>Pricing</Link>
        </div>

        {/* Desktop Buttons */}
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
            to="/get-in-touch"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700 z-[9999] max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-4 space-y-4">
            {/* Mobile Navigation Links */}
            <Link 
              to="/#about" 
              className="block text-slate-300 hover:text-cyan-400 transition-colors py-2"
              onClick={() => {
                closeMobileMenu();
                window.location.pathname !== '/' && (window.location.href = '/#about');
              }}
            >
              About
            </Link>
            
            {/* Mobile Solutions Menu with Toggle */}
            <div className="py-2">
              <button
                onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                className="flex items-center justify-between w-full text-slate-300 hover:text-cyan-400 transition-colors py-2 font-medium"
                aria-label={isMobileSolutionsOpen ? "Close solutions menu" : "Open solutions menu"}
                aria-expanded={isMobileSolutionsOpen}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileSolutionsOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  {solutions.map((solution, index) => (
                    <Link
                      key={index}
                      to={solution.path}
                      className="block text-slate-400 hover:text-cyan-400 transition-colors py-1 text-sm"
                      onClick={closeMobileMenu}
                    >
                      {solution.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/#process" 
              className="block text-slate-300 hover:text-cyan-400 transition-colors py-2"
              onClick={() => {
                closeMobileMenu();
                window.location.pathname !== '/' && (window.location.href = '/#process');
              }}
            >
              Process
            </Link>
            
            <Link 
              to="/#pricing" 
              className="block text-slate-300 hover:text-cyan-400 transition-colors py-2"
              onClick={() => {
                closeMobileMenu();
                window.location.pathname !== '/' && (window.location.href = '/#pricing');
              }}
            >
              Pricing
            </Link>

            {/* Mobile Buttons */}
            <div className="pt-4 border-t border-slate-700 space-y-3">
              <a 
                href="https://os.autom8ionlab.com/client-portal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-slate-300 hover:text-cyan-400 transition-colors py-2 font-medium"
                onClick={closeMobileMenu}
              >
                Login
              </a>
              <Link 
                to="/get-in-touch"
                className="block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 text-center"
                onClick={closeMobileMenu}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;