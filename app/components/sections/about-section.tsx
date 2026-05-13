export function AboutSection() {
  return (
    <section id="about">
      <h2 className="numbered-heading">About Me</h2>
      <div className="about-grid">
        <div>
          <p>
            Hello! My name is Priyesh and I enjoy creating things that live on the internet. My
            interest in web development started back in 2012.
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
  );
}
