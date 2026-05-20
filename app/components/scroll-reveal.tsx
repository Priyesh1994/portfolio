'use client';

import { type ReactNode, useEffect, useRef, useState } from 'react';

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
};

export function ScrollReveal({ children, className, delayMs = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const reveal = () => setIsVisible(true);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            reveal();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '-90px 0px -10% 0px' }
    );

    const revealFromHash = () => {
      const hash = window.location.hash;

      if (!hash) {
        return;
      }

      const target = document.querySelector(hash);

      if (target && node.contains(target)) {
        reveal();
        observer.unobserve(node);
      }
    };

    revealFromHash();
    window.addEventListener('hashchange', revealFromHash);
    observer.observe(node);

    return () => {
      window.removeEventListener('hashchange', revealFromHash);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className ?? ''} reveal-on-scroll ${isVisible ? 'is-visible' : ''}`.trim()}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
