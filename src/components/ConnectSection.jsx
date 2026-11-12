import React, { useState, useEffect } from 'react';
import { Mail, Send, Copy, Check, Clock, MapPin, Loader2, ArrowUpRight, Github, Linkedin, Instagram, Monitor } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ConnectSection({ onCopyEmail, onFormSubmitted }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [time, setTime] = useState('');

  // Live IST Clock
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
      if (onFormSubmitted) {
        onFormSubmitted(`Message received from ${formData.name}. I will reply within 24 hours.`);
      }
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 700);
  };

  const getSocialIcon = (id) => {
    switch (id) {
      case 'instagram':
        return <Instagram className="w-4 h-4 text-[#e1306c]" />;
      case 'github':
        return <Github className="w-4 h-4 text-white" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4 text-[#0a66c2]" />;
      default:
        return <Mail className="w-4 h-4 text-[#9ba4e6]" />;
    }
  };

  return (
    <section id="connect" className="py-24 sm:py-36 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
        
        {/* Massive Editorial CTA Heading (Pratham Style) */}
        <div className="space-y-5 max-w-4xl">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#9ba4e6] block font-semibold">
            Initiate Contact
          </span>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.95]">
            Great Things <br />
            <span className="text-neutral-400">Begin Together.</span>
          </h2>
          <p className="text-lg sm:text-2xl text-neutral-300 font-normal leading-relaxed pt-2">
            From Creative Collaborations to New Opportunities, Let's make Something Meaningful happen.
          </p>
        </div>

        {/* 2-Column Direct Contact Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Inquiries, IST Clock & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="p-8 rounded-[2rem] bg-[#121216]/90 border border-white/[0.08] space-y-5 shadow-lg">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
                Direct Communication
              </span>

              <div className="p-4 rounded-2xl bg-neutral-900 border border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-[#9ba4e6]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-neutral-500 block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${portfolioData.contact.email}`}
                      className="text-xs sm:text-sm font-mono text-neutral-200 hover:text-[#9ba4e6] transition-colors"
                    >
                      {portfolioData.contact.displayEmail}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopy}
                  className="p-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-all text-xs font-mono flex items-center gap-1.5 active:scale-95"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location & IST Clock */}
              <div className="p-4 rounded-2xl bg-neutral-900 border border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-[#9ba4e6]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-neutral-500 block">
                      Operating Base
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-neutral-200">
                      {portfolioData.personal.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-xs font-mono text-[#b4bbf2]">
                  <Clock className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{time || 'IST'}</span>
                </div>
              </div>
            </div>

            {/* Social Channels List */}
            <div className="p-8 rounded-[2rem] bg-[#121216]/90 border border-white/[0.08] space-y-4 shadow-lg">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
                Connect Me On
              </span>

              <div className="space-y-2">
                {portfolioData.socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl hover:bg-white/[0.04] border border-transparent hover:border-white/[0.06] transition-all text-xs font-mono text-neutral-300 hover:text-white group"
                  >
                    <div className="flex items-center gap-3">
                      {getSocialIcon(social.id)}
                      <span className="font-medium text-sm text-neutral-200 group-hover:text-white">
                        {social.name}
                      </span>
                    </div>
                    <span className="text-neutral-500 group-hover:text-white flex items-center gap-1 transition-colors">
                      {social.handle}
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#9ba4e6]" />
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Dispatch Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-[2rem] bg-[#121216]/90 border border-white/[0.08] shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
              Dispatch a Message
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-8 font-normal">
              Direct inbox dispatch. You will receive a response within 24 hours.
            </p>

            {submitted ? (
              <div className="p-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-emerald-200">Message Received</h4>
                <p className="text-xs font-mono text-neutral-300">
                  Thank you! I will review your requirements and reach out directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul"
                      className="w-full px-4 py-3 rounded-2xl bg-neutral-900 border border-white/[0.08] text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-[#9ba4e6] transition-all font-sans"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahul@example.com"
                      className="w-full px-4 py-3 rounded-2xl bg-neutral-900 border border-white/[0.08] text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-[#9ba4e6] transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Message / Project Scope
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly outline your project requirements, scope, or inquiry..."
                    className="w-full px-4 py-3 rounded-2xl bg-neutral-900 border border-white/[0.08] text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-[#9ba4e6] transition-all resize-none font-sans"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-white hover:bg-neutral-200 text-[#09090b] font-semibold text-xs tracking-wider uppercase transition-all shadow-md hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-60"
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

        {/* Pratham's Signature Responsive Notice Banner (Section 10 from Dump) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 sm:p-7 rounded-[2rem] bg-white/[0.02] border border-white/[0.06] shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#9ba4e6] shrink-0">
              <Monitor className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-bold text-white block">
                A Better View Awaits
              </span>
              <p className="text-xs font-mono text-neutral-400 mt-0.5">
                This Portfolio is Designed for Larger Screens. For the Best experience, Please Visit on a Desktop or Laptop.
              </p>
            </div>
          </div>
          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest shrink-0 px-3 py-1 rounded-full bg-white/[0.03] border border-white/5">
            {portfolioData.personal.brandUnit} • Viewport Optimized
          </span>
        </div>

      </div>
    </section>
  );
}
