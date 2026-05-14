export const logo = {
  src: '/priyesh_logo.svg',
  alt: 'Priyesh Doshi Logo',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Twitter', href: 'https://x.com' },
];

export const jobs = [
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

export const projects = [
  {
    title: 'Halcyon Theme',
    description:
      'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.',
    preview: {
      title: 'Halcyon',
      description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, and more.',
    },
    marketplaces: [
      { label: 'Visual Studio Marketplace', href: 'https://example.com' },
      { label: 'Package Control', href: 'https://example.com' },
      { label: 'Atom Package Manager', href: 'https://example.com' },
      { label: 'npm', href: 'https://example.com' },
    ],
    tech: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
    links: {
      github: 'https://github.com',
      external: 'https://example.com',
    },
  },
  {
    title: 'Spotify Profile',
    description:
      'A web app for visualizing personalized Spotify data with account insights and track analytics.',
    preview: {
      title: 'Spotify Profile',
      description: 'Personalized top tracks, artists, playlists, and listening insights.',
    },
    marketplaces: [],
    tech: ['React', 'Express', 'Spotify API', 'Node.js'],
    links: {
      github: 'https://github.com',
      external: 'https://example.com',
    },
  },
  {
    title: 'Build a Spotify Connected App',
    description:
      'A deep-dive guide into the Spotify Web API covering OAuth and deployment best practices.',
    preview: {
      title: 'Spotify Guide',
      description: 'A practical guide to OAuth, Spotify data, deployment, and production workflows.',
    },
    marketplaces: [],
    tech: ['Gatsby', 'MDX', 'Netlify', 'Spotify API'],
    links: {
      github: 'https://github.com',
      external: 'https://example.com',
    },
  },
];
