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

export const Default: Story = {
  storyName: 'Default Email',
  args: {
    label: 'Email',
    placeholder: 'example@mail.com',
    type: 'email',
  },
}

export const WithError: Story = {
  storyName: 'Email With Error',
  args: {
    label: 'Email',
    placeholder: 'example@mail.com',
    error: true,
    errorText: 'Неверный формат',
    type: 'email',
  },
}

export const Password: Story = {
  storyName: 'Password',
  args: {
    label: 'Пароль',
    placeholder: 'Введите пароль',
    type: 'password',
  },
}

export const CompactInput: Story = {
  storyName: 'Full Width Email',
  args: {
    label: 'Email',
    placeholder: 'mail@domain.com',
    type: 'email',
    fullWidth: true,
  },
}

export const CompactWithError: Story = {
  storyName: 'Full Width Email With Error',
  args: {
    label: 'Email',
    placeholder: 'username',
    error: true,
    errorText: 'Обязательное поле',
    type: 'email',
    fullWidth: true,
  },
}

export const CompactPassword: Story = {
  storyName: 'Full Width Password',
  args: {
    label: 'Пароль',
    type: 'password',
    placeholder: 'Не виден при пустом значении',
    fullWidth: true,
  },
}
