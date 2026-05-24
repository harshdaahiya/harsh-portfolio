import Container from '@/components/common/Container';
import ResumeViewer from '@/components/resume/ResumeViewer';
import { getMetadata } from '@/config/MetaData';
import { Metadata } from 'next';

export const metadata: Metadata = getMetadata('/resume');

const RESUME_DRIVE_URL =
  'https://drive.google.com/file/d/1moZr-h3UBivPUmJfZ1FkJRL7cEBYXfrE/view?usp=drive_link';

function resolveDriveUrls(url: string) {
  const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9-_]+)/);

  if (fileIdMatch && fileIdMatch[1]) {
    const fileId = fileIdMatch[1];
    return {
      embed: `https://drive.google.com/file/d/${fileId}/preview`,
      download: `https://drive.google.com/uc?export=download&id=${fileId}`,
      view: `https://drive.google.com/file/d/${fileId}/view?usp=sharing`,
    };
  }
  return {
    embed: url,
    download: url,
    view: url,
  };
}

export default function ResumePage() {
  const urls = resolveDriveUrls(RESUME_DRIVE_URL);

  return (
    <Container className="py-12">
      <ResumeViewer urls={urls} />
    </Container>
  );
}
