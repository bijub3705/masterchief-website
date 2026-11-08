import React, { useState } from 'react';
import { Globe2, Anchor, ArrowUpRight } from 'lucide-react';
import { INDIAN_PORTS, GLOBAL_REGIONS } from '../data/maritimeData';

export default function GlobalFootprint({ onQuickQuote }) {
  const [selectedPort, setSelectedPort] = useState(INDIAN_PORTS[0]); // Vizhinjam HQ

  const westCoastPorts = INDIAN_PORTS.filter((p) => p.coast === 'West Coast');
  const eastCoastPorts = INDIAN_PORTS.filter((p) => p.coast === 'East Coast');
  const executionRegions = GLOBAL_REGIONS.filter((r) => r.type === 'execution');
  const advisoryRegions = GLOBAL_REGIONS.filter((r) => r.type === 'advisory');

  return (
    <section
      id="global-footprint"
      className="relative py-24 lg:py-32 bg-[#0A1626] border-t border-white/10 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Clean Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#E87A35] font-semibold block">
              CURRENT FOOTPRINT & TRACK RECORD
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Pan-India & Global Coverage.
            </h2>
          </div>
          <p className="text-slate-300 text-sm sm:text-base max-w-md leading-relaxed">
            Proven global impact in under a year of active operation—empanelled with leading Ship Owners, Managers, and
            Charterers across <strong className="text-white">16 Indian seaports</strong> and{' '}
            <strong className="text-white">10 international regions</strong>.
          </p>
        </div>

        {/* Single Unified Interactive Map + Compact Port & Global Pills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 5 Cols: Interactive Indian Coastline Map & Active Port Spotlight */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0E1E33] border border-white/12 p-5 sm:p-6 flex flex-col justify-between space-y-5">
            <div className="relative rounded-xl bg-[#07111E] border border-white/10 p-4 aspect-[4/3.8] overflow-hidden">
              <div className="absolute top-3 left-3 z-10 text-[10px] font-mono-tech uppercase tracking-wider text-slate-400">
                Interactive Port Map — Click Any Beacon
              </div>

              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                aria-label="Pan-India Maritime Port Map"
              >
                <defs>
                  <linearGradient id="indiaFill" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#162B46" />
                    <stop offset="100%" stopColor="#0C192B" />
                  </linearGradient>
                </defs>

                <path
                  d="M 8 36 Q 18 65 42 93 Q 68 75 85 36"
                  fill="none"
                  stroke="#D96B27"
                  strokeWidth="0.5"
                  strokeDasharray="1.5 1.5"
                  opacity="0.55"
                />

                <path
                  d="M 22 12 L 45 8 L 62 18 L 86 26 L 83 35 L 73 42 L 64 51 L 59 57 L 54 68 L 53 72 L 47 86 L 42 89 L 38 81 L 33 71 L 29 62 L 26 52 L 25 48 L 22 40 L 16 36 L 11 33 L 18 24 Z"
                  fill="url(#indiaFill)"
                  stroke="#38BDF8"
                  strokeWidth="0.5"
                  opacity="0.85"
                />

                {INDIAN_PORTS.map((port) => {
                  const isSelected = selectedPort.id === port.id;
                  return (
                    <g
                      key={port.id}
                      onClick={() => setSelectedPort(port)}
                      className="cursor-pointer"
                    >
                      {(isSelected || port.isHQ) && (
                        <circle
                          cx={port.x}
                          cy={port.y}
                          r={isSelected ? '4.2' : '3.0'}
                          fill={port.isHQ ? 'rgba(245, 158, 11, 0.3)' : 'rgba(217, 107, 39, 0.25)'}
                        />
                      )}
                      <circle
                        cx={port.x}
                        cy={port.y}
                        r={isSelected ? '2.1' : port.isHQ ? '1.9' : '1.3'}
                        fill={port.isHQ ? '#F59E0B' : isSelected ? '#E87A35' : '#38BDF8'}
                        stroke="#07111E"
                        strokeWidth="0.4"
                      />
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Selected Port Bar */}
            <div className="rounded-xl bg-[#07111E] border border-[#E87A35]/40 p-4 space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono-tech uppercase text-amber-300 font-semibold">
                  {selectedPort.coast} • {selectedPort.state}
                </span>
                <span className="text-[11px] font-mono-tech text-emerald-400">
                  ● {selectedPort.badge}
                </span>
              </div>
              <div className="font-display text-lg font-bold text-white">
                {selectedPort.name}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{selectedPort.services}</p>
              <button
                onClick={() => onQuickQuote('', selectedPort.name)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E87A35] hover:text-amber-300 pt-1 cursor-pointer"
              >
                <span>Request Attendance at {selectedPort.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right 7 Cols: Compact Port & Global Reach Pills */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {/* Pan-India 16 Ports Box */}
            <div className="rounded-2xl bg-[#0E1E33] border border-white/12 p-6 sm:p-7 space-y-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
                  <Anchor className="w-5 h-5 text-[#E87A35]" />
                  <span>Pan-India Port Network (16 Major Ports)</span>
                </h3>
                <span className="text-xs font-mono-tech text-slate-400">Click port to inspect</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* West Coast */}
                <div className="space-y-2.5">
                  <div className="text-xs font-mono-tech uppercase tracking-wider text-amber-300 font-semibold">
                    West Coast ({westCoastPorts.length})
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {westCoastPorts.map((port) => {
                      const active = selectedPort.id === port.id;
                      return (
                        <button
                          key={port.id}
                          onClick={() => setSelectedPort(port)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                            active
                              ? 'bg-[#D96B27] text-white font-semibold shadow-sm'
                              : port.isHQ
                              ? 'bg-amber-500/15 text-amber-200 border border-amber-500/35 hover:bg-amber-500/25'
                              : 'bg-[#07111E] text-slate-300 hover:text-white border border-white/10'
                          }`}
                        >
                          {port.name.replace(' International Seaport', ' (HQ)')}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* East Coast */}
                <div className="space-y-2.5">
                  <div className="text-xs font-mono-tech uppercase tracking-wider text-sky-300 font-semibold">
                    East Coast ({eastCoastPorts.length})
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {eastCoastPorts.map((port) => {
                      const active = selectedPort.id === port.id;
                      return (
                        <button
                          key={port.id}
                          onClick={() => setSelectedPort(port)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                            active
                              ? 'bg-[#D96B27] text-white font-semibold shadow-sm'
                              : 'bg-[#07111E] text-slate-300 hover:text-white border border-white/10'
                          }`}
                        >
                          {port.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* International Reach Box */}
            <div className="rounded-2xl bg-[#0E1E33] border border-white/12 p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
                    <Globe2 className="w-5 h-5 text-emerald-400" />
                    <span>International Execution & Advisory Reach</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                  {/* Executed Overseas */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-mono-tech uppercase tracking-wider text-emerald-300 font-semibold">
                      Executed Services & Supplies
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {executionRegions.map((r) => (
                        <button
                          key={r.region}
                          onClick={() => onQuickQuote('', r.region)}
                          className="px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 text-xs font-medium text-emerald-200 transition-colors cursor-pointer"
                        >
                          {r.region.split(' (')[0]}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Worldwide Advisory & Quoting */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-mono-tech uppercase tracking-wider text-sky-300 font-semibold">
                      Technical Advisory & Quoting
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {advisoryRegions.map((r) => (
                        <button
                          key={r.region}
                          onClick={() => onQuickQuote('', r.region)}
                          className="px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/25 text-xs font-medium text-sky-200 transition-colors cursor-pointer"
                        >
                          {r.region.split(' (')[0]}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-400 pt-4 border-t border-white/10">
                Click any international hub above to request technical advisory, pre-vetting guidance, or port quotation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
