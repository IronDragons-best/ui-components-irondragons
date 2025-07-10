import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './Checkbox'

const meta = {
  argTypes: {
    onClick: { action: 'clicked' },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0D0D0D' }],
    },
  },
  args: {
    idProp: '1',
    label: 'Default label',
    disabled: false,
  },
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

/** Example of a standard, enabled checkbox */
export const EnabledChecked: Story = {
  args: {
    idProp: '1',
    label: 'Check-box',
    disabled: false,
  },
}

/** Example of a disabled checkbox (not checked) */
export const Disabled: Story = {
  args: {
    idProp: '2',
    label: 'Check-box disabled',
    checked: false,
    disabled: true,
  },
}

/** Example of a disabled checkbox that is checked */
export const DisabledChecked: Story = {
  args: {
    idProp: '2',
    label: 'Check-box disabled',
    checked: true,
    disabled: true,
  },

}
