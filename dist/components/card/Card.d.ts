import { ReactNode } from 'react';
type cardSize = 'sm' | 'md' | 'lg';
type Props = {
    /**
     * Controls the card's padding and font scaling.
     * @default 'md'
     */
    size?: cardSize;
    /**
     * Content to render inside the card.
     * Accepts strings, JSX, arrays, etc.
     */
    children?: ReactNode;
    /**
     * When `true`, forces the card to occupy 100% of its parent's width.
     * @default false
     */
    fullWidth?: boolean;
};
export declare const Card: ({ children, fullWidth, size }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
