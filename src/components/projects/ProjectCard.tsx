'use client';

import { project } from '@/config/Projects';
import { motion } from 'motion/react';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import LucideIcon from '../lucide-icons/LucideIconMap';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface ProjectCardProps {
  project?: project;
  isViewAll?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  layout?: 'vertical' | 'horizontal';
}

export default function ProjectCard({
  project,
  isViewAll = false,
  onClick,
  layout = 'vertical',
}: ProjectCardProps) {
  if (isViewAll) {
    return (
      <Link href="/projects" onClick={onClick} className="block h-full w-full">
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[20px] border border-border bg-muted/20 p-8 text-center shadow-md transition-colors hover:border-muted-foreground"
        >
          {/* Decorative background glows */}
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-muted-foreground/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-muted-foreground/10 blur-3xl" />

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground/10 text-foreground transition-transform duration-300">
            <LucideIcon name="arrow-right" className="h-6 w-6 animate-pulse" />
          </div>

          <h3 className="mt-5 text-xl font-bold tracking-tight text-foreground md:text-2xl">
            View All Projects
          </h3>
          <p className="text-muted-foreground mt-2 max-w-[240px] text-xs md:text-sm">
            Explore my comprehensive portfolio of engineering accomplishments.
          </p>
        </motion.div>
      </Link>
    );
  }

  if (!project) return null;

  const hasImage = !!project.projectImage;
  const isHorizontal = layout === 'horizontal';

  return (
    <Link
      href={`/projects/${project.slug}`}
      onClick={onClick}
      className="block h-full w-full"
    >
      <motion.div
        whileHover={isHorizontal ? { x: 6 } : { y: -6 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className={`group flex h-full w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-md hover:border-muted-foreground ${
          isHorizontal ? 'flex-col md:flex-row' : 'flex-col'
        }`}
      >
        {/* Image Container */}
        <div
          className={`relative overflow-hidden bg-muted p-2 ${
            isHorizontal
              ? 'aspect-16/10 md:aspect-auto md:w-[320px] shrink-0 border-b md:border-b-0 md:border-r border-border'
              : 'aspect-16/10 w-full border-b border-border'
          }`}
        >
          {hasImage ? (
            <Image
              src={project.projectImage}
              alt={project.projectName}
              fill
              sizes={
                isHorizontal
                  ? '(max-width: 768px) 100vw, 320px'
                  : '(max-width: 768px) 100vw, 480px'
              }
              className="transition-transform duration-700 ease-out group-hover:scale-103 object-cover"
              priority
            />
          ) : (
            /* Premium Fallback CSS Gradient */
            <div className="absolute inset-0 bg-linear-to-br from-violet-600/90 via-indigo-600/90 to-blue-600/90 flex flex-col items-center justify-center text-white p-6">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[16px_16px]" />
              <span className="text-3xl font-black tracking-widest uppercase opacity-30 select-none">
                {project.projectName.slice(0, 2)}
              </span>
            </div>
          )}
        </div>

        {/* Bottom/Right Details Section */}
        <div className="flex flex-1 flex-col p-5 md:p-6 justify-between">
          <div>
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <span className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                  {project.projectDuration}
                </span>
                <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-foreground md:text-xl">
                  {project.projectName}
                </h3>
              </div>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(
                        project.liveLink,
                        '_blank',
                        'noopener,noreferrer',
                      );
                    }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all duration-300 hover:border-muted-foreground hover:bg-muted-foreground/10"
                  >
                    <LucideIcon name="arrow-right" className="h-4 w-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{project.label}</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <p className="text-muted-foreground mt-3 text-xs leading-relaxed md:text-sm line-clamp-2">
              {project.projectDescription}
            </p>
          </div>

          {/* Tech Stack Skills Container */}
          <div className="mt-4 pt-2">
            <div className="flex flex-wrap gap-1.5">
              {project.projectSkills.slice(0, 5).map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground transition-colors"
                >
                  {skill}
                </span>
              ))}
              {project.projectSkills.length > 5 && (
                <span className="rounded-full border border-border bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                  +{project.projectSkills.length - 5}
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
