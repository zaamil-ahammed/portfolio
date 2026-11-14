import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import FeyCards from '../components/FeyCards';

export default function DesignPortfolioPage() {
  const designProjects = portfolioData.projects.filter(
    (project) => project.type === 'poster' || project.type === 'carousel'
  );
  const [selectedProject, setSelectedProject] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const openProject = (project) => {
    setSelectedProject(project);
    setSlideIndex(0);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] px-6 sm:px-12 py-12">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-[#9ba4e6] transition-colors mb-4"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Design Portfolio
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Posters, event identities, and social media visual systems crafted under 42RGB.
            </p>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#9ba4e6]">
            {designProjects.length} Selected Works
          </span>
        </div>

        <div className="rounded-2xl border border-white/10 overflow-hidden">
          <FeyCards
            spring={{ type: 'spring', visualDuration: 0.5, bounce: 0.2 }}
            shiftDistance={60}
            swapDuration={0.5}
            entranceStagger={0.2}
            className="h-[34rem]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {designProjects.map((project) => {
            const previewImage = project.slides ? project.slides[0] : project.image;
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => openProject(project)}
                className="group text-left rounded-2xl border border-white/10 bg-[#121216] overflow-hidden transition-all duration-300 hover:border-[#9ba4e6]/50 hover:-translate-y-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#9ba4e6]"
              >
                <div className="aspect-[4/5] w-full overflow-hidden bg-[#09090b] flex items-center justify-center p-2">
                  {previewImage && (
                    <img
                      src={previewImage}
                      alt={project.title}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#9ba4e6]">
                      {project.category}
                    </span>
                    {project.slides && (
                      <span className="font-mono text-[10px] text-neutral-500">
                        {project.slides.length} slides
                      </span>
                    )}
                  </div>
                  <h2 className="text-lg font-semibold text-white group-hover:text-[#b4bbf2] transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-8"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl border border-white/10 bg-[#121216] p-5 sm:p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#9ba4e6]">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-lg border border-white/10 p-2 text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Close preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative flex items-center justify-center rounded-xl bg-[#09090b] overflow-hidden max-h-[78vh]">
              <img
                src={
                  selectedProject.slides
                    ? selectedProject.slides[slideIndex]
                    : selectedProject.image
                }
                alt={selectedProject.title}
                className="max-h-[78vh] max-w-full w-auto h-auto object-contain"
              />

              {selectedProject.slides && selectedProject.slides.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setSlideIndex((prev) =>
                        prev === 0 ? selectedProject.slides.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-3 rounded-full bg-black/70 p-2 text-white hover:bg-black transition-colors"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setSlideIndex((prev) =>
                        prev === selectedProject.slides.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="absolute right-3 rounded-full bg-black/70 p-2 text-white hover:bg-black transition-colors"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed">
              {selectedProject.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
