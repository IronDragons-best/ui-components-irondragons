// Sidebar.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
        default: 'dark',
        values: [
          { name: 'dark', value: '#0D0D0D' },
        ],
      },
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {},      // обязательно, чтобы StoryObj не ругался
  render: () => (  // убрали (args) =>, так как пропсов нет
   
        <Sidebar/>
  
  ),
};
