'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamic import with SSR disabled inside a Client Component wrapper (which is fully allowed in App Router)
const ResumeViewer = dynamic(() => import('./ResumeViewer'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[70vh] md:h-[82vh] rounded-xl border bg-muted/20 animate-pulse flex items-center justify-center text-muted-foreground text-sm font-medium">
      Loading Resume Viewer...
    </div>
  ),
});

export default function ResumeViewerWrapper({
  urls,
}: {
  urls: {
    embed: string;
    download: string;
    view: string;
  };
}) {
  return <ResumeViewer urls={urls} />;
}
