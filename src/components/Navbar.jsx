import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  FileDown,
  ShieldCheck,
  Anchor,
  Menu,
  X,
  ArrowUpRight,
  Globe,
  MapPin,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/maritimeData';

export default function Navbar({ onQuickQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Strength & Pedigree', href: '#about-strength' },
    { label: '12 Core Services', href: '#services' },
    { label: 'Port & Global Coverage', href: '#global-footprint' },
    { label: 'Recent Projects', href: '#projects' },
    { label: 'Why Us', href: '#competitive-edge' },
    { label: '24/7 Contact & RFQ', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Executive Credentials & 24/7 Emergency Bar */}
      <div className="bg-[#040B14] border-b border-white/10 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
          {/* Left: Live Operational Status & Official Accreditations */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <span className="inline-flex items-center gap-2 font-mono-tech text-[11px] font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/25 px-2.5 py-0.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              24/7 Vessel Dispatch Active
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D96B27]" />
              ISO 9001:2015 Certified
            </span>
            <span className="hidden lg:inline-flex items-center gap-1.5 text-slate-300 font-mono-tech">
              <Anchor className="w-3.5 h-3.5 text-sky-400" />
              ShipServ TNID: <strong className="text-white">{COMPANY_INFO.shipServId}</strong>
            </span>
            <span className="hidden xl:inline-flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Registered Ship Chandler: <strong className="text-white">Vizhinjam International Seaport</strong>
            </span>
          </div>

          {/* Right: Direct Emergency Hotlines & Brochure */}
          <div className="flex items-center gap-4 ml-auto">
            <a
              href={`mailto:${COMPANY_INFO.contact.primaryEmail}`}
              className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-[#D96B27]" />
              <span>{COMPANY_INFO.contact.primaryEmail}</span>
            </a>
            <a
              href="tel:+919778606981"
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors font-mono-tech font-medium text-white"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 9778606981 / 9778606991</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-[#07111E]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50 py-3'
            : 'bg-gradient-to-b from-[#07111E]/90 via-[#07111E]/75 to-transparent backdrop-blur-md py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#top"
            className="flex items-center gap-3.5 group focus:outline-none"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/95 p-1.5 shadow-md shadow-black/30 flex items-center justify-center group-hover:scale-105 transition-transform">
              <img
                src="/logo-hi.png"
                alt="Masterchief Global Compass Emblem"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-bold tracking-wider text-white leading-none">
                MASTERCHIEF <span className="text-[#E87A35]">GLOBAL</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono-tech uppercase tracking-widest text-slate-300 mt-1">
                Complete Spectrum of Maritime Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-all cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="/Masterchief_Global_Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/15 border border-white/15 transition-all"
              title="Download Official Global Brochure PDF"
            >
              <FileDown className="w-4 h-4 text-[#E87A35]" />
              <span className="hidden xl:inline">Global</span> Brochure
            </a>

            <button
              onClick={() => onQuickQuote('', '')}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#C85A17] to-[#E87A35] hover:from-[#D96B27] hover:to-[#F59E0B] shadow-lg shadow-[#D96B27]/25 transition-all cursor-pointer"
            >
              <span>Request Dispatch / Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#07111E]/98 border-b border-white/15 px-4 pt-3 pb-6 mt-3 space-y-3">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-white/10 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href="/Masterchief_Global_Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-white bg-white/10 border border-white/15"
              >
                <FileDown className="w-4 h-4 text-[#E87A35]" />
                Download Global Brochure (PDF)
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onQuickQuote('', '');
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-[#C85A17] to-[#E87A35]"
              >
                Request Vessel Support
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-2 text-xs text-slate-400 flex flex-wrap gap-3 justify-between">
              <span>ShipServ TNID: 318202</span>
              <span>ISO 9001:2015 Certified</span>
              <span>Vizhinjam Seaport Registered Chandler</span>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

