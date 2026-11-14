import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import ParticleText from './components/ParticleText';
import DirectionAwareSelection from './components/DirectionAwareSelection';
import TextPressure from './components/TextPressure';
import FeyCards from './components/FeyCards';
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

  // Stage 1 (0.00 -> 0.24): AHMED SHAMIL — ParticleText
  const firstOpacity = clamp01(1 - scrollProgress / 0.24);
  const firstTranslateY = -scrollProgress * 75;

  // Stage 2 (0.14 -> 0.34 -> 0.56): DirectionAwareSelection + TrueFocus
  const selectionIn = clamp01((scrollProgress - 0.14) / 0.14);
  const selectionOut = clamp01((scrollProgress - 0.44) / 0.14);
  const selectionOpacity = selectionIn * (1 - selectionOut);
  const selectionTranslateY = (1 - selectionIn) * 32 - selectionOut * 32;

  // Stage 3 (0.48 -> 0.67 -> 0.86): PORTFOLIO — TextPressure
  const pressureIn = clamp01((scrollProgress - 0.48) / 0.14);
  const pressureOut = clamp01((scrollProgress - 0.74) / 0.14);
  const pressureOpacity = pressureIn * (1 - pressureOut);
  const pressureTranslateY = (1 - pressureIn) * 32 - pressureOut * 32;

  // Stage 4 (0.78 -> 1.00): Projects Showcase — FeyCards
  const projectsIn = clamp01((scrollProgress - 0.78) / 0.18);
  const projectsTranslateY = (1 - clamp01((scrollProgress - 0.78) / 0.22)) * 32;

  const activeStage =
    scrollProgress < 0.2
      ? 1
      : scrollProgress < 0.52
        ? 2
        : scrollProgress < 0.82
          ? 3
          : 4;

  const scrollHintOpacity = clamp01(1 - scrollProgress * 10);
  const stageTwoHintOpacity = selectionOpacity * clamp01(1 - (scrollProgress - 0.34) * 5);
  const stageThreeHintOpacity = pressureOpacity * clamp01(1 - (scrollProgress - 0.67) * 5);

  return (
    <div className="relative min-h-[400vh] w-full bg-[#09090b] text-[#fafafa] font-sans antialiased selection:bg-[#9ba4e6]/30 selection:text-[#b4bbf2]">
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

        {/* Layer 2: Direction Aware Selection + TrueFocus */}
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

        {/* Layer 3: PORTFOLIO — TextPressure */}
        <div
          className={`absolute inset-0 w-full h-full flex items-center justify-center px-6 sm:px-12 will-change-transform ${
            activeStage === 3 ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
          style={{
            opacity: pressureOpacity,
            transform: `translate3d(0, ${pressureTranslateY}vh, 0)`,
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

        {/* Layer 4: Projects — FeyCards */}
        <div
          className={`absolute inset-0 w-full h-full will-change-transform ${
            activeStage === 4 ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
          style={{
            opacity: projectsIn,
            transform: `translate3d(0, ${projectsTranslateY}vh, 0)`,
          }}
        >
          <FeyCards
            isVisible={activeStage === 4}
            spring={{ type: 'spring', visualDuration: 0.5, bounce: 0.2 }}
            shiftDistance={60}
            swapDuration={0.5}
            entranceStagger={0.2}
          />
        </div>

        {/* Scroll Cue on Stage 1 */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white transition-colors"
          style={{
            opacity: scrollHintOpacity,
            pointerEvents: scrollHintOpacity > 0.05 ? 'auto' : 'none',
          }}
          aria-label="Scroll down to introduction"
        >
          <span>Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>

        {/* Scroll Cue on Stage 2 */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white transition-colors"
          style={{
            opacity: activeStage === 2 ? stageTwoHintOpacity : 0,
            pointerEvents: activeStage === 2 && stageTwoHintOpacity > 0.05 ? 'auto' : 'none',
          }}
          aria-label="Scroll down to portfolio"
        >
          <span>Continue</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>

        {/* Scroll Cue on Stage 3 */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: window.innerHeight * 3, behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white transition-colors"
          style={{
            opacity: activeStage === 3 ? stageThreeHintOpacity : 0,
            pointerEvents: activeStage === 3 && stageThreeHintOpacity > 0.05 ? 'auto' : 'none',
          }}
          aria-label="Scroll down to projects"
        >
          <span>Projects</span>
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
