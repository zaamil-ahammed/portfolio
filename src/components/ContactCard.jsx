import React, { useState, useEffect } from 'react';
import { Mail, Send, Copy, Check, Clock, MapPin, Sparkles, Loader2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ContactCard({ onCopyEmail, onFormSubmitted }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [time, setTime] = useState('');

  // Update IST clock
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
    // Simulate swift network dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onFormSubmitted(`Message received from ${formData.name}. I'll reply within 24 hours.`);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 900);
  };

  return (
    <div id="contact" className="glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-purple"></div>
              <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-300">
                Direct Contact Hub
              </h2>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Let's create something with clarity.
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Available for web development projects, brand design units, and serious collaborations. No unnecessary friction—reach out directly.
            </p>
          </div>

          {/* Quick Info Badges */}
          <div className="space-y-3 pt-2">
            {/* Email Box */}
            <div className="p-3.5 rounded-xl bg-obsidian-900/80 border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/[0.05] flex items-center justify-center text-brand-purple">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-400 block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${portfolioData.contact.email}`}
                    className="text-xs sm:text-sm font-mono text-zinc-200 hover:text-brand-purple transition-colors"
                  >
                    {portfolioData.contact.displayEmail}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopy}
                className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-all text-xs font-mono flex items-center gap-1.5"
                title="Copy Email"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Location & Live Clock */}
            <div className="p-3.5 rounded-xl bg-obsidian-900/80 border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/[0.05] flex items-center justify-center text-brand-purple">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-400 block">
                    Location & Timezone
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-zinc-200">
                    {portfolioData.personal.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.05] text-xs font-mono text-brand-purpleLight">
                <Clock className="w-3 h-3 text-zinc-400" />
                <span>{time || 'IST'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Quick Form */}
        <div className="lg:col-span-7 bg-obsidian-900/60 p-6 sm:p-7 rounded-2xl border border-white/[0.06]">
          <h4 className="text-base font-semibold text-white mb-1">
            Send a Quick Dispatch
          </h4>
          <p className="text-xs text-zinc-400 mb-5">
            Drop your project requirements or thoughts directly into my inbox.
          </p>

          {submitted ? (
            <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-5 h-5" />
              </div>
              <h5 className="text-sm font-semibold text-emerald-200">Message Dispatched</h5>
              <p className="text-xs text-zinc-300 font-mono">
                Thank you! I will review your message and get back to you shortly.
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
                    placeholder="e.g. Alex"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950/80 border border-white/[0.08] text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-brand-purple/60 focus:ring-1 focus:ring-brand-purple/40 transition-all font-sans"
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
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950/80 border border-white/[0.08] text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-brand-purple/60 focus:ring-1 focus:ring-brand-purple/40 transition-all font-sans"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  Message / Project Scope
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about what you want to build or discuss..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950/80 border border-white/[0.08] text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-brand-purple/60 focus:ring-1 focus:ring-brand-purple/40 transition-all resize-none font-sans"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-zinc-100 hover:bg-white text-obsidian-950 font-semibold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-glow-purple flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Dispatching...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
