import { projects } from '@/app/data/site';
import Image from 'next/image';

type Project = (typeof projects)[number];

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0 1 12 7c.85 0 1.7.11 2.5.34 1.9-1.3 2.74-1.03 2.74-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
      />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 3h7v7m0-7-9 9m-2-7H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"
      />
    </svg>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  if (!project.image) {
    return null;
  }

  return (
    <Image
      className="project-preview"
      src={project.image}
      alt={`${project.title} preview image`}
      width={1200}
      height={750}
    />
  );
}

function ProjectDescription({ project }: { project: Project }) {
  return (
    <p className="project-description">
      {project.description}
      {project.marketplaces.length > 0 && (
        <>
          {' '}
          Available on{' '}
          {project.marketplaces.map((marketplace, index) => (
            <span key={marketplace.label}>
              <a href={marketplace.href} target="_blank" rel="noreferrer">
                {marketplace.label}
              </a>
              {index < project.marketplaces.length - 2
                ? ', '
                : index === project.marketplaces.length - 2
                  ? ', and '
                  : '.'}
            </span>
          ))}
        </>
      )}
    </p>
  );
}

export function WorkSection() {
  return (
    <section id="work" className="work-section">
      <h2 className="numbered-heading">Some Things I&apos;ve Built</h2>
      <div className="featured-projects">
        {projects.map(project => (
          <article key={project.title} className="featured-project">
            <a
              className="featured-project-image"
              href={project.links.external}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} project preview`}
            >
              <ProjectPreview project={project} />
            </a>

            <div className="featured-project-content">
              <p className="project-kicker">Featured Project</p>
              <h3>{project.title}</h3>
              <ProjectDescription project={project} />
              <ul className="project-tech-list" aria-label={`${project.title} technologies`}>
                {project.tech.map(tech => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="project-links" aria-label={`${project.title} links`}>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                >
                  <GithubIcon />
                </a>
                <a
                  href={project.links.external}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} live project`}
                >
                  <ExternalIcon />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
