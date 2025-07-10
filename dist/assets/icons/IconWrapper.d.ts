import { FC, HTMLProps, ReactNode, SVGProps } from 'react';
export type IconProps = {
    /** Whether to scale icon according to font-size. Sets width and height to 1em. */
    autoSize?: boolean;
    /** Set icon fill background color from design system */
    backgroundColor?: string;
    /** Set icon fill color from design system */
    color?: string;
    /** Set width and height of icon in pixels */
    size?: number;
    /** Props to pass directly to svg element */
    svgProps?: SVGProps<SVGSVGElement>;
} & Omit<HTMLProps<HTMLSpanElement>, 'color' | 'size'>;
export declare const IconWrapper: FC<{
    icon: ReactNode;
} & IconProps>;
