import React from 'react';
import {
  ShieldCheck,
  Compass,
  Anchor,
  ArrowRight,
  FileDown,
  PhoneCall,
  CheckCircle2,
  Award,
  Globe2,
  Wrench,
} from 'lucide-react';
import { COMPANY_INFO, KEY_METRICS } from '../data/maritimeData';

export default function Hero({ onQuickQuote }) {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-32 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-between overflow-hidden bg-[#07111E]"
    >
      {/* Background Video & Layered Maritime Overlays (Instant load with poster fallback) */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-35 scale-105"
          src="/videos/masterchief_home.mp4"
          poster="/images/brand/aerial-container-ship.png"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111E] via-[#07111E]/90 to-[#07111E]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111E] via-transparent to-[#07111E]/80" />
        <div className="absolute inset-0 bg-maritime-grid opacity-60" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Authority */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Accreditation Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/8 border border-white/15 backdrop-blur-md">
              <span className="px-2 py-0.5 rounded-full text-[11px] font-mono-tech font-bold uppercase bg-[#D96B27] text-white">
                ISO 9001:2015
              </span>
              <span className="text-xs sm:text-sm font-medium text-amber-200">
                Registered Ship Chandler (Vizhinjam Seaport)
              </span>
              <span className="text-white/30">•</span>
              <span className="text-xs font-mono-tech text-sky-300">
                ShipServ TNID: {COMPANY_INFO.shipServId}
              </span>
            </div>

            {/* Brochure Main Headline */}
            <div className="space-y-3">
              <p className="font-mono-tech text-xs sm:text-sm uppercase tracking-[0.22em] text-[#E87A35] font-semibold">
                MASTER MARINER & CHIEF ENGINEER LED MARITIME SOLUTIONS
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                YOUR{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#E87A35] to-[#D96B27]">
                  COMPETENT PARTNER
                </span>{' '}
                IN THE MARITIME INDUSTRY.
              </h1>
              <p className="font-display text-xl sm:text-2xl font-semibold text-slate-200 pt-1">
                Providing a Complete Spectrum of Marine Solutions —{' '}
                <span className="text-amber-300 underline decoration-[#D96B27]/70 underline-offset-4">
                  “We Never Say No.”
                </span>
              </p>
            </div>

            {/* Executive Summary */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Headed by a <strong className="text-white">Master Mariner turned Ex-Marine Superintendent</strong> and
              guided by a <strong className="text-white">Chief Engineer turned Technical Superintendent</strong>. With{' '}
              <strong className="text-amber-300">over 40 years of combined sea & shore experience</strong>, we deliver
              turnkey surveys, vetting audits, 24/7 engineering consultancy, riding squads, LSA/FFA, lab testing, and
              IMPA/OEM ship supplies across <strong className="text-white">All Major Ports in India</strong> and key
              international hubs.
            </p>

            {/* Quick Capability Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 max-w-2xl">
              {[
                'Surveys, Pre-SIRE 2.0, RightShip & ISM/ISPS/MLC Audits',
                '24/7 Tech Consultancy, Dry-Docking & Riding Squads (6G Welders)',
                'OEM Engine Spares, IMPA/ISSA Stores, PPE & Fresh Provisions',
                'Port Captaincy, Supercargo, Hold Cleaning & Lab Testing',
              ].map((point) => (
                <div key={point} className="flex items-start gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#E87A35] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <button
                onClick={() => onQuickQuote('', '')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#C85A17] to-[#E87A35] hover:from-[#D96B27] hover:to-[#F59E0B] shadow-xl shadow-[#D96B27]/30 hover:scale-[1.02] transition-all cursor-pointer"
              >
                <span>Request Vessel Support / Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md transition-all"
              >
                <Compass className="w-5 h-5 text-amber-400" />
                <span>Explore 12 Core Services</span>
              </a>

              <a
                href="/Masterchief_Global_Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold text-slate-200 hover:text-white bg-[#0F1E32]/90 hover:bg-[#162942] border border-white/15 transition-all"
              >
                <FileDown className="w-4 h-4 text-[#E87A35]" />
                <span>Official Brochure (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Command Showcase Card & Live Status */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-[#112239]/90 to-[#0A1626]/95 border border-white/15 p-6 sm:p-7 shadow-2xl backdrop-blur-xl overflow-hidden">
              {/* Top Copper Accent Glow */}
              <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-[#D96B27]/25 blur-3xl pointer-events-none" />

              {/* Header Status */}
              <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-mono-tech uppercase tracking-widest text-amber-400 font-semibold block">
                    CURRENT OPERATIONAL MOMENTUM
                  </span>
                  <h2 className="font-display text-lg sm:text-xl font-bold text-white mt-0.5">
                    Proven Global Impact in &lt; 1 Year
                  </h2>
                </div>
                <div className="px-3 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono-tech text-xs font-semibold">
                  APPROVED VENDOR
                </div>
              </div>

              {/* Vessel Visual + Badges */}
              <div className="relative rounded-xl bg-gradient-to-br from-[#07111E] via-[#0E2038] to-[#231915] border border-white/10 p-4 mb-5 flex items-center justify-between overflow-hidden">
                <div className="space-y-2 z-10 max-w-[58%]">
                  <span className="inline-block text-[10px] font-mono-tech uppercase tracking-wider px-2 py-0.5 rounded bg-[#D96B27]/20 text-amber-300 border border-[#D96B27]/40">
                    SEA & SHORE SYNERGY
                  </span>
                  <p className="font-display text-sm sm:text-base font-bold text-white leading-snug">
                    Empanelled with Leading Ship Owners, Ship Managers & Charterers
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Executed across <strong className="text-white">All Major Indian Ports</strong> +{' '}
                    <strong className="text-amber-300">Singapore, China, Malaysia, GCC, Tanzania & Sri Lanka</strong>.
                  </p>
                </div>
                <img
                  src="/images/brand/vessel-bow.png"
                  alt="Masterchief Global Vessel"
                  className="w-36 sm:w-44 h-36 sm:h-40 object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.7)] -mr-3 scale-110"
                />
              </div>

              {/* 3 Official Accreditation Tiles */}
              <div className="grid grid-cols-3 gap-2.5 mb-5">
                <div className="rounded-xl bg-white/95 p-2.5 flex flex-col items-center justify-center text-center shadow-sm">
                  <img
                    src="/images/brand/vizhinjam-seaport.jpg"
                    alt="Vizhinjam International Seaport"
                    className="h-9 w-auto object-contain mb-1"
                  />
                  <span className="text-[10px] font-bold text-slate-800 leading-tight">
                    Registered Ship Chandler
                  </span>
                </div>

                <div className="rounded-xl bg-white/95 p-2.5 flex flex-col items-center justify-center text-center shadow-sm">
                  <img
                    src="/images/brand/shipserv.png"
                    alt="ShipServ Registered"
                    className="h-8 w-auto object-contain mb-1"
                  />
                  <span className="text-[10px] font-bold text-slate-800 font-mono-tech leading-tight">
                    TNID: {COMPANY_INFO.shipServId}
                  </span>
                </div>

                <div className="rounded-xl bg-white/95 p-2.5 flex flex-col items-center justify-center text-center shadow-sm">
                  <img
                    src="/images/brand/iso.png"
                    alt="ISO 9001:2015 Certified"
                    className="h-8 w-auto object-contain mb-1"
                  />
                  <span className="text-[10px] font-bold text-slate-800 leading-tight">
                    ISO 9001:2015 Certified
                  </span>
                </div>
              </div>

              {/* Direct 24/7 Operations Desk Strip */}
              <div className="rounded-xl bg-[#07111E]/90 border border-white/10 p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#D96B27]/20 border border-[#D96B27]/40 flex items-center justify-center text-[#E87A35] shrink-0">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">24/7 Immediate Vessel Consultation</div>
                    <a
                      href="tel:+919778606981"
                      className="text-xs sm:text-sm font-mono-tech font-bold text-white hover:text-amber-400 transition-colors"
                    >
                      +91 9778606981 / 9778606991
                    </a>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${encodeURIComponent(
                    'Hello Masterchief Global Operations Team, we require vessel assistance / quotation.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white transition-colors"
                >
                  WhatsApp Ops Desk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Key Metrics Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 lg:mt-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-5 sm:p-7 rounded-2xl bg-[#0C1A2E]/90 border border-white/12 backdrop-blur-xl shadow-2xl">
          {KEY_METRICS.map((m, idx) => (
            <div
              key={m.label}
              className={`flex flex-col justify-between ${
                idx !== 0 ? 'lg:border-l lg:border-white/10 lg:pl-6' : ''
              }`}
            >
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-[#E87A35]">
                  {m.value}
                </span>
                <span className="font-mono-tech text-xs sm:text-sm uppercase tracking-wider text-amber-200 font-semibold">
                  {m.unit}
                </span>
              </div>
              <div className="mt-1.5">
                <div className="text-sm sm:text-base font-bold text-white">{m.label}</div>
                <div className="text-xs text-slate-400 mt-0.5 leading-snug">{m.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

