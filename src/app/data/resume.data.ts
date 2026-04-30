/**
 * Single source of truth for portfolio content.
 * Update fields here and they propagate through every section.
 */

export const RESUME = {
  name: 'Harikrishnan PV',
  role: 'Software Engineer',
  tagline: 'Angular Developer crafting fast, accessible, beautifully-engineered web experiences.',
  location: 'Kakkanad, Ernakulam, India',
  yearsOfExperience: 4.8,
  photoUrl: 'profile.jpg',

  contact: {
    email: 'hariinfo1699@gmail.com',
    phone: '+91 79077 18872',
    linkedin: 'https://www.linkedin.com/in/harikrishnan-pv-in',
    location: 'Kakkanad, Ernakulam',
  },

  summary:
    'Qualified Angular developer with 4.8+ years of experience in front-end development and design. ' +
    'I blend strong analytical thinking with a sharp eye for design and usability — shipping seamless, ' +
    'performant user experiences for healthcare, fintech, and enterprise applications. Currently architecting ' +
    'Smart EMR, a next-generation Electronic Medical Records platform built from the ground up.',

  highlights: [
    { value: '4.8+', label: 'Years of experience' },
    { value: '20+',  label: 'Modules shipped'     },
    { value: '3',    label: 'Enterprise products' },
    { value: '∞',    label: 'Cups of coffee'      },
  ],

  skills: [
    { name: 'Angular',           level: 92, category: 'Framework' },
    { name: 'TypeScript',        level: 90, category: 'Language'  },
    { name: 'JavaScript',        level: 88, category: 'Language'  },
    { name: 'HTML5',             level: 95, category: 'Markup'    },
    { name: 'CSS / SCSS',        level: 90, category: 'Styling'   },
    { name: 'RxJS',              level: 80, category: 'Reactive'  },
    { name: 'Git / GitHub',      level: 85, category: 'Tooling'   },
    { name: 'Chrome DevTools',   level: 88, category: 'Tooling'   },
    { name: 'REST APIs',         level: 85, category: 'Integration' },
    { name: 'WebSockets',        level: 78, category: 'Integration' },
  ],

  technicalStrengths: [
    {
      icon: 'cube',
      title: 'Reusable Components',
      body: 'Build modular Angular components that cut feature delivery time and keep UIs consistent across products.',
    },
    {
      icon: 'plug',
      title: 'API Integration',
      body: 'Wire up REST and WebSocket APIs for real-time data flow — from POS payments to live clinical updates.',
    },
    {
      icon: 'wand',
      title: 'Custom Directives',
      body: 'Author directives that extend DOM behavior cleanly and keep templates declarative.',
    },
    {
      icon: 'spark',
      title: 'Performance & UX',
      body: 'Optimize change detection, bundle size, and rendering to keep complex enterprise UIs snappy.',
    },
    {
      icon: 'shield',
      title: 'Device Integration',
      body: 'Integrate cameras, fingerprint scanners, signature pads, and POS terminals into web workflows.',
    },
    {
      icon: 'layers',
      title: 'Architecture',
      body: 'Comfortable with MVC patterns, system analysis, and the full SDLC from design through maintenance.',
    },
  ],

  experience: [
    {
      company: 'Qdes Infotech',
      role: 'Software Engineer',
      location: 'Kakkanad, Ernakulam',
      period: 'Aug 2021 — Present',
      current: true,
      bullets: [
        'Designed and shipped intuitive interfaces for healthcare staff in a large-scale Hospital Management Information System (HMIS).',
        'Implemented real-time data updates enabling fast, accurate decisions in critical clinical scenarios.',
        'Integrated devices — cameras, fingerprint scanners, signature pads — and POS payment terminals over WebSockets.',
        'Built large modules including operation theater management, visa medical applications, and outpatient workflows.',
        'Optimized Angular code for responsiveness across devices; collaborated with backend teams on cohesive end-to-end solutions.',
      ],
    },
  ],

  projects: [
    {
      title: 'Smart EMR — Electronic Medical Records',
      tag: 'EMR · Healthcare · Architecting',
      featured: true,
      summary:
        'A next-generation Electronic Medical Records platform I initiated and am architecting for hospitals — ' +
        'reimagining how clinicians capture, retrieve, and act on patient records. Built clinician-first with ' +
        'speed, accessibility, and offline resilience baked into the foundation.',
      contributions: [
        'Initiated the project and led the architecture from a blank slate',
        'Designed a clinician-first UX optimized for fast record entry',
        'Built a modular Angular 21 standalone-components foundation',
        'Established the design system and reusable component library',
        'Defined offline-resilient data flow patterns for clinical use',
      ],
      stack: ['Angular 21', 'TypeScript', 'RxJS', 'Signals', 'SCSS', 'REST'],
      accent: 'pink',
    },
    {
      title: 'Hospital Management & Information System',
      tag: 'HMIS · Healthcare',
      featured: true,
      summary:
        'An integrated, web-enabled hospital platform running on-premises or in the cloud — automating Clinical, Administrative, ' +
        'Finance, Supply Chain, and Billing workflows for end-to-end operations.',
      contributions: [
        'Designed intuitive UIs for clinicians and administrative staff',
        'Real-time data updates for critical decision-making',
        'Integrated cameras, fingerprint scanners, signature pads',
        'POS payment integration via secure WebSocket transport',
        'Shipped OT management, visa medical, and outpatient modules',
      ],
      stack: ['Angular', 'TypeScript', 'RxJS', 'WebSocket', 'SCSS', 'REST'],
      accent: 'cyan',
    },
    {
      title: 'ZATCA E-Invoice Middleware',
      tag: 'Govt · Compliance',
      featured: true,
      summary:
        'Front-end for a Saudi ZATCA middleware that digitalizes business invoicing — facilitating compliant E-invoice submission ' +
        'with full transparency between businesses and the tax authority.',
      contributions: [
        'Streamlined e-invoicing UX with a guided submission flow',
        'Integrated front-end with ZATCA electronic invoicing APIs',
        'Worked closely with backend on secure data exchange',
        'Built validation and status tracking for submissions',
      ],
      stack: ['Angular', 'TypeScript', 'REST', 'SCSS'],
      accent: 'violet',
    },
  ],

  education: [
    {
      institution: 'Talipparamba Arts and Science College',
      degree: 'B.Sc. Computer Science',
      period: '2017 — 2020',
      location: 'Talipparamba, Kannur',
    },
  ],

  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/harikrishnan-pv-in', icon: 'linkedin' },
    { label: 'Email',    href: 'mailto:hariinfo1699@gmail.com',                  icon: 'mail'     },
    { label: 'Phone',    href: 'tel:+917907718872',                              icon: 'phone'    },
  ],
} as const;

export type Resume = typeof RESUME;
