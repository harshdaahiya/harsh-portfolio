'use client';

import { project } from '@/config/Projects';
import { motion } from 'motion/react';
import React from 'react';

import ProjectCard from './ProjectCard';

interface ProjectListProps {
  projects: project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  // Staggered grid children animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  } as const;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((proj) => (
        <motion.div
          key={proj.projectName}
          variants={itemVariants}
          className="h-[380px] w-full md:h-[440px]"
        >
          <ProjectCard project={proj} />
        </motion.div>
      ))}
    </motion.div>
  );
}
