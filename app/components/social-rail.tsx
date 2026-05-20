import type { CSSProperties } from 'react';
import { socialLinks } from '@/app/data/site';

function getSocialHandle(href: string) {
  try {
    const url = new URL(href);
    const path = url.pathname.replace(/\/$/, '');
    const segment = path.split('/').filter(Boolean).at(-1);

    if (!segment) {
      return url.hostname.replace('www.', '');
    }

    return segment.startsWith('@') ? segment : `@${segment}`;
  } catch {
    return href;
  }
}

export function SocialRail() {
  return (
    <aside className="left-rail" aria-label="Social links">
      <ul>
        {socialLinks.map((link, index) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="social-login"
              style={{ '--stagger-order': index } as CSSProperties}
              aria-label={`${link.label} profile`}
            >
              {getSocialHandle(link.href)}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
