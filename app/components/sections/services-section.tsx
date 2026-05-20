import { serviceGroups } from '@/app/data/site';
export function ServicesSection() {
  return (
    <section id="services">
      <h2 className="numbered-heading">Services</h2>
      <div className="services-grid">
        {serviceGroups.map((group) => (
          <article key={group.title} className="service-card">
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <ul className="fancy-list" aria-label={`${group.title} services`}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
