import { projects } from '@/app/data/site';

type Project = (typeof projects)[number];

type DetailListProps = {
  title: string;
  items: string[];
};

function DetailList({ title, items }: DetailListProps) {
  return (
    <section className="project-detail-group" aria-label={title}>
      <h4>{title}</h4>
      <ul>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function ProjectImages({ project }: { project: Project }) {
  return (
    <section className="project-detail-group" aria-label={`${project.title} static images`}>
      <h4>Static Images</h4>
      <div className="project-static-images">
        {project.staticImages.map(image => (
          <figure key={image.title} className="project-image-card">
            <div className="project-image-placeholder" role="img" aria-label={image.alt}>
              <span>{image.title}</span>
            </div>
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function WorkSection() {
  return (
    <section id="work" className="work-section">
      <h2 className="numbered-heading">Work Case Studies</h2>
      <div className="work-case-studies">
        {projects.map(project => (
          <article key={project.title} className="work-case-card">
            <header className="work-case-header">
              <p className="project-kicker">Featured Work</p>
              <h3>{project.title}</h3>
            </header>

            <ProjectImages project={project} />
            <DetailList title="Problem" items={project.problem} />
            <DetailList title="Solution" items={project.solution} />
            <DetailList title="Key Features" items={project.keyFeatures} />

            <section className="project-detail-group" aria-label="Tech stack">
              <h4>Tech Stack</h4>
              <ul className="project-tech-list">
                {project.techStack.map(tech => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </section>

            <section className="project-detail-group" aria-label="Project links">
              <h4>Links</h4>
              <ul className="project-links-list">
                {project.links.map(link => (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <DetailList title="Final Outcome" items={project.finalOutcome} />
          </article>
        ))}
      </div>
    </section>
  );
}
