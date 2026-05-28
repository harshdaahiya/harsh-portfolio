import Container from '@/components/common/Container';
import { getMetadata } from '@/config/MetaData';
import { Metadata } from 'next';

export const metadata: Metadata = getMetadata('/content');

export default function ContentPage() {
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
            <polygon points="23 7 16 12 23 17 23 7" />
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
          </svg>
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Content — Coming Soon
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-md leading-relaxed">
            Videos, shorts, and more are on the way. Building this space to
            share what I&apos;m learning and creating — it won&apos;t be long.
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
