import { ComponentProps, FC, ReactNode } from 'react';
export type AlertProps = {
    /**
     * **Required**: The content of the alert (usually text or elements).
     */
    children: ReactNode;
    /**
     * Visual variant of the alert. Can be 'success' (green) or 'error' (red).
     * Defaults to no variant styling.
     */
    variant?: 'success' | 'error';
    /**
     * Callback fired when the close button is clicked.
     */
    onClose: () => void;
    /**
     * **Required**: If true, the alert can be closed via a close button.
     */
    withCloseIcon?: boolean;
    /**
     * If true, the alert stretches to the full width of its container.
     */
    fullWidth?: boolean;
    isOpen: boolean;
} & ComponentProps<'div'>;
export declare const Alert: FC<AlertProps>;
