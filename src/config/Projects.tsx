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
    slug: 'retailix-platform',
    projectName: 'Retailix Platform',
    label: 'Visit Live Site',
    liveLink: 'https://retailix.online',
    projectImage: '/projects/harshdaahiya_retailix.png',
    screenshots: [],
    projectDescription:
      'A luxurious multi-tenant enterprise retailing system featuring comprehensive sales analytics, client order tracing, and seamless cloud deployments.',
    projectDuration: '6 Months',
    projectResponsibility: [
      'Built interactive reporting widgets with premium custom graphs and dynamic charts.',
      'Engineered multi-tenant database routing schemas ensuring complete data isolation.',
      'Spearheaded cloud migration strategies resulting in a 40% reduction in infrastructure overhead.',
    ],
    projectSkills: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Redux',
      'Docker',
      'AWS',
      'GraphQL',
    ],
    projectContent: {
      overview:
        'Retailix is a multi-tenant enterprise SaaS platform designed for retail businesses to manage sales, track orders, and analyze business performance through rich interactive dashboards.',
      challenge:
        "Building a truly isolated multi-tenant architecture where each client's data remains completely separated while sharing the same infrastructure and codebase was the core engineering challenge.",
      solution:
        'Implemented dynamic database routing with tenant-aware connection pooling, built a custom GraphQL API layer for flexible data querying, and created a modular widget system for the analytics dashboard that supports real-time data updates.',
      impact:
        'Successfully onboarded multiple enterprise clients with zero data leakage incidents. The cloud migration reduced infrastructure costs by 40% while improving response times by 3x.',
    },
    featured: true,
  },
  {
    slug: 'evolt-charging',
    projectName: 'Evolt Charging Platform',
    label: 'Visit Company Profile',
    liveLink: 'https://www.linkedin.com/company/evoltsoft',
    projectImage: '', // Triggers gradient fallback
    screenshots: [],
    projectDescription:
      'An electric vehicle charging station management system dashboard showing real-time socket telemetry, power loads, and map pins with station statuses.',
    projectDuration: '5 Months',
    projectResponsibility: [
      'Built real-time telemetry dashboard using WebSockets and high-performance canvas-based widgets.',
      'Integrated interactive maps displaying live station occupation statuses and power capacity indicators.',
      'Implemented OCPP and OCPI protocol handling for seamless chargers communication.',
    ],
    projectSkills: [
      'Node.js',
      'TypeScript',
      'Express',
      'Firebase',
      'WebSockets',
      'GCP',
      'OCPP/OCPI',
    ],
    projectContent: {
      overview:
        'A comprehensive EV charging infrastructure management platform that provides real-time monitoring of charging stations, socket-level telemetry, and power grid analytics through an intuitive dashboard.',
      challenge:
        'Handling real-time bidirectional communication with hundreds of charging stations simultaneously, each reporting telemetry data at sub-second intervals, while maintaining a responsive dashboard UI.',
      solution:
        'Built a WebSocket-based real-time pipeline with OCPP/OCPI protocol handlers for charger communication. The dashboard uses canvas-based rendering for high-frequency data visualization and interactive maps for geographic station monitoring.',
      impact:
        'Enabled live monitoring of charging infrastructure with real-time station status updates, power load balancing, and predictive maintenance alerts across the entire network.',
    },
    featured: false,
  },
  {
    slug: 'syncspace-workspace',
    projectName: 'SyncSpace Collaborative Platform',
    label: 'Visit Live Site',
    liveLink: 'https://github.com/believeharsh', // Fallback to github profile since it's a personal project
    projectImage: '', // Triggers gradient fallback
    screenshots: [],
    projectDescription:
      'An AI-powered real-time collaborative workspace featuring canvas whiteboards, multi-user document editors, and low-latency audio calling channels.',
    projectDuration: '4 Months',
    projectResponsibility: [
      'Designed a dynamic canvas whiteboard using HTML5 Canvas API with support for shape manipulation and drawings.',
      'Integrated real-time operational transformation (OT) synchronization utilizing WebSockets.',
      'Configured WebRTC mesh connections to enable voice calls without centralized media servers.',
    ],
    projectSkills: [
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Node.js',
      'WebSockets',
      'WebRTC',
    ],
    projectContent: {
      overview:
        'SyncSpace is a multi-user collaborative environment uniting layout sketching, writing, and direct calling into a unified interface.',
      challenge:
        'Building dynamic canvas rendering that scales to support dozens of concurrent drawing cursors globally without triggering browser layout thrashing.',
      solution:
        'Created an optimized canvas rendering cycle using requestAnimationFrame, coupled with delta operational transformations via WebSockets. Mesh WebRTC channels provide low-overhead direct communication.',
      impact:
        'Engineered an ultra-low latency collaboration workspace capable of running complex whiteboards with sub-50ms visual sync globally.',
    },
    featured: false,
  },
];
