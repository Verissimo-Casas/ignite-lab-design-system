import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode,
  asChild?: boolean;
}

export function Button ({children, asChild, ...props}: ButtonProps) {
  const CompTag = asChild? Slot : 'button'

  return (
    <CompTag className={clsx(
        'py-3 px-4 bg-cyan-500 rounded text-black font-semibold text-base w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
      )}
      { ...props}
    >
      { children }
    </CompTag>
  )
}