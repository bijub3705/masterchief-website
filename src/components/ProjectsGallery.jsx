import React, { useState } from 'react';
import {
  Camera,
  MapPin,
  Maximize2,
  X,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import { PROJECTS_GALLERY } from '../data/maritimeData';

const GALLERY_FILTERS = [
  'All Operations',
  'Surveys & Vetting',
  'Engineering & Repairs',
  'Spares, Stores & Provisions',
  'Cargo & Port Turnaround',
  'Certified PPE & Safety',
];

export default function ProjectsGallery({ onQuickQuote }) {
  const [selectedCategory, setSelectedCategory] = useState('All Operations');
  const [lightboxItem, setLightboxItem] = useState(null);

  const visibleProjects =
    selectedCategory === 'All Operations'
      ? PROJECTS_GALLERY
      : PROJECTS_GALLERY.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="relative py-20 lg:py-28 bg-[#07111E] border-t border-white/10 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D96B27]/15 border border-[#D96B27]/35 text-xs font-mono-tech uppercase tracking-widest text-amber-300 font-semibold">
              <Camera className="w-3.5 h-3.5 text-[#E87A35]" />
              EXCELLENCE DELIVERED • VERIFIED FIELD SNAPSHOTS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              A Snapshot of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-[#E87A35]">
                Recent Projects & Vessel Executions.
              </span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Real operational proof from our field teams—spanning Pre-RightShip inspections, turbocharger and valve
              overhauls, PCB automation repairs, supercargo stowage oversight, crane-hoisted provisions, and certified
              PPE supplies.
            </p>
          </div>

          <div className="text-xs font-mono-tech text-slate-400">
            Showing <strong className="text-white">{visibleProjects.length}</strong> Verified Field Executions
          </div>
        </div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 pb-2">
          {GALLERY_FILTERS.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  active
                    ? 'bg-gradient-to-r from-[#C85A17] to-[#E87A35] text-white shadow-lg shadow-[#D96B27]/25'
                    : 'bg-[#0F1E32] text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group rounded-2xl bg-[#0E1D31] border border-white/12 hover:border-[#E87A35]/60 overflow-hidden cursor-pointer flex flex-col justify-between shadow-xl transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden bg-[#050C16]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1D31] via-transparent to-black/30" />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#07111E]/85 backdrop-blur-md border border-white/15 text-[11px] font-mono-tech font-semibold text-amber-300">
                    {item.category}
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:bg-[#D96B27] transition-all">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 text-xs text-slate-200 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#E87A35]" />
                  <span>{item.location}</span>
                </div>
              </div>

              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-xs text-amber-400 font-semibold">
                  <span>Inspect Project Detail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl bg-[#0D1B2E] border border-white/20 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-[#D96B27] text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-7 bg-black flex items-center justify-center max-h-[70vh]">
                <img
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>
              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <span className="inline-block px-3 py-1 rounded-md bg-[#D96B27]/20 border border-[#D96B27]/40 text-xs font-mono-tech font-bold text-amber-300">
                    {lightboxItem.category}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {lightboxItem.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono-tech">
                    <MapPin className="w-3.5 h-3.5 text-[#E87A35]" />
                    <span>{lightboxItem.location}</span>
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed pt-2">
                    {lightboxItem.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <button
                    onClick={() => {
                      const cat = lightboxItem.category;
                      setLightboxItem(null);
                      onQuickQuote(cat, '');
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#C85A17] to-[#E87A35] text-sm font-bold text-white cursor-pointer"
                  >
                    <span>Request Similar Service / Supply</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

