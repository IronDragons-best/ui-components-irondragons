import type { StoryObj } from '@storybook/react';
declare const meta: {
    component: ({ options, defaultValue, disabled, ...rest }: import("@radix-ui/react-radio-group").RadioGroupProps & import("react").RefAttributes<HTMLDivElement> & import("react").InputHTMLAttributes<HTMLInputElement> & {
        options: import("./Radio").RadioOptionsType[];
        selectedOption?: string;
    }) => import("react").ReactElement;
    tags: string[];
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
        asChild: {
            table: {
                disable: boolean;
            };
        };
        disabled: {
            table: {
                disable: boolean;
            };
        };
    };
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
/**
 * ## Basic Usage
 * Shows default radio group with two options.
 */
export declare const RadioActive: Story;
/**
 * ## Disabled State
 * Shows radio group in disabled state.
 */
export declare const RadioDisabled: Story;
