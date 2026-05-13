import { navLinks } from '@/app/data/site';

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="logo" href="#hero" aria-label="Home">
        P
      </a>
      <nav>
        <ol>
          {navLinks.map((item, i) => (
            <li key={item.label}>
              <a href={item.href}>
                <span>0{i + 1}.</span> {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <a className="resume-btn" href="#" aria-label="Resume">
        Resume
      </a>
    </header>
  );
}
