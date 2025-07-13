import type { StoryObj } from '@storybook/react';
declare const meta: {
    argTypes: {
        onClick: {
            action: string;
        };
        variant: {
            control: {
                type: string;
            };
            options: string[];
        };
    };
    parameters: {
        backgrounds: {
            default: string;
            values: {
                name: string;
                value: string;
            }[];
        };
    };
    component: <T extends import("react").ElementType = "button">({ as, children, fullWidth, className, variant, ...rest }: import("./Button").ButtonProps<T>) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
/**
 * Primary button example.
 */
export declare const Primary: Story;
/**
 * Disabled primary button example.
 */
export declare const Disabled: Story;
/**
 * Example of rendering the Button as a link (`<a>` tag).
 */
export declare const LinkButton: Story;
/**
 * Full-width button example.
 */
export declare const FullWidth: Story;
