import Container from '@/components/common/Container';
import { getMetadata } from '@/config/MetaData';
import { Metadata } from 'next';

export const metadata: Metadata = getMetadata('/blog');

export default function BlogPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="flex flex-col items-center justify-center text-center gap-5 min-h-[40vh]">
        {/* Icon */}
        <div className="flex items-center justify-center size-14 rounded-full border border-border bg-muted/30 text-muted-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            <line x1="9" y1="7" x2="15" y2="7" />
            <line x1="9" y1="11" x2="15" y2="11" />
          </svg>
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Blog — Coming Soon
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-md leading-relaxed">
            I&apos;m working on this. Writing about things I learn, build, and
            find interesting — will be live soon.
          </p>
        </div>

        {/* Subtle divider */}
        <div className="w-12 h-px bg-border mt-2" />

        <p className="text-xs text-muted-foreground/60 tracking-wide uppercase">
          Stay tuned
        </p>
      </div>
    </Container>
  );
}
