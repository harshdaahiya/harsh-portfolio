import { LucideProps } from 'lucide-react';

import { Icons } from './LucideIconImport';

/**
 * Semantic mapping of icons.
 * This allows me to change the actual icon used without changing the string in my components.
 * For example: if I have to change the 'theme-toggle' icon from Sun to Moon, all components using 'theme-toggle' will update.
 */
export const IconMap = {
  // Brand Icons
  linkedin: Icons.Linkedin,
  x: Icons.Twitter,
  github: Icons.Github,
  instagram: Icons.Instagram,

  // UI Icons
  'chevron-down': Icons.ChevronDown,
  'chevron-up': Icons.ChevronUp,
  'chevron-left': Icons.ChevronLeft,
  'chevron-right': Icons.ChevronRight,
  menu: Icons.Menu,
  close: Icons.X,
  search: Icons.Search,
  settings: Icons.Settings,
  plus: Icons.Plus,
  check: Icons.Check,

  // Feature Icons
  home: Icons.Home,
  mail: Icons.Mail,
  star: Icons.Star,
  'external-link': Icons.ExternalLink,

  // Theme Icons
  sun: Icons.Sun,
  moon: Icons.MoonIcon,
} as const;

export type IconName = keyof typeof IconMap;

interface LucideIconProps extends LucideProps {
  name: IconName;
}

/**
 * A reusable, type-safe Lucide Icon component using semantic names.
 * Usage: <LucideIcon name="github" size={20} />
 */
const LucideIcon = ({ name, ...props }: LucideIconProps) => {
  const Icon = IconMap[name];

  if (!Icon) {
    console.warn(`Icon "${name}" not found in IconMap.`);
    return null;
  }

  return <Icon {...props} />;
};

export default LucideIcon;
