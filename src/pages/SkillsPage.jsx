import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code2, Palette, CheckCircle, Sparkles, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-brand-purple transition-colors mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Overview</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Arsenal & Competencies
          </h1>
          <p className="text-zinc-400 text-sm mt-1">
            Proficiencies across software engineering and minimal graphic design. Zero fake claims.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-obsidian-900 border border-white/[0.06] self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all ${
              activeTab === 'all'
                ? 'bg-zinc-800 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            All Disciplines
          </button>
          <button
            onClick={() => setActiveTab('dev')}
            className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all ${
              activeTab === 'dev'
                ? 'bg-zinc-800 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Engineering
          </button>
          <button
            onClick={() => setActiveTab('design')}
            className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all ${
              activeTab === 'design'
                ? 'bg-zinc-800 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Graphic Design
          </button>
        </div>
      </div>

      {/* Engineering Section */}
      {(activeTab === 'all' || activeTab === 'dev') && (
        <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Frontend & Web Engineering</h2>
              <p className="text-xs font-mono text-zinc-400">High-performance reactive interfaces and clean client logic</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {portfolioData.skills.development.map((skill, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-obsidian-900/60 border border-white/[0.06] hover:border-brand-purple/30 transition-all space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-zinc-200">{skill.name}</span>
                  {skill.highlight && (
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
                  )}
                </div>
                <span className="text-[11px] font-mono text-zinc-400 block">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Graphic Design Section */}
      {(activeTab === 'all' || activeTab === 'design') && (
        <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Visual & Graphic Design</h2>
              <p className="text-xs font-mono text-zinc-400">Disciplined grid layouts, typography, and identity systems</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {portfolioData.skills.design.map((skill, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-obsidian-900/60 border border-white/[0.06] hover:border-emerald-500/30 transition-all space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-zinc-200">{skill.name}</span>
                  {skill.highlight && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  )}
                </div>
                <span className="text-[11px] font-mono text-zinc-400 block">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
