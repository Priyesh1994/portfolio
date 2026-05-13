import { socialLinks } from '@/app/data/site';

export function SocialRail() {
  return (
    <aside className="left-rail" aria-label="Social links">
      <ul>
        {socialLinks.map(link => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.label[0]}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
