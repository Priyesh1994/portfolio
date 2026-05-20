const serviceGroups = [
  {
    title: 'Business Workflow Systems',
    description:
      'Custom web applications designed to simplify daily business operations and internal workflows.',
    items: [
      'Quotation management systems',
      'Inventory & catalog dashboards',
      'Contractor/vendor management',
      'Role-based admin panels',
    ],
  },
  {
    title: 'WhatsApp & Automation Integrations',
    description:
      'Automate communication, enquiry handling, and repetitive business tasks with lightweight automation systems.',
    items: [
      'WhatsApp enquiry flows',
      'Product sharing systems',
      'Customer communication tools',
      'PDF & invoice automation',
    ],
  },
  {
    title: 'Rapid MVP Development',
    description:
      'Fast and cost-effective MVP development for startups using modern AI-assisted workflows.',
    items: [
      'SaaS MVPs',
      'Admin portals',
      'AI-powered features',
      'Cloud deployment',
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="services">
      <h2 className="numbered-heading">Services</h2>
      <p className="services-intro">I can help you with</p>
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
