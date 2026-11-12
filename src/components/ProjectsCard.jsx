import React from 'react';
import { ArrowUpRight, Github, ExternalLink, Ticket, HeartHandshake, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ProjectsCard() {
  const getProjectIcon = (id) => {
    switch (id) {
      case 'gateflick':
        return <Ticket className="w-5 h-5 text-brand-purple" />;
      case 'bloodlink':
        return <HeartHandshake className="w-5 h-5 text-rose-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-zinc-300" />;
    }
  };

  return (
    <div id="projects" className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-purple"></div>
          <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-300">
            Featured Projects & Deployments
          </h2>
        </div>
        <span className="text-[11px] font-mono text-zinc-400">Production & Community</span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {portfolioData.projects.map((project) => (
          <div
            key={project.id}
            className="glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:border-brand-purple/30 transition-all duration-300"
          >
            <div className="space-y-4">
              {/* Top Meta Bar */}
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/[0.08] flex items-center justify-center shrink-0">
                  {getProjectIcon(project.id)}
                </div>

                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300">
                  {project.status}
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-brand-purpleLight transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-brand-purple mt-0.5">
                  {project.subtitle}
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed mt-3 font-normal">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.03] text-zinc-400 border border-white/[0.05]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Footer */}
            <div className="pt-6 mt-4 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">
                Verified Architecture
              </span>

              <div className="flex items-center gap-2">
                {project.demoUrl && project.demoUrl !== '#' && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200 hover:text-white font-medium transition-all"
                  >
                    <span>Live View</span>
                    <ExternalLink className="w-3 h-3 text-brand-purple" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.05] transition-all"
                    title="View Source on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
