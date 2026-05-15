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
  { label: 'GitHub', href: 'https://github.com/Priyesh1994' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/priyesh-doshi/' },
  { label: 'Instagram', href: 'https://instagram.com/priyeshdoshi94' },
  { label: 'Twitter', href: 'https://x.com/Priyesh_Doshi99' },
];

export const jobs = [
  {
    company: 'CitNow group',
    title: 'Software Engineer',
    range: 'March 2025 — Present',
    bullets: [
      'Worked on a large-scale legacy codebase with a strong emphasis on clean architecture and maintainable code standards.',
      'Actively participated in peer code reviews to improve readability, consistency, and long-term maintainability across the system.',
      'Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders.',
      'Designed and developed AWS Lambda functions to meet specific business and integration requirements, contributing to scalable and efficient backend workflows.',
    ],
    tech: ['AWS Lambda', 'FastAPI', 'Yii 1.x', 'Python', 'Next.js'],
  },
  {
    company: 'Tuvoc Technologies',
    title: 'Developer and Technical Lead',
    range: 'March 2021 — February 2024',
    bullets: [
      'Lead Digypet (team of 6-10 members), A complete social media end-to-end platform replicating certain FB functionalities like sharing posts, having friends, and live chat connecting pet service providers and parents in the US.',
      'Performed major performance and storage optimizations.',
      'Led mobile app development and successfully launched on Android and iOS stores.',
    ],
    tech: ['Laravel', 'Nuxt.js', 'Socket', 'Javascript', 'Flutter'],
  },
  {
    company: 'DRC Systems',
    title: 'Backend Developer',
    range: 'December 2023 — February 2024',
    bullets: [
      'Worked on a Dubai government project "EZMS — Government Onboarding System" for onboarding new companies.',
      'Built and maintained secure backend modules.',
      'Focused on data integrity, reliability, and process automation.',
    ],
    tech: ['PHP', 'Laravel', 'Yii', 'JavaScript'],
  },
  {
    company: 'ScrumWheel Technologies',
    title: 'Software Engineer',
    range: 'February 2017 — February 2021',
    bullets: [
      'Integrated complete e-commerce module and Commission Distribution module based upon Fibonacci algorithm to CBM Global application.',
      'Statalyse, developed using Laravel and PostgreSQL, keeping myFxbook portal in mind, a data-oriented system managing around 7-10M records from MT4 Infinox.',
      'Lead and Developed The CashbackMatrix, A centralization of three forex trading back office websites with single-sign-on functionality.',
    ],
    tech: ['PHP', 'Laravel', 'Yii', 'Magento'],
  },
  {
    company: 'Infosys',
    title: 'Intern and Tester',
    range: 'May 2015 — January 2017',
    bullets: [
      'Learned Mainframe development as part of the training',
      'Worked as a tester for Westpac Banking Corporation, Australia, performing manual and automated testing for various banking applications.',
      'Developed Automated testing tools for Westpac Banking Corporation, Australia, using Selenium WebDriver and Excel tools, improving testing efficiency and coverage.',
    ],
    tech: ['Mainframe', 'UnitTesting', 'Selenium WebDriver', 'Excel'],
  },
];

export const projects = [
  {
    title: 'Halcyon Theme',
    staticImages: [
      {
        title: 'Landing Screen',
        src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
        alt: 'Code editor on a laptop display',
        caption: 'Homepage and visual identity.',
      },
      {
        title: 'Theme Explorer',
        src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
        alt: 'Desktop monitor showing syntax highlighted code',
        caption: 'Palette and syntax previews.',
      },
      {
        title: 'Marketplace',
        src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
        alt: 'Workspace with laptop and coding setup',
        caption: 'Publishing and install flow.',
      },
    ],
    problem: [
      'Developers needed a focused dark theme with high readability during long coding sessions.',
      'Theme distribution was fragmented across multiple editor ecosystems.',
    ],
    solution: [
      'Designed a consistent color system tuned for contrast and low eye strain.',
      'Published and maintained packages for major editor marketplaces from one source setup.',
    ],
    keyFeatures: [
      'Unified tokenized color palette.',
      'Editor-specific variants for VS Code, Sublime Text, and iTerm2.',
      'Simple install and upgrade documentation.',
    ],
    techStack: ['VS Code API', 'Sublime Text', 'iTerm2', 'JSON', 'npm'],
    links: [
      { label: 'GitHub Repository', href: 'https://github.com' },
      { label: 'Live Demo', href: 'https://example.com' },
      { label: 'VS Marketplace', href: 'https://example.com' },
    ],
    finalOutcome: [
      'Delivered a polished theme package with consistent cross-editor experience.',
      'Reduced onboarding friction with clear docs and reliable releases.',
    ],
  },
  {
    title: 'Spotify Profile',
    staticImages: [
      {
        title: 'Dashboard',
        src: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=1200&q=80',
        alt: 'Headphones near a screen with music interface',
        caption: 'Personal listening overview.',
      },
      {
        title: 'Top Artists',
        src: 'https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&w=1200&q=80',
        alt: 'Music producer workstation with speakers and display',
        caption: 'Artist trends by time range.',
      },
    ],
    problem: [
      'Users lacked a simple way to visualize deeper listening behavior beyond the native app.',
      'Spotify OAuth and data modeling added implementation complexity.',
    ],
    solution: [
      'Built a personalized analytics dashboard using Spotify Web API endpoints.',
      'Implemented robust OAuth flow and caching for responsive data loading.',
    ],
    keyFeatures: [
      'Top tracks, artists, and playlist insights.',
      'Historical and short-term trend comparisons.',
      'Responsive interface for desktop and mobile.',
    ],
    techStack: ['React', 'Node.js', 'Express', 'Spotify Web API'],
    links: [
      { label: 'GitHub Repository', href: 'https://github.com' },
      { label: 'Live Demo', href: 'https://example.com' },
    ],
    finalOutcome: [
      'Improved user engagement with clear, personalized music insights.',
      'Created a reusable OAuth + analytics foundation for future music features.',
    ],
  },
  {
    title: 'Build a Spotify Connected App',
    staticImages: [
      {
        title: 'Guide Intro',
        src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
        alt: 'Product team discussing roadmap around a table',
        caption: 'Overview and setup checklist.',
      },
      {
        title: 'OAuth Flow',
        src: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80',
        alt: 'Developer working with software architecture diagrams',
        caption: 'Token lifecycle and auth sequence.',
      },
      {
        title: 'Deployment',
        src: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80',
        alt: 'Server rack lights and infrastructure hardware',
        caption: 'Production hardening and release steps.',
      },
    ],
    problem: [
      'Developers struggled to connect OAuth theory with practical Spotify API implementation.',
      'Most tutorials skipped deployment and production-readiness details.',
    ],
    solution: [
      'Wrote a structured, end-to-end implementation guide from authentication to deployment.',
      'Added real-world examples for callback handling, token refresh, and error scenarios.',
    ],
    keyFeatures: [
      'Stepwise OAuth walkthrough.',
      'Deployment playbook with environment strategies.',
      'Troubleshooting section for common integration issues.',
    ],
    techStack: ['Gatsby', 'MDX', 'Netlify', 'Spotify API'],
    links: [
      { label: 'GitHub Repository', href: 'https://github.com' },
      { label: 'Read Guide', href: 'https://example.com' },
    ],
    finalOutcome: [
      'Enabled faster onboarding for developers building Spotify-connected products.',
      'Reduced integration errors through actionable production guidance.',
    ],
  },
];
