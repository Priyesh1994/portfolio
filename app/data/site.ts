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
    title: 'Textile Wholesale Management & Quotation Platform',
    description:"",
    image: '/project1.png',
    content: {
      'challenge': 'A textile wholesaler needed to eliminate manual, repetitive workflows caused by handling high volumes of product inquiries and custom quotations over WhatsApp.',
      'solution': 'Developed a lightweight, zero-cost-infrastructure web platform using React and Firebase that automates catalog sharing, role-based quotation generation, and print-ready PDF creation.',
      'impact': 'Streamlined daily operations, reduced dependency on the business owner, and accelerated the sales workflow while maintaining near-zero operational costs.',
    },
    tech: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
    links: {
      github: 'https://github.com',
      external: 'https://example.com',
    },
  },
];
