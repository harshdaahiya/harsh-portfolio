'use client';

import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/config/Projects';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, PanInfo, motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Projects() {
  const router = useRouter();
  const [[activeIndex, direction], setActiveState] = useState([0, 0]);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const totalCards = projects.length + 1; // Projects list + 1 "View All" card

  // Listen to viewport changes for mobile responsiveness
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const slideNext = () => {
    if (activeIndex < totalCards - 1) {
      setActiveState([activeIndex + 1, 1]);
    }
  };

  const slidePrev = () => {
    if (activeIndex > 0) {
      setActiveState([activeIndex - 1, -1]);
    }
  };

  const handleDotClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveState([index, index > activeIndex ? 1 : -1]);
    }
  };

  // Drag snapping calculations for swipe gestures
  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const swipeThreshold = 50;
    const offset = info.offset.x;

    if (offset < -swipeThreshold) {
      slideNext();
    } else if (offset > swipeThreshold) {
      slidePrev();
    }

    // Set a tiny timeout so isDragging remains true until any click event on release fires and is blocked
    setTimeout(() => {
      setIsDragging(false);
    }, 50);
  };

  // Directional sliding variants for single card viewport
  const slideVariants = {
    enter: (dir: number) => ({
      x:
        dir > 0
          ? isMobile
            ? 350
            : 640
          : dir < 0
            ? isMobile
              ? -350
              : -640
            : 0,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
      },
    },
    exit: (dir: number) => ({
      x:
        dir < 0
          ? isMobile
            ? 350
            : 640
          : dir > 0
            ? isMobile
              ? -350
              : -640
            : 0,
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
      },
    }),
  };

  const isViewAll = activeIndex === projects.length;
  const activeProject = !isViewAll ? projects[activeIndex] : undefined;

  return (
    <div>
      {/* Header section */}
      <Container className="py-6 mt-4">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between">
          <SectionHeading subHeading="Portfolio" heading="Featured Projects" />
        </div>
      </Container>

      {/* Single Card Centered Viewport (with wide screen overflow clipping) */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-2">
        {/* Card slot container (overflow-visible to let card slide completely out) */}
        <div className="relative flex h-[360px] w-full max-w-[290px] items-center justify-center overflow-visible py-2 md:h-[440px] md:max-w-[600px]">
          <AnimatePresence custom={direction} mode="popLayout" initial={false}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.4}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              className="absolute h-full w-full cursor-grab active:cursor-grabbing"
            >
              <ProjectCard
                project={activeProject}
                isViewAll={isViewAll}
                onClick={(e) => {
                  if (isDragging) {
                    e.preventDefault();
                  }
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Buttons & Dots */}
        <div className="mt-8 flex items-center justify-center gap-6 md:mt-12">
          {/* Previous Slide Button */}
          <button
            onClick={slidePrev}
            disabled={activeIndex === 0}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:bg-muted hover:text-muted-foreground disabled:opacity-40 disabled:hover:bg-card disabled:hover:text-foreground md:h-12 md:w-12"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          {/* Capsule Pagination dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalCards }).map((_, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2.5 rounded-full transition-all duration-500 ease-in-out ${
                    isActive
                      ? 'w-7 bg-foreground'
                      : 'w-2.5 bg-muted hover:bg-muted'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              );
            })}
          </div>

          {/* Next Slide Button */}
          <button
            onClick={slideNext}
            disabled={activeIndex === totalCards - 1}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:bg-muted hover:text-muted-foreground disabled:opacity-40 disabled:hover:bg-card disabled:hover:text-foreground md:h-12 md:w-12"
            aria-label="Next Slide"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
