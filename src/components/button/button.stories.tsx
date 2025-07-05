import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './'

const meta = {
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'outline', 'text_button'],
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0D0D0D' }],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Primary button example.
 */
export const Primary: Story = {
  args: {
    children: 'Primary',
    disabled: false,
    variant: 'primary',
  },
}

/**
 * Disabled primary button example.
 */
export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
    variant: 'primary',
  },
}

/**
 * Example of rendering the Button as a link (`<a>` tag).
 */
export const LinkButton: Story = {
  args: {
    children: 'Link',
    disabled: false,
    as: 'a',
    href: 'https://example.com',
    variant: 'text_button',
  },
}

/**
 * Full-width button example.
 */
export const FullWidth: Story = {
  args: {
    children: 'FullWith',
    disabled: false,
    variant: 'primary',
    fullWidth: true,
  },
}
