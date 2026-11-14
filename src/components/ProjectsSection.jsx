import React, { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight, ArrowUpRight, Eye } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ProjectsSection({ onSelectProject }) {
  const [activeTab, setActiveTab] = useState('all');
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselProject = portfolioData.projects.find((p) => p.type === 'carousel');
  const totalSlides = carouselProject?.slides?.length || 0;

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const webProjects = portfolioData.projects.filter((p) => p.type === 'website');
  const posterProjects = portfolioData.projects.filter((p) => p.type === 'poster');

  return (
    <section id="projects" className="py-24 sm:py-36 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#9ba4e6] block mb-3 font-semibold">
              Architectures & Platforms
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
              Beyond the Visuals
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#121216] border border-white/10 self-start sm:self-auto">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'websites', label: 'Website Designing & Dev' },
              { id: 'carousels', label: 'Social Media Carousels' },
              { id: 'posters', label: 'Poster Showcase' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs font-mono rounded-xl transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-white text-[#09090b] font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Display */}
        <div className="space-y-12">
          
          {/* Web Applications Grid */}
          {(activeTab === 'all' || activeTab === 'websites') && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {webProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-8 sm:p-10 rounded-[2.2rem] bg-[#121216]/90 border border-white/[0.08] hover:border-[#9ba4e6]/50 transition-all duration-300 card-lift flex flex-col justify-between group shadow-lg"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#b4bbf2]">
                        {project.category}
                      </span>
                      <span className="text-emerald-400">
                        Live on Vercel
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#b4bbf2] transition-colors tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm text-neutral-400 mt-3 leading-relaxed font-normal">
                        {project.description}
                      </p>
                    </div>

                    <div className="text-xs font-mono text-neutral-500 pt-1">
                      {project.tags.join(' · ')}
                    </div>
                  </div>

                  <div className="pt-8 mt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                    <button
                      onClick={() => onSelectProject && onSelectProject(project.id)}
                      className="inline-flex items-center gap-2 text-xs font-mono text-neutral-300 hover:text-[#9ba4e6] transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Deep-Dive Case Study</span>
                    </button>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#09090b] hover:bg-neutral-200 font-semibold text-xs tracking-wide transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>Visit Live Platform</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#09090b]" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Social Carousel Card */}
          {(activeTab === 'all' || activeTab === 'carousels') && carouselProject && (
            <div className="p-8 sm:p-10 rounded-[2.2rem] bg-[#121216]/90 border border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-lg">
              
              {/* Carousel Interactive Slider */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl group">
                  <img
                    src={carouselProject.slides[carouselIndex]}
                    alt={`Slide ${carouselIndex + 1}`}
                    className="w-full h-full object-cover transition-all duration-300"
                  />

                  {/* Navigation Arrows */}
                  <div className="absolute inset-0 flex items-center justify-between p-3 pointer-events-none">
                    <button
                      onClick={prevSlide}
                      className="pointer-events-auto w-10 h-10 rounded-full bg-[#09090b]/80 hover:bg-white text-white hover:text-[#09090b] flex items-center justify-center backdrop-blur-md transition-all shadow-md active:scale-95"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="pointer-events-auto w-10 h-10 rounded-full bg-[#09090b]/80 hover:bg-white text-white hover:text-[#09090b] flex items-center justify-center backdrop-blur-md transition-all shadow-md active:scale-95"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Slide Counter */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#09090b]/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-neutral-200">
                    Slide {carouselIndex + 1} / {totalSlides}
                  </div>
                </div>
              </div>

              {/* Carousel Text Description */}
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-mono uppercase tracking-wider text-[#9ba4e6] block font-medium">
                  Multi-Slide Storytelling
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {carouselProject.title}
                </h3>

                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
                  {carouselProject.description} Designed with continuous horizontal layout flow, clear typographic eye-paths, and deliberate negative space to maintain high audience retention across social platforms.
                </p>

                <div className="text-xs font-mono text-neutral-500 pt-1">
                  {carouselProject.tags.join(' · ')}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href="https://instagram.com/zaamil.ahmed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#09090b] font-semibold text-xs transition-all shadow-sm hover:scale-[1.02]"
                  >
                    <span>View More on Instagram</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => onSelectProject && onSelectProject(carouselProject.id)}
                    className="text-xs font-mono text-neutral-400 hover:text-white transition-colors"
                  >
                    Read Case Study Details →
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* Posters Grid in Tab View */}
          {activeTab === 'posters' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {posterProjects.map((poster) => (
                <div
                  key={poster.id}
                  onClick={() => onSelectProject && onSelectProject(poster.id)}
                  className="group cursor-pointer rounded-[2rem] overflow-hidden bg-[#121216] border border-white/[0.08] hover:border-[#9ba4e6]/50 transition-all duration-300 card-lift flex flex-col justify-between shadow-lg"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900">
                    <img
                      src={poster.image}
                      alt={poster.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <span className="text-[11px] font-mono text-[#9ba4e6]">
                      {poster.category}
                    </span>
                    <h4 className="text-lg font-bold text-white group-hover:text-[#b4bbf2] transition-colors">
                      {poster.title}
                    </h4>
                    <p className="text-xs text-neutral-400 line-clamp-2">
                      {poster.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
