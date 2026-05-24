import Container from '@/components/common/Container';
import ProjectList from '@/components/projects/ProjectList';
import { Separator } from '@/components/ui/separator';
import { getMetadata } from '@/config/MetaData';
import { projects } from '@/config/Projects';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = getMetadata('/projects');

export default function ProjectsPage() {
  return (
    <Container className="py-16">
      <div className="space-y-8 animate-page-in">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">
            My Projects
          </h1>
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
