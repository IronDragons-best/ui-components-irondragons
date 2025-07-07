import type { StoryObj } from '@storybook/react';
declare const meta: {
    parameters: {
        backgrounds: {
            default: string;
            values: {
                name: string;
                value: string;
            }[];
        };
    };
    component: ({ children, fullWidth, size }: {
        size?: "sm" | "md" | "lg";
        children?: import("react").ReactNode;
        fullWidth?: boolean;
    }) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const PrimaryCard: Story;
