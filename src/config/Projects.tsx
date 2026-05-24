export interface project {
  projectName: string;
  label: string;
  liveLink: string;
  projectImage: string;
  projectDescription: string;
  projectDuration: string;
  projectResponsibility: string[];
  projectSkills: string[];
}

export const projects: project[] = [
  {
    projectName: 'Cravo E-Commerce Platform',
    label: 'Visit Live Site',
    liveLink: 'https://cravo.online',
    projectImage: '/projects/harshdaahiya_cravo.png',
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
  },
  {
    projectName: 'Retailix Platform',
    label: 'Visit Live Site',
    liveLink: 'https://retailix.online',
    projectImage: '/projects/harshdaahiya_retailix.png',
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
  },
  {
    projectName: 'Evolt Charging Platform',
    label: 'Visit Company Profile',
    liveLink: 'https://www.linkedin.com/company/evoltsoft',
    projectImage: '', // Empty to trigger gorgeous gradient placeholder
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
  },
];
