import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import ParticleText from './components/ParticleText';
import TextPressure from './components/TextPressure';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let rafId = 0;

    const updateScroll = () => {
      rafId = 0;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const nextProgress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      setScrollProgress(nextProgress);
    };

    const handleScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(updateScroll);
      }
    };

    updateScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const firstOpacity = Math.max(0, 1 - scrollProgress * 1.45);
  const firstTranslateY = -scrollProgress * 45;

  const secondOpacity = Math.min(1, Math.max(0, (scrollProgress - 0.12) / 0.65));
  const secondTranslateY = (1 - scrollProgress) * 45;

  const isSecondActive = scrollProgress >= 0.5;
  const scrollHintOpacity = Math.max(0, 1 - scrollProgress * 6);

  return (
    <div className="relative min-h-[200vh] w-full bg-[#09090b] text-[#fafafa] font-sans antialiased selection:bg-[#9ba4e6]/30 selection:text-[#b4bbf2]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Layer 1: AHMED SHAMIL — ParticleText */}
        <div
          className={`absolute inset-0 w-full h-full will-change-transform ${
            isSecondActive ? 'pointer-events-none' : 'pointer-events-auto'
          }`}
          style={{
            opacity: firstOpacity,
            transform: `translate3d(0, ${firstTranslateY}vh, 0)`,
          }}
        >
          <ParticleText
            text="AHMED SHAMIL"
            particleSize={2}
            density={4}
            color="currentColor"
            highlightColor="#a855f7"
            highlightMode="motion"
            shape="circle"
            intro="scan"
            scatter={180}
            gatherDuration={1600}
            stagger={420}
            clickBurst
            burstStrength={1}
            pointerRepel={40}
            repelRadius={120}
            idleDrift={0.7}
            trigger="hover"
            fontSize="clamp(3rem, 12vw, 8rem)"
            fontWeight={800}
            fontFamily="inherit"
            glow
          />
        </div>

        {/* Layer 2: PORTFOLIO — TextPressure */}
        <div
          className={`absolute inset-0 w-full h-full flex items-center justify-center px-6 sm:px-12 will-change-transform ${
            isSecondActive ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
          style={{
            opacity: secondOpacity,
            transform: `translate3d(0, ${secondTranslateY}vh, 0)`,
          }}
        >
          <div className="w-full max-w-6xl h-[200px] sm:h-[300px]">
            <TextPressure
              text="PORTFOLIO"
              flex={true}
              alpha={false}
              stroke
              width={true}
              weight={true}
              italic={false}
              radius={0.3}
              smoothing={0.5}
              idle="none"
              idleSpeed={1.4}
              clickRipple={true}
              strokeColor="#ffffff"
              strokeWidth={3}
              minFontSize={36}
              scale
            />
          </div>
        </div>

        {/* Subtle Scroll Cue on First Screen */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white transition-colors"
          style={{
            opacity: scrollHintOpacity,
            pointerEvents: scrollHintOpacity > 0.05 ? 'auto' : 'none',
          }}
          aria-label="Scroll down to view portfolio text pressure animation"
        >
          <span>Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>

      </div>
    </div>
  );
}
