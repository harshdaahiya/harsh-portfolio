import Experience from '@/components/landing/Experience';
import Hero from '@/components/landing/Hero';
import Projects from '@/components/landing/Projects';
import { getMetadata } from '@/config/MetaData';
import { Metadata } from 'next';

export const metadata: Metadata = getMetadata('/');

export default function Home() {
  return (
    <main className="min-h-screen animate-page-in">
      <Hero />
      <Experience />
      <Projects />
    </main>
  );
}
