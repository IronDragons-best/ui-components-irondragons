import { DatePicker } from './DatePicker';
import type { Meta, StoryObj } from '@storybook/react';
declare const meta: Meta<typeof DatePicker>;
export default meta;
type Story = StoryObj<typeof DatePicker>;
/** Example of a default DatePicker */
export declare const Default: Story;
/** Example of a DatePicker with error */
export declare const WithError: Story;
/** Example of a disabled DatePicker */
export declare const Disabled: Story;
