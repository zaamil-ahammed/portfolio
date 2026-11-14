import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import ParticleText from './components/ParticleText';
import DirectionAwareSelection from './components/DirectionAwareSelection';
import TextPressure from './components/TextPressure';
import ContactPage from './pages/ContactPage';
import DesignPortfolioPage from './pages/DesignPortfolioPage';
import WebsitePortfolioPage from './pages/WebsitePortfolioPage';
import PhotographyPortfolioPage from './pages/PhotographyPortfolioPage';

const clamp01 = (v) => Math.min(1, Math.max(0, v));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomeExperience() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let rafId = 0;

    const updateScroll = () => {
      rafId = 0;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const nextProgress = clamp01(window.scrollY / maxScroll);
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

  // Stage 1 (0.0 -> 0.34): First animation — AHMED SHAMIL ParticleText
  const firstOpacity = clamp01(1 - scrollProgress / 0.34);
  const firstTranslateY = -scrollProgress * 65;

  // Stage 2 (0.18 -> 0.5 -> 0.82): DirectionAwareSelection before second animation starts
  const selectionIn = clamp01((scrollProgress - 0.18) / 0.2);
  const selectionOut = clamp01((scrollProgress - 0.62) / 0.2);
  const selectionOpacity = selectionIn * (1 - selectionOut);
  const selectionTranslateY = (1 - selectionIn) * 32 - selectionOut * 32;

  // Stage 3 (0.66 -> 1.0): Second animation after scroll — PORTFOLIO TextPressure
  const secondOpacity = clamp01((scrollProgress - 0.66) / 0.26);
  const secondTranslateY = (1 - clamp01((scrollProgress - 0.66) / 0.34)) * 36;

  const activeStage = scrollProgress < 0.28 ? 1 : scrollProgress < 0.72 ? 2 : 3;
  const scrollHintOpacity = clamp01(1 - scrollProgress * 8);
  const stageTwoHintOpacity = selectionOpacity * clamp01(1 - (scrollProgress - 0.5) * 4);

  return (
    <div className="relative min-h-[300vh] w-full bg-[#09090b] text-[#fafafa] font-sans antialiased selection:bg-[#9ba4e6]/30 selection:text-[#b4bbf2]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Layer 1: AHMED SHAMIL — ParticleText */}
        <div
          className={`absolute inset-0 w-full h-full will-change-transform ${
            activeStage === 1 ? 'pointer-events-auto' : 'pointer-events-none'
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

        {/* Layer 2: Direction Aware Selection (before second animation starts) */}
        <div
          className={`absolute inset-0 w-full h-full flex items-center justify-center px-6 sm:px-12 will-change-transform ${
            activeStage === 2 ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
          style={{
            opacity: selectionOpacity,
            transform: `translate3d(0, ${selectionTranslateY}vh, 0)`,
          }}
        >
          <DirectionAwareSelection />
        </div>

        {/* Layer 3: PORTFOLIO — TextPressure (second animation after scroll) */}
        <div
          className={`absolute inset-0 w-full h-full flex items-center justify-center px-6 sm:px-12 will-change-transform ${
            activeStage === 3 ? 'pointer-events-auto' : 'pointer-events-none'
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

        {/* Scroll Cue on Stage 1 */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white transition-colors"
          style={{
            opacity: scrollHintOpacity,
            pointerEvents: scrollHintOpacity > 0.05 ? 'auto' : 'none',
          }}
          aria-label="Scroll down to view direction-aware selection"
        >
          <span>Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>

        {/* Scroll Cue on Stage 2 */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white transition-colors"
          style={{
            opacity: activeStage === 2 ? stageTwoHintOpacity : 0,
            pointerEvents: activeStage === 2 && stageTwoHintOpacity > 0.05 ? 'auto' : 'none',
          }}
          aria-label="Scroll down to view portfolio text pressure animation"
        >
          <span>Continue</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>

      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeExperience />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/design" element={<DesignPortfolioPage />} />
        <Route path="/websites" element={<WebsitePortfolioPage />} />
        <Route path="/photography" element={<PhotographyPortfolioPage />} />
      </Routes>
    </BrowserRouter>
  );
}
