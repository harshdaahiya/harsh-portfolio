import React from 'react';

interface SkillProps {
  name: string;
  href: string;
  children: React.ReactNode;
}

export default function Skill({ name, children }: SkillProps) {
  return (
    <div className="inline-flex items-center self-end rounded-md border border-muted hover:border-muted-foreground px-2 py-1 text-xs sm:text-sm ">
      <div className="size-3 sm:size-4 shrink-0">{children}</div>
      <p className="ml-1 text-xs sm:text-sm font-semibold">{name}</p>
    </div>
  );
}
