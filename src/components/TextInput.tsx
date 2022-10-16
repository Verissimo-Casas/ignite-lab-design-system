import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot (props: TextInputRootProps){
  return (
    <div className='flex items gap-3 py-3 px-3 bg-gray-800  w-full focus-within:ring-2 ring-cyan-300 rounded'>
      { props.children }
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root';

export interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon (props: TextInputIconProps) {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      { props.children }
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInputIcon';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{}

function TextInputInput (props: TextInputInputProps) {

  return (
    <input className='bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400'
    {...props}
  />
  )
}

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}