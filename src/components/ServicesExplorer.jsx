import React, { useState, useMemo } from 'react';
import {
  Search,
  CheckCircle2,
  ArrowUpRight,
  Layers,
  ShieldCheck,
  Wrench,
  Compass,
  PackageCheck,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from 'lucide-react';
import { SERVICE_CATEGORIES, SERVICES_DATA } from '../data/maritimeData';

export default function ServicesExplorer({ onQuickQuote }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCards, setExpandedCards] = useState({});

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((service) => {
      const matchesCat = activeCategory === 'all' || service.category === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesCat;
      const inTitle = service.title.toLowerCase().includes(q);
      const inDesc = service.shortDesc.toLowerCase().includes(q) || service.fullDesc.toLowerCase().includes(q);
      const inStandards = service.standards.some((s) => s.toLowerCase().includes(q));
      const inSubs = service.subServices.some((sub) => sub.toLowerCase().includes(q));
      return matchesCat && (inTitle || inDesc || inStandards || inSubs);
    });
  }, [activeCategory, searchQuery]);

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="services"
      className="relative py-20 lg:py-28 bg-[#07111E] border-t border-white/10 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D96B27]/15 border border-[#D96B27]/35 text-xs font-mono-tech uppercase tracking-widest text-amber-300 font-semibold">
              <Layers className="w-3.5 h-3.5 text-[#E87A35]" />
              COMPLETE SPECTRUM OF MARITIME SOLUTIONS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              12 Flagship Maritime Verticals.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-[#E87A35]">
                One Competent Partner.
              </span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Every service is tailored to your vessel’s operational schedule and budget with strict adherence to
              IMO Codes, SOLAS, MARPOL, RightShip, SIRE 2.0, Flag State, and Port State norms. Even if a specialized
              requirement is not listed below, <strong className="text-white">“We Never Say No.”</strong>
            </p>
          </div>

          {/* Search Input */}
          <div className="w-full lg:w-80">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search e.g. SIRE 2.0, 6G Welder, Bunker, IMPA..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0F1E32] border border-white/15 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-[#E87A35] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-5">
          {SERVICE_CATEGORIES.map((cat) => {
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  active
                    ? 'bg-gradient-to-r from-[#C85A17] to-[#E87A35] text-white shadow-lg shadow-[#D96B27]/25'
                    : 'bg-[#0F1E32] text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="rounded-2xl bg-[#0F1E32] border border-white/10 p-12 text-center space-y-4">
            <p className="text-lg font-semibold text-white">
              No exact match found for &ldquo;{searchQuery}&rdquo; — but we customize solutions for every vessel need!
            </p>
            <p className="text-sm text-slate-300 max-w-xl mx-auto">
              Our mission is &ldquo;We Never Say No.&rdquo; Send us your custom technical or supply requirement and our
              Superintendents will respond immediately.
            </p>
            <button
              onClick={() => onQuickQuote(searchQuery, '')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D96B27] hover:bg-[#E87A35] text-white text-sm font-bold cursor-pointer"
            >
              Request Custom Solution for &ldquo;{searchQuery}&rdquo;
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredServices.map((service) => {
              const isExpanded = !!expandedCards[service.id];
              const visibleSubs = isExpanded ? service.subServices : service.subServices.slice(0, 4);

              return (
                <div
                  key={service.id}
                  className="group rounded-2xl bg-gradient-to-b from-[#102036] to-[#0A1525] border border-white/12 hover:border-[#E87A35]/60 flex flex-col justify-between overflow-hidden shadow-xl transition-all duration-300"
                >
                  <div>
                    {/* Top Image & Number Banner */}
                    <div className="relative h-48 overflow-hidden bg-[#07111E]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-85"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#102036] via-[#102036]/40 to-transparent" />

                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                        <span className="px-2.5 py-1 rounded-md bg-[#07111E]/85 backdrop-blur-md border border-white/15 font-mono-tech text-xs font-bold text-amber-400">
                          PILLAR {service.number}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-[#D96B27]/90 backdrop-blur-md text-[11px] font-semibold text-white">
                          {service.categoryLabel}
                        </span>
                      </div>

                      {/* Regulatory Standard Pills */}
                      <div className="absolute bottom-3 left-3.5 right-3.5 flex flex-wrap gap-1.5">
                        {service.standards.map((std) => (
                          <span
                            key={std}
                            className="px-2 py-0.5 rounded bg-[#07111E]/90 border border-white/15 text-[10px] font-mono-tech text-slate-200"
                          >
                            {std}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 space-y-4">
                      <h3 className="font-display text-xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {service.shortDesc}
                      </p>

                      {/* Detailed Scope Checklist */}
                      <div className="pt-3 border-t border-white/10 space-y-2">
                        <div className="text-[11px] font-mono-tech uppercase tracking-wider text-amber-300/90 font-semibold">
                          KEY TECHNICAL DELIVERABLES ({service.subServices.length}):
                        </div>
                        <ul className="space-y-1.5">
                          {visibleSubs.map((sub) => (
                            <li key={sub} className="flex items-start gap-2 text-xs text-slate-200 leading-relaxed">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#E87A35] shrink-0 mt-0.5" />
                              <span>{sub}</span>
                            </li>
                          ))}
                        </ul>

                        {service.subServices.length > 4 && (
                          <button
                            type="button"
                            onClick={() => toggleExpand(service.id)}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 pt-1 cursor-pointer"
                          >
                            {isExpanded ? (
                              <>
                                <span>Show Fewer Deliverables</span>
                                <ChevronUp className="w-3.5 h-3.5" />
                              </>
                            ) : (
                              <>
                                <span>
                                  + {service.subServices.length - 4} More Specialized Scopes
                                </span>
                                <ChevronDown className="w-3.5 h-3.5" />
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Action */}
                  <div className="px-6 pb-6 pt-2">
                    <button
                      onClick={() => onQuickQuote(service.title, '')}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/8 hover:bg-gradient-to-r hover:from-[#C85A17] hover:to-[#E87A35] text-xs sm:text-sm font-bold text-white border border-white/15 hover:border-transparent transition-all cursor-pointer"
                    >
                      <span>Request Service / Quote</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

