import { Metadata } from 'next';

import { landingHeroConfig } from './LandingHero';

// Define the structure of our site config
export const siteConfig = {
  name: landingHeroConfig.name,
  description: landingHeroConfig.bio,
  url: 'https://harshdahiya.com',
  ogImage: '/assets/Hero_Section_Img.png',
  links: {
    github: 'https://github.com/harshdaahiya',
    linkedin: 'https://linkedin.com/in/harshdaahiya',
    twitter: 'https://x.com/harshdaahiya',
  },
  authors: [
    {
      name: landingHeroConfig.name,
      url: 'https://github.com/harshdaahiya',
    },
  ],
};

// Define structure of page-specific metadata overrides
interface PageMeta {
  title: string;
  description: string;
  robots?: Metadata['robots'];
}

// Configuration map for each page's specific metadata
export const pagesConfig: Record<string, PageMeta> = {
  '/': {
    title: `${siteConfig.name} | Full Stack Engineer`,
    description: siteConfig.description,
  },
  '/projects': {
    title: `Projects | ${siteConfig.name}`,
    description:
      'A comprehensive showcase of my featured projects, engineering work, and custom full-stack software applications.',
  },
  '/experience': {
    title: `Work Experience | ${siteConfig.name}`,
    description: `Professional work experiences and software engineering roles of ${siteConfig.name}.`,
  },
  // Adding contact and others as requested/extensible placeholders
  '/contact': {
    title: `Contact | ${siteConfig.name}`,
    description: `Get in touch with ${siteConfig.name} for opportunities, collaborations, or questions.`,
  },
};

/**
 * Generates unified metadata for Next.js pages.
 * Integrates Robots, OpenGraph, Twitter, and default settings dynamically.
 *
 * @param path The URL route path (e.g. "/", "/projects", "/experience")
 * @returns Metadata object compatible with Next.js export
 */
export function getMetadata(path: string): Metadata {
  const page = pagesConfig[path] || pagesConfig['/'];
  const title = page.title;
  const description = page.description;
  const canonicalUrl = `${siteConfig.url}${path === '/' ? '' : path}`;

  // Default robots instructions suitable for public portfolio pages
  const defaultRobots: Metadata['robots'] = {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  };

  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    authors: siteConfig.authors,
    creator: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: page.robots || defaultRobots,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - Portfolio`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [siteConfig.ogImage],
      creator: '@harshdaahiya',
    },
  };
}
