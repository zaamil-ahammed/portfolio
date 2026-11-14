import React, { useState, useEffect } from 'react';
import { Maximize2, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ToolkitSection() {
  const [activeLightbox, setActiveLightbox] = useState(null);

  const posters = portfolioData.projects.filter((p) => p.type === 'poster');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveLightbox(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="archive" className="py-24 sm:py-36 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-20">
        
        {/* Visual Archive + Creative Toolkit */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#9ba4e6] block mb-2 font-semibold">
                Tools & Capabilities
              </span>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
                Visual Archive
              </h2>
            </div>
            <span className="text-sm font-mono text-neutral-400">
              My Creative Toolkit
            </span>
          </div>

          {/* Toolkit Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
            {portfolioData.toolkit.map((tool, idx) => (
              <div
                key={idx}
                className="group flex items-center justify-between p-4 rounded-2xl bg-[#121216]/80 hover:bg-[#181820] border border-white/[0.07] hover:border-[#9ba4e6]/40 transition-all duration-200 shadow-sm cursor-default"
              >
                <span className="text-xs sm:text-sm font-medium text-neutral-200 group-hover:text-white truncate">
                  {tool.name}
                </span>
                <span className="text-neutral-500 group-hover:text-[#9ba4e6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-sm font-mono">
                  ↗
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Poster Design Gallery Grid */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Selected Posters & Visual Arts
            </h3>
            <span className="text-xs font-mono text-neutral-400">
              Click any poster to inspect in high-resolution
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {posters.map((poster) => (
              <div
                key={poster.id}
                onClick={() => setActiveLightbox(poster)}
                className="group cursor-pointer rounded-[2rem] overflow-hidden bg-[#121216] border border-white/[0.08] hover:border-[#9ba4e6]/50 transition-all duration-300 card-lift flex flex-col justify-between shadow-lg"
              >
                {/* Poster Image with Zoom Preview */}
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900">
                  <img
                    src={poster.image}
                    alt={poster.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-5">
                    <span className="text-xs font-mono text-white flex items-center gap-2 bg-[#09090b]/90 px-3.5 py-2 rounded-full border border-white/10 backdrop-blur-md shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5 text-[#9ba4e6]" />
                      Inspect High-Res
                    </span>
                  </div>
                </div>

                {/* Poster Metadata */}
                <div className="p-6 space-y-2.5">
                  <span className="text-[11px] font-mono text-[#9ba4e6] font-semibold block">
                    {poster.category}
                  </span>

                  <h4 className="text-lg font-bold text-white group-hover:text-[#b4bbf2] transition-colors leading-snug">
                    {poster.title}
                  </h4>

                  <p className="text-xs text-neutral-400 leading-relaxed font-normal line-clamp-2">
                    {poster.description}
                  </p>

                  <div className="pt-2 text-[11px] font-mono text-neutral-500">
                    {poster.tags.join(' · ')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 bg-[#09090b]/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="relative max-w-3xl max-h-[92vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute -top-12 right-0 p-2 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Poster Enlarged */}
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 max-h-[78vh] flex items-center justify-center">
              <img
                src={activeLightbox.image}
                alt={activeLightbox.title}
                className="max-h-[78vh] w-auto object-contain"
              />
            </div>

            {/* Details */}
            <div className="mt-4 text-center space-y-1">
              <h4 className="text-lg font-bold text-white">
                {activeLightbox.title}
              </h4>
              <p className="text-xs font-mono text-neutral-400">
                {activeLightbox.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
