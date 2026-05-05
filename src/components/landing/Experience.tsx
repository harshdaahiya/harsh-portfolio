import { type Experience, experiences } from '@/config/Experience';
import Link from 'next/link';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import ExperienceList from '../experience/ExperienceList';
import { Button } from '../ui/button';

export default function Experience() {
  return (
    <Container>
      <SectionHeading subHeading="Experience" heading="Experience" />
      <ExperienceList experiences={experiences} />
      <div className="mt-7 flex justify-center">
        <Button variant={'outline'} size="lg">
          <Link href="/experiece" className="text-foreground">
            View All Experience
          </Link>
        </Button>
      </div>
    </Container>
  );
}
