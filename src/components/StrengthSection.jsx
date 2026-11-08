import React from 'react';
import {
  Compass,
  ShieldCheck,
  Award,
  Zap,
  CheckCircle2,
  XCircle,
  Users,
  Scale,
  Quote,
  Ship,
  Wrench,
} from 'lucide-react';
import {
  LEADERSHIP_STRENGTHS,
  VISION_MISSION,
  COMPETITIVE_EDGE_COMPARISON,
} from '../data/maritimeData';

const iconMap = {
  'command-leadership': Compass,
  'core-team': Users,
  'never-say-no': Zap,
  'regulatory-compliance': ShieldCheck,
};

export default function StrengthSection({ onQuickQuote }) {
  return (
    <section
      id="about-strength"
      className="relative py-20 lg:py-28 bg-[#0A1626] border-t border-white/10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-maritime-grid opacity-35 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section Header: Who We Are & Core Strength */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D96B27]/15 border border-[#D96B27]/35 text-xs font-mono-tech uppercase tracking-widest text-amber-300 font-semibold">
              <Compass className="w-3.5 h-3.5 text-[#E87A35]" />
              WHO WE ARE & OUR CORE STRENGTH
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              The{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-[#E87A35]">
                “Master + Chief”
              </span>{' '}
              Command Advantage.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Unlike conventional marine brokers, <strong className="text-white">Masterchief Global</strong> unites
              first-hand merchant vessel command (<strong className="text-amber-300">Master Mariner</strong>) and
              chief-level marine engineering (<strong className="text-amber-300">Chief Engineer</strong>) with
              shore-based superintendency to solve complex vessel challenges with certainty.
            </p>
          </div>
        </div>

        {/* 4 Core Strength Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {LEADERSHIP_STRENGTHS.map((pillar) => {
            const IconComponent = iconMap[pillar.id] || ShieldCheck;
            return (
              <div
                key={pillar.id}
                className="group relative rounded-2xl bg-gradient-to-b from-[#112239] to-[#0C1829] border border-white/12 hover:border-[#E87A35]/50 p-7 sm:p-8 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <span className="px-3 py-1 rounded-md bg-[#D96B27]/15 border border-[#D96B27]/30 font-mono-tech text-xs font-bold text-amber-300 tracking-wider">
                    {pillar.badge}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:bg-[#D96B27]/20 group-hover:border-[#D96B27]/40 flex items-center justify-center text-[#E87A35] transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-white/10">
                  {pillar.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Vision, Mission & Director's Message Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Our Vision & Our Mission (From Global Brochure Page 2) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Vision Card */}
            <div className="rounded-2xl bg-[#0E1E33] border border-white/12 p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/15 text-amber-300 font-mono-tech text-xs font-bold uppercase mb-4">
                  {VISION_MISSION.vision.title}
                </div>
                <div className="space-y-5">
                  {VISION_MISSION.vision.items.map((item) => (
                    <div key={item.heading} className="space-y-1.5">
                      <h4 className="font-display text-base sm:text-lg font-bold text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#E87A35]" />
                        {item.heading}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-4">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Bridge-to-Engine Synergy</span>
                <span className="font-mono-tech text-amber-300 font-semibold">40+ Yrs Pedigree</span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="rounded-2xl bg-[#0E1E33] border border-white/12 p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#D96B27]/20 text-[#E87A35] font-mono-tech text-xs font-bold uppercase mb-4">
                  {VISION_MISSION.mission.title}
                </div>
                <div className="space-y-4">
                  {VISION_MISSION.mission.items.map((item) => (
                    <div key={item.heading} className="space-y-1">
                      <h4 className="font-display text-sm sm:text-base font-bold text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        {item.heading}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed pl-4">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Director's Message & Heritage Card */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#8B321B] via-[#6E2614] to-[#2A130D] border border-amber-500/30 p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <Quote className="w-20 h-20 text-white/10 absolute top-4 right-4 pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-black/30 border border-white/15 font-mono-tech text-xs uppercase tracking-wider text-amber-200 font-semibold">
                LEADERSHIP & FOUNDING ETHOS
              </span>
              <h3 className="font-display text-2xl font-bold text-white">
                Built by Maritime Families, Driven by Seagoing Excellence
              </h3>
              <p className="text-sm sm:text-base text-amber-50/95 leading-relaxed italic">
                “{VISION_MISSION.directorQuote}”
              </p>
              <p className="text-xs sm:text-sm text-amber-100/85 leading-relaxed pt-2">
                Established by visionary leadership deeply rooted in the merchant navy alongside Master Mariner and
                Chief Engineer command experience, our team understands vessels not merely from manuals—but from living,
                commanding, and engineering aboard them.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-white/15 flex items-center justify-between gap-4 relative z-10">
              <div>
                <div className="text-sm font-bold text-white">Directorate & Superintendency Desk</div>
                <div className="text-xs text-amber-200">Masterchief Global Pvt Ltd • ISO 9001:2015</div>
              </div>
              <button
                onClick={() => onQuickQuote('Technical Assistance & Consultancy', '')}
                className="px-4 py-2 rounded-lg bg-white text-[#8B321B] hover:bg-amber-100 text-xs font-bold transition-colors cursor-pointer shrink-0"
              >
                Consult Our Team
              </button>
            </div>
          </div>
        </div>

        {/* Competitive Edge Matrix: Why Clients Choose Masterchief Global over Competitors */}
        <div id="competitive-edge" className="pt-6 scroll-mt-28">
          <div className="rounded-2xl bg-[#0D1B2E] border border-white/15 overflow-hidden shadow-2xl">
            <div className="p-6 sm:p-8 lg:p-10 border-b border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-gradient-to-r from-[#112239] to-[#0D1B2E]">
              <div className="space-y-2">
                <span className="font-mono-tech text-xs uppercase tracking-widest text-[#E87A35] font-semibold">
                  WHY SHIP OWNERS, MANAGERS & CHARTERERS PREFER US
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  How Masterchief Global Gives You a Decisive Operational Edge
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono-tech font-semibold">
                  OEM & IMPA Grade Quality
                </span>
                <span className="px-3.5 py-1.5 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono-tech font-semibold">
                  Single-Window Accountability
                </span>
              </div>
            </div>

            <div className="divide-y divide-white/10">
              {/* Table Header (Desktop) */}
              <div className="hidden lg:grid lg:grid-cols-12 bg-[#07111E]/70 px-8 py-4 text-xs font-mono-tech uppercase tracking-wider text-slate-400 font-semibold">
                <div className="col-span-3">Evaluation Criteria</div>
                <div className="col-span-5 text-amber-300">Masterchief Global Advantage</div>
                <div className="col-span-4 text-slate-400">Typical Local Vendor / Broker</div>
              </div>

              {COMPETITIVE_EDGE_COMPARISON.map((row) => (
                <div
                  key={row.dimension}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 px-6 sm:px-8 py-6 items-start hover:bg-white/[0.02] transition-colors"
                >
                  <div className="lg:col-span-3 font-display text-base sm:text-lg font-bold text-white">
                    {row.dimension}
                  </div>
                  <div className="lg:col-span-5 flex items-start gap-3 bg-emerald-500/[0.07] border border-emerald-500/20 rounded-xl p-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-100 leading-relaxed font-medium">{row.masterchief}</p>
                  </div>
                  <div className="lg:col-span-4 flex items-start gap-3 bg-white/[0.03] border border-white/8 rounded-xl p-4">
                    <XCircle className="w-5 h-5 text-rose-400/80 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{row.typicalCompetitor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

