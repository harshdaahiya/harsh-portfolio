'use client';

import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

export const useThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handle = requestAnimationFrame(() => setMounted(true));
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

// Inline minimal SVGs — avoids polluting the icon map with toggle-specific icons
const SunIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="5" />
    <line x1="12" y1="19" x2="12" y2="22" />
    <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
    <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
    <line x1="2" y1="12" x2="5" y2="12" />
    <line x1="19" y1="12" x2="22" y2="12" />
    <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
    <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export const ThemeToggleButton = ({ className }: { className?: string }) => {
  const { isDark, toggleTheme, mounted } = useThemeToggle();

  // Skeleton — pill shaped to match the real button
  if (!mounted) {
    return (
      <div
        className={cn(
          'w-14 h-7 rounded-full border border-border bg-muted/30 animate-pulse',
          className,
        )}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        // Track
        'relative inline-flex h-7 w-14 shrink-0 cursor-pointer items-center rounded-full',
        'border border-border bg-muted/50 transition-colors duration-300',
        'hover:border-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className,
      )}
    >
      {/* Sliding circle */}
      <span
        className={cn(
          'absolute flex items-center justify-center',
          'size-5 rounded-full bg-background shadow-sm',
          'border border-border',
          'transition-all duration-300 ease-in-out',
          isDark
            ? 'translate-x-[30px] text-foreground'
            : 'translate-x-[3px] text-foreground',
        )}
      >
        {/* Icon — rotates + fades on switch */}
        <span
          key={isDark ? 'moon' : 'sun'}
          className="flex items-center justify-center transition-all duration-300 animate-in fade-in zoom-in-75 spin-in-90"
          style={{ animationDuration: '250ms' }}
        >
          {isDark ? <MoonIcon /> : <SunIcon />}
        </span>
      </span>

      {/* Subtle track label dots for orientation */}
      <span className="ml-[6px] text-[8px] text-muted-foreground/50 select-none leading-none">
        ☀
      </span>
      <span className="ml-auto mr-[6px] text-[8px] text-muted-foreground/50 select-none leading-none">
        ☾
      </span>
    </button>
  );
};
