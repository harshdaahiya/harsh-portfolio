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

interface ResumeViewerProps {
  urls: {
    embed: string;
    download: string;
    view: string;
  };
}

export default function ResumeViewer({ urls }: ResumeViewerProps) {
  return (
    <div className="space-y-6 animate-page-in">
      {/* Sleek Minimal Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resume</h1>
          <p className="text-muted-foreground text-sm mt-1">
            View or download my professional curriculum vitae.
          </p>
        </div>

        {/* Action Controls Bar */}
        <div className="flex items-center gap-2 self-end sm:self-center">
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

      {/* Clean, Full-Size A4 Document Viewer */}
      <div className="relative w-full h-[82vh] max-w-4xl rounded-xl border bg-card text-card-foreground shadow-2xl overflow-hidden mx-auto dark:border-input dark:bg-input/10">
        <iframe
          src={urls.embed}
          className="w-full h-full border-0"
          title="Harsh Dahiya Resume"
          allow="autoplay"
        />
      </div>
    </div>
  );
}
