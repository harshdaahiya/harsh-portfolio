'use client';

import { Experience, Role } from '@/config/Experience';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

import Skill from '../common/Skills';
import { Separator } from '../ui/separator';

export default function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <div
      className="group flex flex-col gap-2 sm:gap-4 py-2 sm:py-4
    "
    >
      {/* Company Header */}
      <div
        className="flex justify-between items-center gap-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-4 items-center">
          <div className="mt-1 shrink-0">
            <Image
              src={experience.companyLogo}
              alt={experience.company}
              width={100}
              height={100}
              className="size-10 md:size-12 rounded-sm object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                {experience.company}
              </h2>
              <button
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full hover:bg-secondary text-muted-foreground"
                aria-label="Toggle details"
              >
                <ChevronDown
                  className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
            </div>
            {experience.location && (
              <p className="text-muted-foreground text-md tracking-normal">
                {experience.location}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center shrink-0">
          {experience.timePeriod && (
            <div className="flex flex-col gap-1 text-right">
              <p className="text-muted-foreground text-md tracking-normal whitespace-nowrap">
                {experience.timePeriod}
              </p>
              {experience.overallDuration && (
                <p className="text-muted-foreground text-md tracking-normal whitespace-nowrap">
                  {experience.overallDuration}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      <Separator />

      {/* Collapsible Roles Timeline */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="relative border-l border-muted-foreground/30 ml-[23px] pl-6 mt-4 flex flex-col gap-8 pb-4">
            {experience.roles.map((role: Role, index: number) => (
              <div key={index} className="relative">
                {/* Role Header */}
                <div className="flex justify-between items-start mb-2">
                  <div className="flex flex-col">
                    <h3 className="text-foreground font-semibold text-md tracking-normal">
                      {role.position}
                    </h3>
                    <h3 className="text-muted-foreground text-md tracking-normal">
                      {role.startDate} - {role.endDate} . {role.duration}
                    </h3>
                  </div>
                </div>
                <h3 className="text-foreground font-semibold text-md tracking-normal">
                  Work I did
                </h3>
                {/* Role Description */}
                <div className="flex flex-col gap-2 mb-4">
                  {role.descritption.map((desc: string, i: number) => (
                    <p
                      key={i}
                      className="text-muted-foreground text-md tracking-normal"
                    >
                      • {desc}
                    </p>
                  ))}
                </div>
                <h3 className="text-foreground font-semibold text-md tracking-normal">
                  Technology & Tools
                </h3>
                {/* Role Technologies */}
                {role.technologies && role.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {role.technologies.map((tech, techIndex) => (
                      <Skill key={techIndex} name={tech.name} href={tech.href}>
                        {tech.icon}
                      </Skill>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
