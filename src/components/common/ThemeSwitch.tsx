'use client';

import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

import LucideIcon from '../lucide-icons/LucideIconMap';
import { Button } from '../ui/button';

export const useThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Defer setting mounted state to the next paint frame to avoid synchronous render cascades
  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  const toggleTheme = () => {
    if (!mounted) return;
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return {
    isDark: mounted ? resolvedTheme === 'dark' : false,
    toggleTheme,
    mounted,
  };
};

export const ThemeToggleButton = ({
  className = '',
}: {
  className?: string;
  variant?: string;
  start?: string;
  blur?: boolean;
  gifUrl?: string;
}) => {
  const { isDark, toggleTheme, mounted } = useThemeToggle();

  if (!mounted) {
    return (
      <div
        className={cn(
          'size-10 rounded-md border bg-muted/20 animate-pulse',
          className,
        )}
      />
    );
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={cn(
        'size-10 cursor-pointer p-0 transition-all duration-200 hover:bg-muted active:scale-95 text-muted-foreground hover:text-foreground',
        className,
      )}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <LucideIcon
          name="sun"
          className="size-4 animate-in fade-in zoom-in spin-in-12 duration-300"
        />
      ) : (
        <LucideIcon
          name="moon"
          className="size-4 animate-in fade-in zoom-in -spin-in-12 duration-300"
        />
      )}
    </Button>
  );
};
