'use client';

import { type KeyboardEvent, useState } from 'react';

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
    title: 'Lead Engineer',
    range: 'May 2018 — Present',
    bullets: [
      'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more.',
      'Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements.',
      'Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders.',
      'Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.',
    ],
  },
  {
    company: 'Apple',
    title: 'UI Engineer',
    range: 'July 2017 — May 2018',
    bullets: [
      'Built and shipped performant interface prototypes for internal web platforms and product storytelling workflows.',
      'Partnered with designers and engineers to translate high-fidelity visual systems into accessible, responsive experiences.',
      'Maintained front-end component patterns and documented implementation details for cross-functional teams.',
    ],
  },
  {
    company: 'Scout Studio',
    title: 'Studio Developer',
    range: 'January 2016 — June 2017',
    bullets: [
      'Developed brand-focused websites, campaigns, and interactive prototypes for early-stage clients.',
      'Collaborated with strategy and design teams to scope technical work and preserve visual detail through launch.',
      'Improved reusable build tooling and front-end patterns used across multiple studio projects.',
    ],
  },
  {
    company: 'Starry',
    title: 'Software Engineer Co-op',
    range: 'July 2015 — December 2015',
    bullets: [
      'Supported production web interfaces for customer onboarding, coverage discovery, and internal operations.',
      'Implemented responsive UI features and collaborated with QA to resolve browser-specific defects.',
      'Contributed to shared documentation for component usage and release workflows.',
    ],
  },
  {
    company: 'MullenLowe',
    title: 'Creative Technologist Co-op',
    range: 'January 2015 — June 2015',
    bullets: [
      'Prototyped interactive marketing concepts using modern front-end tooling and motion techniques.',
      'Worked closely with art directors to refine visual details, animations, and responsive layouts.',
      'Prepared polished demos and technical handoff notes for campaign stakeholders.',
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
  const [activeJob, setActiveJob] = useState(0);
  const selectedJob = jobs[activeJob];

  const handleJobKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft'].includes(event.key)) {
      return;
    }

    event.preventDefault();
    const direction = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1;
    const nextIndex = (index + direction + jobs.length) % jobs.length;
    setActiveJob(nextIndex);
    document.getElementById(`job-tab-${nextIndex}`)?.focus();
  };

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

        <section id="experience" className="experience">
          <h2 className="numbered-heading">Where I&apos;ve Worked</h2>
          <div className="jobs-tabs">
            <div className="jobs-tablist" role="tablist" aria-label="Work history">
              {jobs.map((job, index) => (
                <button
                  className={index === activeJob ? 'job-tab active' : 'job-tab'}
                  id={`job-tab-${index}`}
                  key={job.company}
                  role="tab"
                  type="button"
                  aria-selected={index === activeJob}
                  aria-controls={`job-panel-${index}`}
                  tabIndex={index === activeJob ? 0 : -1}
                  onClick={() => setActiveJob(index)}
                  onKeyDown={event => handleJobKeyDown(event, index)}
                >
                  {job.company}
                </button>
              ))}
            </div>

            <article
              className="job-panel"
              id={`job-panel-${activeJob}`}
              role="tabpanel"
              aria-labelledby={`job-tab-${activeJob}`}
            >
              <h3>
                {selectedJob.title} <span>@ {selectedJob.company}</span>
              </h3>
              <p className="job-range">{selectedJob.range}</p>
              <ul className="fancy-list">
                {selectedJob.bullets.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
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
