import Container from '@/components/common/Container';
import ResumeViewerWrapper from '@/components/resume/ResumeViewerWrapper';
import { getMetadata } from '@/config/MetaData';
import { Metadata } from 'next';

export const metadata: Metadata = getMetadata('/resume');

export default function ResumePage() {
  const urls = {
    embed: '/harsh_portfolio_resume.pdf',
    download: '/harsh_portfolio_resume.pdf',
    view: '/harsh_portfolio_resume.pdf',
  };

  return (
    <Container className="py-12">
      <ResumeViewerWrapper urls={urls} />
    </Container>
  );
}
