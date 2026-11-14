import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'surface';
}

export function Badge({ className, variant = 'primary', children, ...props }: BadgeProps) {
  const variantStyles = {
    primary: 'bg-primary-fixed text-on-primary-fixed border border-primary/10',
    secondary: 'bg-secondary-fixed text-on-secondary-fixed border border-secondary/15',
    outline: 'border border-outline-variant text-on-surface-variant bg-surface-container-lowest/80',
    surface: 'bg-surface-container text-primary font-medium border border-outline-variant/30',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase transition-all',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
