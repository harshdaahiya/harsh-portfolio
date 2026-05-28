'use client';

import { sendEmail } from '@/actions/sendEmail';
import { useState } from 'react';

interface ContactFormProps {
  defaultEmail?: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm({ defaultEmail = '' }: ContactFormProps) {
  const [email, setEmail] = useState(defaultEmail);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const result = await sendEmail({
      email: email.trim(),
      message: message.trim(),
    });

    if (result.success) {
      setStatus('success');
    } else {
      setStatus('error');
      setErrorMsg(result.error);
    }
  };

  // Success state
  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center gap-4 py-12 animate-in fade-in slide-in-from-bottom-2 duration-500">
        <div className="flex items-center justify-center size-12 rounded-full border border-border bg-muted/30 text-muted-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div className="space-y-1.5">
          <h2 className="text-lg font-semibold text-foreground">
            Message sent
          </h2>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Thanks for reaching out. I&apos;ll get back to you at{' '}
            <span className="text-foreground font-medium">{email}</span>.
          </p>
        </div>
      </div>
    );
  }

  // Form
  const isLoading = status === 'loading';

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-lg"
    >
      {/* Email field */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-email"
          className="text-sm font-medium text-foreground"
        >
          Your email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          placeholder="you@example.com"
          className="h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-muted-foreground/60 transition-colors disabled:opacity-50"
        />
      </div>

      {/* Message field */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-message"
          className="text-sm font-medium text-foreground"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isLoading}
          placeholder="What's on your mind?"
          className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-muted-foreground/60 transition-colors resize-none disabled:opacity-50"
        />
        <p className="text-xs text-muted-foreground/60 text-right">
          {message.length} / 2000
        </p>
      </div>

      {/* Error message */}
      {status === 'error' && errorMsg && (
        <p className="text-sm text-destructive animate-in fade-in duration-200">
          {errorMsg}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-md border border-border bg-foreground text-background text-sm font-medium cursor-pointer transition-all duration-150 hover:opacity-85 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin size-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending…
          </>
        ) : (
          'Send message'
        )}
      </button>
    </form>
  );
}
