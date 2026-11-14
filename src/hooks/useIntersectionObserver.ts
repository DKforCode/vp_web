'use client';

import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options: IntersectionObserverInit = { threshold: 0.15 }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(el);
      }
    }, options);

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { targetRef, isIntersecting };
}
