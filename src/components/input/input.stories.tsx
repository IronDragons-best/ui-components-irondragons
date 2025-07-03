import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['search', 'email', 'password'],
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
}

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'example@mail.com',
    type: 'email',
  },
}

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'example@mail.com',
    error: 'Неверный формат',
    type: 'email',
  },
}

export const Password: Story = {
  args: {
    label: 'Пароль',
    placeholder: 'Введите пароль',
    type: 'password',
  },
}

export const CompactInput: Story = {
  args: {
    label: 'Email',
    placeholder: 'mail@domain.com',
    type: 'email',
    fullWidth: false,
  },
}

export const CompactWithError: Story = {
  args: {
    label: 'Логин',
    placeholder: 'username',
    error: 'Обязательное поле',
    type: 'search',
    fullWidth: false,
  },
}

export const CompactPassword: Story = {
  args: {
    label: 'Пароль',
    type: 'password',
    placeholder: 'Не виден при пустом значении',
    fullWidth: false,
  },
}

export default meta
