'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

const CARD_SPACING = 32;

const MAIN_CARD = {
  src: '/projects/jwala-inauguration.png',
  title: 'Jwala Inauguration',
  category: 'Poster Design',
};

const HERO_CARDS = [
  {
    activeSrc: '/projects/jwala-guest.png',
    title: 'Jwala Dignitary Creative',
    category: 'Poster Design',
    left: 'left-[32px]',
  },
  {
    activeSrc: '/projects/caravan-carnival.jpg',
    title: 'Caravan Carnival',
    category: 'Festival Branding',
    left: 'left-[64px]',
  },
  {
    activeSrc: '/projects/Raagonam.jpg',
    title: 'Raagonam Celebration',
    category: 'Graphic Design',
    left: 'left-[96px]',
  },
  {
    activeSrc: '/projects/victory 2026-27.jpg',
    title: 'Victory Cultural Fest',
    category: 'Brand Identity',
    left: 'left-[128px]',
  },
  {
    activeSrc: '/projects/victory.jpg',
    title: 'Victory Celebration',
    category: 'Event Poster',
    left: 'left-[160px]',
    showIdleSwap: false,
    className: 'transition-opacity duration-300',
  },
];

const defaultSpring = {
  type: 'spring',
  visualDuration: 0.5,
  bounce: 0.2,
};

export const controls = {
  spring: defaultSpring,
  shiftDistance: [60, 0, 200, 5],
  swapDuration: [0.5, 0, 2, 0.05],
  entranceStagger: [0.1, 0, 0.5, 0.01],
};

