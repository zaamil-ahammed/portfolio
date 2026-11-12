import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Copy, 
  Check, 
  MapPin, 
  Clock, 
  FolderKanban, 
  Cpu, 
  User, 
  Mail, 
  Github, 
  Linkedin, 
  Instagram, 
  Sparkles 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function HomePage({ onCopyEmail }) {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    onCopyEmail(portfolioData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getSocialIcon = (id) => {
    switch (id) {
      case 'github':
        return <Github className="w-5 h-5 text-zinc-100" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5 text-[#0a66c2]" />;
      case 'instagram':
        return <Instagram className="w-5 h-5 text-[#e1306c]" />;
      default:
        return <Mail className="w-5 h-5 text-brand-purple" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Grid: Hero Identity & Core Social Hub */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Hero Identity (7 cols) */}
        <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between group">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-purple/15 transition-all"></div>
          
          <div className="relative z-10 space-y-6">
            {/* Status & Location */}
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

            {/* Main Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 p-1.5 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 shadow-sm">
                  <img src="/logo-white.png" alt="42RGB Logo" className="w-full h-full object-contain" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-brand-purple px-2.5 py-1 rounded-md bg-brand-purple/10 border border-brand-purple/20">
                  {portfolioData.personal.brandUnit} • Design Unit
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {portfolioData.personal.name}
              </h1>

              <div className="flex flex-wrap items-center gap-2 text-base sm:text-lg text-zinc-300 font-medium">
                <span>{portfolioData.personal.title}</span>
                <span className="text-zinc-600 hidden sm:inline">•</span>
                <span className="text-brand-purple font-mono italic">"{portfolioData.personal.tagline}"</span>
              </div>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
                {portfolioData.personal.bio}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-100 hover:bg-white text-obsidian-950 font-semibold text-xs tracking-wide transition-all shadow-md hover:shadow-glow-purple group/btn"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
              </Link>

              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-white/[0.08] hover:border-brand-purple/30 text-xs font-mono transition-all"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Copied Email</span>
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

        {/* Core Socials Hub (5 cols) */}
        <div className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-purple"></div>
              <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-300">
                Direct Channels
              </h2>
            </div>
            
            {/* Live IST clock */}
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-brand-purpleLight">
              <Clock className="w-3 h-3 text-zinc-400" />
              <span>{time || 'IST'}</span>
            </div>
          </div>

          <div className="space-y-3">
            {portfolioData.socials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 rounded-xl bg-obsidian-900/60 hover:bg-zinc-800/50 border border-white/[0.05] hover:border-brand-purple/30 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {getSocialIcon(social.id)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-zinc-200 group-hover:text-white">
                        {social.name}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.05] text-zinc-400">
                        {social.badge}
                      </span>
                    </div>
                    <span className="text-xs text-zinc-400 font-mono">
                      {social.handle}
                    </span>
                  </div>
                </div>

                <div className="text-zinc-400 group-hover:text-brand-purple group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            ))}

            {/* Direct Email Pill */}
            <div 
              onClick={handleCopy}
              className="cursor-pointer group flex items-center justify-between p-3 rounded-xl bg-brand-purple/[0.04] hover:bg-brand-purple/[0.08] border border-brand-purple/20 hover:border-brand-purple/40 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-brand-purple" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-zinc-200 group-hover:text-white">
                    Direct Email
                  </span>
                  <span className="text-xs font-mono text-brand-purpleLight block">
                    {portfolioData.contact.displayEmail}
                  </span>
                </div>
              </div>
              <span className="text-[11px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-white/[0.04]">
                Click to Copy
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Navigation Portal Bento Cards */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 px-1">
          <div className="w-2 h-2 rounded-full bg-brand-purple"></div>
          <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400">
            Explore Portfolio
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Projects Portal */}
          <Link
            to="/projects"
            className="glass-panel p-5 rounded-2xl flex flex-col justify-between group hover:border-brand-purple/40 transition-all duration-300 relative overflow-hidden"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple">
                <FolderKanban className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-brand-purpleLight transition-colors">
                  Featured Projects
                </h3>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                  GateFlick ticketing PWA & BloodLink community directory.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-2 border-t border-white/[0.05] flex items-center justify-between text-xs font-mono text-brand-purple">
              <span>View Projects</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Arsenal Portal */}
          <Link
            to="/skills"
            className="glass-panel p-5 rounded-2xl flex flex-col justify-between group hover:border-brand-purple/40 transition-all duration-300 relative overflow-hidden"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-brand-purpleLight transition-colors">
                  Arsenal & Tools
                </h3>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                  React, TypeScript, Tailwind, Photoshop, Illustrator & UI Systems.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-2 border-t border-white/[0.05] flex items-center justify-between text-xs font-mono text-emerald-400">
              <span>Inspect Stack</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* About Portal */}
          <Link
            to="/about"
            className="glass-panel p-5 rounded-2xl flex flex-col justify-between group hover:border-brand-purple/40 transition-all duration-300 relative overflow-hidden"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-brand-purpleLight transition-colors">
                  About & Philosophy
                </h3>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                  "Clarity over noise", BCA Honours context & 42RGB design unit.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-2 border-t border-white/[0.05] flex items-center justify-between text-xs font-mono text-amber-400">
              <span>Read Background</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Contact Portal */}
          <Link
            to="/contact"
            className="glass-panel p-5 rounded-2xl flex flex-col justify-between group hover:border-brand-purple/40 transition-all duration-300 relative overflow-hidden"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-brand-purpleLight transition-colors">
                  Contact Hub
                </h3>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                  Dispatch a direct message, copy contacts, or start a collaboration.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-2 border-t border-white/[0.05] flex items-center justify-between text-xs font-mono text-blue-400">
              <span>Reach Out</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}
