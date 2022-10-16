import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface TextProps {
  size?: 'small' | 'medium' | 'large';
  children: ReactNode,
  asChild?: boolean;
  className?: string;
}

export function Text ({size = 'medium', children, asChild, className}: TextProps) {
  const CompTag = asChild? Slot : 'span'

  return (
    <CompTag className={clsx('text-gray-100','font-sans',
      {
        'text-lg': size === 'large',
        'text-md': size === 'medium',
        'text-sm': size === 'small',
      },
      className
    )}
    >
      { children }
    </CompTag>
  )
}