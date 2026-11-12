import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function EditorialBanner() {
  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-white/[0.06]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-purple/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-14 relative overflow-hidden text-center sm:text-left border-white/[0.08]">
          
          {/* Subtle Watermark Logo */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-5 pointer-events-none select-none">
            <img src="/logo-white.png" alt="42RGB" className="w-full h-full object-contain" />
          </div>

          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-xs font-mono text-brand-purpleLight">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Design Manifesto</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Creative Mindset.<br />
              <span className="text-brand-purple">Technical Skillset.</span><br />
              Visual Precision.
            </h2>

            <blockquote className="text-lg sm:text-xl font-medium text-zinc-300 italic border-l-2 border-brand-purple pl-4">
              "{portfolioData.personal.tagline}"
            </blockquote>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Operating under the principle that great design and solid code should work in absolute harmony. No superficial filler, no bloated templates. Every element serves an intentional purpose—from responsive frontend systems to high-contrast visual communication.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-100 hover:bg-white text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-glow-purple group"
              >
                <span>Initiate a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="text-xs font-mono text-zinc-400">
                {portfolioData.personal.education}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
