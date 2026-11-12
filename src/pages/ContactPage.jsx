import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Clock, 
  MapPin, 
  Loader2, 
  Github, 
  Linkedin, 
  Instagram, 
  ArrowUpRight 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ContactPage({ onCopyEmail, onFormSubmitted }) {
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
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
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
          Contact Hub
        </h1>
        <p className="text-zinc-400 text-sm mt-1">
          Direct channels for inquiries, project proposals, and collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-5">
          <div className="glass-panel rounded-2xl p-6 space-y-4">
            <h2 className="text-lg font-bold text-white">Direct Reach-out</h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              No endless forms or delays. Reach out directly via email or any of my social profiles.
            </p>

            <div className="space-y-3 pt-2">
              {/* Email Box */}
              <div className="p-3.5 rounded-xl bg-obsidian-900/80 border border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.05] flex items-center justify-center text-brand-purple">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-zinc-400 block">
                      Email
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
                  className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-all text-xs font-mono flex items-center gap-1.5"
                  title="Copy Email"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location & Timezone */}
              <div className="p-3.5 rounded-xl bg-obsidian-900/80 border border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.05] flex items-center justify-center text-brand-purple">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-zinc-400 block">
                      Location
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

          {/* Social Links List */}
          <div className="glass-panel rounded-2xl p-6 space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-300">
              Profiles & Media
            </h3>

            <div className="space-y-2">
              {portfolioData.socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.04] transition-all text-xs font-mono text-zinc-300 hover:text-white"
                >
                  <div className="flex items-center gap-2.5">
                    {social.id === 'github' && <Github className="w-4 h-4" />}
                    {social.id === 'linkedin' && <Linkedin className="w-4 h-4 text-[#0a66c2]" />}
                    {social.id === 'instagram' && <Instagram className="w-4 h-4 text-[#e1306c]" />}
                    <span>{social.name}</span>
                  </div>
                  <span className="text-zinc-500 hover:text-zinc-300 flex items-center gap-1">
                    {social.handle}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border-white/[0.08]">
          <h2 className="text-xl font-bold text-white mb-1">
            Dispatch a Message
          </h2>
          <p className="text-xs text-zinc-400 mb-6">
            Leave your contact details and message below. You'll receive a response within 24 hours.
          </p>

          {submitted ? (
            <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-emerald-200">Message Dispatched Successfully</h3>
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
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your thoughts, requirements, or inquiry..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950/80 border border-white/[0.08] text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-brand-purple/60 focus:ring-1 focus:ring-brand-purple/40 transition-all resize-none font-sans"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-zinc-100 hover:bg-white text-obsidian-950 font-semibold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-glow-purple flex items-center justify-center gap-2 disabled:opacity-60"
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
