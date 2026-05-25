import Container from '@/components/common/Container';
import PageHeader from '@/components/common/PageHeader';
import ExperienceList from '@/components/experience/ExperienceList';
import { experiences } from '@/config/Experience';
import { getMetadata } from '@/config/MetaData';
import { Metadata } from 'next';

export const metadata: Metadata = getMetadata('/experience');

export default function WorkExperiencePage() {
  return (
    <Container className="py-10 sm:py-16">
      <div className="space-y-2">
        <PageHeader
          heading="Work Experience"
          description="My work experiences across different companies and roles."
        />
        {/* Work Experiences */}
        <div className="space-y-6">
          <ExperienceList experiences={experiences} />
        </div>
      </div>
    </Container>
  );
}
