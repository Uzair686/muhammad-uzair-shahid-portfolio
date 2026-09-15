import { ProjectCaseStudy, ExperienceItem, ServiceItem, SkillCategory } from '../types';

export const CASE_STUDIES: Record<string, ProjectCaseStudy> = {
  careerpilot: {
    id: 'careerpilot',
    category: 'AI & CAREER INTELLIGENCE PLATFORM',
    title: 'CareerPilot AI',
    tagline: 'Bridging the gap between candidate qualifications and enterprise hiring expectations.',
    problem: 'Job applicants often struggle to decipher why their resumes fail to pass automated applicant tracking systems (ATS) and lack transparent feedback on which critical technical competencies are missing for target roles.',
    solution: 'Engineered a Python and Flask driven analytical pipeline that parses candidate resumes, extracts structural experience vectors, cross-references target industry skill sets, and generates quantifiable recommendations with an interactive AI career chatbot assistant.',
    features: [
      'Natural Language Resume parsing with custom keyword extractors.',
      'Dynamic algorithmic gap detection showing exact missing technologies.',
      'Context-aware interactive career advisor chatbot powered by tuned prompts.',
      'Simulated interview practice module testing domain knowledge.',
      'Automated PDF generation of career diagnostics and skill reports.'
    ],
    stack: ['Python', 'Flask', 'AI Prompting', 'JavaScript', 'REST APIs', 'Semantic Parsing'],
    githubUrl: 'https://github.com/Uzair686/careerpilot-ai'
  },
  devtools: {
    id: 'devtools',
    category: 'DEVELOPER PRODUCTIVITY & SAAS UTILITIES',
    title: 'Dev Tools Hub',
    tagline: 'A fast, client-side toolkit eliminating repetitive developer boilerplate tasks.',
    problem: 'Developers and students frequently switch between ad-heavy, slow, and insecure online conversion sites for common day-to-day utilities like JSON validation, regex testing, and quick code analysis.',
    solution: 'Built an integrated, ad-free suite of zero-friction technical utilities deployed on modern serverless edge architecture. Includes quick string manipulation, regex verification, and AI-driven code summarization.',
    features: [
      'Zero-latency JSON formatter and structural tree validator.',
      'High-entropy secure password generator with customizable constraints.',
      'Interactive Regex evaluator providing instantaneous visual feedback.',
      'Integrated AI code explainer clarifying complex syntax blocks.',
      'Automated resume builder for students creating instant clean profiles.'
    ],
    stack: ['JavaScript (ES6+)', 'HTML5 / CSS3', 'Web APIs', 'AI Models', 'Vercel Edge'],
    liveUrl: 'https://dev-tools-hub-frontend.vercel.app/'
  },
  encryption: {
    id: 'encryption',
    category: 'CRYPTOGRAPHY & CLIENT-SIDE SECURITY',
    title: 'Encryption App',
    tagline: 'Accessible cryptographic transformation and secure local cipher execution.',
    problem: 'Visualizing and understanding how text is converted through mathematical transformations is often obscured behind complex terminal utilities with high barriers to entry.',
    solution: 'Created an intuitive, browser-based encryption application enabling real-time encryption and decryption of raw text strings using robust client-side algorithms without transmitting sensitive data across external servers.',
    features: [
      'Real-time bidirectional cipher translation with zero external latency.',
      'Pure client-side execution guaranteeing complete data privacy.',
      'Responsive and accessible dark UI built without bloated third-party libraries.',
      'Custom character set mapping and key-shift telemetry.'
    ],
    stack: ['JavaScript', 'Modern DOM APIs', 'Cryptographic Algorithms', 'CSS Architecture'],
    githubUrl: 'https://github.com/Uzair686/encryption-app'
  }
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'globulars',
    role: 'Angular Developer',
    company: 'Globulars Software Company',
    period: '2023 – 2026',
    location: 'MIAN CHANNU, PK',
    isCurrent: true,
    description: 'Leading frontend interface architecture with a focus on maintainable, reusable Angular components. Spearheading seamless integration with core REST APIs, implementing state routines, and optimizing rendering speeds across high-frequency client web systems.',
    achievements: [
      'Crafted reactive component hierarchies ensuring modular codebase reusability.',
      'Orchestrated robust asynchronous API workflows with RxJS and TypeScript.',
      'Enforced clean code practices, responsive UI benchmarks, and cross-browser resilience.'
    ],
    skills: ['Angular 17/18', 'TypeScript', 'RxJS', 'RESTful APIs', 'State Management']
  },
  {
    id: 'superior',
    role: 'Web Developer',
    company: 'Superior',
    period: '2023 – 2024',
    location: 'MIAN CHANNU, PK',
    isCurrent: false,
    description: 'Constructed responsive web layouts and dynamic interfaces. Focused on front-of-the-glass performance tuning, structural semantic markup, cross-device responsiveness, and streamlined interaction ergonomics.',
    achievements: [
      'Delivered pixel-accurate responsive web pages with clean semantic HTML5 and modern CSS.',
      'Optimized frontend assets, decreasing page load delays and enhancing mobile accessibility.',
      'Collaborated with design stakeholders to execute intuitive user-centric client interfaces.'
    ],
    skills: ['JavaScript', 'HTML5 / CSS3', 'Responsive Layouts', 'Bootstrap']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'FRONTEND ENGINEERING',
    icon: 'Code',
    color: '#00f2fe',
    skills: [
      'Angular (17/18)',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5 • CSS3',
      'React.js',
      'Bootstrap / Tailwind',
      'Responsive Layouts'
    ]
  },
  {
    title: 'BACKEND & APIS',
    icon: 'Server',
    color: '#4edea3',
    skills: [
      'Node.js',
      'Python',
      'Flask',
      'PHP',
      'RESTful APIs',
      'Async / RxJS'
    ]
  },
  {
    title: 'DATA PERSISTENCE',
    icon: 'Database',
    color: '#7bd0ff',
    skills: [
      'MongoDB',
      'MySQL',
      'Relational SQL',
      'Schema Normalization'
    ]
  },
  {
    title: 'CLOUD & VERSIONING',
    icon: 'Cloud',
    color: '#6ff6ff',
    skills: [
      'Microsoft Azure (AZ-900)',
      'Git Version Control',
      'GitHub Pipelines',
      'Vercel Deployments'
    ]
  },
  {
    title: 'AI & PRODUCTIVITY',
    icon: 'Bot',
    color: '#4edea3',
    skills: [
      'AI-Powered Web Apps',
      'LLM Prompt Engineering',
      'AI-Assisted Workflows',
      'Modern AI Tooling'
    ]
  },
  {
    title: 'CORE ARCHITECTURE',
    icon: 'Layers',
    color: '#00f2fe',
    skills: [
      'Object-Oriented Design (OOP)',
      'Component Hierarchies',
      'API Contract Specs',
      'Clean Frontend Architecture'
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'frontend',
    title: 'Frontend Web Development',
    description: 'Responsive, modern, and high-performance frontend interfaces built with Angular, React, and modern CSS frameworks that keep users engaged and convert visitors.',
    tags: 'ANGULAR • REACT • RESPONSIVE',
    domainKey: 'angular',
    iconName: 'web'
  },
  {
    id: 'angular-dev',
    title: 'Angular Application Dev',
    description: 'Scalable single-page applications with clean architecture, reactive components, strict typing, and structured state management designed for enterprise longevity.',
    tags: 'ENTERPRISE SPA • RXJS • SIGNALS',
    domainKey: 'angular',
    iconName: 'integration'
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Web Development',
    description: 'End-to-end development bridging interactive user interfaces with reliable backends, secure APIs, and relational or document database structures.',
    tags: 'FRONTEND + BACKEND + DATABASE',
    domainKey: 'fullstack',
    iconName: 'layers'
  },
  {
    id: 'ai-apps',
    title: 'AI-Powered Applications',
    description: 'Smart web applications integrated with AI capabilities, intelligent workflow automations, automated tools, and smart assistant chatbots.',
    tags: 'PYTHON • FLASK • LLM INTEGRATION',
    domainKey: 'ai',
    iconName: 'auto_awesome'
  },
  {
    id: 'website-dev',
    title: 'Professional Website Dev',
    description: 'Clean, professional business websites, portfolio showcases, and landing pages built to present products clearly and elevate market presence.',
    tags: 'HIGH-CONVERTING • ULTRA FAST',
    domainKey: 'website',
    iconName: 'devices'
  },
  {
    id: 'api-database',
    title: 'API & Database Integration',
    description: 'Connecting modern web applications with REST APIs, cloud databases, authentication routines, and third-party commercial services safely and swiftly.',
    tags: 'REST • SQL • MONGODB • AZURE',
    domainKey: 'api',
    iconName: 'sync_alt'
  }
];

