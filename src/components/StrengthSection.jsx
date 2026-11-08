import React, { useState } from 'react';
import { Compass, ShieldCheck, Zap, Layers, Quote } from 'lucide-react';
import { VISION_MISSION } from '../data/maritimeData';

const CORE_PILLARS = [
  {
    icon: Compass,
    title: 'Master + Chief Leadership',
    summary:
      'Headed by a Master Mariner (Ex-Marine Supt.) and guided by a Chief Engineer (Technical Supt.).',
  },
  {
    icon: Layers,
    title: 'Single-Window Ecosystem',
    summary:
      'One partner for surveys, audits, consultancy, riding squads, overhaul workshops, and chandlery.',
  },
  {
    icon: Zap,
    title: '“We Never Say No” Ethos',
    summary:
      '24/7 readiness to deliver economical, practical solutions without interrupting vessel schedules.',
  },
  {
    icon: ShieldCheck,
    title: '100% Statutory Compliance',
    summary:
      'Strict adherence to IMO Codes, SOLAS, MARPOL, RightShip, SIRE 2.0, Flag State, and PSC norms.',
  },
];

export default function StrengthSection() {
  const [activeTab, setActiveTab] = useState('vision');

  return (
    <section
      id="about-strength"
      className="relative py-24 lg:py-32 bg-[#0A1626] border-t border-white/10 scroll-mt-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Story + Vision/Mission Tabs */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#E87A35] font-semibold block">
                WHO WE ARE & WHY CLIENTS CHOOSE US
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                First-Hand Sea & Shore Synergy.
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Unlike conventional marine intermediaries, <strong className="text-white">Masterchief Global</strong>{' '}
                was built by maritime professionals who have commanded merchant bridges, engineered main propulsion
                rooms, and managed shore-side fleets. With over{' '}
                <strong className="text-amber-300">four decades of collective insight</strong>, we understand off-hire
                pressures, vetting standards, and tight port turnarounds from living them firsthand.
              </p>
            </div>

            {/* Clean Interactive Vision / Mission / Director's Note Switcher */}
            <div className="rounded-2xl bg-[#0F1F35] border border-white/10 p-6 sm:p-7 space-y-5">
              <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                {[
                  { id: 'vision', label: 'Our Vision' },
                  { id: 'mission', label: 'Our Mission' },
                  { id: 'message', label: "Director's Note" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-[#D96B27] text-white'
                        : 'text-slate-400 hover:text-white bg-white/5'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {activeTab === 'vision' && (
                <div className="space-y-4">
                  {VISION_MISSION.vision.items.map((item) => (
                    <div key={item.heading} className="space-y-1">
                      <h4 className="font-display text-base font-bold text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E87A35]" />
                        {item.heading}
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed pl-3.5">{item.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'mission' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {VISION_MISSION.mission.items.map((item) => (
                    <div key={item.heading} className="space-y-1">
                      <h4 className="font-display text-sm font-bold text-amber-300">
                        {item.heading}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'message' && (
                <div className="relative space-y-3">
                  <Quote className="w-8 h-8 text-[#E87A35]/30" />
                  <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed">
                    “{VISION_MISSION.directorQuote}”
                  </p>
                  <div className="text-xs font-mono-tech text-amber-300 uppercase tracking-wider">
                    — Directorate, Masterchief Global Pvt Ltd
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Iconic Vessel Bow Visual + 4 Crisp Differentiator Tiles */}
          <div className="lg:col-span-6 space-y-6">
            {/* Vessel Visual Banner */}
            <div className="relative rounded-2xl bg-gradient-to-br from-[#12243D] via-[#0B1728] to-[#261610] border border-white/12 p-6 sm:p-8 flex items-center justify-between overflow-hidden">
              <div className="space-y-2 max-w-[55%] z-10">
                <span className="font-mono-tech text-[11px] uppercase tracking-widest text-amber-400 font-semibold">
                  THE MASTER + CHIEF EDGE
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug">
                  Command Authority Meets Technical Precision.
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Delivering exact solutions required by Vessels, Ship Managers, Ship Owners, and Charterers.
                </p>
              </div>
              <img
                src="/images/brand/vessel-bow.png"
                alt="Masterchief Global Vessel"
                className="w-40 sm:w-52 h-40 sm:h-48 object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.75)] -mr-4 scale-110"
              />
            </div>

            {/* 4 Clean, Non-Repetitive Value Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CORE_PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="rounded-xl bg-[#0E1D31] border border-white/10 hover:border-[#E87A35]/40 p-5 space-y-2.5 transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#D96B27]/15 border border-[#D96B27]/30 flex items-center justify-center text-[#E87A35]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-display text-base font-bold text-white">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {pillar.summary}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
