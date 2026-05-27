import { Button } from '@/components/ui/button';
import { navbarConfig } from '@/config/Navbar';
import { Link } from 'next-view-transitions';

import Container from './Container';
import { ThemeToggleButton } from './ThemeSwitch';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20">
      <Container className="rounded-md py-4 sm:py-6 px-4 sm:px-6 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <nav className="flex items-center gap-3 sm:gap-6">
            {navbarConfig.navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground font-medium text-sm sm:text-lg tracking-tight transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex">
            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeToggleButton />
              <Link href="/resume">
                <Button
                  variant="outline"
                  className="h-8 px-2.5 text-xs sm:h-9 sm:px-4 sm:text-sm cursor-pointer font-semibold tracking-tight duration-200"
                >
                  Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
