'use client';

import { ArrowUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function FooterEmailCapture() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleRedirect = () => {
    const trimmed = email.trim();
    if (!trimmed) {
      setError('Enter your email first.');
      return;
    }
    // Basic format check — full validation happens on /contact
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    if (!isValid) {
      setError('Please enter a valid email.');
      return;
    }
    setError('');
    router.push(`/contact?email=${encodeURIComponent(trimmed)}`);
  };

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center w-full max-w-sm rounded-full border bg-background p-1 pl-4 focus-within:border-muted-foreground/50 transition-colors">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError('');
          }}
          onKeyDown={(e) => e.key === 'Enter' && handleRedirect()}
          placeholder="Your email address"
          className="bg-transparent flex-1 outline-none text-sm placeholder:text-muted-foreground min-w-0"
          aria-label="Your email address"
        />
        <button
          type="button"
          onClick={handleRedirect}
          className="rounded-full bg-secondary text-secondary-foreground p-2 hover:opacity-80 active:scale-95 transition-all duration-150"
          aria-label="Go to contact page"
        >
          <ArrowUpRight size={16} />
        </button>
      </div>
      {error && <p className="text-xs text-destructive pl-4">{error}</p>}
    </div>
  );
}
