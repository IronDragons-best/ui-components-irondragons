import { ComponentPropsWithoutRef, ElementType } from 'react';
export declare const textAreaVariant: string[];
export type TextAreaVariant = (typeof textAreaVariant)[number];
export type TextAreaProps<T extends ElementType = 'textarea'> = {
    /**
     * Custom component or HTML element to render instead of the default 'textarea'.
     * Useful for styling or using a wrapper component.
     */
    as?: T;
    /**
     * Visual style variant for the TextArea (e.g. 'default', etc.).
     */
    variant?: TextAreaVariant;
    /**
     * Label text displayed above the TextArea.
     */
    label?: string;
    /**
     * If true, displays the component in an error state.
     */
    error?: boolean;
    /**
     * Error message shown below the TextArea when `error` is true.
     */
    errorText?: string;
    /**
     * If true, makes the TextArea take up the full width of its container.
     */
    fullWidth?: boolean;
    /**
     * **Required**: ID for Text area.
     */
    id: string;
    asChild?: boolean;
} & ComponentPropsWithoutRef<T>;
export declare const TextAreaComponent: <T extends ElementType = "textarea">(props: TextAreaProps<T>) => import("react/jsx-runtime").JSX.Element;
