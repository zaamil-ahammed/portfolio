import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Clock,
  Copy,
  Github,
  Instagram,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Send,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ContactPage() {
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
    navigator.clipboard?.writeText(portfolioData.contact.email);
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
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] px-6 sm:px-12 py-12">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="border-b border-white/10 pb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-[#9ba4e6] transition-colors mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Contact
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
            Get in touch with Ahammed Shamil for design, web builds, and creative collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-2xl border border-white/10 bg-[#121216] p-6 space-y-4">
              <h2 className="text-lg font-semibold text-white">Direct Reach-out</h2>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#09090b] border border-white/10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] flex items-center justify-center text-[#9ba4e6] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono uppercase text-neutral-500 block">
                        Email
                      </span>
                      <a
                        href={`mailto:${portfolioData.contact.email}`}
                        className="text-xs sm:text-sm font-mono text-neutral-200 hover:text-[#9ba4e6] truncate block"
                      >
                        {portfolioData.contact.displayEmail}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-neutral-300 transition-colors shrink-0"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-[#09090b] border border-white/10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] flex items-center justify-center text-[#9ba4e6] shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-neutral-500 block">
                        Location
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-neutral-200">
                        {portfolioData.personal.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-mono text-[#b4bbf2]">
                    <Clock className="w-3 h-3 text-neutral-400" />
                    <span>{time || 'IST'}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#121216] p-6 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                Profiles
              </h3>
              <div className="space-y-1.5">
                {portfolioData.socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.04] transition-colors text-xs font-mono text-neutral-300 hover:text-white"
                  >
                    <div className="flex items-center gap-2.5">
                      {social.id === 'github' && <Github className="w-4 h-4" />}
                      {social.id === 'linkedin' && <Linkedin className="w-4 h-4 text-[#0a66c2]" />}
                      {social.id === 'instagram' && <Instagram className="w-4 h-4 text-[#e1306c]" />}
                      <span>{social.name}</span>
                    </div>
                    <span className="text-neutral-500 flex items-center gap-1">
                      {social.handle}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#121216] p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-white mb-1">Send a Message</h2>
            <p className="text-xs text-neutral-400 mb-6">
              Share your project details or inquiry and I will get back within 24 hours.
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-base font-semibold text-emerald-200">
                  Message Received
                </h3>
                <p className="text-xs text-neutral-300 font-mono">
                  Thank you for reaching out. I will reply to your email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#09090b] border border-white/10 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-[#9ba4e6]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#09090b] border border-white/10 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-[#9ba4e6]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or idea..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#09090b] border border-white/10 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-[#9ba4e6] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-white hover:bg-neutral-200 text-[#09090b] font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
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
    </div>
  );
}
