import Analytics from '@/components/analytics/Analytics';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import { ThemeProvider } from '@/components/common/ThemeProviders';
import { TooltipProvider } from '@/components/ui/tooltip';
import type { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';

import './globals.css';

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
      <html lang="en" className="scroll-smooth" suppressHydrationWarning>
        <body className={`font-hanken-grotesk antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>
              <Navbar />
              {children}
              <Footer />
            </TooltipProvider>
            <Analytics />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
