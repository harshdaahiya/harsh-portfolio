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
  icon: React.ReactNode;
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
      name: 'Contact',
      href: '/contact',
      icon: <LucideIcon name="mail" size={20} />,
    },

    {
      name: 'Journey',
      href: '/journey',
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
      icon: <LucideIcon name={'github'} size={20} />,
      href: '',
      heading: 'CONNECT',
    },
    {
      name: 'Linkedin',
      icon: <LucideIcon name={'linkedin'} size={20} />,
      href: '',
    },
    {
      name: 'X',
      icon: <LucideIcon name={'x'} size={20} />,
      href: '',
    },
    {
      name: 'Instagram',
      icon: <LucideIcon name={'instagram'} size={20} />,
      href: '',
    },
    {
      name: 'YouTube',
      icon: <LucideIcon name={'Youtube'} size={20} />,
      href: '',
    },
    {
      name: 'Print',
      icon: <LucideIcon name={'PrinterCheck'} size={20} />,
      href: '',
    },
  ],
};
