'use client';

import React, { useEffect, useState } from 'react';

const greetings = [
  'Hello', // English
  'Namaste', // Hindi
  'Hola', // Spanish
  'Bonjour', // French
  'Ciao', // Italian
  '你好', // Chinese
  'こんにちは', // Japanese
  '안녕하세요', // Korean
  'Olá', // Portuguese
  'Guten Tag', // German
];

export default function GreetingInMultipleLanguage() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out
      setFade(false);

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
        // Start fade in
        setFade(true);
      }, 500); // This matches half of the transition duration
    }, 2500); // Change text every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-[48px] sm:min-h-[64px]">
      <h1
        className={`text-2xl sm:text-4xl lg:text-5xl font-semibold text-muted-foreground tracking-tight transition-opacity duration-1000 ease-in-out ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {greetings[index]}
        <span className="text-primary">.</span>
      </h1>
    </div>
  );
}
