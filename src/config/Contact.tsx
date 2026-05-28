export interface ContactConfig {
  title: string;
  description: string;
  connectDirectlyHeading: string;
  emailLabel: string;
  emailValue: string;
  linkedinLabel: string;
  linkedinValue: string;
  linkedinHref: string;
  philosophyQuote: string;
  formTitle: string;
  formDescription: string;
  emailInputLabel: string;
  emailInputPlaceholder: string;
  messageInputLabel: string;
  messageInputPlaceholder: string;
  submitButtonText: string;
  submittingButtonText: string;
  successTitle: string;
  successDescriptionBeforeEmail: string;
  successDescriptionAfterEmail: string;
  sendAnotherButtonText: string;
  returnHomeButtonText: string;
}

export const contactConfig: ContactConfig = {
  title: 'Send a message.',
  description:
    "Have an exciting opportunity, a project in mind, or just want to grab a virtual coffee? Drop me a line and let's start a conversation.",
  connectDirectlyHeading: 'Connect Directly',
  emailLabel: 'Email',
  emailValue: 'harshdaahiya@gmail.com',
  linkedinLabel: 'LinkedIn',
  linkedinValue: 'harshdaahiya',
  linkedinHref: 'https://linkedin.com/in/harshdaahiya',
  philosophyQuote:
    'I believe in building performant, visually stunning, and highly intuitive software that bridge the gap between engineering and art.',
  formTitle: 'Send a Message',
  formDescription: 'Fill out the form below to get in touch instantly.',
  emailInputLabel: 'Your Email Address',
  emailInputPlaceholder: 'name@example.com',
  messageInputLabel: 'Your Message',
  messageInputPlaceholder: 'Type your message here...',
  submitButtonText: 'Send Message',
  submittingButtonText: 'Delivering Message...',
  successTitle: 'Message Sent!',
  successDescriptionBeforeEmail:
    'Thanks for reaching out! Your message was delivered safely. I will read it and get back to you at ',
  successDescriptionAfterEmail: ' soon.',
  sendAnotherButtonText: 'Send another message',
  returnHomeButtonText: 'Home',
};
