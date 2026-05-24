import { IconType } from 'react-icons';

import { ReactIcons } from './ReactIconImport';

/**
 * Semantic mapping of react-icons (FA6) social icons.
 * This allows changing the underlying icon without touching component code.
 * For example: if the Twitter icon brand changes, update here and all usages update.
 */
export const ReactIconMap = {
  // Social / Brand Icons (FA6)
  linkedin: ReactIcons.FaLinkedin,
  github: ReactIcons.FaGithub,
  twitter: ReactIcons.FaXTwitter,
  instagram: ReactIcons.FaInstagram,
  youtube: ReactIcons.FaYoutube,
  email: ReactIcons.FaEnvelope,
} as const;

export type ReactIconName = keyof typeof ReactIconMap;

interface ReactIconProps {
  name: ReactIconName;
  size?: number;
  className?: string;
}

/**
 * A reusable, type-safe React Icons component using semantic names.
 * Usage: <ReactIcon name="github" size={20} />
 */
const ReactIcon = ({ name, size = 20, className }: ReactIconProps) => {
  const Icon: IconType = ReactIconMap[name];

  if (!Icon) {
    console.warn(`ReactIcon "${name}" not found in ReactIconMap.`);
    return null;
  }

  return <Icon size={size} className={className} />;
};

export default ReactIcon;
