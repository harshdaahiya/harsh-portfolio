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
    <div className="group flex flex-col gap-4 py-6">
      {/* Company Header */}
      <div
        className="flex justify-between items-center wrap-normal cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-4 items-center">
          <div className="mt-1">
            <Image
              src={experience.companyLogo}
              alt={experience.company}
              width={100}
              height={100}
              className="size-12 rounded-sm object-contain"
            />
          </div>
          <h3 className="text-2xl font-bold text-foreground tracking-tight">
            {experience.company}
          </h3>
          <button
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-full hover:bg-secondary text-muted-foreground"
            aria-label="Toggle details"
          >
            <ChevronDown
              className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>
        </div>

        <div className="flex items-center gap-4">
          {experience.overallDuration && (
            <div className="flex flex-col gap-2 text-right">
              <p className="text-muted-foreground text-sm font-medium shrink-0">
                {experience.overallDuration}
              </p>
              <p className="text-muted-foreground text-sm font-medium">
                {experience.location}
              </p>
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
          <div className="relative border-l-2 border-muted-foreground/30 ml-[23px] pl-8 mt-4 flex flex-col gap-8 pb-4">
            {experience.roles.map((role: Role, index: number) => (
              <div key={index} className="relative">
                {/* Timeline Dot  */}
                <div className="absolute -left-[40px] top-1.5 w-4 h-4 bg-muted-foreground/60 rounded-full ring-4 ring-background" />

                {/* Role Header */}
                <div className="flex justify-between items-start mb-2">
                  <div className="flex flex-col">
                    <h4 className="text-foreground font-semibold text-md">
                      {role.position}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {role.startDate} - {role.endDate} . {role.duration}
                    </p>
                  </div>
                </div>
                <h4 className="text-foreground font-semibold text-md">
                  Work I did
                </h4>
                {/* Role Description */}
                <div className="flex flex-col gap-2 mb-4">
                  {role.descritption.map((desc: string, i: number) => (
                    <p
                      key={i}
                      className="text-muted-foreground text-md font-medium -tracking-normal"
                    >
                      • {desc}
                    </p>
                  ))}
                </div>
                <h4 className="text-foreground font-semibold text-md">
                  Technology & Tools
                </h4>
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
