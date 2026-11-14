'use client';

import { useState, useEffect, useRef } from 'react';

export function useAnimatedCounter(target: number, duration: number = 1800) {
  const [count, setCount] = useState<number>(0);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const startedRef = useRef<boolean>(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const startTime = performance.now();

            const updateCount = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              const currentVal = Math.floor(easeOut * target);

              setCount(currentVal);

              if (progress < 1) {
                requestAnimationFrame(updateCount);
              } else {
                setCount(target);
              }
            };

            requestAnimationFrame(updateCount);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [target, duration]);

  return { count, elementRef };
}
