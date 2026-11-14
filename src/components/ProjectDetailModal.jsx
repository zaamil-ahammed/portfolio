import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, Layers } from 'lucide-react';

export default function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#09090b]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full my-8 bg-[#121216] border border-white/10 rounded-[2.5rem] p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/[0.06] hover:bg-white text-neutral-300 hover:text-[#09090b] flex items-center justify-center transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-4 pr-12">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9ba4e6] font-semibold">
              {project.category}
            </span>
            <span className="text-xs font-mono text-neutral-500">·</span>
            <span className="text-xs font-mono text-emerald-400">
              Production
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {project.title}
          </h2>
        </div>

        {/* Project Visual / Carousel Preview */}
        <div className="mt-8 rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 relative aspect-video max-h-[380px] flex items-center justify-center">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : project.slides ? (
            <img
              src={project.slides[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="p-8 text-center space-y-3">
              <Layers className="w-10 h-10 text-[#9ba4e6] mx-auto opacity-80" />
              <span className="text-lg font-bold text-white block">
                {project.url ? new URL(project.url).hostname : project.title}
              </span>
              <p className="text-xs font-mono text-neutral-400 max-w-md mx-auto">
                Deployed live on modern cloud infrastructure with edge routing and zero downtime.
              </p>
            </div>
          )}
        </div>

        {/* Narrative & Case Study Specs */}
        <div className="mt-8 space-y-6">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-2">
              Overview & Intent
            </h4>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Core Highlights */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-wider text-[#9ba4e6] font-semibold">
              Engineering & Design Focus
            </h5>
            <ul className="text-xs sm:text-sm text-neutral-300 space-y-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Engineered for sub-second load times and high optical typography contrast.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Responsive touch-friendly layout following human-centered interaction guidelines.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Strict grid discipline with custom color harmony and clean component hierarchy.</span>
              </li>
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-2.5">
              Tools & Stack
            </h4>
            <p className="text-xs font-mono text-neutral-400">
              {project.tags.join(' · ')}
            </p>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-neutral-500">
            Ahmed Shamil Portfolio Case Study
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-neutral-200 text-[#09090b] font-semibold text-xs tracking-wide transition-all shadow-md"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-white/10 text-xs font-mono transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
