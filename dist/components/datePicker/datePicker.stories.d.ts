import type { StoryObj } from '@storybook/react';
declare const meta: {
    component: () => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