export const FeyCards = ({
  spring = defaultSpring,
  shiftDistance = 60,
  swapDuration = 0.5,
  entranceStagger = 0.2,
  isVisible = true,
  headline = 'Selected Works. Built with Purpose.',
  className,
} = {}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [enlargedIndex, setEnlargedIndex] = useState(null);
  const [cardTilt, setCardTilt] = useState({ rx: 0, ry: 0 });
  const [modalTilt, setModalTilt] = useState({ rx: 0, ry: 0, gx: 50, gy: 50 });

  const isHovered = activeIndex !== null || enlargedIndex !== null;
  const swapStyle = { transitionDuration: `${swapDuration}s` };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: entranceStagger,
        staggerDirection: -1,
      },
    },
  };

  const cardVariants = {
    hidden: (offset) => ({ x: offset, opacity: 0 }),
    visible: { x: 0, opacity: 1, transition: spring },
  };

  const enlargedCard = enlargedIndex !== null ? HERO_CARDS[enlargedIndex] : null;

  const handleCardPointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setCardTilt({
      rx: -py * 12,
      ry: px * 14,
    });
  };

  const handleModalPointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setModalTilt({
      rx: (0.5 - py) * 12,
      ry: (px - 0.5) * 14,
      gx: px * 100,
      gy: py * 100,
    });
  };

  return (
    <div
      className={cn(
        'relative flex h-screen w-full items-center justify-center bg-[#09090b] overflow-hidden',
        className
      )}
    >
      <div className="relative flex items-center justify-center">
        <motion.h2
          key="solid"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className={cn(
            'pointer-events-none absolute top-1/2 left-1/2 z-50 mx-auto w-fit -translate-x-1/2 -translate-y-1/2 text-center text-xl font-bold tracking-tight whitespace-nowrap md:text-5xl',
            'bg-clip-text py-4 text-transparent transition-all duration-500',
            'bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_30%,rgba(255,255,255,0)_60%,rgba(255,255,255,0.2)_80%,white_100%)]'
          )}
        >
          {headline}
        </motion.h2>

        <motion.h2
          key="gradient"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          className={cn(
            'pointer-events-none absolute top-1/2 left-1/2 z-50 mx-auto w-fit -translate-x-1/2 -translate-y-1/2 text-center text-xl font-bold tracking-tight whitespace-nowrap md:text-5xl',
            'bg-clip-text py-4 text-transparent transition-all duration-500',
            'bg-[linear-gradient(to_right,white,white)]'
          )}
        >
          {headline}
        </motion.h2>

        {/* 3D Perspective Stage */}
        <motion.div
          className="relative flex h-[21rem] sm:h-[24rem] w-[390px] sm:w-[440px]"
          style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* Base Anchor Card */}
          <div
            className="absolute inset-y-0 left-0 h-[21rem] sm:h-[24rem] w-56 sm:w-64"
            style={{ perspective: '1200px' }}
          >
            <div
              className="relative h-full w-full rounded-2xl border border-white/10 bg-[#111116] overflow-hidden shadow-[-16px_24px_40px_rgba(0,0,0,0.85)]"
              style={{
                transform: 'rotateY(-36deg) rotateX(6deg) rotateZ(-1.5deg)',
                transformOrigin: 'center center',
              }}
            >
              <img
                src={MAIN_CARD.src}
                alt={MAIN_CARD.title}
                width={1000}
                height={1000}
                className="h-full w-full object-contain grayscale brightness-[0.35] contrast-125"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/10" />
            </div>
          </div>

          {/* Fanned Interactive 3D Cards */}
          {HERO_CARDS.map((card, index) => {
            const shouldShift = activeIndex !== null && index > activeIndex;
            const isActive = activeIndex === index;
            const entranceOffset = -index * CARD_SPACING;

            return (
              <motion.div
                key={card.activeSrc}
                className={`group absolute -bottom-2 ${card.left} z-20 h-[21rem] sm:h-[24rem] w-56 sm:w-64 cursor-pointer ${card.className ?? ''}`}
                style={{ perspective: '1200px' }}
                variants={cardVariants}
                custom={entranceOffset}
                onMouseEnter={() => {
                  setActiveIndex(index);
                  setCardTilt({ rx: 0, ry: 0 });
                }}
                onMouseMove={handleCardPointerMove}
                onMouseLeave={() => {
                  setActiveIndex(null);
                  setCardTilt({ rx: 0, ry: 0 });
                }}
                onClick={() => {
                  setModalTilt({ rx: 0, ry: 0, gx: 50, gy: 50 });
                  setEnlargedIndex(index);
                }}
              >
                <motion.div
                  className="relative h-full w-full"
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{
                    x: shouldShift ? shiftDistance : 0,
                    y: isActive ? -18 : 0,
                    scale: isActive ? 1.05 : 1,
                    rotateY: isActive ? -10 + cardTilt.ry : -36,
                    rotateX: isActive ? 3 + cardTilt.rx : 6,
                    rotateZ: isActive ? 0 : -1.5,
                  }}
                  transition={spring}
                >
                  {/* Card 3D Rim & Thickness Edge */}
                  <div
                    className={cn(
                      'relative h-full w-full overflow-hidden rounded-2xl bg-[#111116] border-l-2 border-t border-r border-b transition-colors duration-300',
                      isActive
                        ? 'border-l-white/50 border-white/30 shadow-[-24px_30px_50px_rgba(0,0,0,0.95),0_0_30px_rgba(155,164,230,0.2)]'
                        : 'border-l-white/20 border-white/10 shadow-[-18px_22px_38px_rgba(0,0,0,0.9)]'
                    )}
                  >
                    {card.showIdleSwap !== false ? (
                      <>
                        <img
                          src={card.activeSrc}
                          alt={card.title}
                          width={1000}
                          height={1000}
                          style={swapStyle}
                          className={cn(
                            'absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity group-hover:opacity-100',
                            isActive && 'opacity-100'
                          )}
                        />
                        <img
                          src={card.activeSrc}
                          alt={`${card.title} idle`}
                          width={1000}
                          height={1000}
                          style={swapStyle}
                          className={cn(
                            'absolute inset-0 h-full w-full object-contain grayscale brightness-[0.26] contrast-125 opacity-100 transition-opacity group-hover:opacity-0',
                            isActive && 'opacity-0'
                          )}
                        />
                      </>
                    ) : (
                      <img
                        src={card.activeSrc}
                        alt={card.title}
                        width={1000}
                        height={1000}
                        style={swapStyle}
                        className="absolute inset-0 h-full w-full object-contain transition-opacity"
                      />
                    )}

                    {/* Specular Glass Glare & Edge Depth */}
                    <div
                      className={cn(
                        'pointer-events-none absolute inset-0 transition-opacity duration-300',
                        isActive ? 'opacity-100' : 'opacity-40'
                      )}
                      style={{
                        background:
                          'linear-gradient(115deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.03) 32%, transparent 60%, rgba(0,0,0,0.4) 100%)',
                      }}
                    />

                    {/* Subtle Project Label on Hover */}
                    <div
                      className={cn(
                        'pointer-events-none absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300',
                        isActive ? 'opacity-100' : 'opacity-0'
                      )}
                    >
                      <span className="block font-mono text-[10px] uppercase tracking-widest text-[#9ba4e6]">
                        {card.category}
                      </span>
                      <span className="block text-sm font-semibold text-white truncate">
                        {card.title}
                      </span>
                    </div>
                  </div>

                  {/* Depth Shadow Divider */}
                  <div className="pointer-events-none absolute top-8 -left-3 z-50 h-full w-4 bg-black/90 blur-md" />
                </motion.div>
              </motion.div>
            );
          })}

          {/* Subtle Bottom Vignette */}
          <div className="pointer-events-none absolute -inset-x-12 -bottom-8 z-40 h-20 bg-gradient-to-t from-[#09090b] via-[#09090b]/50 to-transparent" />
        </motion.div>
      </div>

      {/* Full-Size Uncropped 3D Interactive Modal Preview */}
      <AnimatePresence>
        {enlargedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setEnlargedIndex(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md cursor-zoom-out p-4 sm:p-8"
            style={{ perspective: '1400px' }}
          >
            <button
              type="button"
              onClick={() => setEnlargedIndex(null)}
              className="fixed top-5 right-5 z-[110] rounded-full bg-black/80 border border-white/20 px-4 py-1.5 text-xs font-medium text-white hover:bg-white hover:text-black transition-colors"
            >
              ✕ Close
            </button>

            <motion.div
              initial={{ scale: 0.85, rotateY: -22, opacity: 0 }}
              animate={{ scale: 1, rotateY: 0, opacity: 1 }}
              exit={{ scale: 0.88, rotateY: 16, opacity: 0 }}
              transition={spring}
              className="relative flex flex-col items-center cursor-default max-w-[92vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                onMouseMove={handleModalPointerMove}
                onMouseLeave={() => setModalTilt({ rx: 0, ry: 0, gx: 50, gy: 50 })}
                animate={{
                  rotateX: modalTilt.rx,
                  rotateY: modalTilt.ry,
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="relative inline-flex items-center justify-center rounded-2xl border border-white/20 bg-[#111116] shadow-[0_30px_80px_rgba(0,0,0,0.9),0_0_40px_rgba(155,164,230,0.18)] overflow-hidden"
              >
                <img
                  src={enlargedCard.activeSrc}
                  alt={enlargedCard.title}
                  className="block max-h-[80vh] max-w-[88vw] w-auto h-auto object-contain"
                />
                {/* Interactive 3D Specular Sheen */}
                <div
                  className="pointer-events-none absolute inset-0 transition-opacity duration-200"
                  style={{
                    background: `radial-gradient(circle at ${modalTilt.gx}% ${modalTilt.gy}%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.03) 35%, transparent 65%)`,
                  }}
                />
              </motion.div>

              <div className="mt-4 text-center">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#9ba4e6] block">
                  {enlargedCard.category}
                </span>
                <h3 className="text-lg font-semibold text-white mt-0.5">
                  {enlargedCard.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FeyCards;
