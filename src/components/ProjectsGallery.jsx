import React, { useState } from 'react';
import {
  Camera,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  MapPin
} from 'lucide-react';
import { PROJECTS_GALLERY } from '../data/maritimeData';

const GALLERY_FILTERS = [
  'All',
  'Heavy Lift & Stowage',
  'Drydock & Repair',
  'Port & Terminal',
  'Hold Cleaning',
  'Inspection & Survey',
  'Offshore & Towage'
];

export default function ProjectsGallery() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredProjects =
    selectedFilter === 'All'
      ? PROJECTS_GALLERY
      : PROJECTS_GALLERY.filter((item) => item.category === selectedFilter);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section id="projects" className="relative py-28 bg-navy-950 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">
              <Camera className="w-3.5 h-3.5" />
              <span>Executed Operations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              Field Execution <span className="gold-gradient-text">Gallery</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md leading-relaxed">
            Real-world snapshots from our breakbulk lashing, drydock retrofits, hold cleaning, and terminal engineering operations.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-10">
          {GALLERY_FILTERS.map((cat) => {
            const isActive = selectedFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedFilter(cat);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gold-500 text-navy-950 shadow-md shadow-gold-500/20'
                    : 'bg-navy-900/80 text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Sleek Visual-First 3-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => openLightbox(index)}
              className="group relative h-72 rounded-2xl overflow-hidden border border-white/10 hover:border-gold-500/40 transition-all duration-300 cursor-pointer bg-navy-900"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/35 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              {/* Top Right Expand Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-navy-950/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-gold-400" />
              </div>

              {/* Bottom Overlay Text */}
              <div className="absolute bottom-0 inset-x-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-gold-500/20 border border-gold-500/30 text-[10px] font-semibold uppercase tracking-wider text-gold-300">
                    {project.category}
                  </span>
                  <span className="text-[11px] text-slate-300 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    {project.location}
                  </span>
                </div>
                <h3 className="text-base font-display font-bold text-white group-hover:text-gold-300 transition-colors leading-snug">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Toggle */}
        {filteredProjects.length > 6 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-900/90 hover:bg-navy-800 text-white font-semibold text-xs uppercase tracking-wider border border-white/15 hover:border-gold-500/40 transition-all cursor-pointer"
            >
              {showAll ? (
                <>
                  <span>Show Featured Only (6)</span>
                  <ChevronUp className="w-4 h-4 text-gold-400" />
                </>
              ) : (
                <>
                  <span>View All {filteredProjects.length} Project Photos</span>
                  <ChevronDown className="w-4 h-4 text-gold-400" />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredProjects[lightboxIndex] && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-navy-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
        >
          <button
            onClick={closeLightbox}
            className="fixed top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-50"
            aria-label="Close gallery preview"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={prevImage}
            className="fixed left-4 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full bg-navy-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="relative h-[45vh] sm:h-[60vh] bg-black flex items-center justify-center">
              <img
                src={filteredProjects[lightboxIndex].image}
                alt={filteredProjects[lightboxIndex].title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-navy-900">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="px-2.5 py-0.5 rounded bg-gold-500/20 text-gold-400 text-xs font-semibold">
                    {filteredProjects[lightboxIndex].category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {filteredProjects[lightboxIndex].location}
                  </span>
                </div>
                <h4 className="text-lg font-display font-bold text-white mb-1">
                  {filteredProjects[lightboxIndex].title}
                </h4>
                <p className="text-sm text-slate-300">
                  {filteredProjects[lightboxIndex].description}
                </p>
              </div>
              <div className="text-xs font-mono text-slate-500 shrink-0">
                {lightboxIndex + 1} / {filteredProjects.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
