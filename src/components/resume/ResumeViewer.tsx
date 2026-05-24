'use client';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Download, Minus, Plus } from 'lucide-react';
import React, { useState } from 'react';

interface ResumeViewerProps {
  urls: {
    embed: string;
    download: string;
    view: string;
  };
}

export default function ResumeViewer({ urls }: ResumeViewerProps) {
  // Zoom levels: 80% (compact), 100% (default), 120% (wide)
  const [zoom, setZoom] = useState<80 | 100 | 120>(100);

  const handleZoomOut = () => {
    if (zoom === 120) setZoom(100);
    else if (zoom === 100) setZoom(80);
  };

  const handleZoomIn = () => {
    if (zoom === 80) setZoom(100);
    else if (zoom === 100) setZoom(120);
  };

  // Maps zoom level to max-width CSS classes
  const getZoomClass = () => {
    switch (zoom) {
      case 80:
        return 'max-w-2xl';
      case 120:
        return 'max-w-6xl';
      case 100:
      default:
        return 'max-w-4xl';
    }
  };

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
        <div className="flex items-center gap-3 self-end sm:self-center">
          {/* Zoom Buttons Group */}
          <div className="flex items-center border rounded-md bg-background shadow-xs overflow-hidden dark:border-input dark:bg-input/20 h-9">
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={handleZoomOut}
              disabled={zoom === 80}
              className="rounded-none border-r dark:border-input hover:bg-accent/50 size-9 flex items-center justify-center shrink-0"
              aria-label="Zoom Out"
            >
              <Minus className="size-4" />
            </Button>
            <span className="text-xs font-medium px-3 select-none min-w-[50px] text-center">
              {zoom}%
            </span>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={handleZoomIn}
              disabled={zoom === 120}
              className="rounded-none border-l dark:border-input hover:bg-accent/50 size-9 flex items-center justify-center shrink-0"
              aria-label="Zoom In"
            >
              <Plus className="size-4" />
            </Button>
          </div>

          {/* Download Button with Tooltip */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="size-9 shadow-xs hover:bg-foreground hover:text-background border-foreground/20 dark:border-input dark:hover:bg-foreground dark:hover:text-background transition-colors duration-200"
              >
                <a href={urls.download} aria-label="Download Resume PDF">
                  <Download className="size-4" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Download Resume</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      {/* Clean, Full-Size Dynamic A4 Document Viewer */}
      <div
        className={`relative w-full h-[82vh] rounded-xl border bg-card text-card-foreground shadow-2xl overflow-hidden mx-auto transition-all duration-300 dark:border-input dark:bg-input/10 ${getZoomClass()}`}
      >
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
