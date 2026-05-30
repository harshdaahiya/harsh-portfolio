export interface ProjectContent {
  overview: string;
  challenge?: string;
  solution?: string;
  impact?: string;
}

export interface project {
  slug: string;
  projectName: string;
  label: string;
  liveLink: string;
  githubLink?: string;
  projectImage: string;
  screenshots?: string[];
  projectDescription: string;
  projectDuration: string;
  projectResponsibility: string[];
  projectSkills: string[];
  projectContent: ProjectContent;
  featured?: boolean;
}

export function getProjectBySlug(slug: string): project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const projects: project[] = [
  {
    slug: 'cravo-ecommerce',
    projectName: 'Cravo E-Commerce Platform',
    label: 'Visit Live Site',
    liveLink: 'https://cravo.online',
    githubLink: 'https://github.com/harshdaahiya/cravo',
    projectImage: '/projects/harshdaahiya_cravo.png',
    screenshots: [],
    projectDescription:
      'A high-performance modern e-commerce application with inventory management, live sales dashboards, secure checkout, and full order processing pipelines.',
    projectDuration: '12 Months',
    projectResponsibility: [
      'Developed modular and reusable components in Next.js for client and admin dashboards.',
      'Optimized inventory operations and checkout flows with secure payment gateway integrations.',
      'Integrated AWS cloud storage for fast media delivery and scalable databases.',
    ],
    projectSkills: [
      'TypeScript',
      'Next.js',
      'React',
      'Node.js',
      'PostgreSQL',
      'Tailwind CSS',
      'AWS',
    ],
    projectContent: {
      overview:
        'Cravo is a full-featured e-commerce platform built from the ground up, serving both customers and administrators through separate optimized dashboards. The platform handles everything from product discovery to payment processing and order fulfillment.',
      challenge:
        'The primary challenge was building a system that could handle real-time inventory synchronization across multiple storefronts while maintaining sub-second page loads and a seamless checkout experience.',
      solution:
        'Leveraged Next.js for server-side rendering and static generation, PostgreSQL with optimistic locking for inventory accuracy, and AWS S3 + CloudFront for media delivery. The admin dashboard features live sales analytics with WebSocket-driven updates.',
      impact:
        'Delivered a production-grade platform processing live transactions with 99.9% uptime, sub-200ms page loads, and a fully automated order pipeline from checkout to fulfillment.',
    },
    featured: true,
  },
  {
    slug: 'bloghive',
    projectName: 'BlogHive',
    label: 'Visit Live Site',
    liveLink: 'https://bloghive.believeharsh.in',
    githubLink: 'https://github.com/harshdaahiya/BlogHive',
    projectImage: '/projects/harshdaahiya_bloghive.png', // Triggers gradient fallback
    screenshots: [],
    projectDescription:
      'A sleek, distraction-free modern blogging application featuring a clean design, interactive personal dashboards, real-time notifications, and seamless article publishing.',
    projectDuration: '3 Months',
    projectResponsibility: [
      'Designed and engineered a distraction-free writing editor and clean, responsive UI layouts with TailwindCSS and React.',
      'Built robust backend service endpoints using Node.js and Express to manage blog lifecycle and secure MongoDB data access.',
      'Implemented key social interactive features such as personalized stats tracking, notifications, bookmarks, and blog likes.',
    ],
    projectSkills: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Tailwind CSS',
      'Framer Motion',
    ],
    projectContent: {
      overview:
        'BlogHive is an intuitive content sharing and writing hub featuring a stunning distraction-free editor, search, real-time notifications, and personalized stats dashboards for writers.',
      challenge:
        'Delivering a clean, lightweight, and engaging platform that manages rich text operations, smooth user interactions, and rapid search queries without bloating response latency.',
      solution:
        'Utilized React 18 and TailwindCSS to construct a responsive, aesthetic frontend coupled with Framer Motion for elegant micro-interactions. Integrated MongoDB for performant data lookup and Node/Express for scalable backend logic.',
      impact:
        'Created a fast, fully operational blogging platform with secure reader and writer portals, immediate notification alerts, and a streamlined reading and writing pipeline.',
    },
    featured: true,
  },
];
