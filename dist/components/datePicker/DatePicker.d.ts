import { DateRange } from 'react-day-picker';
type Props = {
    /** Initial value */
    value: DateRange | undefined;
    /** Label displayed above the select input */
    label: string;
    /** Callback called when a date is selected */
    onChange?: (range: DateRange | undefined) => void;
    /** Disables the select input */
    disabled?: boolean;
    /** Shows the error status */
    hasError?: boolean;
    /** Shows the error status Error message under the component if `hasError` = true */
    errorText?: string;
};
export declare const DatePicker: ({ value, label, onChange, hasError, errorText, disabled, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
