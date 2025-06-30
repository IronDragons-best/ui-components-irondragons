import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

const meta = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0D0D0D' }],
    },
  },
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryCard: Story = {
  args: {
    fullWidth: true,
    children: `hello`,
  },
};
