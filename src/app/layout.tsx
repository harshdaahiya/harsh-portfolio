import Analytics from '@/components/analytics/Analytics';
import Footer from '@/components/common/Footer';
import LenisSmoothScroll from '@/components/common/LenisSmoothScroll';
import Navbar from '@/components/common/Navbar';
import { ThemeProvider } from '@/components/common/ThemeProviders';
import { TooltipProvider } from '@/components/ui/tooltip';
import type { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';
import localFont from 'next/font/local';

import './globals.css';

const figtree = localFont({
  src: [
    {
      path: '../../public/fonts/Figtree-VariableFont_wght.ttf',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Figtree-Italic-VariableFont_wght.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-figtree',
});

export const metadata: Metadata = {
  title: 'Harsh Dahiya - Software Engineer Portfolio',
  description:
    'Portfolio of Harsh Dahiya, a software engineer specializing in full stack development',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${figtree.variable} font-sans antialiased`}
          suppressHydrationWarning
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>
              <LenisSmoothScroll>
                <Navbar />
                {children}
                <Footer />
              </LenisSmoothScroll>
            </TooltipProvider>
            <Analytics />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
