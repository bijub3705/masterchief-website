import React, { useState, useMemo } from 'react';
import {
  Search,
  CheckCircle2,
  ArrowUpRight,
  ArrowRight,
  X,
} from 'lucide-react';
import { SERVICE_CATEGORIES, SERVICES_DATA } from '../data/maritimeData';

export default function ServicesExplorer({ onQuickQuote }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((service) => {
      const matchesCat = activeCategory === 'all' || service.category === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesCat;
      return (
        matchesCat &&
        (service.title.toLowerCase().includes(q) ||
          service.shortDesc.toLowerCase().includes(q) ||
          service.standards.some((s) => s.toLowerCase().includes(q)) ||
          service.subServices.some((sub) => sub.toLowerCase().includes(q)))
      );
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 bg-[#07111E] border-t border-white/10 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Clean Header + Search */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#E87A35] font-semibold block">
              OUR SERVICES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              12 Core Maritime Verticals.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Select any capability below to inspect our full technical scope, statutory standards, and deliverables.
            </p>
          </div>

          {/* Compact Search */}
          <div className="w-full lg:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter services (e.g. SIRE, 6G, IMPA)..."
              className="w-full pl-10 pr-8 py-2.5 rounded-full bg-[#0F1E32] border border-white/12 text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-[#E87A35] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Clean Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {SERVICE_CATEGORIES.map((cat) => {
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  active
                    ? 'bg-[#D96B27] text-white shadow-md'
                    : 'bg-[#0F1E32] text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Sleek, Uncluttered 12-Service Grid */}
        {filteredServices.length === 0 ? (
          <div className="rounded-2xl bg-[#0F1E32] border border-white/10 p-10 text-center space-y-3">
            <p className="text-base font-semibold text-white">
              Need a customized solution for &ldquo;{searchQuery}&rdquo;?
            </p>
            <button
              onClick={() => onQuickQuote(searchQuery, '')}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#D96B27] text-white text-xs font-bold cursor-pointer"
            >
              Request Custom Requirement
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group rounded-2xl bg-gradient-to-b from-[#0F1F35] to-[#0A1525] border border-white/10 hover:border-[#E87A35]/60 p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono-tech text-xs font-bold text-[#E87A35]">
                      {service.number}
                    </span>
                    <span className="text-[11px] font-mono-tech text-slate-400">
                      {service.categoryLabel}
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-white/8 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {service.standards.slice(0, 2).map((std) => (
                      <span
                        key={std}
                        className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono-tech text-slate-300"
                      >
                        {std}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 group-hover:translate-x-0.5 transition-transform shrink-0">
                    <span>Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Interactive Service Scope Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative max-w-3xl w-full rounded-2xl bg-[#0D1B2E] border border-white/20 overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Banner */}
            <div className="relative h-48 sm:h-56 bg-[#07111E] shrink-0">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover opacity-65"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2E] via-[#0D1B2E]/50 to-transparent" />

              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-[#D96B27] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 space-y-1">
                <span className="font-mono-tech text-xs uppercase tracking-widest text-amber-300 font-semibold">
                  PILLAR {selectedService.number} • {selectedService.categoryLabel}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {selectedService.fullDesc}
              </p>

              <div className="flex flex-wrap gap-2">
                {selectedService.standards.map((std) => (
                  <span
                    key={std}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/12 text-xs font-mono-tech text-amber-300"
                  >
                    {std}
                  </span>
                ))}
              </div>

              <div className="space-y-3 pt-2 border-t border-white/10">
                <h4 className="font-mono-tech text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Technical Scope & Deliverables
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.subServices.map((sub) => (
                    <li
                      key={sub}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-200 leading-snug bg-white/[0.03] border border-white/8 rounded-xl p-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#E87A35] shrink-0 mt-0.5" />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-white/5 cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onQuickQuote(title, '');
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#C85A17] to-[#E87A35] text-xs sm:text-sm font-bold text-white cursor-pointer"
                >
                  <span>Request Quote for This Service</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
