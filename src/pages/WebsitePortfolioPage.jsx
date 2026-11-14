import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function WebsitePortfolioPage() {
  const webProjects = portfolioData.projects.filter((project) => project.type === 'website');

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
              Website Portfolio
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Production web platforms engineered with clean React architecture and fast UX.
            </p>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#9ba4e6]">
            {webProjects.length} Live Builds
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {webProjects.map((project, idx) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#121216] p-6 sm:p-8 space-y-6 transition-all duration-300 hover:border-[#9ba4e6]/50"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#9ba4e6]">
                    0{idx + 1} / {project.category}
                  </span>
                  <Globe className="w-4 h-4 text-neutral-500" />
                </div>

                <h2 className="text-2xl font-bold text-white tracking-tight">
                  {project.title}
                </h2>

                <p className="text-sm text-neutral-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {project.url && (
                <div className="pt-4 border-t border-white/10">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white hover:text-[#9ba4e6] transition-colors"
                  >
                    <span>Visit Live Site</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
