import React from 'react';
import { Download, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/maritimeData';

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-3.5 group">
              <div className="w-11 h-11 rounded-xl bg-navy-800/90 border border-gold-500/30 flex items-center justify-center p-1.5">
                <img
                  src="/logo-hi.png"
                  alt="Masterchief Global Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg tracking-wider text-white">
                  MASTERCHIEF <span className="gold-gradient-text">GLOBAL</span>
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400">
                  Marine &amp; Engineering Services Pvt. Ltd.
                </span>
              </div>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Command-level maritime consultancy, port and terminal services, drydock retrofits, and 24/7 ship repair across all major Indian ports and global shipping hubs.
            </p>

            <div className="pt-1 text-xs font-mono text-slate-500">
              ShipServ TNID: <span className="text-gold-400">{COMPANY_INFO.shipServId}</span> &bull; ISO 9001:2015 Certified
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" className="hover:text-gold-400 transition-colors">
                  Leadership &amp; Edge
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-400 transition-colors">
                  12 Service Verticals
                </a>
              </li>
              <li>
                <a href="#ports" className="hover:text-gold-400 transition-colors">
                  Port Coverage Network
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gold-400 transition-colors">
                  Field Execution Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-400 transition-colors">
                  24/7 Operations Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Corporate Brochure Card (4 cols) */}
          <div className="lg:col-span-4">
            <div className="p-5 rounded-2xl bg-navy-900/90 border border-white/10 flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-white p-1.5 shrink-0">
                <img
                  src="/images/brand/qr-code.png"
                  alt="Masterchief Global QR Code"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xs font-bold text-white block mb-1">
                  Corporate Technical Brochure
                </span>
                <p className="text-xs text-slate-400 mb-2.5">
                  Download our complete capability statement and port matrix.
                </p>
                <a
                  href={COMPANY_INFO.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400 hover:text-gold-300"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-slate-400">
            Vizhinjam &bull; Cochin &bull; Mumbai &bull; Kandla &bull; Chennai &bull; Visakhapatnam &bull; Haldia
          </p>
        </div>
      </div>
    </footer>
  );
}
