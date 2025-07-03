import type { Meta, StoryObj } from '@storybook/react'

import { TextAreaComponent } from './'

const meta = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0D0D0D' }],
    },
  },
  argTypes: {
    id: {
      control: 'text',
      defaultValue: '1',
    },
    variant: {
      control: { type: 'radio' },
      options: ['default'],
      description: 'Variant of the TextArea',
      defaultValue: 'default',
    },
    label: {
      control: 'text',
      defaultValue: 'Text Area',
    },
    errorText: {
      control: 'text',
      defaultValue: 'Error text',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    asChild: {
      table: {
        disable: true,
      },
    },
    as: {
      table: {
        disable: true,
      },
    },
    resize: {
      table: {
        disable: true,
      },
    },
  },
  component: TextAreaComponent,
  tags: ['autodocs'],
  title: 'Components/TextArea',
} satisfies Meta<typeof TextAreaComponent>

export default meta
type Story = StoryObj<typeof meta>

/** Example of a default Text-area */
export const Default: Story = {
  args: {
    placeholder: 'Type something...',
    disabled: false,
    variant: 'surface',
    label: 'Text-area',
    resize: 'none',
    id: '1',
  },
}
