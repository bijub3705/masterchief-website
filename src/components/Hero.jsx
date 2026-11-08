import React from 'react';
import { ArrowRight, Compass, FileDown } from 'lucide-react';
import { COMPANY_INFO, KEY_METRICS } from '../data/maritimeData';

export default function Hero({ onQuickQuote }) {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-28 pb-14 lg:pt-32 lg:pb-16 flex flex-col justify-between overflow-hidden bg-[#07111E]"
    >
      {/* Cinematic Ocean Video Backdrop */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-40"
          src="/videos/masterchief_home.mp4"
          poster="/images/brand/aerial-container-ship.png"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111E] via-[#07111E]/85 to-[#07111E]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111E] via-transparent to-[#07111E]/70" />
      </div>

      {/* Main Spacious Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12 lg:py-16">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.07] border border-white/15 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#E87A35]" />
            <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-amber-300 font-semibold">
              A Complete Spectrum of Maritime Solutions
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.06]">
            Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#E87A35] to-[#D96B27]">
              Competent Partner
            </span>{' '}
            in the Maritime Industry.
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
            Led by a <strong className="text-white font-semibold">Master Mariner</strong> and{' '}
            <strong className="text-white font-semibold">Chief Engineer</strong> with over 40 years of combined sea and
            shore experience—delivering surveys, compliance audits, engineering repairs, and ship supplies worldwide.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-3">
            <button
              onClick={() => onQuickQuote('', '')}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#C85A17] to-[#E87A35] hover:from-[#D96B27] hover:to-[#F59E0B] shadow-xl shadow-[#D96B27]/25 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <span>Request Vessel Support</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md transition-all"
            >
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Explore 12 Services</span>
            </a>
          </div>
        </div>
      </div>

      {/* Single Unified Trust, Metrics & Official Accreditations Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-2xl bg-[#0B192C]/90 border border-white/12 backdrop-blur-xl p-6 sm:p-7 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 7 Cols: 4 Key Metrics */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {KEY_METRICS.map((m) => (
                <div key={m.label} className="space-y-1">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                      {m.value}
                    </span>
                    <span className="font-mono-tech text-xs uppercase text-[#E87A35] font-semibold">
                      {m.unit}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium leading-snug">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Right 5 Cols: The 3 Official Accreditations (Shown Cleanly Once) */}
            <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-8 flex flex-wrap items-center justify-start lg:justify-end gap-3">
              <div className="bg-white rounded-xl px-3.5 py-2 flex items-center gap-2.5 shadow-sm">
                <img
                  src="/images/brand/vizhinjam-seaport.jpg"
                  alt="Vizhinjam International Seaport"
                  className="h-7 w-auto object-contain"
                />
                <div className="text-[11px] font-bold text-slate-900 leading-tight">
                  Registered
                  <br />
                  Ship Chandler
                </div>
              </div>

              <div className="bg-white rounded-xl px-3.5 py-2 flex items-center gap-2.5 shadow-sm">
                <img
                  src="/images/brand/shipserv.png"
                  alt="ShipServ"
                  className="h-7 w-auto object-contain"
                />
                <div className="text-[11px] font-bold text-slate-900 leading-tight font-mono-tech">
                  ShipServ
                  <br />
                  TNID: {COMPANY_INFO.shipServId}
                </div>
              </div>

              <div className="bg-white rounded-xl px-3.5 py-2 flex items-center gap-2.5 shadow-sm">
                <img
                  src="/images/brand/iso.png"
                  alt="ISO 9001:2015"
                  className="h-7 w-auto object-contain"
                />
                <div className="text-[11px] font-bold text-slate-900 leading-tight">
                  ISO 9001:2015
                  <br />
                  Certified
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
