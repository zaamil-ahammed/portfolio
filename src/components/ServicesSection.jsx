import React from 'react';
import { ArrowUpRight, Palette, Code, Image as ImageIcon, Share2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ServicesSection({ onSelectProject }) {
  const serviceCards = [
    {
      id: 'branding',
      number: '01',
      title: 'Branding & Visual Designing',
      description: 'Logo marks, corporate identity kits, typography hierarchy, and visual direction crafted with geometric precision.',
      image: '/projects/jwala-inauguration.png',
      tags: ['Identity', 'Grid Systems', 'Typography'],
      icon: Palette,
      projectId: 'jwala-inauguration',
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
      icon: Code,
      projectId: 'pailippuram',
    },
    {
      id: 'posters',
      number: '03',
      title: 'Print & Poster Designing',
      description: 'Cultural festival campaigns, college fests, and high-impact event posters designed for maximum attention.',
      image: '/projects/caravan-carnival.jpg',
      tags: ['Photoshop', 'Illustrator', 'Festival Branding'],
      icon: ImageIcon,
      projectId: 'caravan-carnival',
    },
    {
      id: 'marketing',
      number: '04',
      title: 'Social Media & Carousel Design',
      description: 'Multi-slide storytelling carousels and high-retention visual assets built for audience conversion.',
      image: '/projects/instagram corousal/1.jpg',
      tags: ['Carousels', 'Canva', 'Social Media'],
      icon: Share2,
      projectId: 'instagram-carousel',
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-36 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Massive Editorial Heading (Pratham Style) */}
        <div className="mb-16 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#9ba4e6] block mb-3 font-semibold">
            Core Disciplines
          </span>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.95]">
            What I can <br />
            <span className="text-neutral-400">Help you with??</span>
          </h2>
        </div>

        {/* 4-Column Grid matching Prathamfolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {serviceCards.map((service) => (
            <div
              key={service.id}
              onClick={() => {
                if (onSelectProject) {
                  onSelectProject(service.projectId);
                }
              }}
              className="p-6 sm:p-7 rounded-[2rem] bg-[#121216]/90 border border-white/[0.08] hover:border-[#9ba4e6]/50 transition-all duration-300 flex flex-col justify-between group card-lift cursor-pointer shadow-lg hover:shadow-2xl"
            >
              <div className="space-y-5">
                {/* Top Number & Arrow Affordance */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-400 font-semibold tracking-wider">
                    {service.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/5 flex items-center justify-center text-neutral-400 group-hover:text-[#09090b] group-hover:bg-white transition-all">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Visual Image / Live Platform Showcase */}
                {service.image ? (
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-900 border border-white/5 relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                ) : (
                  <div className="rounded-2xl p-5 aspect-[4/3] bg-neutral-900/90 border border-white/5 flex flex-col justify-between relative overflow-hidden group-hover:border-[#9ba4e6]/30 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Live Web App
                      </span>
                      <service.icon className="w-4 h-4 text-[#9ba4e6]" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-white block truncate">
                        {service.websiteName}
                      </span>
                      <span className="text-xs font-mono text-neutral-400">
                        Interactive Community Platform
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
                    className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] text-neutral-400 border border-white/[0.04]"
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
