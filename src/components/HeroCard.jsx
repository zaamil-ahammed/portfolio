import React, { useState } from 'react';
import { Mail, Copy, Check, Sparkles, MapPin, ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function HeroCard({ onCopyEmail, onContactClick }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    onCopyEmail(portfolioData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div id="about" className="glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden group">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-purple/15 transition-all duration-700"></div>
      <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
        {/* Top Badges / Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{portfolioData.personal.status}</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
            <MapPin className="w-3.5 h-3.5 text-brand-purple" />
            <span>{portfolioData.personal.location}</span>
          </div>
        </div>

        {/* Core Identity */}
        <div className="space-y-4">
          <div className="inline-block">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-brand-purple px-2 py-0.5 rounded bg-brand-purple/10 border border-brand-purple/20">
              Identity & Design Unit
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {portfolioData.personal.name}
          </h1>

          <div className="flex items-center gap-3 text-lg sm:text-xl font-medium text-zinc-300">
            <span>{portfolioData.personal.title}</span>
            <span className="text-zinc-600">•</span>
            <span className="text-brand-purple font-mono italic text-base sm:text-lg">"{portfolioData.personal.tagline}"</span>
          </div>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
            {portfolioData.personal.bio}
          </p>
        </div>

        {/* Action Row */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <button
            onClick={onContactClick}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-100 hover:bg-white text-obsidian-950 font-semibold text-xs tracking-wide transition-all shadow-md hover:shadow-glow-purple group/btn"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-white/[0.08] hover:border-brand-purple/30 text-xs font-mono transition-all"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">Copied to clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-zinc-400" />
                <span>{portfolioData.contact.displayEmail}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
