import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary:
      'bg-secondary-container text-white font-bold hover:brightness-110 shadow-sm active:scale-95 transition-all saffron-glow',
    secondary:
      'bg-primary-container text-white font-bold hover:bg-primary shadow-sm active:scale-95 transition-all',
    outline:
      'border border-outline-variant/60 text-primary bg-surface-container-lowest hover:bg-surface-container transition-all',
    ghost:
      'text-primary hover:bg-surface-container-low transition-all',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs rounded-lg gap-1.5',
    md: 'px-5 py-2.5 text-sm rounded-xl gap-2',
    lg: 'px-7 py-3.5 text-base rounded-xl gap-2.5',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-semibold cursor-pointer select-none transition-transform duration-150',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
