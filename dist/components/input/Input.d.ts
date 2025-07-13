import { InputHTMLAttributes } from 'react';
type InputVariant = 'search' | 'email' | 'password' | 'text';
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    /** Defines the visual style of the input (e.g., "search", "password", "text"). */
    inputType: InputVariant;
    /**  Optional label text displayed above the input field. */
    label?: string;
    /** Error message displayed below the input when error is true. */
    errorText?: string;
    /** 	If true, the input spans 100% of its container width. */
    fullWidth?: boolean;
};
export declare const Input: ({ id, label, inputType, errorText, disabled, fullWidth, required, ...rest }: InputProps) => import("react/jsx-runtime").JSX.Element;
export {};
