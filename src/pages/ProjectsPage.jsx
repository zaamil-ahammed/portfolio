import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Ticket, HeartHandshake, CheckCircle2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ProjectsPage() {
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
            Featured Projects
          </h1>
          <p className="text-zinc-400 text-sm mt-1">
            Real production architectures and community utility platforms.
          </p>
        </div>

        <div className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300 self-start sm:self-auto">
          2 Deployed Units
        </div>
      </div>

      {/* Projects Deep Dive */}
      <div className="space-y-6">
        {/* GateFlick */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border-white/[0.08] relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple shrink-0">
                <Ticket className="w-6 h-6" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-2xl font-bold text-white">GateFlick</h2>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    Live Production PWA
                  </span>
                </div>
                <p className="text-xs font-mono text-brand-purpleLight mt-1">
                  Film Festival Operations & Ticketing Platform
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <a
                href="https://gateflick.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 hover:bg-white text-obsidian-950 text-xs font-semibold transition-all shadow-sm"
              >
                <span>Live App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-white/[0.08] text-zinc-300 hover:text-white transition-all"
                title="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            High-speed progressive web app built for rapid QR code ticket validation and attendee crowd management at college film festivals. Designed specifically for low-latency scanning at event gates with instant live verification feedback.
          </p>

          {/* Architecture Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-obsidian-900/60 border border-white/[0.04]">
              <span className="text-[10px] font-mono uppercase text-zinc-400 block">Framework</span>
              <span className="text-sm font-semibold text-zinc-200 mt-0.5 block">TanStack Start & React 19</span>
            </div>
            <div className="p-3.5 rounded-xl bg-obsidian-900/60 border border-white/[0.04]">
              <span className="text-[10px] font-mono uppercase text-zinc-400 block">Core Feature</span>
              <span className="text-sm font-semibold text-zinc-200 mt-0.5 block">Camera QR Scanner (/verify)</span>
            </div>
            <div className="p-3.5 rounded-xl bg-obsidian-900/60 border border-white/[0.04]">
              <span className="text-[10px] font-mono uppercase text-zinc-400 block">Data Pipeline</span>
              <span className="text-sm font-semibold text-zinc-200 mt-0.5 block">Google Apps Script API Engine</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.05]">
            {["TanStack Start", "React 19", "Tailwind CSS v4", "PWA", "html5-qrcode", "qrcode.react", "Google Apps Script"].map((tag, idx) => (
              <span key={idx} className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.03] text-zinc-400 border border-white/[0.06]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* BloodLink Pailippuram */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border-white/[0.08] relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-2xl font-bold text-white">BloodLink Pailippuram</h2>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400">
                    Community Platform
                  </span>
                </div>
                <p className="text-xs font-mono text-zinc-400 mt-1">
                  Local Community Blood Donation Directory
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/[0.08] text-zinc-200 text-xs font-semibold transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            </div>
          </div>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            A native community directory connecting local volunteer donors with families facing medical urgency. Prioritizes verified donor consent, zero operational bloat, and fast regional filtering without privacy intrusion.
          </p>

          {/* Architecture Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-obsidian-900/60 border border-white/[0.04]">
              <span className="text-[10px] font-mono uppercase text-zinc-400 block">Focus</span>
              <span className="text-sm font-semibold text-zinc-200 mt-0.5 block">Community & Privacy First</span>
            </div>
            <div className="p-3.5 rounded-xl bg-obsidian-900/60 border border-white/[0.04]">
              <span className="text-[10px] font-mono uppercase text-zinc-400 block">Accessibility</span>
              <span className="text-sm font-semibold text-zinc-200 mt-0.5 block">Mobile First Responsive UI</span>
            </div>
            <div className="p-3.5 rounded-xl bg-obsidian-900/60 border border-white/[0.04]">
              <span className="text-[10px] font-mono uppercase text-zinc-400 block">Core Philosophy</span>
              <span className="text-sm font-semibold text-zinc-200 mt-0.5 block">Direct Non-Commercial Impact</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.05]">
            {["Web Application", "Community Directory", "Tailwind CSS", "Privacy Safeguards", "Responsive Design"].map((tag, idx) => (
              <span key={idx} className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.03] text-zinc-400 border border-white/[0.06]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
