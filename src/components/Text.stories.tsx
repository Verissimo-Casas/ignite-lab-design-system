import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from "./Text";

export default {
  title: 'Components/Text',
  component: Text,
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
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'small',
  }
}

export const large: StoryObj<TextProps> = {
  args: {
    size: 'large'
  }
}

export const CustomTagComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Text with P tag</p>
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