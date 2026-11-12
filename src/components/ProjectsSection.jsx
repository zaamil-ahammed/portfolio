import React, { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ProjectsSection() {
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

  return (
    <section id="projects" className="py-24 sm:py-36 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
        
        {/* Section Header (Pratham Style: "Beyond the Visuals") */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#9ba4e6] block mb-3 font-medium">
              Architectures & Platforms
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
              Beyond the Visuals
            </h2>
          </div>

          {/* Nested Tabs from Prathamfolio */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-neutral-900 border border-white/10 self-start sm:self-auto">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'websites', label: 'Website Designing & Dev' },
              { id: 'carousels', label: 'Social Media Carousels' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs font-mono rounded-xl transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-[#09090b] font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
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
                  className="p-8 sm:p-10 rounded-3xl bg-[#121216]/95 border border-white/[0.07] hover:border-[#9ba4e6]/40 transition-all duration-300 card-lift flex flex-col justify-between group"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#9ba4e6]/10 border border-[#9ba4e6]/20 text-[#b4bbf2]">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
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

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.04] text-neutral-400 border border-white/[0.05]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 mt-8 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs font-mono text-neutral-400">
                      Vercel Edge Network
                    </span>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#09090b] hover:bg-neutral-200 font-semibold text-xs tracking-wide transition-all shadow-sm"
                    >
                      <span>Visit Live Platform</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#09090b]" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Social Carousel Card (Pratham Style Multi-Slide Viewer) */}
          {(activeTab === 'all' || activeTab === 'carousels') && carouselProject && (
            <div className="p-8 sm:p-10 rounded-3xl bg-[#121216]/95 border border-white/[0.07] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Carousel Interactive Slider */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
                  <img
                    src={carouselProject.slides[carouselIndex]}
                    alt={`Slide ${carouselIndex + 1}`}
                    className="w-full h-full object-cover transition-all duration-300"
                  />

                  {/* Navigation Arrows */}
                  <div className="absolute inset-0 flex items-center justify-between p-3 pointer-events-none">
                    <button
                      onClick={prevSlide}
                      className="pointer-events-auto w-9 h-9 rounded-full bg-[#09090b]/80 hover:bg-white text-white hover:text-[#09090b] flex items-center justify-center backdrop-blur-md transition-all shadow-md"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="pointer-events-auto w-9 h-9 rounded-full bg-[#09090b]/80 hover:bg-white text-white hover:text-[#09090b] flex items-center justify-center backdrop-blur-md transition-all shadow-md"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-4 h-4" />
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

                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-normal">
                  {carouselProject.description} Designed with continuous horizontal layout flow, clear typographic eye-paths, and deliberate negative space to maintain high audience retention across social platforms.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {carouselProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.04] text-neutral-400 border border-white/[0.05]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <a
                    href="https://instagram.com/zaamil.ahmed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-neutral-300 hover:text-white"
                  >
                    <span>View More on Instagram @zaamil.ahmed</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#9ba4e6]" />
                  </a>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
