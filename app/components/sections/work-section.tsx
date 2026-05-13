import { projects } from '@/app/data/site';

export function WorkSection() {
  return (
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
  );
}
