import { ComponentProps, InputHTMLAttributes, ReactElement } from 'react';
import { RadioGroup } from 'radix-ui';
export type RadioOptionsType = {
    id: string;
    radioName: string;
};
type Props = ComponentProps<typeof RadioGroup.Root> & InputHTMLAttributes<HTMLInputElement> & {
    /** **Required**:Array of radio button options*/
    options: RadioOptionsType[];
    /** Disables all radio buttons */
    selectedOption?: string;
};
export declare const Radio: ({ options, defaultValue, disabled, ...rest }: Props) => ReactElement;
export {};
