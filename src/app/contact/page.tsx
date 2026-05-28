import Container from '@/components/common/Container';
import ContactForm from '@/components/contact/ContactForm';
import { getMetadata } from '@/config/MetaData';
import { Metadata } from 'next';

export const metadata: Metadata = getMetadata('/contact');

interface ContactPageProps {
  searchParams: Promise<{ email?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { email } = await searchParams;
  const defaultEmail =
    typeof email === 'string' ? decodeURIComponent(email) : '';

  return (
    <Container className="py-10 sm:py-20">
      <ContactForm defaultEmail={defaultEmail} />
    </Container>
  );
}
