import { ComponentPropsWithoutRef, FC } from 'react';
import { Select } from 'radix-ui';
import '../../styles/index.scss';
type LanguageType = 'rus' | 'eng';
type OptionType = {
    value: LanguageType | string;
    label: string;
    icon?: string;
};
type SelectboxProps = {
    /** **Required**: Unique ID for the Select. Trigger and associated label */
    idProp: string;
    /** **Required**: Name attribute for the form (useful when submitting forms) */
    name: string;
    /** **Required**: Array of options to choose from, each with a label (display text) and value */
    options: OptionType[];
    /** Placeholder text shown when no option is selected */
    placeholder?: string;
    /** Initial value */
    value?: string;
    /** Label displayed above the select input */
    label?: string;
    /** Disables the select input */
    disabled?: boolean;
    /** Additional CSS class names for the root element */
    className?: string;
    /** If true, the select input stretches to the full width of its container */
    fullWidth?: boolean;
    /** Callback fired when the selected value changes */
    onValueChange?: (value: string) => void;
    /** Callback fired when the dropdown opens or closes */
    onOpenChange?: (open: boolean) => void;
} & Omit<ComponentPropsWithoutRef<typeof Select.Root>, 'value' | 'onValueChange' | 'children'>;
export declare const Selectbox: FC<SelectboxProps>;
export {};
