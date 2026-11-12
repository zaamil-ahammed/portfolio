import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ServicesSection() {
  const serviceCards = [
    {
      id: 'branding',
      number: '01',
      title: 'Branding & Visual Designing',
      description: 'Logo marks, corporate identity kits, typography hierarchy, and visual direction crafted with geometric precision.',
      image: '/projects/jwala-inauguration.png',
      tags: ['Identity', 'Grid Systems', 'Typography'],
    },
    {
      id: 'webdev',
      number: '02',
      title: 'Web Designing & Development',
      description: 'High-speed, accessible web applications and community portals built with React, Vite, and responsive Tailwind CSS.',
      image: null,
      websiteUrl: 'https://pailippuram.vercel.app',
      websiteName: 'pailippuram.vercel.app',
      tags: ['React', 'Tailwind CSS', 'Vercel'],
    },
    {
      id: 'posters',
      number: '03',
      title: 'Print & Poster Designing',
      description: 'Cultural festival campaigns, college fests, and high-impact event posters designed for maximum attention.',
      image: '/projects/caravan-carnival.jpg',
      tags: ['Photoshop', 'Illustrator', 'Festival Branding'],
    },
    {
      id: 'marketing',
      number: '04',
      title: 'Social Media & Carousel Design',
      description: 'Multi-slide storytelling carousels and high-retention visual assets built for audience conversion.',
      image: '/projects/instagram corousal/1.jpg',
      tags: ['Carousels', 'Canva', 'Social Media'],
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-36 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Massive Editorial Heading (Pratham Style) */}
        <div className="mb-16 sm:mb-24">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9ba4e6] block mb-3 font-medium">
            Core Disciplines
          </span>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.95]">
            What I can <br />
            <span className="text-neutral-400">Help you with??</span>
          </h2>
        </div>

        {/* 4-Column / Grid Layout matching Pratham */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {serviceCards.map((service) => (
            <div
              key={service.id}
              className="p-6 sm:p-7 rounded-3xl bg-[#121216]/90 border border-white/[0.07] hover:border-[#9ba4e6]/40 transition-all duration-300 flex flex-col justify-between group card-lift"
            >
              <div className="space-y-5">
                {/* Top Number */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-400 font-semibold">
                    {service.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-[#9ba4e6] transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Visual Image if available */}
                {service.image ? (
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-900 border border-white/5">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                ) : (
                  <div className="rounded-2xl p-5 aspect-[4/3] bg-neutral-900/90 border border-white/5 flex flex-col justify-between">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
                      ● Live Production
                    </span>
                    <div>
                      <span className="text-sm font-bold text-white block">
                        {service.websiteName}
                      </span>
                      <span className="text-xs font-mono text-neutral-400">
                        Interactive Web App
                      </span>
                    </div>
                  </div>
                )}

                {/* Title & Description */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#b4bbf2] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mt-2.5 font-normal">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="pt-6 mt-6 border-t border-white/[0.05] flex flex-wrap gap-1.5">
                {service.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
