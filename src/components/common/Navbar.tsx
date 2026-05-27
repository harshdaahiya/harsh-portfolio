import { Button } from '@/components/ui/button';
import { navbarConfig } from '@/config/Navbar';
import { Link } from 'next-view-transitions';

import Container from './Container';
import { ThemeToggleButton } from './ThemeSwitch';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20">
      <Container className="rounded-md py-3 sm:py-4 px-3 sm:px-6 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <nav className="flex items-center gap-3 sm:gap-6">
            {navbarConfig.navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground font-medium text-sm sm:text-lg tracking-wide transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex">
            <div className="flex items-center gap-2 sm:gap-4">
              <Link href="/resume">
                <Button
                  variant="outline"
                  className="h-8 px-2.5 text-xs sm:h-9 sm:px-4 sm:text-sm cursor-pointer font-semibold tracking-wide transition-colors duration-200"
                >
                  Resume
                </Button>
              </Link>
              <ThemeToggleButton className="size-8 sm:size-10 [&_svg]:size-3.5 sm:[&_svg]:size-5" />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