export const PIPELINE_STEPS = [
  {
    step: '01',
    title: 'CLIENT UI',
    detail: 'Angular 18 • Signals',
    desc: 'Modular reactive views, state management, and ergonomic component templates.'
  },
  {
    step: '02',
    title: 'CONTRACT',
    detail: 'TypeScript • RxJS',
    desc: 'Strong typing interfaces, observable data-flows, and async payload handling.'
  },
  {
    step: '03',
    title: 'TRANSPORT',
    detail: 'RESTful API Endpoints',
    desc: 'Structured JSON payloads, rate limiting, and CORS compliance.'
  },
  {
    step: '04',
    title: 'SERVICES',
    detail: 'Flask / Node • DB',
    desc: 'Business logic layers, token validation, and transactional data persistence.'
  },
  {
    step: '05',
    title: 'CLOUD & AI',
    detail: 'Azure • LLM Inference',
    desc: 'Cloud deployment, managed Azure services, and fine-tuned prompt pipelines.'
  }
];

export const GROWTH_STEPS = [
  {
    num: '01',
    title: 'Fundamental Learning & Computer Science',
    badge: 'BSIT 7th Semester • Superior College',
    badgeColor: 'text-[#b9cacb]',
    description: 'Building deep academic rigor across Object-Oriented Programming, Data Structures, Relational Database Management Systems, and Network Protocols.'
  },
  {
    num: '02',
    title: 'Autonomous Utility Engineering',
    badge: 'Dev Tools Hub Launched',
    badgeColor: 'text-[#4edea3]',
    description: 'Engineered practical utilities (JSON validators, regex analyzers, AI writing tools) to solve actual productivity bottlenecks for fellow developers and students.'
  },
  {
    num: '03',
    title: 'Commercial Enterprise Frontend Architecture',
    badge: 'Globulars Software Company',
    badgeColor: 'text-[#00dce6]',
    description: 'Serving as Angular Developer: authoring modular, reactive design systems, integrating high-throughput REST APIs, and maintaining production-grade web interfaces.'
  },
  {
    num: '04',
    title: 'AI Product Architecture & Intelligence',
    badge: 'CareerPilot AI',
    badgeColor: 'text-[#00f2fe]',
    description: 'Architected a full-stack career intelligence engine utilizing Python, Flask, resume parsing algorithms, and dynamic competency gap analysis.'
  },
  {
    num: '05',
    title: 'Digital Solutions & Entrepreneurship',
    badge: 'Active Venture',
    badgeColor: 'text-[#4edea3]',
    description: 'Building bespoke digital products and consulting for global clients across Fiverr and remote partnerships with an emphasis on commercial viability and high performance.'
  }
];
