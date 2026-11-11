import React, { useEffect, useRef } from 'react';

export const CursorGlow: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    if (prefersReduced || isCoarsePointer) return;

    let rafId = 0;
    let targetX = -400;
    let targetY = -400;
    let visible = false;

    const updatePosition = () => {
      el.style.transform = `translate3d(${targetX - 200}px, ${targetY - 200}px, 0)`;
      if (!visible) {
        el.style.opacity = '1';
        visible = true;
      }
      rafId = 0;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!rafId) {
        rafId = requestAnimationFrame(updatePosition);
      }
    };

    const handleMouseLeave = () => {
      el.style.opacity = '0';
      visible = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full opacity-0 transition-opacity duration-300 z-[1] max-md:hidden will-change-transform"
      style={{
        background: 'radial-gradient(circle, rgba(99,102,241,0.11) 0%, rgba(6,182,212,0.04) 45%, transparent 72%)',
      }}
    />
  );
};

