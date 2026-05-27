import Container from '@/components/common/Container';
import ReactIcon, {
  ReactIconName,
} from '@/components/react-icons/ReactIconMap';
import { landingHeroConfig, socialLinks } from '@/config/LandingHero';
import { Link } from 'next-view-transitions';

import { BrowserDeveloperGraphic } from '../svgs/graphics/BrowserDeveloperGraphic';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import GreetingInMultipleLanguage from './GreetingInMultipleLanguage';

export default function Hero() {
  return (
    <Container className="">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-4 py-10 md:py-16">
        <div className="flex flex-col gap-1 md:gap-2 shrink-0">
          <GreetingInMultipleLanguage />
          <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold tracking-tight text-foreground">
            {landingHeroConfig.name}
          </h1>
          <p className="text-muted-foreground max-w-sm sm:max-w-md md:max-w-[420px] text-sm md:text-base leading-relaxed">
            {landingHeroConfig.bio}
          </p>
          <div className="flex items-center gap-3 sm:gap-4 mt-5 md:mt-8">
            {socialLinks.map((link) => (
              <Tooltip key={link.label} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link target="_blank" href={link.href}>
                    <ReactIcon
                      name={link.icon as ReactIconName}
                      className="size-5 md:size-6 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{link.label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>

        <div className="hidden sm:block w-full">
          <BrowserDeveloperGraphic />
        </div>
      </div>
    </Container>
  );
}
