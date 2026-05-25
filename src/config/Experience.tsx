import ExpressJs from '@/components/svgs/technologies/ExpressJs';
import Firebase from '@/components/svgs/technologies/Firebase';
import GCP from '@/components/svgs/technologies/GCP';
import MongoDB from '@/components/svgs/technologies/MongoDB';
import NodeJs from '@/components/svgs/technologies/NodeJs';
import Ocpi from '@/components/svgs/technologies/Ocpi';
import Ocpp from '@/components/svgs/technologies/Ocpp';
import Postman from '@/components/svgs/technologies/Postman';
import ReactIcon from '@/components/svgs/technologies/ReactIcon';
import TailwindCss from '@/components/svgs/technologies/TailwindCss';
import TypeScript from '@/components/svgs/technologies/TypeScript';
import React from 'react';

export interface Technologies {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Role {
  position: string;
  startDate: string;
  endDate: string;
  duration?: string;
  descritption: string[];
  technologies?: Technologies[];
}

export interface Experience {
  company: string;
  location: string;
  timePeriod: string;
  image?: string;
  companyLogo: string;
  overallDuration?: string;
  companyLinkedinPageUrl?: string;
  isWorking: boolean;
  roles: Role[];
}

export const experiences: Experience[] = [
  {
    company: 'Evoltsoft',
    location: 'Pune, India (Remote)',
    overallDuration: '5 mos',
    timePeriod: 'Jan 26 - Present',
    image: '',
    companyLogo: '/company/evoltsoft.png',
    companyLinkedinPageUrl: 'https://www.linkedin.com/company/evoltsoft',
    isWorking: true,
    roles: [
      {
        position: 'Full Stack Engineer Intern',
        startDate: 'Jan 2026',
        endDate: 'Present',
        descritption: [
          'Developing backend for EV Charging Station Management System (CSMS) using Firebase',
          'Implementing OCPP and OCPI protocols for seamless charger communication and interoperability',
          'Building scalable APIs and backend services for white-label EV solutions including portals and mobile apps',
          'Optimizing real-time data handling, session management, and charging workflows',
        ],
        technologies: [
          { name: 'Express', href: '', icon: <ExpressJs /> },
          { name: 'Node', href: '', icon: <NodeJs /> },
          { name: 'TypeScript', href: '', icon: <TypeScript /> },
          { name: 'Postman', href: '', icon: <Postman /> },
          { name: 'Firebase', href: '', icon: <Firebase /> },
          { name: 'GCP', href: '', icon: <GCP /> },
          { name: 'OCPP', href: '', icon: <Ocpp /> },
          { name: 'OCPI', href: '', icon: <Ocpi /> },
        ],
      },
    ],
  },
  {
    company: 'iTUX',
    location: 'Aurangabad, India (Remote)',
    timePeriod: 'Jun 25 - Dec 26',
    overallDuration: '7 mos',
    image: '',
    companyLogo: '/company/iTUX.png',
    companyLinkedinPageUrl: 'https://www.linkedin.com/company/itux',
    isWorking: false,
    roles: [
      {
        position: 'Full-stack Developer (Intern)',
        startDate: 'Oct 2025',
        endDate: 'Dec 2025',
        duration: '3 mos',
        descritption: [
          'Developed and maintained CRM features using the MERN stack (𝐌𝐨𝐧𝐠𝐨𝐃𝐁, 𝐄𝐱𝐩𝐫𝐞𝐬𝐬, 𝐑𝐞𝐚𝐜𝐭, 𝐍𝐨𝐝𝐞.𝐣𝐬), handling both frontend and backend tasks.',
          'Integrated 𝐑𝐚𝐳𝐨𝐫𝐩𝐚𝐲 payment gateway for secure and smooth transactions within the application.',
          'Optimized 𝐃𝐚𝐭𝐚 𝐅𝐞𝐭𝐜𝐡𝐢𝐧𝐠 and state management using 𝐑𝐓𝐊 𝐐𝐮𝐞𝐫𝐲, reducing unnecessary API calls and improving performance.',
        ],
        technologies: [
          { name: 'MongoDB', href: '', icon: <MongoDB /> },
          { name: 'Express', href: '', icon: <ExpressJs /> },
          { name: 'React', href: '', icon: <ReactIcon /> },
          { name: 'Node', href: '', icon: <NodeJs /> },
        ],
      },
      {
        position: 'Frontend Developer (Intern)',
        startDate: 'Jun 2025',
        endDate: 'Sep 2025',
        duration: '4 mos',
        descritption: [
          'Built responsive and user-friendly UI screens using 𝐑𝐞𝐚𝐜𝐭, 𝐓𝐲𝐩𝐞𝐒𝐜𝐫𝐢𝐩𝐭, 𝐚𝐧𝐝 𝐓𝐚𝐢𝐥𝐰𝐢𝐧𝐝 𝐂𝐒𝐒, following modern design practices.',
          'Developed a complete company landing page from scratch, ensuring clean layout, 𝐫𝐞𝐮𝐬𝐚𝐛𝐢𝐥𝐢𝐭𝐲, and 𝐦𝐨𝐛𝐢𝐥𝐞 𝐫𝐞𝐬𝐩𝐨𝐧𝐬𝐢𝐯𝐞𝐧𝐞𝐬𝐬.',
          'Worked closely with 𝐝𝐞𝐬𝐢𝐠𝐧𝐞𝐫𝐬 and backend developers to integrate 𝐀𝐏𝐈𝐬 and improve overall user experience.',
        ],
        technologies: [
          { name: 'React', href: '', icon: <ReactIcon /> },
          { name: 'TypeScript', href: '', icon: <TypeScript /> },
          { name: 'Tailwind', href: '', icon: <TailwindCss /> },
        ],
      },
    ],
  },
];
