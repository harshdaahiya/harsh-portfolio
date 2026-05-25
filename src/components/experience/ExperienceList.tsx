import { Experience } from '@/config/Experience';
import react from 'react';

import ExperienceCard from './ExperienceCard';

type ExperienceListProps = {
  experiences: Experience[];
};

export default function ExperienceList({ experiences }: ExperienceListProps) {
  return (
    <div className="flex flex-col gap-2 sm:gap-4">
      {experiences.map((exp, index) => (
        <ExperienceCard key={exp.company} experience={exp} index={index} />
      ))}
    </div>
  );
}
