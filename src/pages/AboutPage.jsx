import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, GraduationCap, MapPin, Compass, Terminal, Shield } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AboutPage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Header Bar */}
      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-brand-purple transition-colors mb-2"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Overview</span>
        </Link>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          About & Philosophy
        </h1>
        <p className="text-zinc-400 text-sm mt-1">
          Bridging functional engineering and disciplined visual architecture.
        </p>
      </div>

      {/* Main Philosophy Card */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-xs font-mono text-brand-purpleLight">
          <span>The Manifesto</span>
        </div>

        <blockquote className="text-xl sm:text-2xl font-semibold text-white leading-relaxed border-l-2 border-brand-purple pl-4 italic">
          "{portfolioData.personal.tagline}"
        </blockquote>

        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
          I am a web developer and graphic designer based in Kerala, India. I operate under the simple conviction that digital tools and visual communication should be ruthlessly direct, well-proportioned, and devoid of unnecessary bloat.
        </p>

        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Whether designing identity units for brands or writing web applications with React and Tailwind CSS, the focus remains the same: tight visual hierarchy, snappy load speeds, and intuitive usability.
        </p>
      </div>

      {/* Academic & Background Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Education */}
        <div className="glass-panel rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-brand-purple">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">Academic Journey</h3>
          <p className="text-sm text-zinc-300 font-medium">
            {portfolioData.personal.education}
          </p>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Bachelor of Computer Applications under Calicut University, focusing on core programming, databases, web architecture, and computer application systems.
          </p>
        </div>

        {/* Identity Unit */}
        <div className="glass-panel rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/[0.08] p-1.5 flex items-center justify-center">
            <img src="/logo-white.png" alt="42RGB Logo" className="w-full h-full object-contain" />
          </div>
          <h3 className="text-base font-bold text-white">42RGB Design Unit</h3>
          <p className="text-sm text-zinc-300 font-medium">
            Minimalist Identity & Grid Systems
          </p>
          <p className="text-xs text-zinc-400 leading-relaxed">
            A technical design initiative dedicated to grid-based typography, contrast balance, and structured visual assets that cut through template noise.
          </p>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-lg font-bold text-white">Interested in collaborating?</h4>
          <p className="text-xs text-zinc-400 mt-0.5">Let's discuss project requirements or technical challenges.</p>
        </div>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-100 hover:bg-white text-obsidian-950 font-semibold text-xs tracking-wide transition-all shadow-md hover:shadow-glow-purple shrink-0"
        >
          <span>Go to Contact Hub</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
