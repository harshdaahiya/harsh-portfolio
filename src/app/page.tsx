import Experience from '@/components/landing/Experience';
import Hero from '@/components/landing/Hero';
import Projects from '@/components/landing/Projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Harsh Dahiya | Full Stack Engineer',
  description:
    'Portfolio of Harsh Dahiya — Full Stack Engineer building products at Evoltsoft. Explore projects, work experience, and more.',
};

export default function Home() {
  return (
    <main className="min-h-screen animate-page-in">
      <Hero />
      <Experience />
      <Projects />
    </main>
  );
}
