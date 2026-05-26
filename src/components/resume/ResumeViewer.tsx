'use client';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Download, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import PageHeader from '../common/PageHeader';

interface ResumeViewerProps {
  urls: {
    embed: string;
    download: string;
    view: string;
  };
}

export default function ResumeViewer({ urls }: ResumeViewerProps) {
  const hostname =
    typeof window !== 'undefined' ? window.location.hostname : 'localhost';
  const isLocalhost =
    hostname === 'localhost' ||
    hostname === '127.0.0.1' ||
    hostname.startsWith('192.168.') ||
    hostname.startsWith('10.');

  const embedUrl = isLocalhost
    ? urls.embed
    : `https://docs.google.com/viewer?url=${encodeURIComponent(
        (typeof window !== 'undefined' ? window.location.origin : '') +
          urls.embed,
      )}&embedded=true`;

  return (
    <div className="space-y-6 animate-page-in">
      <div>
        <PageHeader heading="Resume" description="View or download my Resume" />

        {/* Action Controls Bar */}
        <div className="flex items-center gap-2 self-end sm:self-center mt-2">
          {/* Popout Button with Tooltip */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="size-9 rounded-full bg-transparent hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200 border-0 shadow-none"
              >
                <Link
                  href={urls.view}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Fullscreen"
                >
                  <ExternalLink className="size-4" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Open Fullscreen</p>
            </TooltipContent>
          </Tooltip>

          {/* Download Button with Tooltip */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="size-9 rounded-full bg-transparent hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200 border-0 shadow-none"
              >
                <Link
                  href={urls.download}
                  download="Harsh_Dahiya_Resume.pdf"
                  aria-label="Download Resume PDF"
                >
                  <Download className="size-4" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Download Resume</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      {/* Full-Size A4 Document Viewer */}
      <div className="relative w-full h-[70vh] md:h-[82vh] max-w-4xl rounded-xl border bg-card text-card-foreground shadow-2xl overflow-hidden mx-auto dark:border-input dark:bg-input/10">
        <iframe
          src={embedUrl}
          className="w-full h-full border-0"
          title="Harsh Dahiya Resume"
          allow="autoplay"
        />
      </div>
    </div>
  );
}
