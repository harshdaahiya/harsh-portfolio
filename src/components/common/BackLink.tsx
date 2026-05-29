import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'next-view-transitions';

interface BackLinkProps {
  href: string;
  label?: string;
  className?: string;
}

/**
 * Reusable navigation back link with animated arrow.
 * Uses next-view-transitions Link for smooth page transitions.
 */
export default function BackLink({
  href,
  label = 'Go Back',
  className,
}: BackLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground',
        className,
      )}
    >
      <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
      {label}
    </Link>
  );
}
