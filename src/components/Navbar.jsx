import React, { useState, useEffect } from 'react';
import { FileDown, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onQuickQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Who We Are', href: '#about-strength' },
    { label: 'Services', href: '#services' },
    { label: 'Global Reach', href: '#global-footprint' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-[#07111E]/90 backdrop-blur-xl border-b border-white/10 shadow-xl py-3.5'
            : 'bg-gradient-to-b from-[#07111E]/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Brand Logo */}
          <a href="#top" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white p-1.5 shadow-md flex items-center justify-center group-hover:scale-105 transition-transform">
              <img
                src="/logo-hi.png"
                alt="Masterchief Global"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-bold tracking-wider text-white leading-none">
                MASTERCHIEF <span className="text-[#E87A35]">GLOBAL</span>
              </span>
              <span className="text-[10px] font-mono-tech uppercase tracking-widest text-slate-400 mt-1">
                Maritime Solutions
              </span>
            </div>
          </a>

          {/* Center Links */}
          <div className="hidden lg:flex items-center gap-1 bg-white/[0.04] border border-white/10 rounded-full px-2 py-1 backdrop-blur-md">
            {navLinks.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/Masterchief_Global_Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/12 transition-all"
            >
              <FileDown className="w-4 h-4 text-[#E87A35]" />
              <span>Brochure</span>
            </a>

            <button
              onClick={() => onQuickQuote('', '')}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#C85A17] to-[#E87A35] hover:from-[#D96B27] hover:to-[#F59E0B] shadow-lg shadow-[#D96B27]/20 transition-all cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#07111E]/98 border-b border-white/10 px-4 pt-3 pb-6 mt-3 space-y-3">
            <div className="flex flex-col space-y-1">
              {navLinks.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left px-4 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="pt-3 border-t border-white/10 flex gap-3">
              <a
                href="/Masterchief_Global_Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-white/10"
              >
                <FileDown className="w-4 h-4 text-[#E87A35]" />
                Brochure
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onQuickQuote('', '');
                }}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#D96B27]"
              >
                Get a Quote
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
