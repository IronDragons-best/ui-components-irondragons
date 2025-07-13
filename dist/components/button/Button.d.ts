import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
export declare const buttonVariant: readonly ["primary", "secondary", "outline", "text_button"];
export type ButtonVariant = (typeof buttonVariant)[number];
export type ButtonOwnProps<T extends ElementType = 'button'> = {
    /**  * The element or component to render as. For example, 'button', 'a' etc. Default = 'button */
    as?: T;
    /**  * Makes the button take up the full width of its container. */
    fullWidth?: boolean;
    /**  * Visual style variant of the button.*/
    variant?: ButtonVariant;
    /**  * Disables the button.*/
    disabled?: boolean;
    /**  **Required**: Button content.*/
    children: ReactNode;
};
export type ButtonProps<T extends ElementType = 'button'> = ButtonOwnProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps<T>>;
export declare const Button: <T extends ElementType = "button">({ as, children, fullWidth, className, variant, ...rest }: ButtonProps<T>) => import("react/jsx-runtime").JSX.Element;
