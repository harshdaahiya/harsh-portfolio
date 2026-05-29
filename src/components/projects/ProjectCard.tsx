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
        whileHover={isHorizontal ? { x: 4 } : { y: -5 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`group relative flex h-full w-full overflow-hidden rounded-[20px] border border-border bg-card transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:border-muted-foreground/40 ${
          isHorizontal ? 'flex-col md:flex-row' : 'flex-col'
        }`}
      >
        <div
          className={`relative shrink-0 bg-muted/50 dark:bg-muted/30 ${
            isHorizontal ? 'p-3 md:w-[300px] lg:w-[340px]' : 'p-3 w-full'
          }`}
        >
          <div
            className={`relative overflow-hidden rounded-[14px] shadow-sm ${
              isHorizontal
                ? 'aspect-16/10 md:aspect-auto md:h-full'
                : 'aspect-2/1'
            }`}
          >
            {hasImage ? (
              <Image
                src={project.projectImage}
                alt={project.projectName}
                fill
                sizes={
                  isHorizontal
                    ? '(max-width: 768px) 100vw, 340px'
                    : '(max-width: 768px) 100vw, 480px'
                }
                className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                priority
              />
            ) : (
              <div className="absolute inset-0 bg-linear-to-br from-violet-600/90 via-indigo-600/90 to-blue-600/90 flex flex-col items-center justify-center text-white p-6">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[16px_16px]" />
                <span className="text-3xl font-black tracking-widest uppercase opacity-30 select-none">
                  {project.projectName.slice(0, 2)}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Details Section */}
        <div
          className={`flex flex-1 flex-col ${
            isHorizontal
              ? 'p-4 md:p-5 lg:p-6 justify-between'
              : 'px-4 pb-4 pt-3 md:px-5 md:pb-5 md:pt-3.5'
          }`}
        >
          {/* Top: Title + Arrow */}
          <div>
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-semibold tracking-[0.12em] text-muted-foreground/60 uppercase">
                  {project.projectDuration}
                </span>
                <h3 className="mt-0.5 text-[15px] font-bold leading-snug tracking-tight text-foreground md:text-[17px]">
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
                    className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-all duration-300 hover:scale-110 hover:shadow-md"
                  >
                    <LucideIcon
                      name="arrow-right"
                      className="h-3.5 w-3.5 -rotate-45"
                    />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{project.label}</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <p
              className={`text-muted-foreground mt-2 text-[12px] leading-relaxed md:text-[13px] ${
                isHorizontal ? 'line-clamp-2 md:line-clamp-3' : 'line-clamp-2'
              }`}
            >
              {project.projectDescription}
            </p>
          </div>

          {/* Bottom: Tech Stack Pills */}
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {project.projectSkills
              .slice(0, isHorizontal ? 6 : 4)
              .map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-muted/80 dark:bg-muted/50 px-2.5 py-1 text-[10px] font-medium text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            {project.projectSkills.length > (isHorizontal ? 6 : 4) && (
              <span className="rounded-full bg-muted/80 dark:bg-muted/50 px-2 py-1 text-[10px] font-medium text-muted-foreground">
                +{project.projectSkills.length - (isHorizontal ? 6 : 4)}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
