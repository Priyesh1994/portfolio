import type { CSSProperties } from 'react';
import { socialLinks } from '@/app/data/site';

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case 'GitHub':
      return (
        <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.51 2.87 8.34 6.84 9.69.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.05 1.53 1.05.9 1.56 2.36 1.11 2.93.85.09-.67.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.29 9.29 0 0 1 12 6.7a9.23 9.23 0 0 1 2.51.35c1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.21 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.23 10.23 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" fill="currentColor" />
        </svg>
      );
    case 'LinkedIn':
      return (
        <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.03-1.85-3.03s-2.13 1.44-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45Z" fill="currentColor" />
        </svg>
      );
    case 'Instagram':
      return (
        <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm4.25 2.9a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6Zm0 1.8a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.38-2.2a1.23 1.23 0 1 1 0 2.46 1.23 1.23 0 0 1 0-2.46Z" fill="currentColor" />
        </svg>
      );
    default:
      return (
        <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M18.9 2h3.37l-7.36 8.41L23.57 22h-6.78l-5.31-6.95L5.4 22H2.02l7.87-8.99L.57 2h6.95l4.8 6.35L18.9 2Zm-1.18 18h1.87L6.49 3.9H4.48L17.72 20Z" fill="currentColor" />
        </svg>
      );
  }
}

export function SiteFooter() {
  return (
    <footer>
      <div className="mobile-footer" aria-label="Social and contact links">
        <ul>
          {socialLinks.map((link, index) => (
            <li key={link.label} style={{ '--stagger': index } as CSSProperties}>
              <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} title={link.label}>
                <SocialIcon name={link.label} />
                <span className="sr-only">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <a className="mobile-footer-email" href="mailto:priyeshdoshi61@gmail.com">
          priyeshdoshi61@gmail.com
        </a>
        <a className="mobile-footer-phone" href="tel:+919409423441">
          9409423441
        </a>
      </div>
      <p>Handcrafted by me. Visual inspiration via Brittany Chiang.</p>
    </footer>
  );
}
