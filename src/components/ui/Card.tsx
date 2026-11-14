import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  level?: 1 | 2;
  interactive?: boolean;
}

export function Card({
  className,
  level = 1,
  interactive = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl bg-surface-container-lowest border border-outline-variant/30 transition-all duration-300',
        level === 1 && 'card-depth-1',
        level === 2 && 'card-depth-2',
        interactive && 'hover-lift cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
