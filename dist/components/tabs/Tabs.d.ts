import type { ReactNode } from 'react';
type Tab = {
    /** id current tab (for example: "tab1") */
    id: string;
    /**  The content of the tab   */
    label: ReactNode;
    /** Disabled Tab */
    disabled?: boolean;
};
type Props = {
    tabs: Tab[];
    /** id current tab (for example: "tab1") */
    value: Tab['id'];
    /** Change active tab */
    onValueChange: (val: Tab['id']) => void;
    /** * If true, the tab stretches to the full width of its container.  */
    fullWidth?: boolean;
    /** any children, for example <Tabs.Content /> */
    children?: ReactNode;
};
export declare const TabsComponent: ({ tabs, value, onValueChange, fullWidth, children, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
