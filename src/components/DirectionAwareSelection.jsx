import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Camera, Code2, PenTool } from 'lucide-react';
import { cn } from '@/lib/utils';

const DIRECTIONS = ['top', 'right', 'bottom', 'left'];

const DIRECTION_ENTRY = {
  top: { x: 0, y: -12 },
  right: { x: 14, y: 0 },
  bottom: { x: 0, y: 12 },
  left: { x: -14, y: 0 },
};

const SWEEP_OFFSET = {
  top: { x: 0, y: '-100%' },
  right: { x: '100%', y: 0 },
  bottom: { x: 0, y: '100%' },
  left: { x: '-100%', y: 0 },
};

function getPointerDirection(event, element) {
  const { width, height, top, left } = element.getBoundingClientRect();
  const x = event.clientX - left - (width / 2) * (width > height ? height / width : 1);
  const y = event.clientY - top - (height / 2) * (height > width ? width / height : 1);
  const quadrant = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
  return DIRECTIONS[quadrant] || 'top';
}

const LINKS = [
  {
    id: 'name',
    label: 'Ahammed Shamil',
    to: '/contact',
    ariaLabel: 'Ahammed Shamil — Go to Contact page',
    hint: 'Contact',
    renderIcon: () => (
      <span className="inline-flex h-7 w-7 sm:h-9 sm:w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-sky-400/20 ring-1 ring-white/20">
        <img
          src="/portrait.jpg"
          alt="Ahammed Shamil"
          className="h-full w-full object-cover object-top"
        />
      </span>
    ),
  },
  {
    id: 'design',
    label: 'design',
    to: '/design',
    ariaLabel: 'design — Go to Design portfolio',
    hint: 'Design Portfolio',
    renderIcon: () => (
      <span className="inline-flex h-7 w-7 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-[#18181b] text-white shadow-sm">
        <PenTool className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
      </span>
    ),
  },
  {
    id: 'code',
    label: 'code',
    to: '/websites',
    ariaLabel: 'code — Go to Website portfolio',
    hint: 'Website Portfolio',
    renderIcon: () => (
      <span className="inline-flex h-7 w-7 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg border border-[#9ba4e6]/30 bg-[#9ba4e6]/15 text-[#9ba4e6] shadow-sm">
        <Code2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
      </span>
    ),
  },
  {
    id: 'explore',
    label: 'explore',
    to: '/photography',
    ariaLabel: 'explore — Go to Photography portfolio',
    hint: 'Photography Portfolio',
    renderIcon: () => (
      <span className="inline-flex h-7 w-7 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg border border-[#a855f7]/30 bg-[#a855f7]/15 text-[#a855f7] shadow-sm">
        <Camera className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
      </span>
    ),
  },
];

