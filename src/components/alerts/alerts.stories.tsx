import type { Meta, StoryObj } from '@storybook/react'

import { Alert } from './'

const meta = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0D0D0D' }],
    },
  },
  argTypes: {
    onClose: { action: 'closed' },
  },
  component: Alert,
  tags: ['autodocs'],
  title: 'Components/Alerts',
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

/** Example of a success Alert */
export const Success: Story = {
  args: {
    children: 'Your settings are saved',
    variant: 'success',
    fullWidth: false,
    closable: true,
  },
}

/** Example of the error Alert */
export const Error: Story = {
  args: {
    children: 'Server is not available',
    variant: 'error',
    fullWidth: false,
    closable: true,
  },
}
