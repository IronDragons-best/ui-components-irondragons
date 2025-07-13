import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Selectbox } from './Selectbox';
declare const meta: Meta<typeof Selectbox>;
export default meta;
type Story = StoryObj<typeof meta>;
/** Default selectbox with a label. */
export declare const Primary: Story;
/** Default selectbox without a label. */
export declare const PrimaryWithoutLabel: Story;
/** Disabled selectbox with a label. */
export declare const Disabled: Story;
/** Default a language selectbox without a label. */
export declare const PrimaryLanguage: StoryFn<typeof Selectbox>;
