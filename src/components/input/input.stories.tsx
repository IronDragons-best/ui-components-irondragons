import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'

/** A flexible input component with support for labels, validation, and responsive layout.  */
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
      table: {
        disable: true,
      },
    },
    placeholder: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Input>

/** Default email input  */
export const DefaultEmail: Story = {
  name: 'Default Email',
  args: {
    label: 'Email',
    placeholder: 'example@mail.com',
    inputType: 'email',
    id: 'emailInput',
  },
}
/** Default input with required field  */
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
/** Default input  */
export const DefaultInput: Story = {
  name: 'Default input',
  args: {
    label: 'Input',
    placeholder: 'example',
    inputType: 'text',
    id: 'defaultInput',
  },
}

/** Disabled input  */
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

/** Default input with password type */
export const DefaultPassword: Story = {
  name: 'Default password',
  args: {
    label: 'Password',
    placeholder: 'example',
    inputType: 'password',
    id: 'passwordInput',
  },
}

/** Default input with search type */
export const DefaultSearch: Story = {
  name: 'Default search',
  args: {
    label: 'search',
    placeholder: 'example',
    inputType: 'search',
    id: 'searchInput',
  },
}
/** Input with error */
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
/** Full size input */
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

/** input location */
export const InputLocation: Story = {
  name: 'Input location',
  args: {
    label: 'location',
    placeholder: 'location',
    inputType: 'location',
    fullWidth: false,
    id: 'LocationInput',
  },
}
