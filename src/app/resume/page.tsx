import Container from '@/components/common/Container';
import ResumeViewerWrapper from '@/components/resume/ResumeViewerWrapper';
import { getMetadata } from '@/config/MetaData';
import { Metadata } from 'next';

export const metadata: Metadata = getMetadata('/resume');

export default function ResumePage() {
  const urls = {
    embed: '/resume.pdf',
    download: '/resume.pdf',
    view: '/resume.pdf',
  };

  return (
    <Container className="py-12">
      <ResumeViewerWrapper urls={urls} />
    </Container>
  );
}
