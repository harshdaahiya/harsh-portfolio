import Container from '@/components/common/Container';
import ExperienceList from '@/components/experience/ExperienceList';
import { experiences } from '@/config/Experience';
import { getMetadata } from '@/config/MetaData';
import { Metadata } from 'next';

export const metadata: Metadata = getMetadata('/experience');

export default function WorkExperiencePage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Work Experience</h1>
          <p className="text-muted-foreground">
            My work experiences across different companies and roles.
          </p>
        </div>
        {/* Work Experiences */}
        <div className="space-y-6">
          <ExperienceList experiences={experiences} />
        </div>
      </div>
    </Container>
  );
}
