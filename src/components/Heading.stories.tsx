import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from "./Heading";

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Vai!!!!',
    size: 'medium',
  },

  argTypes: {
    size: {
      option: ['small', 'medium', 'large'],
      control: {
        type: 'inline-radio',
      }
    },
    asChild: {
      table: {
        disable: true,
      }
    }
  }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'small',
  }
}

export const large: StoryObj<HeadingProps> = {
  args: {
    size: 'large'
  }
}

export const CustomTagComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Text with H1 tag</h1>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    },
    
    asChild: {
      table: {
        disable: true,
      }
    }
  }
}