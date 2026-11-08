import React, { useState } from 'react';
import {
  Globe2,
  MapPin,
  Anchor,
  CheckCircle2,
  ArrowUpRight,
  Navigation,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import {
  GLOBAL_IMPACT_HIGHLIGHTS,
  INDIAN_PORTS,
  GLOBAL_REGIONS,
} from '../data/maritimeData';

export default function GlobalFootprint({ onQuickQuote }) {
  const [selectedPort, setSelectedPort] = useState(INDIAN_PORTS[0]); // Vizhinjam HQ default
  const [coastFilter, setCoastFilter] = useState('All');

  const filteredPorts = INDIAN_PORTS.filter((p) =>
    coastFilter === 'All' ? true : p.coast === coastFilter
  );

  return (
    <section
      id="global-footprint"
      className="relative py-20 lg:py-28 bg-[#0A1626] border-t border-white/10 scroll-mt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-maritime-grid opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header: How We Are Doing Currently */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/35 text-xs font-mono-tech uppercase tracking-widest text-emerald-300 font-semibold">
              <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
              CURRENT TRACK RECORD & PORT COVERAGE
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Proven Global Impact in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-[#E87A35]">
                &lt; 1 Year of Active Operation.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Rapidly empanelled as an <strong className="text-white">Approved Vendor</strong> with leading Ship Owners,
              Ship Managers, and Charterers—delivering full-spectrum services across{' '}
              <strong className="text-amber-300">All 16 Major Indian Ports</strong> and key global shipping lanes.
            </p>
          </div>
        </div>

        {/* 4 Impact Highlights from Brochure Page 6 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GLOBAL_IMPACT_HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-[#102036] border border-white/12 p-6 flex flex-col justify-between shadow-lg hover:border-[#E87A35]/50 transition-all"
            >
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded bg-[#D96B27]/20 border border-[#D96B27]/40 font-mono-tech text-[10px] font-bold text-amber-300 uppercase tracking-wider mb-3">
                  {item.tag}
                </span>
                <h3 className="font-display text-lg font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Operational Track Record</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pan-India 16-Port Interactive Network */}
        <div className="rounded-2xl bg-[#0D1B2E] border border-white/15 p-6 sm:p-8 lg:p-10 shadow-2xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="font-mono-tech text-xs uppercase tracking-widest text-[#E87A35] font-semibold">
                PAN-INDIA MARITIME EXECUTION NETWORK
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">
                All 16 Major Indian Seaports Covered — West & East Coasts
              </h3>
            </div>

            {/* Coast Filter Pills */}
            <div className="flex items-center gap-2">
              {['All', 'West Coast', 'East Coast'].map((coast) => (
                <button
                  key={coast}
                  onClick={() => setCoastFilter(coast)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    coastFilter === coast
                      ? 'bg-[#D96B27] text-white shadow-md'
                      : 'bg-[#07111E] text-slate-300 hover:text-white border border-white/10'
                  }`}
                >
                  {coast === 'All' ? 'All 16 Ports' : coast}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Interactive Indian Coastline Radar Map & Selected Port Spotlight */}
            <div className="lg:col-span-5 space-y-5">
              <div className="relative rounded-2xl bg-gradient-to-b from-[#06101E] to-[#0B1B30] border border-white/15 p-4 aspect-[4/4.3] overflow-hidden shadow-inner">
                <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded bg-[#07111E]/90 border border-white/10 text-[11px] font-mono-tech text-slate-300">
                  CLICK ANY PORT BEACON TO INSPECT
                </div>

                {/* Stylized Indian Peninsula Coastal Vector & Shipping Lanes */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  aria-label="Pan-India Maritime Port Coverage Map"
                >
                  <defs>
                    <linearGradient id="indiaLand" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#172C46" />
                      <stop offset="100%" stopColor="#0E1D31" />
                    </linearGradient>
                  </defs>

                  {/* Subtle Lat/Long Grid */}
                  {[20, 40, 60, 80].map((pos) => (
                    <g key={pos} stroke="rgba(255,255,255,0.05)" strokeWidth="0.3">
                      <line x1="0" y1={pos} x2="100" y2={pos} />
                      <line x1={pos} y1="0" x2={pos} y2="100" />
                    </g>
                  ))}

                  {/* Maritime Shipping Lane Arc around Indian Peninsula */}
                  <path
                    d="M 8 36 Q 18 65 42 93 Q 68 75 85 36"
                    fill="none"
                    stroke="#D96B27"
                    strokeWidth="0.6"
                    strokeDasharray="1.5 1.5"
                    opacity="0.65"
                  />

                  {/* Stylized India Coastal Polygon */}
                  <path
                    d="M 22 12 L 45 8 L 62 18 L 86 26 L 83 35 L 73 42 L 64 51 L 59 57 L 54 68 L 53 72 L 47 86 L 42 89 L 38 81 L 33 71 L 29 62 L 26 52 L 25 48 L 22 40 L 16 36 L 11 33 L 18 24 Z"
                    fill="url(#indiaLand)"
                    stroke="#38BDF8"
                    strokeWidth="0.6"
                    opacity="0.9"
                  />

                  {/* Port Pins */}
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
                            r={isSelected ? '4.5' : '3.2'}
                            fill={port.isHQ ? 'rgba(245, 158, 11, 0.28)' : 'rgba(217, 107, 39, 0.25)'}
                          />
                        )}
                        <circle
                          cx={port.x}
                          cy={port.y}
                          r={isSelected ? '2.2' : port.isHQ ? '2.0' : '1.4'}
                          fill={port.isHQ ? '#F59E0B' : isSelected ? '#E87A35' : '#38BDF8'}
                          stroke="#07111E"
                          strokeWidth="0.5"
                        />
                      </g>
                    );
                  })}
                </svg>

                {/* Legend */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 px-3 py-1.5 rounded-lg bg-[#07111E]/90 border border-white/10 text-[11px] text-slate-300">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    Vizhinjam Seaport HQ
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                    Major Indian Port
                  </span>
                </div>
              </div>

              {/* Selected Port Active Detail Card */}
              <div className="rounded-2xl bg-gradient-to-br from-[#132641] to-[#0A1626] border border-[#E87A35]/50 p-5 sm:p-6 space-y-4 shadow-xl">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-mono-tech uppercase tracking-wider text-amber-300 font-semibold">
                      {selectedPort.coast} • {selectedPort.state}
                    </span>
                    <h4 className="font-display text-xl font-bold text-white mt-0.5">
                      {selectedPort.name}
                    </h4>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-[#D96B27]/20 border border-[#D96B27]/40 text-amber-300 font-mono-tech text-xs font-bold shrink-0">
                    {selectedPort.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  <strong className="text-amber-300">Available Turnkey Support:</strong> {selectedPort.services}
                </p>

                <button
                  onClick={() => onQuickQuote('', selectedPort.name)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#C85A17] to-[#E87A35] hover:from-[#D96B27] hover:to-[#F59E0B] text-xs sm:text-sm font-bold text-white transition-all cursor-pointer"
                >
                  <span>Request Attendance / Supply at {selectedPort.name}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: 16 Indian Ports Interactive Directory Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {filteredPorts.map((port) => {
                const active = selectedPort.id === port.id;
                return (
                  <div
                    key={port.id}
                    onClick={() => setSelectedPort(port)}
                    className={`rounded-xl p-4 border transition-all cursor-pointer flex flex-col justify-between ${
                      active
                        ? 'bg-[#152A47] border-[#E87A35] shadow-lg shadow-[#D96B27]/15'
                        : 'bg-[#091423]/90 border-white/10 hover:border-white/25 hover:bg-[#102036]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[10px] font-mono-tech uppercase tracking-wider text-slate-400">
                          {port.coast} • {port.state}
                        </span>
                        {port.isHQ ? (
                          <span className="px-2 py-0.5 rounded bg-amber-500/20 border border-amber-400/40 text-[10px] font-mono-tech font-bold text-amber-300">
                            REGISTERED CHANDLER HQ
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono-tech text-emerald-400">● 24/7 Active</span>
                        )}
                      </div>
                      <h4 className="font-display text-sm sm:text-base font-bold text-white flex items-center gap-1.5">
                        <Anchor className="w-3.5 h-3.5 text-[#E87A35] shrink-0" />
                        <span>{port.name}</span>
                      </h4>
                      <p className="text-xs text-slate-300 mt-1.5 line-clamp-2 leading-relaxed">
                        {port.services}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Expanding Global Coverage Matrix */}
        <div className="rounded-2xl bg-[#0D1B2E] border border-white/15 p-6 sm:p-8 lg:p-10 shadow-2xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="font-mono-tech text-xs uppercase tracking-widest text-amber-300 font-semibold">
                EXPANDING GLOBAL COVERAGE
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">
                International Execution & Worldwide Advisory Reach
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Executed Services & Supplies
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-500/30 text-sky-300 font-semibold">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                Advisory & Quoting Reach
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {GLOBAL_REGIONS.map((item) => {
              const isExecution = item.type === 'execution';
              return (
                <div
                  key={item.region}
                  className="rounded-xl bg-[#081220] border border-white/10 hover:border-white/25 p-5 flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono-tech font-bold uppercase ${
                          isExecution
                            ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                            : 'bg-sky-500/15 text-sky-300 border border-sky-500/30'
                        }`}
                      >
                        {item.status}
                      </span>
                      <Globe2
                        className={`w-4 h-4 ${isExecution ? 'text-emerald-400' : 'text-sky-400'}`}
                      />
                    </div>
                    <h4 className="font-display text-lg font-bold text-white mb-1.5">
                      {item.region}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.details}
                    </p>
                  </div>

                  <button
                    onClick={() => onQuickQuote('', item.region)}
                    className="mt-4 pt-3 border-t border-white/10 inline-flex items-center justify-between text-xs font-semibold text-amber-400 hover:text-amber-300 cursor-pointer"
                  >
                    <span>Inquire for {item.region.split(' (')[0]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

