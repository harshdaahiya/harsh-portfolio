'use client';

import { sendEmail } from '@/actions/sendEmail';
import { contactConfig } from '@/config/Contact';
import {
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Mail,
  MessageSquare,
  Send,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';

import ReactIcon from '../react-icons/ReactIconMap';

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
    if (status === 'loading') return;

    setStatus('loading');
    setErrorMsg('');

    const result = await sendEmail({
      email: email.trim(),
      message: message.trim(),
    });

    if (result.success) {
      setStatus('success');
      window.dispatchEvent(new CustomEvent('clear-footer-email'));
    } else {
      setStatus('error');
      setErrorMsg(result.error);
    }
  };

  const resetForm = () => {
    setEmail('');
    setMessage('');
    setStatus('idle');
    setErrorMsg('');
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
          <div className="space-y-4">
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold tracking-tight text-foreground leading-tight">
              {contactConfig.title}
            </h1>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md">
              {contactConfig.description}
            </p>
          </div>

          {/* Connect / Socials Section */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
              {contactConfig.connectDirectlyHeading}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href={`mailto:${contactConfig.emailValue}`}
                className="flex items-center gap-2.5 p-3 rounded-xl border border-border bg-muted/20 hover:bg-secondary/40 hover:border-muted-foreground/20 transition-all group text-sm"
              >
                <div className="size-8 rounded-lg bg-muted/30 flex items-center justify-center text-muted-foreground group-hover:scale-105 transition-transform">
                  <Mail size={15} />
                </div>
                <div className="truncate">
                  <p className="text-[10px] font-bold text-muted-foreground/60 uppercase">
                    {contactConfig.emailLabel}
                  </p>
                  <p className="text-xs font-semibold text-foreground truncate">
                    {contactConfig.emailValue}
                  </p>
                </div>
              </Link>

              <Link
                href={contactConfig.linkedinHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl border border-border bg-muted/20 hover:bg-secondary/40 hover:border-muted-foreground/20 transition-all group text-sm"
              >
                <div className="size-8 rounded-lg bg-muted/30 flex items-center justify-center text-muted-foreground group-hover:scale-105 transition-transform">
                  <ReactIcon
                    name="linkedin"
                    size={15}
                    className="text-muted-foreground"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground/60 uppercase">
                    {contactConfig.linkedinLabel}
                  </p>
                  <p className="text-xs font-semibold text-foreground flex items-center gap-0.5">
                    {contactConfig.linkedinValue}{' '}
                    <ExternalLink size={10} className="opacity-40" />
                  </p>
                </div>
              </Link>
            </div>

            <div className="p-4 border border-border bg-muted/10 rounded-xl text-xs text-muted-foreground leading-relaxed italic">
              &ldquo;{contactConfig.philosophyQuote}&rdquo;
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-7">
          <div className="relative rounded-3xl border border-border/80 bg-card/40 p-6 sm:p-8 md:p-10 shadow-xl backdrop-blur-md overflow-hidden">
            <div className="absolute -bottom-48 -right-48 h-96 w-96 rounded-full bg-muted/5 blur-[120px] pointer-events-none" />

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center justify-center text-center gap-6 py-12"
                >
                  <div className="relative">
                    {/* Ring Pulse */}
                    <div className="absolute inset-0 rounded-full bg-foreground/5 animate-ping opacity-75" />
                    <div className="relative flex items-center justify-center size-16 rounded-full border border-border bg-muted/20 text-foreground">
                      <CheckCircle2 size={32} />
                    </div>
                  </div>

                  <div className="space-y-2.5 max-w-sm">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground">
                      {contactConfig.successTitle}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {contactConfig.successDescriptionBeforeEmail}
                      <span className="text-foreground font-semibold">
                        {email}
                      </span>
                      {contactConfig.successDescriptionAfterEmail}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-xs pt-4">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="w-full h-11 px-5 rounded-xl border border-border bg-background hover:bg-secondary/40 text-sm font-semibold cursor-pointer transition-all duration-200 active:scale-98"
                    >
                      {contactConfig.sendAnotherButtonText}
                    </button>

                    <Link
                      href="/"
                      className="w-full h-11 px-5 rounded-xl bg-foreground hover:bg-foreground/90 text-background text-sm font-semibold flex items-center justify-center cursor-pointer transition-all duration-200 active:scale-98"
                    >
                      {contactConfig.returnHomeButtonText}
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="space-y-1">
                    <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                      <MessageSquare
                        size={18}
                        className="text-muted-foreground"
                      />
                      <span>{contactConfig.formTitle}</span>
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      {contactConfig.formDescription}
                    </p>
                  </div>

                  <div className="space-y-5">
                    {/* Email Input Field */}
                    <div className="space-y-1.5 group">
                      <label
                        htmlFor="contact-email"
                        className="text-xs font-bold text-muted-foreground uppercase tracking-wider group-focus-within:text-foreground transition-colors"
                      >
                        {contactConfig.emailInputLabel}
                      </label>
                      <div className="relative">
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={status === 'loading'}
                          placeholder={contactConfig.emailInputPlaceholder}
                          className="h-12 w-full rounded-xl border border-border bg-background/20 px-4 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none hover:bg-background/40 hover:border-muted-foreground/60 focus:bg-background/80 focus:border-muted-foreground focus:ring-4 focus:ring-muted/20 transition-all duration-200 disabled:opacity-50"
                        />
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/40 pointer-events-none group-focus-within:text-foreground transition-colors">
                          <Mail size={16} />
                        </div>
                      </div>
                    </div>

                    {/* Message Text Area */}
                    <div className="space-y-1.5 group">
                      <div className="flex justify-between items-center">
                        <label
                          htmlFor="contact-message"
                          className="text-xs font-bold text-muted-foreground uppercase tracking-wider group-focus-within:text-foreground transition-colors"
                        >
                          {contactConfig.messageInputLabel}
                        </label>
                        <span
                          className={`text-[10px] font-bold ${message.length > 1900 ? 'text-destructive font-extrabold' : 'text-muted-foreground/60'}`}
                        >
                          {message.length} / 2000
                        </span>
                      </div>
                      <textarea
                        id="contact-message"
                        required
                        rows={6}
                        maxLength={2000}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        disabled={status === 'loading'}
                        placeholder={contactConfig.messageInputPlaceholder}
                        className="w-full rounded-xl border border-border bg-background/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none hover:bg-background/40 hover:border-muted-foreground/60 focus:bg-background/80 focus:border-muted-foreground focus:ring-4 focus:ring-muted/20 transition-all duration-200 resize-none disabled:opacity-50 min-h-[140px]"
                      />
                    </div>
                  </div>

                  {/* Error Notification Block */}
                  {status === 'error' && errorMsg && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-2.5 p-3.5 rounded-xl border border-destructive/20 bg-destructive/5 text-destructive text-xs"
                    >
                      <AlertCircle size={15} className="shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Failed to send message</p>
                        <p className="opacity-90">{errorMsg}</p>
                      </div>
                    </motion.div>
                  )}

                  {/* Submit Button Block */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-foreground hover:bg-foreground/90 text-background text-sm font-semibold cursor-pointer transition-all duration-200 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed group/btn"
                  >
                    {status === 'loading' ? (
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
                        <span>{contactConfig.submittingButtonText}</span>
                      </>
                    ) : (
                      <>
                        <span>{contactConfig.submitButtonText}</span>
                        <Send
                          size={14}
                          className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
                        />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
