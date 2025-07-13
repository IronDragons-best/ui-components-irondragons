import type { StoryObj } from '@storybook/react';
declare const meta: {
    argTypes: {
        onClick: {
            action: string;
        };
        asChild: {
            table: {
                disable: boolean;
            };
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
    args: {
        idProp: string;
        label: string;
        disabled: false;
    };
    component: ({ label, idProp, className, disabled, ...props }: {
        idProp: string;
        label?: import("react").ReactNode;
        className?: string;
        disabled?: boolean;
        checked?: boolean;
    } & Omit<import("@radix-ui/react-checkbox").CheckboxProps & import("react").RefAttributes<HTMLButtonElement>, "ref">) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
/** Example of a standard, enabled checkbox */
export declare const EnabledChecked: Story;
/** Example of a disabled checkbox (not checked) */
export declare const Disabled: Story;
/** Example of a disabled checkbox that is checked */
export declare const DisabledChecked: Story;
