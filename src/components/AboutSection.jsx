import React from 'react';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-36 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-20">
        
        {/* Section Heading */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#9ba4e6] block font-semibold">
            Personal Philosophy & Narrative
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
            About Me
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-normal pt-2">
            Undergraduate student and visual creator working at the intersection of modern web development and disciplined graphic design under the motto "Clarity over noise".
          </p>
        </div>

        {/* 1. What Matters to Me */}
        <div className="space-y-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-semibold">
            What Matters to Me
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {portfolioData.philosophy.map((item, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-9 rounded-[2rem] bg-[#121216]/90 border border-white/[0.08] hover:border-[#9ba4e6]/40 card-lift space-y-4 shadow-lg transition-all"
              >
                <span className="text-xs font-mono text-[#9ba4e6] font-semibold block">
                  0{idx + 1}.
                </span>
                <h4 className="text-2xl font-bold text-white tracking-tight">
                  {item.title}
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. The Workflow Approach (01 Design, 02 Define, 03 Deliver) */}
        <div className="space-y-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-semibold">
            The Workflow Approach
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {portfolioData.approach.map((step, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-9 rounded-[2rem] bg-[#121216]/90 border border-white/[0.08] hover:border-emerald-500/40 card-lift relative overflow-hidden shadow-lg transition-all group"
              >
                <span className="text-6xl font-black text-white/[0.06] font-mono block mb-2 group-hover:text-white/[0.12] transition-colors select-none">
                  0{idx + 1}
                </span>
                <h4 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-emerald-300 transition-colors">
                  {step.step}
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Academic Credentials & Design Unit */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          
          {/* Education Card */}
          <div className="p-8 sm:p-10 rounded-[2rem] bg-[#121216]/90 border border-white/[0.08] hover:border-[#9ba4e6]/40 card-lift flex flex-col justify-between shadow-lg">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-[#9ba4e6]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">
                  Formal Education
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white mt-1 tracking-tight">
                  {portfolioData.personal.education}
                </h4>
                <p className="text-xs font-mono text-[#9ba4e6] mt-1">
                  {portfolioData.personal.university}
                </p>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                Coursework focused on programming, web technologies, database management, and UI architecture under the FYUGP curriculum.
              </p>
            </div>
            
            <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>Expected: 2028</span>
              <span>Kerala, India</span>
            </div>
          </div>

          {/* 42RGB Design Unit Card */}
          <div className="p-8 sm:p-10 rounded-[2rem] bg-[#121216]/90 border border-white/[0.08] hover:border-[#9ba4e6]/40 card-lift flex flex-col justify-between shadow-lg">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-white/10 p-2 flex items-center justify-center">
                <img src="/logo-white.png" alt="42RGB Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">
                  Design Initiative
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white mt-1 tracking-tight">
                  42RGB Design Unit
                </h4>
                <p className="text-xs font-mono text-[#9ba4e6] mt-1">
                  "{portfolioData.personal.tagline}"
                </p>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                Technical visual design unit dedicated to grid-based typography, contrast balance, and structured visual assets that eliminate template noise.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>Visual Direction & Systems</span>
              <span>42RGB</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
