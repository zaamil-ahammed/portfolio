import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Camera } from 'lucide-react';

const PHOTO_FRAMES = [
  {
    id: 'frame-01',
    src: '/potrait photo.jpg',
    title: 'Monochrome Study',
    location: 'Kerala, India',
    meta: 'Natural Light · Portrait',
  },
  {
    id: 'frame-02',
    src: '/portrait.jpg',
    title: 'Editorial Frame',
    location: 'Valanchery, Kerala',
    meta: 'Studio Contrast · 35mm Look',
  },
];

export default function PhotographyPortfolioPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] px-6 sm:px-12 py-12">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-[#9ba4e6] transition-colors mb-4"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Photography Portfolio
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Visual explorations through framing, natural contrast, and quiet moments.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#a855f7]">
            <Camera className="w-3.5 h-3.5" />
            <span>Explore Series</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PHOTO_FRAMES.map((frame) => (
            <figure
              key={frame.id}
              className="group rounded-2xl border border-white/10 bg-[#121216] overflow-hidden transition-all duration-300 hover:border-[#a855f7]/50"
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-zinc-900">
                <img
                  src={frame.src}
                  alt={frame.title}
                  className="h-full w-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="p-5 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-white">{frame.title}</h2>
                  <p className="text-xs text-neutral-400 mt-0.5">{frame.location}</p>
                </div>
                <span className="font-mono text-[11px] text-neutral-400">
                  {frame.meta}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
