import { footer as FooterConfig } from '@/config/Footer';
import Link from 'next/link';
import React from 'react';

import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import Container from './Container';

export default function Footer() {
  return (
    <div className="py-20">
      <Separator />
      <Container>
        <div className="flex flex-col gap-2 py-4 ">
          <div className="flex flex-col gap-1 items-center justify-center">
            {FooterConfig.message.mailIcon}
            <p className="text-foreground text-md tracking-tight">
              {FooterConfig.message.message}
            </p>
            <p className="text-foreground text-sm tracking-tight">
              {FooterConfig.message.subMessage}
            </p>
            <Button variant={'outline'}>
              {FooterConfig.message.buttonText}
            </Button>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <h3>{FooterConfig.navigate[0].heading}</h3>
              <div className="">
                {FooterConfig.navigate.map((item, index) => (
                  <Link
                    href={item.href}
                    key={index}
                    className="flex items-center gap-2"
                  >
                    {item.icon}
                    <p>{item.name}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3>{FooterConfig.socialIcons[0].heading}</h3>
              <div className="">
                {FooterConfig.socialIcons.map((item, index) => (
                  <Link
                    href={item.href}
                    key={index}
                    className="flex items-center gap-2"
                  >
                    {item.icon}
                    <p>{item.name}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
