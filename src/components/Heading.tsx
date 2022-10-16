import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface HeadingProps {
  size?: 'small' | 'medium' | 'large';
  children: ReactNode,
  asChild?: boolean;
  className?: string;
}

export function Heading ({size = 'medium', children, asChild, className}: HeadingProps) {
  const CompTag = asChild? Slot : 'h2'

  return (
    <CompTag className={clsx('text-gray-100 font-sans font-bold',
      {
        'text-lg': size === 'small',
        'text-xl': size === 'medium',
        'text-2xl': size === 'large',
      },
      className,
    )}
    >
      { children }
    </CompTag>
  )
}