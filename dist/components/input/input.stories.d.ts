import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
/** A flexible input component with support for labels, validation, and responsive layout.  */
declare const meta: Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof Input>;
/** Default email input  */
export declare const DefaultEmail: Story;
/** Default input with required field  */
export declare const DefaultInputWithRequiredField: Story;
/** Default input  */
export declare const DefaultInput: Story;
/** Disabled input  */
export declare const DisabledInput: Story;
/** Default input with password type */
export declare const DefaultPassword: Story;
/** Default input with search type */
export declare const DefaultSearch: Story;
/** Input with error */
export declare const InputsWithError: Story;
/** Full size input */
export declare const InputFullWidth: Story;
