import Container from '@/components/common/Container';
import ReactIcon, {
  ReactIconName,
} from '@/components/react-icons/ReactIconMap';
import { landingHeroConfig, socialLinks } from '@/config/LandingHero';
import { Link } from 'next-view-transitions';
import Image from 'next/image';

import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import GreetingInMultipleLanguage from './GreetingInMultipleLanguage';

export default function Hero() {
  return (
    <Container className="">
      <div className="flex items-center justify-between gap-2 py-10">
        <div className="flex flex-col gap-2">
          <GreetingInMultipleLanguage />
          <h1 className="text-3xl font-semibold">{landingHeroConfig.name}</h1>
          <p className="text-muted-foreground max-w-[500px] text-balance leading-relaxed">
            {landingHeroConfig.bio}
          </p>
          <div className="flex items-center gap-3 mt-8">
            {socialLinks.map((link) => (
              <Tooltip key={link.label} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link target="_blank" key={link.label} href={link.href}>
                    <ReactIcon
                      name={link.icon as ReactIconName}
                      size={22}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{link.label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
            <div />
          </div>
        </div>
        <Image
          src={landingHeroConfig.imageUrl}
          alt="Hero"
          width={100}
          height={100}
          className="h-70 w-100 rounded-md"
        />
      </div>
    </Container>
  );
}
