'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import 'lenis/dist/lenis.css';
import { ReactLenis, useLenis } from 'lenis/react';
import React, { ReactNode, useEffect, useRef } from 'react';

function ElasticWrapper({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const yOffset = useMotionValue(0);
  const bounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const springY = useSpring(yOffset, {
    stiffness: 420,
    damping: 30,
    mass: 0.35,
  });

  const triggerBounce = (direction: 'top' | 'bottom', strength: number) => {
    const dist = Math.min(strength, 130);
    yOffset.set(direction === 'top' ? dist : -dist);
    if (bounceTimer.current) clearTimeout(bounceTimer.current);
    bounceTimer.current = setTimeout(() => yOffset.set(0), 50);
  };

  // Kinetic bounce from Lenis velocity — for long pages
  useLenis(({ scroll, limit, velocity }) => {
    if (limit <= 0) return;
    if (scroll <= 1 && velocity < -2) {
      triggerBounce('top', Math.abs(velocity) * 0.4);
    } else if (scroll >= limit - 2 && velocity > 2) {
      triggerBounce('bottom', Math.abs(velocity) * 0.4);
    }
  });

  // Wheel + touch bounce — handles short pages + persistent overscroll
  useEffect(() => {
    let touchStartY = 0;

    const isShort = () =>
      document.documentElement.scrollHeight <= window.innerHeight + 2;
    const atTop = () => window.scrollY <= 1;
    const atBottom = () =>
      window.scrollY >=
      document.documentElement.scrollHeight - window.innerHeight - 2;

    const handleWheel = (e: WheelEvent) => {
      if ((isShort() || atTop()) && e.deltaY < 0) {
        triggerBounce('top', Math.min(Math.abs(e.deltaY) * 0.45, 130));
      } else if ((isShort() || atBottom()) && e.deltaY > 0) {
        triggerBounce('bottom', Math.min(Math.abs(e.deltaY) * 0.45, 130));
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const delta = touchStartY - e.touches[0].clientY;
      if ((isShort() || atTop()) && delta < -10)
        triggerBounce('top', Math.min(Math.abs(delta) * 0.55, 120));
      else if ((isShort() || atBottom()) && delta > 10)
        triggerBounce('bottom', Math.min(Math.abs(delta) * 0.55, 120));
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      if (bounceTimer.current) clearTimeout(bounceTimer.current);
    };
  });

  return (
    <motion.div
      ref={containerRef}
      style={{ y: springY }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}

export default function LenisSmoothScroll({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.4,
        wheelMultiplier: 1.8,
        touchMultiplier: 2,
        smoothWheel: true,
      }}
    >
      <ElasticWrapper>{children}</ElasticWrapper>
    </ReactLenis>
  );
}
