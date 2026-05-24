import LucideIcon from '@/components/lucide-icons/LucideIconMap';
import { Button } from '@/components/ui/button';
import { navbarConfig } from '@/config/Navbar';
import { Link } from 'next-view-transitions';

import Container from './Container';
import { ThemeToggleButton } from './ThemeSwitch';

export default function Navbar() {
  return (
    <Container className="sticky top-0 z-20 rounded-md py-4 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          {navbarConfig.navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-muted-foreground font-medium text-md tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex ">
          <div className="flex items-center gap-4">
            <Link href="/resume">
              <Button variant="outline">Resume</Button>
            </Link>
            <ThemeToggleButton />
          </div>
        </div>
      </div>
    </Container>
  );
}
