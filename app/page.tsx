const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Twitter', href: 'https://x.com' },
];

const jobs = [
  {
    company: 'Upstatement',
    title: 'Senior Frontend Engineer',
    range: '2018 — Present',
    bullets: [
      'Build accessible, inclusive products and digital experiences for a variety of clients.',
      'Work with modern JavaScript frameworks and design systems to deliver production-ready experiences.',
      'Collaborate with multidisciplinary teams and mentor junior developers.',
    ],
  },
];

const projects = [
  {
    title: 'Halcyon Theme',
    description:
      'A minimal dark blue theme for VS Code, Sublime Text, and more editor ecosystems.',
    tech: ['VS Code', 'Sublime Text', 'Theme'],
  },
  {
    title: 'Spotify Profile',
    description:
      'A web app for visualizing personalized Spotify data with account insights and track analytics.',
    tech: ['React', 'Express', 'Spotify API'],
  },
  {
    title: 'Build a Spotify Connected App',
    description:
      'A deep-dive guide into the Spotify Web API covering OAuth and deployment best practices.',
    tech: ['Gatsby', 'MDX', 'Netlify'],
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="logo" href="#hero" aria-label="Home">
          B
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

      <aside className="right-rail" aria-label="Email">
        <a href="mailto:hello@example.com">hello@example.com</a>
      </aside>

      <main>
        <section id="hero" className="hero">
          <p className="overline">Hi, my name is</p>
          <h1>John Doe.</h1>
          <h2>I build things for the web.</h2>
          <p className="intro">
            I&apos;m a software engineer focused on building exceptional digital experiences.
            Currently, I&apos;m focused on crafting accessible and polished interfaces.
          </p>
          <a href="#work" className="cta-btn">
            Check out my work!
          </a>
        </section>

        <section id="about">
          <h2 className="numbered-heading">About Me</h2>
          <div className="about-grid">
            <div>
              <p>
                Hello! My name is John and I enjoy creating things that live on the internet.
                My interest in web development started back in 2012.
              </p>
              <p>
                Fast-forward to today, and I&apos;ve had the privilege of working at startups,
                agencies, and product companies.
              </p>
              <p>Here are a few technologies I&apos;ve been working with recently:</p>
              <ul className="tech-list">
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Tailwind</li>
              </ul>
            </div>
            <div className="avatar-wrap">
              <div className="avatar" />
            </div>
          </div>
        </section>

        <section id="experience">
          <h2 className="numbered-heading">Where I&apos;ve Worked</h2>
          <article className="job-card">
            <h3>
              {jobs[0].title} <span>@ {jobs[0].company}</span>
            </h3>
            <p className="job-range">{jobs[0].range}</p>
            <ul className="fancy-list">
              {jobs[0].bullets.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section id="work">
          <h2 className="numbered-heading">Some Things I&apos;ve Built</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <article key={project.title} className="project-card">
                <p className="project-kicker">Featured Project</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                  {project.tech.map(tech => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <p className="overline">04. What&apos;s Next?</p>
          <h2>Get In Touch</h2>
          <p>
            I&apos;m currently open to new opportunities. My inbox is always open, whether you have
            a question or just want to say hi.
          </p>
          <a className="cta-btn" href="mailto:hello@example.com">
            Say Hello
          </a>
        </section>
      </main>

      <footer>Designed & Built with inspiration from Brittany Chiang</footer>
    </>
  );
}
