import LucideIcon from '@/components/lucide-icons/LucideIconMap';
import React from 'react';

export interface FooterMessage {
  mailIcon: React.ReactNode;
  message: 'Send me a mail';
  subMessage: 'feel free to reach out for collabration and frindly chat';
  buttonText: 'Send Email';
}

export interface FooterNavigate {
  name: string;
  href: string;
  icon: React.ReactNode;
  heading?: string;
}

export interface FooterSocialIcons {
  name: string;
  iconKey:
    | 'linkedin'
    | 'github'
    | 'twitter'
    | 'instagram'
    | 'youtube'
    | 'email';
  href: string;
  heading?: string;
}

export interface Footer {
  message: FooterMessage;
  navigate: FooterNavigate[];
  socialIcons: FooterSocialIcons[];
}

export const footer: Footer = {
  message: {
    mailIcon: <LucideIcon name={'mail'} size={20} />,
    message: 'Send me a mail',
    subMessage: 'feel free to reach out for collabration and frindly chat',
    buttonText: 'Send Email',
  },
  navigate: [
    {
      name: 'Home',
      href: '#',
      icon: <LucideIcon name="home" size={20} />,
      heading: 'NAVIGATE',
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: <LucideIcon name={'blog'} size={20} />,
    },
    {
      name: 'Projects',
      href: '/projects',
      icon: <LucideIcon name="star" size={20} />,
    },
    {
      name: 'Resume',
      href: '/resume',
      icon: <LucideIcon name="mail" size={20} />,
    },
    {
      name: 'Books',
      href: '/books',
      icon: <LucideIcon name={'Train'} size={20} />,
    },
    {
      name: 'Experience',
      href: '#experience',
      icon: <LucideIcon name="star" size={20} />,
    },
  ],
  socialIcons: [
    {
      name: 'Github',
      iconKey: 'github',
      href: 'https://github.com/harshdaahiya',
      heading: 'CONNECT',
    },
    {
      name: 'Linkedin',
      iconKey: 'linkedin',
      href: 'https://linkedin.com/in/harshdaahiya/',
    },
    {
      name: 'X',
      iconKey: 'twitter',
      href: 'https://x.com/harshdaahiya',
    },
    {
      name: 'Instagram',
      iconKey: 'instagram',
      href: 'https://instagram.com/harshdaahiya',
    },
    {
      name: 'YouTube',
      iconKey: 'youtube',
      href: 'https://www.youtube.com/@harshdaahiya',
    },
    {
      name: 'Email',
      iconKey: 'email',
      href: 'mailto:harshdaahiya@gmail.com',
    },
  ],
};
