'use server';

import { contactEmailTemplate } from '@/emails/contactEmailTemplate';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  email: z.string().email('Please enter a valid email address.'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters.')
    .max(2000, 'Message must be under 2000 characters.'),
});

export type SendEmailResult =
  | { success: true }
  | { success: false; error: string };

export async function sendEmail(input: {
  email: string;
  message: string;
}): Promise<SendEmailResult> {
  const parsed = schema.safeParse(input);
  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message ?? 'Invalid input.';
    return { success: false, error: firstError };
  }

  const { email, message } = parsed.data;
  const to = process.env.RESEND_TO_EMAIL;

  if (!to) {
    console.error('RESEND_TO_EMAIL env var is not set.');
    return {
      success: false,
      error: 'Server configuration error. Please try again later.',
    };
  }

  try {
    await resend.emails.send({
      from: 'Harsh Portfolio <onboarding@resend.dev>',
      to,
      replyTo: email,
      subject: `New message from ${email} via portfolio`,
      html: contactEmailTemplate({ senderEmail: email, message }),
    });

    return { success: true };
  } catch (err) {
    console.error('Resend error:', err);
    return {
      success: false,
      error: 'Failed to send message. Please try again.',
    };
  }
}
