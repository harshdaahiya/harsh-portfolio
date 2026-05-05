import { footer as FooterConfig } from '@/config/Footer';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Separator } from '../ui/separator';
import Container from './Container';

export default function Footer() {
  return (
    <div className="">
      <Separator className="mt-8" />
      <div className="">
        <Container>
          <div className="py-10 flex flex-col relative overflow-hidden">
            <div className="flex flex-col lg:flex-row justify-between gap-10 w-full">
              {/* Left Column */}
              <div className="flex flex-col gap-4 lg:w-5/12">
                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-medium text-muted-foreground tracking-tight leading-snug">
                    {FooterConfig.message.message}
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    {FooterConfig.message.subMessage}
                  </p>
                </div>

                <div className="flex flex-col gap-4 mt-6">
                  <div className="flex items-center w-full max-w-sm rounded-full border bg-background p-1 pl-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="bg-transparent flex-1 outline-none text-sm placeholder:text-muted-foreground"
                    />
                    <button className="rounded-full bg-secondary text-secondary-foreground p-2 hover:opacity-90 transition-opacity">
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Vertical Divider 1 */}
              <div className="hidden lg:block w-px bg-border my-4" />

              {/* Middle Column (Links) */}
              <div className="">
                <h2 className="text-md font-medium text-muted-foreground tracking-tight leading-snug">
                  {FooterConfig.navigate[0].heading}
                </h2>
                <div className="grid grid-cols-3 gap-x-20 gap-y-6 lg:w-3/12 pt-4">
                  {FooterConfig.navigate.map((item, index) => (
                    <Link
                      href={item.href}
                      key={index}
                      className="text-muted-foreground hover:text-foreground transition-colors text-md w-fit"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Vertical Divider 2 */}
              <div className="hidden lg:block w-1px bg-border my-4" />

              {/* Right Column (Socials) */}
              <div>
                <h2 className="text-md font-medium text-muted-foreground tracking-tight leading-snug">
                  {FooterConfig.socialIcons[0].heading}
                </h2>
                <div className="grid grid-cols-3 gap-x-14 gap-y-4 lg:w-3/12 pt-4">
                  {FooterConfig.socialIcons.map((item, index) => (
                    <Link
                      href={item.href}
                      key={index}
                      className="w-10 h-10 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                    >
                      {item.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Separator className="mt-8" />
            {/* Bottom Message */}
            <div className="mt-10 text-center text-md text-muted-foreground">
              © 2026 Harsh Dahiya @. All rights reserved.
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
