import Container from '@/components/common/Container';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { siteConfig } from '@/config/MetaData';
import { getProjectBySlug, projects } from '@/config/Projects';
import { ArrowLeft, Calendar, ExternalLink } from 'lucide-react';
import { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { notFound } from 'next/navigation';

/**
 * Pre-generate all project slugs at build time for static export.
 */
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

/**
 * Dynamic SEO metadata per project.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const title = `${project.projectName} | ${siteConfig.name}`;
  const description = project.projectDescription;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      images: project.projectImage
        ? [{ url: project.projectImage, width: 1200, height: 630 }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

/**
 * Renders a labeled content section (Overview, Challenge, etc.).
 * Skips rendering entirely if content is empty/undefined.
 */
function ContentSection({
  label,
  content,
}: {
  label: string;
  content?: string;
}) {
  if (!content) return null;
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </h3>
      <p className="text-foreground/90 leading-relaxed">{content}</p>
    </div>
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const hasImage = !!project.projectImage;
  const hasScreenshots = project.screenshots && project.screenshots.length > 0;

  return (
    <Container className="py-16">
      <div className="space-y-10 animate-page-in">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="gap-1.5 text-xs font-medium">
              <Calendar className="h-3 w-3" />
              {project.projectDuration}
            </Badge>
          </div>

          <div className="flex items-start justify-between gap-4">
            <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
              {project.projectName}
            </h1>
            <div className="flex items-center gap-2 shrink-0">
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  Source
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              )}
              <Link
                href={project.liveLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                {project.label}
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            {project.projectDescription}
          </p>
        </div>

        {/* Hero Image */}
        {hasImage && (
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted">
            <Image
              src={project.projectImage}
              alt={project.projectName}
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Gradient fallback for missing images */}
        {!hasImage && (
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border">
            <div className="absolute inset-0 bg-linear-to-br from-violet-600/90 via-indigo-600/90 to-blue-600/90 flex items-center justify-center">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[16px_16px]" />
              <span className="text-4xl font-black tracking-widest uppercase text-white/20 select-none">
                {project.projectName}
              </span>
            </div>
          </div>
        )}

        <Separator />

        {/* Structured Content Sections */}
        <div className="space-y-8">
          <ContentSection
            label="Overview"
            content={project.projectContent.overview}
          />
          <ContentSection
            label="The Challenge"
            content={project.projectContent.challenge}
          />
          <ContentSection
            label="The Solution"
            content={project.projectContent.solution}
          />
          <ContentSection
            label="Impact"
            content={project.projectContent.impact}
          />
        </div>

        <Separator />

        {/* Key Responsibilities */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Key Responsibilities
          </h3>
          <ul className="space-y-3">
            {project.projectResponsibility.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-foreground/90 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Separator />

        {/* Tech Stack */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.projectSkills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="px-3 py-1 text-xs font-medium"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Screenshots Gallery */}
        {hasScreenshots && (
          <>
            <Separator />
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Screenshots
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {project.screenshots!.map((src, i) => (
                  <div
                    key={i}
                    className="relative aspect-video overflow-hidden rounded-lg border border-border bg-muted"
                  >
                    <Image
                      src={src}
                      alt={`${project.projectName} screenshot ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 448px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </Container>
  );
}
