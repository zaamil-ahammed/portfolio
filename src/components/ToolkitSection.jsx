import React, { useState } from 'react';
import { ArrowUpRight, Maximize2, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ToolkitSection() {
  const [activeLightbox, setActiveLightbox] = useState(null);

  const posters = portfolioData.projects.filter((p) => p.type === 'poster');

  return (
    <section id="archive" className="py-24 sm:py-36 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-20">
        
        {/* Section 5 & 6 Header from Prathamfolio: Visual Archive + Creative Toolkit */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#9ba4e6] block mb-2 font-medium">
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

          {/* Pratham-Style Toolkit Horizontal Pill Grid with arrow_outward */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 pt-4">
            {portfolioData.toolkit.map((tool, idx) => (
              <div
                key={idx}
                className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#121216]/80 hover:bg-neutral-900 border border-white/[0.06] hover:border-[#9ba4e6]/30 transition-all duration-200"
              >
                <span className="text-xs sm:text-sm font-medium text-neutral-200 group-hover:text-white truncate">
                  {tool.name}
                </span>
                <span className="text-neutral-400 group-hover:text-[#9ba4e6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-xs font-mono">
                  ↗
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Poster Design Gallery Grid (Visual Archive Gallery) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Selected Posters & Visual Arts
            </h3>
            <span className="text-xs font-mono text-neutral-400">
              Click any poster to inspect
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {posters.map((poster) => (
              <div
                key={poster.id}
                onClick={() => setActiveLightbox(poster)}
                className="group cursor-pointer rounded-3xl overflow-hidden bg-[#121216] border border-white/[0.07] hover:border-[#9ba4e6]/40 transition-all duration-300 card-lift flex flex-col justify-between"
              >
                {/* Poster Image with Zoom Preview */}
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900">
                  <img
                    src={poster.image}
                    alt={poster.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                    <span className="text-xs font-mono text-white flex items-center gap-1.5 bg-[#09090b]/90 px-3 py-1.5 rounded-xl border border-white/10 backdrop-blur-md">
                      <Maximize2 className="w-3.5 h-3.5 text-[#9ba4e6]" />
                      Inspect High-Res
                    </span>
                  </div>
                </div>

                {/* Poster Metadata */}
                <div className="p-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#9ba4e6]">
                      {poster.category}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400">
                      Authentic
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-[#b4bbf2] transition-colors">
                    {poster.title}
                  </h4>

                  <p className="text-xs text-neutral-400 leading-relaxed font-normal line-clamp-2">
                    {poster.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {poster.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
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
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 max-h-[80vh] flex items-center justify-center">
              <img
                src={activeLightbox.image}
                alt={activeLightbox.title}
                className="max-h-[80vh] w-auto object-contain"
              />
            </div>

            {/* Details */}
            <div className="mt-4 text-center">
              <h4 className="text-base font-bold text-white">
                {activeLightbox.title}
              </h4>
              <p className="text-xs font-mono text-neutral-400 mt-1">
                {activeLightbox.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
