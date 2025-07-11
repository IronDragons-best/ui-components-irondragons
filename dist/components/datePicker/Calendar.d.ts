import { type DateRange } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
type CalendarProps = {
    value?: DateRange | undefined;
    onChange?: (range: DateRange | undefined) => void;
};
export declare const Calendar: ({ value, onChange, ...rest }: CalendarProps) => import("react/jsx-runtime").JSX.Element;
export {};
