import React from 'react';
import { ArrowUpRight, Github, Linkedin, Instagram, Mail, Share2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SocialHub({ onCopyEmail }) {
  const getSocialIcon = (id) => {
    switch (id) {
      case 'github':
        return <Github className="w-5 h-5 text-zinc-100" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5 text-[#0a66c2]" />;
      case 'instagram':
        return <Instagram className="w-5 h-5 text-[#e1306c]" />;
      default:
        return <Share2 className="w-5 h-5 text-brand-purple" />;
    }
  };

  return (
    <div id="socials" className="glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-purple"></div>
          <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-300">
            Network & Channels
          </h2>
        </div>
        <span className="text-[11px] font-mono text-zinc-400">Direct Connect</span>
      </div>

      {/* Social Items */}
      <div className="space-y-3">
        {portfolioData.socials.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-3.5 rounded-xl bg-obsidian-900/60 hover:bg-zinc-800/50 border border-white/[0.05] hover:border-brand-purple/30 transition-all duration-200"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                {getSocialIcon(social.id)}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                    {social.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-zinc-400 border border-white/[0.05]">
                    {social.badge}
                  </span>
                </div>
                <span className="text-xs text-zinc-400 font-mono">
                  {social.handle}
                </span>
              </div>
            </div>

            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-400 group-hover:text-brand-purple group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>
        ))}

        {/* Email Fast Connect Bar */}
        <div 
          onClick={() => onCopyEmail(portfolioData.contact.email)}
          className="cursor-pointer group flex items-center justify-between p-3.5 rounded-xl bg-brand-purple/[0.04] hover:bg-brand-purple/[0.08] border border-brand-purple/20 hover:border-brand-purple/40 transition-all duration-200"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-brand-purple" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-zinc-200 group-hover:text-white">
                Direct Mail
              </span>
              <span className="text-xs font-mono text-brand-purpleLight">
                {portfolioData.contact.displayEmail}
              </span>
            </div>
          </div>
          <span className="text-[11px] font-mono text-zinc-400 group-hover:text-zinc-200 px-2 py-1 rounded bg-white/[0.04]">
            Click to Copy
          </span>
        </div>
      </div>
    </div>
  );
}
