import BackLink from '@/components/common/BackLink';
import Container from '@/components/common/Container';
import Skill from '@/components/common/Skills';
import AWS from '@/components/svgs/technologies/AWS';
import ExpressJs from '@/components/svgs/technologies/ExpressJs';
import Firebase from '@/components/svgs/technologies/Firebase';
import GCP from '@/components/svgs/technologies/GCP';
import NextJs from '@/components/svgs/technologies/NextJs';
import NodeJs from '@/components/svgs/technologies/NodeJs';
import Ocpi from '@/components/svgs/technologies/Ocpi';
import Ocpp from '@/components/svgs/technologies/Ocpp';
import PostgreSQL from '@/components/svgs/technologies/PostgreSQL';
import ReactIcon from '@/components/svgs/technologies/ReactIcon';
import SocketIo from '@/components/svgs/technologies/SocketIo';
import TailwindCss from '@/components/svgs/technologies/TailwindCss';
import TypeScript from '@/components/svgs/technologies/TypeScript';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { siteConfig } from '@/config/MetaData';
import { getProjectBySlug, projects } from '@/config/Projects';
import { Calendar, ExternalLink, Github, Terminal } from 'lucide-react';
import { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const techIconMap: Record<string, React.ReactNode> = {
  TypeScript: <TypeScript />,
  'Next.js': <NextJs />,
  React: <ReactIcon />,
  'Node.js': <NodeJs />,
  PostgreSQL: <PostgreSQL />,
  'Tailwind CSS': <TailwindCss />,
  AWS: <AWS />,
  Express: <ExpressJs />,
  Firebase: <Firebase />,
  WebSockets: <SocketIo />,
  GCP: <GCP />,
  'OCPP/OCPI': <Ocpp />,
  OCPP: <Ocpp />,
  OCPI: <Ocpi />,
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

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
 * Renders a labeled content section with an overline label.
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
      <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground/60">
        {label}
      </span>
      <p className="text-[15px] leading-[1.75] text-foreground/85">{content}</p>
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
    <Container className="py-12 md:py-16">
      <div className="animate-page-in">
        {/* Back Link */}
        <BackLink href="/projects" label="Back to Projects" />

        {/* Hero Section — side-by-side on desktop */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          {/* Left: Title + Meta + CTAs */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Badge
                variant="secondary"
                className="gap-1.5 text-xs font-medium"
              >
                <Calendar className="h-3 w-3" />
                {project.projectDuration}
              </Badge>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              {project.projectName}
            </h1>

            <p className="text-muted-foreground text-[15px] leading-relaxed">
              {project.projectDescription}
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-2 pt-1">
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9 hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                    asChild
                  >
                    <Link href={project.liveLink} target="_blank">
                      <ExternalLink className="size-5" />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{project.label}</p>
                </TooltipContent>
              </Tooltip>

              {project.githubLink && (
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9 hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                      asChild
                    >
                      <Link href={project.githubLink} target="_blank">
                        <Github className="size-5" />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Source Code</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-muted">
            {hasImage ? (
              <div className="relative aspect-16/10">
                <Image
                  src={project.projectImage}
                  alt={project.projectName}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  priority
                />
              </div>
            ) : (
              <div className="relative aspect-16/10">
                <div className="absolute inset-0 bg-linear-to-br from-violet-600/90 via-indigo-600/90 to-blue-600/90 flex items-center justify-center">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[16px_16px]" />
                  <span className="text-3xl font-black tracking-widest uppercase text-white/20 select-none">
                    {project.projectName}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content Body — narrower readable column */}
        <div className="mt-16 max-w-2xl space-y-10">
          {/* Structured Content Sections */}
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

          {/* Key Responsibilities */}
          {project.projectResponsibility.length > 0 && (
            <div className="space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground/60">
                Key Responsibilities
              </span>
              <ul className="space-y-3">
                {project.projectResponsibility.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-[15px] leading-[1.75] text-foreground/85">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Tech Stack — full width */}
        <div className="mt-14 space-y-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground/60">
            Tech Stack
          </span>
          <div className="flex flex-wrap gap-2">
            {project.projectSkills.map((skill) => {
              const icon = techIconMap[skill] || (
                <Terminal className="size-4 text-muted-foreground" />
              );
              return (
                <Skill key={skill} name={skill} href="">
                  {icon}
                </Skill>
              );
            })}
          </div>
        </div>

        {/* Screenshots Gallery */}
        {hasScreenshots && (
          <div className="mt-14 space-y-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground/60">
              Screenshots
            </span>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.screenshots!.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-video overflow-hidden rounded-xl border border-border bg-muted"
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
        )}
      </div>
    </Container>
  );
}
