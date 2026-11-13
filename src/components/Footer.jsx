import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#09090b]/65 backdrop-blur-sm pt-20 pb-16 px-6 sm:px-12 relative overflow-hidden">
      
      {/* Massive Editorial Banner Headline (Section 11 from Prathamfolio) */}
      <div className="max-w-7xl mx-auto space-y-20">
        
        <div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Creative Mindset. <br />
            <span className="text-[#9ba4e6]">Technical Skillset.</span> <br />
            <span className="text-neutral-500">Visual Precision.</span>
          </h2>
        </div>

        {/* 3-Column Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pt-10 border-t border-white/[0.08]">
          
          {/* Col 1 & 2: Brand & Manifesto */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 p-1 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center">
                <img src="/logo-white.png" alt="42RGB Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                {portfolioData.personal.name}
              </span>
            </div>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm font-mono">
              "{portfolioData.personal.tagline}" — Web applications, brand identity systems, and disciplined visual designs.
            </p>

            <div className="text-xs font-mono text-emerald-400 flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Proudly Crafted in Kerala, India</span>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-2.5 text-sm font-medium text-neutral-400">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#services" className="hover:text-white transition-colors">What I Can Help With</a>
              <a href="#archive" className="hover:text-white transition-colors">Visual Archive & Toolkit</a>
              <a href="#projects" className="hover:text-white transition-colors">Beyond the Visuals</a>
              <a href="#about" className="hover:text-white transition-colors">About Me</a>
              <a href="#connect" className="hover:text-white transition-colors">Let's Connect</a>
            </div>
          </div>

          {/* Col 4: Connect Me On */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
              Connect Me On
            </h4>
            <div className="flex flex-col space-y-2.5 text-sm font-medium text-neutral-400">
              {portfolioData.socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#9ba4e6] transition-colors flex items-center justify-between"
                >
                  <span>{social.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              ))}
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="hover:text-[#9ba4e6] transition-colors flex items-center justify-between"
              >
                <span>Direct Mail</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Massive Watermark Signature (Pratham Style) */}
        <div className="pt-8 overflow-hidden select-none pointer-events-none opacity-[0.04]">
          <span className="text-[16vw] font-black tracking-tightest whitespace-nowrap block text-white text-stroke-strong leading-none">
            AHMED SHAMIL
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-neutral-400 text-center sm:text-left">
            © {new Date().getFullYear()} {portfolioData.personal.name}. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-white/[0.08] text-xs font-mono transition-all group"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
