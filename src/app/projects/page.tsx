import Container from '@/components/common/Container';
import PageHeader from '@/components/common/PageHeader';
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
        <PageHeader
          heading="My Projects"
          description="A comprehensive showcase of my featured architecture designs,
            production platforms, and engineering accomplishments."
        />

        <Separator />

        {/* Projects Sections */}
        <div className="pt-2">
          <ProjectList projects={projects} />
        </div>
      </div>
    </Container>
  );
}
