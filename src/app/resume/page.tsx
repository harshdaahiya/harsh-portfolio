import Container from '@/components/common/Container';
import ResumeViewer from '@/components/resume/ResumeViewer';
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
      <ResumeViewer urls={urls} />
    </Container>
  );
}
