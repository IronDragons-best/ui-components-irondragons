import * as React from 'react';
import { Select } from 'radix-ui';
export declare const SelectItem: React.ForwardRefExoticComponent<{
    value: string;
    variant?: "default" | "pagination";
    children: React.ReactNode;
} & Omit<Select.SelectItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
