import Container from '@/components/common/Container';
import PageHeader from '@/components/common/PageHeader';
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
    <Container className="py-10 sm:py-16">
      <div className="space-y-8 mx-auto">
        <PageHeader
          heading="Get in Touch"
          description="Have something to say? Drop me a message and I'll get back to you."
        />
        <ContactForm defaultEmail={defaultEmail} />
      </div>
    </Container>
  );
}
