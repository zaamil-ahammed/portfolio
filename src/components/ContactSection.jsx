import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Clock, 
  MapPin, 
  Loader2, 
  Instagram, 
  Github, 
  Linkedin, 
  ArrowUpRight,
  Sparkles 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection({ onCopyEmail, onFormSubmitted }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onFormSubmitted(`Message received from ${formData.name}. I'll reply within 24 hours.`);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-brand-purpleLight">
              <span>Direct Inquiries</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Let's Connect
            </h2>
            <p className="text-zinc-400 text-sm max-w-xl font-mono">
              Have a project, web development requirement, poster creative, or brand identity task? Reach out directly.
            </p>
          </div>

          {/* Location & Time Indicator */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-zinc-900/80 border border-white/[0.08] backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-brand-purple" />
              <span>{portfolioData.personal.location}</span>
            </div>
            <span className="text-zinc-600">•</span>
            <div className="flex items-center gap-1.5 text-xs font-mono text-brand-purpleLight">
              <Clock className="w-3.5 h-3.5 text-zinc-400" />
              <span>{time || 'IST'}</span>
            </div>
          </div>
        </div>

        {/* 2-Column Contact Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-5">
            <div className="glass-panel rounded-3xl p-7 space-y-6">
              <h3 className="text-xl font-bold text-white">Direct Reach-out</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                Prompt responses with zero friction. Open for freelance contracts, collabs, and community initiatives.
              </p>

              {/* Email Pill Box */}
              <div className="p-4 rounded-2xl bg-obsidian-900/90 border border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-zinc-400 block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${portfolioData.contact.email}`}
                      className="text-xs sm:text-sm font-mono text-zinc-200 hover:text-brand-purple"
                    >
                      {portfolioData.contact.displayEmail}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopy}
                  className="p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-all text-xs font-mono flex items-center gap-1.5"
                  title="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Channels */}
              <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                <span className="text-[11px] font-mono uppercase text-zinc-400 block mb-3">
                  Connect Me On
                </span>
                {portfolioData.socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.04] hover:border-brand-purple/30 transition-all text-xs font-mono text-zinc-300 hover:text-white"
                  >
                    <div className="flex items-center gap-3">
                      {social.id === 'instagram' && <Instagram className="w-4 h-4 text-[#e1306c]" />}
                      {social.id === 'github' && <Github className="w-4 h-4 text-zinc-100" />}
                      {social.id === 'linkedin' && <Linkedin className="w-4 h-4 text-[#0a66c2]" />}
                      <span className="font-semibold">{social.name}</span>
                    </div>
                    <span className="text-zinc-500 hover:text-brand-purple flex items-center gap-1">
                      {social.badge}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </a>
                ))}
              </div>

            </div>
          </div>

          {/* Right: Message Dispatch Form */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-7 sm:p-9 border-white/[0.08]">
            <h3 className="text-2xl font-bold text-white mb-1">
              Dispatch a Message
            </h3>
            <p className="text-xs text-zinc-400 mb-6 font-mono">
              Fill in your requirement below. I'll get back to your email within 24 hours.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-semibold text-emerald-200">Message Dispatched Successfully</h4>
                <p className="text-xs text-zinc-300 font-mono">
                  Thank you! I will review your inquiry and reply to your email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul"
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950/80 border border-white/[0.08] text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-brand-purple/60 focus:ring-1 focus:ring-brand-purple/40 transition-all font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahul@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950/80 border border-white/[0.08] text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-brand-purple/60 focus:ring-1 focus:ring-brand-purple/40 transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    Project Scope / Requirement
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about what you need (e.g. Website development, poster design, brand identity)..."
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950/80 border border-white/[0.08] text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-brand-purple/60 focus:ring-1 focus:ring-brand-purple/40 transition-all resize-none font-sans"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-zinc-100 hover:bg-white text-obsidian-950 font-bold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-glow-purple flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Dispatching...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
