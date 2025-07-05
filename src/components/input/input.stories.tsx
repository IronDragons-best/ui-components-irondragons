import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],

  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0D0D0D' }],
    },
  },
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['search', 'email', 'password'],
    },
    fullWidth: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta

type Story = StoryObj<typeof Input>

export const DefaultEmail: Story = {
  storyName: 'Default Email',
  args: {
    label: 'Email',
    placeholder: 'example@mail.com',
    type: 'email',
  },
}
export const DefaultInput: Story = {
  storyName: 'Default input',
  args: {
    label: 'Input',
    placeholder: 'example',
    type: 'text',
  },
}
export const DefaultPassword: Story = {
  storyName: 'Default password',
  args: {
    label: 'Password',
    placeholder: 'example',
    type: 'password',
  },
}
export const DefaultSearch: Story = {
  storyName: 'Default search',
  args: {
    label: 'search',
    placeholder: 'example',
    type: 'search',
  },
}

export const InputsWithError: Story = {
  storyName: 'Input with error',
  args: {
    label: 'Email',
    placeholder: 'example@mail.com',
    errorText: 'Incorrect format',
    type: 'email',
  },
}

export const InputFullWidth: Story = {
  storyName: 'Input text',
  args: {
    label: 'text',
    placeholder: 'text',
    type: 'text',
    fullWidth: true,
  },
}


