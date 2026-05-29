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

  const featuredProjects = projects.filter((p) => p.featured === true);
  const otherProjects = projects.filter((p) => p.featured !== true);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-16"
    >
      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
              Featured Work
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {featuredProjects.map((proj) => (
              <motion.div
                key={proj.projectName}
                variants={itemVariants}
                className="w-full"
              >
                <ProjectCard project={proj} layout="vertical" />
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Other Projects Section */}
      {otherProjects.length > 0 && (
        <div className="space-y-8 pt-4">
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-start">
              <span className="bg-background pr-3 text-xl font-bold tracking-tight text-foreground md:text-2xl">
                Other Engineering Work
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {otherProjects.map((proj) => (
              <motion.div
                key={proj.projectName}
                variants={itemVariants}
                className="w-full"
              >
                <ProjectCard project={proj} layout="horizontal" />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
