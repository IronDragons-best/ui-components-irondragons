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
    argTypes: {
        onClose: {
            action: string;
        };
    };
    component: import("react").FC<import("./Alerts").AlertProps>;
    tags: string[];
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
/** Example of a success Alert */
export declare const Success: Story;
/** Example of the error Alert */
export declare const Error: Story;
