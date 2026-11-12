import React, { useState } from 'react';
import { Code2, Palette, Layers, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SkillsCard() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div id="skills" className="glass-panel rounded-2xl p-6 sm:p-7">
      {/* Header and Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-purple"></div>
            <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-300">
              Technical & Creative Arsenal
            </h2>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Proficiencies across software engineering and graphic design
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-obsidian-900 border border-white/[0.06] self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
              activeTab === 'all'
                ? 'bg-zinc-800 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab('dev')}
            className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
              activeTab === 'dev'
                ? 'bg-zinc-800 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Engineering
          </button>
          <button
            onClick={() => setActiveTab('design')}
            className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
              activeTab === 'design'
                ? 'bg-zinc-800 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Design
          </button>
        </div>
      </div>

      {/* Grid of Skills */}
      <div className="space-y-6">
        {/* Development Section */}
        {(activeTab === 'all' || activeTab === 'dev') && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <Code2 className="w-3.5 h-3.5 text-brand-purple" />
              <span>Web & Frontend Engineering</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {portfolioData.skills.development.map((skill, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border transition-all ${
                    skill.highlight
                      ? 'bg-zinc-900/80 border-white/[0.08] hover:border-brand-purple/30'
                      : 'bg-obsidian-900/40 border-white/[0.04] hover:border-white/[0.1]'
                  }`}
                >
                  <span className="text-sm font-medium text-zinc-200 block truncate">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 block mt-1">
                    {skill.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Design Section */}
        {(activeTab === 'all' || activeTab === 'design') && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <Palette className="w-3.5 h-3.5 text-brand-purple" />
              <span>Visual & Graphic Design</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {portfolioData.skills.design.map((skill, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border transition-all ${
                    skill.highlight
                      ? 'bg-zinc-900/80 border-white/[0.08] hover:border-brand-purple/30'
                      : 'bg-obsidian-900/40 border-white/[0.04] hover:border-white/[0.1]'
                  }`}
                >
                  <span className="text-sm font-medium text-zinc-200 block truncate">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 block mt-1">
                    {skill.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
