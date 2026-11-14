import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function HeroSection({ onCopyEmail }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    onCopyEmail(portfolioData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="home" className="relative pt-32 sm:pt-40 pb-20 sm:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Top Kicker & Name */}
        <div className="space-y-2 mb-8 sm:mb-12">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#9ba4e6] font-semibold block">
            {portfolioData.personal.greeting}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-300">
            {portfolioData.personal.name}
          </h2>
        </div>

        {/* Hero Grid: Massive Headline + Portrait Cutout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end mb-16 sm:mb-24">
          
          {/* Headline Column */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-black tracking-tight text-white leading-[1.02]">
              I Design to Get Noticed. <br className="hidden sm:inline" />
              <span className="text-neutral-400">And Build to be Chosen.</span>
            </h1>

            {/* Clean Unboxed Metadata */}
            <div className="pt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-neutral-400">
              <span className="text-neutral-300">{portfolioData.personal.brandUnit} Design Unit</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-400">Available for Projects</span>
              <span aria-hidden="true">·</span>
              <span>{portfolioData.personal.location}</span>
            </div>
          </div>

          {/* Portrait Column */}
          <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[310px] sm:max-w-[340px] group">
              
              {/* Radial Backdrop Glow */}
              <div 
                className="absolute -inset-4 bg-gradient-to-tr from-[#9ba4e6]/20 via-white/[0.05] to-transparent rounded-[3rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                aria-hidden="true"
              />

              {/* Clean Portrait Container Frame */}
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] bg-[#121216] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <img
                  src={portfolioData.personal.portraitUrl}
                  alt="Ahmed Shamil Portrait"
                  className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                  onError={(e) => {
                    if (!e.currentTarget.src.includes('potrait%20photo.jpg')) {
                      e.currentTarget.src = '/potrait photo.jpg';
                    }
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#09090b]/80 via-[#09090b]/25 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

        </div>

        {/* Narrative Statement Strip */}
        <div className="pt-12 sm:pt-16 border-t border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <p className="text-lg sm:text-2xl text-neutral-200 font-normal leading-relaxed">
              I Combine Design Expertise with Web Development insight to Deliver Visually Strong, Strategically aligned Digital Experiences. My work focuses on <strong className="text-white font-semibold">Clarity, Consistency, and Structure</strong> — ensuring every Solution is both Aesthetically Refined and Effective in its Intent.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-start lg:items-end">
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#09090b] hover:bg-neutral-200 font-semibold text-xs tracking-wide transition-all shadow-md group hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>More About Me</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={handleCopy}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-white/10 text-xs font-mono transition-all hover:border-[#9ba4e6]/30 active:scale-[0.98]"
              title="Copy direct email"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Copied Email</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{portfolioData.contact.displayEmail}</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
