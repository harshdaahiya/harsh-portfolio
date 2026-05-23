import Container from '@/components/common/Container';
import ProjectList from '@/components/projects/ProjectList';
import { Separator } from '@/components/ui/separator';
import { projects } from '@/config/Projects';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Projects | Portfolio',
  description:
    'A comprehensive showcase of my featured projects, engineering work, and custom full-stack software applications.',
};

export default function ProjectsPage() {
  return (
    <Container className="py-16">
      <div className="space-y-8 animate-page-in">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            My Projects
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            A comprehensive gallery of my professional engineering work and
            personal systems development.
          </p>
        </div>

        <Separator />

        {/* Projects Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              Featured Portfolio
              {projects.length > 0 && (
                <span className="text-muted-foreground ml-2 text-sm font-normal">
                  ({projects.length}{' '}
                  {projects.length === 1 ? 'project' : 'projects'})
                </span>
              )}
            </h2>
          </div>

          <ProjectList projects={projects} />
        </div>
      </div>
    </Container>
  );
}
