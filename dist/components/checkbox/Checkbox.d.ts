import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Checkbox as RadixCheckbox } from 'radix-ui';
type CheckboxProps = {
    /** **Required**: Unique identifier for the checkbox */
    idProp: string;
    /** Label displayed next to the checkbox */
    label?: ReactNode;
    /** Additional class name for styling */
    className?: string;
    /** Disables the checkbox */
    disabled?: boolean;
    /** Controls the checked state (if controlled externally) */
    checked?: boolean;
} & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>;
export declare const Checkbox: ({ label, idProp, className, disabled, ...props }: CheckboxProps) => import("react/jsx-runtime").JSX.Element;
export {};
