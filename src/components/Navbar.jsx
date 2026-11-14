import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'projects', 'about', 'archive', 'connect'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Archive', href: '#archive', id: 'archive' },
  ];

  return (
    <>
      {/* Floating Centered Glass Pill Navbar */}
      <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto max-w-4xl w-full flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full glass-pill shadow-[0_10px_35px_-5px_rgba(0,0,0,0.7)] transition-all duration-300">
          
          {/* Brand Logo & Name */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group shrink-0"
            aria-label="Ahmed Shamil Home"
          >
            <div className="w-7 h-7 rounded-full bg-neutral-900 border border-white/15 p-1 flex items-center justify-center group-hover:border-[#9ba4e6]/50 transition-colors">
              <img
                src="/logo-white.png"
                alt="42RGB Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <span className="font-bold text-sm tracking-tight text-white group-hover:text-[#b4bbf2] transition-colors whitespace-nowrap">
              {portfolioData.personal.name}
            </span>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium tracking-wide">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`transition-colors whitespace-nowrap py-1 px-1 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Primary Action Button (Right) */}
          <div className="flex items-center gap-2">
            <a
              href="#connect"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-neutral-200 text-[#09090b] text-xs font-semibold tracking-wide transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-neutral-300 hover:text-white rounded-full hover:bg-white/[0.08] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#09090b]/90 backdrop-blur-2xl md:hidden pt-24 px-6 flex flex-col justify-between pb-12">
          <div className="space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 block">
              Navigation
            </span>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-bold py-2 transition-colors ${
                    activeSection === link.id ? 'text-[#9ba4e6]' : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-white/[0.08] space-y-4">
            <a
              href="#connect"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-full bg-white text-[#09090b] font-semibold text-center text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="text-center text-xs font-mono text-neutral-500">
              {portfolioData.personal.brandUnit} • {portfolioData.personal.tagline}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
