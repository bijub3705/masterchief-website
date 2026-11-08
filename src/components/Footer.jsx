import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  FileDown,
  ArrowUpRight,
  ShieldCheck,
  Anchor,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/maritimeData';

export default function Footer({ onQuickQuote }) {
  return (
    <footer className="bg-[#040A12] border-t border-white/12 text-slate-300">
      {/* Upper Accreditations & Ecosystem Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-2">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-[#E87A35] font-semibold">
              MASTERCHIEF GLOBAL PVT LTD
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              LET US BUILD A COMPETENT ECOSYSTEM.
            </h3>
            <p className="text-sm text-slate-400 max-w-xl">
              An ISO 9001:2015 Certified Company • Registered Ship Chandler at Vizhinjam International Seaport •
              ShipServ TradeNet ID: {COMPANY_INFO.shipServId}
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-wrap items-center lg:justify-end gap-4">
            <div className="bg-white rounded-xl px-4 py-2.5 flex items-center gap-3 shadow-md">
              <img
                src="/images/brand/vizhinjam-seaport.jpg"
                alt="Vizhinjam International Seaport"
                className="h-9 w-auto object-contain"
              />
              <div className="text-left">
                <div className="text-[10px] font-bold uppercase text-slate-500">Official Status</div>
                <div className="text-xs font-extrabold text-slate-900">Registered Ship Chandler</div>
              </div>
            </div>

            <div className="bg-white rounded-xl px-4 py-2.5 flex items-center gap-3 shadow-md">
              <img
                src="/images/brand/shipserv.png"
                alt="ShipServ Logo"
                className="h-8 w-auto object-contain"
              />
              <div className="text-left">
                <div className="text-[10px] font-bold uppercase text-slate-500">ShipServ Supplier</div>
                <div className="text-xs font-mono-tech font-extrabold text-slate-900">
                  TNID: {COMPANY_INFO.shipServId}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl px-4 py-2.5 flex items-center gap-3 shadow-md">
              <img
                src="/images/brand/iso.png"
                alt="ISO 9001:2015"
                className="h-8 w-auto object-contain"
              />
              <div className="text-left">
                <div className="text-[10px] font-bold uppercase text-slate-500">Quality Certified</div>
                <div className="text-xs font-extrabold text-slate-900">ISO 9001:2015</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & QR */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-white p-1.5 flex items-center justify-center">
                <img
                  src="/logo-hi.png"
                  alt="Masterchief Global Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-display text-xl font-bold text-white tracking-wider">
                  MASTERCHIEF <span className="text-[#E87A35]">GLOBAL</span>
                </div>
                <div className="text-[10px] font-mono-tech uppercase tracking-widest text-slate-400">
                  A Complete Spectrum of Maritime Solutions
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Headed by a Master Mariner turned Ex-Marine Superintendent and guided by a Chief Engineer turned Technical
              Superintendent, backed by over 40 years of combined maritime insight across India and global ports.
            </p>

            {/* Official QR Code & Brochure Link */}
            <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10">
              <img
                src="/images/brand/qr-code.png"
                alt="Masterchief Global QR Code"
                className="w-16 h-16 rounded-lg bg-white p-1 object-contain shrink-0"
              />
              <div className="space-y-1.5">
                <div className="text-xs font-bold text-white">Scan or Download Global Brochure</div>
                <p className="text-[11px] text-slate-400">
                  Keep our complete 12-pillar capability profile & port directory handy for your fleet desk.
                </p>
                <a
                  href="/Masterchief_Global_Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Download PDF Brochure</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: 12 Service Verticals Quick Links */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-mono-tech text-xs uppercase tracking-widest text-amber-300 font-bold">
              12 CORE MARITIME SOLUTION VERTICALS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {SERVICES_DATA.map((service) => (
                <button
                  key={service.id}
                  onClick={() => onQuickQuote(service.title, '')}
                  className="text-left text-xs text-slate-300 hover:text-amber-300 transition-colors py-0.5 flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="font-mono-tech text-[10px] text-[#E87A35]">{service.number}.</span>
                  <span className="truncate">{service.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Direct Headquarters & 24/7 Dispatch */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono-tech text-xs uppercase tracking-widest text-amber-300 font-bold">
              HEADQUARTERS & 24/7 DISPATCH
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E87A35] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">{COMPANY_INFO.legalName}</strong>
                  <span>{COMPANY_INFO.address.line1},</span>
                  <br />
                  <span>{COMPANY_INFO.address.city}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E87A35] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.contact.primaryEmail}`}
                  className="hover:text-amber-300 transition-colors font-medium"
                >
                  {COMPANY_INFO.contact.primaryEmail}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="font-mono-tech">
                  <a href="tel:+919778606981" className="hover:text-amber-300">
                    +91 9778606981
                  </a>{' '}
                  /{' '}
                  <a href="tel:+919778606991" className="hover:text-amber-300">
                    9778606991
                  </a>
                </div>
              </div>
            </div>

            {/* Social & Instant Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_INFO.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg bg-white/8 hover:bg-white/15 border border-white/10 text-xs font-semibold text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg bg-emerald-600/25 hover:bg-emerald-600/40 border border-emerald-500/30 text-xs font-semibold text-emerald-300 transition-colors"
              >
                WhatsApp Ops
              </a>
              <a
                href={`mailto:${COMPANY_INFO.contact.primaryEmail}`}
                className="px-3 py-2 rounded-lg bg-[#D96B27]/20 hover:bg-[#D96B27]/35 border border-[#D96B27]/40 text-xs font-semibold text-amber-300 transition-colors"
              >
                Email Desk
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10 bg-[#02060B] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span>ISO 9001:2015 Certified</span>
            <span>•</span>
            <span>ShipServ TNID: {COMPANY_INFO.shipServId}</span>
            <span>•</span>
            <span>Vizhinjam Seaport Registered Ship Chandler</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

