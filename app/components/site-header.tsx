'use client';

import { useEffect, useState } from 'react';
import { BrandLogo } from '@/app/components/brand-logo';
import { navLinks } from '@/app/data/site';

type SiteHeaderProps = {
  className?: string;
};

export function SiteHeader({ className }: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className={`site-header ${className ?? ''}`.trim()}>
      <a className="logo" href="#hero" aria-label="Home" onClick={() => setMobileOpen(false)}>
        <BrandLogo className="logo-image" priority />
      </a>

      <button
        type="button"
        className={`menu-toggle ${mobileOpen ? 'open' : ''}`}
        aria-expanded={mobileOpen}
        aria-controls="site-nav"
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMobileOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav id="site-nav" className={mobileOpen ? 'open' : ''}>
        <ol>
          {navLinks.map((item, i) => (
            <li key={item.label}>
              <a href={item.href} onClick={() => setMobileOpen(false)}>
                <span>0{i + 1}.</span> {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <a className="resume-btn" href="#" aria-label="Resume" onClick={() => setMobileOpen(false)}>
        Resume
      </a>
    </header>
  );
}
