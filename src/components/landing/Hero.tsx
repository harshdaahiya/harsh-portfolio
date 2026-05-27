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
      <div className="flex items-center justify-between gap-4 py-8 md:py-16">
        <div className="flex flex-col md:gap-2">
          <GreetingInMultipleLanguage />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            {landingHeroConfig.name}
          </h1>
          <p className="text-muted-foreground max-w-[420px] md:max-w-[500px] text-sm md:text-base md:text-balance leading-relaxed">
            {landingHeroConfig.bio}
          </p>
          <div className="flex items-center gap-2.5 sm:gap-4 mt-8">
            {socialLinks.map((link) => (
              <Tooltip key={link.label} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link target="_blank" key={link.label} href={link.href}>
                    <ReactIcon
                      name={link.icon as ReactIconName}
                      className="size-4 md:size-6 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
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
        <BrowserDeveloperGraphic />
      </div>
    </Container>
  );
}
