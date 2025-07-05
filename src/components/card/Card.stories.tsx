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
    fullWidth: false,
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquam, aliquid architecto asperiores dignissimos dolorem error, facere facilis illo magni nam necessitatibus nobis non nostrum nulla optio perferendis quaerat quam ratione sequi tempore tenetur velit? Distinctio illum iusto labore modi molestias obcaecati possimus quas rerum sed? Accusamus amet at, aut facilis fugiat illo impedit ipsa, laboriosam laborum nam necessitatibus nobis odio officiis perspiciatis placeat, ratione rem repellat reprehenderit saepe sunt velit voluptas voluptate voluptatem voluptates voluptatum! Asperiores cum distinctio, hic nemo numquam qui ullam. Amet architecto fugit iusto omnis repellendus tenetur, unde. Aspernatur cumque dolor est modi molestias, numquam optio quibusdam voluptas. Accusantium aspernatur atque cumque distinctio error est, eveniet, fugiat hic id iste libero molestiae officia optio quisquam quos, sequi sit totam veritatis? Consequatur eaque esse, inventore magnam molestiae nihil soluta totam voluptate! Accusamus.`,
  },
};