export function DirectionAwareSelection({ className }) {
  const [activeState, setActiveState] = useState(null); // { id, direction }
  const [frameRect, setFrameRect] = useState(null);
  const [hasEnteredOnce, setHasEnteredOnce] = useState(false);

  const containerRef = useRef(null);
  const itemRefs = useRef(new Map());

  const measureActive = useCallback(() => {
    if (!activeState?.id) {
      setFrameRect(null);
      return;
    }
    const container = containerRef.current;
    const targetEl = itemRefs.current.get(activeState.id);
    if (!container || !targetEl) return;

    const containerRect = container.getBoundingClientRect();
    const elRect = targetEl.getBoundingClientRect();

    setFrameRect({
      x: elRect.left - containerRect.left - 6,
      y: elRect.top - containerRect.top - 4,
      width: elRect.width + 12,
      height: elRect.height + 8,
    });
  }, [activeState?.id]);

  useLayoutEffect(() => {
    measureActive();
    window.addEventListener('resize', measureActive, { passive: true });
    return () => window.removeEventListener('resize', measureActive);
  }, [measureActive]);

  const handleEnter = (itemId, direction) => {
    setHasEnteredOnce(true);
    setActiveState({ id: itemId, direction });
  };

  const handleContainerLeave = () => {
    setActiveState(null);
    setHasEnteredOnce(false);
  };

  const renderInteractiveLink = (item, showHoverCue = false) => {
    const isActive = activeState?.id === item.id;
    const dir = activeState?.direction ?? 'top';
    const sweep = SWEEP_OFFSET[dir];

    return (
      <span key={item.id} className="relative inline-block align-baseline">
        {showHoverCue && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-9 left-8 sm:-top-11 sm:left-14 flex items-end gap-1.5 whitespace-nowrap select-none"
          >
            <svg
              width="34"
              height="24"
              viewBox="0 0 38 26"
              fill="none"
              className="text-neutral-400/80 translate-y-1"
            >
              <path
                d="M35 4C24 2 15 8 8 21"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <path
                d="M6.5 14.5L7.5 22L14.5 19"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="-translate-y-2.5 font-serif text-xs sm:text-sm italic tracking-normal text-neutral-400">
              hover here
            </span>
          </span>
        )}

        <Link
          ref={(el) => {
            if (el) itemRefs.current.set(item.id, el);
            else itemRefs.current.delete(item.id);
          }}
          to={item.to}
          aria-label={item.ariaLabel}
          onMouseEnter={(e) => handleEnter(item.id, getPointerDirection(e, e.currentTarget))}
          onFocus={() => handleEnter(item.id, 'left')}
          className={cn(
            'relative z-10 inline-flex items-center gap-2 sm:gap-2.5 rounded-md px-1.5 py-0.5 font-medium text-white transition-colors duration-200 focus:outline-none',
            isActive ? 'text-white' : 'text-neutral-100 hover:text-white'
          )}
        >
          {/* Direction-aware highlight sweep inside the hovered link */}
          <AnimatePresence>
            {isActive && (
              <motion.span
                key={`${item.id}-${dir}`}
                aria-hidden="true"
                initial={{ x: sweep.x, y: sweep.y, opacity: 0.25 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                exit={{ x: sweep.x, y: sweep.y, opacity: 0 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-md bg-white/[0.06]"
              />
            )}
          </AnimatePresence>

          {item.renderIcon()}
          <span>{item.label}</span>
        </Link>
      </span>
    );
  };

  const entryDelta = DIRECTION_ENTRY[activeState?.direction ?? 'top'];

  return (
    <div
      ref={containerRef}
      onMouseLeave={handleContainerLeave}
      className={cn('relative mx-auto w-full max-w-3xl select-none py-8 px-2', className)}
    >
      {/* Direction-aware Figma selection frame on hover/focus */}
      <AnimatePresence>
        {activeState && frameRect && (
          <motion.div
            key="selection-frame"
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 z-20 rounded-[6px] border-[1.5px] border-[#9ba4e6] shadow-[0_0_24px_rgba(155,164,230,0.18)]"
            initial={
              hasEnteredOnce
                ? {
                    x: frameRect.x + entryDelta.x,
                    y: frameRect.y + entryDelta.y,
                    width: frameRect.width,
                    height: frameRect.height,
                    opacity: 0,
                  }
                : false
            }
            animate={{
              x: frameRect.x,
              y: frameRect.y,
              width: frameRect.width,
              height: frameRect.height,
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              transition: { duration: 0.15 },
            }}
            transition={{
              type: 'spring',
              stiffness: 460,
              damping: 34,
              mass: 0.65,
            }}
          >
            {/* 4 Corner Resize Handles */}
            <span className="absolute -top-1 -left-1 h-2 w-2 border-[1.5px] border-[#9ba4e6] bg-[#09090b]" />
            <span className="absolute -top-1 -right-1 h-2 w-2 border-[1.5px] border-[#9ba4e6] bg-[#09090b]" />
            <span className="absolute -bottom-1 -left-1 h-2 w-2 border-[1.5px] border-[#9ba4e6] bg-[#09090b]" />
            <span className="absolute -bottom-1 -right-1 h-2 w-2 border-[1.5px] border-[#9ba4e6] bg-[#09090b]" />

            {/* Subtle destination & dimension tag */}
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-sm bg-[#9ba4e6] px-1.5 py-0.5 font-mono text-[10px] font-semibold tracking-tight text-[#09090b] shadow-sm">
              {LINKS.find((l) => l.id === activeState.id)?.hint} · {Math.round(frameRect.width)}×{Math.round(frameRect.height)}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Editorial Inline Copy */}
      <p className="text-left text-2xl sm:text-4xl lg:text-[2.65rem] font-normal leading-[1.65] sm:leading-[1.6] tracking-tight text-neutral-400">
        <span>Hi, I&apos;m </span>
        {renderInteractiveLink(LINKS[0], true)}
        <span>.</span>
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>
        <span>I </span>
        {renderInteractiveLink(LINKS[1])}
        <span>, </span>
        {renderInteractiveLink(LINKS[2])}
        <span>, and </span>
        {renderInteractiveLink(LINKS[3])}
        <span>.</span>
      </p>
    </div>
  );
}

export default DirectionAwareSelection;
