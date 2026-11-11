import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}

export const Reveal: React.FC<RevealProps> = ({ children, className = '', delayMs = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const revealNow = () => setVisible(true);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealNow();
      return;
    }

    // Si ya está visible o arriba del viewport actual (por ejemplo tras navegar a un #ancla)
    const rect = node.getBoundingClientRect();
    if (rect.top <= window.innerHeight + 120) {
      revealNow();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.top <= window.innerHeight + 120) {
          revealNow();
          observer.disconnect();
        }
      },
      { rootMargin: '120px 0px 120px 0px', threshold: 0 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-block ${visible ? 'reveal-visible' : ''} ${className}`}
      style={delayMs > 0 ? { transitionDelay: `${Math.min(delayMs, 160)}ms` } : undefined}
    >
      {children}
    </div>
  );
};
