import type { Meta, StoryObj } from '@storybook/react'

import Selectbox from './Selectbox'


const meta = {
  argTypes: {
    onClick: { action: 'clicked' },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    idProp: '1',
    label: 'Default label',
    disabled: false,
  },
  component: Selectbox,
  tags: ['autodocs'],
  title: 'Components/Selectbox',
} satisfies Meta<typeof Selectbox>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    value: 'apple',
    children: 'Element apple',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0D0D0D' },
      ],
    },
  },
}
