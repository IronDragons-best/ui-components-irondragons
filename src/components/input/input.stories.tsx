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
  name: 'Default Email',
  args: {
    label: 'Email',
    placeholder: 'example@mail.com',
    inputType: 'email',
    id: 'emailInput',
  },
}
export const DefaultInputWithRequiredField: Story = {
  name: 'Default input with required field',
  args: {
    label: 'Input',
    placeholder: 'example',
    inputType: 'text',
    id: 'defaultInput',
    required: true,
  },
}
export const DefaultInput: Story = {
  name: 'Default input',
  args: {
    label: 'Input',
    placeholder: 'example',
    inputType: 'text',
    id: 'defaultInput',
  },
}
export const DisabledInput: Story = {
  name: 'Disabled input',
  args: {
    label: 'This input is disabled',
    placeholder: 'example',
    inputType: 'text',
    id: 'defaultInput',
    disabled: true,
  },
}
export const DefaultPassword: Story = {
  name: 'Default password',
  args: {
    label: 'Password',
    placeholder: 'example',
    inputType: 'password',
    id: 'passwordInput',
  },
}
export const DefaultSearch: Story = {
  name: 'Default search',
  args: {
    label: 'search',
    placeholder: 'example',
    inputType: 'search',
    id: 'searchInput',
  },
}

export const InputsWithError: Story = {
  name: 'Input with error',
  args: {
    label: 'Email',
    placeholder: 'example@mail.com',
    errorText: 'Incorrect format',
    inputType: 'email',
    id: 'inputWithError',
  },
}

export const InputFullWidth: Story = {
  name: 'Input text',
  args: {
    label: 'text',
    placeholder: 'text',
    inputType: 'text',
    fullWidth: true,
    id: 'fullSizeInput',
  },
}
