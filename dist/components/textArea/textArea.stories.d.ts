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
        id: {
            control: string;
            defaultValue: string;
        };
        variant: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
            defaultValue: string;
        };
        label: {
            control: string;
            defaultValue: string;
        };
        errorText: {
            control: string;
            defaultValue: string;
        };
        disabled: {
            control: string;
            defaultValue: boolean;
        };
        asChild: {
            table: {
                disable: boolean;
            };
        };
        as: {
            table: {
                disable: boolean;
            };
        };
        resize: {
            table: {
                disable: boolean;
            };
        };
    };
    component: <T extends import("react").ElementType = "textarea">(props: import("./TextArea").TextAreaProps<T>) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
/** Example of a default Text-area */
export declare const Default: Story;
